import { atom, selector, useRecoilValue } from 'recoil';
import { LocalStorageDb } from '../backend/db';
import { BrowserRuntimeCommon } from './utils/common';
import { v1 } from 'uuid';

export const STORE_STATUS = 'localstorage-keyring-store-state';
export const ACCOUNT_EXITS = 'accountexists';
export type KeyringStoreState = 'locked' | 'unlocked' | 'needs-onboarding';

export const KeyringStoreStateEnum: { [key: string]: KeyringStoreState } = {
  Locked: 'locked',
  Unlocked: 'unlocked',
  NeedsOnboarding: 'needs-onboarding',
};

export function useKeyringStoreState(): KeyringStoreState {
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  return useRecoilValue(keyringStoreState)!;
}
class ChannelAppUiClient {
  constructor(private name: string) {}

  public async request({ method, params }: any): Promise<any> {
    return new Promise((resolve, reject) => {
      // const id = v1();
      BrowserRuntimeCommon.sendMessageToBackground(
        {
          channel: this.name,
          data: { method, params },
        },
        ({ result, error }: any) => {
          if (error) {
            console.log('error');
            return reject(error);
          }
          console.log(`recieve ${result.result}`);
          return resolve(result);
        },
      );
    });
  }
}

export const keyringStoreState = atom<KeyringStoreState | null>({
  key: 'keyringStoreState',
  default: selector({
    key: 'keyringStoreStateDefault',
    get: ({ get }) => {
      const background = get(backgroundClient);
      return background.request({
        method: STORE_STATUS,
        params: [],
      });
    },
  }),
});

export const lockState = atom<KeyringStoreState | null>({
  key: 'lockState',
  default: KeyringStoreStateEnum.Locked,
});

export const backgroundClient = atom<ChannelAppUiClient>({
  key: 'backgroundClient',
  default: new ChannelAppUiClient(ACCOUNT_EXITS),
});
