import React from 'react'
import Explorer from '../components/Explorer';
import DetailsPane from '../components/DetailsPane';
import './Dashboard.css';

function Dashboard() {
    return (
        <div className="dashboard">
            <Explorer/>
            <DetailsPane />
            <DetailsPane />
            <DetailsPane />
            <DetailsPane />
        </div>
    )
}

export default Dashboard
