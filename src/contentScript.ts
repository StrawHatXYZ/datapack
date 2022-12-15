import { atom, selector, useRecoilValue } from 'recoil';
import {
  ACCOUNT_EXITS,
  KeyringStoreState,
  KeyringStoreStateEnum,
  STORE_STATUS,
} from './app/Constants';
import { BrowserRuntimeCommon } from './app/utils/common';

// TODO: add `Lock Timer` support
export const lockState = atom<KeyringStoreState | null>({
  key: 'lockState',
  default: KeyringStoreStateEnum.Locked,
});

export function useKeyringStoreState(): KeyringStoreState {
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  return useRecoilValue(keyringStoreState)!;
}
class ChannelAppUiClient {
  constructor(private name: string) {}

  public async request({ method, params }: any): Promise<any> {
    return new Promise((resolve, reject) => {
      BrowserRuntimeCommon.sendMessageToBackground(
        {
          channel: this.name,
          data: { method, params },
        },
        ({ result, error }: any) => {
          console.log(`recieve--- ${result}`);

          if (error) {
            console.log('error');
            return reject(error);
          }
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
    get: async ({ get }) => {
      const background = get(backgroundClient);
      return await background.request({
        method: STORE_STATUS,
        params: [],
      });
    },
  }),
});

export const backgroundClient = atom<ChannelAppUiClient>({
  key: 'backgroundClient',
  default: new ChannelAppUiClient(ACCOUNT_EXITS),
});
