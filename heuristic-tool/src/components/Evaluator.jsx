import React, { useState } from 'react';
import Form1 from './Form1';
import Form2 from './Form2';

const Evaluator = () => {

  //
  
  //

  const [selectedForm, setSelectedForm] = useState("");
  const [websiteName, setWebsiteName] = useState("");

  const handleFormSelect = (formType) => {
    setSelectedForm(formType);
  }

  return (
    <div className='web-name'>
      <div>
        Website Name: <input type="text" value={websiteName} onChange={e => setWebsiteName(e.target.value)} />
      </div>
      <div>
        <select value={selectedForm} onChange={e => handleFormSelect(e.target.value)}>
          <option value="">Select a form</option>
          <option value="form1">Form 1</option>
          <option value="form2">Form 2</option>
        </select>
        {selectedForm === "form1" && <Form1 websiteName={websiteName} />}
        {selectedForm === "form2" && <Form2 websiteName={websiteName} />}
      </div>
    </div>
  );
};

export default Evaluator;
