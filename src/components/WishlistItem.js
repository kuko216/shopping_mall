import React from 'react';
import styled from 'styled-components';
import oc from 'open-color';

import { observer, inject } from 'mobx-react';

const Container = styled.div`
    display: flex;
    width: 100%;
`

const WhiteBox = styled.div`
    width: 100%;
    margin: 5px 0;
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.2);
    height: 100px;
`

const Wrapper = styled.div`
    height: 100%;
    box-sizing: border-box;
    padding: 10px;
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
    padding: 10px;
    max-width: 300px;
`

const SelectWrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 10px;
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
`

const Price = styled.h3`
    margin: 0;
`

const SelectBox = styled.div`
    width: 100%;
    display: flex;
`

const Desc = styled.span`
    margin-right: 10px;
`

const Spacer = styled.div`
    flex:1;
`

@inject('marketStore')
@observer
class WishlistItem extends React.Component{

    onChangeCount = (e) => {
        if(e.target.value <= 0){ return; }
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
                <CheckBox type="checkbox" defaultChecked={checked} onChange={this.onChangeChecked}/>
                <WhiteBox>
                    <Wrapper>
                        <CoverImage src={coverImage}/>
                        <TextBox>
                            <Title>{title}</Title>
                            <Price>{price}원</Price>
                        </TextBox>
                        <Spacer />
                        <SelectWrapper>
                            <Spacer />
                            <SelectBox>
                                <Desc>개수</Desc>
                                <CountInput 
                                    type="number" 
                                    value={count}
                                    onChange={this.onChangeCount}
                                />
                            </SelectBox>
                        </SelectWrapper>
                    </Wrapper>
                </WhiteBox>
            </Container>
        )
    }
  };
  
  export default WishlistItem;