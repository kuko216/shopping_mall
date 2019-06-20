import React from 'react';
import styled from 'styled-components';
import oc from 'open-color';

import { observer, inject } from 'mobx-react';

const Container = styled.div`
    display: flex;
    width: 100%;
    @media (max-width: 700px) {
        flex-direction: column;
    }
`

const WhiteBox = styled.div`
    width: 100%;
    margin: 5px 0;
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.2);
    height: 100px;
    @media (max-width: 650px) {
        height: 150px;
    }
`

const Wrapper = styled.div`
    height: 100%;
    box-sizing: border-box;
    padding: 10px;
    display: flex;
    @media (max-width: 650px) {
        flex-direction: column;
    }
`

const Content = styled.div`
    display: flex;
`

const CoverImage = styled.img`
    height: 100%;
    width: 150px;
    background: #dee2e6;
    display: block;
`

const TextBox = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0 10px;
    max-width: 300px;
`

const SelectWrapper = styled.div`
    display: flex;
    flex-direction: column-reverse;
    padding: 10px;
`

const CheckBoxPositioner = styled.div`
    display: flex;
    flex-direction: row-reverse;
`

const CheckBox = styled.input`
    margin: auto 10px;
    cursor: pointer;
`

const CountInput = styled.input`
    width: 50px;
`

const Title = styled.span`
    margin: 0;
    display: block;
`

const Price = styled.h3`
    margin: 0;
    display: block;
`

const SelectBox = styled.div`
    display: flex;
    flex-direction: row-reverse;
`

const Desc = styled.span`
    margin-right: 10px;
    display: block;
`

const Spacer = styled.div`
    flex:1;
`

@inject('marketStore')
@observer
class WishlistItem extends React.Component{

    onChangeCount = (e) => {
        if(e.target.value < 0){ return; }
        this.props.marketStore.changeCount(this.props.id, e.target.value);
    }

    onChangeCoupon = (e) => {
        this.props.marketStore.changeCoupon(this.props.id, e.target.value);
    }

    onChangeChecked = (e) => {
        this.props.marketStore.toggleChecked(this.props.id);
    }

    render(){
        const { title, price, coverImage, index } = this.props;

        const { count, coupon, checked } = this.props.marketStore.getItem(this.props.id);    

        return (
            <Container>
                <CheckBoxPositioner>
                    <CheckBox type="checkbox" defaultChecked={checked} onChange={this.onChangeChecked}/>
                </CheckBoxPositioner>
                <WhiteBox>
                    <Wrapper>
                        <Content>
                            <CoverImage src={coverImage}/>
                            <TextBox>
                                <Title>{title}</Title>
                                <Price>{price.toLocaleString(navigator.language, { minimumFractionDigits: 0 })}원</Price>
                            </TextBox>
                        </Content>
                        <Spacer />
                        <SelectWrapper>
                            <SelectBox id="box">
                                <CountInput 
                                    type="number" 
                                    value={count}
                                    onChange={this.onChangeCount}
                                />
                                <Desc>개수</Desc>
                            </SelectBox>
                        </SelectWrapper>
                    </Wrapper>
                </WhiteBox>
            </Container>
        )
    }
  };
  
  export default WishlistItem;