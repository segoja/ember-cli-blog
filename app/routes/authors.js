import Route from '@ember/routing/route';

export default class AuthorsRoute extends Route {
  queryParams = {
    page: {
      refreshModel: true
    }
  }
  model() {
    return this.store.findAll('author');
  }
}