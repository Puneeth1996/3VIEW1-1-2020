import React, { Component } from 'react'

import style from './index.module.css'

export default class TextAnimation extends Component {
    
    render() {


        var TxtRotate = function(el, toRotate, period) {
            this.toRotate = toRotate;
            this.el = el;
            this.loopNum = 0;
            this.period = parseInt(period, 10) || 2000;
            this.txt = '';
            this.tick();
            this.isDeleting = false;
        };
        
        TxtRotate.prototype.tick = function() {
            var i = this.loopNum % this.toRotate.length;
            var fullTxt = this.toRotate[i];
        
            if (this.isDeleting) {
                this.txt = fullTxt.substring(0, this.txt.length - 1);
            } else {
                this.txt = fullTxt.substring(0, this.txt.length + 1);
            }
            
            this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';
            
            var that = this;
            var delta = 300 - Math.random() * 100;
            
            if (this.isDeleting) { delta /= 2; }
            
            if (!this.isDeleting && this.txt === fullTxt) {
                delta = this.period;
                this.isDeleting = true;
            } else if (this.isDeleting && this.txt === '') {
                this.isDeleting = false;
                this.loopNum++;
                delta = 500;
            }
            
            setTimeout(function() {
                that.tick();
            }, delta);
        };
        
        window.onload = function() {
            var elements = document.getElementsByClassName('txt-rotate');
            for (var i=0; i<elements.length; i++) {
                var toRotate = elements[i].getAttribute('data-rotate');
                var period = elements[i].getAttribute('data-period');
                if (toRotate) {
                    new TxtRotate(elements[i], JSON.parse(toRotate), period);
                }
            }
            // INJECT CSS
            var css = document.createElement("style");
            css.type = "text/css";
            css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #666 }";
            document.body.appendChild(css);
        };


        return (
            <div className={style.TextAnimation}>
                {/* https://codepen.io/puneeth1996p/pen/povprGm */}
                {/* https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_typewriter */}
                
                <h1>3View: visualise 
                    <span
                        class="txt-rotate"
                        data-period="2000"
                        data-rotate='[" Home that needs to visualised", 
                        " Home that are to be built", 
                        " Home to be redesigned." ]'>
                    </span>
                </h1>
            </div>
        )
    }
}



