/**
 * 
 */
 
const __config = {
  password: '1234'
}
 
export default class Android {
  constructor(views, lastConfig = {}) {
    this.Views = views;
  }
  
  //     GETTER AND SETTER
  
  get password(){
    return __config.password
  }
  
  
}
