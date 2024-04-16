export default class Accordion {
  constructor(list) {
    this.accordionList = document.querySelectorAll(list);
    this.activeClass = 'ativo';
  }

  toggleAccordion(item) {
    item.classList.toggle(this.activeClass);
    item.nextElementSibling.classList.toggle(this.activeClass);
  }

  //adiciona eventos ao accordion
  addAcordionEvent(){
    this.accordionList.forEach((item) => {
      item.addEventListener('click', () => this.toggleAccordion(item));
    });
  }

  //iniciar funcao
  init() {
    this.if(this.accordionList.length){
      this.toggleAccordion(this.accordionList[0]);
      this.addAcordionEvent();
    }
  }
}
