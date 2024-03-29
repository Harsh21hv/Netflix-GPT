import { Provider } from 'react-redux';
import Body from './components/Body';
import appStore from './utils/appStore';

function App() {

  console.log(process.env)
  return (
    <Provider store={appStore}>
      <Body />
    </Provider>
  );
}

export default App;
