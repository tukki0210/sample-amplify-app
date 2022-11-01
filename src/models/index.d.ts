import { ModelInit, MutableModel } from "@aws-amplify/datastore";

type PersonMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type BoardMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Person {
  readonly id: string;
  readonly Boards?: (Board | null)[] | null;
  readonly name: string;
  readonly email: string;
  readonly age?: number | null;
  readonly tel?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Person, PersonMetaData>);
  static copyOf(source: Person, mutator: (draft: MutableModel<Person, PersonMetaData>) => MutableModel<Person, PersonMetaData> | void): Person;
}

export declare class Board {
  readonly id: string;
  readonly message?: string | null;
  readonly name?: string | null;
  readonly image?: string | null;
  readonly personID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Board, BoardMetaData>);
  static copyOf(source: Board, mutator: (draft: MutableModel<Board, BoardMetaData>) => MutableModel<Board, BoardMetaData> | void): Board;
}