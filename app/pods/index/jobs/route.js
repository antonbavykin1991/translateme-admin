import Route from '@ember/routing/route';
import { later } from "@ember/runloop";

export default class JobsRoute extends Route {
  model() {
    // return new Promise((resolve) => {
    //   later(this, resolve, 500)
    // })
  }
}
