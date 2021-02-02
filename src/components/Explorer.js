import { ToggleButton, ToggleButtonGroup } from '@material-ui/lab';
import './Explorer.css';
import AccountTreeIcon  from '@material-ui/icons/AccountTree';
import GridOnIcon from '@material-ui/icons/GridOn';
import GroupIcon from '@material-ui/icons/Group';
import React from 'react';
import TreeView from './TreeView';
import GridView from './GridView';
import GroupView from './GroupView';

class Explorer extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            selected :'tree'
        }
    }
    handleChange(value) {
        this.setState(
            {
                selected: value
            }
        )
    }
    render() {
        return (
            <div className="explorer">
            <ToggleButtonGroup >
                <div className="togglebutton">
                    <ToggleButton  value="tree" 
                    selected={this.state.selected === 'tree'} 
                    onChange={() => this.handleChange('tree')}>
                        <AccountTreeIcon />
                    </ToggleButton>
                </div>
                <div className="togglebutton">
                    <ToggleButton value="grid"
                    selected={this.state.selected === 'grid'}
                    onChange={() => this.handleChange('grid')}>
                        <GridOnIcon />
                    </ToggleButton>
                </div>
                <div className="togglebutton">
                    <ToggleButton value="group"
                    selected={this.state.selected === 'group'}
                    onChange={() => this.handleChange('group')}>
                        <GroupIcon />
                    </ToggleButton>
                </div>
            </ToggleButtonGroup>
            {this.state.selected === 'tree' ? <TreeView /> : 
            (this.state.selected === 'grid' ? <GridView /> : 
            <GroupView /> )}
            </div>
        );
    }
}

export default Explorer
