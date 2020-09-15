import React from 'react'
import {Grid} from '@material-ui/core/';
import TopImg from './images/pattern-bg.png'
import Arrow from './images/icon-arrow.svg'

import './styles/App.css'

function App() {
    return (
        <div>
            <Grid container direction='column' className='top-section'>
                <img src={TopImg} alt="top background" className='bg-img'/>
                <Grid container className='top-section-cont'>
                    <h1>IP Address Tracker</h1>

                    <Grid container direction='row' className='search-cont'>
                        <Grid item xs={10}>
                            <input type="text" placeholder='Enter IP Address...'/>
                        </Grid>
                        <Grid item xs={2}>
                            <button><img src={Arrow} alt='arrow'/></button>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid container direction='row' className='info-cont'>
                    <Grid item md={3} xs={12}>
                        <h5>IP ADDRESS</h5>
                        <h3></h3>
                    </Grid>
                    <Grid item md={3} xs={12}>
                        <h5>LOCATION</h5>
                        <h3></h3>
                    </Grid>
                    <Grid item md={3} xs={12}>
                        <h5>TIMEZONE</h5>
                        <h3></h3>
                    </Grid>
                    <Grid item md={3} xs={12}>
                        <h5>ISP</h5>
                        <h3></h3>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    )
}

export default App
