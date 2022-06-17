import promptSync from 'prompt-sync';

export default class Input {
  public receiveNumber(message: string): number {
    let prompt = promptSync();
    let value = prompt(`${message}: `);
    let number = new Number(value);
    return number.valueOf();
  }
  public receiveText(message: string): string {
    let prompt = promptSync();
    let text = prompt(`${message}: `);
    return text;
  }
  public receiveDate(message: string): Date {
    let prompt = promptSync();
    let text = prompt(`${message}, no padrão dd/MM/yyyy: `);
    let parts = text.split('/');
    let year = new Number(parts[2]);
    let month = new Number(parts[1]);
    let day = new Number(parts[0]);
    let date = new Date(year.valueOf(), month.valueOf() - 1, day.valueOf());
    return date;
  }
}
