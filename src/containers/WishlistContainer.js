// @flow
import React from 'react';
import styled from 'styled-components';
import oc from 'open-color';

import { observer, inject } from 'mobx-react';
import { Link } from 'react-router-dom';

import productItems from 'data/productItems';

import WishlistItem from 'components/WishlistItem'

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

@inject('marketStore')
@observer
class WishlistContainer extends React.Component {
    render(){
        return (
            <Wrapper>
                <Link to="/products">back</Link>
                {
                    this.props.marketStore.selectedItems.map((product, index) => {
                        let item = productItems.find(item=>item.id === product.id); 
                        return (
                            <WishlistItem
                                id={product.id}
                                title={item.title}
                                coverImage={item.coverImage}
                                price={item.price}
                                key={index}
                            />
                        )
                    }
                )}
            </Wrapper>
        )
    }
}

export default WishlistContainer;