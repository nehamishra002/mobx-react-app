import { observable, action, reaction, autorun } from 'mobx';

export class TodoStore {
    @observable todos = [];
    @observable filter = "";

    constructor(){
      this.todos = ['walk pogo', 'take pogo to the park', 'buy orange juice from Benison'];
    }
}
var todoStore = window.store = new TodoStore;

export default new TodoStore();

autorun(() => {
  console.log(TodoStore.todos);
})
