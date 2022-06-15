export class Validators {
  static checkENV = (str:string) => {
    if (!process.env[str]) {
      console.log(`⚡️[server]: No ${str} variable found at .env`);
      return process.exit(0);
    }

    return process.env[str];
  };
};
