const element = React.createElement(
  "h1",
  {},

  "Hello from React"
);

// ReactDOM.render(element,document.getElementById('root'))

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(element);
