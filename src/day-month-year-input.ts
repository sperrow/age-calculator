import {LitElement, html, css} from 'lit';
import {customElement, property, query} from 'lit/decorators.js';

type InputFormat = 'day' | 'month' | 'year';
type InputPlaceholder = 'DD' | 'MM' | 'YYYY';

/**
 * An input type="number" element for day, month, or year.
 */
@customElement('day-month-year-input')
export class DayMonthYearInput extends LitElement {
    static override styles = css`
        :host {
            --white: hsl(0, 0%, 100%);
            --off-white: hsl(0, 0%, 94%);
            --light-grey: hsl(0, 0%, 86%);
            --smokey-grey: hsl(0, 1%, 44%);
            --off-black: hsl(0, 0%, 8%);
            --light-red: hsl(0, 100%, 67%);
            font-family: 'Poppins', sans-serif;
            font-weight: 700;
            font-size: 32px;
            color: var(--smokey-grey);
        }
        
        .container {
            margin: 0 0.5rem;
            padding-bottom: 3rem;
            display: flex;
            flex-direction: column;
            position: relative;
        }
        
        .label {
            text-transform: uppercase;
            font-size: 0.75rem;
            padding-bottom: 0.5rem;
            letter-spacing: 0.2rem;
        }

        .invalid .label {
            color: var(--light-red);
        }

        .input {
            min-width: 4rem;
            padding: 1rem;
            border-radius: 10px;
            border: 1px solid var(--light-grey);
            font-size: 1.5rem;
            font-weight: 700;
            color: var(--off-black);
        }

        .input:invalid {
            border-color: var(--light-red);
        }

        input:focus:invalid {
            outline: none;
        }

        .error {
            width: 100%;
            padding: 0;
            font-size: 0.75rem;
            color: var(--light-red);
            box-sizing: border-box;
            font-style: italic;
            font-weight: 400;
            position: absolute;
            top: 66%;
        }

        .error.active {
            padding: 0.3em;
        }

        @media only screen and (min-width: 720px) {
            .container {
                margin: 1rem;
            }
            .input {
                min-width: 6rem;
            }
        }
    `;

    @query('input')
    _input!: HTMLInputElement;

    @query('.error')
    _error!: HTMLSpanElement;

    _min = 0;
    _max = 0;

    private _format: InputFormat = 'day';
    private _placeholder: InputPlaceholder = 'DD';
    private _invalid = false;

    @property()
    get format() {
        return this._format;
    }

    set format(value: InputFormat) {
        this._format = value;
        if (value === 'day') {
            this._min = 1;
            this._max = 31;
            this._placeholder = 'DD';
        } else if (value === 'month') {
            this._min = 1;
            this._max = 12;
            this._placeholder = 'MM';
        } else if (value === 'year') {
            this._min = 1900;
            this._max = new Date().getFullYear();
            this._placeholder = 'YYYY';
        }
    }

    @property()
    errorMessage = '';

    @property({type: Number})
    value = 1;

    @property({type: Boolean})
    get invalid() {
        return this._invalid;
    }

    set invalid(value: boolean) {
        this._invalid = value;
        this.containerClasses = 'container';
        this.errorClasses = 'error';
        this.errorMessage = '';
        if (this._invalid) {
            this.containerClasses = 'container invalid';
            this.errorClasses = 'error active';
            if (this.format === 'day') {
                this.errorMessage = 'Must be a valid day';
            } else if (this.format === 'month') {
                this.errorMessage = 'Must be a valid month';
            } else if (this.format === 'year') {
                this.errorMessage = 'Must be in the past';
            }
        }
    }

    @property()
    containerClasses = 'container';

    @property()
    errorClasses = 'error';

    private _handleInput(e: Event) {
        const el = e.target as HTMLInputElement;
        const value = parseInt(el.value, 10);
        this.value = value;
        this.invalid =
            typeof value !== 'number' ||
            isNaN(value) ||
            value < this._min ||
            value > this._max;
    }

    override render() {
        const classList = 'container' + (this.invalid ? ' invalid' : '');
        return html`
            <div class=${classList}>
                <label class="label" for=${this.format}>${this.format}</label>
                <input
                    id=${this.format}
                    class="input"
                    type="number"
                    min=${this._min}
                    max=${this._max}
                    placeholder=${this._placeholder}
                    @input=${this._handleInput}
                />
                <span class=${this.errorClasses}>${this.errorMessage}</span>
            </div>
        `;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'day-month-year-input': DayMonthYearInput;
    }
}
