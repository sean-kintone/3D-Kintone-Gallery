import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

(function () {
  'use strict';

  // Replace with your Custom View's ID
  const customViewID = 5527028;

  // Increment to confirm script version on Kintone
  const scriptVer = '1.0.1';
  console.log(`\nScript version: ${scriptVer}\n\n`);

  kintone.events.on('app.record.index.show', function (event) {
    if (event.viewId !== customViewID) {
      console.log('Not on the Custom View');
      return event
    }

    const dataSet = [
      'Tabitha Babbitt',
      'Nancy Johnson',
      'Ada Lovelace',
      'Sarah Mather',
      'Margaret Knight',
      'Josephine Cochran',
      'Mary Walton',
      'Adeline D. T. Whitney',
      'Grace Murray Hopper',
      'Shirley Ann Jackson'
    ];

    function App() {
      const [searchTerm, setSearchTerm] = React.useState("");
      const [searchResults, setSearchResults] = React.useState([]);
      const handleChange = e => {
        setSearchTerm(e.target.value);
      };
      React.useEffect(() => {
        const results = dataSet.filter(dataRecord =>
          dataRecord.toLowerCase().includes(searchTerm)
        );
        setSearchResults(results);
      }, [searchTerm]);
      return (
        <div className="App">
          <input
            type="text"
            placeholder="Search"
            value={searchTerm}
            onChange={handleChange}
          />
          <ul>
            {searchResults.map(item => (
              <li>{item}</li>
            ))}
          </ul>
        </div>
      );
    }

    ReactDOM.render(
      <React.StrictMode >
        <App />
      </React.StrictMode>,
      document.getElementById('root')
    );
    return event;
  });
})();