import React from 'react';
import styled from 'styled-components';
import oc from 'open-color';

import { observer, inject } from 'mobx-react';

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

const CheckBox = styled.input`

`

const CountInput = styled.input`

`

const Select = styled.select`

`

@inject('marketStore')
@observer
class WishlistItem extends React.Component{
    render(){
        const { title, price, coverImage } = this.props;

        return (
            <WhiteBox>
                <Wrapper>
                    <CheckBox type="checkbox" />
                    <CoverImage src={coverImage}/>
                    {title}
                    {price}
                    <CountInput type="number" />
                    <Select />
                </Wrapper>
            </WhiteBox>
        )
    }
  };
  
  export default WishlistItem;