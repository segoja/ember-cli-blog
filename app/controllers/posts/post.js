import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import { inject } from '@ember/controller';

export default class PostController extends Controller {
  @service router;
  @inject posts;

  @action
  savePost() {
    this.model.save();
  }  
  @action
  deletePost() {
    this.model.destroyRecord().then(function() {
      this.router.transitionTo('posts');
    }.bind(this));
  }
}
