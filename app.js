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
        };
    }
};
//
// The actual app
//
// Wrap the "ReactElement" in a "ReactComponent" (function)
const App = () => {
    return (React.createElement("div", { draggable: true },
        React.createElement("h2", null, "Hello React!"),
        React.createElement("p", null, "I am a paragraph"),
        React.createElement("input", { type: "text" })));
};
console.log(React.createElement(App, null));
