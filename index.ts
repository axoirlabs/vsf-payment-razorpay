import { module } from './store'
import { plugin } from './store/plugin'
import { beforeRegistration } from './hooks/beforeRegistration'
import { VueStorefrontModule, VueStorefrontModuleConfig } from '@vue-storefront/core/lib/module'
import { StorefrontModule } from 'core/lib/modules'
import Vue from 'vue';
import { afterRegistration } from '../google-tag-manager/hooks/afterRegistration'
export const KEY = 'razorpay'

const moduleConfig: VueStorefrontModuleConfig = {
  key: KEY,
  store: { modules: [{ key: KEY, module }], plugin },
  beforeRegistration
}

export const Razorpay = new VueStorefrontModule(moduleConfig)

export const RazorpayPaymentModule: StorefrontModule = function({ app, store, router, moduleConfig, appConfig }) {
  beforeRegistration({ Vue, config: appConfig, store, isServer: app.$isServer})
  store.registerModule(KEY, module)
  afterRegistration(appConfig, store)
};