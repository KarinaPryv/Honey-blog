import './App.scss';
import 'react-notifications/lib/notifications.css';
import { Router } from './common/_components/router/router';
import NotificationContainer from 'react-notifications/lib/NotificationContainer';
import { jwtInterceptor } from './common/_helper/axios.intercepter';

jwtInterceptor();

const App = () => {
  return (
    <div className="App">
      <NotificationContainer />
      <Router />
    </div>
  );
}

export default App;