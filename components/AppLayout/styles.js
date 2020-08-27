import css from 'styled-jsx/css'

import {fonts, colors, breakpoints} from '../../styles/theme'
import {addOpacityColor} from '../../styles/utils'


const backgroundColor = addOpacityColor(colors.primary, 0.3)


export const globalStyles = css.global`
  html,body{

    background-image: radial-gradient(${colors.primary} 1px, transparent 1px), radial-gradient(${colors.primary} 1px, transparent 1px) ;
    background-position: 0,0,25px,25px;
    background-size:50px 50px;

    padding: 0;
    margin:0;
    font-family: ${fonts.base};
  }

`


export default css`
  div{
    display: grid;
    height: 100vh;
    place-items:center;
  }

  main{
    background: #fff;
    border-radius: 10px;
    box-shadow:0 10px 25px rgba(0,0,0,0.3);
    width:100%:
  }

  @media (min-width: ${breakpoints.mobile}){
    main{
      width:${breakpoints.mobile};
      height: 95vh;
    }
  }

`