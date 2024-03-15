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

//
// The actual app
//
// Wrap the "ReactElement" in a "ReactComponent" (function)
const App = () => {
    return (
        <div draggable>
            <h2>Hello React!</h2>
            <p>I am a paragraph</p>
            <input type="text"/>
        </div>
    )
}
console.log(<App />);