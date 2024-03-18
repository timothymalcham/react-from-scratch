//
// React Implementation
//
const React = {
    // this function will be called on the lowest level children first, then the parent, then the parent of the parent, and so on
    createElement: (tag, props, ...children) => {
        // Handle a ReactComponent function, so we can construct the virtual DOM
        if (typeof tag === 'function') {
            return tag(props, ...children);
        }
        return {
            tag,
            props,
            children
        }
    }
}

const render = (element, container): void => {
    // handle edge cases like text nodes
    if (!element.tag) {
        // handle text nodes
        if (typeof element === 'string') {
            container.appendChild(document.createTextNode(element));
            return;
        }
    }
    // create the actual dom element from the virtual dom element
    const domElement = document.createElement(element.tag);
    // set props
    const elementProps = element.props ? Object.keys(element.props) : [];
    for (let i = 0; i < elementProps.length; i++) {
        domElement[elementProps[i]] = element.props[elementProps[i]];
    }
    // create the children of the virtual dom element
    if (element.children && Array.isArray(element.children)) {
        for (let j = 0 ; j < element.children.length; j++) {
            // render each child, the first element will be the container
            render(element.children[j], domElement);
        }
    }
    // append the dom node to the container
    container.appendChild(domElement);
}


//
// The actual app
//
// Virtual DOM
// Wrap the "ReactElement" in a "ReactComponent" (function)
const App = () => {
    const v = "A variable"
    return (
        <div draggable>
            <h2>Hello React!</h2>
            <p>{v}</p>
            <input type="text"/>
        </div>
    )
}
render(<App />, document.getElementById('root'));