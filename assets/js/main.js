
const myBtn = document.querySelector("#box-button");
const mysquare = document.querySelector(".box ");
const mytext = document.querySelector(".box p");
myBtn.addEventListener('click', function(event){
    mysquare.classList.add('transform-active');

});

class TabLink {
    constructor(domElement) {
        this.domElement = domElement;
        console.log(this.domElement)

        this.data = this.domElement.dataset.tab;
        console.log(this.data)

        this.itemElement = document.querySelector(`.tabs-item[data-tab='${this.data}']`);

        this.tabItem = new TabItem(this.itemElement);

        this.domElement.addEventListener('click', this.selectTab.bind(this));
    }

    selectTab() {
        const links = document.querySelectorAll('.tabs-link');

        links.forEach(function(link){
            link.classList.remove('active-link');
        })

        this.domElement.classList.add('active-link');

        this.tabItem.selectTab();
    }
}

class TabItem {
    constructor(domElement) {
        this.domElement = domElement;
    }

    selectTab() {
        const items = document.querySelectorAll('.tabs-item')

        items.forEach(function(tab){
            tab.classList.remove('active-tab')
        })

        this.domElement.classList.add('active-tab')
    }
}


const links = document.querySelectorAll('.tabs-link');
links.forEach(link => new TabLink(link))



