import React, {useState} from 'react'
import {Grid} from '@material-ui/core/';
import TopImg from './images/pattern-bg.png'
import Arrow from './images/icon-arrow.svg'
import axios from 'axios';
import Map from './Map'

import './styles/App.css'

function App() {
    const [IP,
        setIP] = useState('');
    const [ipData,
        setIPData] = useState({lat: '', lon: '', isp: '', city: '', zip: ''});
    function handleChange(e) {
        setIP(e.target.value);
    }
    function handleClick() {
        console.log(IP);
        var urlAPI = 'http://ip-api.com/json/' + IP;
        console.log(urlAPI);

        axios
            .get(urlAPI)
            .then(res => {
                var data_country = res.data.country;
                setIPData({
                    timeZone: res.data.timezone,
                    ipAddress: res.data.query,
                    lat: res.data.lat,
                    lon: res.data.lon,
                    isp: res.data.isp,
                    city: res.data.city,
                    zip: res.data.zip
                });
                console.log(res.data);
                console.log(ipData)

            })
            .catch(error => console.log(error))
    }
    return (
        <div>
            <Grid container direction='column' className='top-section'>
                <img src={TopImg} alt="top background" className='bg-img'/>
                <Grid container className='top-section-cont'>
                    <h1>IP Address Tracker</h1>

                    <Grid container direction='row' className='search-cont'>
                        <Grid item xs={10}>
                            <input type="text" placeholder='Enter IP Address...' onChange={handleChange}/>
                        </Grid>
                        <Grid item xs={2}>
                            <button onClick={handleClick}><img src={Arrow} alt='arrow'/></button>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid container direction='row' className='info-cont'>
                    <Grid item md={3} xs={12}>
                        <h5>IP ADDRESS</h5>
                        <h3>{ipData.ipAddress}</h3>
                    </Grid>
                    <Grid item md={3} xs={12}>
                        <h5>LOCATION</h5>
                        <h3>{ipData.city + ", " + ipData.zip}</h3>
                    </Grid>
                    <Grid item md={3} xs={12}>
                        <h5>TIMEZONE</h5>
                        <h3>{ipData.timeZone}</h3>
                    </Grid>
                    <Grid item md={3} xs={12}>
                        <h5>ISP</h5>
                        <h3>{ipData.isp}</h3>
                    </Grid>
                </Grid>
            </Grid>
            <Grid container className='map-cont'>
                <div id="mapid"></div>
            </Grid>

            <Map lat={ipData.lat} lon={ipData.lon}/>
        </div>
    )
}

export default App
