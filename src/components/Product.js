import React from 'react';
import styled from 'styled-components';
import oc from 'open-color';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 25%;
    @media (max-width: 1920px) {
        width: 25%;
    }
    @media (max-width: 1600px) {
        width: 33%;
    }
    @media (max-width: 1200px) {
        width: 50%;
    }
    @media (max-width: 700px) {
        width: 100%;
    }
`

const Content = styled.div`
    padding: 10px;

`

const Title = styled.h3`
    margin: 0;
`

const Price = styled.p`
    margin: 0;
`

const CoverImage = styled.img`
    width: 100%;
    height: 200px;
    object-fit: cover; 
    object-position: center;
`

const StyledButton = styled.button`

`


class Product extends React.Component{

    state = {
        checked: false
    }

    CheckButton = ({checked}) => {
        if(checked){
            return (
                <StyledButton checked={checked} onClick={this.onClick}>빼기</StyledButton>
            )
        } else {
            return (
                <StyledButton checked={checked} onClick={this.onClick}>담기</StyledButton>
            )
        }
    }

    onClick = (e) => {
        this.setState({
            checked: !this.state.checked
        })
    }

    render(){
        const { checked } = this.state;
        const { coverImage, title, price } = this.props;

        return (
            <Wrapper>
                <Content>
                    <CoverImage src={coverImage}/>
                    <Title>{title}</Title>
                    <Price>{price}원</Price>
                    { this.CheckButton({checked}) }
                </Content>
            </Wrapper>
        )
    }
  };
  
  export default Product;