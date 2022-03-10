import { Link } from "react-router-dom"
function App() {
  return (
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/be-the-hero">Be The Hero</Link>
            </li>
          </ul>
        </nav>
      </div>
  );
}

export default App;
