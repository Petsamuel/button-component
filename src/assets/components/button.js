import React from "react";
// import { useState } from 'react'

function Button() {
    const btn = ["Default", "Disabled", "Secondary", "Danger"]
    return (
        <React.Fragment>
            <div className="container">
                <div className="title">
                    Buttons
                </div>
                <div class="container-flex col-2">
                   <div className="wrapper">
                    <label htmlFor="button">{`< Button/>`}</label>
                    <input className="button-1" type="button" id="button" value={btn[0]}/>
                   </div>
                   <div className="wrapper">
                    <label htmlFor="button">{`&:hover, &:focus`}</label>
                    <input className="button-2" type="button" id="button" value={btn[0]}/>
                   </div>
                </div>
                <div class="container-flex col-2">
                   <div className="wrapper">
                    <label htmlFor="button">{`<Button variant=”outline” />`}</label>
                    <input className="button-3" type="button" id="button" value={btn[0]}/>
                   </div>
                   <div className="wrapper">
                    <label htmlFor="button">{`&:hover, &:focus`}</label>
                    <input className="button-4" type="button" id="button" value={btn[0]}/>
                   </div>
                </div>
                <div class="container-flex col-2 col-3">
                   <div className="wrapper">
                    <label htmlFor="button">{`<Button variant=”text” />`}</label>
                    <input className="button-5" type="button" id="button" value={btn[0]}/>
                   </div>
                   <div className="wrapper">
                    <label htmlFor="button">{`&:hover, &:focus`}</label>
                    <input className="button-6" type="button" id="button" value={btn[0]}/>
                   </div>
                </div>
                <div class="container-flex col-2">
                   <div className="wrapper">
                    <label htmlFor="button">{`<Button disableShadow />`}</label>
                    <input className="button-7" type="button" id="button" value={btn[0]}/>
                   </div>
                </div>
                <div class="container-flex col-2">
                   <div className="wrapper">
                    <label htmlFor="button">{`<Button disabled />`}</label>
                    <input className="button-8" type="button" id="button" value={btn[0]}/>
                   </div>
                   <div className="wrapper">
                    <label htmlFor="button">{`<Button variant=”text” disabled />`}</label>
                    <input className="button-9" type="button" id="button" value={btn[0]}/>
                   </div>
                </div>
                <div class="container-flex col-2">
                   <div className="wrapper">
                    <label htmlFor="button">{`<Button startIcon=”local_grocery_store” />`}</label>
                    <input className="button-10" type="button" id="button" value={btn[0]}/>
                   </div>
                   <div className="wrapper">
                    <label htmlFor="button">{`<Button endIcon=”local_grocery_store” />`} <span></span></label>
                    <input className="button-10" type="button" id="button" value={btn[0]}/>
                   </div>
                </div>
                <div class="container-flex col-2 col-3">
                   <div className="wrapper">
                    <label htmlFor="button">{`<Button size=”sm” />`}</label>
                    <input className="button-12" type="button" id="button" value={btn[0]}/>
                   </div>
                   <div className="wrapper">
                    <label htmlFor="button">{`<Button size=”md” />`} <span></span></label>
                    <input className="button-13" type="button" id="button" value={btn[0]}/>
                   </div>
                   <div className="wrapper">
                    <label htmlFor="button">{`<Button size=”lg” />`} <span></span></label>
                    <input className="button-14" type="button" id="button" value={btn[0]}/>
                   </div>
                </div>
                <div class="container-flex col-2 col-3">
                   <div className="wrapper">
                    <label htmlFor="button">{`<Button color=”default” />`}</label>
                    <input className="button-15" type="button" id="button" value={btn[0]}/>
                   </div>
                   <div className="wrapper">
                    <label htmlFor="button">{`<Button color=”primary” />`} <span></span></label>
                    <input className="button-16" type="button" id="button" value={btn[0]}/>
                   </div>
                   <div className="wrapper">
                    <label htmlFor="button">{`<Button color=”secondary” />`} <span></span></label>
                    <input className="button-17" type="button" id="button" value={btn[2]}/>
                   </div>
                   <div className="wrapper">
                    <label htmlFor="button">{`<Button color=”danger” />`} <span></span></label>
                    <input className="button-18" type="button" id="button" value={btn[3]}/>
                   </div>
                </div>
                <div class="container-flex col-2 col-3">
                   <div className="wrapper">
                    <label htmlFor="button">{`&:hover, &:focus`}</label>
                    <input className="button-19" type="button" id="button" value={btn[0]}/>
                   </div>
                   <div className="wrapper"> 
                   <label htmlFor="button">{` `}</label>
                    <input className="button-20" type="button" id="button" value={btn[0]}/>
                   </div>
                   <div className="wrapper">
                   <label htmlFor="button">{` `}</label>
                    <input className="button-21" type="button" id="button" value={btn[2]}/>
                   </div>
                   <div className="wrapper">
                   <label htmlFor="button">{` `}</label>
                    <input className="button-22" type="button" id="button" value={btn[3]}/>
                   </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Button;
