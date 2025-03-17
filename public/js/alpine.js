import Alpine from "alpinejs";
import { animate } from "motion";

window.Alpine = Alpine;
document.addEventListener('alpine:init', () => {
    Alpine.data('navbarData', () => {
            return {
                growText(element){
                    animate(`#${element.target.id}`,{ scale:1.2})
                },
                shrinkText(element){
                    animate(`#${element.target.id}`,{ scale:1})
                },
                handleMainLinkOn(element){
                    animate(`#${element.target.nextElementSibling.id}`,{ scaleX: [0, 1] },{ duration: 0.2, ease: ["easeIn", "easeOut"]  })
                },
                handleMainLinkOff(element){
                    animate(`#${element.target.nextElementSibling.id}`,{ scaleX: [1, 0] },{ duration: 0.2, ease: ["easeIn", "easeOut"]  })
                }
            }
        });
        Alpine.data('footerData', () => {
            return {
                grow(element){
                    animate(`#${element.target.id}`,{ scale:1.1})
                },
                shrink(element){
                    animate(`#${element.target.id}`,{ scale:1})
                },
            }
        });
        Alpine.data('dropdown', () => {
            return {
                open: false,
        		get isOpen() {
          			return this.open;
        		},
        		toggle() {
          			this.open = !this.open;
                    if(this.open==true){
                        animate(".arrow-icon",{rotate:180})
                        this.underlineOn()
                    }else{
                        animate(".arrow-icon",{rotate:360})
                        this.underlineOff()
                    }
        		},
                underlineOn(){
                    this.open=true
                    animate(".arrow-icon",{rotate:180})
                    animate(`#linkPages`,{ scaleX: [0, 1] },{ duration: 0.2, ease: ["easeIn", "easeOut"]  })
                },
                underlineOff(){
                    animate(`#linkPages`,{ scaleX: [1, 0] },{ duration: 0.2, ease: ["easeIn", "easeOut"]  })
                },
                growText(element){
                    animate(`#${element.target.id}`,{ scale:1.2})
                },
                shrinkText(element){
                    animate(`#${element.target.id}`,{ scale:1})
                },
            }
        });
        Alpine.data('bookCardData', () => {
            return {
                dropdownOpen:false,
                get isdropdownOpen() {
                    return this.dropdownOpen;
        		},
        		arrowToggle() {
                    this.dropdownOpen = !this.dropdownOpen;
                    if(this.dropdownOpen==true){
                        animate("#bookingCardArrowIcon",{rotate:180})
                    }else{
                        animate("#bookingCardArrowIcon",{rotate:360})
                    }
        		},
            }
        });
    });
Alpine.start();