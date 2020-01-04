import { inject as service } from '@ember/service';
import Route from '@ember/routing/route';

export default class AuthorRoute extends Route {
  @service store;
  model(params) {
    return this.store.findRecord('author', params.author_id);
  }  
}
