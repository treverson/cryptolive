import React, {Component} from 'react'

import axios from 'axios';

// importing images & icons
import BTC from '../../icons/BTC.png'
import ETH from '../../icons/ETH.png'
import BCH from '../../icons/BCH.png'
import uparrow from '../../icons/up-arrow.png'
import uplite from '../../icons/up-lite.png'
import downarrow from '../../icons/down-arrow.png'
import downlite from '../../icons/down-lite.png'
import lineage from '../../icons/Lineage.png'
import linelite from '../../icons/line-lite.png'
import chartgreen from '../../icons/chart-green.png'
import chartlite from '../../icons/chart-lite-green.png'

// import number format
import NumberFormat from 'react-number-format';

// import uderscore
import _ from 'lodash'


// react-router
import { Link } from "react-router-dom";

import moment from 'moment';


import { connect } from 'react-redux';
import MiddleWare from '../../store//middleware/middleware'

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";

// TableData > TableRow > CrptoDetail > ImageChart > ClickableTable

class GraphTable extends React.Component{

  constructor(props) {
            super(props);
            this.state = {
            fetchingData: true,
            data: [],
             }
        }
     

     componentDidMount() {
      this.props.getdataa();
    }

    render(){

      // {console.log('parameters',this.props.fetchingData)}

        function gotoUrl(sym) {
            return {
              pathname: `/bitcoin/${sym}`
            }
          }

        return <div>

            {/* <!-- GRAPH TABLE STARTS--> */}
            <section id="graph-table">
              <div className="container">
                <div className="row">
                  <table className="table">
                    <thead>
                      <tr>
                        <th>RANK</th>
                        <th>NAME</th>
                        <th>PRICE</th>
                        <th>MARKETCAP</th>
                        <th>VOLUME (24H)</th>
                        <th>CIRCULATING</th>
                        <th>1h</th>
                        <th>24h</th>
                        <th>WEEKLY</th>
                       </tr>
                    </thead>
                    <tbody>

                      {console.log("data from apis graphtable page", this.props.resdata)}
                      {this.props.resdata.map ? this.props.resdata.map(
                          (m, v) => {
                        
                              const url = 'https://min-api.cryptocompare.com/data/histoday?fsym='+m.symbol+'&tsym=USD&limit=6&aggregate=1&e=CCCAGG';
                              const sortedData = [];

                              fetch(url).then( r => r.json())
                                .then((bitcoinData) => {
                                  let count = 0;

                                  for (let date in bitcoinData.Data){
                                    sortedData.push({
                                      d: moment.unix(bitcoinData.Data[date].time).format('MMM DD'),
                                      p: bitcoinData.Data[date].close.toLocaleString('us-EN',{ style: 'currency', currency: 'USD' }),
                                      x: count, //previous days
                                      y: bitcoinData.Data[date].close // numerical price
                                    });
                                    count++;
                                  }
                               })
                                .catch((e) => {
                                  console.log(e);
                                });

                                function showProps(obj) {
                                  var result = [];
                                  for (var i in obj) {
                                    // obj.hasOwnProperty() is used to filter out properties from the object's prototype chain
                                    if (obj.hasOwnProperty(i)) {

                                      result.push({
                                        d: 'saad'
                                      });

                                    }
                                  }
                                  return result;
                                }

                                const yahoo = showProps(sortedData);

                            return <tr key={v}>
                                <td className="td-border">
                                  {/* {console.log('asdasdasd', this.props.data)} */}
                                  {m.rank}
                                </td>
                                <td style={{ width: "15%" }}>
                                  <Link to={gotoUrl(m.symbol)} style={{ textDecoration: "none" }}>
                                    <div className="pull-left col-md-offset-4" style={{ paddingTop: "2px" }}>
                                      <img src={BTC} alt="logo" />
                                    </div>
                                    <div className="pull-left" style={{ width: "10%", paddingLeft: "10px" }}>
                                      <p>
                                        {m.name}
                                      </p>
                                      <p className="abbr-p">
                                        {m.symbol}
                                      </p>
                                    </div>
                                  </Link>
                                </td>
                                <td className="graph-td-green">
                                  ${m.price_usd}
                                  <i className="fa fa-caret-up" aria-hidden="true" style={{ paddingLeft: "5px" }} />
                                  {/* <NumberFormat value={m.price_usd} displayType={'text'} thousandSeparator={true} prefix={'$'} /> */}
                                </td>
                                <td>
                                  ${
                                    m.market_cap_usd
                                  }
                                </td>
                                <td>
                                  ${
                                    m[
                                      "24h_volume_usd"
                                    ]
                                  }
                                </td>
                                <td>
                                  {
                                    m.available_supply
                                  }
                                </td>
                                <td className="graph-td-red-1">
                                  {m.percent_change_1h}%
                                  <i className="fa fa-caret-down" aria-hidden="true" style={{ paddingLeft: "5px" }} />
                                </td>
                                <td className="graph-td-red-1">
                                  {m.percent_change_24h}%
                                  <i className="fa fa-caret-down" aria-hidden="true" style={{ paddingLeft: "5px" }} />
                                </td>
                                <td>
                                  {console.log('asdasd', sortedData.hasOwnProperty())}
                                  <img src={"https://chart.googleapis.com/chart?&cht=ls&chd=t:0,25,45,32,25,76,128&chco=ff0000&chs=50x50"} />
                                   {m.percent_change_7d}%
                                  <i className="fa fa-caret-down" aria-hidden="true" style={{ paddingLeft: "5px", color:'#c11b55'}} />

                                      {/* <img src={uplite} style={{width: '8%' , height:'5%'}} alt="logo" img-responsive  id="up-lite"/>
                                      <img src={uparrow} style={{width: '10%' , height:'10%'}} alt="logo" img-responsive id="up-dark"/> */}
                                                                  
                                </td>
                              </tr>;
                          }
                        ) : <div />}
                    </tbody>
                  </table>
                  {/* </Link> */}
                </div>
              </div>
            </section>
            {/* <!-- GRAPH TABLE ENDS --> */}
        
          </div>;
    }
}

const mapDispatchToProps = (dispatch) => {
    return ({
        getdataa : () => {dispatch(MiddleWare.GetData()); }
    })
}

const mapStateToProps = (state) => {
    return ({
        resdata : state.GraphTableReducer.data
    })

}


export default connect(mapStateToProps, mapDispatchToProps)(GraphTable);