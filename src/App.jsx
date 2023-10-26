import './App.css'
import InfoForm from './components/infoForm'

function App() {

  return (
    <main>
      <div className="editorWindow">
        <h1>Editor</h1>
        <InfoForm />
      </div>
      <div className="previewWindow">
        <h1>Preview</h1>
      </div>
    </main>
  )
}

export default App
