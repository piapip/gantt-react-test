import React, { Component } from 'react';
import { Chart } from 'react-google-charts';
import ModalButton from './New_Modal_Button'

class Gantt extends Component {

  state = {
    labels: [
      { type: 'string', label: 'Task ID' },
      { type: 'string', label: 'Task Name' },
      { type: 'date', label: 'Start Date' },
      { type: 'date', label: 'End Date' },
      { type: 'number', label: 'Duration' },
      { type: 'number', label: 'Percent Complete' },
      { type: 'string', label: 'Dependencies' },
    ],
    jobs: [
      [
        'Research',
        'Find sources',
        new Date(2020, 0, 1),
        new Date(2020, 0, 5),
        null,
        100,
        null,
      ],
      [
        'Write',
        'Write paper',
        null,
        new Date(2020, 0, 9),
        3 * 24 * 60 * 60 * 1000,
        25,
        'Research,Outline',
      ],
      [
        'Cite',
        'Create bibliography',
        null,
        new Date(2020, 0, 7),
        1 * 24 * 60 * 60 * 1000,
        20,
        'Research',
      ],
      [
        'Complete',
        'Hand in paper',
        null,
        new Date(2020, 0, 10),
        1 * 24 * 60 * 60 * 1000,
        0,
        'Cite,Write',
      ],
      [
        'Outline',
        'Outline paper',
        null,
        new Date(2020, 0, 6),
        1 * 24 * 60 * 60 * 1000,
        100,
        'Research',
      ]
    ]
  }

  addJob = (taskID, taskName, start, end, duration, completion, dependencies) => {
    let jobList = this.state.jobs
    jobList.push([taskID, taskName, start, end, duration, completion, dependencies])
    this.setState({ jobs: jobList })
  }

  chartEvents = [
    {
      eventName: "select",
      callback({ chartWrapper }) {
        console.log("Selected ", chartWrapper.getChart().getSelection()[0]);
      }
    }
  ];
  
  check = () => {
    console.log(this.state)
  }

  render() {
    return (
      <div className={"my-pretty-chart-container"}>
        <Chart
          width={'95%'}
          height={'400px'}
          chartType="Gantt"
          loader={<div>Loading Chart</div>}
          data={[
            this.state.labels,
            ...this.state.jobs,
          ]}
          rootProps={{ 'data-testid': '1' }}
          chartEvents={this.chartEvents}
        />
        <ModalButton 
          buttonLabel="Add job"
          className="addButton"
          addJob={this.addJob}
          jobList={this.state.jobs}/>
      </div>
    );
  }
}

export default Gantt;