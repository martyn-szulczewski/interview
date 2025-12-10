export interface Journal {
  author: string;
  publicationDate: string;
  text: string;
}

export interface GetJournalsResponse {
  journals: Journal[];
}
