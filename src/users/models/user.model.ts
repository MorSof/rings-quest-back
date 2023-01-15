export class User {
  id: string;
  name?: string;
  email?: string;

  constructor(partial: Partial<User>) {
    Object.assign(this, partial);
  }
}
