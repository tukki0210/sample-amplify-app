import "./App.css";
import { FC, useEffect, useState } from "react";
import "@aws-amplify/ui-react/styles.css";
import {
  Amplify,
  Auth,
  DataStore,
  Predicates,
  SortDirection,
} from "aws-amplify";
// import { Authenticator } from "@aws-amplify/ui-react";
import { Header } from "./ui-components";

import aws_exports from "./aws-exports";
// import BoardComponentCollection from "./ui-components/BoardComponentCollection";
import PersonComponentCollection from "./ui-components/PersonComponentCollection";
import { Board, Person } from "./models";
import BoardComponent from "./ui-components/BoardComponent";
import SelectComponent from "./crud/select";

Amplify.configure(aws_exports);

// const content1 = <BoardComponentCollection />;
const content2 = <PersonComponentCollection />;
const content3 = <p>タブ３のコンテンツ</p>;
const content4 = <p>タブ４のコンテンツ</p>;

const App: FC = () => {
  return (
    <div className="py-4">
      <Header className="mb-4" />
      <p>これは、UIコンポーネントを利用した表示です。</p>
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <a href="#tab1" className="nav-link active" data-bs-toggle="tab">
            List
          </a>
        </li>
        <li className="nav-item">
          <a href="#tab2" className="nav-link" data-bs-toggle="tab">
            Create
          </a>
        </li>
        <li className="nav-item">
          <a href="#tab3" className="nav-link" data-bs-toggle="tab">
            Update
          </a>
        </li>
        <li className="nav-item">
          <a href="#tab4" className="nav-link" data-bs-toggle="tab">
            Delete
          </a>
        </li>
      </ul>
      <div className="tab-content">
        <div id="tab1" className="my-2 tab-pane active">
          <SelectComponent />
        </div>
        <div id="tab2" className="my-2 tab-pane ">
          {content2}
        </div>
        <div id="tab3" className="my-2 tab-pane">
          {content3}
        </div>
        <div id="tab4" className="my-2 tab-pane">
          {content4}
        </div>
      </div>
      <p className="my-2">
        <a href="." className="btn btn-primary" onClick={Auth.signOut}>
          Sign Out
        </a>
      </p>
    </div>
  );
};

export default App;
