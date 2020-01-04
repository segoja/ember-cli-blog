import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import { inject } from '@ember/controller';

export default class AuthorsController extends Controller {
  @service router;
  @inject ('authors.author') author;
  
  page = 1;
  perPage = 10;
  
  queryParams = ["page", "perPage"];
  
  @action
  createAuthor() {
    this.author.set('globals.isEditing', true);
    var newauthor = this.store.createRecord('author');
    this.router.transitionTo('authors.author', newauthor.save());
  }
}