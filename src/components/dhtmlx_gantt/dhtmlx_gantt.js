import React, { Component } from 'react';
import { gantt } from 'dhtmlx-gantt';
import 'dhtmlx-gantt/codebase/dhtmlxgantt.css';

class dhtmlx_gantt extends Component {

  // state = {
  //   tasks: {
  //     data: [
  //       // {id: 1, name: "Project#1", start: new Date(2020, 1, 10), end: new Date(2020, 1, 20)},
  //       // {id: 2, name: "Task#1"   , start: new Date(2020, 1, 10), end: new Date(2020, 1, 12)},
  //       // {id: 3, name: "Task#2"   , start: new Date(2020, 1, 11), end: new Date(2020, 1, 14)},
  //       // {id: 4, name: "Task#3"   , start: new Date(2020, 1, 14), end: new Date(2020, 1, 20)}
  //     ],
  //     links: [
  //       // {id: 2, start: 2, end: 3},
  //       // {id: 3, start: 2, end: 4}
  //     ]
  //   } 
  // }


  componentDidMount() {
    gantt.config.xml_date = "%Y-%m-%d %H:%i";
    const { tasks } = this.props;
    gantt.init(this.ganttContainer);
    gantt.parse(tasks);
  }

  render() {
    return (
      <div 
        ref={ (input) => { this.ganttContainer = input } }
        style={ { width: '100%', height: '100%' } }>  
      </div>
    );
  }
}

export default dhtmlx_gantt;