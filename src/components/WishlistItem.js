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
        return (
            <Wrapper>
                {this.props.id}
            </Wrapper>
        )
    }
  };
  
  export default WishlistItem;