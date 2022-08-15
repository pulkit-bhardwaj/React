import './App.css';

let name = "Pulkit";
function App() {
  return (
    <>
    <nav>
      <li>Home</li>
      <li>About</li>
      <li>Contact</li>
    </nav>
    <div className="container">
      <h1>Hello {name}</h1>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis corporis eius repudiandae provident nisi facilis cumque commodi? Dolor aliquid enim doloremque! Dignissimos officiis, sunt explicabo iure molestias perferendis quis possimus.</p>
    </div>
    </>
  );
}

export default App;
