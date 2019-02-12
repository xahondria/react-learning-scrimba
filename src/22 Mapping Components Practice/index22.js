import React, {Component} from 'react';

import productsData from './data/vschoolProducts';

import Product from './components/Product';

class Index22 extends Component {
  render() {

    const productComponents = productsData.map(item => <Product key = {item.id} product = {item} />);

    return (
      <div>
        {productComponents}
      </div>
    )
  }

}

export default Index22;