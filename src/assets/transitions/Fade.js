import React from 'react'
import {CSSTransition} from 'react-transition-group'
import './fade.css'

export default ({children, toggle}) =>{

   return (
      <CSSTransition in={toggle} timeout={700} unmountOnExit classNames="fade">
         {children}
      </CSSTransition>
   )
}