import { DataStore, Predicates, SortDirection } from "aws-amplify";
import { FC, useEffect, useState } from "react";
import { Board, Person } from "../models";
import BoardComponent from "../ui-components/BoardComponent";

const SelectComponent: FC = () => {
  const [content, setContent] = useState<JSX.Elemen[]>();
  const [input, setInput] = useState<string>("");
  const [find, setFind] = useState<string>(input);

  const doChange = (event: any): void => {
    setInput(event.target.value);
  };

  const doFilter = (): void => {
    setFind(input);
  };

  const getPersonByBoard = async (board: Board): Promise<Person> => {
    const person = await DataStore.query(Person, (ob) =>
      ob.id("eq", board.personID)
    );
    return person[0];
  };

  const getBoard = async (): Promise<Board[]> => {
    const boards = await DataStore.query(Board, Predicates.ALL, {
      sort: (ob) => ob.createdAt(SortDirection.DESCENDING),
      page: +input,
      limit: 3,
    });
    return boards;
  };

  useEffect(() => {
    const data = async (): Promise<void> => {
      const values = await getBoard();
      // map関数内で非同期処理（非同期イテレーター）
      const list = await Promise.all(
        values.map(async (value) => {
          const person = await getPersonByBoard(value);

          return (
            <div key={value.id}>
              <BoardComponent board={value} />
              <p className="text-end">posted by {person?.email}</p>
            </div>
          );
        })
      );
      setContent(list);
    };
    void data();
  }, [input, find]);

  return (
    <ol className="my-3 list-group">
      <div className="my-2">
        <input type="text" className="form-control col" onChange={doChange} />
        <button className="btn btn-primary col-2 my-2" onClick={doFilter}>
          Click
        </button>
      </div>
      {content}
    </ol>
  );
};
export default SelectComponent;
