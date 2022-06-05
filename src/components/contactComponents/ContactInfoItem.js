import React from 'react';
import { MdPlace } from 'react-icons/md';
import styled from 'styled-components';

const ItemStyles = styled.div`
  
  display: flex;
  align-items: center;
  background-color: #256ce1;
  border-radius: 20px;
  margin-bottom: 20px;
  width: 400px;
  
  .icon {
    color: #fff;
    background-color: black;
    padding: 1.3rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 20px 0 0 20px;
  }
  .text{
    font-size: 20px;
    color: #fff;
    margin-left: 20px;
  }
  svg {
    width: 40px;
    height: 40px;
  }
`;

export default function ContactInfoItem({
  icon = <MdPlace />,
  text = 'I need text ',
}) {
  return (
    <ItemStyles>
      <div className="icon">{icon}</div>
      <div className="info">
        <div className='text'>{text}</div>
      </div>
    </ItemStyles>
  );
}