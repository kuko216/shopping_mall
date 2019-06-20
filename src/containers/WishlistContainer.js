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
        width: 60%;
    }
    @media (max-width: 1600px) {
        width: 80%;
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

const Select = styled.select`
    cursor: pointer;
    width: 50%;
`

const Option = styled.option`
    cursor: pointer;
`

const Text = styled.p`
    margin: 0;
`

@inject('marketStore')
@observer
class WishlistContainer extends React.Component {
    selectCoupon = (e) => {
        this.props.marketStore.setCoupon(coupons.find(coupon => coupon.title === e.target.value));
    }

    render(){
        return (
            <Wrapper>
                <Link to="/products">back</Link>
                <ListWrapper>
                    {
                        this.props.marketStore.selectedItems.map((product, index) => {
                            let item = productItems.find(item=>item.id === product.id); 
                            return (
                                <WishlistItem
                                    id={product.id}
                                    title={item.title}
                                    coverImage={item.coverImage}
                                    price={item.price}
                                    coupons={item.availableCoupon === false?null:coupons}
                                    index={index}
                                    key={index}
                                />
                            )
                        }
                    )}
                </ListWrapper>
                <Text>쿠폰 적용</Text>
                <Select onChange={this.selectCoupon}>
                    <Option>쿠폰을 선택해 주세요.</Option>
                    {coupons.map((coupon, index) =>
                        <Option value={coupon.title} key={index}>{coupon.title}</Option>
                    )}
                </Select>
                {this.props.marketStore.total}
            </Wrapper>
        )
    }
}

export default WishlistContainer;