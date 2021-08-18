export class Expense {
  private amount: number;
  private description: string;
  private date: Date;

  constructor($amount: number, $description: string, $date: Date) {
    this.amount = $amount;
    this.description = $description;
    this.date = $date;
  }

  /**
   * Getter $amount
   * @return {number}
   */
  public get $amount(): number {
    return this.amount;
  }

  /**
   * Getter $description
   * @return {string}
   */
  public get $description(): string {
    return this.description;
  }

  /**
   * Getter $date
   * @return {Date}
   */
  public get $date(): Date {
    return this.date;
  }

  /**
   * Setter $amount
   * @param {number} value
   */
  public set $amount(value: number) {
    this.amount = value;
  }

  /**
   * Setter $description
   * @param {string} value
   */
  public set $description(value: string) {
    this.description = value;
  }

  /**
   * Setter $date
   * @param {Date} value
   */
  public set $date(value: Date) {
    this.date = value;
  }
}
