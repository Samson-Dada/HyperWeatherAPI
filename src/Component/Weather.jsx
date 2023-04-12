const Weather = props => {
  return (
    <div className="App">
      <input onChange={props.city} type={props.city} placeholder="Enter City" />
      <h2>{props.name}</h2>
      <p>Temperature: {props.temp}</p>
      <p>Description: {props.desc}</p>
    </div>
  );
};

export default Weather;
