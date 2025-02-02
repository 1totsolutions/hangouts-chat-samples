/**
 * @license
 * Copyright Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
// [START hangouts_chat_node_webhook]

const fetch = require('node-fetch');

const webhookURL = '<INCOMING-WEBHOOK-URL>';
const webhookURL = '<https://chat.googleapis.com/v1/spaces/AAAAiNV_GDA/messages?key=AIzaSyDdI0hCZtE6vySjMm-WEfRq3CPzqKqqsHI&token=V36r9V0QDmiSzWPKgknjoTF7luw5W0gncUqSk4shlAs%3D>';

const data = JSON.stringify({
  'text': 'Hello from a Node script!',
});

fetch(webhookURL, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json; charset=UTF-8',
  },
  body: data,
}).then((response) => {
  console.log(response);
});
// [END hangouts_chat_node_webhook]
