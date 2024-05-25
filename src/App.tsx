import computerImg from '../src/assets/computer.png';
import cartImg from '../src/assets/cart.svg'
import './App.css'

function App() {
  return (
    <>
      <header className="pc-header-client">
        <nav className="pc-container">
            <h1>PCCommerce</h1>
            <div className="pc-navbar-right">
                <div className="pc-menu-items-container">
                    <div className="pc-menu-item">
                        <img src={cartImg} alt="Carrinho de compras"/>
                    </div>
                </div>
                <a href="#">Entrar</a>
            </div> 
        </nav>
    </header>
    <main>
        <section id="product-details-section" className="pc-container">
            <div className="pc-card">
                <div className="pc-product-details-top pc-line-bottom">
                    <img src={computerImg} alt="computador"/>
                </div>
                <div className="pc-product-details-bottom">
                    <h3>R$ 5000,00</h3>
                    <h4>Computador Gamer XT</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                        voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </div>
                <div className="pc-category-container">
                    <div className="pc-category">
                        Eletrônicos
                    </div>
                    <div className="pc-category">
                        Computadores
                    </div>
                </div>
            </div>
            <div className="pc-btn-page-container pc-mt20">
                <div className="pc-btn pc-btn-blue">
                    Comprar
                </div>
                <div className="pc-btn pc-btn-white">
                    Inicio
                </div>
            </div>
        </section>
      </main>
    </>
  );
}

export default App
