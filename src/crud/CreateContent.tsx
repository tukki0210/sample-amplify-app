import { DataStore } from "aws-amplify";
import React, { FC, useState } from "react";
import { Board, Person } from "../models";

const CreateContent: FC = () => {
  const [email, setEmail] = useState<string>("");

  const [message, setMessage] = useState<string>("");

  const [image, setImage] = useState<string>("");

  const onEmailChange = (event: React.ChangeEvent<HTMLInputElement>): void =>
    setEmail(event.target.value);

  const onMessageChange = (event: React.ChangeEvent<HTMLInputElement>): void =>
    setMessage(event.target.value);

  const onImageChange = (event: React.ChangeEvent<HTMLInputElement>): void =>
    setImage(event.target.value);

  const getPersonByEmail = async (Email: string): Promise<Person | null> => {
    const person = await DataStore.query(Person, (ob) => ob.email("eq", Email));
    if (person.length !== 1) {
      alert("アカウントが見つかりませんでした。");
      return null;
    } else {
      return person[0];
    }
  };
  const createBoard = async (): Promise<void> => {
    console.log("hi");
    const person = await getPersonByEmail(email);

    const bd = new Board({
      message,
      name: person?.name,
      image: image ?? "",
      personID: person?.id ?? "",
    });

    await DataStore.save(bd);
  };

  const onClick = (): void => {
    void (async () => {
      await createBoard();
    })();
  };

  return (
    <div>
      <h3>Create New Board</h3>
      <div className="alert alert-primary my-3">
        <div className="mb-2">
          <label htmlFor="email" className="col-form-label">
            Email
          </label>
          <input
            type="text"
            className="form-control"
            onChange={onEmailChange}
          />
        </div>
        <div className="mb-2">
          <label htmlFor="message" className="col-form-label">
            Message
          </label>
          <input
            type="text"
            className="form-control"
            onChange={onMessageChange}
          />
        </div>
        <div className="mb-2">
          <label htmlFor="image" className="col-form-label">
            Message
          </label>
          <input type="text" className="form-image" onChange={onImageChange} />
        </div>
        <div className="mb-2 text-center">
          <button className="btn btn-primary" onClick={onClick}>
            Click
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateContent;
