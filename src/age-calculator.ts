import {LitElement, html, css} from 'lit';
import {customElement, state, queryAll} from 'lit/decorators.js';
import './day-month-year-input.js';
import {DayMonthYearInput} from './day-month-year-input.js';

/**
 * An element to calculate age based on user's birthday.
 */
@customElement('age-calculator')
export class AgeCalculator extends LitElement {
    static override styles = css`
        :host {
            --white: hsl(0, 0%, 100%);
            --off-white: hsl(0, 0%, 94%);
            --light-grey: hsl(0, 0%, 86%);
            --smokey-grey: hsl(0, 1%, 44%);
            --off-black: hsl(0, 0%, 8%);
            --purple: hsl(259, 100%, 65%);
            color: var(--off-black);
        }

        .container {
            border-radius: 20px 20px 160px;
            background-color: var(--white);
            padding: 1.5rem 1.5rem 4rem;
        }

        .input-container {
            display: flex;
            align-items: center;
            justify-content: center;
            padding-top: 1rem;
            padding-bottom: 2rem;
            border-bottom: 1px solid var(--light-grey);
            position: relative;
        }

        .amounts-container {
            padding-top: 3rem;
        }

        ul {
            padding: 0;
        }

        li {
            list-style-type: none;
            font-family: 'Poppins', sans-serif;
            font-style: italic;
            font-size: 3.5rem;
            font-weight: 800;
            line-height: 110%;
            white-space: nowrap;
        }

        .purple {
            color: var(--purple);
        }

        .circle {
            background-color: var(--purple);
            width: 4rem;
            height: 4rem;
            border-radius: 50%;
            position: absolute;
            bottom: -2rem;
            display: flex;
            justify-content: center;
            align-items: center;
        }

        .circle img {
            width: 50%;
        }

        @media only screen and (min-width: 720px) {
            .container {
                padding: 3rem;
            }

            .input-container {
                justify-content: start;
                padding-right: 8rem;
                padding-bottom: 1rem;
            }

            li {
                font-size: 5rem;
            }

            .circle {
                width: 5rem;
                height: 5rem;
                right: 0;
                bottom: -2.5rem;
            }
        }
    `;
    private _defaultValue = '--';

    @queryAll('day-month-year-input')
    _inputs!: NodeListOf<DayMonthYearInput>;

    @state()
    private _day = 0;
    @state()
    private _month = 0;
    @state()
    private _year = 0;

    @state()
    private _valid = false;

    @state()
    private _yearsAmount = 0;
    @state()
    private _monthsAmount = 0;
    @state()
    private _daysAmount = 0;

    private _handleInput(e: Event): void {
        const el = e.target as HTMLInputElement;
        const value = parseInt(el.value, 10);
        const format = el.attributes.getNamedItem('format')?.value || '';
        if (format === 'day') {
            this._day = value;
        } else if (format === 'month') {
            this._month = value;
        } else if (format === 'year') {
            this._year = value;
        }
        this.validate(value, format);
    }

    validate(value: number, format: string): void {
        this._valid = false;
        if (format === 'year') {
            const yearInvalid =
                value < 1900 || value > new Date().getFullYear();
            if (yearInvalid) {
                const input = [...this._inputs].find(
                    (input) => input.format === 'year'
                );
                if (input) {
                    input.errorMessage = 'Must be a valid year';
                    return;
                }
            }
        }
        if (format === 'month') {
            const monthInvalid = value < 1 || value > 12;
            if (monthInvalid) {
                const input = [...this._inputs].find(
                    (input) => input.format === 'month'
                );
                if (input) {
                    input.errorMessage = 'Must be a valid month';
                    return;
                }
            }
        }
        if (format === 'day') {
            const dayInvalid = value < 1 || value > 31;
            if (dayInvalid) {
                const input = [...this._inputs].find(
                    (input) => input.format === 'day'
                );
                if (input) {
                    input.errorMessage = 'Must be a valid day';
                    return;
                }
            }
        }
        if (this._year > 0 && this._month > 0 && this._day > 0) {
            const dateWithNoDay = new Date(this._year, this._month, 0);
            const numDays = dateWithNoDay.getDate();
            if (this._day > numDays) {
                const input = [...this._inputs].find(
                    (input) => input.format === 'day'
                );
                if (input) {
                    input.errorMessage = 'Must be a valid day';
                    return;
                }
            }
            const date = new Date(this._year, this._month - 1, this._day);
            if (date) {
                const today = new Date();
                this._valid = true;
                let days = today.getDate() - date.getDate();
                let months = today.getMonth() - date.getMonth();
                let years = today.getFullYear() - date.getFullYear();
                if (days < 0) {
                    months -= 1;
                    days = 31 + days;
                }
                if (months < 0) {
                    years -= 1;
                    months += 12;
                }
                this._yearsAmount = years;
                this._monthsAmount = months;
                this._daysAmount = days;
            }
        }
    }

    override render() {
        return html`
            <div class="container">
                <div class="input-container">
                    <day-month-year-input
                        format="day"
                        @input=${this._handleInput}
                    ></day-month-year-input>
                    <day-month-year-input
                        format="month"
                        @input=${this._handleInput}
                    ></day-month-year-input>
                    <day-month-year-input
                        format="year"
                        @input=${this._handleInput}
                    ></day-month-year-input>
                    <span class="circle"><img src="./icon-arrow.svg" alt="icon arrow" /></span>
                </div>
                <div class="amounts-container">
                    <ul>
                        <li>
                            <span class="purple"
                                >${this._valid
                                    ? this._yearsAmount
                                    : this._defaultValue}</span
                            >
                            years
                        </li>
                        <li>
                            <span class="purple"
                                >${this._valid
                                    ? this._monthsAmount
                                    : this._defaultValue}</span
                            >
                            months
                        </li>
                        <li>
                            <span class="purple"
                                >${this._valid
                                    ? this._daysAmount
                                    : this._defaultValue}</span
                            >
                            days
                        </li>
                    </ul>
                </div>
            </div>
        `;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'age-calculator': AgeCalculator;
    }
}
