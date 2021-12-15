import { Adresse } from '../models/adresse';

export class AddAdresse {
  static readonly type = '[Adresse] Add';

  constructor(public payload: Adresse) {}
}

export class DelAdresse{
  static readonly type = '[Adresse] Del';

  constructor(public payload: Adresse) {}
}
