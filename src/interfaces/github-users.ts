import { GithubUser } from './github-user';

export interface GithubUsers {
    total_count:        number;
    incomplete_results: boolean;
    items:              GithubUser[];
}

