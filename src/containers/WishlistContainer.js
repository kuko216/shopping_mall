// @flow
import React from 'react';
import styled from 'styled-components';
import oc from 'open-color';

import { observer, inject } from 'mobx-react';
import { Link } from 'react-router-dom';

import productItems from 'data/productItems';
import coupons from 'data/coupons';

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
    flex-direction: column;
`

const ListWrapper = styled.div`
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
`

const sampleData = [
    {
        id:'B9vUv0E0ibc0X55kVVLr',
        count: 1,
        checked: true
    },
    {
        id:'81x83ysiEHsHCBoeVh2O',
        count: 1,
        checked: true
    },
    {
        id:'ZXV8mCcvbpXKm5J5snUq',
        count: 1,
        checked: true
    }
]

@inject('marketStore')
@observer
class WishlistContainer extends React.Component {
    render(){
        return (
            <Wrapper>
                <Link to="/products">back</Link>
                <ListWrapper>
                    {
                        //this.props.marketStore.selectedItems.map((product, index) => {
                        sampleData.map((product, index) => {
                            let item = productItems.find(item=>item.id === product.id); 
                            return (
                                <WishlistItem
                                    id={product.id}
                                    title={item.title}
                                    coverImage={item.coverImage}
                                    price={item.price}
                                    coupons={coupons}
                                    index={index}
                                    key={index}
                                />
                            )
                        }
                    )}
                </ListWrapper>
            </Wrapper>
        )
    }
}

export default WishlistContainer;