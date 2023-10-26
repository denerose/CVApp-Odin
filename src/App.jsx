import { useState } from 'react'
import './App.css'
import { InfoForm,  InfoCard } from './components/infoForm'


function App() {
  const [userData, setUserData] = useState({
    name: "Jane A Doe",
    email: "email@example.com"
  })

  

  return (
    <main>
      <div className="editorWindow">
        <h1>Editor</h1>
        <InfoForm 
          setUserDataInput={setUserData}
        />
      </div>
      <div className="previewWindow">
        <h1>Preview</h1>
        <InfoCard 
          name={userData.name}
          email={userData.email}
        />
      </div>
    </main>
  )
}

export default App
