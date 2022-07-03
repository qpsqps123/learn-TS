function greeter(person: string) {
    return "Hello, " + person;
  }
   
  let user = `Mr.Lee`;
   
document.body.textContent = greeter(user);

console.log(greeter(user));