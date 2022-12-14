import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [products, setProducts] = useState([]);

  const fetchData = async () => {
    try {
      const res = await fetch("https://dummyjson.com/products");
      const data = await res.json();
      setProducts(data.products);
    } catch (err) {
      console.log(err);
    }
  };


  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div className="conatainer">
        <div className="row">
          {products &&
            products.map((product, index) => {
              console.log(product);
              return (
                <div key={index} className="col">
                  <div className="card" style={{ width: "18rem" }}>
                    <img
                      src={product.thumbnail}
                      className="card-img-top "
                      alt="..."
                    />
                    <div className="card-body">
                      <h5 className="card-title">{product.title}</h5>
                      <p className="card-text">{product.description}</p>
                      {/* <a href="#" className="btn btn-primary">
                  Go somewhere
                </a> */}
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
      {/* <section style={{ backgroundColor: "#eee" }}>
        <div className="container py-5">
          <div className="row">
            <div className="col-md-12 col-lg-4 mb-4 mb-lg-0">
              <div className="card">
                <div className="d-flex justify-content-between p-3">
                  <p className="lead mb-0">Today's Combo Offer</p>
                  <div
                    className="bg-info rounded-circle d-flex align-items-center justify-content-center shadow-1-strong"
                    style={{ width: 35, height: 35 }}
                  >
                    <p className="text-white mb-0 small">x4</p>
                  </div>
                </div>
                <img
                  src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/4.webp"
                  className="card-img-top"
                  alt="Laptop"
                />
                <div className="card-body">
                  <div className="d-flex justify-content-between">
                    <p className="small">
                      <a href="#!" className="text-muted">
                        Laptops
                      </a>
                    </p>
                    <p className="small text-danger">
                      <s>$1099</s>
                    </p>
                  </div>
                  <div className="d-flex justify-content-between mb-3">
                    <h5 className="mb-0">HP Notebook</h5>
                    <h5 className="text-dark mb-0">$999</h5>
                  </div>
                  <div className="d-flex justify-content-between mb-2">
                    <p className="text-muted mb-0">
                      Available: <span className="fw-bold">6</span>
                    </p>
                    <div className="ms-auto text-warning">
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 mb-4 mb-md-0">
              <div className="card">
                <div className="d-flex justify-content-between p-3">
                  <p className="lead mb-0">Today's Combo Offer</p>
                  <div
                    className="bg-info rounded-circle d-flex align-items-center justify-content-center shadow-1-strong"
                    style={{ width: 35, height: 35 }}
                  >
                    <p className="text-white mb-0 small">x2</p>
                  </div>
                </div>
                <img
                  src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/7.webp"
                  className="card-img-top"
                  alt="Laptop"
                />
                <div className="card-body">
                  <div className="d-flex justify-content-between">
                    <p className="small">
                      <a href="#!" className="text-muted">
                        Laptops
                      </a>
                    </p>
                    <p className="small text-danger">
                      <s>$1199</s>
                    </p>
                  </div>
                  <div className="d-flex justify-content-between mb-3">
                    <h5 className="mb-0">HP Envy</h5>
                    <h5 className="text-dark mb-0">$1099</h5>
                  </div>
                  <div className="d-flex justify-content-between mb-2">
                    <p className="text-muted mb-0">
                      Available: <span className="fw-bold">7</span>
                    </p>
                    <div className="ms-auto text-warning">
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="far fa-star" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 mb-4 mb-md-0">
              <div className="card">
                <div className="d-flex justify-content-between p-3">
                  <p className="lead mb-0">Today's Combo Offer</p>
                  <div
                    className="bg-info rounded-circle d-flex align-items-center justify-content-center shadow-1-strong"
                    style={{ width: 35, height: 35 }}
                  >
                    <p className="text-white mb-0 small">x3</p>
                  </div>
                </div>
                <img
                  src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/5.webp"
                  className="card-img-top"
                  alt="Gaming Laptop"
                />
                <div className="card-body">
                  <div className="d-flex justify-content-between">
                    <p className="small">
                      <a href="#!" className="text-muted">
                        Laptops
                      </a>
                    </p>
                    <p className="small text-danger">
                      <s>$1399</s>
                    </p>
                  </div>
                  <div className="d-flex justify-content-between mb-3">
                    <h5 className="mb-0">Toshiba B77</h5>
                    <h5 className="text-dark mb-0">$1299</h5>
                  </div>
                  <div className="d-flex justify-content-between mb-2">
                    <p className="text-muted mb-0">
                      Available: <span className="fw-bold">5</span>
                    </p>
                    <div className="ms-auto text-warning">
                      <i className="fa fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star-half-alt" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
    </>
  );
}

export default App;
