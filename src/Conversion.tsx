import React, { useEffect, useState } from 'react'
import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const Conversion = () => {
    const [initialValue,setitialValue]=useState<number>(0);
    const [changeValue,setchangeValue]=useState<number>(0)
    const[from,setFrom]=useState<any>("m");
    const [to,setTo]=useState<any>("m");
    
    const [vfrom, vsetFrom] = useState<any>('l');
    const [vto, vsetTo] = useState<any>('l');
    const [vinitialValue, vsetinitialValue] = useState<number>(0);
    const [vchangeValue, vsetChangeValue] = useState<number>(0);

    useEffect(()=>
    {
        
        if(vfrom==="l" && vto==="l")
        {
            vsetChangeValue(vinitialValue);
        }
        else if(vfrom==="l" && vto==="ml")
        {
            vsetChangeValue(vinitialValue*1000);
        }
        else if(vfrom==="l" && vto==="cl")
        {
            vsetChangeValue(vinitialValue*100);   
        }
        else if(vfrom==="l" && vto==="dl")
        {
            vsetChangeValue(vinitialValue*10);  
        }

        if(vfrom==="ml" && vto==="ml")
        {
            vsetChangeValue(vinitialValue);
        }
        else if(vfrom==="ml" && vto==="l")
        {
            vsetChangeValue(vinitialValue*0.001);
        }
        else if(vfrom==="ml" && vto==="cl")
        {
            vsetChangeValue(vinitialValue*0.1);   
        }
        else if(vfrom==="ml" && vto==="dl")
        {
            vsetChangeValue(vinitialValue*0.01);  
        }

        if(vfrom==="cl" && vto==="cl")
        {
            vsetChangeValue(vinitialValue);
        }
        else if(vfrom==="cl" && vto==="l")
        {
            vsetChangeValue(vinitialValue*0.01);
        }
        else if(vfrom==="cl" && vto==="ml")
        {
            vsetChangeValue(vinitialValue*10);   
        }
        else if(vfrom==="cl" && vto==="dl")
        {
            vsetChangeValue(vinitialValue*0.1);  
        }

        if(vfrom==="dl" && vto==="dl")
        {
            vsetChangeValue(vinitialValue);
        }
        else if(vfrom==="dl" && vto==="l")
        {
            vsetChangeValue(vinitialValue* 0.1);
        }
        else if(vfrom==="dl" && vto==="ml")
        {
            vsetChangeValue(vinitialValue*100);   
        }
        else if(vfrom==="dl" && vto==="cl")
        {
            vsetChangeValue(vinitialValue*10);  
        }
    })

    useEffect(()=>
    {
      
        if(from==="m" && to==="cm")
        {
            setchangeValue(initialValue*100);
        }
        else if(from==="m" && to==="mm")
        {
            setchangeValue(initialValue*1000);
        } 
        else if(from==="m" && to==="km")
        {
            setchangeValue(initialValue*0.001);
        }
        else if(from==="m" && to==="m")
        {
            setchangeValue(initialValue);
        }

        
        if(from==="cm" && to==="cm")
        {
            setchangeValue(initialValue);
        }
        else if(from==="cm" && to==="mm")
        {
            setchangeValue(initialValue*10);
        } 
        else if(from==="cm" && to==="km")
        {
            setchangeValue(initialValue*0.00001);
        }
        else if(from==="cm" && to==="m")
        {
            setchangeValue(initialValue*0.01);
        }

        if(from==="km" && to==="km")
        {
            setchangeValue(initialValue);
        }
        else if(from==="km" && to==="mm")
        {
            setchangeValue(initialValue*1000000);
        } 
        else if(from==="km" && to==="cm")
        {
            setchangeValue(initialValue*100000);
        }else if(from==="km" && to==="m")
        {
            setchangeValue(initialValue*1000);
        }

        if(from==="mm" && to==="mm")
        {
            setchangeValue(initialValue);
        }
        else if(from==="mm" && to==="km")
        {
            setchangeValue(initialValue*0.000001);
        } 
        else if(from==="mm" && to==="cm")
        {
            setchangeValue(initialValue*0.1);
        }
        else if(from==="mm" && to==="m")
        {
            setchangeValue(initialValue*0.001);
        }
        
    });
  return (
    <div>
        <div className="container-fluid ">
                <div className="row col-md-12 justify-content-around ">
                    <div className="col-3 pl-4">
                        <div className="lefttt">
                            <div className="topp  ">
                                <h1 className="length">Length</h1>
                                <input className="linput " type="text" id="input"
                                    onChange={(e:any) =>{
                                    setitialValue(e.target.value);
                                    setchangeValue(e.target.value);}}
                                    value={initialValue}
                                />
                               
                                <select
                                    className="lselect"
                                    id="inputtype"
                                    value={from}
                                    onChange={(event) => {
                                        setFrom(event.target.value);}}>

                                <option value="m">Meter</option>
                                    <option value="cm">Centimeter</option>
                                    <option value="mm">millimeter</option>
                                    <option value="km">Kilometer</option>
                                </select>
                            </div>

                            <div className=" lbottom">
                            <input className="binput  " type="text" id="result"
                                    onChange={(e:any) =>{
                                    setitialValue(e.target.value);
                                    setchangeValue(e.target.value);}}
                                    value={changeValue}
                                />

                                <select className="bselect" id="resulttype" value={to}
                                    onChange={(event) => {setTo(event.target.value);}}>

                                    <option value="m">Meter</option>
                                    <option value="cm">Centimeter</option>
                                    <option value="mm">millimeter</option>
                                    <option value="km">Kilometer</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <div className="col-3">
                        <div className="righttt">
                            <div className="rtopp  ">
                                <h1 className="volume">Volume</h1>
                                <input className="lrinput " type="text" id="input"
                                    onChange={(e:any) =>{
                                    vsetinitialValue(e.target.value);
                                    vsetChangeValue(e.target.value);}}
                                    value={vinitialValue}
                                />
                                <select
                                    className="lrselect"
                                    id="inputtype"
                                    value={vfrom}
                                    onChange={(event) => {
                                        vsetFrom(event.target.value);}}>

                                <option value="l">Litre</option>
                                    <option value="ml">Milliliter</option>
                                    <option value="cl">Centiliter</option>
                                    <option value="dl">Deciliterr</option>
                                </select>
                            </div>

                            <div className="bottomm ">
                            <input className="lbinput  " type="text" id="result"
                                    onChange={(e:any) =>{
                                    vsetinitialValue(e.target.value);
                                    vsetChangeValue(e.target.value);}}
                                    value={vchangeValue}
                                />

                                <select className="lbselect" id="resulttype" value={vto}
                                    onChange={(event) => {vsetTo(event.target.value);}}>
                                        
                                    <option value="l">Litre</option>
                                    <option value="ml">Milliliter</option>
                                    <option value="cl">Centiliter</option>
                                    <option value="dl">Deciliter</option>
                                    </select>
                            </div>
                        </div>
                                </div>
                </div>

            </div>
        
    </div>
  )
}

export default Conversion