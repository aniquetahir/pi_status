import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class EmailStatistics extends Component {
  render(){
    return (
        <div className="uk-grid uk-grid-collapse uk-child-width-1-1">
          <div><span uk-icon="mail"></span>10 unread</div>
        </div>
    );
  }
}

class UpcomingEventsMenu extends Component {
  render(){
    return (
        <table className="uk-table uk-table-striped" style={{marginTop: 0}}>
            <caption><span className="uk-label uk-label-warning">Upcoming Calendar Events</span></caption>
            <thead>
            <tr>
                <th className="uk-table-shrink uk-text-nowrap">Date/Time</th>
                <th className="uk-table-expand">Title</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td className="uk-text-nowrap">Table Data</td>
                <td className="uk-text-truncate">Lorem Ipsum Dolores Lorem Ipsum Dolores</td>
            </tr>
            <tr>
                <td className="uk-text-nowrap">Table Data</td>
                <td className="uk-text-truncate">Lorem Ipsum Dolores Lorem Ipsum Dolores</td>
            </tr>
            <tr>
                <td className="uk-text-nowrap">Table Data</td>
                <td className="uk-text-truncate">Lorem Ipsum Dolores Lorem Ipsum Dolores</td>
            </tr>
            </tbody>
        </table>
    );
  }
}


class App extends Component {
  render() {
    return (
      <div className="uk-container" style={{padding: 0}}>
          <div className="uk-grid-collapse uk-child-width-1-2" uk-grid="">
              <div><b>AniqueTech</b></div>
              <div style={{textAlign: 'right'}}><span>ip:192.168.0.1</span></div>
          </div>
          <UpcomingEventsMenu/>
          <EmailStatistics/>
      </div>
    );
  }
}

export default App;
