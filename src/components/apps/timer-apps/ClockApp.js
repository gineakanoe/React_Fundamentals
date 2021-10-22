import React, {useState, useEffect} from 'react';
import './clockApp.css';

const getTimeString = () => {
    const date = new Date(Date.now()).toLocaleTimeString();
    return date;
}

const getTimeString2 = () => {
    const date2 = new Date(Date.now()).toLocaleTimeString('en-US', {timeZone: 'America/Los_Angeles'});
    return date2;
}

const getTimeString3 = () => {
    const date3 = new Date(Date.now()).toLocaleTimeString('en-US', {timeZone: 'MST'});  // how to account for daylight savings???
    return date3;
}

const getTimeString4 = () => {
    const date4 = new Date(Date.now()).toLocaleTimeString('en-US', {timeZone: 'HST'});
    return date4;
}

const getTimeString5 = () => {
    const date5 = new Date(Date.now()).toLocaleTimeString('en-US', {timeZone: 'Japan'});
    return date5;
}

const ClockApp = () => {
    const [time, setTime] = useState(getTimeString());
    const [time2, setTime2] = useState(getTimeString2());
    const [time3, setTime3] = useState(getTimeString3());
    const [time4, setTime4] = useState(getTimeString4());
    const [time5, setTime5] = useState(getTimeString5());

    
    useEffect(() => {
        const interval = setInterval(() => {
            let date = getTimeString();
            let date2 = getTimeString2();
            let date3 = getTimeString3();
            let date4 = getTimeString4();
            let date5 = getTimeString5();
            setTime(date);
            setTime2(date2);
            setTime3(date3);
            setTime4(date4);
            setTime5(date5);
        }, 1000)
        return () => clearInterval(interval);
    }, [])

        return(
            <div>
                <h1 className="section-title">React Clock</h1>
                <hr className="explanation" />
                <div className='timeZones'>
                    <div className='clock'>
                        <div className='clockFace'>
                            <p>{time}</p>
                        </div>
                        <br />
                        <p>Indianapolis</p>
                    </div>
                    <div className='clock'>
                        <div className='clockFace'>
                            <p>{time2}</p>
                        </div>
                        <br />
                        <p>Los Angeles</p>
                    </div> 
                    {/* <div className='clock'>
                        <div className='clockFace'>
                            <p>{time3}</p>
                        </div>
                        <br />
                        <p>Provo</p>
                    </div>  */}
                    <div className='clock'>
                        <div className='clockFace'>
                            <p>{time4}</p>
                        </div>
                        <br />
                        <p>Laie</p>
                    </div> 
                    <div className='clock'>
                        <div className='clockFace'>
                            <p>{time5}</p>
                        </div>
                        <br />
                        <p>Tokyo</p>
                    </div>                    
                </div>
                
            </div>
        )
}

export default ClockApp;