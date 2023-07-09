import React, { useState } from "react";
import CreatableSelect from "react-select/creatable";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import '../assets/NewStudentFormcss.css'; 

export default function NewStudentForm() {
  
    const cityOptions = [
        { value: "Mumbai", label: "Mumbai" },
        { value: "Bhopal", label: "Bhopal" },
        { value: "Nagpur", label: "Nagpur" },
        { value: "Agra", label: "Agra" },
      ];

      const stateOptions = [
        { value: "UP", label: "UP" },
        { value: "MP", label: "MP" },
        { value: "Maharashtra", label: "Maharashtra" },
        
      ];
      const [city, setCity] = useState("");
     const [state, setState] = useState("");
     const handleCityChange = (newValue) => {
        const selectedValue = newValue ? newValue.value : "";
        setCity(selectedValue);
        setFormData((prevData) => ({
          ...prevData,
          city: selectedValue,
        }));
      };
      
      const handleStateChange = (newValue) => {
        const selectedValue = newValue ? newValue.value : "";
        setState(selectedValue);
        setFormData((prevData) => ({
          ...prevData,
          state: selectedValue,
        }));
      };
    
      const handleCityCreateOption = (inputValue) => {
        const newOption = { value: inputValue, label: inputValue };
        setSchoolName(newOption);
      };

      const handleStateCreateOption = (inputValue) => {
        const newOption = { value: inputValue, label: inputValue };
        setSchoolName(newOption);
      };
    
      

  
  
    const schoolOptions = [
    { value: "DPS", label: "DPS" },
    { value: "DAV", label: "DAV" },
    { value: "UHS", label: "UHS" },
    { value: "VIT", label: "VIT" },
  ];

  const standardOptions = Array.from({ length: 12 }, (_, index) => ({
    value: index + 1,
    label: (index + 1).toString(),
  }));

  const [schoolName, setSchoolName] = useState("");
  const [standard, setStandard] = useState("");

  const handleSchoolNameChange = (newValue) => {
    const selectedValue = newValue ? newValue.value : "";
    setSchoolName(selectedValue);
    setFormData((prevData) => ({
      ...prevData,
      schoolName: selectedValue,
    }));
  };
  
  const handleStandardChange = (newValue) => {
    const selectedValue = newValue ? newValue.value : "";
    setStandard(selectedValue);
    setFormData((prevData) => ({
      ...prevData,
      standard: selectedValue,
    }));
  };

  const handleSchoolNameCreateOption = (inputValue) => {
    const newOption = { value: inputValue, label: inputValue };
    setSchoolName(newOption);
  };

  const handleStandardCreateOption = (inputValue) => {
    const parsedValue = parseInt(inputValue);
    if (!isNaN(parsedValue) && parsedValue >= 1 && parsedValue <= 12) {
      const newOption = { value: parsedValue, label: inputValue };
      setStandard(newOption);
    }
  };

  const disabilityOptions = [
    { value: 'ADHD', label: 'ADHD' },
    { value: 'BIPOLAR', label: 'BIPOLAR' },
    { value: 'ODD', label: 'ODD' },
    { value: 'SCHIZOPHRENIA', label: 'SCHIZOPHRENIA' },
    { value: 'AUTISM', label: 'AUTISM' },
  ];

  const [formData, setFormData] = useState({
    name: "",
    age: "",
    disability: "",
    gender: "",
    confirmData: false,
    selectedDate: null,
    selectedDateAdm: null,
    aadharNumber: "",
    phoneNumber: "",
    schoolName: "",
    standard: ""
  });

  const handleSeverityChange = (event) => {
    const severityValue = Number(event.target.value);
    setFormData((prevData) => ({
      ...prevData,
      severity: severityValue,
    }));
  };

  const handleDateChange = (date) => {
    setFormData((prevData) => ({
      ...prevData,
      selectedDate: date,
    }));
  };

  const handleDateChangeAdm = (date) => {
    setFormData((prevData) => ({
      ...prevData,
      selectedDateAdm: date,
    }));
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
  
    if (type === "checkbox") {
      setFormData((prevData) => ({
        ...prevData,
        [name]: checked,
      }));
    } else if (name === "schoolName") {
      setSchoolName(value);
      setFormData((prevData) => ({
        ...prevData,
        schoolName: value,
      }));
    } else if (name === "standard") {
      setStandard(value);
      setFormData((prevData) => ({
        ...prevData,
        standard: value,
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };
  
  const handleDisabilityChange = (newValue) => {
    setFormData((prevData) => ({
      ...prevData,
      disability: newValue ? newValue.value : "",
    }));
  };



  const handleGenderChange = (e) => {
    const { value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      gender: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <>
      <div className="form-body">
        <div className="row">
          <div className="form-holder">
            <div className="form-content">
              <div className="form-items">
                <h3>Add New Student</h3>
                <p>Fill in the data below.</p>
                <form
                  className="requires-validation"
                  noValidate
                  onSubmit={handleSubmit}
                >
                  <div className="col-md-12">
                    <input
                      className="form-control"
                      type="text"
                      name="name"
                      placeholder="Full Name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="col-md-12">
                    <input
                      className="form-control"
                      type="number"
                      name="age"
                      placeholder="Age"
                      value={formData.age}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <label>Disability:</label>
                  <CreatableSelect
                    options={disabilityOptions}
                    value={formData.disability}
                    onChange={handleDisabilityChange}
                    onCreateOption={handleDisabilityChange}
                  />

                  <div className="col-md-12 mt-3">
                    <label className="mb-3 mr-1" htmlFor="severity">
                      Severity:
                    </label>
                    <label>
                      <input
                        type="radio"
                        value={1}
                        checked={formData.severity === 1}
                        onChange={handleSeverityChange}
                      />
                      Mild
                    </label>

                    <label>
                     <input
                        type="radio"
                        value={2}
                        checked={formData.severity === 2}
                        onChange={handleSeverityChange}
                      />
                      Moderate
                    </label>

                    <label>
                      <input
                        type="radio"
                        value={3}
                        checked={formData.severity === 3}
                        onChange={handleSeverityChange}
                      />
                      Severe
                    </label>
                  </div>

                  <div className="col-md-12 mt-3">
                    <label className="mb-3 mr-1" htmlFor="gender">
                      Gender:
                    </label>

                    <input
                      type="radio"
                      className="btn-check"
                      name="gender"
                      id="male"
                      value="male"
                      checked={formData.gender === "male"}
                      onChange={handleGenderChange}
                      required
                    />
                    <label
                      className="btn btn-sm btn-outline-secondary"
                      htmlFor="male"
                    >
                      Male
                    </label>

                    <input
                      type="radio"
                      className="btn-check"
                      name="gender"
                      id="female"
                      value="female"
                      checked={formData.gender === "female"}
                      onChange={handleGenderChange}
                      required
                    />
                    <label
                      className="btn btn-sm btn-outline-secondary"
                      htmlFor="female"
                    >
                      Female
                    </label>

                    <input
                      type="radio"
                      className="btn-check"
                      name="gender"
                      id="secret"
                      value="secret"
                      checked={formData.gender === "secret"}
                      onChange={handleGenderChange}
                      required
                    />
                    <label
                      className="btn btn-sm btn-outline-secondary"
                      htmlFor="secret"
                    >
                      Secret
                    </label>
                  </div>

                  <div>
                    <label htmlFor="datepicker">
                      Date of Birth of child:
                    </label>
                    <DatePicker
                      id="datepicker"
                      selected={formData.selectedDate}
                      onChange={handleDateChange}
                      dateFormat="dd/MM/yyyy"
                      placeholderText="Enter Date of Birth of child:"
                    />
                  </div>

                  <div>
                    <label htmlFor="datepicker">Date of Admission:</label>
                    <DatePicker
                      id="datepicker"
                      selected={formData.selectedDateAdm}
                      onChange={handleDateChangeAdm}
                      dateFormat="dd/MM/yyyy"
                      placeholderText="Enter Date of Admission:"
                    />
                  </div>

                  <div>
                    <label htmlFor="aadhar">Aadhar Number:</label>
                    <input
                      type="number"
                      id="aadhar"
                      name="aadharNumber"
                      value={formData.aadharNumber}
                      onChange={handleChange}
                      placeholder="Enter Aadhar Number"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="phone">Phone Number:</label>
                    <input
                      type="number"
                      id="phone"
                      name="phoneNumber"
                      value={formData.phoneNumber}
                      onChange={handleChange}
                      placeholder="Enter Phone Number"
                      required
                    />
                  </div>

                            <CreatableSelect
            className="form-control"
            id="schoolName"
            options={schoolOptions}
            value={formData.schoolName ? { value: formData.schoolName, label: formData.schoolName } : null}
            onChange={handleSchoolNameChange}
            onCreateOption={handleSchoolNameCreateOption}
            placeholder="Select or type a school name"
            />

            <CreatableSelect
            className="form-control"
            id="standard"
            options={standardOptions}
            value={formData.standard ? { value: formData.standard, label: formData.standard } : null}
            onChange={handleStandardChange}
            onCreateOption={handleStandardCreateOption}
            placeholder="Select or type a standard"
            />

            <CreatableSelect
            className="form-control"
            id="city"
            options={cityOptions}
            value={formData.city ? { value: formData.city, label: formData.city } : null}
            onChange={handleCityChange}
            onCreateOption={handleCityCreateOption}
            placeholder="Select or type a city name"
            />

            <CreatableSelect
            className="form-control"
            id="state"
            options={stateOptions}
            value={formData.state ? { value: formData.state, label: formData.state } : null}
            onChange={handleStateChange}
            onCreateOption={handleStateCreateOption}
            placeholder="Select or type state name"
            />





                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="invalidCheck"
                      name="confirmData"
                      checked={formData.confirmData}
                      onChange={handleChange}
                      required
                    />
                    <label className="form-check-label">
                      I confirm that all data are correct
                    </label>
                  </div>

                  <div className="form-button mt-3">
                    <button
                      id="submit"
                      type="submit"
                      className="btn btn-primary"
                    >
                      Register
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}