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
    height: 200px;
`

const Wrapper = styled.div`
    height: 100%;
    box-sizing: border-box;
    padding: 10px;
    display: flex;
`

const CoverImage = styled.img`
    height: 100%;
    width: 300px;
    background: #dee2e6;
    display: block;
`

const TextBox = styled.div`
    display: flex;
    flex-direction: column;
    padding: 10px;
`

const CheckBox = styled.input`
    margin: auto 10px;
`

const CountInput = styled.input`
    width: 50px;
`

const Select = styled.select`

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

@inject('marketStore')
@observer
class WishlistItem extends React.Component{
    render(){
        const { title, price, coverImage, index } = this.props;

        return (
            <Container>
                <CheckBox type="checkbox" id={"checkbox"+index} />
                <WhiteBox>
                    <Wrapper>
                        <CoverImage src={coverImage}/>
                        <TextBox>
                            <Title>{title}</Title>
                            <Price>{price}원</Price>

                            <SelectBox>
                                <Desc>갯수</Desc>
                                <CountInput type="number" />
                            </SelectBox>
                            <SelectBox>
                                <Desc>쿠폰</Desc>
                                <Select>
                                    <option selected>쿠폰을 선택하세요.</option>
                                    <option>옵션1</option>
                                    <option>옵션2</option>
                                </Select>
                            </SelectBox>
                        </TextBox>
                    </Wrapper>
                </WhiteBox>
            </Container>
        )
    }
  };
  
  export default WishlistItem;