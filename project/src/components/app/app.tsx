import MainPage from '../../pages/main-screen/main-screen';

type AppScreenProps = {
  placeCardsCount: number;
}

function App({placeCardsCount}: AppScreenProps): JSX.Element {
  return (
    <MainPage placeCardsCount={placeCardsCount} />
  );
}

export default App;
