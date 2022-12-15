export const STORE_STATUS = 'localstorage-keyring-store-state';
export const ACCOUNT_EXITS = 'accountexists';
export type KeyringStoreState =
  | 'locked'
  | 'unlocked'
  | 'needs-onboarding'
  | 'loading';

export const KeyringStoreStateEnum: { [key: string]: KeyringStoreState } = {
  Locked: 'locked',
  Unlocked: 'unlocked',
  NeedsOnboarding: 'needs-onboarding',
  Loading: 'loading',
};
