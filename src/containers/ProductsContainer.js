// @flow
import React from 'react';
import styled from 'styled-components';
import oc from 'open-color';

import Product from 'components/Product';

import productItems from 'data/productItems';

const Wrapper = styled.div`
    margin: 0 auto;
    @media (max-width: 1920px) {
        width: 80%;
    }
    @media (max-width: 1600px) {
        width: 90%;
    }
    @media (max-width: 700px) {
        width: 95%;
    }
    display: flex;
    flex-wrap: wrap;
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