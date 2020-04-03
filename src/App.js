import React, { Component } from 'react';
import './App.css';
import GoogleGantt from './components/Google/Google_Gantt'
// import SimpleGantt from './components/gantt_timeline/SimpleGantt'
// import GanttCRUD from './components/gantt_timeline/Gantt_CRUD'
// import GanttFilter from './components/gantt_timeline/Gantt_Filter'
import 'bootstrap/dist/css/bootstrap.css';

class App extends Component {
  
  render() {
    return (
      <div className="App">
        <GoogleGantt />
        {/* <SimpleGantt /> */}
        {/* <GanttCRUD /> */}
        {/* <GanttFilter /> */}
      </div>
    );
  }
}

export default App;