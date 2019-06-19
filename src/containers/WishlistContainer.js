// @flow
import React from 'react';
import styled from 'styled-components';
import oc from 'open-color';

import { observer, inject } from 'mobx-react';
import { Link } from 'react-router-dom';

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
                {this.props.marketStore.selectedItems.map((product, index) => 
                    <WishlistItem
                        id={product.id}
                    />
                )}
            </Wrapper>
        )
    }
}

export default WishlistContainer;