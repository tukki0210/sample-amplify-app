/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreatePerson = /* GraphQL */ `
  subscription OnCreatePerson {
    onCreatePerson {
      id
      Boards {
        nextToken
        startedAt
      }
      name
      email
      age
      tel
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onUpdatePerson = /* GraphQL */ `
  subscription OnUpdatePerson {
    onUpdatePerson {
      id
      Boards {
        nextToken
        startedAt
      }
      name
      email
      age
      tel
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onDeletePerson = /* GraphQL */ `
  subscription OnDeletePerson {
    onDeletePerson {
      id
      Boards {
        nextToken
        startedAt
      }
      name
      email
      age
      tel
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onCreateBoard = /* GraphQL */ `
  subscription OnCreateBoard {
    onCreateBoard {
      id
      message
      name
      image
      personID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onUpdateBoard = /* GraphQL */ `
  subscription OnUpdateBoard {
    onUpdateBoard {
      id
      message
      name
      image
      personID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onDeleteBoard = /* GraphQL */ `
  subscription OnDeleteBoard {
    onDeleteBoard {
      id
      message
      name
      image
      personID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
