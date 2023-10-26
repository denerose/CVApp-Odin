import { useState } from 'react'
import './App.css'
import { InfoForm,  InfoCard } from './components/infoForm'
import { EducationForm } from './components/educationForm'


function App() {
  const [userData, setUserData] = useState({
    name: "Jane A Doe",
    email: "email@example.com"
  })

  const [educationArray, setEducationArray] = useState([{uni: 'test'}])
  

  return (
    <main>
      <div className="editorWindow">
        <h1>Editor</h1>
        <InfoForm 
          setUserDataInput={setUserData}
        />
        <EducationForm
          newEducation={setEducationArray}
          currentEducation={educationArray}
        />
      </div>
      <div className="previewWindow">
        <h1>Preview</h1>
        <InfoCard 
          name={userData.name}
          email={userData.email}
        />
        <div>
          {educationArray.map((education, index) => {
            return <div key={index}>
              <h3>{education.uni}</h3>
            </div>
          })}
        </div>
      </div>
    </main>
  )
}

export default App
