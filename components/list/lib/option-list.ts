/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

import {ARIARole} from 'third_party/javascript/material/web/types/aria';

import {List} from './list.js';

/** @soyCompatible */
export class OptionList extends List {
  /** @soyTemplate */
  protected override getAriaRole(): ARIARole {
    return 'listbox';
  }
}
