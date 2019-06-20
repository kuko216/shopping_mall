import React from 'react';
import styled from 'styled-components';
import oc from 'open-color';

import { observer, inject } from 'mobx-react';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.2);
    margin: 10px 0;
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
    background-color: ${oc.red[6]}
    color: white;     
    cursor: pointer;   
`

const PopButton = styled.button`
    border: none;
    font-size: 1rem;
    width: 4rem;
    height: 2rem;
    background-color: ${oc.gray[2]}
    color: ${oc.red[8]};
    cursor: pointer;
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
        if(this.props.marketStore.getLength() >= 3){
            alert('장바구니는 최대 3개의 상품만 담을 수 있습니다.');
            return;
        }
        this.setState({
            checked: true
        })
        this.props.marketStore.pushItem(this.props.id, this.props.price);
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
                <ImageWrapper>
                    <CoverImage src={coverImage}/>
                </ImageWrapper>
                <Content>
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