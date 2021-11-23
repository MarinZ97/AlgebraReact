import React from 'react';
import Counter from './Counter';
import Button from './Button';

//export const divider = 3; mozemo exportat varijablu iz novog filea u drugi
// i ubacujemo ga kao import {divider} from './ime filea'
const divider = 3; //globalna varijabla za ovaj file jer je izvan klase

export default class Vj2311 extends React.Component {
    state = {
        total: 0,
        count3: 0,
        lastDivisible: 0
    }

    // divider = 3; //necemo const jer smo u klasi

    makeAdd = () => {
        const newTotal = this.state.total + 1;
        let newCount3 = this.state.count3;
        //let newLastDivisible = this.state.lastDivisible // u najgorem slučaju je isto što je i bilo da ima istu vrijednst kakva je u objektu gore
       
       if(newTotal % divider === 0) {
           newCount3++;
           //newLastDivisible = newTotal;
       }
        this.setState( {total: newTotal, count3: newCount3});// stavili smo objekt total da ne pregazimo gore nego da dodamo samo
    }

    render() {
        return (<div>
            <Counter totalCount={this.state.total}
                    count3={this.state.count3}
                    last={this.state.count3 * divider} />
            <Button onBtnClick={this.makeAdd}/>
        </div>)
    }
}

//u state se stavlja samo kada se nešto mjenja, divider ne želimo mjenjat pa nismo stavili u state