import Component from '@glimmer/component';
import { action } from '@ember/object';
import { inject } from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class UserCartComponent extends Component {
  @inject
  userCart;

  @tracked
  showBulkActions = true;

  @action
  closeCart() {
    this.userCart.isCartOpen = false;
  }

  @action
  goBack() {
    this.userCart.contentComponent = undefined;
  }
}
