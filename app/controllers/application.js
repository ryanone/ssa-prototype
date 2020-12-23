import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject } from '@ember/service';

export default class ApplicationController extends Controller {
  @inject
  userCart;

  @action
  showCart() {
    this.userCart.isCartOpen = true;
  }
}
