class ProjectInput {
  templateElement: HTMLTemplateElement;
  hostElement: HTMLDivElement;
  element: HTMLFormElement;
  constructor(){
    this.templateElement =  document.getElementById("project-input")! as HTMLTemplateElement;
    this.hostElement = document.getElementById("app")! as HTMLDivElement; 
    
    const importElement = document.importNode(this.templateElement.content, true);
    this.element = importElement.firstElementChild as HTMLFormElement;
  }
  attach() {
    this.hostElement.insertAdjacentElement("afterbegin", this.element)
  }



}

console.log("Hello");


const prjInput = new ProjectInput();