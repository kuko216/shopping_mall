import React from 'react';
import styled from 'styled-components';
import oc from 'open-color';

import { observer, inject } from 'mobx-react';

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

const Title = styled.span`
    margin: 0;
`

const Price = styled.p`
    margin: 0;
`

const ImageWrapper = styled.div`
    width: 100%;
    padding-top: 52.63%;
    position: relative;
    display: block;
`

const CoverImage = styled.img`
    background: #dee2e6;
    -o-object-fit: cover;
    object-fit: cover;
    display: block;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
`

const Spacer = styled.div`
    flex: 1;
`

const PushButton = styled.button`
    border: none;
    font-size: 1rem;
    width: 4rem;
    height: 2rem;
    background-color: ${oc.gray[7]}
    color: white;        
`

const PopButton = styled.button`
    border: none;
    font-size: 1rem;
    width: 4rem;
    height: 2rem;
    background-color: ${oc.gray[4]}
    color: ${oc.gray[7]};    
`

const ButtonWrapper = styled.div`
    display: flex;
`

@inject('marketStore')
@observer
class Product extends React.Component{

    state = {
        checked: false
    }

    componentDidMount(){
        if(this.props.marketStore.selectedItems.map(i=>i.id).indexOf(this.props.id) !== -1){
            this.setState({
                checked: true
            })
        }
    }

    CheckButton = ({checked}) => {
        if(checked){
            return (
                <PopButton checked={checked} onClick={this.popItem}>빼기</PopButton>
            )
        } else {
            return (
                <PushButton checked={checked} onClick={this.pushItem}>담기</PushButton>
            )
        }
    }

    pushItem = () => {
        this.setState({
            checked: true
        })
        console.log(this.props.id)
        this.props.marketStore.pushItem(this.props.id);
    }

    popItem = () => {
        this.setState({
            checked: false
        })
        this.props.marketStore.popItem(this.props.id);
    }

    render(){
        const { checked } = this.state;
        const { coverImage, title, price } = this.props;

        return (
            <Wrapper>
                <Content>
                    <ImageWrapper>
                        <CoverImage src={coverImage}/>
                    </ImageWrapper>
                    <Title>{title}</Title>
                    <ButtonWrapper>
                        <Price>{price}원</Price>
                        <Spacer/>
                        { this.CheckButton({checked}) }
                    </ButtonWrapper>
                </Content>
            </Wrapper>
        )
    }
  };
  
  export default Product;