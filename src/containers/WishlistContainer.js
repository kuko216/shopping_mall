// @flow
import React from 'react';
import styled from 'styled-components';
import oc from 'open-color';

import { observer, inject } from 'mobx-react';
import { Link } from 'react-router-dom';

import productItems from 'data/productItems';
import coupons from 'data/coupons';

import WishlistItem from 'components/WishlistItem'

const Header = styled.div`
    width: 100%;
    display: flex;
    padding-left: 20px;
    padding-top: 10px;
    box-sizing: border-box;
`

const Title = styled.h1`
    margin: 0;
`

const ProductsLink = styled(Link)`
    font-size: 1.5rem;
    border-radius: 10px;

    width: 100%;
    margin-bottom:10px;
    text-align: center;

    background-color: ${oc.red[6]};
    color: white;
    
    &:link { color: white;; text-decoration: none;}
    &:visited { color: white;; text-decoration: none;}
    &:hover { 
        color: white;; text-decoration: none;
        background-color: ${oc.red[8]};
    }
`

const Wrapper = styled.div`
    margin: 0 auto;
    @media (max-width: 1920px) {
        width: 60%;
    }
    @media (max-width: 1600px) {
        width: 80%;
    }
    @media (max-width: 800px) {
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
    width: 100%;
`

const Option = styled.option`
    cursor: pointer;
`

const Text = styled.p`
    margin: 0;
    margin-top: 10px;
`

const TotalPrice = styled.h2`
    text-align: right;
`

@inject('marketStore')
@observer
class WishlistContainer extends React.Component {
    selectCoupon = (e) => {
        this.props.marketStore.setCoupon(coupons.find(coupon => coupon.title === e.target.value));
    }

    render(){
        return (
            <>
            <Header>
                <Title>Wishlist</Title>
            </Header>
            <Wrapper>
                <ListWrapper>
                    {this.props.marketStore.selectedItems.map((product, index) => {
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
                <TotalPrice>총 가격: {this.props.marketStore.total < 0?0:this.props.marketStore.total.toLocaleString(navigator.language, { minimumFractionDigits: 0 })}원</TotalPrice>
                <ProductsLink to="/products">목록 페이지로 이동</ProductsLink>
            </Wrapper>
            </>
        )
    }
}

export default WishlistContainer;