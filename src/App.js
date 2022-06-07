
import './App.css';
import SignIn from './components/signIn';
import SignUp from './components/signUp';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import DefiningAJobRequirement from './components/client/definingAJobRequirement/definingAJobRequirement';
import UpdatePersonalDetails from './components/client/updatePersonalDetails/updatePersonalDetails';
import ClientMenu from './components/client/clientMenu/clientMenu';
import ViewWorks from './components/client/clientMenu/viewWorks/viewWorks';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/SignIn" element={<SignIn />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/DefiningAJobRequirement" element={<DefiningAJobRequirement />} />
          <Route path="/UpdatePersonalDetails" element={<UpdatePersonalDetails />} />
          <Route path="/ClientMenu" element={<ClientMenu />} />
          <Route path="/ViewWorks" element={<ViewWorks />} />
        </Routes>
      </BrowserRouter>
    </>

  );
}

export default App;
