
import './App.css'
import Grandpa from './Grandpa'
// import ReuseableForm from './ReuseableForm'
// import HookForm from './HookForm'
// import StatefulForm from './components/statefulForm/StatefulForm'
// import RefForm from './refForm'
// import SimpleForm from './components/SimpleForm'

function App() {

//   const handleSignUpSubmit = data => {
//     console.log('sign up data', data);
// }
//   const handleUpdateSubmit = data => {
//     console.log('profile update data', data);
// }

  return (
    <>
      <h1>Form master</h1>
      <Grandpa></Grandpa>
      {/* <SimpleForm></SimpleForm> */}
      {/* <StatefulForm></StatefulForm> */}
      {/* <RefForm></RefForm> */}
      {/* <HookForm></HookForm> */}
      {/* <ReuseableForm 
      formTitle={'Sign Up'} 
      handleSubmit={handleSignUpSubmit}
      >
        <h2>sign up</h2>
        <p>Please sign up right now</p>
      </ReuseableForm>
      <ReuseableForm 
      formTitle={'Profile Update'} 
      submitBtnTex={'Update'} 
      handleSubmit={handleUpdateSubmit}
      >
        <h2>Update</h2>
        <p>Please your profile</p>
      </ReuseableForm> */}


    </>
  )
}

export default App
