/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

import {AgeCalculator} from '../age-calculator.js';

import {fixture, assert} from '@open-wc/testing';
import {html} from 'lit/static-html.js';

suite('age-calculator', () => {
  test('is defined', () => {
    const el = document.createElement('age-calculator');
    assert.instanceOf(el, AgeCalculator);
  });

  test('renders three day-month-year-input elements', async () => {
    const el = (await fixture(html`<age-calculator></age-calculator>`)) as AgeCalculator;
    const inputs = el.shadowRoot!.querySelectorAll('day-month-year-input');
    assert.equal(inputs.length, 3);
  });

  test('styling applied', async () => {
    const el = (await fixture(html`<age-calculator></age-calculator>`)) as AgeCalculator;
    await el.updateComplete;
    const container = el.shadowRoot!.querySelector('.container') as HTMLElement;
    assert.equal(getComputedStyle(container).borderRadius, '20px 20px 160px');
  });
});
