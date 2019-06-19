// @flow
import React from 'react';
import styled from 'styled-components';
import oc from 'open-color';

import Product from 'components/Product';

import productItems from 'data/productItems';

const Wrapper = styled.div`
    margin: 0 auto;
    background-color: ${oc.gray[1]};
    width: 1000px;
    height: 100%;
`

class ProductsContainer extends React.Component {
    render(){
        return (
            <Wrapper>
                {productItems.map((product, index) => (
                    <Product 
                        price={product.price}
                        title={product.title}
                        coverImage={product.coverImage}
                    />
                ))}
            </Wrapper>
        )
    }
}

export default ProductsContainer;