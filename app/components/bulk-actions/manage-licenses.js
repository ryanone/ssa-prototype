import Component from '@glimmer/component';
import { action } from '@ember/object';
import { inject } from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class BulkActionsManageLicensesComponent extends Component {
  @inject
  userCart;

  @tracked
  isActionContentOpen = false;

  @action
  showActionContent() {
    this.userCart.isCartOpen = true;
    this.userCart.contentComponent = 'bulk-actions/content/manage-licenses';
  }
}
