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

   
    const { title, url, explanation } = this.state.data; 
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

- UseEffect se stavi nešto iz state-a inače, ona se zove kada se učitava komponenta i kada
 se pozove kada se odradi nešto, uglate zagrade označavaju kada će se drugi put zvat, ako 
 su prazne onda uvijek na promjenu, ako je nešto iz statea onda kada se to promjeni
- keyCode - 13 je enter pa da ne pišemo string napišemo broj
- ? predstavlja da provjerava ako nešto nije null onda radi poslije uputnika, a koje null onda ništa ne radi
npr. -> user?.map() 


*/


