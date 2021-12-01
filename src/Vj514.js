import React, {useState} from 'react';

export default function Vj514() {
    const [tekst, setTekst] = useState('');
    const [submitTekst, setSubmitTekst] = useState('');

    const tekstChange = (e) => {
        const newTekst = e.target.value;

        setTekst(newTekst);
    }

    const handleSubmit = (e) => {
        e.preventDefault(); // da spriječimo da se forma refresha, tj. submita
    
        setSubmitTekst(tekst);
        setTekst(''); // brišemo tekst iz inputa da ne ostaje
    }

    return (<div>
        <h1>Vjezba 5.14</h1>
            <form onSubmit={handleSubmit}>
                <input name="tekst" value={tekst} onChange={tekstChange} /> 
                <input type="submit" value="Klikni" />
            </form>
            <p>Zadnje upisani tekst: {submitTekst}</p>
        </div>);
}
// event target je ovo <input value={tekst} onChange={tekstChange} /> , a .value dolazi iz inputa value