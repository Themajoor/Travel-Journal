import Header from "./Components/Header";
import "./App.css";
import Location from "./Components/Location";
import data from "./data";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="location-container">
        {data.map((item) => (
          <Location
            img={item.img}
            country={item.country}
            googleMapLink={item.googleMapLink}
            location={item.location}
            date={item.date}
            writeUp={item.writeUp}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
