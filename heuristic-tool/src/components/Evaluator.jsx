import React, { useState } from 'react';
import Form1 from './Form1';
import Form2 from './Form2';

const Evaluator = () => {
  const [selectedFormTmp, setSelectedFormTmp] = useState("");
  const [selectedForm, setSelectedForm] = useState("");
  const [websiteName, setWebsiteName] = useState("");
  const [websiteUrl, setWebsiteUrl] = useState("");
  const [showCard, setShowCard] = useState(true);

  const handleFormSelect = (formType) => {
    setSelectedFormTmp(formType);
  }

  const handleFormSubmit = () => {
    setSelectedForm(selectedFormTmp);
    setShowCard(false);
  }

  return (
    <div className='web-name'>
      {showCard && (
        <div className="card" style={{width: "50%"}}>
          <div className="card-body">
            <div style={{width: "100%"}} className="form-floating mb-3">
              <input
                type="name"
                name="name"
                id="floatingInput"
                className="form-control"
                placeholder="Website Name"
                autoComplete="off"
                value={websiteName}
                onChange={e => setWebsiteName(e.target.value)}
              />
              <label htmlFor="floatingInput">Website Name</label>
            </div>
            <div style={{width: "100%"}} className="form-floating mb-3">
              <input
                type="email"
                name="name"
                id="floatingInput"
                className="form-control"
                placeholder="Website Url"
                autoComplete="off"
                value={websiteUrl}
                onChange={e => setWebsiteUrl(e.target.value)}
              />
              <label htmlFor="floatingInput">Website Url</label>
            </div>
          </div>
          <div className='dropdown-form'>
            <select value={selectedFormTmp} onChange={e => handleFormSelect(e.target.value)}>
              <option value="">Select website type</option>
              <option value="form1">E-Commerce</option>
              <option value="form2">E-Learning</option>
            </select>
          </div>
          <div className='eval-submit'>
            <button onClick={handleFormSubmit}>Submit</button>
          </div>
        </div>
      )}

      {selectedForm === "form1" && !showCard && <Form1 websiteName={websiteName} websiteUrl={websiteUrl} />}
      {selectedForm === "form2" && !showCard && <Form2 websiteName={websiteName} websiteUrl={websiteUrl} />}
    </div>
  );
};

export default Evaluator;
