export class User {
  name: string;
  email: string;
  username: string;
  password: string;
  rules: string[];
  appRules: Array<{id: number, ruleName: string}>;
}
