import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('auth');
  this.route('index', {path: '/'}, function() {
    this.route('settings');
    this.route('jobs');
  });
});

export default Router;
