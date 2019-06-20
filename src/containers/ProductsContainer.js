// @flow
import React from 'react';
import styled from 'styled-components';
import oc from 'open-color';
import { Link } from 'react-router-dom';

import Product from 'components/Product';

import productItems from 'data/productItems';

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

const Wrapper = styled.div`
    margin: 0 auto;
    width: 30%;
    @media (max-width: 1920px) {
        width: 30%;
    }
    @media (max-width: 1600px) {
        width: 40%
    }
    @media (max-width: 1200px) {
        width: 60%
    }
    @media (max-width: 700px) {
        width: 95%;
    }
    display: flex;
    flex-direction: column;
`

const WishlistLink = styled(Link)`
    font-size: 1.5rem;

    width: 100%;
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

const PageNation = styled.div`
    display: flex;
    margin: auto;
`

const Page = styled.button`
    margin: 0 1px;
    border: none;
    font-size: 1.2rem;
    background-color: white;
    cursor: pointer;
    &:hover{
        background-color: ${oc.red[1]}
        ${ props => props.selected?`background-color:${oc.red[6]};color:white`:`` }
    }
    ${ props => props.selected?`background-color:${oc.red[6]};color:white`:`` }
    &:focus {
        outline: 0;
    }
`

const LinkWrapper = styled.div`
    display: flex;
    flex-direction: row-reverse;
    padding: 10px 0;
`

class ProductsContainer extends React.Component {
    state = {
        pageCount: 1
    }

    inPage = () => {
        window.scrollTo(0, 0);
        if(this.state.pageCount < productItems.length/5){
            this.setState({
                pageCount: this.state.pageCount+1
            })
        }
    }

    dePage = () => {
        window.scrollTo(0, 0);
        if(this.state.pageCount > 1){
            this.setState({
                pageCount: this.state.pageCount-1
            })
        }
    }

    pageChange = (e) => {
        window.scrollTo(0, 0);
        this.setState({
            pageCount: Number(e.target.value)
        });
    }

    render(){
        return (
            <>
            <Header>
                <Title>Products</Title>
            </Header>
            <Wrapper>
                {productItems.sort((a,b) => a.score < b.score ? 1 : a.score > b.score ? -1 : 0 ).map((product, index) => {
                    if( (this.state.pageCount-1)*5 <= index && index < (this.state.pageCount)*5 )
                    return (
                        <Product
                            id={product.id}
                            price={product.price}
                            title={product.title}
                            coverImage={product.coverImage}
                            availableCoupon={product.availableCoupon === false?false:true}
                            key={index}
                        />
                    )
                })}
                <PageNation>
                    <Page onClick={this.dePage}>{`«`}</Page>
                    {productItems.map((product, index) => {
                        if(index % 5 === 0){
                            console.log(index/5+1,this.state.pageCount)
                            return <Page 
                                value={index/5+1} 
                                onClick={this.pageChange}
                                selected={index/5+1 === this.state.pageCount?1:0}
                                key={index}
                            >
                                {index/5+1}
                            </Page>
                        }
                    })}
                    <Page onClick={this.inPage}>{`»`}</Page>
                </PageNation>
                <LinkWrapper>
                    <WishlistLink to="/wishlist">장바구니로 이동</WishlistLink>
                </LinkWrapper>
            </Wrapper>
            </>
        )
    }
}

export default ProductsContainer;