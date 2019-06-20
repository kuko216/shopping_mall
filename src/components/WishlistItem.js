import React from 'react';
import styled from 'styled-components';
import oc from 'open-color';

import { observer, inject } from 'mobx-react';

const Wrapper = styled.div`
    width: 100%;
`

@inject('marketStore')
@observer
class WishlistItem extends React.Component{
    render(){
        const { title, price } = this.props;

        return (
            <Wrapper>
                {title}
                {price}
            </Wrapper>
        )
    }
  };
  
  export default WishlistItem;