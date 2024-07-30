export interface ReleaseModel {
  title: string;
  type: 'input' | 'output';
  recurrent: boolean
  value: number;
  date_release: Date;
}
