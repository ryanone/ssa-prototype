import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class UserCartService extends Service {
  @tracked
  isCartOpen = false;

  @tracked
  contentComponent;
}
