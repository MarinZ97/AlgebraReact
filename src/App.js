import React from 'react';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null
    };
  }
    componentDidMount() {
      fetch('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
      .then(response => response.json())
      .then(nasaData => this.setState({data: nasaData}));
    };

  render() {
    if (!this.state.data) {
      return <div>Loading NASA data</div>
    }

    // Ovaj if može biti u render u ovom slučaju jer ili će biti samo ovo 
    // gore ili donji return, ali u našem slučaju if samo stoji dok se ne 
    // učita drugio dio
   
    const { title, url, explanation } = this.state.data; // izvuci tittle, url.. iz data
    return (
      <div>
        <h1>NASA picture of the day</h1>
        <h3>{title}</h3>
        <img src={url} alt={title} width={500} />
        <p>{explanation}</p>
      </div>
    );
  }
}

export default App;

/*
Fetch API
Imamo samo jedan url, stavimo Json koji radi response na body di 
upišemo putanju kaj želimo izvući iz objekata sta trazimo

// Ovo je za GET method
fetch(url) 
.then(response => response.json()) paket od response parsiramo u json i zato ide opet .then jer postaje promise 
.then(data => console.log(data)) i u ovoj zagradi onda radimo funkciju da odraduje sta trebamo

Ako želimo useEffect koristit samo jednom stavimo na kraju [], da će se izvršiti samo jednom i tjt kao DidIMount 

Imenik* ZADAĆA
Zapisat podatke u stateu i iz njega izvući podatke
prezime,ime, broj mobitela/telefona

Da prikaže abecedu gore i da kad se stisne slovo abecede da ispiše ta prezimena koja počinju na to slovo

da ispiše 3 inputa 
ime / prezime  / tel  i da sastrane bude X da može obrisati i olokvka da može edit
(edit) -> da se može promjeniti ime na postojećem inputu i druge stavke pa ažurirati





*/


