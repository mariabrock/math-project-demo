interface Person {
  name: string;
  age?: number;
  formatName: () => string;
}

// remember: the ? means that a property is optional!