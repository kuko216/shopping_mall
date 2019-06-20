// @flow
import React from 'react';
import styled from 'styled-components';
import oc from 'open-color';
import { Link } from 'react-router-dom';

import Product from 'components/Product';

import productItems from 'data/productItems';

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

class ProductsContainer extends React.Component {
    state = {
        pageCount: 1
    }

    inPage = () => {
        if(this.state.pageCount < productItems.length/5){
            this.setState({
                pageCount: this.state.pageCount+1
            })
        }
    }

    dePage = () => {
        if(this.state.pageCount > 1){
            this.setState({
                pageCount: this.state.pageCount-1
            })
        }
    }

    pageChange = (e) => {
        this.setState({
            pageCount: Number(e.target.value)
        });
    }

    render(){
        return (
            <Wrapper>
                {productItems.sort((a,b) => a.score < b.score ? 1 : a.score > b.score ? -1 : 0 ).map((product, index) => {
                    if( (this.state.pageCount-1)*5 <= index && index < (this.state.pageCount)*5 )
                    return (
                        <Product
                            id={product.id}
                            price={product.price}
                            title={product.title}
                            coverImage={product.coverImage}
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
                <WishlistLink to="/wishlist">계산하기</WishlistLink>
            </Wrapper>
        )
    }
}

export default ProductsContainer;