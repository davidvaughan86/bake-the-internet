import "./components/CSS/Inventory.css";
import "./components/CSS/Nav.css";
import "./components/CSS/App.css";

import Baker from "./components/CSS/images/Baker.PNG";
import cake from "./components/CSS/images/cake.PNG";

import Card from "./components/Card";
import Nav from "./components/Nav";

function App() {
  return (
    <div className="App">
      <Nav />

      <div
        className="image"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <div>
          <h1
            style={{
              backgroundColor: "#00F5FF",
              border: "2px solid #FAF3E3",
              padding: "2%",
              boxShadow: "2px 2px 2px black",
              color: "FAF3E3",
              margin: "2%",
            }}
          >
            {" "}
            BAKE THE INTERNET
          </h1>

          <h3>AMAZING TASTY DELIGHTS</h3>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <img style={{ width: "50%" }} src={Baker} />
            <img style={{ width: "50%" }} src={cake} />
          </div>

          <b>
            The form below is to CONTACT US about placing an order. We will
            respond to your REQUEST.
          </b>
        </div>
      </div>
      <br />

      <Card />
    </div>
  );
}

export default App;
