const element = React.createElement(
  "h1",
  {
    id: "first",
    className: "head",
    style: { backgroundColor: "blue", fontSize: "30px", color: "white" },
  },
  "Hello from React"
);

// ReactDOM.render(element,document.getElementById('root'))

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(element);
