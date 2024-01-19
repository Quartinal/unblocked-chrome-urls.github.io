// Copyright 2016 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview PromiseResolver is a helper class that allows creating a
 * Promise that will be fulfilled (resolved or rejected) some time later.
 *
 * Example:
 *  const resolver = new PromiseResolver();
 *  resolver.promise.then(function(result) {
 *    console.log('resolved with', result);
 *  });
 *  ...
 *  ...
 *  resolver.resolve({hello: 'world'});
 */
export class PromiseResolver {
    constructor() {
        this.isFulfilled_ = false;
        this.promise_ = new Promise((resolve, reject) => {
            this.resolve_ = (resolution) => {
                resolve(resolution);
                this.isFulfilled_ = true;
            };
            this.reject_ = (reason) => {
                reject(reason);
                this.isFulfilled_ = true;
            };
        });
    }
    /** Whether this resolver has been resolved or rejected. */
    get isFulfilled() {
        return this.isFulfilled_;
    }
    get promise() {
        return this.promise_;
    }
    get resolve() {
        return this.resolve_;
    }
    get reject() {
        return this.reject_;
    }
}
