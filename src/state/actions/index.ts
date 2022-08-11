import { ActionType } from './../action-types/index';

interface SearchRepositories {
  type: ActionType.SEARCH_REPOSITORIES;
}

interface SearchRepositoresSuccessAction {
  type: ActionType.SEARCH_REPOSITORIES_SUCCESS;
  payload: string[];
}

interface SearchRepositoresErrorAction {
  type: ActionType.SEARCH_REPOSITORIES_ERROR;
  payload: string;
}

//prettier-ignore
export type Action = 
  SearchRepositories | 
  SearchRepositoresSuccessAction | 
  SearchRepositoresErrorAction;
