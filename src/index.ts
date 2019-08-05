interface Name {
  fullname: string;
  lastname: string;
}

class pdf implements Name {
  fullname = 's';
  lastname = 'a';
  render() {
    console.log('i am render');
  }
}
new pdf().render();
