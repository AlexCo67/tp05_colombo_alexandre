import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { AddAdresse } from '../actions/adresse-actions';
import { DelAdresse } from '../actions/adresse-actions';
import { AdresseStateModel } from './adresse-state-model';
@State<AdresseStateModel>({
  name: 'adresses',
  defaults: {
    adresses: [],
  },
})
@Injectable()
export class AdresseState {
  @Selector()
  static getNbAdresses(state: AdresseStateModel) {
    return state.adresses.length;
  }
  @Selector()
  static getListeAdresses(state: AdresseStateModel) {
    return state.adresses;
  }

  @Action(DelAdresse)
    del(
        { getState, patchState }: StateContext<AdresseStateModel>, 
        { payload }: DelAdresse) {
        const state = getState();
        patchState({
            adresses: [...state.adresses.filter(id => id.nom != payload.nom)],
        });
    } 

  @Action(AddAdresse)
  add(
    { getState, patchState }: StateContext<AdresseStateModel>,
    { payload }: AddAdresse
  ) {
    const state = getState();
    patchState({
      adresses: [...state.adresses, payload],
    });
  }
}