class SpecialHeader extends HTMLElement{
    connectedCallback () {
        this.innerHTML = `
         <div>
             <header>
                        <a href="header.html">Home</a>
                        <a href= "About.html">About</a>
                        <a href="contact.html">contact</a>
                        <a href="https://ann910.wordpress.com/">Blog</a>
            </header>
                    
            
            </div>
        `
    }
    
            
}
class SpecialFooter extends HTMLElement{
    connectedCallback () {
        this.innerHTML=`
        <div>
        <footer>
        <p>&copy; 2024 My Web Application</p>
    </footer>
    </div>
        `
    }
}
customElements.define(`special-header`,SpecialHeader)
customElements.define(`special-footer`,SpecialFooter)