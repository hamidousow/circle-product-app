import Navigation from './components/Navigation/Navigation';
import ProductsGrid from './components/ProductsGrid/ProductsGrid';
import Title from './components/Title/Title';

function App() {  
  return (
    <div className="App">
      <header className="App-header">      
        <Navigation/>        
      </header>
      <main>
        <Title title={"Products management"}/>
        <ProductsGrid />
      </main>
    </div>
  );
}

export default App;
