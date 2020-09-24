import React, { Component } from 'react'
import classes from "./Dashboard.module.css";
import LineGraph from "./LineGraph";
import chartIcon from "../assets/chart-icon.svg";
import { managerData, yearLabels, quarterLabels, managerQuarterData, nationalAverageData } from "../mockData";
import Button from 'react-bootstrap/Button';

export default class Dashboard extends Component {
    // state = {
    //     data: managerData,
    //     labels: yearLabels
    // }

    constructor(props) {
        super(props);
        this.state = {
            data: managerData,
            labels: yearLabels
        }
        this.updateQuarter = this.updateQuarter.bind(this);
        this.updateYearly = this.updateYearly.bind(this);
      }

    updateQuarter() {
        this.setState( { data: managerQuarterData, labels: quarterLabels} )
    }

    updateYearly() {
        this.setState( {data: managerData, labels: yearLabels})
    }

    render() {
        const { data, labels } = this.state;
        console.log(data, labels)
        return (
            <div className={classes.container}>
            <header>
                <img src={chartIcon} alt="bar chart icon" />
                <h1>Sales Dashboard</h1>
            </header>

                <Button onClick={this.updateQuarter}>Quarter Data</Button>
                <Button onClick={this.updateYearly}>Yearly Data</Button>
                <LineGraph
                    data={data}
                    labels={labels} />
            </div>
        )
    }
}