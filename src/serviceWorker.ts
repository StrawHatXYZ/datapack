import { ACCOUNT_EXITS, KeyringStoreStateEnum } from './app/atoms';
import { BrowserRuntimeCommon } from './app/utils/common';
import { LocalStorageDb } from './backend/db';

chrome.runtime.onInstalled.addListener(async () => {
  // Here goes everything you want to execute after extension initialization

  console.log('Extension successfully installed!');
});

// Log storage changes, might be safely removed
chrome.storage.onChanged.addListener((changes) => {
  for (const [key, value] of Object.entries(changes)) {
    console.log(
      `"${key}" changed from "${value.oldValue}" to "${value.newValue}"`,
    );
  }
});

BrowserRuntimeCommon.addEventListenerFromAnywhere(
  (message: any, _sender: any, sendResponse: any) => {
    if (message.channel === ACCOUNT_EXITS) {
      console.log('Lisenting');
      // sendResponse({ result: KeyringStoreStateEnum.NeedsOnboarding });
      // LocalStorageDb.get(message.channel)
      //   .then((e) => {
      //     console.log(`Sending ${e} `);
      //     e === null
      //       ? sendResponse({ result: KeyringStoreStateEnum.NeedsOnboarding })
      //       : sendResponse({ result: KeyringStoreStateEnum.Locked });
      //   })
      //   .catch((e) => {
      //     console.log('ErrorBackground');
      //     sendResponse({ result: 'Error' });
      //   });
      sendResponse({ result: KeyringStoreStateEnum.Locked });
    }
  },
);
