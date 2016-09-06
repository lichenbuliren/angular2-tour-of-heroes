/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { addProviders, async, inject } from '@angular/core/testing';
import { HerosComponent } from './heros.component';

describe('Component: Heros', () => {
  it('should create an instance', () => {
    let component = new HerosComponent();
    expect(component).toBeTruthy();
  });
});
