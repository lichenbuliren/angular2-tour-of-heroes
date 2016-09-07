/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { addProviders, async, inject } from '@angular/core/testing';
import { HeroesComponent } from './heroes.component';

describe('Component: Heroes', () => {
  it('should create an instance', () => {
    let component = HeroesComponent;
    expect(component).toBeTruthy();
  });
});
