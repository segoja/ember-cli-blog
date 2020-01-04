import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import { inject } from '@ember/controller';
import { tracked } from '@glimmer/tracking';

export default class PostsController extends Controller {
  @service router;
  @inject ('posts.post') post;

  page = 1;
  perPage = 5;
  query = '';

  queryParams = ["page", "perPage", "query"];
  
  @action
  createPost() {
    this.post.set('globals.isEditing', true);
    var newPost = this.store.createRecord('post');
    newPost.set('date' , new Date());
    this.router.transitionTo('posts.post', newPost.save());
  }
}
