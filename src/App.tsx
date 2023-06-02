import CardList from './components/CardList';
import Header from './components/Header';
import Main from './components/Main';
import SearchBar from './components/SearchBar';

function App() {
  return (
    <>
      <Header />
      <Main>
        <SearchBar />
        <CardList />
      </Main>
    </>
  );
}

export default App;
