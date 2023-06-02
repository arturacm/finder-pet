import CardList from '../components/CardList';
import Header from '../components/Header';
import Main from '../components/Main';
import SearchBar from '../components/SearchBar';

function Home() {
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

export default Home;
