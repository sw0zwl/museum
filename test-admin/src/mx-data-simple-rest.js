'use strict';

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var ra_core_1 = require("ra-core");

/**
 * Convert a `File` object returned by the upload input into a base 64 string.
 * That's not the most optimized way to store images in production, but it's
 * enough to illustrate the idea of data provider decoration.
 */
const convertFileToBase64 = file =>
    new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file.rawFile);

        reader.onload = () => resolve(reader.result);
        reader.onerror = reject;
    });

/**
 * Maps react-admin queries to a simple REST API
 *
 * This REST dialect is similar to the one of FakeRest
 *
 * @see https://github.com/marmelab/FakeRest
 *
 * @example
 *
 * getList     => GET http://my.api.url/posts?sort=['title','ASC']&range=[0, 24]
 * getOne      => GET http://my.api.url/posts/123
 * getMany     => GET http://my.api.url/posts?filter={id:[123,456,789]}
 * update      => PUT http://my.api.url/posts/123
 * create      => POST http://my.api.url/posts
 * delete      => DELETE http://my.api.url/posts/123
 *
 * @example
 *
 * import React from 'react';
 * import { Admin, Resource } from 'react-admin';
 * import simpleRestProvider from 'ra-data-simple-rest';
 *
 * import { PostList } from './posts';
 *
 * const App = () => (
 *     <Admin dataProvider={simpleRestProvider('http://path.to.my.api/')}>
 *         <Resource name="posts" list={PostList} />
 *     </Admin>
 * );
 *
 * export default App;
 */
exports.default = (function (apiUrl, httpClient) {
    if (httpClient === void 0) { httpClient = ra_core_1.fetchUtils.fetchJson; }
    return ({
        getList: function (resource, params) {
            var url = apiUrl + "/" + resource;
            return httpClient(url).then(function (_a) {
                var headers = _a.headers, json = _a.json;
                if (!headers.has('content-range')) {
                    throw new Error('The Content-Range header is missing in the HTTP Response. The simple REST data provider expects responses for lists of resources to contain this header with the total number of results to build the pagination. If you are using CORS, did you declare Content-Range in the Access-Control-Expose-Headers header?');
                }

                return {
                    data: json,
                    total: parseInt(headers
                        .get('content-range')
                        .split('/')
                        .pop(), 10),
                };
            });
        },
        getOne: function (resource, params) {
            return httpClient(apiUrl + "/" + resource + "/" + params.id).then(function (_a) {
                var json = _a.json;
                return ({
                    data: json,
                });
            });
        },
        getMany: function (resource, params) {
            var url = apiUrl + "/" + resource + "/2";
            console.log("params.ids=" + params.ids)
            return httpClient(url).then(function (_a) {
                var json = _a.json;
                return ({ data: json });
            });
        },
        getManyReference: function (resource, params) {
            var url = apiUrl + "/" + resource;
            return httpClient(url).then(function (_a) {
                var headers = _a.headers, json = _a.json;
                if (!headers.has('content-range')) {
                    throw new Error('The Content-Range header is missing in the HTTP Response. The simple REST data provider expects responses for lists of resources to contain this header with the total number of results to build the pagination. If you are using CORS, did you declare Content-Range in the Access-Control-Expose-Headers header?');
                }
                return {
                    data: json,
                    total: parseInt(headers
                        .get('content-range')
                        .split('/')
                        .pop(), 10),
                };
            });
        },
        update: function (resource, params) {
            return httpClient(apiUrl + "/" + resource + "/" + params.id, {
                method: 'PUT',
                body: JSON.stringify(params.data),
            }).then(function (_a) {
                var json = _a.json;
                return ({ data: json });
            });
        },
        // simple-rest doesn't handle provide an updateMany route, so we fallback to calling update n times instead
        updateMany: function (resource, params) {
            return Promise.all(params.ids.map(function (id) {
                return httpClient(apiUrl + "/" + resource + "/" + id, {
                    method: 'PUT',
                    body: JSON.stringify(params.data),
                });
            })).then(function (responses) { return ({ data: responses.map(function (_a) {
                    var json = _a.json;
                    return json.id;
                }) }); });
        },
        create: function (resource, params) {
            console.log(params.data)
            if ('LargeImage' in params.data)
            {
                return convertFileToBase64(params.data.LargeImage)
                    .then(base64file => {
                        params.data.LargeImage = base64file

                        return httpClient(apiUrl + "/" + resource, {
                            method: 'POST',
                            body: JSON.stringify(params.data)
                        }).then(function (_a) {
                            var json = _a.json;
                            return ({
                                data: json
                            });
                        });
                    })
            } else {
                return httpClient(apiUrl + "/" + resource, {
                    method: 'POST',
                    body: JSON.stringify(params.data)
                }).then(function (_a) {
                    var json = _a.json;
                    return ({
                        data: json
                    });
                });
            }
        },
        delete: function (resource, params) {
            return httpClient(apiUrl + "/" + resource + "/" + params.id, {
                method: 'DELETE',
            }).then(function (_a) {
                var json = _a.json;
                return ({ data: json });
            });
        },
        // simple-rest doesn't handle filters on DELETE route, so we fallback to calling DELETE n times instead
        deleteMany: function (resource, params) {
            return Promise.all(params.ids.map(function (id) {
                return httpClient(apiUrl + "/" + resource + "/" + id, {
                    method: 'DELETE',
                });
            })).then(function (responses) { return ({ data: responses.map(function (_a) {
                    var json = _a.json;
                    return json.id;
                }) }); });
        },
    });
});
