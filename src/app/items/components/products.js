// Dependencies
import React, { Component } from 'react';
import { BrowserRouter, StaticRouter, Switch, Route, Link} from 'react-router-dom';

// Utils
import { isFirstRender } from '../../../shared/utils/data';

//Components
import SearchBox from '../../global/components/SearchBox';

// Assets
import shippingIcon from '../../../../public/assets/images/ic_shipping@2x.png';

class Products extends Component {

  renderAllProducts(products){
    return(
      <div className="products">

        <div className="row">
          <div className="col-xs-12">
              <ol className="breadcrumb BreadcrumbCategories">
                {products.categories && products.categories.map((category, index) => (
                    <li key={index}><a href="javascript:void(0);">{category}</a></li>
                ))}
              </ol>
          </div>
        </div>

        <div className="productList">
          <ul className="list">

            {products.items && products.items.map(item =>
              <li key={item.id} className="product-item">
                <Link to={`/items/${item.id}`}>
                <div className="row">
                  <div className="col-sm-11">
                    <img src={item.picture} className="product-thumbnail" />
                    <h1 className="price">$ {item.price.amount}
                      <span className="shippingIcon"><img src={shippingIcon}/></span>
                      <span className="location">{item.location}</span>
                    </h1>
                    <p className="description">{item.title}</p>
                  </div>
                </div>
                </Link>
              </li>
            )}

          </ul>
        </div>

      </div>
    );
  }

  renderProduct(product){
    console.log('[i] Render single: ',product);
    return(
      <div className="product">

        <div className="productInfo">
          <div className="row">

            <div className="col-md-7">
              <img className="product-img" src={product.item.picture} width="100%"/>
            </div>

            <div className="col-md-4 col-md-offset-1">
              <div className="content-info-product">
                <p className="condition-product">
                  {product.item.condition} - {product.item.sold_quantity} vendidos
                </p>
                <h3 className="title">{product.item.title}</h3>
                <h1 className="price">$ {product.item.price.amount}</h1>

                <button className="btn btn-default btn-block">Comprar</button>
              </div>
            </div>

            <div className="col-md-9">
              <div className="content-detail-product">
                <h2 className="title">Descripción del producto</h2>
                <div className="description" dangerouslySetInnerHTML={{ __html: product.item.description }}></div>
              </div>
            </div>

          </div>
        </div>

      </div>
    );
  }

  render() {

    const {
      products,
      product,
      typeget
    } = this.props;

    //console.log(this.props);
    //console.log(product.item);

    let showRender = this.renderAllProducts(products);

    if(typeget === 'single' && product.item){
      showRender = this.renderProduct(product);
    }

    return (
      <div className="main-content">
        <SearchBox />
        <div className="container">

           { showRender }

        </div>
      </div>
    );
  }
}

export default Products;
