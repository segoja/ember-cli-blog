import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { sort, alias } from '@ember/object/computed';
import pagedArray from 'ember-cli-pagination/computed/paged-array';

export default class BlogAuthors extends Component {

  authorsSorting = Object.freeze(['date:desc']);
  @sort ('args.authors', 'authorsSorting') arrangedContent;
 
  @tracked page = this.args.page;   
  @tracked perPage = this.args.perPage;
  
  @pagedArray ('arrangedContent', { page: alias('parent.page'), perPage: alias('parent.perPage')}) pagedContent;

  @action resetPage () {
    this.args.page = 1;    
  }
  @action createAuthor () {
    this.args.createAction();
  }  
}