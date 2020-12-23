import Application from 'ssa-prototype/app';
import config from 'ssa-prototype/config/environment';
import { setApplication } from '@ember/test-helpers';
import { start } from 'ember-qunit';

setApplication(Application.create(config.APP));

start();
