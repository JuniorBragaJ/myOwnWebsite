import './App.css';
import styled from "styled-components";
import Navigation from './screen/Navigation/Navigation';

const MainContainer = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  overflow: hidden;
  margin: 0;
  box-sizing: border-box;
  flex-direction: column;
`;

const BottomContainer = styled.div`
  width: 100%;
  height: calc(100% - 78px);
  display: flex;
  flex-direction: row;
`;

const NavigationContainer = styled.div`
  width: 180px;
  overflow-y: auto;
`;

function App() {
  return (
    <div className="App">
      <MainContainer>
        <BottomContainer>
          <NavigationContainer>
            <Navigation />
          </NavigationContainer>
        </BottomContainer>
      </MainContainer>
    </div>
  );
}

export default App;
