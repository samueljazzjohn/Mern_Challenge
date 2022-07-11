import SideBar from './SideBar';
import Body from './Body';
import Footer from './Footer';
import Split from 'react-split'
import './style.css';


function App() {
  return (
    <div className="App-container">
      <Split direction='vertical' sizes={[70, 30]}  style={{ height: "100%"}}>
          <Split className='flex' sizes={[20, 80]} gutterAlign="center" style={{ width: "100%"}}>
            <SideBar />
            <Body />
          </Split>
        <Footer />
      </Split>
    </div>
  );
}

export default App;
