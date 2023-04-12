import "../Component/Weather.css";
const Weather = props => {
  return (
    <section>
      <input onChange={props.city} type={props.city} placeholder="Enter City" />
      <div className="container">
        <h2>City: {props.name}</h2>
        <p className="text">Temperature: {props.temp} </p>
        <p className="text">Weather Status: {props.main}</p>
        <p className="text">Description: {props.desc}</p>
      </div>
    </section>
  );
};

export default Weather;
