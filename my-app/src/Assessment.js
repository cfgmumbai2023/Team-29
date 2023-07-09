import React from 'react'
import { useState } from 'react';

function Assessment() {

    const [selectedYear, setSelectedYear] = useState('');
    const [selectedQuarter, setSelectedQuarter] = useState('');
  
    const handleYearChange = (e) => {
      setSelectedYear(e.target.value);
    };
  
    const handleQuarterChange = (e) => {
      setSelectedQuarter(e.target.value);
    };
  return (
    <div>Assessment
 <label htmlFor="year">Select Year: </label>
      <select id="year" value={selectedYear} onChange={handleYearChange}>
        <option value="">Select</option>
        <option value="2021">2021</option>
        <option value="2022">2022</option>
        <option value="2023">2023</option>
        {/* Add more years as needed */}
      </select>

      <br />

      <label htmlFor="quarter">Select Quarter: </label>
      <select id="quarter" value={selectedQuarter} onChange={handleQuarterChange}>
        <option value="">Select</option>
        <option value="Q1">Q1</option>
        <option value="Q2">Q2</option>
        <option value="Q3">Q3</option>
        <option value="Q4">Q4</option>
      </select>



    </div>
  )
}

export default Assessment