// Licensed to Cloudera, Inc. under one
// or more contributor license agreements.  See the NOTICE file
// distributed with this work for additional information
// regarding copyright ownership.  Cloudera, Inc. licenses this file
// to you under the Apache License, Version 2.0 (the
// 'License'); you may not use this file except in compliance
// with the License.  You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an 'AS IS' BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import { shallowMount } from '@vue/test-utils';
import { CancellablePromise } from 'api/cancellablePromise';
import dataCatalog from 'catalog/dataCatalog';
import AceEditor from './AceEditor.vue';

describe('AceEditor.vue', () => {
  it('should render', () => {
    spyOn(dataCatalog, 'getChildren').and.returnValue(CancellablePromise.resolve([]));

    const wrapper = shallowMount(AceEditor, {
      propsData: {
        value: 'some query',
        id: 'some-id',
        executor: {
          connector: ko.observable({
            dialect: 'foo',
            id: 'foo'
          }),
          namespace: ko.observable({
            id: 'foo'
          }),
          compute: ko.observable({
            id: 'foo'
          })
        }
      }
    });
    expect(wrapper.element).toMatchSnapshot();
  });
});
