import { API, graphqlOperation } from "aws-amplify";
import { GraphQLResult } from "@aws-amplify/api-graphql";
import { FC, useCallback, useEffect, useState } from "react";
import { listBoards } from "../graphql/queries";
import { ListBoardsQuery } from "../API";
import { Board } from "../models";

const SelectByGraphQLAPI: FC = () => {
  const [content, setContent] = useState<JSX.Element[]>();
  const getBoards = useCallback(async (): Promise<
    Array<Board | null> | undefined
  > => {
    // https://zenn.dev/ynakamura/articles/210460b470f7b973e5cc
    // amplify-graphQLResultの型をamplify codegenで生成するAPI.tsから取得
    try {
      const result = (await API.graphql(
        graphqlOperation(listBoards)
      )) as GraphQLResult<ListBoardsQuery>;
      console.log(result.data?.listBoards);
      return result.data?.listBoards?.items;
    } catch (err) {
      console.log(err);
    }
  }, []);

  useEffect(() => {
    const data = async (): Promise<void> => {
      const values = await getBoards();
      if (values !== undefined) {
        const list = values.map((value) => {
          return (
            <div key={value?.id}>
              <p>{value?.name}</p>
            </div>
          );
        });
        setContent(list);
      }
    };

    void data();
  }, [getBoards]);

  return <div>{content}</div>;
};

export default SelectByGraphQLAPI;
