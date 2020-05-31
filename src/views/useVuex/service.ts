function Loading(value: boolean) {
  return function(
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    let loading = value;
    console.log("value", descriptor);
  };
}
class Greeter {
  greeting: string;
  constructor(message: string) {
    this.greeting = message;
  }

  @Loading(false)
  async greet() {
    const data = await setTimeout(() => {
      return Promise.resolve({ a: 111 });
    }, 2000);
    console.log("get res", data);
  }
}

const res = new Greeter("sssss").greet();
