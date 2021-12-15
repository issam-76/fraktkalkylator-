import React, { useState } from "react";
import './App.css';
import cities from './cities.json';
import cities1 from './cities1.json';

import vikt  from "./vikt.json";
import typlist from "./typlist.json";




 
 

export default function App() {


   

 




 

    var [selectedOptions, setSelectedOptions] = useState([]);
    var [selectedOptions1, setSelectedOptions1] = useState([]);
    var [selectedOptions2, setSelectedOptions2] = useState([]);
    var [selectedOptions3, setSelectedOptions3] = useState([]);

     const [resultatValue, setresultatValue] = useState("");

    var [badge, Setbadge] = useState("");

    const [firstSelectValue, setFirstSelectValue] = useState("");
    const [codeFrom, setcodeFrom] = useState("");
    const [codeTo, setcodeTo] = useState("");
    const [codeTyp, setcodeTyp] = useState("");
    const [codeweight, setcodeWei] = useState("");
 
    const [secondSelectValue, setSecondSelectValue] = useState("");
    const [thirdSelectValue, setThirdSelectValue] = useState("");
    const [fourthSelectValue, setFourthSelectValue] = useState("");
     

    var [data, setData] = React.useState({

    });
   
    const handleInputChange = e => {
        const elem1 = e.target.value;
        setData({ ...data, elem1 });

    };

    const { elem1, elem2, elem3, elem4, elem5} = data;


    var [From] = [codeFrom];
    var [To] = [codeTo];
    var [Typ] = [codeTyp];
    var [Weight] = [codeweight];
    
    var result;
     


    const handleFirstSelectChange = (e) => {
        const value = e.target.value;
        const option = cities.find((o) => o.value === value);
        selectedOptions = cities.filter(value => cities.value === value);
        setSelectedOptions([...selectedOptions, option]);
        setFirstSelectValue(option.label);
        setcodeFrom(option.value);

       
     
        setresultatValue(option.value);


        const elem1 = e.target.value;
        setData({ ...data, elem1 });
        
        e.target.value = firstSelectValue;
         
        

             

    };


    const handleSecondSelectChange = (e) => {
        const value1 = e.target.value;
        const option1 = cities.find((o) => o.value === value1);
        selectedOptions1 = cities.filter(value => cities.value === value1);
        setSelectedOptions1([...selectedOptions1, option1]);
        setSecondSelectValue(option1.label);
        setcodeTo(option1.value);

        const elem2 = e.target.value;
        setData({ ...data, elem2 });
        

         
    };

    const handleThirdSelectChange = (e) => {
        const value2 = e.target.value;
        const option2 = typlist.find((o) => o.value === value2);
        selectedOptions2 = typlist.filter(value => typlist.value === value2);
        setSelectedOptions2([...selectedOptions2, option2]);
        setThirdSelectValue(option2.label);
        setcodeTyp(option2.value);


        const elem3 = e.target.value;
        setData({ ...data, elem3 });

    };

    const handleFourthSelectChange = (e) => {
        const value3 = e.target.value;
        const option3 = vikt.find((o) => o.value === value3);
        selectedOptions3 = vikt.filter(value => vikt.value === value3);
        setSelectedOptions3([...selectedOptions3, option3]);
        setFourthSelectValue(option3.label);
        setcodeWei(option3.value);



         
        const elem4 = e.target.value;
        setData({ ...data, elem4 });


        if (elem1 === '1' && elem2 === '1' && elem3 === '2' && elem4 === '1') {
            const elem5 = "99";
            setData({ ...data, elem5 });
        }

        if (elem1 === '1' && elem2 === '2' && elem3 === '2' && elem4 === '1') {
            const elem5 = "199";
            setData({ ...data, elem5 });
        }
    };


   



   

 
    return (

      
         
        
       

            <React.Fragment>
                <body class="bg-light">


               

                <div class="container">
                    <div class="rowg">
                    <div class="rowh text-center">
                            <small class="text-muted"><h2>R&auml;kna ut fraktkostnad Expressbud</h2>
                            </small>

                            
                            <small class="text-muted">Fyll i information om din s&auml;ndning inklusive destination, ursprung, s&auml;ndningsdatum och vikt.
</small>

 
                        
                        </div>
                    </div>

                    <div class="rowx">
                       
                        

                        <div class="col-md-3 mb-3">
                            <label for="country">Upph&auml;mtningsadress</label>

                            <select class="custom-select d-block w-100" onChange={handleFirstSelectChange} value={From} >
                                <option disabled value="">
                                    select an option
                                </option>
                                {cities.map((option, i) => (
                                    <option
                                        key={option.value}
                                        value={option.value}
                                        label={option.label}
                                        text={option.label}
                                    >
                                         
                                    </option>
                                ))}
                            </select>


                           
                            

                             
                            <hr />
                            <label for="state">Leverans typ</label>

                            <select class="custom-select d-block w-100" onChange={handleThirdSelectChange} value={Typ} >
                                <option disabled value="">
                                    select an option
                                </option>
                                {typlist.map((option, i) => (
                                    <option
                                        key={option.value}
                                        value={option.value}
                                        label={option.label}
                                        text={option.label}
                                    >

                                    </option>
                                ))}
                            </select>
                            <hr />
                        </div>
                        <div class="col-md-3 mb-3">
                            <label for="state">Mottagare</label>
                            <select class="custom-select d-block w-100" onChange={handleSecondSelectChange} value={To} >
                                <option disabled value="">
                                    select an option
                                </option>
                                {cities1.map((option, i) => (
                                    <option
                                        key={option.value}
                                        value={option.value}
                                        label={option.label}
                                        text={option.label}
                                    >

                                    </option>
                                ))}
                            </select>
                            <hr />
                            <label for="state">Vikt</label>
                          
                            <select class="custom-select d-block w-100" onChange={handleFourthSelectChange} value={Weight} >
                                <option disabled value="">
                                    select an option
                                </option>
                                {vikt.map((option, i) => (
                                    <option
                                        key={option.value}
                                        value={option.value}
                                        label={option.label}
                                        text={option.label}
                                    >

                                    </option>
                                ))}
                            </select>
                                
                          
                           
                            <hr />
                        </div>

                       
                            
                                    
          

                      

                     

                       

                        
                        <div class="col-md-6 mb-3">
                            <h4 class="d-flex justify-content-between align-items-center mb-3">
                                <span class="text-muted">Resultat:</span>
                                <span class="badge badge-secondary badge-pill">{elem4}</span>
                            </h4>
                            <ul class="list-group mb-3">
                                <li class="list-group-item d-flex justify-content-between lh-condensed">
                                    <div>
                                        <small class="text-muted">Upph&auml;mtningsadress</small>
                                    </div>
                                    <small class="text-muted">{firstSelectValue}</small>
                                    <input type="hidden" name="from" value={resultatValue} onChange={handleInputChange} /> 

                                </li>
                                <li class="list-group-item d-flex justify-content-between lh-condensed">
                                    <div>
                                        <small class="text-muted">Mottagare</small>
                                    </div>
                                    <small class="text-muted">{secondSelectValue}</small>
                                </li>
                                <li class="list-group-item d-flex justify-content-between lh-condensed">
                                    <div>
                                        <small class="text-muted">Leverans typ</small>
                                    </div>
                                    <small class="text-muted">{thirdSelectValue}</small>
                                </li>
                                <li class="list-group-item d-flex justify-content-between lh-condensed">
                                    <div>
                                        <small class="text-muted">Vikt</small>
                                    </div>
                                    <small class="text-muted" >{fourthSelectValue}</small>
                                </li>
                                <li class="list-group-item d-flex justify-content-between bg-light">
                                    <div class="text-success">
                                        <small>EXAMPLECODE</small>
                                    </div>
                                    <span class="text-success">{elem5} Kr</span>
                                </li>
                                <li class="list-group-item d-flex justify-content-between">
                                    <span>Total (SEK)</span>
                                    <strong>{result}</strong>
                                </li>
                            </ul>

                        </div>
                    </div>







                    
                     </div>
                 </body>



           </React.Fragment>




                
    );
}