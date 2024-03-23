export interface IToast {
  text: string;
  dismissible?: boolean;
  created?: Date;
  id?: number;
  type?: 'info' | 'warning';
  timeout?: number;
}