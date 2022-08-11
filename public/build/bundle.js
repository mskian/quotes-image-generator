
(function(l, r) { if (!l || l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (self.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.getElementsByTagName('head')[0].appendChild(r) })(self.document);
(function () {
	'use strict';

	var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

	function getAugmentedNamespace(n) {
	  var f = n.default;
		if (typeof f == "function") {
			var a = function () {
				return f.apply(this, arguments);
			};
			a.prototype = f.prototype;
	  } else a = {};
	  Object.defineProperty(a, '__esModule', {value: true});
		Object.keys(n).forEach(function (k) {
			var d = Object.getOwnPropertyDescriptor(n, k);
			Object.defineProperty(a, k, d.get ? d : {
				enumerable: true,
				get: function () {
					return n[k];
				}
			});
		});
		return a;
	}

	var html2canvas$1 = {exports: {}};

	/*!
	 * html2canvas 1.4.1 <https://html2canvas.hertzen.com>
	 * Copyright (c) 2022 Niklas von Hertzen <https://hertzen.com>
	 * Released under MIT License
	 */

	(function (module, exports) {
		(function (global, factory) {
		    module.exports = factory() ;
		}(commonjsGlobal, (function () {
		    /*! *****************************************************************************
		    Copyright (c) Microsoft Corporation.

		    Permission to use, copy, modify, and/or distribute this software for any
		    purpose with or without fee is hereby granted.

		    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
		    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
		    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
		    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
		    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
		    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
		    PERFORMANCE OF THIS SOFTWARE.
		    ***************************************************************************** */
		    /* global Reflect, Promise */

		    var extendStatics = function(d, b) {
		        extendStatics = Object.setPrototypeOf ||
		            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
		            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
		        return extendStatics(d, b);
		    };

		    function __extends(d, b) {
		        if (typeof b !== "function" && b !== null)
		            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
		        extendStatics(d, b);
		        function __() { this.constructor = d; }
		        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
		    }

		    var __assign = function() {
		        __assign = Object.assign || function __assign(t) {
		            for (var s, i = 1, n = arguments.length; i < n; i++) {
		                s = arguments[i];
		                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
		            }
		            return t;
		        };
		        return __assign.apply(this, arguments);
		    };

		    function __awaiter(thisArg, _arguments, P, generator) {
		        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
		        return new (P || (P = Promise))(function (resolve, reject) {
		            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
		            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
		            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
		            step((generator = generator.apply(thisArg, _arguments || [])).next());
		        });
		    }

		    function __generator(thisArg, body) {
		        var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
		        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
		        function verb(n) { return function (v) { return step([n, v]); }; }
		        function step(op) {
		            if (f) throw new TypeError("Generator is already executing.");
		            while (_) try {
		                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
		                if (y = 0, t) op = [op[0] & 2, t.value];
		                switch (op[0]) {
		                    case 0: case 1: t = op; break;
		                    case 4: _.label++; return { value: op[1], done: false };
		                    case 5: _.label++; y = op[1]; op = [0]; continue;
		                    case 7: op = _.ops.pop(); _.trys.pop(); continue;
		                    default:
		                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
		                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
		                        if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
		                        if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
		                        if (t[2]) _.ops.pop();
		                        _.trys.pop(); continue;
		                }
		                op = body.call(thisArg, _);
		            } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
		            if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
		        }
		    }

		    function __spreadArray(to, from, pack) {
		        if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
		            if (ar || !(i in from)) {
		                if (!ar) ar = Array.prototype.slice.call(from, 0, i);
		                ar[i] = from[i];
		            }
		        }
		        return to.concat(ar || from);
		    }

		    var Bounds = /** @class */ (function () {
		        function Bounds(left, top, width, height) {
		            this.left = left;
		            this.top = top;
		            this.width = width;
		            this.height = height;
		        }
		        Bounds.prototype.add = function (x, y, w, h) {
		            return new Bounds(this.left + x, this.top + y, this.width + w, this.height + h);
		        };
		        Bounds.fromClientRect = function (context, clientRect) {
		            return new Bounds(clientRect.left + context.windowBounds.left, clientRect.top + context.windowBounds.top, clientRect.width, clientRect.height);
		        };
		        Bounds.fromDOMRectList = function (context, domRectList) {
		            var domRect = Array.from(domRectList).find(function (rect) { return rect.width !== 0; });
		            return domRect
		                ? new Bounds(domRect.left + context.windowBounds.left, domRect.top + context.windowBounds.top, domRect.width, domRect.height)
		                : Bounds.EMPTY;
		        };
		        Bounds.EMPTY = new Bounds(0, 0, 0, 0);
		        return Bounds;
		    }());
		    var parseBounds = function (context, node) {
		        return Bounds.fromClientRect(context, node.getBoundingClientRect());
		    };
		    var parseDocumentSize = function (document) {
		        var body = document.body;
		        var documentElement = document.documentElement;
		        if (!body || !documentElement) {
		            throw new Error("Unable to get document size");
		        }
		        var width = Math.max(Math.max(body.scrollWidth, documentElement.scrollWidth), Math.max(body.offsetWidth, documentElement.offsetWidth), Math.max(body.clientWidth, documentElement.clientWidth));
		        var height = Math.max(Math.max(body.scrollHeight, documentElement.scrollHeight), Math.max(body.offsetHeight, documentElement.offsetHeight), Math.max(body.clientHeight, documentElement.clientHeight));
		        return new Bounds(0, 0, width, height);
		    };

		    /*
		     * css-line-break 2.1.0 <https://github.com/niklasvh/css-line-break#readme>
		     * Copyright (c) 2022 Niklas von Hertzen <https://hertzen.com>
		     * Released under MIT License
		     */
		    var toCodePoints$1 = function (str) {
		        var codePoints = [];
		        var i = 0;
		        var length = str.length;
		        while (i < length) {
		            var value = str.charCodeAt(i++);
		            if (value >= 0xd800 && value <= 0xdbff && i < length) {
		                var extra = str.charCodeAt(i++);
		                if ((extra & 0xfc00) === 0xdc00) {
		                    codePoints.push(((value & 0x3ff) << 10) + (extra & 0x3ff) + 0x10000);
		                }
		                else {
		                    codePoints.push(value);
		                    i--;
		                }
		            }
		            else {
		                codePoints.push(value);
		            }
		        }
		        return codePoints;
		    };
		    var fromCodePoint$1 = function () {
		        var codePoints = [];
		        for (var _i = 0; _i < arguments.length; _i++) {
		            codePoints[_i] = arguments[_i];
		        }
		        if (String.fromCodePoint) {
		            return String.fromCodePoint.apply(String, codePoints);
		        }
		        var length = codePoints.length;
		        if (!length) {
		            return '';
		        }
		        var codeUnits = [];
		        var index = -1;
		        var result = '';
		        while (++index < length) {
		            var codePoint = codePoints[index];
		            if (codePoint <= 0xffff) {
		                codeUnits.push(codePoint);
		            }
		            else {
		                codePoint -= 0x10000;
		                codeUnits.push((codePoint >> 10) + 0xd800, (codePoint % 0x400) + 0xdc00);
		            }
		            if (index + 1 === length || codeUnits.length > 0x4000) {
		                result += String.fromCharCode.apply(String, codeUnits);
		                codeUnits.length = 0;
		            }
		        }
		        return result;
		    };
		    var chars$2 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
		    // Use a lookup table to find the index.
		    var lookup$2 = typeof Uint8Array === 'undefined' ? [] : new Uint8Array(256);
		    for (var i$2 = 0; i$2 < chars$2.length; i$2++) {
		        lookup$2[chars$2.charCodeAt(i$2)] = i$2;
		    }

		    /*
		     * utrie 1.0.2 <https://github.com/niklasvh/utrie>
		     * Copyright (c) 2022 Niklas von Hertzen <https://hertzen.com>
		     * Released under MIT License
		     */
		    var chars$1$1 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
		    // Use a lookup table to find the index.
		    var lookup$1$1 = typeof Uint8Array === 'undefined' ? [] : new Uint8Array(256);
		    for (var i$1$1 = 0; i$1$1 < chars$1$1.length; i$1$1++) {
		        lookup$1$1[chars$1$1.charCodeAt(i$1$1)] = i$1$1;
		    }
		    var decode$1 = function (base64) {
		        var bufferLength = base64.length * 0.75, len = base64.length, i, p = 0, encoded1, encoded2, encoded3, encoded4;
		        if (base64[base64.length - 1] === '=') {
		            bufferLength--;
		            if (base64[base64.length - 2] === '=') {
		                bufferLength--;
		            }
		        }
		        var buffer = typeof ArrayBuffer !== 'undefined' &&
		            typeof Uint8Array !== 'undefined' &&
		            typeof Uint8Array.prototype.slice !== 'undefined'
		            ? new ArrayBuffer(bufferLength)
		            : new Array(bufferLength);
		        var bytes = Array.isArray(buffer) ? buffer : new Uint8Array(buffer);
		        for (i = 0; i < len; i += 4) {
		            encoded1 = lookup$1$1[base64.charCodeAt(i)];
		            encoded2 = lookup$1$1[base64.charCodeAt(i + 1)];
		            encoded3 = lookup$1$1[base64.charCodeAt(i + 2)];
		            encoded4 = lookup$1$1[base64.charCodeAt(i + 3)];
		            bytes[p++] = (encoded1 << 2) | (encoded2 >> 4);
		            bytes[p++] = ((encoded2 & 15) << 4) | (encoded3 >> 2);
		            bytes[p++] = ((encoded3 & 3) << 6) | (encoded4 & 63);
		        }
		        return buffer;
		    };
		    var polyUint16Array$1 = function (buffer) {
		        var length = buffer.length;
		        var bytes = [];
		        for (var i = 0; i < length; i += 2) {
		            bytes.push((buffer[i + 1] << 8) | buffer[i]);
		        }
		        return bytes;
		    };
		    var polyUint32Array$1 = function (buffer) {
		        var length = buffer.length;
		        var bytes = [];
		        for (var i = 0; i < length; i += 4) {
		            bytes.push((buffer[i + 3] << 24) | (buffer[i + 2] << 16) | (buffer[i + 1] << 8) | buffer[i]);
		        }
		        return bytes;
		    };

		    /** Shift size for getting the index-2 table offset. */
		    var UTRIE2_SHIFT_2$1 = 5;
		    /** Shift size for getting the index-1 table offset. */
		    var UTRIE2_SHIFT_1$1 = 6 + 5;
		    /**
		     * Shift size for shifting left the index array values.
		     * Increases possible data size with 16-bit index values at the cost
		     * of compactability.
		     * This requires data blocks to be aligned by UTRIE2_DATA_GRANULARITY.
		     */
		    var UTRIE2_INDEX_SHIFT$1 = 2;
		    /**
		     * Difference between the two shift sizes,
		     * for getting an index-1 offset from an index-2 offset. 6=11-5
		     */
		    var UTRIE2_SHIFT_1_2$1 = UTRIE2_SHIFT_1$1 - UTRIE2_SHIFT_2$1;
		    /**
		     * The part of the index-2 table for U+D800..U+DBFF stores values for
		     * lead surrogate code _units_ not code _points_.
		     * Values for lead surrogate code _points_ are indexed with this portion of the table.
		     * Length=32=0x20=0x400>>UTRIE2_SHIFT_2. (There are 1024=0x400 lead surrogates.)
		     */
		    var UTRIE2_LSCP_INDEX_2_OFFSET$1 = 0x10000 >> UTRIE2_SHIFT_2$1;
		    /** Number of entries in a data block. 32=0x20 */
		    var UTRIE2_DATA_BLOCK_LENGTH$1 = 1 << UTRIE2_SHIFT_2$1;
		    /** Mask for getting the lower bits for the in-data-block offset. */
		    var UTRIE2_DATA_MASK$1 = UTRIE2_DATA_BLOCK_LENGTH$1 - 1;
		    var UTRIE2_LSCP_INDEX_2_LENGTH$1 = 0x400 >> UTRIE2_SHIFT_2$1;
		    /** Count the lengths of both BMP pieces. 2080=0x820 */
		    var UTRIE2_INDEX_2_BMP_LENGTH$1 = UTRIE2_LSCP_INDEX_2_OFFSET$1 + UTRIE2_LSCP_INDEX_2_LENGTH$1;
		    /**
		     * The 2-byte UTF-8 version of the index-2 table follows at offset 2080=0x820.
		     * Length 32=0x20 for lead bytes C0..DF, regardless of UTRIE2_SHIFT_2.
		     */
		    var UTRIE2_UTF8_2B_INDEX_2_OFFSET$1 = UTRIE2_INDEX_2_BMP_LENGTH$1;
		    var UTRIE2_UTF8_2B_INDEX_2_LENGTH$1 = 0x800 >> 6; /* U+0800 is the first code point after 2-byte UTF-8 */
		    /**
		     * The index-1 table, only used for supplementary code points, at offset 2112=0x840.
		     * Variable length, for code points up to highStart, where the last single-value range starts.
		     * Maximum length 512=0x200=0x100000>>UTRIE2_SHIFT_1.
		     * (For 0x100000 supplementary code points U+10000..U+10ffff.)
		     *
		     * The part of the index-2 table for supplementary code points starts
		     * after this index-1 table.
		     *
		     * Both the index-1 table and the following part of the index-2 table
		     * are omitted completely if there is only BMP data.
		     */
		    var UTRIE2_INDEX_1_OFFSET$1 = UTRIE2_UTF8_2B_INDEX_2_OFFSET$1 + UTRIE2_UTF8_2B_INDEX_2_LENGTH$1;
		    /**
		     * Number of index-1 entries for the BMP. 32=0x20
		     * This part of the index-1 table is omitted from the serialized form.
		     */
		    var UTRIE2_OMITTED_BMP_INDEX_1_LENGTH$1 = 0x10000 >> UTRIE2_SHIFT_1$1;
		    /** Number of entries in an index-2 block. 64=0x40 */
		    var UTRIE2_INDEX_2_BLOCK_LENGTH$1 = 1 << UTRIE2_SHIFT_1_2$1;
		    /** Mask for getting the lower bits for the in-index-2-block offset. */
		    var UTRIE2_INDEX_2_MASK$1 = UTRIE2_INDEX_2_BLOCK_LENGTH$1 - 1;
		    var slice16$1 = function (view, start, end) {
		        if (view.slice) {
		            return view.slice(start, end);
		        }
		        return new Uint16Array(Array.prototype.slice.call(view, start, end));
		    };
		    var slice32$1 = function (view, start, end) {
		        if (view.slice) {
		            return view.slice(start, end);
		        }
		        return new Uint32Array(Array.prototype.slice.call(view, start, end));
		    };
		    var createTrieFromBase64$1 = function (base64, _byteLength) {
		        var buffer = decode$1(base64);
		        var view32 = Array.isArray(buffer) ? polyUint32Array$1(buffer) : new Uint32Array(buffer);
		        var view16 = Array.isArray(buffer) ? polyUint16Array$1(buffer) : new Uint16Array(buffer);
		        var headerLength = 24;
		        var index = slice16$1(view16, headerLength / 2, view32[4] / 2);
		        var data = view32[5] === 2
		            ? slice16$1(view16, (headerLength + view32[4]) / 2)
		            : slice32$1(view32, Math.ceil((headerLength + view32[4]) / 4));
		        return new Trie$1(view32[0], view32[1], view32[2], view32[3], index, data);
		    };
		    var Trie$1 = /** @class */ (function () {
		        function Trie(initialValue, errorValue, highStart, highValueIndex, index, data) {
		            this.initialValue = initialValue;
		            this.errorValue = errorValue;
		            this.highStart = highStart;
		            this.highValueIndex = highValueIndex;
		            this.index = index;
		            this.data = data;
		        }
		        /**
		         * Get the value for a code point as stored in the Trie.
		         *
		         * @param codePoint the code point
		         * @return the value
		         */
		        Trie.prototype.get = function (codePoint) {
		            var ix;
		            if (codePoint >= 0) {
		                if (codePoint < 0x0d800 || (codePoint > 0x0dbff && codePoint <= 0x0ffff)) {
		                    // Ordinary BMP code point, excluding leading surrogates.
		                    // BMP uses a single level lookup.  BMP index starts at offset 0 in the Trie2 index.
		                    // 16 bit data is stored in the index array itself.
		                    ix = this.index[codePoint >> UTRIE2_SHIFT_2$1];
		                    ix = (ix << UTRIE2_INDEX_SHIFT$1) + (codePoint & UTRIE2_DATA_MASK$1);
		                    return this.data[ix];
		                }
		                if (codePoint <= 0xffff) {
		                    // Lead Surrogate Code Point.  A Separate index section is stored for
		                    // lead surrogate code units and code points.
		                    //   The main index has the code unit data.
		                    //   For this function, we need the code point data.
		                    // Note: this expression could be refactored for slightly improved efficiency, but
		                    //       surrogate code points will be so rare in practice that it's not worth it.
		                    ix = this.index[UTRIE2_LSCP_INDEX_2_OFFSET$1 + ((codePoint - 0xd800) >> UTRIE2_SHIFT_2$1)];
		                    ix = (ix << UTRIE2_INDEX_SHIFT$1) + (codePoint & UTRIE2_DATA_MASK$1);
		                    return this.data[ix];
		                }
		                if (codePoint < this.highStart) {
		                    // Supplemental code point, use two-level lookup.
		                    ix = UTRIE2_INDEX_1_OFFSET$1 - UTRIE2_OMITTED_BMP_INDEX_1_LENGTH$1 + (codePoint >> UTRIE2_SHIFT_1$1);
		                    ix = this.index[ix];
		                    ix += (codePoint >> UTRIE2_SHIFT_2$1) & UTRIE2_INDEX_2_MASK$1;
		                    ix = this.index[ix];
		                    ix = (ix << UTRIE2_INDEX_SHIFT$1) + (codePoint & UTRIE2_DATA_MASK$1);
		                    return this.data[ix];
		                }
		                if (codePoint <= 0x10ffff) {
		                    return this.data[this.highValueIndex];
		                }
		            }
		            // Fall through.  The code point is outside of the legal range of 0..0x10ffff.
		            return this.errorValue;
		        };
		        return Trie;
		    }());

		    /*
		     * base64-arraybuffer 1.0.2 <https://github.com/niklasvh/base64-arraybuffer>
		     * Copyright (c) 2022 Niklas von Hertzen <https://hertzen.com>
		     * Released under MIT License
		     */
		    var chars$3 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
		    // Use a lookup table to find the index.
		    var lookup$3 = typeof Uint8Array === 'undefined' ? [] : new Uint8Array(256);
		    for (var i$3 = 0; i$3 < chars$3.length; i$3++) {
		        lookup$3[chars$3.charCodeAt(i$3)] = i$3;
		    }

		    var base64$1 = 'KwAAAAAAAAAACA4AUD0AADAgAAACAAAAAAAIABAAGABAAEgAUABYAGAAaABgAGgAYgBqAF8AZwBgAGgAcQB5AHUAfQCFAI0AlQCdAKIAqgCyALoAYABoAGAAaABgAGgAwgDKAGAAaADGAM4A0wDbAOEA6QDxAPkAAQEJAQ8BFwF1AH0AHAEkASwBNAE6AUIBQQFJAVEBWQFhAWgBcAF4ATAAgAGGAY4BlQGXAZ8BpwGvAbUBvQHFAc0B0wHbAeMB6wHxAfkBAQIJAvEBEQIZAiECKQIxAjgCQAJGAk4CVgJeAmQCbAJ0AnwCgQKJApECmQKgAqgCsAK4ArwCxAIwAMwC0wLbAjAA4wLrAvMC+AIAAwcDDwMwABcDHQMlAy0DNQN1AD0DQQNJA0kDSQNRA1EDVwNZA1kDdQB1AGEDdQBpA20DdQN1AHsDdQCBA4kDkQN1AHUAmQOhA3UAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AKYDrgN1AHUAtgO+A8YDzgPWAxcD3gPjA+sD8wN1AHUA+wMDBAkEdQANBBUEHQQlBCoEFwMyBDgEYABABBcDSARQBFgEYARoBDAAcAQzAXgEgASIBJAEdQCXBHUAnwSnBK4EtgS6BMIEyAR1AHUAdQB1AHUAdQCVANAEYABgAGAAYABgAGAAYABgANgEYADcBOQEYADsBPQE/AQEBQwFFAUcBSQFLAU0BWQEPAVEBUsFUwVbBWAAYgVgAGoFcgV6BYIFigWRBWAAmQWfBaYFYABgAGAAYABgAKoFYACxBbAFuQW6BcEFwQXHBcEFwQXPBdMF2wXjBeoF8gX6BQIGCgYSBhoGIgYqBjIGOgZgAD4GRgZMBmAAUwZaBmAAYABgAGAAYABgAGAAYABgAGAAYABgAGIGYABpBnAGYABgAGAAYABgAGAAYABgAGAAYAB4Bn8GhQZgAGAAYAB1AHcDFQSLBmAAYABgAJMGdQA9A3UAmwajBqsGqwaVALMGuwbDBjAAywbSBtIG1QbSBtIG0gbSBtIG0gbdBuMG6wbzBvsGAwcLBxMHAwcbByMHJwcsBywHMQcsB9IGOAdAB0gHTgfSBkgHVgfSBtIG0gbSBtIG0gbSBtIG0gbSBiwHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAdgAGAALAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAdbB2MHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsB2kH0gZwB64EdQB1AHUAdQB1AHUAdQB1AHUHfQdgAIUHjQd1AHUAlQedB2AAYAClB6sHYACzB7YHvgfGB3UAzgfWBzMB3gfmB1EB7gf1B/0HlQENAQUIDQh1ABUIHQglCBcDLQg1CD0IRQhNCEEDUwh1AHUAdQBbCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIcAh3CHoIMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIgggwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAALAcsBywHLAcsBywHLAcsBywHLAcsB4oILAcsB44I0gaWCJ4Ipgh1AHUAqgiyCHUAdQB1AHUAdQB1AHUAdQB1AHUAtwh8AXUAvwh1AMUIyQjRCNkI4AjoCHUAdQB1AO4I9gj+CAYJDgkTCS0HGwkjCYIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiAAIAAAAFAAYABgAGIAXwBgAHEAdQBFAJUAogCyAKAAYABgAEIA4ABGANMA4QDxAMEBDwE1AFwBLAE6AQEBUQF4QkhCmEKoQrhCgAHIQsAB0MLAAcABwAHAAeDC6ABoAHDCwMMAAcABwAHAAdDDGMMAAcAB6MM4wwjDWMNow3jDaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAEjDqABWw6bDqABpg6gAaABoAHcDvwOPA+gAaABfA/8DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DpcPAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcAB9cPKwkyCToJMAB1AHUAdQBCCUoJTQl1AFUJXAljCWcJawkwADAAMAAwAHMJdQB2CX4JdQCECYoJjgmWCXUAngkwAGAAYABxAHUApgn3A64JtAl1ALkJdQDACTAAMAAwADAAdQB1AHUAdQB1AHUAdQB1AHUAowYNBMUIMAAwADAAMADICcsJ0wnZCRUE4QkwAOkJ8An4CTAAMAB1AAAKvwh1AAgKDwoXCh8KdQAwACcKLgp1ADYKqAmICT4KRgowADAAdQB1AE4KMAB1AFYKdQBeCnUAZQowADAAMAAwADAAMAAwADAAMAAVBHUAbQowADAAdQC5CXUKMAAwAHwBxAijBogEMgF9CoQKiASMCpQKmgqIBKIKqgquCogEDQG2Cr4KxgrLCjAAMADTCtsKCgHjCusK8Qr5CgELMAAwADAAMAB1AIsECQsRC3UANAEZCzAAMAAwADAAMAB1ACELKQswAHUANAExCzkLdQBBC0kLMABRC1kLMAAwADAAMAAwADAAdQBhCzAAMAAwAGAAYABpC3ELdwt/CzAAMACHC4sLkwubC58Lpwt1AK4Ltgt1APsDMAAwADAAMAAwADAAMAAwAL4LwwvLC9IL1wvdCzAAMADlC+kL8Qv5C/8LSQswADAAMAAwADAAMAAwADAAMAAHDDAAMAAwADAAMAAODBYMHgx1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1ACYMMAAwADAAdQB1AHUALgx1AHUAdQB1AHUAdQA2DDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AD4MdQBGDHUAdQB1AHUAdQB1AEkMdQB1AHUAdQB1AFAMMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQBYDHUAdQB1AF8MMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUA+wMVBGcMMAAwAHwBbwx1AHcMfwyHDI8MMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAYABgAJcMMAAwADAAdQB1AJ8MlQClDDAAMACtDCwHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsB7UMLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AA0EMAC9DDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAsBywHLAcsBywHLAcsBywHLQcwAMEMyAwsBywHLAcsBywHLAcsBywHLAcsBywHzAwwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1ANQM2QzhDDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMABgAGAAYABgAGAAYABgAOkMYADxDGAA+AwADQYNYABhCWAAYAAODTAAMAAwADAAFg1gAGAAHg37AzAAMAAwADAAYABgACYNYAAsDTQNPA1gAEMNPg1LDWAAYABgAGAAYABgAGAAYABgAGAAUg1aDYsGVglhDV0NcQBnDW0NdQ15DWAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAlQCBDZUAiA2PDZcNMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAnw2nDTAAMAAwADAAMAAwAHUArw23DTAAMAAwADAAMAAwADAAMAAwADAAMAB1AL8NMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAB1AHUAdQB1AHUAdQDHDTAAYABgAM8NMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAA1w11ANwNMAAwAD0B5A0wADAAMAAwADAAMADsDfQN/A0EDgwOFA4wABsOMAAwADAAMAAwADAAMAAwANIG0gbSBtIG0gbSBtIG0gYjDigOwQUuDsEFMw7SBjoO0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGQg5KDlIOVg7SBtIGXg5lDm0OdQ7SBtIGfQ6EDooOjQ6UDtIGmg6hDtIG0gaoDqwO0ga0DrwO0gZgAGAAYADEDmAAYAAkBtIGzA5gANIOYADaDokO0gbSBt8O5w7SBu8O0gb1DvwO0gZgAGAAxA7SBtIG0gbSBtIGYABgAGAAYAAED2AAsAUMD9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGFA8sBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAccD9IGLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHJA8sBywHLAcsBywHLAccDywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywPLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAc0D9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAccD9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGFA8sBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHPA/SBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gYUD0QPlQCVAJUAMAAwADAAMACVAJUAlQCVAJUAlQCVAEwPMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAA//8EAAQABAAEAAQABAAEAAQABAANAAMAAQABAAIABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQACgATABcAHgAbABoAHgAXABYAEgAeABsAGAAPABgAHABLAEsASwBLAEsASwBLAEsASwBLABgAGAAeAB4AHgATAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQABYAGwASAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAWAA0AEQAeAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAFAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAJABYAGgAbABsAGwAeAB0AHQAeAE8AFwAeAA0AHgAeABoAGwBPAE8ADgBQAB0AHQAdAE8ATwAXAE8ATwBPABYAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAFAAUABQAFAAUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AHgAeAFAATwBAAE8ATwBPAEAATwBQAFAATwBQAB4AHgAeAB4AHgAeAB0AHQAdAB0AHgAdAB4ADgBQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgBQAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAJAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAkACQAJAAkACQAJAAkABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAFAAHgAeAB4AKwArAFAAUABQAFAAGABQACsAKwArACsAHgAeAFAAHgBQAFAAUAArAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAUAAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAYAA0AKwArAB4AHgAbACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQADQAEAB4ABAAEAB4ABAAEABMABAArACsAKwArACsAKwArACsAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAKwArACsAKwBWAFYAVgBWAB4AHgArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AGgAaABoAGAAYAB4AHgAEAAQABAAEAAQABAAEAAQABAAEAAQAEwAEACsAEwATAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABLAEsASwBLAEsASwBLAEsASwBLABoAGQAZAB4AUABQAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQABMAUAAEAAQABAAEAAQABAAEAB4AHgAEAAQABAAEAAQABABQAFAABAAEAB4ABAAEAAQABABQAFAASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUAAeAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAFAABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQAUABQAB4AHgAYABMAUAArACsABAAbABsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAFAABAAEAAQABAAEAFAABAAEAAQAUAAEAAQABAAEAAQAKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAArACsAHgArAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAUAAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAABAAEAA0ADQBLAEsASwBLAEsASwBLAEsASwBLAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUAArACsAKwBQAFAAUABQACsAKwAEAFAABAAEAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABABQACsAKwArACsAKwArACsAKwAEACsAKwArACsAUABQACsAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAFAAUAAaABoAUABQAFAAUABQAEwAHgAbAFAAHgAEACsAKwAEAAQABAArAFAAUABQAFAAUABQACsAKwArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQACsAUABQACsAKwAEACsABAAEAAQABAAEACsAKwArACsABAAEACsAKwAEAAQABAArACsAKwAEACsAKwArACsAKwArACsAUABQAFAAUAArAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLAAQABABQAFAAUAAEAB4AKwArACsAKwArACsAKwArACsAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQACsAKwAEAFAABAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAArACsAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAB4AGwArACsAKwArACsAKwArAFAABAAEAAQABAAEAAQAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABAArACsAKwArACsAKwArAAQABAAEACsAKwArACsAUABQACsAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAB4AUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAAQAUAArAFAAUABQAFAAUABQACsAKwArAFAAUABQACsAUABQAFAAUAArACsAKwBQAFAAKwBQACsAUABQACsAKwArAFAAUAArACsAKwBQAFAAUAArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArAAQABAAEAAQABAArACsAKwAEAAQABAArAAQABAAEAAQAKwArAFAAKwArACsAKwArACsABAArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAHgAeAB4AHgAeAB4AGwAeACsAKwArACsAKwAEAAQABAAEAAQAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAUAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAAEACsAKwArACsAKwArACsABAAEACsAUABQAFAAKwArACsAKwArAFAAUAAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAKwAOAFAAUABQAFAAUABQAFAAHgBQAAQABAAEAA4AUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAKwArAAQAUAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAAEACsAKwArACsAKwArACsABAAEACsAKwArACsAKwArACsAUAArAFAAUAAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwBQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAFAABAAEAAQABAAEAAQABAArAAQABAAEACsABAAEAAQABABQAB4AKwArACsAKwBQAFAAUAAEAFAAUABQAFAAUABQAFAAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAFAAUABQAFAAUABQAFAAUABQABoAUABQAFAAUABQAFAAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQACsAUAArACsAUABQAFAAUABQAFAAUAArACsAKwAEACsAKwArACsABAAEAAQABAAEAAQAKwAEACsABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArAAQABAAeACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAAqAFwAXAAqACoAKgAqACoAKgAqACsAKwArACsAGwBcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAeAEsASwBLAEsASwBLAEsASwBLAEsADQANACsAKwArACsAKwBcAFwAKwBcACsAXABcAFwAXABcACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACsAXAArAFwAXABcAFwAXABcAFwAXABcAFwAKgBcAFwAKgAqACoAKgAqACoAKgAqACoAXAArACsAXABcAFwAXABcACsAXAArACoAKgAqACoAKgAqACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwBcAFwAXABcAFAADgAOAA4ADgAeAA4ADgAJAA4ADgANAAkAEwATABMAEwATAAkAHgATAB4AHgAeAAQABAAeAB4AHgAeAB4AHgBLAEsASwBLAEsASwBLAEsASwBLAFAAUABQAFAAUABQAFAAUABQAFAADQAEAB4ABAAeAAQAFgARABYAEQAEAAQAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQADQAEAAQABAAEAAQADQAEAAQAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArAA0ADQAeAB4AHgAeAB4AHgAEAB4AHgAeAB4AHgAeACsAHgAeAA4ADgANAA4AHgAeAB4AHgAeAAkACQArACsAKwArACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgBcAEsASwBLAEsASwBLAEsASwBLAEsADQANAB4AHgAeAB4AXABcAFwAXABcAFwAKgAqACoAKgBcAFwAXABcACoAKgAqAFwAKgAqACoAXABcACoAKgAqACoAKgAqACoAXABcAFwAKgAqACoAKgBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKgAqAFwAKgBLAEsASwBLAEsASwBLAEsASwBLACoAKgAqACoAKgAqAFAAUABQAFAAUABQACsAUAArACsAKwArACsAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgBQAFAAUABQAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUAArACsAUABQAFAAUABQAFAAUAArAFAAKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAKwBQACsAUABQAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsABAAEAAQAHgANAB4AHgAeAB4AHgAeAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUAArACsADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAANAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAWABEAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAA0ADQANAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAANAA0AKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUAArAAQABAArACsAKwArACsAKwArACsAKwArACsAKwBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqAA0ADQAVAFwADQAeAA0AGwBcACoAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwAeAB4AEwATAA0ADQAOAB4AEwATAB4ABAAEAAQACQArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUAAEAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAHgArACsAKwATABMASwBLAEsASwBLAEsASwBLAEsASwBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAArACsAXABcAFwAXABcACsAKwArACsAKwArACsAKwArACsAKwBcAFwAXABcAFwAXABcAFwAXABcAFwAXAArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAXAArACsAKwAqACoAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAArACsAHgAeAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKwAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKwArAAQASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArACoAKgAqACoAKgAqACoAXAAqACoAKgAqACoAKgArACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABABQAFAAUABQAFAAUABQACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwANAA0AHgANAA0ADQANAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAEAAQAHgAeAB4AHgAeAB4AHgAeAB4AKwArACsABAAEAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwAeAB4AHgAeAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArAA0ADQANAA0ADQBLAEsASwBLAEsASwBLAEsASwBLACsAKwArAFAAUABQAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAA0ADQBQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUAAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArAAQABAAEAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAAQAUABQAFAAUABQAFAABABQAFAABAAEAAQAUAArACsAKwArACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsABAAEAAQABAAEAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAKwBQACsAUAArAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgBQAB4AHgAeAFAAUABQACsAHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQACsAKwAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQACsAHgAeAB4AHgAeAB4AHgAOAB4AKwANAA0ADQANAA0ADQANAAkADQANAA0ACAAEAAsABAAEAA0ACQANAA0ADAAdAB0AHgAXABcAFgAXABcAFwAWABcAHQAdAB4AHgAUABQAFAANAAEAAQAEAAQABAAEAAQACQAaABoAGgAaABoAGgAaABoAHgAXABcAHQAVABUAHgAeAB4AHgAeAB4AGAAWABEAFQAVABUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ADQAeAA0ADQANAA0AHgANAA0ADQAHAB4AHgAeAB4AKwAEAAQABAAEAAQABAAEAAQABAAEAFAAUAArACsATwBQAFAAUABQAFAAHgAeAB4AFgARAE8AUABPAE8ATwBPAFAAUABQAFAAUAAeAB4AHgAWABEAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArABsAGwAbABsAGwAbABsAGgAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGgAbABsAGwAbABoAGwAbABoAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAHgAeAFAAGgAeAB0AHgBQAB4AGgAeAB4AHgAeAB4AHgAeAB4AHgBPAB4AUAAbAB4AHgBQAFAAUABQAFAAHgAeAB4AHQAdAB4AUAAeAFAAHgBQAB4AUABPAFAAUAAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAHgBQAFAAUABQAE8ATwBQAFAAUABQAFAATwBQAFAATwBQAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAFAAUABQAFAATwBPAE8ATwBPAE8ATwBPAE8ATwBQAFAAUABQAFAAUABQAFAAUAAeAB4AUABQAFAAUABPAB4AHgArACsAKwArAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHQAdAB4AHgAeAB0AHQAeAB4AHQAeAB4AHgAdAB4AHQAbABsAHgAdAB4AHgAeAB4AHQAeAB4AHQAdAB0AHQAeAB4AHQAeAB0AHgAdAB0AHQAdAB0AHQAeAB0AHgAeAB4AHgAeAB0AHQAdAB0AHgAeAB4AHgAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHgAeAB0AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHgAeAB0AHQAdAB0AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAeAB4AHgAdAB4AHgAeAB4AHgAeAB4AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABYAEQAWABEAHgAeAB4AHgAeAB4AHQAeAB4AHgAeAB4AHgAeACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAWABEAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAFAAHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAeAB4AHQAdAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHQAdAB4AHgAeAB4AHQAdAB0AHgAeAB0AHgAeAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlAB4AHQAdAB4AHgAdAB4AHgAeAB4AHQAdAB4AHgAeAB4AJQAlAB0AHQAlAB4AJQAlACUAIAAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAeAB4AHgAeAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHgAdAB0AHQAeAB0AJQAdAB0AHgAdAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAdAB0AHQAdACUAHgAlACUAJQAdACUAJQAdAB0AHQAlACUAHQAdACUAHQAdACUAJQAlAB4AHQAeAB4AHgAeAB0AHQAlAB0AHQAdAB0AHQAdACUAJQAlACUAJQAdACUAJQAgACUAHQAdACUAJQAlACUAJQAlACUAJQAeAB4AHgAlACUAIAAgACAAIAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AFwAXABcAFwAXABcAHgATABMAJQAeAB4AHgAWABEAFgARABYAEQAWABEAFgARABYAEQAWABEATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABYAEQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAWABEAFgARABYAEQAWABEAFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFgARABYAEQAWABEAFgARABYAEQAWABEAFgARABYAEQAWABEAFgARABYAEQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAWABEAFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAEAAQABAAeAB4AKwArACsAKwArABMADQANAA0AUAATAA0AUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAUAANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAA0ADQANAA0ADQANAA0ADQAeAA0AFgANAB4AHgAXABcAHgAeABcAFwAWABEAFgARABYAEQAWABEADQANAA0ADQATAFAADQANAB4ADQANAB4AHgAeAB4AHgAMAAwADQANAA0AHgANAA0AFgANAA0ADQANAA0ADQANAA0AHgANAB4ADQANAB4AHgAeACsAKwArACsAKwArACsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwArACsAKwArACsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArAA0AEQARACUAJQBHAFcAVwAWABEAFgARABYAEQAWABEAFgARACUAJQAWABEAFgARABYAEQAWABEAFQAWABEAEQAlAFcAVwBXAFcAVwBXAFcAVwBXAAQABAAEAAQABAAEACUAVwBXAFcAVwA2ACUAJQBXAFcAVwBHAEcAJQAlACUAKwBRAFcAUQBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFEAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBRAFcAUQBXAFEAVwBXAFcAVwBXAFcAUQBXAFcAVwBXAFcAVwBRAFEAKwArAAQABAAVABUARwBHAFcAFQBRAFcAUQBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBRAFcAVwBXAFcAVwBXAFEAUQBXAFcAVwBXABUAUQBHAEcAVwArACsAKwArACsAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwAlACUAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACsAKwArACsAKwArACsAKwArACsAKwArAFEAUQBRAFEAUQBRAFEAUQBRAFEAUQBRAFEAUQBRAFEAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBPAE8ATwBPAE8ATwBPAE8AJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAEcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAADQATAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABLAEsASwBLAEsASwBLAEsASwBLAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAABAAEAAQABAAeAAQABAAEAAQABAAEAAQABAAEAAQAHgBQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUABQAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAeAA0ADQANAA0ADQArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAB4AHgAeAB4AHgAeAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AUABQAFAAUABQAFAAUABQAFAAUABQAAQAUABQAFAABABQAFAAUABQAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAeAB4AHgAeAAQAKwArACsAUABQAFAAUABQAFAAHgAeABoAHgArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAADgAOABMAEwArACsAKwArACsAKwArACsABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwANAA0ASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAFAAUAAeAB4AHgBQAA4AUABQAAQAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAA0ADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArAB4AWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYACsAKwArAAQAHgAeAB4AHgAeAB4ADQANAA0AHgAeAB4AHgArAFAASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArAB4AHgBcAFwAXABcAFwAKgBcAFwAXABcAFwAXABcAFwAXABcAEsASwBLAEsASwBLAEsASwBLAEsAXABcAFwAXABcACsAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArAFAAUABQAAQAUABQAFAAUABQAFAAUABQAAQABAArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAHgANAA0ADQBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAXAAqACoAKgBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAAqAFwAKgAqACoAXABcACoAKgBcAFwAXABcAFwAKgAqAFwAKgBcACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcACoAKgBQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAA0ADQBQAFAAUAAEAAQAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUAArACsAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQADQAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAVABVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBUAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVACsAKwArACsAKwArACsAKwArACsAKwArAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAKwArACsAKwBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAKwArACsAKwAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAKwArACsAKwArAFYABABWAFYAVgBWAFYAVgBWAFYAVgBWAB4AVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgArAFYAVgBWAFYAVgArAFYAKwBWAFYAKwBWAFYAKwBWAFYAVgBWAFYAVgBWAFYAVgBWAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAEQAWAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAaAB4AKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAGAARABEAGAAYABMAEwAWABEAFAArACsAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACUAJQAlACUAJQAWABEAFgARABYAEQAWABEAFgARABYAEQAlACUAFgARACUAJQAlACUAJQAlACUAEQAlABEAKwAVABUAEwATACUAFgARABYAEQAWABEAJQAlACUAJQAlACUAJQAlACsAJQAbABoAJQArACsAKwArAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAcAKwATACUAJQAbABoAJQAlABYAEQAlACUAEQAlABEAJQBXAFcAVwBXAFcAVwBXAFcAVwBXABUAFQAlACUAJQATACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXABYAJQARACUAJQAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAWACUAEQAlABYAEQARABYAEQARABUAVwBRAFEAUQBRAFEAUQBRAFEAUQBRAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAEcARwArACsAVwBXAFcAVwBXAFcAKwArAFcAVwBXAFcAVwBXACsAKwBXAFcAVwBXAFcAVwArACsAVwBXAFcAKwArACsAGgAbACUAJQAlABsAGwArAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwAEAAQABAAQAB0AKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsADQANAA0AKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAAQAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAA0AUABQAFAAUAArACsAKwArAFAAUABQAFAAUABQAFAAUAANAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwAeACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAKwArAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUAArACsAKwBQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwANAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAUABQAFAAUABQAAQABAAEACsABAAEACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAKwBQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEACsAKwArACsABABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAA0ADQANAA0ADQANAA0ADQAeACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAArACsAKwArAFAAUABQAFAAUAANAA0ADQANAA0ADQAUACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsADQANAA0ADQANAA0ADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAAQABAAEAAQAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArAAQABAANACsAKwBQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAB4AHgAeAB4AHgArACsAKwArACsAKwAEAAQABAAEAAQABAAEAA0ADQAeAB4AHgAeAB4AKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwAeACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsASwBLAEsASwBLAEsASwBLAEsASwANAA0ADQANAFAABAAEAFAAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAeAA4AUAArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAADQANAB4ADQAEAAQABAAEAB4ABAAEAEsASwBLAEsASwBLAEsASwBLAEsAUAAOAFAADQANAA0AKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAANAA0AHgANAA0AHgAEACsAUABQAFAAUABQAFAAUAArAFAAKwBQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAA0AKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsABAAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQACsABAAEAFAABAAEAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABAArACsAUAArACsAKwArACsAKwAEACsAKwArACsAKwBQAFAAUABQAFAABAAEACsAKwAEAAQABAAEAAQABAAEACsAKwArAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAAQABABQAFAAUABQAA0ADQANAA0AHgBLAEsASwBLAEsASwBLAEsASwBLAA0ADQArAB4ABABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAFAAUAAeAFAAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAArACsABAAEAAQABAAEAAQABAAEAAQADgANAA0AEwATAB4AHgAeAA0ADQANAA0ADQANAA0ADQANAA0ADQANAA0ADQANAFAAUABQAFAABAAEACsAKwAEAA0ADQAeAFAAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKwArACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBcAFwADQANAA0AKgBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAKwArAFAAKwArAFAAUABQAFAAUABQAFAAUAArAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQAKwAEAAQAKwArAAQABAAEAAQAUAAEAFAABAAEAA0ADQANACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAArACsABAAEAAQABAAEAAQABABQAA4AUAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAFAABAAEAAQABAAOAB4ADQANAA0ADQAOAB4ABAArACsAKwArACsAKwArACsAUAAEAAQABAAEAAQABAAEAAQABAAEAAQAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAA0ADQANAFAADgAOAA4ADQANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEACsABAAEAAQABAAEAAQABAAEAFAADQANAA0ADQANACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwAOABMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAArACsAKwAEACsABAAEACsABAAEAAQABAAEAAQABABQAAQAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAKwBQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQAKwAEAAQAKwAEAAQABAAEAAQAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAaABoAGgAaAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsADQANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAASABIAEgAQwBDAEMAUABQAFAAUABDAFAAUABQAEgAQwBIAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAASABDAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwAJAAkACQAJAAkACQAJABYAEQArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABIAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwANAA0AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEAAQABAANACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAA0ADQANAB4AHgAeAB4AHgAeAFAAUABQAFAADQAeACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAANAA0AHgAeACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwAEAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAARwBHABUARwAJACsAKwArACsAKwArACsAKwArACsAKwAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACsAKwArACsAKwArACsAKwBXAFcAVwBXAFcAVwBXAFcAVwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUQBRAFEAKwArACsAKwArACsAKwArACsAKwArACsAKwBRAFEAUQBRACsAKwArACsAKwArACsAKwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArACsAHgAEAAQADQAEAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArAB4AHgAeAB4AHgAeAB4AKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAAQABAAEAAQABAAeAB4AHgAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAB4AHgAEAAQABAAEAAQABAAEAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQAHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwBQAFAAKwArAFAAKwArAFAAUAArACsAUABQAFAAUAArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAUAArAFAAUABQAFAAUABQAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAHgAeAFAAUABQAFAAUAArAFAAKwArACsAUABQAFAAUABQAFAAUAArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeACsAKwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4ABAAeAB4AHgAeAB4AHgAeAB4AHgAeAAQAHgAeAA0ADQANAA0AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAAQAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArAAQABAAEAAQABAAEAAQAKwAEAAQAKwAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwBQAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArABsAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArAB4AHgAeAB4ABAAEAAQABAAEAAQABABQACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArABYAFgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAGgBQAFAAUAAaAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAKwBQACsAKwBQACsAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwBQACsAUAArACsAKwArACsAKwBQACsAKwArACsAUAArAFAAKwBQACsAUABQAFAAKwBQAFAAKwBQACsAKwBQACsAUAArAFAAKwBQACsAUAArAFAAUAArAFAAKwArAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUAArAFAAUABQAFAAKwBQACsAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAUABQAFAAKwBQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8AJQAlACUAHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB4AHgAeACUAJQAlAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAlACUAJQAlACUAHgAlACUAJQAlACUAIAAgACAAJQAlACAAJQAlACAAIAAgACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACEAIQAhACEAIQAlACUAIAAgACUAJQAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlACUAIAAlACUAJQAlACAAIAAgACUAIAAgACAAJQAlACUAJQAlACUAJQAgACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAlAB4AJQAeACUAJQAlACUAJQAgACUAJQAlACUAHgAlAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAgACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACAAIAAgACUAJQAlACAAIAAgACAAIAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABcAFwAXABUAFQAVAB4AHgAeAB4AJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAgACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAgACUAJQAgACUAJQAlACUAJQAlACUAJQAgACAAIAAgACAAIAAgACAAJQAlACUAJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAgACAAIAAgACAAIAAgACAAIAAgACUAJQAgACAAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAgACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAlACAAIAAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAgACAAIAAlACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwArAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACUAVwBXACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAA==';

		    var LETTER_NUMBER_MODIFIER = 50;
		    // Non-tailorable Line Breaking Classes
		    var BK = 1; //  Cause a line break (after)
		    var CR$1 = 2; //  Cause a line break (after), except between CR and LF
		    var LF$1 = 3; //  Cause a line break (after)
		    var CM = 4; //  Prohibit a line break between the character and the preceding character
		    var NL = 5; //  Cause a line break (after)
		    var WJ = 7; //  Prohibit line breaks before and after
		    var ZW = 8; //  Provide a break opportunity
		    var GL = 9; //  Prohibit line breaks before and after
		    var SP = 10; // Enable indirect line breaks
		    var ZWJ$1 = 11; // Prohibit line breaks within joiner sequences
		    // Break Opportunities
		    var B2 = 12; //  Provide a line break opportunity before and after the character
		    var BA = 13; //  Generally provide a line break opportunity after the character
		    var BB = 14; //  Generally provide a line break opportunity before the character
		    var HY = 15; //  Provide a line break opportunity after the character, except in numeric context
		    var CB = 16; //   Provide a line break opportunity contingent on additional information
		    // Characters Prohibiting Certain Breaks
		    var CL = 17; //  Prohibit line breaks before
		    var CP = 18; //  Prohibit line breaks before
		    var EX = 19; //  Prohibit line breaks before
		    var IN = 20; //  Allow only indirect line breaks between pairs
		    var NS = 21; //  Allow only indirect line breaks before
		    var OP = 22; //  Prohibit line breaks after
		    var QU = 23; //  Act like they are both opening and closing
		    // Numeric Context
		    var IS = 24; //  Prevent breaks after any and before numeric
		    var NU = 25; //  Form numeric expressions for line breaking purposes
		    var PO = 26; //  Do not break following a numeric expression
		    var PR = 27; //  Do not break in front of a numeric expression
		    var SY = 28; //  Prevent a break before; and allow a break after
		    // Other Characters
		    var AI = 29; //  Act like AL when the resolvedEAW is N; otherwise; act as ID
		    var AL = 30; //  Are alphabetic characters or symbols that are used with alphabetic characters
		    var CJ = 31; //  Treat as NS or ID for strict or normal breaking.
		    var EB = 32; //  Do not break from following Emoji Modifier
		    var EM = 33; //  Do not break from preceding Emoji Base
		    var H2 = 34; //  Form Korean syllable blocks
		    var H3 = 35; //  Form Korean syllable blocks
		    var HL = 36; //  Do not break around a following hyphen; otherwise act as Alphabetic
		    var ID = 37; //  Break before or after; except in some numeric context
		    var JL = 38; //  Form Korean syllable blocks
		    var JV = 39; //  Form Korean syllable blocks
		    var JT = 40; //  Form Korean syllable blocks
		    var RI$1 = 41; //  Keep pairs together. For pairs; break before and after other classes
		    var SA = 42; //  Provide a line break opportunity contingent on additional, language-specific context analysis
		    var XX = 43; //  Have as yet unknown line breaking behavior or unassigned code positions
		    var ea_OP = [0x2329, 0xff08];
		    var BREAK_MANDATORY = '!';
		    var BREAK_NOT_ALLOWED$1 = '×';
		    var BREAK_ALLOWED$1 = '÷';
		    var UnicodeTrie$1 = createTrieFromBase64$1(base64$1);
		    var ALPHABETICS = [AL, HL];
		    var HARD_LINE_BREAKS = [BK, CR$1, LF$1, NL];
		    var SPACE$1 = [SP, ZW];
		    var PREFIX_POSTFIX = [PR, PO];
		    var LINE_BREAKS = HARD_LINE_BREAKS.concat(SPACE$1);
		    var KOREAN_SYLLABLE_BLOCK = [JL, JV, JT, H2, H3];
		    var HYPHEN = [HY, BA];
		    var codePointsToCharacterClasses = function (codePoints, lineBreak) {
		        if (lineBreak === void 0) { lineBreak = 'strict'; }
		        var types = [];
		        var indices = [];
		        var categories = [];
		        codePoints.forEach(function (codePoint, index) {
		            var classType = UnicodeTrie$1.get(codePoint);
		            if (classType > LETTER_NUMBER_MODIFIER) {
		                categories.push(true);
		                classType -= LETTER_NUMBER_MODIFIER;
		            }
		            else {
		                categories.push(false);
		            }
		            if (['normal', 'auto', 'loose'].indexOf(lineBreak) !== -1) {
		                // U+2010, – U+2013, 〜 U+301C, ゠ U+30A0
		                if ([0x2010, 0x2013, 0x301c, 0x30a0].indexOf(codePoint) !== -1) {
		                    indices.push(index);
		                    return types.push(CB);
		                }
		            }
		            if (classType === CM || classType === ZWJ$1) {
		                // LB10 Treat any remaining combining mark or ZWJ as AL.
		                if (index === 0) {
		                    indices.push(index);
		                    return types.push(AL);
		                }
		                // LB9 Do not break a combining character sequence; treat it as if it has the line breaking class of
		                // the base character in all of the following rules. Treat ZWJ as if it were CM.
		                var prev = types[index - 1];
		                if (LINE_BREAKS.indexOf(prev) === -1) {
		                    indices.push(indices[index - 1]);
		                    return types.push(prev);
		                }
		                indices.push(index);
		                return types.push(AL);
		            }
		            indices.push(index);
		            if (classType === CJ) {
		                return types.push(lineBreak === 'strict' ? NS : ID);
		            }
		            if (classType === SA) {
		                return types.push(AL);
		            }
		            if (classType === AI) {
		                return types.push(AL);
		            }
		            // For supplementary characters, a useful default is to treat characters in the range 10000..1FFFD as AL
		            // and characters in the ranges 20000..2FFFD and 30000..3FFFD as ID, until the implementation can be revised
		            // to take into account the actual line breaking properties for these characters.
		            if (classType === XX) {
		                if ((codePoint >= 0x20000 && codePoint <= 0x2fffd) || (codePoint >= 0x30000 && codePoint <= 0x3fffd)) {
		                    return types.push(ID);
		                }
		                else {
		                    return types.push(AL);
		                }
		            }
		            types.push(classType);
		        });
		        return [indices, types, categories];
		    };
		    var isAdjacentWithSpaceIgnored = function (a, b, currentIndex, classTypes) {
		        var current = classTypes[currentIndex];
		        if (Array.isArray(a) ? a.indexOf(current) !== -1 : a === current) {
		            var i = currentIndex;
		            while (i <= classTypes.length) {
		                i++;
		                var next = classTypes[i];
		                if (next === b) {
		                    return true;
		                }
		                if (next !== SP) {
		                    break;
		                }
		            }
		        }
		        if (current === SP) {
		            var i = currentIndex;
		            while (i > 0) {
		                i--;
		                var prev = classTypes[i];
		                if (Array.isArray(a) ? a.indexOf(prev) !== -1 : a === prev) {
		                    var n = currentIndex;
		                    while (n <= classTypes.length) {
		                        n++;
		                        var next = classTypes[n];
		                        if (next === b) {
		                            return true;
		                        }
		                        if (next !== SP) {
		                            break;
		                        }
		                    }
		                }
		                if (prev !== SP) {
		                    break;
		                }
		            }
		        }
		        return false;
		    };
		    var previousNonSpaceClassType = function (currentIndex, classTypes) {
		        var i = currentIndex;
		        while (i >= 0) {
		            var type = classTypes[i];
		            if (type === SP) {
		                i--;
		            }
		            else {
		                return type;
		            }
		        }
		        return 0;
		    };
		    var _lineBreakAtIndex = function (codePoints, classTypes, indicies, index, forbiddenBreaks) {
		        if (indicies[index] === 0) {
		            return BREAK_NOT_ALLOWED$1;
		        }
		        var currentIndex = index - 1;
		        if (Array.isArray(forbiddenBreaks) && forbiddenBreaks[currentIndex] === true) {
		            return BREAK_NOT_ALLOWED$1;
		        }
		        var beforeIndex = currentIndex - 1;
		        var afterIndex = currentIndex + 1;
		        var current = classTypes[currentIndex];
		        // LB4 Always break after hard line breaks.
		        // LB5 Treat CR followed by LF, as well as CR, LF, and NL as hard line breaks.
		        var before = beforeIndex >= 0 ? classTypes[beforeIndex] : 0;
		        var next = classTypes[afterIndex];
		        if (current === CR$1 && next === LF$1) {
		            return BREAK_NOT_ALLOWED$1;
		        }
		        if (HARD_LINE_BREAKS.indexOf(current) !== -1) {
		            return BREAK_MANDATORY;
		        }
		        // LB6 Do not break before hard line breaks.
		        if (HARD_LINE_BREAKS.indexOf(next) !== -1) {
		            return BREAK_NOT_ALLOWED$1;
		        }
		        // LB7 Do not break before spaces or zero width space.
		        if (SPACE$1.indexOf(next) !== -1) {
		            return BREAK_NOT_ALLOWED$1;
		        }
		        // LB8 Break before any character following a zero-width space, even if one or more spaces intervene.
		        if (previousNonSpaceClassType(currentIndex, classTypes) === ZW) {
		            return BREAK_ALLOWED$1;
		        }
		        // LB8a Do not break after a zero width joiner.
		        if (UnicodeTrie$1.get(codePoints[currentIndex]) === ZWJ$1) {
		            return BREAK_NOT_ALLOWED$1;
		        }
		        // zwj emojis
		        if ((current === EB || current === EM) && UnicodeTrie$1.get(codePoints[afterIndex]) === ZWJ$1) {
		            return BREAK_NOT_ALLOWED$1;
		        }
		        // LB11 Do not break before or after Word joiner and related characters.
		        if (current === WJ || next === WJ) {
		            return BREAK_NOT_ALLOWED$1;
		        }
		        // LB12 Do not break after NBSP and related characters.
		        if (current === GL) {
		            return BREAK_NOT_ALLOWED$1;
		        }
		        // LB12a Do not break before NBSP and related characters, except after spaces and hyphens.
		        if ([SP, BA, HY].indexOf(current) === -1 && next === GL) {
		            return BREAK_NOT_ALLOWED$1;
		        }
		        // LB13 Do not break before ‘]’ or ‘!’ or ‘;’ or ‘/’, even after spaces.
		        if ([CL, CP, EX, IS, SY].indexOf(next) !== -1) {
		            return BREAK_NOT_ALLOWED$1;
		        }
		        // LB14 Do not break after ‘[’, even after spaces.
		        if (previousNonSpaceClassType(currentIndex, classTypes) === OP) {
		            return BREAK_NOT_ALLOWED$1;
		        }
		        // LB15 Do not break within ‘”[’, even with intervening spaces.
		        if (isAdjacentWithSpaceIgnored(QU, OP, currentIndex, classTypes)) {
		            return BREAK_NOT_ALLOWED$1;
		        }
		        // LB16 Do not break between closing punctuation and a nonstarter (lb=NS), even with intervening spaces.
		        if (isAdjacentWithSpaceIgnored([CL, CP], NS, currentIndex, classTypes)) {
		            return BREAK_NOT_ALLOWED$1;
		        }
		        // LB17 Do not break within ‘——’, even with intervening spaces.
		        if (isAdjacentWithSpaceIgnored(B2, B2, currentIndex, classTypes)) {
		            return BREAK_NOT_ALLOWED$1;
		        }
		        // LB18 Break after spaces.
		        if (current === SP) {
		            return BREAK_ALLOWED$1;
		        }
		        // LB19 Do not break before or after quotation marks, such as ‘ ” ’.
		        if (current === QU || next === QU) {
		            return BREAK_NOT_ALLOWED$1;
		        }
		        // LB20 Break before and after unresolved CB.
		        if (next === CB || current === CB) {
		            return BREAK_ALLOWED$1;
		        }
		        // LB21 Do not break before hyphen-minus, other hyphens, fixed-width spaces, small kana, and other non-starters, or after acute accents.
		        if ([BA, HY, NS].indexOf(next) !== -1 || current === BB) {
		            return BREAK_NOT_ALLOWED$1;
		        }
		        // LB21a Don't break after Hebrew + Hyphen.
		        if (before === HL && HYPHEN.indexOf(current) !== -1) {
		            return BREAK_NOT_ALLOWED$1;
		        }
		        // LB21b Don’t break between Solidus and Hebrew letters.
		        if (current === SY && next === HL) {
		            return BREAK_NOT_ALLOWED$1;
		        }
		        // LB22 Do not break before ellipsis.
		        if (next === IN) {
		            return BREAK_NOT_ALLOWED$1;
		        }
		        // LB23 Do not break between digits and letters.
		        if ((ALPHABETICS.indexOf(next) !== -1 && current === NU) || (ALPHABETICS.indexOf(current) !== -1 && next === NU)) {
		            return BREAK_NOT_ALLOWED$1;
		        }
		        // LB23a Do not break between numeric prefixes and ideographs, or between ideographs and numeric postfixes.
		        if ((current === PR && [ID, EB, EM].indexOf(next) !== -1) ||
		            ([ID, EB, EM].indexOf(current) !== -1 && next === PO)) {
		            return BREAK_NOT_ALLOWED$1;
		        }
		        // LB24 Do not break between numeric prefix/postfix and letters, or between letters and prefix/postfix.
		        if ((ALPHABETICS.indexOf(current) !== -1 && PREFIX_POSTFIX.indexOf(next) !== -1) ||
		            (PREFIX_POSTFIX.indexOf(current) !== -1 && ALPHABETICS.indexOf(next) !== -1)) {
		            return BREAK_NOT_ALLOWED$1;
		        }
		        // LB25 Do not break between the following pairs of classes relevant to numbers:
		        if (
		        // (PR | PO) × ( OP | HY )? NU
		        ([PR, PO].indexOf(current) !== -1 &&
		            (next === NU || ([OP, HY].indexOf(next) !== -1 && classTypes[afterIndex + 1] === NU))) ||
		            // ( OP | HY ) × NU
		            ([OP, HY].indexOf(current) !== -1 && next === NU) ||
		            // NU ×	(NU | SY | IS)
		            (current === NU && [NU, SY, IS].indexOf(next) !== -1)) {
		            return BREAK_NOT_ALLOWED$1;
		        }
		        // NU (NU | SY | IS)* × (NU | SY | IS | CL | CP)
		        if ([NU, SY, IS, CL, CP].indexOf(next) !== -1) {
		            var prevIndex = currentIndex;
		            while (prevIndex >= 0) {
		                var type = classTypes[prevIndex];
		                if (type === NU) {
		                    return BREAK_NOT_ALLOWED$1;
		                }
		                else if ([SY, IS].indexOf(type) !== -1) {
		                    prevIndex--;
		                }
		                else {
		                    break;
		                }
		            }
		        }
		        // NU (NU | SY | IS)* (CL | CP)? × (PO | PR))
		        if ([PR, PO].indexOf(next) !== -1) {
		            var prevIndex = [CL, CP].indexOf(current) !== -1 ? beforeIndex : currentIndex;
		            while (prevIndex >= 0) {
		                var type = classTypes[prevIndex];
		                if (type === NU) {
		                    return BREAK_NOT_ALLOWED$1;
		                }
		                else if ([SY, IS].indexOf(type) !== -1) {
		                    prevIndex--;
		                }
		                else {
		                    break;
		                }
		            }
		        }
		        // LB26 Do not break a Korean syllable.
		        if ((JL === current && [JL, JV, H2, H3].indexOf(next) !== -1) ||
		            ([JV, H2].indexOf(current) !== -1 && [JV, JT].indexOf(next) !== -1) ||
		            ([JT, H3].indexOf(current) !== -1 && next === JT)) {
		            return BREAK_NOT_ALLOWED$1;
		        }
		        // LB27 Treat a Korean Syllable Block the same as ID.
		        if ((KOREAN_SYLLABLE_BLOCK.indexOf(current) !== -1 && [IN, PO].indexOf(next) !== -1) ||
		            (KOREAN_SYLLABLE_BLOCK.indexOf(next) !== -1 && current === PR)) {
		            return BREAK_NOT_ALLOWED$1;
		        }
		        // LB28 Do not break between alphabetics (“at”).
		        if (ALPHABETICS.indexOf(current) !== -1 && ALPHABETICS.indexOf(next) !== -1) {
		            return BREAK_NOT_ALLOWED$1;
		        }
		        // LB29 Do not break between numeric punctuation and alphabetics (“e.g.”).
		        if (current === IS && ALPHABETICS.indexOf(next) !== -1) {
		            return BREAK_NOT_ALLOWED$1;
		        }
		        // LB30 Do not break between letters, numbers, or ordinary symbols and opening or closing parentheses.
		        if ((ALPHABETICS.concat(NU).indexOf(current) !== -1 &&
		            next === OP &&
		            ea_OP.indexOf(codePoints[afterIndex]) === -1) ||
		            (ALPHABETICS.concat(NU).indexOf(next) !== -1 && current === CP)) {
		            return BREAK_NOT_ALLOWED$1;
		        }
		        // LB30a Break between two regional indicator symbols if and only if there are an even number of regional
		        // indicators preceding the position of the break.
		        if (current === RI$1 && next === RI$1) {
		            var i = indicies[currentIndex];
		            var count = 1;
		            while (i > 0) {
		                i--;
		                if (classTypes[i] === RI$1) {
		                    count++;
		                }
		                else {
		                    break;
		                }
		            }
		            if (count % 2 !== 0) {
		                return BREAK_NOT_ALLOWED$1;
		            }
		        }
		        // LB30b Do not break between an emoji base and an emoji modifier.
		        if (current === EB && next === EM) {
		            return BREAK_NOT_ALLOWED$1;
		        }
		        return BREAK_ALLOWED$1;
		    };
		    var cssFormattedClasses = function (codePoints, options) {
		        if (!options) {
		            options = { lineBreak: 'normal', wordBreak: 'normal' };
		        }
		        var _a = codePointsToCharacterClasses(codePoints, options.lineBreak), indicies = _a[0], classTypes = _a[1], isLetterNumber = _a[2];
		        if (options.wordBreak === 'break-all' || options.wordBreak === 'break-word') {
		            classTypes = classTypes.map(function (type) { return ([NU, AL, SA].indexOf(type) !== -1 ? ID : type); });
		        }
		        var forbiddenBreakpoints = options.wordBreak === 'keep-all'
		            ? isLetterNumber.map(function (letterNumber, i) {
		                return letterNumber && codePoints[i] >= 0x4e00 && codePoints[i] <= 0x9fff;
		            })
		            : undefined;
		        return [indicies, classTypes, forbiddenBreakpoints];
		    };
		    var Break = /** @class */ (function () {
		        function Break(codePoints, lineBreak, start, end) {
		            this.codePoints = codePoints;
		            this.required = lineBreak === BREAK_MANDATORY;
		            this.start = start;
		            this.end = end;
		        }
		        Break.prototype.slice = function () {
		            return fromCodePoint$1.apply(void 0, this.codePoints.slice(this.start, this.end));
		        };
		        return Break;
		    }());
		    var LineBreaker = function (str, options) {
		        var codePoints = toCodePoints$1(str);
		        var _a = cssFormattedClasses(codePoints, options), indicies = _a[0], classTypes = _a[1], forbiddenBreakpoints = _a[2];
		        var length = codePoints.length;
		        var lastEnd = 0;
		        var nextIndex = 0;
		        return {
		            next: function () {
		                if (nextIndex >= length) {
		                    return { done: true, value: null };
		                }
		                var lineBreak = BREAK_NOT_ALLOWED$1;
		                while (nextIndex < length &&
		                    (lineBreak = _lineBreakAtIndex(codePoints, classTypes, indicies, ++nextIndex, forbiddenBreakpoints)) ===
		                        BREAK_NOT_ALLOWED$1) { }
		                if (lineBreak !== BREAK_NOT_ALLOWED$1 || nextIndex === length) {
		                    var value = new Break(codePoints, lineBreak, lastEnd, nextIndex);
		                    lastEnd = nextIndex;
		                    return { value: value, done: false };
		                }
		                return { done: true, value: null };
		            },
		        };
		    };

		    // https://www.w3.org/TR/css-syntax-3
		    var FLAG_UNRESTRICTED = 1 << 0;
		    var FLAG_ID = 1 << 1;
		    var FLAG_INTEGER = 1 << 2;
		    var FLAG_NUMBER = 1 << 3;
		    var LINE_FEED = 0x000a;
		    var SOLIDUS = 0x002f;
		    var REVERSE_SOLIDUS = 0x005c;
		    var CHARACTER_TABULATION = 0x0009;
		    var SPACE = 0x0020;
		    var QUOTATION_MARK = 0x0022;
		    var EQUALS_SIGN = 0x003d;
		    var NUMBER_SIGN = 0x0023;
		    var DOLLAR_SIGN = 0x0024;
		    var PERCENTAGE_SIGN = 0x0025;
		    var APOSTROPHE = 0x0027;
		    var LEFT_PARENTHESIS = 0x0028;
		    var RIGHT_PARENTHESIS = 0x0029;
		    var LOW_LINE = 0x005f;
		    var HYPHEN_MINUS = 0x002d;
		    var EXCLAMATION_MARK = 0x0021;
		    var LESS_THAN_SIGN = 0x003c;
		    var GREATER_THAN_SIGN = 0x003e;
		    var COMMERCIAL_AT = 0x0040;
		    var LEFT_SQUARE_BRACKET = 0x005b;
		    var RIGHT_SQUARE_BRACKET = 0x005d;
		    var CIRCUMFLEX_ACCENT = 0x003d;
		    var LEFT_CURLY_BRACKET = 0x007b;
		    var QUESTION_MARK = 0x003f;
		    var RIGHT_CURLY_BRACKET = 0x007d;
		    var VERTICAL_LINE = 0x007c;
		    var TILDE = 0x007e;
		    var CONTROL = 0x0080;
		    var REPLACEMENT_CHARACTER = 0xfffd;
		    var ASTERISK = 0x002a;
		    var PLUS_SIGN = 0x002b;
		    var COMMA = 0x002c;
		    var COLON = 0x003a;
		    var SEMICOLON = 0x003b;
		    var FULL_STOP = 0x002e;
		    var NULL = 0x0000;
		    var BACKSPACE = 0x0008;
		    var LINE_TABULATION = 0x000b;
		    var SHIFT_OUT = 0x000e;
		    var INFORMATION_SEPARATOR_ONE = 0x001f;
		    var DELETE = 0x007f;
		    var EOF = -1;
		    var ZERO = 0x0030;
		    var a = 0x0061;
		    var e = 0x0065;
		    var f = 0x0066;
		    var u = 0x0075;
		    var z = 0x007a;
		    var A = 0x0041;
		    var E = 0x0045;
		    var F = 0x0046;
		    var U = 0x0055;
		    var Z = 0x005a;
		    var isDigit = function (codePoint) { return codePoint >= ZERO && codePoint <= 0x0039; };
		    var isSurrogateCodePoint = function (codePoint) { return codePoint >= 0xd800 && codePoint <= 0xdfff; };
		    var isHex = function (codePoint) {
		        return isDigit(codePoint) || (codePoint >= A && codePoint <= F) || (codePoint >= a && codePoint <= f);
		    };
		    var isLowerCaseLetter = function (codePoint) { return codePoint >= a && codePoint <= z; };
		    var isUpperCaseLetter = function (codePoint) { return codePoint >= A && codePoint <= Z; };
		    var isLetter = function (codePoint) { return isLowerCaseLetter(codePoint) || isUpperCaseLetter(codePoint); };
		    var isNonASCIICodePoint = function (codePoint) { return codePoint >= CONTROL; };
		    var isWhiteSpace = function (codePoint) {
		        return codePoint === LINE_FEED || codePoint === CHARACTER_TABULATION || codePoint === SPACE;
		    };
		    var isNameStartCodePoint = function (codePoint) {
		        return isLetter(codePoint) || isNonASCIICodePoint(codePoint) || codePoint === LOW_LINE;
		    };
		    var isNameCodePoint = function (codePoint) {
		        return isNameStartCodePoint(codePoint) || isDigit(codePoint) || codePoint === HYPHEN_MINUS;
		    };
		    var isNonPrintableCodePoint = function (codePoint) {
		        return ((codePoint >= NULL && codePoint <= BACKSPACE) ||
		            codePoint === LINE_TABULATION ||
		            (codePoint >= SHIFT_OUT && codePoint <= INFORMATION_SEPARATOR_ONE) ||
		            codePoint === DELETE);
		    };
		    var isValidEscape = function (c1, c2) {
		        if (c1 !== REVERSE_SOLIDUS) {
		            return false;
		        }
		        return c2 !== LINE_FEED;
		    };
		    var isIdentifierStart = function (c1, c2, c3) {
		        if (c1 === HYPHEN_MINUS) {
		            return isNameStartCodePoint(c2) || isValidEscape(c2, c3);
		        }
		        else if (isNameStartCodePoint(c1)) {
		            return true;
		        }
		        else if (c1 === REVERSE_SOLIDUS && isValidEscape(c1, c2)) {
		            return true;
		        }
		        return false;
		    };
		    var isNumberStart = function (c1, c2, c3) {
		        if (c1 === PLUS_SIGN || c1 === HYPHEN_MINUS) {
		            if (isDigit(c2)) {
		                return true;
		            }
		            return c2 === FULL_STOP && isDigit(c3);
		        }
		        if (c1 === FULL_STOP) {
		            return isDigit(c2);
		        }
		        return isDigit(c1);
		    };
		    var stringToNumber = function (codePoints) {
		        var c = 0;
		        var sign = 1;
		        if (codePoints[c] === PLUS_SIGN || codePoints[c] === HYPHEN_MINUS) {
		            if (codePoints[c] === HYPHEN_MINUS) {
		                sign = -1;
		            }
		            c++;
		        }
		        var integers = [];
		        while (isDigit(codePoints[c])) {
		            integers.push(codePoints[c++]);
		        }
		        var int = integers.length ? parseInt(fromCodePoint$1.apply(void 0, integers), 10) : 0;
		        if (codePoints[c] === FULL_STOP) {
		            c++;
		        }
		        var fraction = [];
		        while (isDigit(codePoints[c])) {
		            fraction.push(codePoints[c++]);
		        }
		        var fracd = fraction.length;
		        var frac = fracd ? parseInt(fromCodePoint$1.apply(void 0, fraction), 10) : 0;
		        if (codePoints[c] === E || codePoints[c] === e) {
		            c++;
		        }
		        var expsign = 1;
		        if (codePoints[c] === PLUS_SIGN || codePoints[c] === HYPHEN_MINUS) {
		            if (codePoints[c] === HYPHEN_MINUS) {
		                expsign = -1;
		            }
		            c++;
		        }
		        var exponent = [];
		        while (isDigit(codePoints[c])) {
		            exponent.push(codePoints[c++]);
		        }
		        var exp = exponent.length ? parseInt(fromCodePoint$1.apply(void 0, exponent), 10) : 0;
		        return sign * (int + frac * Math.pow(10, -fracd)) * Math.pow(10, expsign * exp);
		    };
		    var LEFT_PARENTHESIS_TOKEN = {
		        type: 2 /* LEFT_PARENTHESIS_TOKEN */
		    };
		    var RIGHT_PARENTHESIS_TOKEN = {
		        type: 3 /* RIGHT_PARENTHESIS_TOKEN */
		    };
		    var COMMA_TOKEN = { type: 4 /* COMMA_TOKEN */ };
		    var SUFFIX_MATCH_TOKEN = { type: 13 /* SUFFIX_MATCH_TOKEN */ };
		    var PREFIX_MATCH_TOKEN = { type: 8 /* PREFIX_MATCH_TOKEN */ };
		    var COLUMN_TOKEN = { type: 21 /* COLUMN_TOKEN */ };
		    var DASH_MATCH_TOKEN = { type: 9 /* DASH_MATCH_TOKEN */ };
		    var INCLUDE_MATCH_TOKEN = { type: 10 /* INCLUDE_MATCH_TOKEN */ };
		    var LEFT_CURLY_BRACKET_TOKEN = {
		        type: 11 /* LEFT_CURLY_BRACKET_TOKEN */
		    };
		    var RIGHT_CURLY_BRACKET_TOKEN = {
		        type: 12 /* RIGHT_CURLY_BRACKET_TOKEN */
		    };
		    var SUBSTRING_MATCH_TOKEN = { type: 14 /* SUBSTRING_MATCH_TOKEN */ };
		    var BAD_URL_TOKEN = { type: 23 /* BAD_URL_TOKEN */ };
		    var BAD_STRING_TOKEN = { type: 1 /* BAD_STRING_TOKEN */ };
		    var CDO_TOKEN = { type: 25 /* CDO_TOKEN */ };
		    var CDC_TOKEN = { type: 24 /* CDC_TOKEN */ };
		    var COLON_TOKEN = { type: 26 /* COLON_TOKEN */ };
		    var SEMICOLON_TOKEN = { type: 27 /* SEMICOLON_TOKEN */ };
		    var LEFT_SQUARE_BRACKET_TOKEN = {
		        type: 28 /* LEFT_SQUARE_BRACKET_TOKEN */
		    };
		    var RIGHT_SQUARE_BRACKET_TOKEN = {
		        type: 29 /* RIGHT_SQUARE_BRACKET_TOKEN */
		    };
		    var WHITESPACE_TOKEN = { type: 31 /* WHITESPACE_TOKEN */ };
		    var EOF_TOKEN = { type: 32 /* EOF_TOKEN */ };
		    var Tokenizer = /** @class */ (function () {
		        function Tokenizer() {
		            this._value = [];
		        }
		        Tokenizer.prototype.write = function (chunk) {
		            this._value = this._value.concat(toCodePoints$1(chunk));
		        };
		        Tokenizer.prototype.read = function () {
		            var tokens = [];
		            var token = this.consumeToken();
		            while (token !== EOF_TOKEN) {
		                tokens.push(token);
		                token = this.consumeToken();
		            }
		            return tokens;
		        };
		        Tokenizer.prototype.consumeToken = function () {
		            var codePoint = this.consumeCodePoint();
		            switch (codePoint) {
		                case QUOTATION_MARK:
		                    return this.consumeStringToken(QUOTATION_MARK);
		                case NUMBER_SIGN:
		                    var c1 = this.peekCodePoint(0);
		                    var c2 = this.peekCodePoint(1);
		                    var c3 = this.peekCodePoint(2);
		                    if (isNameCodePoint(c1) || isValidEscape(c2, c3)) {
		                        var flags = isIdentifierStart(c1, c2, c3) ? FLAG_ID : FLAG_UNRESTRICTED;
		                        var value = this.consumeName();
		                        return { type: 5 /* HASH_TOKEN */, value: value, flags: flags };
		                    }
		                    break;
		                case DOLLAR_SIGN:
		                    if (this.peekCodePoint(0) === EQUALS_SIGN) {
		                        this.consumeCodePoint();
		                        return SUFFIX_MATCH_TOKEN;
		                    }
		                    break;
		                case APOSTROPHE:
		                    return this.consumeStringToken(APOSTROPHE);
		                case LEFT_PARENTHESIS:
		                    return LEFT_PARENTHESIS_TOKEN;
		                case RIGHT_PARENTHESIS:
		                    return RIGHT_PARENTHESIS_TOKEN;
		                case ASTERISK:
		                    if (this.peekCodePoint(0) === EQUALS_SIGN) {
		                        this.consumeCodePoint();
		                        return SUBSTRING_MATCH_TOKEN;
		                    }
		                    break;
		                case PLUS_SIGN:
		                    if (isNumberStart(codePoint, this.peekCodePoint(0), this.peekCodePoint(1))) {
		                        this.reconsumeCodePoint(codePoint);
		                        return this.consumeNumericToken();
		                    }
		                    break;
		                case COMMA:
		                    return COMMA_TOKEN;
		                case HYPHEN_MINUS:
		                    var e1 = codePoint;
		                    var e2 = this.peekCodePoint(0);
		                    var e3 = this.peekCodePoint(1);
		                    if (isNumberStart(e1, e2, e3)) {
		                        this.reconsumeCodePoint(codePoint);
		                        return this.consumeNumericToken();
		                    }
		                    if (isIdentifierStart(e1, e2, e3)) {
		                        this.reconsumeCodePoint(codePoint);
		                        return this.consumeIdentLikeToken();
		                    }
		                    if (e2 === HYPHEN_MINUS && e3 === GREATER_THAN_SIGN) {
		                        this.consumeCodePoint();
		                        this.consumeCodePoint();
		                        return CDC_TOKEN;
		                    }
		                    break;
		                case FULL_STOP:
		                    if (isNumberStart(codePoint, this.peekCodePoint(0), this.peekCodePoint(1))) {
		                        this.reconsumeCodePoint(codePoint);
		                        return this.consumeNumericToken();
		                    }
		                    break;
		                case SOLIDUS:
		                    if (this.peekCodePoint(0) === ASTERISK) {
		                        this.consumeCodePoint();
		                        while (true) {
		                            var c = this.consumeCodePoint();
		                            if (c === ASTERISK) {
		                                c = this.consumeCodePoint();
		                                if (c === SOLIDUS) {
		                                    return this.consumeToken();
		                                }
		                            }
		                            if (c === EOF) {
		                                return this.consumeToken();
		                            }
		                        }
		                    }
		                    break;
		                case COLON:
		                    return COLON_TOKEN;
		                case SEMICOLON:
		                    return SEMICOLON_TOKEN;
		                case LESS_THAN_SIGN:
		                    if (this.peekCodePoint(0) === EXCLAMATION_MARK &&
		                        this.peekCodePoint(1) === HYPHEN_MINUS &&
		                        this.peekCodePoint(2) === HYPHEN_MINUS) {
		                        this.consumeCodePoint();
		                        this.consumeCodePoint();
		                        return CDO_TOKEN;
		                    }
		                    break;
		                case COMMERCIAL_AT:
		                    var a1 = this.peekCodePoint(0);
		                    var a2 = this.peekCodePoint(1);
		                    var a3 = this.peekCodePoint(2);
		                    if (isIdentifierStart(a1, a2, a3)) {
		                        var value = this.consumeName();
		                        return { type: 7 /* AT_KEYWORD_TOKEN */, value: value };
		                    }
		                    break;
		                case LEFT_SQUARE_BRACKET:
		                    return LEFT_SQUARE_BRACKET_TOKEN;
		                case REVERSE_SOLIDUS:
		                    if (isValidEscape(codePoint, this.peekCodePoint(0))) {
		                        this.reconsumeCodePoint(codePoint);
		                        return this.consumeIdentLikeToken();
		                    }
		                    break;
		                case RIGHT_SQUARE_BRACKET:
		                    return RIGHT_SQUARE_BRACKET_TOKEN;
		                case CIRCUMFLEX_ACCENT:
		                    if (this.peekCodePoint(0) === EQUALS_SIGN) {
		                        this.consumeCodePoint();
		                        return PREFIX_MATCH_TOKEN;
		                    }
		                    break;
		                case LEFT_CURLY_BRACKET:
		                    return LEFT_CURLY_BRACKET_TOKEN;
		                case RIGHT_CURLY_BRACKET:
		                    return RIGHT_CURLY_BRACKET_TOKEN;
		                case u:
		                case U:
		                    var u1 = this.peekCodePoint(0);
		                    var u2 = this.peekCodePoint(1);
		                    if (u1 === PLUS_SIGN && (isHex(u2) || u2 === QUESTION_MARK)) {
		                        this.consumeCodePoint();
		                        this.consumeUnicodeRangeToken();
		                    }
		                    this.reconsumeCodePoint(codePoint);
		                    return this.consumeIdentLikeToken();
		                case VERTICAL_LINE:
		                    if (this.peekCodePoint(0) === EQUALS_SIGN) {
		                        this.consumeCodePoint();
		                        return DASH_MATCH_TOKEN;
		                    }
		                    if (this.peekCodePoint(0) === VERTICAL_LINE) {
		                        this.consumeCodePoint();
		                        return COLUMN_TOKEN;
		                    }
		                    break;
		                case TILDE:
		                    if (this.peekCodePoint(0) === EQUALS_SIGN) {
		                        this.consumeCodePoint();
		                        return INCLUDE_MATCH_TOKEN;
		                    }
		                    break;
		                case EOF:
		                    return EOF_TOKEN;
		            }
		            if (isWhiteSpace(codePoint)) {
		                this.consumeWhiteSpace();
		                return WHITESPACE_TOKEN;
		            }
		            if (isDigit(codePoint)) {
		                this.reconsumeCodePoint(codePoint);
		                return this.consumeNumericToken();
		            }
		            if (isNameStartCodePoint(codePoint)) {
		                this.reconsumeCodePoint(codePoint);
		                return this.consumeIdentLikeToken();
		            }
		            return { type: 6 /* DELIM_TOKEN */, value: fromCodePoint$1(codePoint) };
		        };
		        Tokenizer.prototype.consumeCodePoint = function () {
		            var value = this._value.shift();
		            return typeof value === 'undefined' ? -1 : value;
		        };
		        Tokenizer.prototype.reconsumeCodePoint = function (codePoint) {
		            this._value.unshift(codePoint);
		        };
		        Tokenizer.prototype.peekCodePoint = function (delta) {
		            if (delta >= this._value.length) {
		                return -1;
		            }
		            return this._value[delta];
		        };
		        Tokenizer.prototype.consumeUnicodeRangeToken = function () {
		            var digits = [];
		            var codePoint = this.consumeCodePoint();
		            while (isHex(codePoint) && digits.length < 6) {
		                digits.push(codePoint);
		                codePoint = this.consumeCodePoint();
		            }
		            var questionMarks = false;
		            while (codePoint === QUESTION_MARK && digits.length < 6) {
		                digits.push(codePoint);
		                codePoint = this.consumeCodePoint();
		                questionMarks = true;
		            }
		            if (questionMarks) {
		                var start_1 = parseInt(fromCodePoint$1.apply(void 0, digits.map(function (digit) { return (digit === QUESTION_MARK ? ZERO : digit); })), 16);
		                var end = parseInt(fromCodePoint$1.apply(void 0, digits.map(function (digit) { return (digit === QUESTION_MARK ? F : digit); })), 16);
		                return { type: 30 /* UNICODE_RANGE_TOKEN */, start: start_1, end: end };
		            }
		            var start = parseInt(fromCodePoint$1.apply(void 0, digits), 16);
		            if (this.peekCodePoint(0) === HYPHEN_MINUS && isHex(this.peekCodePoint(1))) {
		                this.consumeCodePoint();
		                codePoint = this.consumeCodePoint();
		                var endDigits = [];
		                while (isHex(codePoint) && endDigits.length < 6) {
		                    endDigits.push(codePoint);
		                    codePoint = this.consumeCodePoint();
		                }
		                var end = parseInt(fromCodePoint$1.apply(void 0, endDigits), 16);
		                return { type: 30 /* UNICODE_RANGE_TOKEN */, start: start, end: end };
		            }
		            else {
		                return { type: 30 /* UNICODE_RANGE_TOKEN */, start: start, end: start };
		            }
		        };
		        Tokenizer.prototype.consumeIdentLikeToken = function () {
		            var value = this.consumeName();
		            if (value.toLowerCase() === 'url' && this.peekCodePoint(0) === LEFT_PARENTHESIS) {
		                this.consumeCodePoint();
		                return this.consumeUrlToken();
		            }
		            else if (this.peekCodePoint(0) === LEFT_PARENTHESIS) {
		                this.consumeCodePoint();
		                return { type: 19 /* FUNCTION_TOKEN */, value: value };
		            }
		            return { type: 20 /* IDENT_TOKEN */, value: value };
		        };
		        Tokenizer.prototype.consumeUrlToken = function () {
		            var value = [];
		            this.consumeWhiteSpace();
		            if (this.peekCodePoint(0) === EOF) {
		                return { type: 22 /* URL_TOKEN */, value: '' };
		            }
		            var next = this.peekCodePoint(0);
		            if (next === APOSTROPHE || next === QUOTATION_MARK) {
		                var stringToken = this.consumeStringToken(this.consumeCodePoint());
		                if (stringToken.type === 0 /* STRING_TOKEN */) {
		                    this.consumeWhiteSpace();
		                    if (this.peekCodePoint(0) === EOF || this.peekCodePoint(0) === RIGHT_PARENTHESIS) {
		                        this.consumeCodePoint();
		                        return { type: 22 /* URL_TOKEN */, value: stringToken.value };
		                    }
		                }
		                this.consumeBadUrlRemnants();
		                return BAD_URL_TOKEN;
		            }
		            while (true) {
		                var codePoint = this.consumeCodePoint();
		                if (codePoint === EOF || codePoint === RIGHT_PARENTHESIS) {
		                    return { type: 22 /* URL_TOKEN */, value: fromCodePoint$1.apply(void 0, value) };
		                }
		                else if (isWhiteSpace(codePoint)) {
		                    this.consumeWhiteSpace();
		                    if (this.peekCodePoint(0) === EOF || this.peekCodePoint(0) === RIGHT_PARENTHESIS) {
		                        this.consumeCodePoint();
		                        return { type: 22 /* URL_TOKEN */, value: fromCodePoint$1.apply(void 0, value) };
		                    }
		                    this.consumeBadUrlRemnants();
		                    return BAD_URL_TOKEN;
		                }
		                else if (codePoint === QUOTATION_MARK ||
		                    codePoint === APOSTROPHE ||
		                    codePoint === LEFT_PARENTHESIS ||
		                    isNonPrintableCodePoint(codePoint)) {
		                    this.consumeBadUrlRemnants();
		                    return BAD_URL_TOKEN;
		                }
		                else if (codePoint === REVERSE_SOLIDUS) {
		                    if (isValidEscape(codePoint, this.peekCodePoint(0))) {
		                        value.push(this.consumeEscapedCodePoint());
		                    }
		                    else {
		                        this.consumeBadUrlRemnants();
		                        return BAD_URL_TOKEN;
		                    }
		                }
		                else {
		                    value.push(codePoint);
		                }
		            }
		        };
		        Tokenizer.prototype.consumeWhiteSpace = function () {
		            while (isWhiteSpace(this.peekCodePoint(0))) {
		                this.consumeCodePoint();
		            }
		        };
		        Tokenizer.prototype.consumeBadUrlRemnants = function () {
		            while (true) {
		                var codePoint = this.consumeCodePoint();
		                if (codePoint === RIGHT_PARENTHESIS || codePoint === EOF) {
		                    return;
		                }
		                if (isValidEscape(codePoint, this.peekCodePoint(0))) {
		                    this.consumeEscapedCodePoint();
		                }
		            }
		        };
		        Tokenizer.prototype.consumeStringSlice = function (count) {
		            var SLICE_STACK_SIZE = 50000;
		            var value = '';
		            while (count > 0) {
		                var amount = Math.min(SLICE_STACK_SIZE, count);
		                value += fromCodePoint$1.apply(void 0, this._value.splice(0, amount));
		                count -= amount;
		            }
		            this._value.shift();
		            return value;
		        };
		        Tokenizer.prototype.consumeStringToken = function (endingCodePoint) {
		            var value = '';
		            var i = 0;
		            do {
		                var codePoint = this._value[i];
		                if (codePoint === EOF || codePoint === undefined || codePoint === endingCodePoint) {
		                    value += this.consumeStringSlice(i);
		                    return { type: 0 /* STRING_TOKEN */, value: value };
		                }
		                if (codePoint === LINE_FEED) {
		                    this._value.splice(0, i);
		                    return BAD_STRING_TOKEN;
		                }
		                if (codePoint === REVERSE_SOLIDUS) {
		                    var next = this._value[i + 1];
		                    if (next !== EOF && next !== undefined) {
		                        if (next === LINE_FEED) {
		                            value += this.consumeStringSlice(i);
		                            i = -1;
		                            this._value.shift();
		                        }
		                        else if (isValidEscape(codePoint, next)) {
		                            value += this.consumeStringSlice(i);
		                            value += fromCodePoint$1(this.consumeEscapedCodePoint());
		                            i = -1;
		                        }
		                    }
		                }
		                i++;
		            } while (true);
		        };
		        Tokenizer.prototype.consumeNumber = function () {
		            var repr = [];
		            var type = FLAG_INTEGER;
		            var c1 = this.peekCodePoint(0);
		            if (c1 === PLUS_SIGN || c1 === HYPHEN_MINUS) {
		                repr.push(this.consumeCodePoint());
		            }
		            while (isDigit(this.peekCodePoint(0))) {
		                repr.push(this.consumeCodePoint());
		            }
		            c1 = this.peekCodePoint(0);
		            var c2 = this.peekCodePoint(1);
		            if (c1 === FULL_STOP && isDigit(c2)) {
		                repr.push(this.consumeCodePoint(), this.consumeCodePoint());
		                type = FLAG_NUMBER;
		                while (isDigit(this.peekCodePoint(0))) {
		                    repr.push(this.consumeCodePoint());
		                }
		            }
		            c1 = this.peekCodePoint(0);
		            c2 = this.peekCodePoint(1);
		            var c3 = this.peekCodePoint(2);
		            if ((c1 === E || c1 === e) && (((c2 === PLUS_SIGN || c2 === HYPHEN_MINUS) && isDigit(c3)) || isDigit(c2))) {
		                repr.push(this.consumeCodePoint(), this.consumeCodePoint());
		                type = FLAG_NUMBER;
		                while (isDigit(this.peekCodePoint(0))) {
		                    repr.push(this.consumeCodePoint());
		                }
		            }
		            return [stringToNumber(repr), type];
		        };
		        Tokenizer.prototype.consumeNumericToken = function () {
		            var _a = this.consumeNumber(), number = _a[0], flags = _a[1];
		            var c1 = this.peekCodePoint(0);
		            var c2 = this.peekCodePoint(1);
		            var c3 = this.peekCodePoint(2);
		            if (isIdentifierStart(c1, c2, c3)) {
		                var unit = this.consumeName();
		                return { type: 15 /* DIMENSION_TOKEN */, number: number, flags: flags, unit: unit };
		            }
		            if (c1 === PERCENTAGE_SIGN) {
		                this.consumeCodePoint();
		                return { type: 16 /* PERCENTAGE_TOKEN */, number: number, flags: flags };
		            }
		            return { type: 17 /* NUMBER_TOKEN */, number: number, flags: flags };
		        };
		        Tokenizer.prototype.consumeEscapedCodePoint = function () {
		            var codePoint = this.consumeCodePoint();
		            if (isHex(codePoint)) {
		                var hex = fromCodePoint$1(codePoint);
		                while (isHex(this.peekCodePoint(0)) && hex.length < 6) {
		                    hex += fromCodePoint$1(this.consumeCodePoint());
		                }
		                if (isWhiteSpace(this.peekCodePoint(0))) {
		                    this.consumeCodePoint();
		                }
		                var hexCodePoint = parseInt(hex, 16);
		                if (hexCodePoint === 0 || isSurrogateCodePoint(hexCodePoint) || hexCodePoint > 0x10ffff) {
		                    return REPLACEMENT_CHARACTER;
		                }
		                return hexCodePoint;
		            }
		            if (codePoint === EOF) {
		                return REPLACEMENT_CHARACTER;
		            }
		            return codePoint;
		        };
		        Tokenizer.prototype.consumeName = function () {
		            var result = '';
		            while (true) {
		                var codePoint = this.consumeCodePoint();
		                if (isNameCodePoint(codePoint)) {
		                    result += fromCodePoint$1(codePoint);
		                }
		                else if (isValidEscape(codePoint, this.peekCodePoint(0))) {
		                    result += fromCodePoint$1(this.consumeEscapedCodePoint());
		                }
		                else {
		                    this.reconsumeCodePoint(codePoint);
		                    return result;
		                }
		            }
		        };
		        return Tokenizer;
		    }());

		    var Parser = /** @class */ (function () {
		        function Parser(tokens) {
		            this._tokens = tokens;
		        }
		        Parser.create = function (value) {
		            var tokenizer = new Tokenizer();
		            tokenizer.write(value);
		            return new Parser(tokenizer.read());
		        };
		        Parser.parseValue = function (value) {
		            return Parser.create(value).parseComponentValue();
		        };
		        Parser.parseValues = function (value) {
		            return Parser.create(value).parseComponentValues();
		        };
		        Parser.prototype.parseComponentValue = function () {
		            var token = this.consumeToken();
		            while (token.type === 31 /* WHITESPACE_TOKEN */) {
		                token = this.consumeToken();
		            }
		            if (token.type === 32 /* EOF_TOKEN */) {
		                throw new SyntaxError("Error parsing CSS component value, unexpected EOF");
		            }
		            this.reconsumeToken(token);
		            var value = this.consumeComponentValue();
		            do {
		                token = this.consumeToken();
		            } while (token.type === 31 /* WHITESPACE_TOKEN */);
		            if (token.type === 32 /* EOF_TOKEN */) {
		                return value;
		            }
		            throw new SyntaxError("Error parsing CSS component value, multiple values found when expecting only one");
		        };
		        Parser.prototype.parseComponentValues = function () {
		            var values = [];
		            while (true) {
		                var value = this.consumeComponentValue();
		                if (value.type === 32 /* EOF_TOKEN */) {
		                    return values;
		                }
		                values.push(value);
		                values.push();
		            }
		        };
		        Parser.prototype.consumeComponentValue = function () {
		            var token = this.consumeToken();
		            switch (token.type) {
		                case 11 /* LEFT_CURLY_BRACKET_TOKEN */:
		                case 28 /* LEFT_SQUARE_BRACKET_TOKEN */:
		                case 2 /* LEFT_PARENTHESIS_TOKEN */:
		                    return this.consumeSimpleBlock(token.type);
		                case 19 /* FUNCTION_TOKEN */:
		                    return this.consumeFunction(token);
		            }
		            return token;
		        };
		        Parser.prototype.consumeSimpleBlock = function (type) {
		            var block = { type: type, values: [] };
		            var token = this.consumeToken();
		            while (true) {
		                if (token.type === 32 /* EOF_TOKEN */ || isEndingTokenFor(token, type)) {
		                    return block;
		                }
		                this.reconsumeToken(token);
		                block.values.push(this.consumeComponentValue());
		                token = this.consumeToken();
		            }
		        };
		        Parser.prototype.consumeFunction = function (functionToken) {
		            var cssFunction = {
		                name: functionToken.value,
		                values: [],
		                type: 18 /* FUNCTION */
		            };
		            while (true) {
		                var token = this.consumeToken();
		                if (token.type === 32 /* EOF_TOKEN */ || token.type === 3 /* RIGHT_PARENTHESIS_TOKEN */) {
		                    return cssFunction;
		                }
		                this.reconsumeToken(token);
		                cssFunction.values.push(this.consumeComponentValue());
		            }
		        };
		        Parser.prototype.consumeToken = function () {
		            var token = this._tokens.shift();
		            return typeof token === 'undefined' ? EOF_TOKEN : token;
		        };
		        Parser.prototype.reconsumeToken = function (token) {
		            this._tokens.unshift(token);
		        };
		        return Parser;
		    }());
		    var isDimensionToken = function (token) { return token.type === 15 /* DIMENSION_TOKEN */; };
		    var isNumberToken = function (token) { return token.type === 17 /* NUMBER_TOKEN */; };
		    var isIdentToken = function (token) { return token.type === 20 /* IDENT_TOKEN */; };
		    var isStringToken = function (token) { return token.type === 0 /* STRING_TOKEN */; };
		    var isIdentWithValue = function (token, value) {
		        return isIdentToken(token) && token.value === value;
		    };
		    var nonWhiteSpace = function (token) { return token.type !== 31 /* WHITESPACE_TOKEN */; };
		    var nonFunctionArgSeparator = function (token) {
		        return token.type !== 31 /* WHITESPACE_TOKEN */ && token.type !== 4 /* COMMA_TOKEN */;
		    };
		    var parseFunctionArgs = function (tokens) {
		        var args = [];
		        var arg = [];
		        tokens.forEach(function (token) {
		            if (token.type === 4 /* COMMA_TOKEN */) {
		                if (arg.length === 0) {
		                    throw new Error("Error parsing function args, zero tokens for arg");
		                }
		                args.push(arg);
		                arg = [];
		                return;
		            }
		            if (token.type !== 31 /* WHITESPACE_TOKEN */) {
		                arg.push(token);
		            }
		        });
		        if (arg.length) {
		            args.push(arg);
		        }
		        return args;
		    };
		    var isEndingTokenFor = function (token, type) {
		        if (type === 11 /* LEFT_CURLY_BRACKET_TOKEN */ && token.type === 12 /* RIGHT_CURLY_BRACKET_TOKEN */) {
		            return true;
		        }
		        if (type === 28 /* LEFT_SQUARE_BRACKET_TOKEN */ && token.type === 29 /* RIGHT_SQUARE_BRACKET_TOKEN */) {
		            return true;
		        }
		        return type === 2 /* LEFT_PARENTHESIS_TOKEN */ && token.type === 3 /* RIGHT_PARENTHESIS_TOKEN */;
		    };

		    var isLength = function (token) {
		        return token.type === 17 /* NUMBER_TOKEN */ || token.type === 15 /* DIMENSION_TOKEN */;
		    };

		    var isLengthPercentage = function (token) {
		        return token.type === 16 /* PERCENTAGE_TOKEN */ || isLength(token);
		    };
		    var parseLengthPercentageTuple = function (tokens) {
		        return tokens.length > 1 ? [tokens[0], tokens[1]] : [tokens[0]];
		    };
		    var ZERO_LENGTH = {
		        type: 17 /* NUMBER_TOKEN */,
		        number: 0,
		        flags: FLAG_INTEGER
		    };
		    var FIFTY_PERCENT = {
		        type: 16 /* PERCENTAGE_TOKEN */,
		        number: 50,
		        flags: FLAG_INTEGER
		    };
		    var HUNDRED_PERCENT = {
		        type: 16 /* PERCENTAGE_TOKEN */,
		        number: 100,
		        flags: FLAG_INTEGER
		    };
		    var getAbsoluteValueForTuple = function (tuple, width, height) {
		        var x = tuple[0], y = tuple[1];
		        return [getAbsoluteValue(x, width), getAbsoluteValue(typeof y !== 'undefined' ? y : x, height)];
		    };
		    var getAbsoluteValue = function (token, parent) {
		        if (token.type === 16 /* PERCENTAGE_TOKEN */) {
		            return (token.number / 100) * parent;
		        }
		        if (isDimensionToken(token)) {
		            switch (token.unit) {
		                case 'rem':
		                case 'em':
		                    return 16 * token.number; // TODO use correct font-size
		                case 'px':
		                default:
		                    return token.number;
		            }
		        }
		        return token.number;
		    };

		    var DEG = 'deg';
		    var GRAD = 'grad';
		    var RAD = 'rad';
		    var TURN = 'turn';
		    var angle = {
		        name: 'angle',
		        parse: function (_context, value) {
		            if (value.type === 15 /* DIMENSION_TOKEN */) {
		                switch (value.unit) {
		                    case DEG:
		                        return (Math.PI * value.number) / 180;
		                    case GRAD:
		                        return (Math.PI / 200) * value.number;
		                    case RAD:
		                        return value.number;
		                    case TURN:
		                        return Math.PI * 2 * value.number;
		                }
		            }
		            throw new Error("Unsupported angle type");
		        }
		    };
		    var isAngle = function (value) {
		        if (value.type === 15 /* DIMENSION_TOKEN */) {
		            if (value.unit === DEG || value.unit === GRAD || value.unit === RAD || value.unit === TURN) {
		                return true;
		            }
		        }
		        return false;
		    };
		    var parseNamedSide = function (tokens) {
		        var sideOrCorner = tokens
		            .filter(isIdentToken)
		            .map(function (ident) { return ident.value; })
		            .join(' ');
		        switch (sideOrCorner) {
		            case 'to bottom right':
		            case 'to right bottom':
		            case 'left top':
		            case 'top left':
		                return [ZERO_LENGTH, ZERO_LENGTH];
		            case 'to top':
		            case 'bottom':
		                return deg(0);
		            case 'to bottom left':
		            case 'to left bottom':
		            case 'right top':
		            case 'top right':
		                return [ZERO_LENGTH, HUNDRED_PERCENT];
		            case 'to right':
		            case 'left':
		                return deg(90);
		            case 'to top left':
		            case 'to left top':
		            case 'right bottom':
		            case 'bottom right':
		                return [HUNDRED_PERCENT, HUNDRED_PERCENT];
		            case 'to bottom':
		            case 'top':
		                return deg(180);
		            case 'to top right':
		            case 'to right top':
		            case 'left bottom':
		            case 'bottom left':
		                return [HUNDRED_PERCENT, ZERO_LENGTH];
		            case 'to left':
		            case 'right':
		                return deg(270);
		        }
		        return 0;
		    };
		    var deg = function (deg) { return (Math.PI * deg) / 180; };

		    var color$1 = {
		        name: 'color',
		        parse: function (context, value) {
		            if (value.type === 18 /* FUNCTION */) {
		                var colorFunction = SUPPORTED_COLOR_FUNCTIONS[value.name];
		                if (typeof colorFunction === 'undefined') {
		                    throw new Error("Attempting to parse an unsupported color function \"" + value.name + "\"");
		                }
		                return colorFunction(context, value.values);
		            }
		            if (value.type === 5 /* HASH_TOKEN */) {
		                if (value.value.length === 3) {
		                    var r = value.value.substring(0, 1);
		                    var g = value.value.substring(1, 2);
		                    var b = value.value.substring(2, 3);
		                    return pack(parseInt(r + r, 16), parseInt(g + g, 16), parseInt(b + b, 16), 1);
		                }
		                if (value.value.length === 4) {
		                    var r = value.value.substring(0, 1);
		                    var g = value.value.substring(1, 2);
		                    var b = value.value.substring(2, 3);
		                    var a = value.value.substring(3, 4);
		                    return pack(parseInt(r + r, 16), parseInt(g + g, 16), parseInt(b + b, 16), parseInt(a + a, 16) / 255);
		                }
		                if (value.value.length === 6) {
		                    var r = value.value.substring(0, 2);
		                    var g = value.value.substring(2, 4);
		                    var b = value.value.substring(4, 6);
		                    return pack(parseInt(r, 16), parseInt(g, 16), parseInt(b, 16), 1);
		                }
		                if (value.value.length === 8) {
		                    var r = value.value.substring(0, 2);
		                    var g = value.value.substring(2, 4);
		                    var b = value.value.substring(4, 6);
		                    var a = value.value.substring(6, 8);
		                    return pack(parseInt(r, 16), parseInt(g, 16), parseInt(b, 16), parseInt(a, 16) / 255);
		                }
		            }
		            if (value.type === 20 /* IDENT_TOKEN */) {
		                var namedColor = COLORS[value.value.toUpperCase()];
		                if (typeof namedColor !== 'undefined') {
		                    return namedColor;
		                }
		            }
		            return COLORS.TRANSPARENT;
		        }
		    };
		    var isTransparent = function (color) { return (0xff & color) === 0; };
		    var asString = function (color) {
		        var alpha = 0xff & color;
		        var blue = 0xff & (color >> 8);
		        var green = 0xff & (color >> 16);
		        var red = 0xff & (color >> 24);
		        return alpha < 255 ? "rgba(" + red + "," + green + "," + blue + "," + alpha / 255 + ")" : "rgb(" + red + "," + green + "," + blue + ")";
		    };
		    var pack = function (r, g, b, a) {
		        return ((r << 24) | (g << 16) | (b << 8) | (Math.round(a * 255) << 0)) >>> 0;
		    };
		    var getTokenColorValue = function (token, i) {
		        if (token.type === 17 /* NUMBER_TOKEN */) {
		            return token.number;
		        }
		        if (token.type === 16 /* PERCENTAGE_TOKEN */) {
		            var max = i === 3 ? 1 : 255;
		            return i === 3 ? (token.number / 100) * max : Math.round((token.number / 100) * max);
		        }
		        return 0;
		    };
		    var rgb = function (_context, args) {
		        var tokens = args.filter(nonFunctionArgSeparator);
		        if (tokens.length === 3) {
		            var _a = tokens.map(getTokenColorValue), r = _a[0], g = _a[1], b = _a[2];
		            return pack(r, g, b, 1);
		        }
		        if (tokens.length === 4) {
		            var _b = tokens.map(getTokenColorValue), r = _b[0], g = _b[1], b = _b[2], a = _b[3];
		            return pack(r, g, b, a);
		        }
		        return 0;
		    };
		    function hue2rgb(t1, t2, hue) {
		        if (hue < 0) {
		            hue += 1;
		        }
		        if (hue >= 1) {
		            hue -= 1;
		        }
		        if (hue < 1 / 6) {
		            return (t2 - t1) * hue * 6 + t1;
		        }
		        else if (hue < 1 / 2) {
		            return t2;
		        }
		        else if (hue < 2 / 3) {
		            return (t2 - t1) * 6 * (2 / 3 - hue) + t1;
		        }
		        else {
		            return t1;
		        }
		    }
		    var hsl = function (context, args) {
		        var tokens = args.filter(nonFunctionArgSeparator);
		        var hue = tokens[0], saturation = tokens[1], lightness = tokens[2], alpha = tokens[3];
		        var h = (hue.type === 17 /* NUMBER_TOKEN */ ? deg(hue.number) : angle.parse(context, hue)) / (Math.PI * 2);
		        var s = isLengthPercentage(saturation) ? saturation.number / 100 : 0;
		        var l = isLengthPercentage(lightness) ? lightness.number / 100 : 0;
		        var a = typeof alpha !== 'undefined' && isLengthPercentage(alpha) ? getAbsoluteValue(alpha, 1) : 1;
		        if (s === 0) {
		            return pack(l * 255, l * 255, l * 255, 1);
		        }
		        var t2 = l <= 0.5 ? l * (s + 1) : l + s - l * s;
		        var t1 = l * 2 - t2;
		        var r = hue2rgb(t1, t2, h + 1 / 3);
		        var g = hue2rgb(t1, t2, h);
		        var b = hue2rgb(t1, t2, h - 1 / 3);
		        return pack(r * 255, g * 255, b * 255, a);
		    };
		    var SUPPORTED_COLOR_FUNCTIONS = {
		        hsl: hsl,
		        hsla: hsl,
		        rgb: rgb,
		        rgba: rgb
		    };
		    var parseColor = function (context, value) {
		        return color$1.parse(context, Parser.create(value).parseComponentValue());
		    };
		    var COLORS = {
		        ALICEBLUE: 0xf0f8ffff,
		        ANTIQUEWHITE: 0xfaebd7ff,
		        AQUA: 0x00ffffff,
		        AQUAMARINE: 0x7fffd4ff,
		        AZURE: 0xf0ffffff,
		        BEIGE: 0xf5f5dcff,
		        BISQUE: 0xffe4c4ff,
		        BLACK: 0x000000ff,
		        BLANCHEDALMOND: 0xffebcdff,
		        BLUE: 0x0000ffff,
		        BLUEVIOLET: 0x8a2be2ff,
		        BROWN: 0xa52a2aff,
		        BURLYWOOD: 0xdeb887ff,
		        CADETBLUE: 0x5f9ea0ff,
		        CHARTREUSE: 0x7fff00ff,
		        CHOCOLATE: 0xd2691eff,
		        CORAL: 0xff7f50ff,
		        CORNFLOWERBLUE: 0x6495edff,
		        CORNSILK: 0xfff8dcff,
		        CRIMSON: 0xdc143cff,
		        CYAN: 0x00ffffff,
		        DARKBLUE: 0x00008bff,
		        DARKCYAN: 0x008b8bff,
		        DARKGOLDENROD: 0xb886bbff,
		        DARKGRAY: 0xa9a9a9ff,
		        DARKGREEN: 0x006400ff,
		        DARKGREY: 0xa9a9a9ff,
		        DARKKHAKI: 0xbdb76bff,
		        DARKMAGENTA: 0x8b008bff,
		        DARKOLIVEGREEN: 0x556b2fff,
		        DARKORANGE: 0xff8c00ff,
		        DARKORCHID: 0x9932ccff,
		        DARKRED: 0x8b0000ff,
		        DARKSALMON: 0xe9967aff,
		        DARKSEAGREEN: 0x8fbc8fff,
		        DARKSLATEBLUE: 0x483d8bff,
		        DARKSLATEGRAY: 0x2f4f4fff,
		        DARKSLATEGREY: 0x2f4f4fff,
		        DARKTURQUOISE: 0x00ced1ff,
		        DARKVIOLET: 0x9400d3ff,
		        DEEPPINK: 0xff1493ff,
		        DEEPSKYBLUE: 0x00bfffff,
		        DIMGRAY: 0x696969ff,
		        DIMGREY: 0x696969ff,
		        DODGERBLUE: 0x1e90ffff,
		        FIREBRICK: 0xb22222ff,
		        FLORALWHITE: 0xfffaf0ff,
		        FORESTGREEN: 0x228b22ff,
		        FUCHSIA: 0xff00ffff,
		        GAINSBORO: 0xdcdcdcff,
		        GHOSTWHITE: 0xf8f8ffff,
		        GOLD: 0xffd700ff,
		        GOLDENROD: 0xdaa520ff,
		        GRAY: 0x808080ff,
		        GREEN: 0x008000ff,
		        GREENYELLOW: 0xadff2fff,
		        GREY: 0x808080ff,
		        HONEYDEW: 0xf0fff0ff,
		        HOTPINK: 0xff69b4ff,
		        INDIANRED: 0xcd5c5cff,
		        INDIGO: 0x4b0082ff,
		        IVORY: 0xfffff0ff,
		        KHAKI: 0xf0e68cff,
		        LAVENDER: 0xe6e6faff,
		        LAVENDERBLUSH: 0xfff0f5ff,
		        LAWNGREEN: 0x7cfc00ff,
		        LEMONCHIFFON: 0xfffacdff,
		        LIGHTBLUE: 0xadd8e6ff,
		        LIGHTCORAL: 0xf08080ff,
		        LIGHTCYAN: 0xe0ffffff,
		        LIGHTGOLDENRODYELLOW: 0xfafad2ff,
		        LIGHTGRAY: 0xd3d3d3ff,
		        LIGHTGREEN: 0x90ee90ff,
		        LIGHTGREY: 0xd3d3d3ff,
		        LIGHTPINK: 0xffb6c1ff,
		        LIGHTSALMON: 0xffa07aff,
		        LIGHTSEAGREEN: 0x20b2aaff,
		        LIGHTSKYBLUE: 0x87cefaff,
		        LIGHTSLATEGRAY: 0x778899ff,
		        LIGHTSLATEGREY: 0x778899ff,
		        LIGHTSTEELBLUE: 0xb0c4deff,
		        LIGHTYELLOW: 0xffffe0ff,
		        LIME: 0x00ff00ff,
		        LIMEGREEN: 0x32cd32ff,
		        LINEN: 0xfaf0e6ff,
		        MAGENTA: 0xff00ffff,
		        MAROON: 0x800000ff,
		        MEDIUMAQUAMARINE: 0x66cdaaff,
		        MEDIUMBLUE: 0x0000cdff,
		        MEDIUMORCHID: 0xba55d3ff,
		        MEDIUMPURPLE: 0x9370dbff,
		        MEDIUMSEAGREEN: 0x3cb371ff,
		        MEDIUMSLATEBLUE: 0x7b68eeff,
		        MEDIUMSPRINGGREEN: 0x00fa9aff,
		        MEDIUMTURQUOISE: 0x48d1ccff,
		        MEDIUMVIOLETRED: 0xc71585ff,
		        MIDNIGHTBLUE: 0x191970ff,
		        MINTCREAM: 0xf5fffaff,
		        MISTYROSE: 0xffe4e1ff,
		        MOCCASIN: 0xffe4b5ff,
		        NAVAJOWHITE: 0xffdeadff,
		        NAVY: 0x000080ff,
		        OLDLACE: 0xfdf5e6ff,
		        OLIVE: 0x808000ff,
		        OLIVEDRAB: 0x6b8e23ff,
		        ORANGE: 0xffa500ff,
		        ORANGERED: 0xff4500ff,
		        ORCHID: 0xda70d6ff,
		        PALEGOLDENROD: 0xeee8aaff,
		        PALEGREEN: 0x98fb98ff,
		        PALETURQUOISE: 0xafeeeeff,
		        PALEVIOLETRED: 0xdb7093ff,
		        PAPAYAWHIP: 0xffefd5ff,
		        PEACHPUFF: 0xffdab9ff,
		        PERU: 0xcd853fff,
		        PINK: 0xffc0cbff,
		        PLUM: 0xdda0ddff,
		        POWDERBLUE: 0xb0e0e6ff,
		        PURPLE: 0x800080ff,
		        REBECCAPURPLE: 0x663399ff,
		        RED: 0xff0000ff,
		        ROSYBROWN: 0xbc8f8fff,
		        ROYALBLUE: 0x4169e1ff,
		        SADDLEBROWN: 0x8b4513ff,
		        SALMON: 0xfa8072ff,
		        SANDYBROWN: 0xf4a460ff,
		        SEAGREEN: 0x2e8b57ff,
		        SEASHELL: 0xfff5eeff,
		        SIENNA: 0xa0522dff,
		        SILVER: 0xc0c0c0ff,
		        SKYBLUE: 0x87ceebff,
		        SLATEBLUE: 0x6a5acdff,
		        SLATEGRAY: 0x708090ff,
		        SLATEGREY: 0x708090ff,
		        SNOW: 0xfffafaff,
		        SPRINGGREEN: 0x00ff7fff,
		        STEELBLUE: 0x4682b4ff,
		        TAN: 0xd2b48cff,
		        TEAL: 0x008080ff,
		        THISTLE: 0xd8bfd8ff,
		        TOMATO: 0xff6347ff,
		        TRANSPARENT: 0x00000000,
		        TURQUOISE: 0x40e0d0ff,
		        VIOLET: 0xee82eeff,
		        WHEAT: 0xf5deb3ff,
		        WHITE: 0xffffffff,
		        WHITESMOKE: 0xf5f5f5ff,
		        YELLOW: 0xffff00ff,
		        YELLOWGREEN: 0x9acd32ff
		    };

		    var backgroundClip = {
		        name: 'background-clip',
		        initialValue: 'border-box',
		        prefix: false,
		        type: 1 /* LIST */,
		        parse: function (_context, tokens) {
		            return tokens.map(function (token) {
		                if (isIdentToken(token)) {
		                    switch (token.value) {
		                        case 'padding-box':
		                            return 1 /* PADDING_BOX */;
		                        case 'content-box':
		                            return 2 /* CONTENT_BOX */;
		                    }
		                }
		                return 0 /* BORDER_BOX */;
		            });
		        }
		    };

		    var backgroundColor = {
		        name: "background-color",
		        initialValue: 'transparent',
		        prefix: false,
		        type: 3 /* TYPE_VALUE */,
		        format: 'color'
		    };

		    var parseColorStop = function (context, args) {
		        var color = color$1.parse(context, args[0]);
		        var stop = args[1];
		        return stop && isLengthPercentage(stop) ? { color: color, stop: stop } : { color: color, stop: null };
		    };
		    var processColorStops = function (stops, lineLength) {
		        var first = stops[0];
		        var last = stops[stops.length - 1];
		        if (first.stop === null) {
		            first.stop = ZERO_LENGTH;
		        }
		        if (last.stop === null) {
		            last.stop = HUNDRED_PERCENT;
		        }
		        var processStops = [];
		        var previous = 0;
		        for (var i = 0; i < stops.length; i++) {
		            var stop_1 = stops[i].stop;
		            if (stop_1 !== null) {
		                var absoluteValue = getAbsoluteValue(stop_1, lineLength);
		                if (absoluteValue > previous) {
		                    processStops.push(absoluteValue);
		                }
		                else {
		                    processStops.push(previous);
		                }
		                previous = absoluteValue;
		            }
		            else {
		                processStops.push(null);
		            }
		        }
		        var gapBegin = null;
		        for (var i = 0; i < processStops.length; i++) {
		            var stop_2 = processStops[i];
		            if (stop_2 === null) {
		                if (gapBegin === null) {
		                    gapBegin = i;
		                }
		            }
		            else if (gapBegin !== null) {
		                var gapLength = i - gapBegin;
		                var beforeGap = processStops[gapBegin - 1];
		                var gapValue = (stop_2 - beforeGap) / (gapLength + 1);
		                for (var g = 1; g <= gapLength; g++) {
		                    processStops[gapBegin + g - 1] = gapValue * g;
		                }
		                gapBegin = null;
		            }
		        }
		        return stops.map(function (_a, i) {
		            var color = _a.color;
		            return { color: color, stop: Math.max(Math.min(1, processStops[i] / lineLength), 0) };
		        });
		    };
		    var getAngleFromCorner = function (corner, width, height) {
		        var centerX = width / 2;
		        var centerY = height / 2;
		        var x = getAbsoluteValue(corner[0], width) - centerX;
		        var y = centerY - getAbsoluteValue(corner[1], height);
		        return (Math.atan2(y, x) + Math.PI * 2) % (Math.PI * 2);
		    };
		    var calculateGradientDirection = function (angle, width, height) {
		        var radian = typeof angle === 'number' ? angle : getAngleFromCorner(angle, width, height);
		        var lineLength = Math.abs(width * Math.sin(radian)) + Math.abs(height * Math.cos(radian));
		        var halfWidth = width / 2;
		        var halfHeight = height / 2;
		        var halfLineLength = lineLength / 2;
		        var yDiff = Math.sin(radian - Math.PI / 2) * halfLineLength;
		        var xDiff = Math.cos(radian - Math.PI / 2) * halfLineLength;
		        return [lineLength, halfWidth - xDiff, halfWidth + xDiff, halfHeight - yDiff, halfHeight + yDiff];
		    };
		    var distance = function (a, b) { return Math.sqrt(a * a + b * b); };
		    var findCorner = function (width, height, x, y, closest) {
		        var corners = [
		            [0, 0],
		            [0, height],
		            [width, 0],
		            [width, height]
		        ];
		        return corners.reduce(function (stat, corner) {
		            var cx = corner[0], cy = corner[1];
		            var d = distance(x - cx, y - cy);
		            if (closest ? d < stat.optimumDistance : d > stat.optimumDistance) {
		                return {
		                    optimumCorner: corner,
		                    optimumDistance: d
		                };
		            }
		            return stat;
		        }, {
		            optimumDistance: closest ? Infinity : -Infinity,
		            optimumCorner: null
		        }).optimumCorner;
		    };
		    var calculateRadius = function (gradient, x, y, width, height) {
		        var rx = 0;
		        var ry = 0;
		        switch (gradient.size) {
		            case 0 /* CLOSEST_SIDE */:
		                // The ending shape is sized so that that it exactly meets the side of the gradient box closest to the gradient’s center.
		                // If the shape is an ellipse, it exactly meets the closest side in each dimension.
		                if (gradient.shape === 0 /* CIRCLE */) {
		                    rx = ry = Math.min(Math.abs(x), Math.abs(x - width), Math.abs(y), Math.abs(y - height));
		                }
		                else if (gradient.shape === 1 /* ELLIPSE */) {
		                    rx = Math.min(Math.abs(x), Math.abs(x - width));
		                    ry = Math.min(Math.abs(y), Math.abs(y - height));
		                }
		                break;
		            case 2 /* CLOSEST_CORNER */:
		                // The ending shape is sized so that that it passes through the corner of the gradient box closest to the gradient’s center.
		                // If the shape is an ellipse, the ending shape is given the same aspect-ratio it would have if closest-side were specified.
		                if (gradient.shape === 0 /* CIRCLE */) {
		                    rx = ry = Math.min(distance(x, y), distance(x, y - height), distance(x - width, y), distance(x - width, y - height));
		                }
		                else if (gradient.shape === 1 /* ELLIPSE */) {
		                    // Compute the ratio ry/rx (which is to be the same as for "closest-side")
		                    var c = Math.min(Math.abs(y), Math.abs(y - height)) / Math.min(Math.abs(x), Math.abs(x - width));
		                    var _a = findCorner(width, height, x, y, true), cx = _a[0], cy = _a[1];
		                    rx = distance(cx - x, (cy - y) / c);
		                    ry = c * rx;
		                }
		                break;
		            case 1 /* FARTHEST_SIDE */:
		                // Same as closest-side, except the ending shape is sized based on the farthest side(s)
		                if (gradient.shape === 0 /* CIRCLE */) {
		                    rx = ry = Math.max(Math.abs(x), Math.abs(x - width), Math.abs(y), Math.abs(y - height));
		                }
		                else if (gradient.shape === 1 /* ELLIPSE */) {
		                    rx = Math.max(Math.abs(x), Math.abs(x - width));
		                    ry = Math.max(Math.abs(y), Math.abs(y - height));
		                }
		                break;
		            case 3 /* FARTHEST_CORNER */:
		                // Same as closest-corner, except the ending shape is sized based on the farthest corner.
		                // If the shape is an ellipse, the ending shape is given the same aspect ratio it would have if farthest-side were specified.
		                if (gradient.shape === 0 /* CIRCLE */) {
		                    rx = ry = Math.max(distance(x, y), distance(x, y - height), distance(x - width, y), distance(x - width, y - height));
		                }
		                else if (gradient.shape === 1 /* ELLIPSE */) {
		                    // Compute the ratio ry/rx (which is to be the same as for "farthest-side")
		                    var c = Math.max(Math.abs(y), Math.abs(y - height)) / Math.max(Math.abs(x), Math.abs(x - width));
		                    var _b = findCorner(width, height, x, y, false), cx = _b[0], cy = _b[1];
		                    rx = distance(cx - x, (cy - y) / c);
		                    ry = c * rx;
		                }
		                break;
		        }
		        if (Array.isArray(gradient.size)) {
		            rx = getAbsoluteValue(gradient.size[0], width);
		            ry = gradient.size.length === 2 ? getAbsoluteValue(gradient.size[1], height) : rx;
		        }
		        return [rx, ry];
		    };

		    var linearGradient = function (context, tokens) {
		        var angle$1 = deg(180);
		        var stops = [];
		        parseFunctionArgs(tokens).forEach(function (arg, i) {
		            if (i === 0) {
		                var firstToken = arg[0];
		                if (firstToken.type === 20 /* IDENT_TOKEN */ && firstToken.value === 'to') {
		                    angle$1 = parseNamedSide(arg);
		                    return;
		                }
		                else if (isAngle(firstToken)) {
		                    angle$1 = angle.parse(context, firstToken);
		                    return;
		                }
		            }
		            var colorStop = parseColorStop(context, arg);
		            stops.push(colorStop);
		        });
		        return { angle: angle$1, stops: stops, type: 1 /* LINEAR_GRADIENT */ };
		    };

		    var prefixLinearGradient = function (context, tokens) {
		        var angle$1 = deg(180);
		        var stops = [];
		        parseFunctionArgs(tokens).forEach(function (arg, i) {
		            if (i === 0) {
		                var firstToken = arg[0];
		                if (firstToken.type === 20 /* IDENT_TOKEN */ &&
		                    ['top', 'left', 'right', 'bottom'].indexOf(firstToken.value) !== -1) {
		                    angle$1 = parseNamedSide(arg);
		                    return;
		                }
		                else if (isAngle(firstToken)) {
		                    angle$1 = (angle.parse(context, firstToken) + deg(270)) % deg(360);
		                    return;
		                }
		            }
		            var colorStop = parseColorStop(context, arg);
		            stops.push(colorStop);
		        });
		        return {
		            angle: angle$1,
		            stops: stops,
		            type: 1 /* LINEAR_GRADIENT */
		        };
		    };

		    var webkitGradient = function (context, tokens) {
		        var angle = deg(180);
		        var stops = [];
		        var type = 1 /* LINEAR_GRADIENT */;
		        var shape = 0 /* CIRCLE */;
		        var size = 3 /* FARTHEST_CORNER */;
		        var position = [];
		        parseFunctionArgs(tokens).forEach(function (arg, i) {
		            var firstToken = arg[0];
		            if (i === 0) {
		                if (isIdentToken(firstToken) && firstToken.value === 'linear') {
		                    type = 1 /* LINEAR_GRADIENT */;
		                    return;
		                }
		                else if (isIdentToken(firstToken) && firstToken.value === 'radial') {
		                    type = 2 /* RADIAL_GRADIENT */;
		                    return;
		                }
		            }
		            if (firstToken.type === 18 /* FUNCTION */) {
		                if (firstToken.name === 'from') {
		                    var color = color$1.parse(context, firstToken.values[0]);
		                    stops.push({ stop: ZERO_LENGTH, color: color });
		                }
		                else if (firstToken.name === 'to') {
		                    var color = color$1.parse(context, firstToken.values[0]);
		                    stops.push({ stop: HUNDRED_PERCENT, color: color });
		                }
		                else if (firstToken.name === 'color-stop') {
		                    var values = firstToken.values.filter(nonFunctionArgSeparator);
		                    if (values.length === 2) {
		                        var color = color$1.parse(context, values[1]);
		                        var stop_1 = values[0];
		                        if (isNumberToken(stop_1)) {
		                            stops.push({
		                                stop: { type: 16 /* PERCENTAGE_TOKEN */, number: stop_1.number * 100, flags: stop_1.flags },
		                                color: color
		                            });
		                        }
		                    }
		                }
		            }
		        });
		        return type === 1 /* LINEAR_GRADIENT */
		            ? {
		                angle: (angle + deg(180)) % deg(360),
		                stops: stops,
		                type: type
		            }
		            : { size: size, shape: shape, stops: stops, position: position, type: type };
		    };

		    var CLOSEST_SIDE = 'closest-side';
		    var FARTHEST_SIDE = 'farthest-side';
		    var CLOSEST_CORNER = 'closest-corner';
		    var FARTHEST_CORNER = 'farthest-corner';
		    var CIRCLE = 'circle';
		    var ELLIPSE = 'ellipse';
		    var COVER = 'cover';
		    var CONTAIN = 'contain';
		    var radialGradient = function (context, tokens) {
		        var shape = 0 /* CIRCLE */;
		        var size = 3 /* FARTHEST_CORNER */;
		        var stops = [];
		        var position = [];
		        parseFunctionArgs(tokens).forEach(function (arg, i) {
		            var isColorStop = true;
		            if (i === 0) {
		                var isAtPosition_1 = false;
		                isColorStop = arg.reduce(function (acc, token) {
		                    if (isAtPosition_1) {
		                        if (isIdentToken(token)) {
		                            switch (token.value) {
		                                case 'center':
		                                    position.push(FIFTY_PERCENT);
		                                    return acc;
		                                case 'top':
		                                case 'left':
		                                    position.push(ZERO_LENGTH);
		                                    return acc;
		                                case 'right':
		                                case 'bottom':
		                                    position.push(HUNDRED_PERCENT);
		                                    return acc;
		                            }
		                        }
		                        else if (isLengthPercentage(token) || isLength(token)) {
		                            position.push(token);
		                        }
		                    }
		                    else if (isIdentToken(token)) {
		                        switch (token.value) {
		                            case CIRCLE:
		                                shape = 0 /* CIRCLE */;
		                                return false;
		                            case ELLIPSE:
		                                shape = 1 /* ELLIPSE */;
		                                return false;
		                            case 'at':
		                                isAtPosition_1 = true;
		                                return false;
		                            case CLOSEST_SIDE:
		                                size = 0 /* CLOSEST_SIDE */;
		                                return false;
		                            case COVER:
		                            case FARTHEST_SIDE:
		                                size = 1 /* FARTHEST_SIDE */;
		                                return false;
		                            case CONTAIN:
		                            case CLOSEST_CORNER:
		                                size = 2 /* CLOSEST_CORNER */;
		                                return false;
		                            case FARTHEST_CORNER:
		                                size = 3 /* FARTHEST_CORNER */;
		                                return false;
		                        }
		                    }
		                    else if (isLength(token) || isLengthPercentage(token)) {
		                        if (!Array.isArray(size)) {
		                            size = [];
		                        }
		                        size.push(token);
		                        return false;
		                    }
		                    return acc;
		                }, isColorStop);
		            }
		            if (isColorStop) {
		                var colorStop = parseColorStop(context, arg);
		                stops.push(colorStop);
		            }
		        });
		        return { size: size, shape: shape, stops: stops, position: position, type: 2 /* RADIAL_GRADIENT */ };
		    };

		    var prefixRadialGradient = function (context, tokens) {
		        var shape = 0 /* CIRCLE */;
		        var size = 3 /* FARTHEST_CORNER */;
		        var stops = [];
		        var position = [];
		        parseFunctionArgs(tokens).forEach(function (arg, i) {
		            var isColorStop = true;
		            if (i === 0) {
		                isColorStop = arg.reduce(function (acc, token) {
		                    if (isIdentToken(token)) {
		                        switch (token.value) {
		                            case 'center':
		                                position.push(FIFTY_PERCENT);
		                                return false;
		                            case 'top':
		                            case 'left':
		                                position.push(ZERO_LENGTH);
		                                return false;
		                            case 'right':
		                            case 'bottom':
		                                position.push(HUNDRED_PERCENT);
		                                return false;
		                        }
		                    }
		                    else if (isLengthPercentage(token) || isLength(token)) {
		                        position.push(token);
		                        return false;
		                    }
		                    return acc;
		                }, isColorStop);
		            }
		            else if (i === 1) {
		                isColorStop = arg.reduce(function (acc, token) {
		                    if (isIdentToken(token)) {
		                        switch (token.value) {
		                            case CIRCLE:
		                                shape = 0 /* CIRCLE */;
		                                return false;
		                            case ELLIPSE:
		                                shape = 1 /* ELLIPSE */;
		                                return false;
		                            case CONTAIN:
		                            case CLOSEST_SIDE:
		                                size = 0 /* CLOSEST_SIDE */;
		                                return false;
		                            case FARTHEST_SIDE:
		                                size = 1 /* FARTHEST_SIDE */;
		                                return false;
		                            case CLOSEST_CORNER:
		                                size = 2 /* CLOSEST_CORNER */;
		                                return false;
		                            case COVER:
		                            case FARTHEST_CORNER:
		                                size = 3 /* FARTHEST_CORNER */;
		                                return false;
		                        }
		                    }
		                    else if (isLength(token) || isLengthPercentage(token)) {
		                        if (!Array.isArray(size)) {
		                            size = [];
		                        }
		                        size.push(token);
		                        return false;
		                    }
		                    return acc;
		                }, isColorStop);
		            }
		            if (isColorStop) {
		                var colorStop = parseColorStop(context, arg);
		                stops.push(colorStop);
		            }
		        });
		        return { size: size, shape: shape, stops: stops, position: position, type: 2 /* RADIAL_GRADIENT */ };
		    };

		    var isLinearGradient = function (background) {
		        return background.type === 1 /* LINEAR_GRADIENT */;
		    };
		    var isRadialGradient = function (background) {
		        return background.type === 2 /* RADIAL_GRADIENT */;
		    };
		    var image = {
		        name: 'image',
		        parse: function (context, value) {
		            if (value.type === 22 /* URL_TOKEN */) {
		                var image_1 = { url: value.value, type: 0 /* URL */ };
		                context.cache.addImage(value.value);
		                return image_1;
		            }
		            if (value.type === 18 /* FUNCTION */) {
		                var imageFunction = SUPPORTED_IMAGE_FUNCTIONS[value.name];
		                if (typeof imageFunction === 'undefined') {
		                    throw new Error("Attempting to parse an unsupported image function \"" + value.name + "\"");
		                }
		                return imageFunction(context, value.values);
		            }
		            throw new Error("Unsupported image type " + value.type);
		        }
		    };
		    function isSupportedImage(value) {
		        return (!(value.type === 20 /* IDENT_TOKEN */ && value.value === 'none') &&
		            (value.type !== 18 /* FUNCTION */ || !!SUPPORTED_IMAGE_FUNCTIONS[value.name]));
		    }
		    var SUPPORTED_IMAGE_FUNCTIONS = {
		        'linear-gradient': linearGradient,
		        '-moz-linear-gradient': prefixLinearGradient,
		        '-ms-linear-gradient': prefixLinearGradient,
		        '-o-linear-gradient': prefixLinearGradient,
		        '-webkit-linear-gradient': prefixLinearGradient,
		        'radial-gradient': radialGradient,
		        '-moz-radial-gradient': prefixRadialGradient,
		        '-ms-radial-gradient': prefixRadialGradient,
		        '-o-radial-gradient': prefixRadialGradient,
		        '-webkit-radial-gradient': prefixRadialGradient,
		        '-webkit-gradient': webkitGradient
		    };

		    var backgroundImage = {
		        name: 'background-image',
		        initialValue: 'none',
		        type: 1 /* LIST */,
		        prefix: false,
		        parse: function (context, tokens) {
		            if (tokens.length === 0) {
		                return [];
		            }
		            var first = tokens[0];
		            if (first.type === 20 /* IDENT_TOKEN */ && first.value === 'none') {
		                return [];
		            }
		            return tokens
		                .filter(function (value) { return nonFunctionArgSeparator(value) && isSupportedImage(value); })
		                .map(function (value) { return image.parse(context, value); });
		        }
		    };

		    var backgroundOrigin = {
		        name: 'background-origin',
		        initialValue: 'border-box',
		        prefix: false,
		        type: 1 /* LIST */,
		        parse: function (_context, tokens) {
		            return tokens.map(function (token) {
		                if (isIdentToken(token)) {
		                    switch (token.value) {
		                        case 'padding-box':
		                            return 1 /* PADDING_BOX */;
		                        case 'content-box':
		                            return 2 /* CONTENT_BOX */;
		                    }
		                }
		                return 0 /* BORDER_BOX */;
		            });
		        }
		    };

		    var backgroundPosition = {
		        name: 'background-position',
		        initialValue: '0% 0%',
		        type: 1 /* LIST */,
		        prefix: false,
		        parse: function (_context, tokens) {
		            return parseFunctionArgs(tokens)
		                .map(function (values) { return values.filter(isLengthPercentage); })
		                .map(parseLengthPercentageTuple);
		        }
		    };

		    var backgroundRepeat = {
		        name: 'background-repeat',
		        initialValue: 'repeat',
		        prefix: false,
		        type: 1 /* LIST */,
		        parse: function (_context, tokens) {
		            return parseFunctionArgs(tokens)
		                .map(function (values) {
		                return values
		                    .filter(isIdentToken)
		                    .map(function (token) { return token.value; })
		                    .join(' ');
		            })
		                .map(parseBackgroundRepeat);
		        }
		    };
		    var parseBackgroundRepeat = function (value) {
		        switch (value) {
		            case 'no-repeat':
		                return 1 /* NO_REPEAT */;
		            case 'repeat-x':
		            case 'repeat no-repeat':
		                return 2 /* REPEAT_X */;
		            case 'repeat-y':
		            case 'no-repeat repeat':
		                return 3 /* REPEAT_Y */;
		            case 'repeat':
		            default:
		                return 0 /* REPEAT */;
		        }
		    };

		    var BACKGROUND_SIZE;
		    (function (BACKGROUND_SIZE) {
		        BACKGROUND_SIZE["AUTO"] = "auto";
		        BACKGROUND_SIZE["CONTAIN"] = "contain";
		        BACKGROUND_SIZE["COVER"] = "cover";
		    })(BACKGROUND_SIZE || (BACKGROUND_SIZE = {}));
		    var backgroundSize = {
		        name: 'background-size',
		        initialValue: '0',
		        prefix: false,
		        type: 1 /* LIST */,
		        parse: function (_context, tokens) {
		            return parseFunctionArgs(tokens).map(function (values) { return values.filter(isBackgroundSizeInfoToken); });
		        }
		    };
		    var isBackgroundSizeInfoToken = function (value) {
		        return isIdentToken(value) || isLengthPercentage(value);
		    };

		    var borderColorForSide = function (side) { return ({
		        name: "border-" + side + "-color",
		        initialValue: 'transparent',
		        prefix: false,
		        type: 3 /* TYPE_VALUE */,
		        format: 'color'
		    }); };
		    var borderTopColor = borderColorForSide('top');
		    var borderRightColor = borderColorForSide('right');
		    var borderBottomColor = borderColorForSide('bottom');
		    var borderLeftColor = borderColorForSide('left');

		    var borderRadiusForSide = function (side) { return ({
		        name: "border-radius-" + side,
		        initialValue: '0 0',
		        prefix: false,
		        type: 1 /* LIST */,
		        parse: function (_context, tokens) {
		            return parseLengthPercentageTuple(tokens.filter(isLengthPercentage));
		        }
		    }); };
		    var borderTopLeftRadius = borderRadiusForSide('top-left');
		    var borderTopRightRadius = borderRadiusForSide('top-right');
		    var borderBottomRightRadius = borderRadiusForSide('bottom-right');
		    var borderBottomLeftRadius = borderRadiusForSide('bottom-left');

		    var borderStyleForSide = function (side) { return ({
		        name: "border-" + side + "-style",
		        initialValue: 'solid',
		        prefix: false,
		        type: 2 /* IDENT_VALUE */,
		        parse: function (_context, style) {
		            switch (style) {
		                case 'none':
		                    return 0 /* NONE */;
		                case 'dashed':
		                    return 2 /* DASHED */;
		                case 'dotted':
		                    return 3 /* DOTTED */;
		                case 'double':
		                    return 4 /* DOUBLE */;
		            }
		            return 1 /* SOLID */;
		        }
		    }); };
		    var borderTopStyle = borderStyleForSide('top');
		    var borderRightStyle = borderStyleForSide('right');
		    var borderBottomStyle = borderStyleForSide('bottom');
		    var borderLeftStyle = borderStyleForSide('left');

		    var borderWidthForSide = function (side) { return ({
		        name: "border-" + side + "-width",
		        initialValue: '0',
		        type: 0 /* VALUE */,
		        prefix: false,
		        parse: function (_context, token) {
		            if (isDimensionToken(token)) {
		                return token.number;
		            }
		            return 0;
		        }
		    }); };
		    var borderTopWidth = borderWidthForSide('top');
		    var borderRightWidth = borderWidthForSide('right');
		    var borderBottomWidth = borderWidthForSide('bottom');
		    var borderLeftWidth = borderWidthForSide('left');

		    var color = {
		        name: "color",
		        initialValue: 'transparent',
		        prefix: false,
		        type: 3 /* TYPE_VALUE */,
		        format: 'color'
		    };

		    var direction = {
		        name: 'direction',
		        initialValue: 'ltr',
		        prefix: false,
		        type: 2 /* IDENT_VALUE */,
		        parse: function (_context, direction) {
		            switch (direction) {
		                case 'rtl':
		                    return 1 /* RTL */;
		                case 'ltr':
		                default:
		                    return 0 /* LTR */;
		            }
		        }
		    };

		    var display = {
		        name: 'display',
		        initialValue: 'inline-block',
		        prefix: false,
		        type: 1 /* LIST */,
		        parse: function (_context, tokens) {
		            return tokens.filter(isIdentToken).reduce(function (bit, token) {
		                return bit | parseDisplayValue(token.value);
		            }, 0 /* NONE */);
		        }
		    };
		    var parseDisplayValue = function (display) {
		        switch (display) {
		            case 'block':
		            case '-webkit-box':
		                return 2 /* BLOCK */;
		            case 'inline':
		                return 4 /* INLINE */;
		            case 'run-in':
		                return 8 /* RUN_IN */;
		            case 'flow':
		                return 16 /* FLOW */;
		            case 'flow-root':
		                return 32 /* FLOW_ROOT */;
		            case 'table':
		                return 64 /* TABLE */;
		            case 'flex':
		            case '-webkit-flex':
		                return 128 /* FLEX */;
		            case 'grid':
		            case '-ms-grid':
		                return 256 /* GRID */;
		            case 'ruby':
		                return 512 /* RUBY */;
		            case 'subgrid':
		                return 1024 /* SUBGRID */;
		            case 'list-item':
		                return 2048 /* LIST_ITEM */;
		            case 'table-row-group':
		                return 4096 /* TABLE_ROW_GROUP */;
		            case 'table-header-group':
		                return 8192 /* TABLE_HEADER_GROUP */;
		            case 'table-footer-group':
		                return 16384 /* TABLE_FOOTER_GROUP */;
		            case 'table-row':
		                return 32768 /* TABLE_ROW */;
		            case 'table-cell':
		                return 65536 /* TABLE_CELL */;
		            case 'table-column-group':
		                return 131072 /* TABLE_COLUMN_GROUP */;
		            case 'table-column':
		                return 262144 /* TABLE_COLUMN */;
		            case 'table-caption':
		                return 524288 /* TABLE_CAPTION */;
		            case 'ruby-base':
		                return 1048576 /* RUBY_BASE */;
		            case 'ruby-text':
		                return 2097152 /* RUBY_TEXT */;
		            case 'ruby-base-container':
		                return 4194304 /* RUBY_BASE_CONTAINER */;
		            case 'ruby-text-container':
		                return 8388608 /* RUBY_TEXT_CONTAINER */;
		            case 'contents':
		                return 16777216 /* CONTENTS */;
		            case 'inline-block':
		                return 33554432 /* INLINE_BLOCK */;
		            case 'inline-list-item':
		                return 67108864 /* INLINE_LIST_ITEM */;
		            case 'inline-table':
		                return 134217728 /* INLINE_TABLE */;
		            case 'inline-flex':
		                return 268435456 /* INLINE_FLEX */;
		            case 'inline-grid':
		                return 536870912 /* INLINE_GRID */;
		        }
		        return 0 /* NONE */;
		    };

		    var float = {
		        name: 'float',
		        initialValue: 'none',
		        prefix: false,
		        type: 2 /* IDENT_VALUE */,
		        parse: function (_context, float) {
		            switch (float) {
		                case 'left':
		                    return 1 /* LEFT */;
		                case 'right':
		                    return 2 /* RIGHT */;
		                case 'inline-start':
		                    return 3 /* INLINE_START */;
		                case 'inline-end':
		                    return 4 /* INLINE_END */;
		            }
		            return 0 /* NONE */;
		        }
		    };

		    var letterSpacing = {
		        name: 'letter-spacing',
		        initialValue: '0',
		        prefix: false,
		        type: 0 /* VALUE */,
		        parse: function (_context, token) {
		            if (token.type === 20 /* IDENT_TOKEN */ && token.value === 'normal') {
		                return 0;
		            }
		            if (token.type === 17 /* NUMBER_TOKEN */) {
		                return token.number;
		            }
		            if (token.type === 15 /* DIMENSION_TOKEN */) {
		                return token.number;
		            }
		            return 0;
		        }
		    };

		    var LINE_BREAK;
		    (function (LINE_BREAK) {
		        LINE_BREAK["NORMAL"] = "normal";
		        LINE_BREAK["STRICT"] = "strict";
		    })(LINE_BREAK || (LINE_BREAK = {}));
		    var lineBreak = {
		        name: 'line-break',
		        initialValue: 'normal',
		        prefix: false,
		        type: 2 /* IDENT_VALUE */,
		        parse: function (_context, lineBreak) {
		            switch (lineBreak) {
		                case 'strict':
		                    return LINE_BREAK.STRICT;
		                case 'normal':
		                default:
		                    return LINE_BREAK.NORMAL;
		            }
		        }
		    };

		    var lineHeight = {
		        name: 'line-height',
		        initialValue: 'normal',
		        prefix: false,
		        type: 4 /* TOKEN_VALUE */
		    };
		    var computeLineHeight = function (token, fontSize) {
		        if (isIdentToken(token) && token.value === 'normal') {
		            return 1.2 * fontSize;
		        }
		        else if (token.type === 17 /* NUMBER_TOKEN */) {
		            return fontSize * token.number;
		        }
		        else if (isLengthPercentage(token)) {
		            return getAbsoluteValue(token, fontSize);
		        }
		        return fontSize;
		    };

		    var listStyleImage = {
		        name: 'list-style-image',
		        initialValue: 'none',
		        type: 0 /* VALUE */,
		        prefix: false,
		        parse: function (context, token) {
		            if (token.type === 20 /* IDENT_TOKEN */ && token.value === 'none') {
		                return null;
		            }
		            return image.parse(context, token);
		        }
		    };

		    var listStylePosition = {
		        name: 'list-style-position',
		        initialValue: 'outside',
		        prefix: false,
		        type: 2 /* IDENT_VALUE */,
		        parse: function (_context, position) {
		            switch (position) {
		                case 'inside':
		                    return 0 /* INSIDE */;
		                case 'outside':
		                default:
		                    return 1 /* OUTSIDE */;
		            }
		        }
		    };

		    var listStyleType = {
		        name: 'list-style-type',
		        initialValue: 'none',
		        prefix: false,
		        type: 2 /* IDENT_VALUE */,
		        parse: function (_context, type) {
		            switch (type) {
		                case 'disc':
		                    return 0 /* DISC */;
		                case 'circle':
		                    return 1 /* CIRCLE */;
		                case 'square':
		                    return 2 /* SQUARE */;
		                case 'decimal':
		                    return 3 /* DECIMAL */;
		                case 'cjk-decimal':
		                    return 4 /* CJK_DECIMAL */;
		                case 'decimal-leading-zero':
		                    return 5 /* DECIMAL_LEADING_ZERO */;
		                case 'lower-roman':
		                    return 6 /* LOWER_ROMAN */;
		                case 'upper-roman':
		                    return 7 /* UPPER_ROMAN */;
		                case 'lower-greek':
		                    return 8 /* LOWER_GREEK */;
		                case 'lower-alpha':
		                    return 9 /* LOWER_ALPHA */;
		                case 'upper-alpha':
		                    return 10 /* UPPER_ALPHA */;
		                case 'arabic-indic':
		                    return 11 /* ARABIC_INDIC */;
		                case 'armenian':
		                    return 12 /* ARMENIAN */;
		                case 'bengali':
		                    return 13 /* BENGALI */;
		                case 'cambodian':
		                    return 14 /* CAMBODIAN */;
		                case 'cjk-earthly-branch':
		                    return 15 /* CJK_EARTHLY_BRANCH */;
		                case 'cjk-heavenly-stem':
		                    return 16 /* CJK_HEAVENLY_STEM */;
		                case 'cjk-ideographic':
		                    return 17 /* CJK_IDEOGRAPHIC */;
		                case 'devanagari':
		                    return 18 /* DEVANAGARI */;
		                case 'ethiopic-numeric':
		                    return 19 /* ETHIOPIC_NUMERIC */;
		                case 'georgian':
		                    return 20 /* GEORGIAN */;
		                case 'gujarati':
		                    return 21 /* GUJARATI */;
		                case 'gurmukhi':
		                    return 22 /* GURMUKHI */;
		                case 'hebrew':
		                    return 22 /* HEBREW */;
		                case 'hiragana':
		                    return 23 /* HIRAGANA */;
		                case 'hiragana-iroha':
		                    return 24 /* HIRAGANA_IROHA */;
		                case 'japanese-formal':
		                    return 25 /* JAPANESE_FORMAL */;
		                case 'japanese-informal':
		                    return 26 /* JAPANESE_INFORMAL */;
		                case 'kannada':
		                    return 27 /* KANNADA */;
		                case 'katakana':
		                    return 28 /* KATAKANA */;
		                case 'katakana-iroha':
		                    return 29 /* KATAKANA_IROHA */;
		                case 'khmer':
		                    return 30 /* KHMER */;
		                case 'korean-hangul-formal':
		                    return 31 /* KOREAN_HANGUL_FORMAL */;
		                case 'korean-hanja-formal':
		                    return 32 /* KOREAN_HANJA_FORMAL */;
		                case 'korean-hanja-informal':
		                    return 33 /* KOREAN_HANJA_INFORMAL */;
		                case 'lao':
		                    return 34 /* LAO */;
		                case 'lower-armenian':
		                    return 35 /* LOWER_ARMENIAN */;
		                case 'malayalam':
		                    return 36 /* MALAYALAM */;
		                case 'mongolian':
		                    return 37 /* MONGOLIAN */;
		                case 'myanmar':
		                    return 38 /* MYANMAR */;
		                case 'oriya':
		                    return 39 /* ORIYA */;
		                case 'persian':
		                    return 40 /* PERSIAN */;
		                case 'simp-chinese-formal':
		                    return 41 /* SIMP_CHINESE_FORMAL */;
		                case 'simp-chinese-informal':
		                    return 42 /* SIMP_CHINESE_INFORMAL */;
		                case 'tamil':
		                    return 43 /* TAMIL */;
		                case 'telugu':
		                    return 44 /* TELUGU */;
		                case 'thai':
		                    return 45 /* THAI */;
		                case 'tibetan':
		                    return 46 /* TIBETAN */;
		                case 'trad-chinese-formal':
		                    return 47 /* TRAD_CHINESE_FORMAL */;
		                case 'trad-chinese-informal':
		                    return 48 /* TRAD_CHINESE_INFORMAL */;
		                case 'upper-armenian':
		                    return 49 /* UPPER_ARMENIAN */;
		                case 'disclosure-open':
		                    return 50 /* DISCLOSURE_OPEN */;
		                case 'disclosure-closed':
		                    return 51 /* DISCLOSURE_CLOSED */;
		                case 'none':
		                default:
		                    return -1 /* NONE */;
		            }
		        }
		    };

		    var marginForSide = function (side) { return ({
		        name: "margin-" + side,
		        initialValue: '0',
		        prefix: false,
		        type: 4 /* TOKEN_VALUE */
		    }); };
		    var marginTop = marginForSide('top');
		    var marginRight = marginForSide('right');
		    var marginBottom = marginForSide('bottom');
		    var marginLeft = marginForSide('left');

		    var overflow = {
		        name: 'overflow',
		        initialValue: 'visible',
		        prefix: false,
		        type: 1 /* LIST */,
		        parse: function (_context, tokens) {
		            return tokens.filter(isIdentToken).map(function (overflow) {
		                switch (overflow.value) {
		                    case 'hidden':
		                        return 1 /* HIDDEN */;
		                    case 'scroll':
		                        return 2 /* SCROLL */;
		                    case 'clip':
		                        return 3 /* CLIP */;
		                    case 'auto':
		                        return 4 /* AUTO */;
		                    case 'visible':
		                    default:
		                        return 0 /* VISIBLE */;
		                }
		            });
		        }
		    };

		    var overflowWrap = {
		        name: 'overflow-wrap',
		        initialValue: 'normal',
		        prefix: false,
		        type: 2 /* IDENT_VALUE */,
		        parse: function (_context, overflow) {
		            switch (overflow) {
		                case 'break-word':
		                    return "break-word" /* BREAK_WORD */;
		                case 'normal':
		                default:
		                    return "normal" /* NORMAL */;
		            }
		        }
		    };

		    var paddingForSide = function (side) { return ({
		        name: "padding-" + side,
		        initialValue: '0',
		        prefix: false,
		        type: 3 /* TYPE_VALUE */,
		        format: 'length-percentage'
		    }); };
		    var paddingTop = paddingForSide('top');
		    var paddingRight = paddingForSide('right');
		    var paddingBottom = paddingForSide('bottom');
		    var paddingLeft = paddingForSide('left');

		    var textAlign = {
		        name: 'text-align',
		        initialValue: 'left',
		        prefix: false,
		        type: 2 /* IDENT_VALUE */,
		        parse: function (_context, textAlign) {
		            switch (textAlign) {
		                case 'right':
		                    return 2 /* RIGHT */;
		                case 'center':
		                case 'justify':
		                    return 1 /* CENTER */;
		                case 'left':
		                default:
		                    return 0 /* LEFT */;
		            }
		        }
		    };

		    var position = {
		        name: 'position',
		        initialValue: 'static',
		        prefix: false,
		        type: 2 /* IDENT_VALUE */,
		        parse: function (_context, position) {
		            switch (position) {
		                case 'relative':
		                    return 1 /* RELATIVE */;
		                case 'absolute':
		                    return 2 /* ABSOLUTE */;
		                case 'fixed':
		                    return 3 /* FIXED */;
		                case 'sticky':
		                    return 4 /* STICKY */;
		            }
		            return 0 /* STATIC */;
		        }
		    };

		    var textShadow = {
		        name: 'text-shadow',
		        initialValue: 'none',
		        type: 1 /* LIST */,
		        prefix: false,
		        parse: function (context, tokens) {
		            if (tokens.length === 1 && isIdentWithValue(tokens[0], 'none')) {
		                return [];
		            }
		            return parseFunctionArgs(tokens).map(function (values) {
		                var shadow = {
		                    color: COLORS.TRANSPARENT,
		                    offsetX: ZERO_LENGTH,
		                    offsetY: ZERO_LENGTH,
		                    blur: ZERO_LENGTH
		                };
		                var c = 0;
		                for (var i = 0; i < values.length; i++) {
		                    var token = values[i];
		                    if (isLength(token)) {
		                        if (c === 0) {
		                            shadow.offsetX = token;
		                        }
		                        else if (c === 1) {
		                            shadow.offsetY = token;
		                        }
		                        else {
		                            shadow.blur = token;
		                        }
		                        c++;
		                    }
		                    else {
		                        shadow.color = color$1.parse(context, token);
		                    }
		                }
		                return shadow;
		            });
		        }
		    };

		    var textTransform = {
		        name: 'text-transform',
		        initialValue: 'none',
		        prefix: false,
		        type: 2 /* IDENT_VALUE */,
		        parse: function (_context, textTransform) {
		            switch (textTransform) {
		                case 'uppercase':
		                    return 2 /* UPPERCASE */;
		                case 'lowercase':
		                    return 1 /* LOWERCASE */;
		                case 'capitalize':
		                    return 3 /* CAPITALIZE */;
		            }
		            return 0 /* NONE */;
		        }
		    };

		    var transform$1 = {
		        name: 'transform',
		        initialValue: 'none',
		        prefix: true,
		        type: 0 /* VALUE */,
		        parse: function (_context, token) {
		            if (token.type === 20 /* IDENT_TOKEN */ && token.value === 'none') {
		                return null;
		            }
		            if (token.type === 18 /* FUNCTION */) {
		                var transformFunction = SUPPORTED_TRANSFORM_FUNCTIONS[token.name];
		                if (typeof transformFunction === 'undefined') {
		                    throw new Error("Attempting to parse an unsupported transform function \"" + token.name + "\"");
		                }
		                return transformFunction(token.values);
		            }
		            return null;
		        }
		    };
		    var matrix = function (args) {
		        var values = args.filter(function (arg) { return arg.type === 17 /* NUMBER_TOKEN */; }).map(function (arg) { return arg.number; });
		        return values.length === 6 ? values : null;
		    };
		    // doesn't support 3D transforms at the moment
		    var matrix3d = function (args) {
		        var values = args.filter(function (arg) { return arg.type === 17 /* NUMBER_TOKEN */; }).map(function (arg) { return arg.number; });
		        var a1 = values[0], b1 = values[1]; values[2]; values[3]; var a2 = values[4], b2 = values[5]; values[6]; values[7]; values[8]; values[9]; values[10]; values[11]; var a4 = values[12], b4 = values[13]; values[14]; values[15];
		        return values.length === 16 ? [a1, b1, a2, b2, a4, b4] : null;
		    };
		    var SUPPORTED_TRANSFORM_FUNCTIONS = {
		        matrix: matrix,
		        matrix3d: matrix3d
		    };

		    var DEFAULT_VALUE = {
		        type: 16 /* PERCENTAGE_TOKEN */,
		        number: 50,
		        flags: FLAG_INTEGER
		    };
		    var DEFAULT = [DEFAULT_VALUE, DEFAULT_VALUE];
		    var transformOrigin = {
		        name: 'transform-origin',
		        initialValue: '50% 50%',
		        prefix: true,
		        type: 1 /* LIST */,
		        parse: function (_context, tokens) {
		            var origins = tokens.filter(isLengthPercentage);
		            if (origins.length !== 2) {
		                return DEFAULT;
		            }
		            return [origins[0], origins[1]];
		        }
		    };

		    var visibility = {
		        name: 'visible',
		        initialValue: 'none',
		        prefix: false,
		        type: 2 /* IDENT_VALUE */,
		        parse: function (_context, visibility) {
		            switch (visibility) {
		                case 'hidden':
		                    return 1 /* HIDDEN */;
		                case 'collapse':
		                    return 2 /* COLLAPSE */;
		                case 'visible':
		                default:
		                    return 0 /* VISIBLE */;
		            }
		        }
		    };

		    var WORD_BREAK;
		    (function (WORD_BREAK) {
		        WORD_BREAK["NORMAL"] = "normal";
		        WORD_BREAK["BREAK_ALL"] = "break-all";
		        WORD_BREAK["KEEP_ALL"] = "keep-all";
		    })(WORD_BREAK || (WORD_BREAK = {}));
		    var wordBreak = {
		        name: 'word-break',
		        initialValue: 'normal',
		        prefix: false,
		        type: 2 /* IDENT_VALUE */,
		        parse: function (_context, wordBreak) {
		            switch (wordBreak) {
		                case 'break-all':
		                    return WORD_BREAK.BREAK_ALL;
		                case 'keep-all':
		                    return WORD_BREAK.KEEP_ALL;
		                case 'normal':
		                default:
		                    return WORD_BREAK.NORMAL;
		            }
		        }
		    };

		    var zIndex = {
		        name: 'z-index',
		        initialValue: 'auto',
		        prefix: false,
		        type: 0 /* VALUE */,
		        parse: function (_context, token) {
		            if (token.type === 20 /* IDENT_TOKEN */) {
		                return { auto: true, order: 0 };
		            }
		            if (isNumberToken(token)) {
		                return { auto: false, order: token.number };
		            }
		            throw new Error("Invalid z-index number parsed");
		        }
		    };

		    var time = {
		        name: 'time',
		        parse: function (_context, value) {
		            if (value.type === 15 /* DIMENSION_TOKEN */) {
		                switch (value.unit.toLowerCase()) {
		                    case 's':
		                        return 1000 * value.number;
		                    case 'ms':
		                        return value.number;
		                }
		            }
		            throw new Error("Unsupported time type");
		        }
		    };

		    var opacity = {
		        name: 'opacity',
		        initialValue: '1',
		        type: 0 /* VALUE */,
		        prefix: false,
		        parse: function (_context, token) {
		            if (isNumberToken(token)) {
		                return token.number;
		            }
		            return 1;
		        }
		    };

		    var textDecorationColor = {
		        name: "text-decoration-color",
		        initialValue: 'transparent',
		        prefix: false,
		        type: 3 /* TYPE_VALUE */,
		        format: 'color'
		    };

		    var textDecorationLine = {
		        name: 'text-decoration-line',
		        initialValue: 'none',
		        prefix: false,
		        type: 1 /* LIST */,
		        parse: function (_context, tokens) {
		            return tokens
		                .filter(isIdentToken)
		                .map(function (token) {
		                switch (token.value) {
		                    case 'underline':
		                        return 1 /* UNDERLINE */;
		                    case 'overline':
		                        return 2 /* OVERLINE */;
		                    case 'line-through':
		                        return 3 /* LINE_THROUGH */;
		                    case 'none':
		                        return 4 /* BLINK */;
		                }
		                return 0 /* NONE */;
		            })
		                .filter(function (line) { return line !== 0 /* NONE */; });
		        }
		    };

		    var fontFamily = {
		        name: "font-family",
		        initialValue: '',
		        prefix: false,
		        type: 1 /* LIST */,
		        parse: function (_context, tokens) {
		            var accumulator = [];
		            var results = [];
		            tokens.forEach(function (token) {
		                switch (token.type) {
		                    case 20 /* IDENT_TOKEN */:
		                    case 0 /* STRING_TOKEN */:
		                        accumulator.push(token.value);
		                        break;
		                    case 17 /* NUMBER_TOKEN */:
		                        accumulator.push(token.number.toString());
		                        break;
		                    case 4 /* COMMA_TOKEN */:
		                        results.push(accumulator.join(' '));
		                        accumulator.length = 0;
		                        break;
		                }
		            });
		            if (accumulator.length) {
		                results.push(accumulator.join(' '));
		            }
		            return results.map(function (result) { return (result.indexOf(' ') === -1 ? result : "'" + result + "'"); });
		        }
		    };

		    var fontSize = {
		        name: "font-size",
		        initialValue: '0',
		        prefix: false,
		        type: 3 /* TYPE_VALUE */,
		        format: 'length'
		    };

		    var fontWeight = {
		        name: 'font-weight',
		        initialValue: 'normal',
		        type: 0 /* VALUE */,
		        prefix: false,
		        parse: function (_context, token) {
		            if (isNumberToken(token)) {
		                return token.number;
		            }
		            if (isIdentToken(token)) {
		                switch (token.value) {
		                    case 'bold':
		                        return 700;
		                    case 'normal':
		                    default:
		                        return 400;
		                }
		            }
		            return 400;
		        }
		    };

		    var fontVariant = {
		        name: 'font-variant',
		        initialValue: 'none',
		        type: 1 /* LIST */,
		        prefix: false,
		        parse: function (_context, tokens) {
		            return tokens.filter(isIdentToken).map(function (token) { return token.value; });
		        }
		    };

		    var fontStyle = {
		        name: 'font-style',
		        initialValue: 'normal',
		        prefix: false,
		        type: 2 /* IDENT_VALUE */,
		        parse: function (_context, overflow) {
		            switch (overflow) {
		                case 'oblique':
		                    return "oblique" /* OBLIQUE */;
		                case 'italic':
		                    return "italic" /* ITALIC */;
		                case 'normal':
		                default:
		                    return "normal" /* NORMAL */;
		            }
		        }
		    };

		    var contains = function (bit, value) { return (bit & value) !== 0; };

		    var content = {
		        name: 'content',
		        initialValue: 'none',
		        type: 1 /* LIST */,
		        prefix: false,
		        parse: function (_context, tokens) {
		            if (tokens.length === 0) {
		                return [];
		            }
		            var first = tokens[0];
		            if (first.type === 20 /* IDENT_TOKEN */ && first.value === 'none') {
		                return [];
		            }
		            return tokens;
		        }
		    };

		    var counterIncrement = {
		        name: 'counter-increment',
		        initialValue: 'none',
		        prefix: true,
		        type: 1 /* LIST */,
		        parse: function (_context, tokens) {
		            if (tokens.length === 0) {
		                return null;
		            }
		            var first = tokens[0];
		            if (first.type === 20 /* IDENT_TOKEN */ && first.value === 'none') {
		                return null;
		            }
		            var increments = [];
		            var filtered = tokens.filter(nonWhiteSpace);
		            for (var i = 0; i < filtered.length; i++) {
		                var counter = filtered[i];
		                var next = filtered[i + 1];
		                if (counter.type === 20 /* IDENT_TOKEN */) {
		                    var increment = next && isNumberToken(next) ? next.number : 1;
		                    increments.push({ counter: counter.value, increment: increment });
		                }
		            }
		            return increments;
		        }
		    };

		    var counterReset = {
		        name: 'counter-reset',
		        initialValue: 'none',
		        prefix: true,
		        type: 1 /* LIST */,
		        parse: function (_context, tokens) {
		            if (tokens.length === 0) {
		                return [];
		            }
		            var resets = [];
		            var filtered = tokens.filter(nonWhiteSpace);
		            for (var i = 0; i < filtered.length; i++) {
		                var counter = filtered[i];
		                var next = filtered[i + 1];
		                if (isIdentToken(counter) && counter.value !== 'none') {
		                    var reset = next && isNumberToken(next) ? next.number : 0;
		                    resets.push({ counter: counter.value, reset: reset });
		                }
		            }
		            return resets;
		        }
		    };

		    var duration = {
		        name: 'duration',
		        initialValue: '0s',
		        prefix: false,
		        type: 1 /* LIST */,
		        parse: function (context, tokens) {
		            return tokens.filter(isDimensionToken).map(function (token) { return time.parse(context, token); });
		        }
		    };

		    var quotes = {
		        name: 'quotes',
		        initialValue: 'none',
		        prefix: true,
		        type: 1 /* LIST */,
		        parse: function (_context, tokens) {
		            if (tokens.length === 0) {
		                return null;
		            }
		            var first = tokens[0];
		            if (first.type === 20 /* IDENT_TOKEN */ && first.value === 'none') {
		                return null;
		            }
		            var quotes = [];
		            var filtered = tokens.filter(isStringToken);
		            if (filtered.length % 2 !== 0) {
		                return null;
		            }
		            for (var i = 0; i < filtered.length; i += 2) {
		                var open_1 = filtered[i].value;
		                var close_1 = filtered[i + 1].value;
		                quotes.push({ open: open_1, close: close_1 });
		            }
		            return quotes;
		        }
		    };
		    var getQuote = function (quotes, depth, open) {
		        if (!quotes) {
		            return '';
		        }
		        var quote = quotes[Math.min(depth, quotes.length - 1)];
		        if (!quote) {
		            return '';
		        }
		        return open ? quote.open : quote.close;
		    };

		    var boxShadow = {
		        name: 'box-shadow',
		        initialValue: 'none',
		        type: 1 /* LIST */,
		        prefix: false,
		        parse: function (context, tokens) {
		            if (tokens.length === 1 && isIdentWithValue(tokens[0], 'none')) {
		                return [];
		            }
		            return parseFunctionArgs(tokens).map(function (values) {
		                var shadow = {
		                    color: 0x000000ff,
		                    offsetX: ZERO_LENGTH,
		                    offsetY: ZERO_LENGTH,
		                    blur: ZERO_LENGTH,
		                    spread: ZERO_LENGTH,
		                    inset: false
		                };
		                var c = 0;
		                for (var i = 0; i < values.length; i++) {
		                    var token = values[i];
		                    if (isIdentWithValue(token, 'inset')) {
		                        shadow.inset = true;
		                    }
		                    else if (isLength(token)) {
		                        if (c === 0) {
		                            shadow.offsetX = token;
		                        }
		                        else if (c === 1) {
		                            shadow.offsetY = token;
		                        }
		                        else if (c === 2) {
		                            shadow.blur = token;
		                        }
		                        else {
		                            shadow.spread = token;
		                        }
		                        c++;
		                    }
		                    else {
		                        shadow.color = color$1.parse(context, token);
		                    }
		                }
		                return shadow;
		            });
		        }
		    };

		    var paintOrder = {
		        name: 'paint-order',
		        initialValue: 'normal',
		        prefix: false,
		        type: 1 /* LIST */,
		        parse: function (_context, tokens) {
		            var DEFAULT_VALUE = [0 /* FILL */, 1 /* STROKE */, 2 /* MARKERS */];
		            var layers = [];
		            tokens.filter(isIdentToken).forEach(function (token) {
		                switch (token.value) {
		                    case 'stroke':
		                        layers.push(1 /* STROKE */);
		                        break;
		                    case 'fill':
		                        layers.push(0 /* FILL */);
		                        break;
		                    case 'markers':
		                        layers.push(2 /* MARKERS */);
		                        break;
		                }
		            });
		            DEFAULT_VALUE.forEach(function (value) {
		                if (layers.indexOf(value) === -1) {
		                    layers.push(value);
		                }
		            });
		            return layers;
		        }
		    };

		    var webkitTextStrokeColor = {
		        name: "-webkit-text-stroke-color",
		        initialValue: 'currentcolor',
		        prefix: false,
		        type: 3 /* TYPE_VALUE */,
		        format: 'color'
		    };

		    var webkitTextStrokeWidth = {
		        name: "-webkit-text-stroke-width",
		        initialValue: '0',
		        type: 0 /* VALUE */,
		        prefix: false,
		        parse: function (_context, token) {
		            if (isDimensionToken(token)) {
		                return token.number;
		            }
		            return 0;
		        }
		    };

		    var CSSParsedDeclaration = /** @class */ (function () {
		        function CSSParsedDeclaration(context, declaration) {
		            var _a, _b;
		            this.animationDuration = parse(context, duration, declaration.animationDuration);
		            this.backgroundClip = parse(context, backgroundClip, declaration.backgroundClip);
		            this.backgroundColor = parse(context, backgroundColor, declaration.backgroundColor);
		            this.backgroundImage = parse(context, backgroundImage, declaration.backgroundImage);
		            this.backgroundOrigin = parse(context, backgroundOrigin, declaration.backgroundOrigin);
		            this.backgroundPosition = parse(context, backgroundPosition, declaration.backgroundPosition);
		            this.backgroundRepeat = parse(context, backgroundRepeat, declaration.backgroundRepeat);
		            this.backgroundSize = parse(context, backgroundSize, declaration.backgroundSize);
		            this.borderTopColor = parse(context, borderTopColor, declaration.borderTopColor);
		            this.borderRightColor = parse(context, borderRightColor, declaration.borderRightColor);
		            this.borderBottomColor = parse(context, borderBottomColor, declaration.borderBottomColor);
		            this.borderLeftColor = parse(context, borderLeftColor, declaration.borderLeftColor);
		            this.borderTopLeftRadius = parse(context, borderTopLeftRadius, declaration.borderTopLeftRadius);
		            this.borderTopRightRadius = parse(context, borderTopRightRadius, declaration.borderTopRightRadius);
		            this.borderBottomRightRadius = parse(context, borderBottomRightRadius, declaration.borderBottomRightRadius);
		            this.borderBottomLeftRadius = parse(context, borderBottomLeftRadius, declaration.borderBottomLeftRadius);
		            this.borderTopStyle = parse(context, borderTopStyle, declaration.borderTopStyle);
		            this.borderRightStyle = parse(context, borderRightStyle, declaration.borderRightStyle);
		            this.borderBottomStyle = parse(context, borderBottomStyle, declaration.borderBottomStyle);
		            this.borderLeftStyle = parse(context, borderLeftStyle, declaration.borderLeftStyle);
		            this.borderTopWidth = parse(context, borderTopWidth, declaration.borderTopWidth);
		            this.borderRightWidth = parse(context, borderRightWidth, declaration.borderRightWidth);
		            this.borderBottomWidth = parse(context, borderBottomWidth, declaration.borderBottomWidth);
		            this.borderLeftWidth = parse(context, borderLeftWidth, declaration.borderLeftWidth);
		            this.boxShadow = parse(context, boxShadow, declaration.boxShadow);
		            this.color = parse(context, color, declaration.color);
		            this.direction = parse(context, direction, declaration.direction);
		            this.display = parse(context, display, declaration.display);
		            this.float = parse(context, float, declaration.cssFloat);
		            this.fontFamily = parse(context, fontFamily, declaration.fontFamily);
		            this.fontSize = parse(context, fontSize, declaration.fontSize);
		            this.fontStyle = parse(context, fontStyle, declaration.fontStyle);
		            this.fontVariant = parse(context, fontVariant, declaration.fontVariant);
		            this.fontWeight = parse(context, fontWeight, declaration.fontWeight);
		            this.letterSpacing = parse(context, letterSpacing, declaration.letterSpacing);
		            this.lineBreak = parse(context, lineBreak, declaration.lineBreak);
		            this.lineHeight = parse(context, lineHeight, declaration.lineHeight);
		            this.listStyleImage = parse(context, listStyleImage, declaration.listStyleImage);
		            this.listStylePosition = parse(context, listStylePosition, declaration.listStylePosition);
		            this.listStyleType = parse(context, listStyleType, declaration.listStyleType);
		            this.marginTop = parse(context, marginTop, declaration.marginTop);
		            this.marginRight = parse(context, marginRight, declaration.marginRight);
		            this.marginBottom = parse(context, marginBottom, declaration.marginBottom);
		            this.marginLeft = parse(context, marginLeft, declaration.marginLeft);
		            this.opacity = parse(context, opacity, declaration.opacity);
		            var overflowTuple = parse(context, overflow, declaration.overflow);
		            this.overflowX = overflowTuple[0];
		            this.overflowY = overflowTuple[overflowTuple.length > 1 ? 1 : 0];
		            this.overflowWrap = parse(context, overflowWrap, declaration.overflowWrap);
		            this.paddingTop = parse(context, paddingTop, declaration.paddingTop);
		            this.paddingRight = parse(context, paddingRight, declaration.paddingRight);
		            this.paddingBottom = parse(context, paddingBottom, declaration.paddingBottom);
		            this.paddingLeft = parse(context, paddingLeft, declaration.paddingLeft);
		            this.paintOrder = parse(context, paintOrder, declaration.paintOrder);
		            this.position = parse(context, position, declaration.position);
		            this.textAlign = parse(context, textAlign, declaration.textAlign);
		            this.textDecorationColor = parse(context, textDecorationColor, (_a = declaration.textDecorationColor) !== null && _a !== void 0 ? _a : declaration.color);
		            this.textDecorationLine = parse(context, textDecorationLine, (_b = declaration.textDecorationLine) !== null && _b !== void 0 ? _b : declaration.textDecoration);
		            this.textShadow = parse(context, textShadow, declaration.textShadow);
		            this.textTransform = parse(context, textTransform, declaration.textTransform);
		            this.transform = parse(context, transform$1, declaration.transform);
		            this.transformOrigin = parse(context, transformOrigin, declaration.transformOrigin);
		            this.visibility = parse(context, visibility, declaration.visibility);
		            this.webkitTextStrokeColor = parse(context, webkitTextStrokeColor, declaration.webkitTextStrokeColor);
		            this.webkitTextStrokeWidth = parse(context, webkitTextStrokeWidth, declaration.webkitTextStrokeWidth);
		            this.wordBreak = parse(context, wordBreak, declaration.wordBreak);
		            this.zIndex = parse(context, zIndex, declaration.zIndex);
		        }
		        CSSParsedDeclaration.prototype.isVisible = function () {
		            return this.display > 0 && this.opacity > 0 && this.visibility === 0 /* VISIBLE */;
		        };
		        CSSParsedDeclaration.prototype.isTransparent = function () {
		            return isTransparent(this.backgroundColor);
		        };
		        CSSParsedDeclaration.prototype.isTransformed = function () {
		            return this.transform !== null;
		        };
		        CSSParsedDeclaration.prototype.isPositioned = function () {
		            return this.position !== 0 /* STATIC */;
		        };
		        CSSParsedDeclaration.prototype.isPositionedWithZIndex = function () {
		            return this.isPositioned() && !this.zIndex.auto;
		        };
		        CSSParsedDeclaration.prototype.isFloating = function () {
		            return this.float !== 0 /* NONE */;
		        };
		        CSSParsedDeclaration.prototype.isInlineLevel = function () {
		            return (contains(this.display, 4 /* INLINE */) ||
		                contains(this.display, 33554432 /* INLINE_BLOCK */) ||
		                contains(this.display, 268435456 /* INLINE_FLEX */) ||
		                contains(this.display, 536870912 /* INLINE_GRID */) ||
		                contains(this.display, 67108864 /* INLINE_LIST_ITEM */) ||
		                contains(this.display, 134217728 /* INLINE_TABLE */));
		        };
		        return CSSParsedDeclaration;
		    }());
		    var CSSParsedPseudoDeclaration = /** @class */ (function () {
		        function CSSParsedPseudoDeclaration(context, declaration) {
		            this.content = parse(context, content, declaration.content);
		            this.quotes = parse(context, quotes, declaration.quotes);
		        }
		        return CSSParsedPseudoDeclaration;
		    }());
		    var CSSParsedCounterDeclaration = /** @class */ (function () {
		        function CSSParsedCounterDeclaration(context, declaration) {
		            this.counterIncrement = parse(context, counterIncrement, declaration.counterIncrement);
		            this.counterReset = parse(context, counterReset, declaration.counterReset);
		        }
		        return CSSParsedCounterDeclaration;
		    }());
		    // eslint-disable-next-line @typescript-eslint/no-explicit-any
		    var parse = function (context, descriptor, style) {
		        var tokenizer = new Tokenizer();
		        var value = style !== null && typeof style !== 'undefined' ? style.toString() : descriptor.initialValue;
		        tokenizer.write(value);
		        var parser = new Parser(tokenizer.read());
		        switch (descriptor.type) {
		            case 2 /* IDENT_VALUE */:
		                var token = parser.parseComponentValue();
		                return descriptor.parse(context, isIdentToken(token) ? token.value : descriptor.initialValue);
		            case 0 /* VALUE */:
		                return descriptor.parse(context, parser.parseComponentValue());
		            case 1 /* LIST */:
		                return descriptor.parse(context, parser.parseComponentValues());
		            case 4 /* TOKEN_VALUE */:
		                return parser.parseComponentValue();
		            case 3 /* TYPE_VALUE */:
		                switch (descriptor.format) {
		                    case 'angle':
		                        return angle.parse(context, parser.parseComponentValue());
		                    case 'color':
		                        return color$1.parse(context, parser.parseComponentValue());
		                    case 'image':
		                        return image.parse(context, parser.parseComponentValue());
		                    case 'length':
		                        var length_1 = parser.parseComponentValue();
		                        return isLength(length_1) ? length_1 : ZERO_LENGTH;
		                    case 'length-percentage':
		                        var value_1 = parser.parseComponentValue();
		                        return isLengthPercentage(value_1) ? value_1 : ZERO_LENGTH;
		                    case 'time':
		                        return time.parse(context, parser.parseComponentValue());
		                }
		                break;
		        }
		    };

		    var elementDebuggerAttribute = 'data-html2canvas-debug';
		    var getElementDebugType = function (element) {
		        var attribute = element.getAttribute(elementDebuggerAttribute);
		        switch (attribute) {
		            case 'all':
		                return 1 /* ALL */;
		            case 'clone':
		                return 2 /* CLONE */;
		            case 'parse':
		                return 3 /* PARSE */;
		            case 'render':
		                return 4 /* RENDER */;
		            default:
		                return 0 /* NONE */;
		        }
		    };
		    var isDebugging = function (element, type) {
		        var elementType = getElementDebugType(element);
		        return elementType === 1 /* ALL */ || type === elementType;
		    };

		    var ElementContainer = /** @class */ (function () {
		        function ElementContainer(context, element) {
		            this.context = context;
		            this.textNodes = [];
		            this.elements = [];
		            this.flags = 0;
		            if (isDebugging(element, 3 /* PARSE */)) {
		                debugger;
		            }
		            this.styles = new CSSParsedDeclaration(context, window.getComputedStyle(element, null));
		            if (isHTMLElementNode(element)) {
		                if (this.styles.animationDuration.some(function (duration) { return duration > 0; })) {
		                    element.style.animationDuration = '0s';
		                }
		                if (this.styles.transform !== null) {
		                    // getBoundingClientRect takes transforms into account
		                    element.style.transform = 'none';
		                }
		            }
		            this.bounds = parseBounds(this.context, element);
		            if (isDebugging(element, 4 /* RENDER */)) {
		                this.flags |= 16 /* DEBUG_RENDER */;
		            }
		        }
		        return ElementContainer;
		    }());

		    /*
		     * text-segmentation 1.0.3 <https://github.com/niklasvh/text-segmentation>
		     * Copyright (c) 2022 Niklas von Hertzen <https://hertzen.com>
		     * Released under MIT License
		     */
		    var base64 = 'AAAAAAAAAAAAEA4AGBkAAFAaAAACAAAAAAAIABAAGAAwADgACAAQAAgAEAAIABAACAAQAAgAEAAIABAACAAQAAgAEAAIABAAQABIAEQATAAIABAACAAQAAgAEAAIABAAVABcAAgAEAAIABAACAAQAGAAaABwAHgAgACIAI4AlgAIABAAmwCjAKgAsAC2AL4AvQDFAMoA0gBPAVYBWgEIAAgACACMANoAYgFkAWwBdAF8AX0BhQGNAZUBlgGeAaMBlQGWAasBswF8AbsBwwF0AcsBYwHTAQgA2wG/AOMBdAF8AekB8QF0AfkB+wHiAHQBfAEIAAMC5gQIAAsCEgIIAAgAFgIeAggAIgIpAggAMQI5AkACygEIAAgASAJQAlgCYAIIAAgACAAKBQoFCgUTBRMFGQUrBSsFCAAIAAgACAAIAAgACAAIAAgACABdAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABoAmgCrwGvAQgAbgJ2AggAHgEIAAgACADnAXsCCAAIAAgAgwIIAAgACAAIAAgACACKAggAkQKZAggAPADJAAgAoQKkAqwCsgK6AsICCADJAggA0AIIAAgACAAIANYC3gIIAAgACAAIAAgACABAAOYCCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAkASoB+QIEAAgACAA8AEMCCABCBQgACABJBVAFCAAIAAgACAAIAAgACAAIAAgACABTBVoFCAAIAFoFCABfBWUFCAAIAAgACAAIAAgAbQUIAAgACAAIAAgACABzBXsFfQWFBYoFigWKBZEFigWKBYoFmAWfBaYFrgWxBbkFCAAIAAgACAAIAAgACAAIAAgACAAIAMEFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAMgFCADQBQgACAAIAAgACAAIAAgACAAIAAgACAAIAO4CCAAIAAgAiQAIAAgACABAAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAD0AggACAD8AggACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIANYFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAMDvwAIAAgAJAIIAAgACAAIAAgACAAIAAgACwMTAwgACAB9BOsEGwMjAwgAKwMyAwsFYgE3A/MEPwMIAEUDTQNRAwgAWQOsAGEDCAAIAAgACAAIAAgACABpAzQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFIQUoBSwFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABtAwgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABMAEwACAAIAAgACAAIABgACAAIAAgACAC/AAgACAAyAQgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACACAAIAAwAAgACAAIAAgACAAIAAgACAAIAAAARABIAAgACAAIABQASAAIAAgAIABwAEAAjgCIABsAqAC2AL0AigDQAtwC+IJIQqVAZUBWQqVAZUBlQGVAZUBlQGrC5UBlQGVAZUBlQGVAZUBlQGVAXsKlQGVAbAK6wsrDGUMpQzlDJUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAfAKAAuZA64AtwCJALoC6ADwAAgAuACgA/oEpgO6AqsD+AAIAAgAswMIAAgACAAIAIkAuwP5AfsBwwPLAwgACAAIAAgACADRA9kDCAAIAOED6QMIAAgACAAIAAgACADuA/YDCAAIAP4DyQAIAAgABgQIAAgAXQAOBAgACAAIAAgACAAIABMECAAIAAgACAAIAAgACAD8AAQBCAAIAAgAGgQiBCoECAExBAgAEAEIAAgACAAIAAgACAAIAAgACAAIAAgACAA4BAgACABABEYECAAIAAgATAQYAQgAVAQIAAgACAAIAAgACAAIAAgACAAIAFoECAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAOQEIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAB+BAcACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAEABhgSMBAgACAAIAAgAlAQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAwAEAAQABAADAAMAAwADAAQABAAEAAQABAAEAAQABHATAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAdQMIAAgACAAIAAgACAAIAMkACAAIAAgAfQMIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACACFA4kDCAAIAAgACAAIAOcBCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAIcDCAAIAAgACAAIAAgACAAIAAgACAAIAJEDCAAIAAgACADFAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABgBAgAZgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAbAQCBXIECAAIAHkECAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABAAJwEQACjBKoEsgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAC6BMIECAAIAAgACAAIAAgACABmBAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAxwQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAGYECAAIAAgAzgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAigWKBYoFigWKBYoFigWKBd0FXwUIAOIF6gXxBYoF3gT5BQAGCAaKBYoFigWKBYoFigWKBYoFigWKBYoFigXWBIoFigWKBYoFigWKBYoFigWKBYsFEAaKBYoFigWKBYoFigWKBRQGCACKBYoFigWKBQgACAAIANEECAAIABgGigUgBggAJgYIAC4GMwaKBYoF0wQ3Bj4GigWKBYoFigWKBYoFigWKBYoFigWKBYoFigUIAAgACAAIAAgACAAIAAgAigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWLBf///////wQABAAEAAQABAAEAAQABAAEAAQAAwAEAAQAAgAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAQADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAUAAAAFAAUAAAAFAAUAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUAAQAAAAUABQAFAAUABQAFAAAAAAAFAAUAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAFAAUAAQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUABQAFAAAABwAHAAcAAAAHAAcABwAFAAEAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAcABwAFAAUAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAAAAQABAAAAAAAAAAAAAAAFAAUABQAFAAAABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABwAHAAcAAAAHAAcAAAAAAAUABQAHAAUAAQAHAAEABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABwABAAUABQAFAAUAAAAAAAAAAAAAAAEAAQABAAEAAQABAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABQANAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAEAAQABAAEAAQABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAABQAHAAUABQAFAAAAAAAAAAcABQAFAAUABQAFAAQABAAEAAQABAAEAAQABAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUAAAAFAAUABQAFAAUAAAAFAAUABQAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAAAAAAAAAAAAUABQAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAUAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABwAHAAcABwAFAAcABwAAAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAUABwAHAAUABQAFAAUAAAAAAAcABwAAAAAABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAABQAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAABwAHAAcABQAFAAAAAAAAAAAABQAFAAAAAAAFAAUABQAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAFAAUABQAFAAUAAAAFAAUABwAAAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAFAAUABwAFAAUABQAFAAAAAAAHAAcAAAAAAAcABwAFAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABwAAAAAAAAAHAAcABwAAAAcABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAABQAHAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAcABwAAAAUABQAFAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABQAHAAcABQAHAAcAAAAFAAcABwAAAAcABwAFAAUAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAFAAcABwAFAAUABQAAAAUAAAAHAAcABwAHAAcABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAHAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAABwAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAUAAAAFAAAAAAAAAAAABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUABQAFAAUAAAAFAAUAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABwAFAAUABQAFAAUABQAAAAUABQAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABQAFAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABQAFAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAHAAUABQAFAAUABQAFAAUABwAHAAcABwAHAAcABwAHAAUABwAHAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABwAHAAcABwAFAAUABwAHAAcAAAAAAAAAAAAHAAcABQAHAAcABwAHAAcABwAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAHAAUABQAFAAUABQAFAAUAAAAFAAAABQAAAAAABQAFAAUABQAFAAUABQAFAAcABwAHAAcABwAHAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAUABQAFAAUABQAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABwAFAAcABwAHAAcABwAFAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAUABQAFAAUABwAHAAUABQAHAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABQAFAAcABwAHAAUABwAFAAUABQAHAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAUABQAFAAUABQAFAAUABQAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAcABQAFAAUABQAFAAUABQAAAAAAAAAAAAUAAAAAAAAAAAAAAAAABQAAAAAABwAFAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUAAAAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAABQAAAAAAAAAFAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAUABQAHAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAHAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABwAFAAUABQAFAAcABwAFAAUABwAHAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAcABwAFAAUABwAHAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAFAAUABQAAAAAABQAFAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAFAAcABwAAAAAAAAAAAAAABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAFAAcABwAFAAcABwAAAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAFAAUABQAAAAUABQAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABwAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABQAFAAUABQAFAAUABQAFAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAHAAcABQAHAAUABQAAAAAAAAAAAAAAAAAFAAAABwAHAAcABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAcABwAAAAAABwAHAAAAAAAHAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABwAHAAUABQAFAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABQAFAAUABQAFAAUABwAFAAcABwAFAAcABQAFAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABQAFAAUABQAAAAAABwAHAAcABwAFAAUABwAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAHAAUABQAFAAUABQAFAAUABQAHAAcABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAFAAcABwAFAAUABQAFAAUABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAcABwAFAAUABQAFAAcABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABQAHAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAAAAAAFAAUABwAHAAcABwAFAAAAAAAAAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABwAHAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAHAAUABQAFAAUABQAFAAUABwAFAAUABwAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAAAAAAAABQAAAAUABQAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAHAAcAAAAFAAUAAAAHAAcABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAAAAAAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAUABQAFAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAABQAFAAUABQAFAAUABQAAAAUABQAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAFAAUABQAFAAUADgAOAA4ADgAOAA4ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAAAAAAAAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAMAAwADAAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkAAAAAAAAAAAAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAAAAAAAAAAAAsADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwACwAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAADgAOAA4AAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAAAA4ADgAOAA4ADgAOAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAA4AAAAOAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAADgAAAAAAAAAAAA4AAAAOAAAAAAAAAAAADgAOAA4AAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4AAAAAAA4ADgAOAA4ADgAOAA4ADgAOAAAADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4AAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAOAA4ADgAOAA4ADgAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAAAAAAA=';

		    /*
		     * utrie 1.0.2 <https://github.com/niklasvh/utrie>
		     * Copyright (c) 2022 Niklas von Hertzen <https://hertzen.com>
		     * Released under MIT License
		     */
		    var chars$1 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
		    // Use a lookup table to find the index.
		    var lookup$1 = typeof Uint8Array === 'undefined' ? [] : new Uint8Array(256);
		    for (var i$1 = 0; i$1 < chars$1.length; i$1++) {
		        lookup$1[chars$1.charCodeAt(i$1)] = i$1;
		    }
		    var decode = function (base64) {
		        var bufferLength = base64.length * 0.75, len = base64.length, i, p = 0, encoded1, encoded2, encoded3, encoded4;
		        if (base64[base64.length - 1] === '=') {
		            bufferLength--;
		            if (base64[base64.length - 2] === '=') {
		                bufferLength--;
		            }
		        }
		        var buffer = typeof ArrayBuffer !== 'undefined' &&
		            typeof Uint8Array !== 'undefined' &&
		            typeof Uint8Array.prototype.slice !== 'undefined'
		            ? new ArrayBuffer(bufferLength)
		            : new Array(bufferLength);
		        var bytes = Array.isArray(buffer) ? buffer : new Uint8Array(buffer);
		        for (i = 0; i < len; i += 4) {
		            encoded1 = lookup$1[base64.charCodeAt(i)];
		            encoded2 = lookup$1[base64.charCodeAt(i + 1)];
		            encoded3 = lookup$1[base64.charCodeAt(i + 2)];
		            encoded4 = lookup$1[base64.charCodeAt(i + 3)];
		            bytes[p++] = (encoded1 << 2) | (encoded2 >> 4);
		            bytes[p++] = ((encoded2 & 15) << 4) | (encoded3 >> 2);
		            bytes[p++] = ((encoded3 & 3) << 6) | (encoded4 & 63);
		        }
		        return buffer;
		    };
		    var polyUint16Array = function (buffer) {
		        var length = buffer.length;
		        var bytes = [];
		        for (var i = 0; i < length; i += 2) {
		            bytes.push((buffer[i + 1] << 8) | buffer[i]);
		        }
		        return bytes;
		    };
		    var polyUint32Array = function (buffer) {
		        var length = buffer.length;
		        var bytes = [];
		        for (var i = 0; i < length; i += 4) {
		            bytes.push((buffer[i + 3] << 24) | (buffer[i + 2] << 16) | (buffer[i + 1] << 8) | buffer[i]);
		        }
		        return bytes;
		    };

		    /** Shift size for getting the index-2 table offset. */
		    var UTRIE2_SHIFT_2 = 5;
		    /** Shift size for getting the index-1 table offset. */
		    var UTRIE2_SHIFT_1 = 6 + 5;
		    /**
		     * Shift size for shifting left the index array values.
		     * Increases possible data size with 16-bit index values at the cost
		     * of compactability.
		     * This requires data blocks to be aligned by UTRIE2_DATA_GRANULARITY.
		     */
		    var UTRIE2_INDEX_SHIFT = 2;
		    /**
		     * Difference between the two shift sizes,
		     * for getting an index-1 offset from an index-2 offset. 6=11-5
		     */
		    var UTRIE2_SHIFT_1_2 = UTRIE2_SHIFT_1 - UTRIE2_SHIFT_2;
		    /**
		     * The part of the index-2 table for U+D800..U+DBFF stores values for
		     * lead surrogate code _units_ not code _points_.
		     * Values for lead surrogate code _points_ are indexed with this portion of the table.
		     * Length=32=0x20=0x400>>UTRIE2_SHIFT_2. (There are 1024=0x400 lead surrogates.)
		     */
		    var UTRIE2_LSCP_INDEX_2_OFFSET = 0x10000 >> UTRIE2_SHIFT_2;
		    /** Number of entries in a data block. 32=0x20 */
		    var UTRIE2_DATA_BLOCK_LENGTH = 1 << UTRIE2_SHIFT_2;
		    /** Mask for getting the lower bits for the in-data-block offset. */
		    var UTRIE2_DATA_MASK = UTRIE2_DATA_BLOCK_LENGTH - 1;
		    var UTRIE2_LSCP_INDEX_2_LENGTH = 0x400 >> UTRIE2_SHIFT_2;
		    /** Count the lengths of both BMP pieces. 2080=0x820 */
		    var UTRIE2_INDEX_2_BMP_LENGTH = UTRIE2_LSCP_INDEX_2_OFFSET + UTRIE2_LSCP_INDEX_2_LENGTH;
		    /**
		     * The 2-byte UTF-8 version of the index-2 table follows at offset 2080=0x820.
		     * Length 32=0x20 for lead bytes C0..DF, regardless of UTRIE2_SHIFT_2.
		     */
		    var UTRIE2_UTF8_2B_INDEX_2_OFFSET = UTRIE2_INDEX_2_BMP_LENGTH;
		    var UTRIE2_UTF8_2B_INDEX_2_LENGTH = 0x800 >> 6; /* U+0800 is the first code point after 2-byte UTF-8 */
		    /**
		     * The index-1 table, only used for supplementary code points, at offset 2112=0x840.
		     * Variable length, for code points up to highStart, where the last single-value range starts.
		     * Maximum length 512=0x200=0x100000>>UTRIE2_SHIFT_1.
		     * (For 0x100000 supplementary code points U+10000..U+10ffff.)
		     *
		     * The part of the index-2 table for supplementary code points starts
		     * after this index-1 table.
		     *
		     * Both the index-1 table and the following part of the index-2 table
		     * are omitted completely if there is only BMP data.
		     */
		    var UTRIE2_INDEX_1_OFFSET = UTRIE2_UTF8_2B_INDEX_2_OFFSET + UTRIE2_UTF8_2B_INDEX_2_LENGTH;
		    /**
		     * Number of index-1 entries for the BMP. 32=0x20
		     * This part of the index-1 table is omitted from the serialized form.
		     */
		    var UTRIE2_OMITTED_BMP_INDEX_1_LENGTH = 0x10000 >> UTRIE2_SHIFT_1;
		    /** Number of entries in an index-2 block. 64=0x40 */
		    var UTRIE2_INDEX_2_BLOCK_LENGTH = 1 << UTRIE2_SHIFT_1_2;
		    /** Mask for getting the lower bits for the in-index-2-block offset. */
		    var UTRIE2_INDEX_2_MASK = UTRIE2_INDEX_2_BLOCK_LENGTH - 1;
		    var slice16 = function (view, start, end) {
		        if (view.slice) {
		            return view.slice(start, end);
		        }
		        return new Uint16Array(Array.prototype.slice.call(view, start, end));
		    };
		    var slice32 = function (view, start, end) {
		        if (view.slice) {
		            return view.slice(start, end);
		        }
		        return new Uint32Array(Array.prototype.slice.call(view, start, end));
		    };
		    var createTrieFromBase64 = function (base64, _byteLength) {
		        var buffer = decode(base64);
		        var view32 = Array.isArray(buffer) ? polyUint32Array(buffer) : new Uint32Array(buffer);
		        var view16 = Array.isArray(buffer) ? polyUint16Array(buffer) : new Uint16Array(buffer);
		        var headerLength = 24;
		        var index = slice16(view16, headerLength / 2, view32[4] / 2);
		        var data = view32[5] === 2
		            ? slice16(view16, (headerLength + view32[4]) / 2)
		            : slice32(view32, Math.ceil((headerLength + view32[4]) / 4));
		        return new Trie(view32[0], view32[1], view32[2], view32[3], index, data);
		    };
		    var Trie = /** @class */ (function () {
		        function Trie(initialValue, errorValue, highStart, highValueIndex, index, data) {
		            this.initialValue = initialValue;
		            this.errorValue = errorValue;
		            this.highStart = highStart;
		            this.highValueIndex = highValueIndex;
		            this.index = index;
		            this.data = data;
		        }
		        /**
		         * Get the value for a code point as stored in the Trie.
		         *
		         * @param codePoint the code point
		         * @return the value
		         */
		        Trie.prototype.get = function (codePoint) {
		            var ix;
		            if (codePoint >= 0) {
		                if (codePoint < 0x0d800 || (codePoint > 0x0dbff && codePoint <= 0x0ffff)) {
		                    // Ordinary BMP code point, excluding leading surrogates.
		                    // BMP uses a single level lookup.  BMP index starts at offset 0 in the Trie2 index.
		                    // 16 bit data is stored in the index array itself.
		                    ix = this.index[codePoint >> UTRIE2_SHIFT_2];
		                    ix = (ix << UTRIE2_INDEX_SHIFT) + (codePoint & UTRIE2_DATA_MASK);
		                    return this.data[ix];
		                }
		                if (codePoint <= 0xffff) {
		                    // Lead Surrogate Code Point.  A Separate index section is stored for
		                    // lead surrogate code units and code points.
		                    //   The main index has the code unit data.
		                    //   For this function, we need the code point data.
		                    // Note: this expression could be refactored for slightly improved efficiency, but
		                    //       surrogate code points will be so rare in practice that it's not worth it.
		                    ix = this.index[UTRIE2_LSCP_INDEX_2_OFFSET + ((codePoint - 0xd800) >> UTRIE2_SHIFT_2)];
		                    ix = (ix << UTRIE2_INDEX_SHIFT) + (codePoint & UTRIE2_DATA_MASK);
		                    return this.data[ix];
		                }
		                if (codePoint < this.highStart) {
		                    // Supplemental code point, use two-level lookup.
		                    ix = UTRIE2_INDEX_1_OFFSET - UTRIE2_OMITTED_BMP_INDEX_1_LENGTH + (codePoint >> UTRIE2_SHIFT_1);
		                    ix = this.index[ix];
		                    ix += (codePoint >> UTRIE2_SHIFT_2) & UTRIE2_INDEX_2_MASK;
		                    ix = this.index[ix];
		                    ix = (ix << UTRIE2_INDEX_SHIFT) + (codePoint & UTRIE2_DATA_MASK);
		                    return this.data[ix];
		                }
		                if (codePoint <= 0x10ffff) {
		                    return this.data[this.highValueIndex];
		                }
		            }
		            // Fall through.  The code point is outside of the legal range of 0..0x10ffff.
		            return this.errorValue;
		        };
		        return Trie;
		    }());

		    /*
		     * base64-arraybuffer 1.0.2 <https://github.com/niklasvh/base64-arraybuffer>
		     * Copyright (c) 2022 Niklas von Hertzen <https://hertzen.com>
		     * Released under MIT License
		     */
		    var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
		    // Use a lookup table to find the index.
		    var lookup = typeof Uint8Array === 'undefined' ? [] : new Uint8Array(256);
		    for (var i = 0; i < chars.length; i++) {
		        lookup[chars.charCodeAt(i)] = i;
		    }

		    var Prepend = 1;
		    var CR = 2;
		    var LF = 3;
		    var Control = 4;
		    var Extend = 5;
		    var SpacingMark = 7;
		    var L = 8;
		    var V = 9;
		    var T = 10;
		    var LV = 11;
		    var LVT = 12;
		    var ZWJ = 13;
		    var Extended_Pictographic = 14;
		    var RI = 15;
		    var toCodePoints = function (str) {
		        var codePoints = [];
		        var i = 0;
		        var length = str.length;
		        while (i < length) {
		            var value = str.charCodeAt(i++);
		            if (value >= 0xd800 && value <= 0xdbff && i < length) {
		                var extra = str.charCodeAt(i++);
		                if ((extra & 0xfc00) === 0xdc00) {
		                    codePoints.push(((value & 0x3ff) << 10) + (extra & 0x3ff) + 0x10000);
		                }
		                else {
		                    codePoints.push(value);
		                    i--;
		                }
		            }
		            else {
		                codePoints.push(value);
		            }
		        }
		        return codePoints;
		    };
		    var fromCodePoint = function () {
		        var codePoints = [];
		        for (var _i = 0; _i < arguments.length; _i++) {
		            codePoints[_i] = arguments[_i];
		        }
		        if (String.fromCodePoint) {
		            return String.fromCodePoint.apply(String, codePoints);
		        }
		        var length = codePoints.length;
		        if (!length) {
		            return '';
		        }
		        var codeUnits = [];
		        var index = -1;
		        var result = '';
		        while (++index < length) {
		            var codePoint = codePoints[index];
		            if (codePoint <= 0xffff) {
		                codeUnits.push(codePoint);
		            }
		            else {
		                codePoint -= 0x10000;
		                codeUnits.push((codePoint >> 10) + 0xd800, (codePoint % 0x400) + 0xdc00);
		            }
		            if (index + 1 === length || codeUnits.length > 0x4000) {
		                result += String.fromCharCode.apply(String, codeUnits);
		                codeUnits.length = 0;
		            }
		        }
		        return result;
		    };
		    var UnicodeTrie = createTrieFromBase64(base64);
		    var BREAK_NOT_ALLOWED = '×';
		    var BREAK_ALLOWED = '÷';
		    var codePointToClass = function (codePoint) { return UnicodeTrie.get(codePoint); };
		    var _graphemeBreakAtIndex = function (_codePoints, classTypes, index) {
		        var prevIndex = index - 2;
		        var prev = classTypes[prevIndex];
		        var current = classTypes[index - 1];
		        var next = classTypes[index];
		        // GB3 Do not break between a CR and LF
		        if (current === CR && next === LF) {
		            return BREAK_NOT_ALLOWED;
		        }
		        // GB4 Otherwise, break before and after controls.
		        if (current === CR || current === LF || current === Control) {
		            return BREAK_ALLOWED;
		        }
		        // GB5
		        if (next === CR || next === LF || next === Control) {
		            return BREAK_ALLOWED;
		        }
		        // Do not break Hangul syllable sequences.
		        // GB6
		        if (current === L && [L, V, LV, LVT].indexOf(next) !== -1) {
		            return BREAK_NOT_ALLOWED;
		        }
		        // GB7
		        if ((current === LV || current === V) && (next === V || next === T)) {
		            return BREAK_NOT_ALLOWED;
		        }
		        // GB8
		        if ((current === LVT || current === T) && next === T) {
		            return BREAK_NOT_ALLOWED;
		        }
		        // GB9 Do not break before extending characters or ZWJ.
		        if (next === ZWJ || next === Extend) {
		            return BREAK_NOT_ALLOWED;
		        }
		        // Do not break before SpacingMarks, or after Prepend characters.
		        // GB9a
		        if (next === SpacingMark) {
		            return BREAK_NOT_ALLOWED;
		        }
		        // GB9a
		        if (current === Prepend) {
		            return BREAK_NOT_ALLOWED;
		        }
		        // GB11 Do not break within emoji modifier sequences or emoji zwj sequences.
		        if (current === ZWJ && next === Extended_Pictographic) {
		            while (prev === Extend) {
		                prev = classTypes[--prevIndex];
		            }
		            if (prev === Extended_Pictographic) {
		                return BREAK_NOT_ALLOWED;
		            }
		        }
		        // GB12 Do not break within emoji flag sequences.
		        // That is, do not break between regional indicator (RI) symbols
		        // if there is an odd number of RI characters before the break point.
		        if (current === RI && next === RI) {
		            var countRI = 0;
		            while (prev === RI) {
		                countRI++;
		                prev = classTypes[--prevIndex];
		            }
		            if (countRI % 2 === 0) {
		                return BREAK_NOT_ALLOWED;
		            }
		        }
		        return BREAK_ALLOWED;
		    };
		    var GraphemeBreaker = function (str) {
		        var codePoints = toCodePoints(str);
		        var length = codePoints.length;
		        var index = 0;
		        var lastEnd = 0;
		        var classTypes = codePoints.map(codePointToClass);
		        return {
		            next: function () {
		                if (index >= length) {
		                    return { done: true, value: null };
		                }
		                var graphemeBreak = BREAK_NOT_ALLOWED;
		                while (index < length &&
		                    (graphemeBreak = _graphemeBreakAtIndex(codePoints, classTypes, ++index)) === BREAK_NOT_ALLOWED) { }
		                if (graphemeBreak !== BREAK_NOT_ALLOWED || index === length) {
		                    var value = fromCodePoint.apply(null, codePoints.slice(lastEnd, index));
		                    lastEnd = index;
		                    return { value: value, done: false };
		                }
		                return { done: true, value: null };
		            },
		        };
		    };
		    var splitGraphemes = function (str) {
		        var breaker = GraphemeBreaker(str);
		        var graphemes = [];
		        var bk;
		        while (!(bk = breaker.next()).done) {
		            if (bk.value) {
		                graphemes.push(bk.value.slice());
		            }
		        }
		        return graphemes;
		    };

		    var testRangeBounds = function (document) {
		        var TEST_HEIGHT = 123;
		        if (document.createRange) {
		            var range = document.createRange();
		            if (range.getBoundingClientRect) {
		                var testElement = document.createElement('boundtest');
		                testElement.style.height = TEST_HEIGHT + "px";
		                testElement.style.display = 'block';
		                document.body.appendChild(testElement);
		                range.selectNode(testElement);
		                var rangeBounds = range.getBoundingClientRect();
		                var rangeHeight = Math.round(rangeBounds.height);
		                document.body.removeChild(testElement);
		                if (rangeHeight === TEST_HEIGHT) {
		                    return true;
		                }
		            }
		        }
		        return false;
		    };
		    var testIOSLineBreak = function (document) {
		        var testElement = document.createElement('boundtest');
		        testElement.style.width = '50px';
		        testElement.style.display = 'block';
		        testElement.style.fontSize = '12px';
		        testElement.style.letterSpacing = '0px';
		        testElement.style.wordSpacing = '0px';
		        document.body.appendChild(testElement);
		        var range = document.createRange();
		        testElement.innerHTML = typeof ''.repeat === 'function' ? '&#128104;'.repeat(10) : '';
		        var node = testElement.firstChild;
		        var textList = toCodePoints$1(node.data).map(function (i) { return fromCodePoint$1(i); });
		        var offset = 0;
		        var prev = {};
		        // ios 13 does not handle range getBoundingClientRect line changes correctly #2177
		        var supports = textList.every(function (text, i) {
		            range.setStart(node, offset);
		            range.setEnd(node, offset + text.length);
		            var rect = range.getBoundingClientRect();
		            offset += text.length;
		            var boundAhead = rect.x > prev.x || rect.y > prev.y;
		            prev = rect;
		            if (i === 0) {
		                return true;
		            }
		            return boundAhead;
		        });
		        document.body.removeChild(testElement);
		        return supports;
		    };
		    var testCORS = function () { return typeof new Image().crossOrigin !== 'undefined'; };
		    var testResponseType = function () { return typeof new XMLHttpRequest().responseType === 'string'; };
		    var testSVG = function (document) {
		        var img = new Image();
		        var canvas = document.createElement('canvas');
		        var ctx = canvas.getContext('2d');
		        if (!ctx) {
		            return false;
		        }
		        img.src = "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg'></svg>";
		        try {
		            ctx.drawImage(img, 0, 0);
		            canvas.toDataURL();
		        }
		        catch (e) {
		            return false;
		        }
		        return true;
		    };
		    var isGreenPixel = function (data) {
		        return data[0] === 0 && data[1] === 255 && data[2] === 0 && data[3] === 255;
		    };
		    var testForeignObject = function (document) {
		        var canvas = document.createElement('canvas');
		        var size = 100;
		        canvas.width = size;
		        canvas.height = size;
		        var ctx = canvas.getContext('2d');
		        if (!ctx) {
		            return Promise.reject(false);
		        }
		        ctx.fillStyle = 'rgb(0, 255, 0)';
		        ctx.fillRect(0, 0, size, size);
		        var img = new Image();
		        var greenImageSrc = canvas.toDataURL();
		        img.src = greenImageSrc;
		        var svg = createForeignObjectSVG(size, size, 0, 0, img);
		        ctx.fillStyle = 'red';
		        ctx.fillRect(0, 0, size, size);
		        return loadSerializedSVG$1(svg)
		            .then(function (img) {
		            ctx.drawImage(img, 0, 0);
		            var data = ctx.getImageData(0, 0, size, size).data;
		            ctx.fillStyle = 'red';
		            ctx.fillRect(0, 0, size, size);
		            var node = document.createElement('div');
		            node.style.backgroundImage = "url(" + greenImageSrc + ")";
		            node.style.height = size + "px";
		            // Firefox 55 does not render inline <img /> tags
		            return isGreenPixel(data)
		                ? loadSerializedSVG$1(createForeignObjectSVG(size, size, 0, 0, node))
		                : Promise.reject(false);
		        })
		            .then(function (img) {
		            ctx.drawImage(img, 0, 0);
		            // Edge does not render background-images
		            return isGreenPixel(ctx.getImageData(0, 0, size, size).data);
		        })
		            .catch(function () { return false; });
		    };
		    var createForeignObjectSVG = function (width, height, x, y, node) {
		        var xmlns = 'http://www.w3.org/2000/svg';
		        var svg = document.createElementNS(xmlns, 'svg');
		        var foreignObject = document.createElementNS(xmlns, 'foreignObject');
		        svg.setAttributeNS(null, 'width', width.toString());
		        svg.setAttributeNS(null, 'height', height.toString());
		        foreignObject.setAttributeNS(null, 'width', '100%');
		        foreignObject.setAttributeNS(null, 'height', '100%');
		        foreignObject.setAttributeNS(null, 'x', x.toString());
		        foreignObject.setAttributeNS(null, 'y', y.toString());
		        foreignObject.setAttributeNS(null, 'externalResourcesRequired', 'true');
		        svg.appendChild(foreignObject);
		        foreignObject.appendChild(node);
		        return svg;
		    };
		    var loadSerializedSVG$1 = function (svg) {
		        return new Promise(function (resolve, reject) {
		            var img = new Image();
		            img.onload = function () { return resolve(img); };
		            img.onerror = reject;
		            img.src = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(new XMLSerializer().serializeToString(svg));
		        });
		    };
		    var FEATURES = {
		        get SUPPORT_RANGE_BOUNDS() {
		            var value = testRangeBounds(document);
		            Object.defineProperty(FEATURES, 'SUPPORT_RANGE_BOUNDS', { value: value });
		            return value;
		        },
		        get SUPPORT_WORD_BREAKING() {
		            var value = FEATURES.SUPPORT_RANGE_BOUNDS && testIOSLineBreak(document);
		            Object.defineProperty(FEATURES, 'SUPPORT_WORD_BREAKING', { value: value });
		            return value;
		        },
		        get SUPPORT_SVG_DRAWING() {
		            var value = testSVG(document);
		            Object.defineProperty(FEATURES, 'SUPPORT_SVG_DRAWING', { value: value });
		            return value;
		        },
		        get SUPPORT_FOREIGNOBJECT_DRAWING() {
		            var value = typeof Array.from === 'function' && typeof window.fetch === 'function'
		                ? testForeignObject(document)
		                : Promise.resolve(false);
		            Object.defineProperty(FEATURES, 'SUPPORT_FOREIGNOBJECT_DRAWING', { value: value });
		            return value;
		        },
		        get SUPPORT_CORS_IMAGES() {
		            var value = testCORS();
		            Object.defineProperty(FEATURES, 'SUPPORT_CORS_IMAGES', { value: value });
		            return value;
		        },
		        get SUPPORT_RESPONSE_TYPE() {
		            var value = testResponseType();
		            Object.defineProperty(FEATURES, 'SUPPORT_RESPONSE_TYPE', { value: value });
		            return value;
		        },
		        get SUPPORT_CORS_XHR() {
		            var value = 'withCredentials' in new XMLHttpRequest();
		            Object.defineProperty(FEATURES, 'SUPPORT_CORS_XHR', { value: value });
		            return value;
		        },
		        get SUPPORT_NATIVE_TEXT_SEGMENTATION() {
		            // eslint-disable-next-line @typescript-eslint/no-explicit-any
		            var value = !!(typeof Intl !== 'undefined' && Intl.Segmenter);
		            Object.defineProperty(FEATURES, 'SUPPORT_NATIVE_TEXT_SEGMENTATION', { value: value });
		            return value;
		        }
		    };

		    var TextBounds = /** @class */ (function () {
		        function TextBounds(text, bounds) {
		            this.text = text;
		            this.bounds = bounds;
		        }
		        return TextBounds;
		    }());
		    var parseTextBounds = function (context, value, styles, node) {
		        var textList = breakText(value, styles);
		        var textBounds = [];
		        var offset = 0;
		        textList.forEach(function (text) {
		            if (styles.textDecorationLine.length || text.trim().length > 0) {
		                if (FEATURES.SUPPORT_RANGE_BOUNDS) {
		                    var clientRects = createRange(node, offset, text.length).getClientRects();
		                    if (clientRects.length > 1) {
		                        var subSegments = segmentGraphemes(text);
		                        var subOffset_1 = 0;
		                        subSegments.forEach(function (subSegment) {
		                            textBounds.push(new TextBounds(subSegment, Bounds.fromDOMRectList(context, createRange(node, subOffset_1 + offset, subSegment.length).getClientRects())));
		                            subOffset_1 += subSegment.length;
		                        });
		                    }
		                    else {
		                        textBounds.push(new TextBounds(text, Bounds.fromDOMRectList(context, clientRects)));
		                    }
		                }
		                else {
		                    var replacementNode = node.splitText(text.length);
		                    textBounds.push(new TextBounds(text, getWrapperBounds(context, node)));
		                    node = replacementNode;
		                }
		            }
		            else if (!FEATURES.SUPPORT_RANGE_BOUNDS) {
		                node = node.splitText(text.length);
		            }
		            offset += text.length;
		        });
		        return textBounds;
		    };
		    var getWrapperBounds = function (context, node) {
		        var ownerDocument = node.ownerDocument;
		        if (ownerDocument) {
		            var wrapper = ownerDocument.createElement('html2canvaswrapper');
		            wrapper.appendChild(node.cloneNode(true));
		            var parentNode = node.parentNode;
		            if (parentNode) {
		                parentNode.replaceChild(wrapper, node);
		                var bounds = parseBounds(context, wrapper);
		                if (wrapper.firstChild) {
		                    parentNode.replaceChild(wrapper.firstChild, wrapper);
		                }
		                return bounds;
		            }
		        }
		        return Bounds.EMPTY;
		    };
		    var createRange = function (node, offset, length) {
		        var ownerDocument = node.ownerDocument;
		        if (!ownerDocument) {
		            throw new Error('Node has no owner document');
		        }
		        var range = ownerDocument.createRange();
		        range.setStart(node, offset);
		        range.setEnd(node, offset + length);
		        return range;
		    };
		    var segmentGraphemes = function (value) {
		        if (FEATURES.SUPPORT_NATIVE_TEXT_SEGMENTATION) {
		            // eslint-disable-next-line @typescript-eslint/no-explicit-any
		            var segmenter = new Intl.Segmenter(void 0, { granularity: 'grapheme' });
		            // eslint-disable-next-line @typescript-eslint/no-explicit-any
		            return Array.from(segmenter.segment(value)).map(function (segment) { return segment.segment; });
		        }
		        return splitGraphemes(value);
		    };
		    var segmentWords = function (value, styles) {
		        if (FEATURES.SUPPORT_NATIVE_TEXT_SEGMENTATION) {
		            // eslint-disable-next-line @typescript-eslint/no-explicit-any
		            var segmenter = new Intl.Segmenter(void 0, {
		                granularity: 'word'
		            });
		            // eslint-disable-next-line @typescript-eslint/no-explicit-any
		            return Array.from(segmenter.segment(value)).map(function (segment) { return segment.segment; });
		        }
		        return breakWords(value, styles);
		    };
		    var breakText = function (value, styles) {
		        return styles.letterSpacing !== 0 ? segmentGraphemes(value) : segmentWords(value, styles);
		    };
		    // https://drafts.csswg.org/css-text/#word-separator
		    var wordSeparators = [0x0020, 0x00a0, 0x1361, 0x10100, 0x10101, 0x1039, 0x1091];
		    var breakWords = function (str, styles) {
		        var breaker = LineBreaker(str, {
		            lineBreak: styles.lineBreak,
		            wordBreak: styles.overflowWrap === "break-word" /* BREAK_WORD */ ? 'break-word' : styles.wordBreak
		        });
		        var words = [];
		        var bk;
		        var _loop_1 = function () {
		            if (bk.value) {
		                var value = bk.value.slice();
		                var codePoints = toCodePoints$1(value);
		                var word_1 = '';
		                codePoints.forEach(function (codePoint) {
		                    if (wordSeparators.indexOf(codePoint) === -1) {
		                        word_1 += fromCodePoint$1(codePoint);
		                    }
		                    else {
		                        if (word_1.length) {
		                            words.push(word_1);
		                        }
		                        words.push(fromCodePoint$1(codePoint));
		                        word_1 = '';
		                    }
		                });
		                if (word_1.length) {
		                    words.push(word_1);
		                }
		            }
		        };
		        while (!(bk = breaker.next()).done) {
		            _loop_1();
		        }
		        return words;
		    };

		    var TextContainer = /** @class */ (function () {
		        function TextContainer(context, node, styles) {
		            this.text = transform(node.data, styles.textTransform);
		            this.textBounds = parseTextBounds(context, this.text, styles, node);
		        }
		        return TextContainer;
		    }());
		    var transform = function (text, transform) {
		        switch (transform) {
		            case 1 /* LOWERCASE */:
		                return text.toLowerCase();
		            case 3 /* CAPITALIZE */:
		                return text.replace(CAPITALIZE, capitalize);
		            case 2 /* UPPERCASE */:
		                return text.toUpperCase();
		            default:
		                return text;
		        }
		    };
		    var CAPITALIZE = /(^|\s|:|-|\(|\))([a-z])/g;
		    var capitalize = function (m, p1, p2) {
		        if (m.length > 0) {
		            return p1 + p2.toUpperCase();
		        }
		        return m;
		    };

		    var ImageElementContainer = /** @class */ (function (_super) {
		        __extends(ImageElementContainer, _super);
		        function ImageElementContainer(context, img) {
		            var _this = _super.call(this, context, img) || this;
		            _this.src = img.currentSrc || img.src;
		            _this.intrinsicWidth = img.naturalWidth;
		            _this.intrinsicHeight = img.naturalHeight;
		            _this.context.cache.addImage(_this.src);
		            return _this;
		        }
		        return ImageElementContainer;
		    }(ElementContainer));

		    var CanvasElementContainer = /** @class */ (function (_super) {
		        __extends(CanvasElementContainer, _super);
		        function CanvasElementContainer(context, canvas) {
		            var _this = _super.call(this, context, canvas) || this;
		            _this.canvas = canvas;
		            _this.intrinsicWidth = canvas.width;
		            _this.intrinsicHeight = canvas.height;
		            return _this;
		        }
		        return CanvasElementContainer;
		    }(ElementContainer));

		    var SVGElementContainer = /** @class */ (function (_super) {
		        __extends(SVGElementContainer, _super);
		        function SVGElementContainer(context, img) {
		            var _this = _super.call(this, context, img) || this;
		            var s = new XMLSerializer();
		            var bounds = parseBounds(context, img);
		            img.setAttribute('width', bounds.width + "px");
		            img.setAttribute('height', bounds.height + "px");
		            _this.svg = "data:image/svg+xml," + encodeURIComponent(s.serializeToString(img));
		            _this.intrinsicWidth = img.width.baseVal.value;
		            _this.intrinsicHeight = img.height.baseVal.value;
		            _this.context.cache.addImage(_this.svg);
		            return _this;
		        }
		        return SVGElementContainer;
		    }(ElementContainer));

		    var LIElementContainer = /** @class */ (function (_super) {
		        __extends(LIElementContainer, _super);
		        function LIElementContainer(context, element) {
		            var _this = _super.call(this, context, element) || this;
		            _this.value = element.value;
		            return _this;
		        }
		        return LIElementContainer;
		    }(ElementContainer));

		    var OLElementContainer = /** @class */ (function (_super) {
		        __extends(OLElementContainer, _super);
		        function OLElementContainer(context, element) {
		            var _this = _super.call(this, context, element) || this;
		            _this.start = element.start;
		            _this.reversed = typeof element.reversed === 'boolean' && element.reversed === true;
		            return _this;
		        }
		        return OLElementContainer;
		    }(ElementContainer));

		    var CHECKBOX_BORDER_RADIUS = [
		        {
		            type: 15 /* DIMENSION_TOKEN */,
		            flags: 0,
		            unit: 'px',
		            number: 3
		        }
		    ];
		    var RADIO_BORDER_RADIUS = [
		        {
		            type: 16 /* PERCENTAGE_TOKEN */,
		            flags: 0,
		            number: 50
		        }
		    ];
		    var reformatInputBounds = function (bounds) {
		        if (bounds.width > bounds.height) {
		            return new Bounds(bounds.left + (bounds.width - bounds.height) / 2, bounds.top, bounds.height, bounds.height);
		        }
		        else if (bounds.width < bounds.height) {
		            return new Bounds(bounds.left, bounds.top + (bounds.height - bounds.width) / 2, bounds.width, bounds.width);
		        }
		        return bounds;
		    };
		    var getInputValue = function (node) {
		        var value = node.type === PASSWORD ? new Array(node.value.length + 1).join('\u2022') : node.value;
		        return value.length === 0 ? node.placeholder || '' : value;
		    };
		    var CHECKBOX = 'checkbox';
		    var RADIO = 'radio';
		    var PASSWORD = 'password';
		    var INPUT_COLOR = 0x2a2a2aff;
		    var InputElementContainer = /** @class */ (function (_super) {
		        __extends(InputElementContainer, _super);
		        function InputElementContainer(context, input) {
		            var _this = _super.call(this, context, input) || this;
		            _this.type = input.type.toLowerCase();
		            _this.checked = input.checked;
		            _this.value = getInputValue(input);
		            if (_this.type === CHECKBOX || _this.type === RADIO) {
		                _this.styles.backgroundColor = 0xdededeff;
		                _this.styles.borderTopColor =
		                    _this.styles.borderRightColor =
		                        _this.styles.borderBottomColor =
		                            _this.styles.borderLeftColor =
		                                0xa5a5a5ff;
		                _this.styles.borderTopWidth =
		                    _this.styles.borderRightWidth =
		                        _this.styles.borderBottomWidth =
		                            _this.styles.borderLeftWidth =
		                                1;
		                _this.styles.borderTopStyle =
		                    _this.styles.borderRightStyle =
		                        _this.styles.borderBottomStyle =
		                            _this.styles.borderLeftStyle =
		                                1 /* SOLID */;
		                _this.styles.backgroundClip = [0 /* BORDER_BOX */];
		                _this.styles.backgroundOrigin = [0 /* BORDER_BOX */];
		                _this.bounds = reformatInputBounds(_this.bounds);
		            }
		            switch (_this.type) {
		                case CHECKBOX:
		                    _this.styles.borderTopRightRadius =
		                        _this.styles.borderTopLeftRadius =
		                            _this.styles.borderBottomRightRadius =
		                                _this.styles.borderBottomLeftRadius =
		                                    CHECKBOX_BORDER_RADIUS;
		                    break;
		                case RADIO:
		                    _this.styles.borderTopRightRadius =
		                        _this.styles.borderTopLeftRadius =
		                            _this.styles.borderBottomRightRadius =
		                                _this.styles.borderBottomLeftRadius =
		                                    RADIO_BORDER_RADIUS;
		                    break;
		            }
		            return _this;
		        }
		        return InputElementContainer;
		    }(ElementContainer));

		    var SelectElementContainer = /** @class */ (function (_super) {
		        __extends(SelectElementContainer, _super);
		        function SelectElementContainer(context, element) {
		            var _this = _super.call(this, context, element) || this;
		            var option = element.options[element.selectedIndex || 0];
		            _this.value = option ? option.text || '' : '';
		            return _this;
		        }
		        return SelectElementContainer;
		    }(ElementContainer));

		    var TextareaElementContainer = /** @class */ (function (_super) {
		        __extends(TextareaElementContainer, _super);
		        function TextareaElementContainer(context, element) {
		            var _this = _super.call(this, context, element) || this;
		            _this.value = element.value;
		            return _this;
		        }
		        return TextareaElementContainer;
		    }(ElementContainer));

		    var IFrameElementContainer = /** @class */ (function (_super) {
		        __extends(IFrameElementContainer, _super);
		        function IFrameElementContainer(context, iframe) {
		            var _this = _super.call(this, context, iframe) || this;
		            _this.src = iframe.src;
		            _this.width = parseInt(iframe.width, 10) || 0;
		            _this.height = parseInt(iframe.height, 10) || 0;
		            _this.backgroundColor = _this.styles.backgroundColor;
		            try {
		                if (iframe.contentWindow &&
		                    iframe.contentWindow.document &&
		                    iframe.contentWindow.document.documentElement) {
		                    _this.tree = parseTree(context, iframe.contentWindow.document.documentElement);
		                    // http://www.w3.org/TR/css3-background/#special-backgrounds
		                    var documentBackgroundColor = iframe.contentWindow.document.documentElement
		                        ? parseColor(context, getComputedStyle(iframe.contentWindow.document.documentElement).backgroundColor)
		                        : COLORS.TRANSPARENT;
		                    var bodyBackgroundColor = iframe.contentWindow.document.body
		                        ? parseColor(context, getComputedStyle(iframe.contentWindow.document.body).backgroundColor)
		                        : COLORS.TRANSPARENT;
		                    _this.backgroundColor = isTransparent(documentBackgroundColor)
		                        ? isTransparent(bodyBackgroundColor)
		                            ? _this.styles.backgroundColor
		                            : bodyBackgroundColor
		                        : documentBackgroundColor;
		                }
		            }
		            catch (e) { }
		            return _this;
		        }
		        return IFrameElementContainer;
		    }(ElementContainer));

		    var LIST_OWNERS = ['OL', 'UL', 'MENU'];
		    var parseNodeTree = function (context, node, parent, root) {
		        for (var childNode = node.firstChild, nextNode = void 0; childNode; childNode = nextNode) {
		            nextNode = childNode.nextSibling;
		            if (isTextNode(childNode) && childNode.data.trim().length > 0) {
		                parent.textNodes.push(new TextContainer(context, childNode, parent.styles));
		            }
		            else if (isElementNode(childNode)) {
		                if (isSlotElement(childNode) && childNode.assignedNodes) {
		                    childNode.assignedNodes().forEach(function (childNode) { return parseNodeTree(context, childNode, parent, root); });
		                }
		                else {
		                    var container = createContainer(context, childNode);
		                    if (container.styles.isVisible()) {
		                        if (createsRealStackingContext(childNode, container, root)) {
		                            container.flags |= 4 /* CREATES_REAL_STACKING_CONTEXT */;
		                        }
		                        else if (createsStackingContext(container.styles)) {
		                            container.flags |= 2 /* CREATES_STACKING_CONTEXT */;
		                        }
		                        if (LIST_OWNERS.indexOf(childNode.tagName) !== -1) {
		                            container.flags |= 8 /* IS_LIST_OWNER */;
		                        }
		                        parent.elements.push(container);
		                        childNode.slot;
		                        if (childNode.shadowRoot) {
		                            parseNodeTree(context, childNode.shadowRoot, container, root);
		                        }
		                        else if (!isTextareaElement(childNode) &&
		                            !isSVGElement(childNode) &&
		                            !isSelectElement(childNode)) {
		                            parseNodeTree(context, childNode, container, root);
		                        }
		                    }
		                }
		            }
		        }
		    };
		    var createContainer = function (context, element) {
		        if (isImageElement(element)) {
		            return new ImageElementContainer(context, element);
		        }
		        if (isCanvasElement(element)) {
		            return new CanvasElementContainer(context, element);
		        }
		        if (isSVGElement(element)) {
		            return new SVGElementContainer(context, element);
		        }
		        if (isLIElement(element)) {
		            return new LIElementContainer(context, element);
		        }
		        if (isOLElement(element)) {
		            return new OLElementContainer(context, element);
		        }
		        if (isInputElement(element)) {
		            return new InputElementContainer(context, element);
		        }
		        if (isSelectElement(element)) {
		            return new SelectElementContainer(context, element);
		        }
		        if (isTextareaElement(element)) {
		            return new TextareaElementContainer(context, element);
		        }
		        if (isIFrameElement(element)) {
		            return new IFrameElementContainer(context, element);
		        }
		        return new ElementContainer(context, element);
		    };
		    var parseTree = function (context, element) {
		        var container = createContainer(context, element);
		        container.flags |= 4 /* CREATES_REAL_STACKING_CONTEXT */;
		        parseNodeTree(context, element, container, container);
		        return container;
		    };
		    var createsRealStackingContext = function (node, container, root) {
		        return (container.styles.isPositionedWithZIndex() ||
		            container.styles.opacity < 1 ||
		            container.styles.isTransformed() ||
		            (isBodyElement(node) && root.styles.isTransparent()));
		    };
		    var createsStackingContext = function (styles) { return styles.isPositioned() || styles.isFloating(); };
		    var isTextNode = function (node) { return node.nodeType === Node.TEXT_NODE; };
		    var isElementNode = function (node) { return node.nodeType === Node.ELEMENT_NODE; };
		    var isHTMLElementNode = function (node) {
		        return isElementNode(node) && typeof node.style !== 'undefined' && !isSVGElementNode(node);
		    };
		    var isSVGElementNode = function (element) {
		        return typeof element.className === 'object';
		    };
		    var isLIElement = function (node) { return node.tagName === 'LI'; };
		    var isOLElement = function (node) { return node.tagName === 'OL'; };
		    var isInputElement = function (node) { return node.tagName === 'INPUT'; };
		    var isHTMLElement = function (node) { return node.tagName === 'HTML'; };
		    var isSVGElement = function (node) { return node.tagName === 'svg'; };
		    var isBodyElement = function (node) { return node.tagName === 'BODY'; };
		    var isCanvasElement = function (node) { return node.tagName === 'CANVAS'; };
		    var isVideoElement = function (node) { return node.tagName === 'VIDEO'; };
		    var isImageElement = function (node) { return node.tagName === 'IMG'; };
		    var isIFrameElement = function (node) { return node.tagName === 'IFRAME'; };
		    var isStyleElement = function (node) { return node.tagName === 'STYLE'; };
		    var isScriptElement = function (node) { return node.tagName === 'SCRIPT'; };
		    var isTextareaElement = function (node) { return node.tagName === 'TEXTAREA'; };
		    var isSelectElement = function (node) { return node.tagName === 'SELECT'; };
		    var isSlotElement = function (node) { return node.tagName === 'SLOT'; };
		    // https://html.spec.whatwg.org/multipage/custom-elements.html#valid-custom-element-name
		    var isCustomElement = function (node) { return node.tagName.indexOf('-') > 0; };

		    var CounterState = /** @class */ (function () {
		        function CounterState() {
		            this.counters = {};
		        }
		        CounterState.prototype.getCounterValue = function (name) {
		            var counter = this.counters[name];
		            if (counter && counter.length) {
		                return counter[counter.length - 1];
		            }
		            return 1;
		        };
		        CounterState.prototype.getCounterValues = function (name) {
		            var counter = this.counters[name];
		            return counter ? counter : [];
		        };
		        CounterState.prototype.pop = function (counters) {
		            var _this = this;
		            counters.forEach(function (counter) { return _this.counters[counter].pop(); });
		        };
		        CounterState.prototype.parse = function (style) {
		            var _this = this;
		            var counterIncrement = style.counterIncrement;
		            var counterReset = style.counterReset;
		            var canReset = true;
		            if (counterIncrement !== null) {
		                counterIncrement.forEach(function (entry) {
		                    var counter = _this.counters[entry.counter];
		                    if (counter && entry.increment !== 0) {
		                        canReset = false;
		                        if (!counter.length) {
		                            counter.push(1);
		                        }
		                        counter[Math.max(0, counter.length - 1)] += entry.increment;
		                    }
		                });
		            }
		            var counterNames = [];
		            if (canReset) {
		                counterReset.forEach(function (entry) {
		                    var counter = _this.counters[entry.counter];
		                    counterNames.push(entry.counter);
		                    if (!counter) {
		                        counter = _this.counters[entry.counter] = [];
		                    }
		                    counter.push(entry.reset);
		                });
		            }
		            return counterNames;
		        };
		        return CounterState;
		    }());
		    var ROMAN_UPPER = {
		        integers: [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1],
		        values: ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I']
		    };
		    var ARMENIAN = {
		        integers: [
		            9000, 8000, 7000, 6000, 5000, 4000, 3000, 2000, 1000, 900, 800, 700, 600, 500, 400, 300, 200, 100, 90, 80, 70,
		            60, 50, 40, 30, 20, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
		        ],
		        values: [
		            'Ք',
		            'Փ',
		            'Ւ',
		            'Ց',
		            'Ր',
		            'Տ',
		            'Վ',
		            'Ս',
		            'Ռ',
		            'Ջ',
		            'Պ',
		            'Չ',
		            'Ո',
		            'Շ',
		            'Ն',
		            'Յ',
		            'Մ',
		            'Ճ',
		            'Ղ',
		            'Ձ',
		            'Հ',
		            'Կ',
		            'Ծ',
		            'Խ',
		            'Լ',
		            'Ի',
		            'Ժ',
		            'Թ',
		            'Ը',
		            'Է',
		            'Զ',
		            'Ե',
		            'Դ',
		            'Գ',
		            'Բ',
		            'Ա'
		        ]
		    };
		    var HEBREW = {
		        integers: [
		            10000, 9000, 8000, 7000, 6000, 5000, 4000, 3000, 2000, 1000, 400, 300, 200, 100, 90, 80, 70, 60, 50, 40, 30, 20,
		            19, 18, 17, 16, 15, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
		        ],
		        values: [
		            'י׳',
		            'ט׳',
		            'ח׳',
		            'ז׳',
		            'ו׳',
		            'ה׳',
		            'ד׳',
		            'ג׳',
		            'ב׳',
		            'א׳',
		            'ת',
		            'ש',
		            'ר',
		            'ק',
		            'צ',
		            'פ',
		            'ע',
		            'ס',
		            'נ',
		            'מ',
		            'ל',
		            'כ',
		            'יט',
		            'יח',
		            'יז',
		            'טז',
		            'טו',
		            'י',
		            'ט',
		            'ח',
		            'ז',
		            'ו',
		            'ה',
		            'ד',
		            'ג',
		            'ב',
		            'א'
		        ]
		    };
		    var GEORGIAN = {
		        integers: [
		            10000, 9000, 8000, 7000, 6000, 5000, 4000, 3000, 2000, 1000, 900, 800, 700, 600, 500, 400, 300, 200, 100, 90,
		            80, 70, 60, 50, 40, 30, 20, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
		        ],
		        values: [
		            'ჵ',
		            'ჰ',
		            'ჯ',
		            'ჴ',
		            'ხ',
		            'ჭ',
		            'წ',
		            'ძ',
		            'ც',
		            'ჩ',
		            'შ',
		            'ყ',
		            'ღ',
		            'ქ',
		            'ფ',
		            'ჳ',
		            'ტ',
		            'ს',
		            'რ',
		            'ჟ',
		            'პ',
		            'ო',
		            'ჲ',
		            'ნ',
		            'მ',
		            'ლ',
		            'კ',
		            'ი',
		            'თ',
		            'ჱ',
		            'ზ',
		            'ვ',
		            'ე',
		            'დ',
		            'გ',
		            'ბ',
		            'ა'
		        ]
		    };
		    var createAdditiveCounter = function (value, min, max, symbols, fallback, suffix) {
		        if (value < min || value > max) {
		            return createCounterText(value, fallback, suffix.length > 0);
		        }
		        return (symbols.integers.reduce(function (string, integer, index) {
		            while (value >= integer) {
		                value -= integer;
		                string += symbols.values[index];
		            }
		            return string;
		        }, '') + suffix);
		    };
		    var createCounterStyleWithSymbolResolver = function (value, codePointRangeLength, isNumeric, resolver) {
		        var string = '';
		        do {
		            if (!isNumeric) {
		                value--;
		            }
		            string = resolver(value) + string;
		            value /= codePointRangeLength;
		        } while (value * codePointRangeLength >= codePointRangeLength);
		        return string;
		    };
		    var createCounterStyleFromRange = function (value, codePointRangeStart, codePointRangeEnd, isNumeric, suffix) {
		        var codePointRangeLength = codePointRangeEnd - codePointRangeStart + 1;
		        return ((value < 0 ? '-' : '') +
		            (createCounterStyleWithSymbolResolver(Math.abs(value), codePointRangeLength, isNumeric, function (codePoint) {
		                return fromCodePoint$1(Math.floor(codePoint % codePointRangeLength) + codePointRangeStart);
		            }) +
		                suffix));
		    };
		    var createCounterStyleFromSymbols = function (value, symbols, suffix) {
		        if (suffix === void 0) { suffix = '. '; }
		        var codePointRangeLength = symbols.length;
		        return (createCounterStyleWithSymbolResolver(Math.abs(value), codePointRangeLength, false, function (codePoint) { return symbols[Math.floor(codePoint % codePointRangeLength)]; }) + suffix);
		    };
		    var CJK_ZEROS = 1 << 0;
		    var CJK_TEN_COEFFICIENTS = 1 << 1;
		    var CJK_TEN_HIGH_COEFFICIENTS = 1 << 2;
		    var CJK_HUNDRED_COEFFICIENTS = 1 << 3;
		    var createCJKCounter = function (value, numbers, multipliers, negativeSign, suffix, flags) {
		        if (value < -9999 || value > 9999) {
		            return createCounterText(value, 4 /* CJK_DECIMAL */, suffix.length > 0);
		        }
		        var tmp = Math.abs(value);
		        var string = suffix;
		        if (tmp === 0) {
		            return numbers[0] + string;
		        }
		        for (var digit = 0; tmp > 0 && digit <= 4; digit++) {
		            var coefficient = tmp % 10;
		            if (coefficient === 0 && contains(flags, CJK_ZEROS) && string !== '') {
		                string = numbers[coefficient] + string;
		            }
		            else if (coefficient > 1 ||
		                (coefficient === 1 && digit === 0) ||
		                (coefficient === 1 && digit === 1 && contains(flags, CJK_TEN_COEFFICIENTS)) ||
		                (coefficient === 1 && digit === 1 && contains(flags, CJK_TEN_HIGH_COEFFICIENTS) && value > 100) ||
		                (coefficient === 1 && digit > 1 && contains(flags, CJK_HUNDRED_COEFFICIENTS))) {
		                string = numbers[coefficient] + (digit > 0 ? multipliers[digit - 1] : '') + string;
		            }
		            else if (coefficient === 1 && digit > 0) {
		                string = multipliers[digit - 1] + string;
		            }
		            tmp = Math.floor(tmp / 10);
		        }
		        return (value < 0 ? negativeSign : '') + string;
		    };
		    var CHINESE_INFORMAL_MULTIPLIERS = '十百千萬';
		    var CHINESE_FORMAL_MULTIPLIERS = '拾佰仟萬';
		    var JAPANESE_NEGATIVE = 'マイナス';
		    var KOREAN_NEGATIVE = '마이너스';
		    var createCounterText = function (value, type, appendSuffix) {
		        var defaultSuffix = appendSuffix ? '. ' : '';
		        var cjkSuffix = appendSuffix ? '、' : '';
		        var koreanSuffix = appendSuffix ? ', ' : '';
		        var spaceSuffix = appendSuffix ? ' ' : '';
		        switch (type) {
		            case 0 /* DISC */:
		                return '•' + spaceSuffix;
		            case 1 /* CIRCLE */:
		                return '◦' + spaceSuffix;
		            case 2 /* SQUARE */:
		                return '◾' + spaceSuffix;
		            case 5 /* DECIMAL_LEADING_ZERO */:
		                var string = createCounterStyleFromRange(value, 48, 57, true, defaultSuffix);
		                return string.length < 4 ? "0" + string : string;
		            case 4 /* CJK_DECIMAL */:
		                return createCounterStyleFromSymbols(value, '〇一二三四五六七八九', cjkSuffix);
		            case 6 /* LOWER_ROMAN */:
		                return createAdditiveCounter(value, 1, 3999, ROMAN_UPPER, 3 /* DECIMAL */, defaultSuffix).toLowerCase();
		            case 7 /* UPPER_ROMAN */:
		                return createAdditiveCounter(value, 1, 3999, ROMAN_UPPER, 3 /* DECIMAL */, defaultSuffix);
		            case 8 /* LOWER_GREEK */:
		                return createCounterStyleFromRange(value, 945, 969, false, defaultSuffix);
		            case 9 /* LOWER_ALPHA */:
		                return createCounterStyleFromRange(value, 97, 122, false, defaultSuffix);
		            case 10 /* UPPER_ALPHA */:
		                return createCounterStyleFromRange(value, 65, 90, false, defaultSuffix);
		            case 11 /* ARABIC_INDIC */:
		                return createCounterStyleFromRange(value, 1632, 1641, true, defaultSuffix);
		            case 12 /* ARMENIAN */:
		            case 49 /* UPPER_ARMENIAN */:
		                return createAdditiveCounter(value, 1, 9999, ARMENIAN, 3 /* DECIMAL */, defaultSuffix);
		            case 35 /* LOWER_ARMENIAN */:
		                return createAdditiveCounter(value, 1, 9999, ARMENIAN, 3 /* DECIMAL */, defaultSuffix).toLowerCase();
		            case 13 /* BENGALI */:
		                return createCounterStyleFromRange(value, 2534, 2543, true, defaultSuffix);
		            case 14 /* CAMBODIAN */:
		            case 30 /* KHMER */:
		                return createCounterStyleFromRange(value, 6112, 6121, true, defaultSuffix);
		            case 15 /* CJK_EARTHLY_BRANCH */:
		                return createCounterStyleFromSymbols(value, '子丑寅卯辰巳午未申酉戌亥', cjkSuffix);
		            case 16 /* CJK_HEAVENLY_STEM */:
		                return createCounterStyleFromSymbols(value, '甲乙丙丁戊己庚辛壬癸', cjkSuffix);
		            case 17 /* CJK_IDEOGRAPHIC */:
		            case 48 /* TRAD_CHINESE_INFORMAL */:
		                return createCJKCounter(value, '零一二三四五六七八九', CHINESE_INFORMAL_MULTIPLIERS, '負', cjkSuffix, CJK_TEN_COEFFICIENTS | CJK_TEN_HIGH_COEFFICIENTS | CJK_HUNDRED_COEFFICIENTS);
		            case 47 /* TRAD_CHINESE_FORMAL */:
		                return createCJKCounter(value, '零壹貳參肆伍陸柒捌玖', CHINESE_FORMAL_MULTIPLIERS, '負', cjkSuffix, CJK_ZEROS | CJK_TEN_COEFFICIENTS | CJK_TEN_HIGH_COEFFICIENTS | CJK_HUNDRED_COEFFICIENTS);
		            case 42 /* SIMP_CHINESE_INFORMAL */:
		                return createCJKCounter(value, '零一二三四五六七八九', CHINESE_INFORMAL_MULTIPLIERS, '负', cjkSuffix, CJK_TEN_COEFFICIENTS | CJK_TEN_HIGH_COEFFICIENTS | CJK_HUNDRED_COEFFICIENTS);
		            case 41 /* SIMP_CHINESE_FORMAL */:
		                return createCJKCounter(value, '零壹贰叁肆伍陆柒捌玖', CHINESE_FORMAL_MULTIPLIERS, '负', cjkSuffix, CJK_ZEROS | CJK_TEN_COEFFICIENTS | CJK_TEN_HIGH_COEFFICIENTS | CJK_HUNDRED_COEFFICIENTS);
		            case 26 /* JAPANESE_INFORMAL */:
		                return createCJKCounter(value, '〇一二三四五六七八九', '十百千万', JAPANESE_NEGATIVE, cjkSuffix, 0);
		            case 25 /* JAPANESE_FORMAL */:
		                return createCJKCounter(value, '零壱弐参四伍六七八九', '拾百千万', JAPANESE_NEGATIVE, cjkSuffix, CJK_ZEROS | CJK_TEN_COEFFICIENTS | CJK_TEN_HIGH_COEFFICIENTS);
		            case 31 /* KOREAN_HANGUL_FORMAL */:
		                return createCJKCounter(value, '영일이삼사오육칠팔구', '십백천만', KOREAN_NEGATIVE, koreanSuffix, CJK_ZEROS | CJK_TEN_COEFFICIENTS | CJK_TEN_HIGH_COEFFICIENTS);
		            case 33 /* KOREAN_HANJA_INFORMAL */:
		                return createCJKCounter(value, '零一二三四五六七八九', '十百千萬', KOREAN_NEGATIVE, koreanSuffix, 0);
		            case 32 /* KOREAN_HANJA_FORMAL */:
		                return createCJKCounter(value, '零壹貳參四五六七八九', '拾百千', KOREAN_NEGATIVE, koreanSuffix, CJK_ZEROS | CJK_TEN_COEFFICIENTS | CJK_TEN_HIGH_COEFFICIENTS);
		            case 18 /* DEVANAGARI */:
		                return createCounterStyleFromRange(value, 0x966, 0x96f, true, defaultSuffix);
		            case 20 /* GEORGIAN */:
		                return createAdditiveCounter(value, 1, 19999, GEORGIAN, 3 /* DECIMAL */, defaultSuffix);
		            case 21 /* GUJARATI */:
		                return createCounterStyleFromRange(value, 0xae6, 0xaef, true, defaultSuffix);
		            case 22 /* GURMUKHI */:
		                return createCounterStyleFromRange(value, 0xa66, 0xa6f, true, defaultSuffix);
		            case 22 /* HEBREW */:
		                return createAdditiveCounter(value, 1, 10999, HEBREW, 3 /* DECIMAL */, defaultSuffix);
		            case 23 /* HIRAGANA */:
		                return createCounterStyleFromSymbols(value, 'あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわゐゑをん');
		            case 24 /* HIRAGANA_IROHA */:
		                return createCounterStyleFromSymbols(value, 'いろはにほへとちりぬるをわかよたれそつねならむうゐのおくやまけふこえてあさきゆめみしゑひもせす');
		            case 27 /* KANNADA */:
		                return createCounterStyleFromRange(value, 0xce6, 0xcef, true, defaultSuffix);
		            case 28 /* KATAKANA */:
		                return createCounterStyleFromSymbols(value, 'アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヰヱヲン', cjkSuffix);
		            case 29 /* KATAKANA_IROHA */:
		                return createCounterStyleFromSymbols(value, 'イロハニホヘトチリヌルヲワカヨタレソツネナラムウヰノオクヤマケフコエテアサキユメミシヱヒモセス', cjkSuffix);
		            case 34 /* LAO */:
		                return createCounterStyleFromRange(value, 0xed0, 0xed9, true, defaultSuffix);
		            case 37 /* MONGOLIAN */:
		                return createCounterStyleFromRange(value, 0x1810, 0x1819, true, defaultSuffix);
		            case 38 /* MYANMAR */:
		                return createCounterStyleFromRange(value, 0x1040, 0x1049, true, defaultSuffix);
		            case 39 /* ORIYA */:
		                return createCounterStyleFromRange(value, 0xb66, 0xb6f, true, defaultSuffix);
		            case 40 /* PERSIAN */:
		                return createCounterStyleFromRange(value, 0x6f0, 0x6f9, true, defaultSuffix);
		            case 43 /* TAMIL */:
		                return createCounterStyleFromRange(value, 0xbe6, 0xbef, true, defaultSuffix);
		            case 44 /* TELUGU */:
		                return createCounterStyleFromRange(value, 0xc66, 0xc6f, true, defaultSuffix);
		            case 45 /* THAI */:
		                return createCounterStyleFromRange(value, 0xe50, 0xe59, true, defaultSuffix);
		            case 46 /* TIBETAN */:
		                return createCounterStyleFromRange(value, 0xf20, 0xf29, true, defaultSuffix);
		            case 3 /* DECIMAL */:
		            default:
		                return createCounterStyleFromRange(value, 48, 57, true, defaultSuffix);
		        }
		    };

		    var IGNORE_ATTRIBUTE = 'data-html2canvas-ignore';
		    var DocumentCloner = /** @class */ (function () {
		        function DocumentCloner(context, element, options) {
		            this.context = context;
		            this.options = options;
		            this.scrolledElements = [];
		            this.referenceElement = element;
		            this.counters = new CounterState();
		            this.quoteDepth = 0;
		            if (!element.ownerDocument) {
		                throw new Error('Cloned element does not have an owner document');
		            }
		            this.documentElement = this.cloneNode(element.ownerDocument.documentElement, false);
		        }
		        DocumentCloner.prototype.toIFrame = function (ownerDocument, windowSize) {
		            var _this = this;
		            var iframe = createIFrameContainer(ownerDocument, windowSize);
		            if (!iframe.contentWindow) {
		                return Promise.reject("Unable to find iframe window");
		            }
		            var scrollX = ownerDocument.defaultView.pageXOffset;
		            var scrollY = ownerDocument.defaultView.pageYOffset;
		            var cloneWindow = iframe.contentWindow;
		            var documentClone = cloneWindow.document;
		            /* Chrome doesn't detect relative background-images assigned in inline <style> sheets when fetched through getComputedStyle
		             if window url is about:blank, we can assign the url to current by writing onto the document
		             */
		            var iframeLoad = iframeLoader(iframe).then(function () { return __awaiter(_this, void 0, void 0, function () {
		                var onclone, referenceElement;
		                return __generator(this, function (_a) {
		                    switch (_a.label) {
		                        case 0:
		                            this.scrolledElements.forEach(restoreNodeScroll);
		                            if (cloneWindow) {
		                                cloneWindow.scrollTo(windowSize.left, windowSize.top);
		                                if (/(iPad|iPhone|iPod)/g.test(navigator.userAgent) &&
		                                    (cloneWindow.scrollY !== windowSize.top || cloneWindow.scrollX !== windowSize.left)) {
		                                    this.context.logger.warn('Unable to restore scroll position for cloned document');
		                                    this.context.windowBounds = this.context.windowBounds.add(cloneWindow.scrollX - windowSize.left, cloneWindow.scrollY - windowSize.top, 0, 0);
		                                }
		                            }
		                            onclone = this.options.onclone;
		                            referenceElement = this.clonedReferenceElement;
		                            if (typeof referenceElement === 'undefined') {
		                                return [2 /*return*/, Promise.reject("Error finding the " + this.referenceElement.nodeName + " in the cloned document")];
		                            }
		                            if (!(documentClone.fonts && documentClone.fonts.ready)) return [3 /*break*/, 2];
		                            return [4 /*yield*/, documentClone.fonts.ready];
		                        case 1:
		                            _a.sent();
		                            _a.label = 2;
		                        case 2:
		                            if (!/(AppleWebKit)/g.test(navigator.userAgent)) return [3 /*break*/, 4];
		                            return [4 /*yield*/, imagesReady(documentClone)];
		                        case 3:
		                            _a.sent();
		                            _a.label = 4;
		                        case 4:
		                            if (typeof onclone === 'function') {
		                                return [2 /*return*/, Promise.resolve()
		                                        .then(function () { return onclone(documentClone, referenceElement); })
		                                        .then(function () { return iframe; })];
		                            }
		                            return [2 /*return*/, iframe];
		                    }
		                });
		            }); });
		            documentClone.open();
		            documentClone.write(serializeDoctype(document.doctype) + "<html></html>");
		            // Chrome scrolls the parent document for some reason after the write to the cloned window???
		            restoreOwnerScroll(this.referenceElement.ownerDocument, scrollX, scrollY);
		            documentClone.replaceChild(documentClone.adoptNode(this.documentElement), documentClone.documentElement);
		            documentClone.close();
		            return iframeLoad;
		        };
		        DocumentCloner.prototype.createElementClone = function (node) {
		            if (isDebugging(node, 2 /* CLONE */)) {
		                debugger;
		            }
		            if (isCanvasElement(node)) {
		                return this.createCanvasClone(node);
		            }
		            if (isVideoElement(node)) {
		                return this.createVideoClone(node);
		            }
		            if (isStyleElement(node)) {
		                return this.createStyleClone(node);
		            }
		            var clone = node.cloneNode(false);
		            if (isImageElement(clone)) {
		                if (isImageElement(node) && node.currentSrc && node.currentSrc !== node.src) {
		                    clone.src = node.currentSrc;
		                    clone.srcset = '';
		                }
		                if (clone.loading === 'lazy') {
		                    clone.loading = 'eager';
		                }
		            }
		            if (isCustomElement(clone)) {
		                return this.createCustomElementClone(clone);
		            }
		            return clone;
		        };
		        DocumentCloner.prototype.createCustomElementClone = function (node) {
		            var clone = document.createElement('html2canvascustomelement');
		            copyCSSStyles(node.style, clone);
		            return clone;
		        };
		        DocumentCloner.prototype.createStyleClone = function (node) {
		            try {
		                var sheet = node.sheet;
		                if (sheet && sheet.cssRules) {
		                    var css = [].slice.call(sheet.cssRules, 0).reduce(function (css, rule) {
		                        if (rule && typeof rule.cssText === 'string') {
		                            return css + rule.cssText;
		                        }
		                        return css;
		                    }, '');
		                    var style = node.cloneNode(false);
		                    style.textContent = css;
		                    return style;
		                }
		            }
		            catch (e) {
		                // accessing node.sheet.cssRules throws a DOMException
		                this.context.logger.error('Unable to access cssRules property', e);
		                if (e.name !== 'SecurityError') {
		                    throw e;
		                }
		            }
		            return node.cloneNode(false);
		        };
		        DocumentCloner.prototype.createCanvasClone = function (canvas) {
		            var _a;
		            if (this.options.inlineImages && canvas.ownerDocument) {
		                var img = canvas.ownerDocument.createElement('img');
		                try {
		                    img.src = canvas.toDataURL();
		                    return img;
		                }
		                catch (e) {
		                    this.context.logger.info("Unable to inline canvas contents, canvas is tainted", canvas);
		                }
		            }
		            var clonedCanvas = canvas.cloneNode(false);
		            try {
		                clonedCanvas.width = canvas.width;
		                clonedCanvas.height = canvas.height;
		                var ctx = canvas.getContext('2d');
		                var clonedCtx = clonedCanvas.getContext('2d');
		                if (clonedCtx) {
		                    if (!this.options.allowTaint && ctx) {
		                        clonedCtx.putImageData(ctx.getImageData(0, 0, canvas.width, canvas.height), 0, 0);
		                    }
		                    else {
		                        var gl = (_a = canvas.getContext('webgl2')) !== null && _a !== void 0 ? _a : canvas.getContext('webgl');
		                        if (gl) {
		                            var attribs = gl.getContextAttributes();
		                            if ((attribs === null || attribs === void 0 ? void 0 : attribs.preserveDrawingBuffer) === false) {
		                                this.context.logger.warn('Unable to clone WebGL context as it has preserveDrawingBuffer=false', canvas);
		                            }
		                        }
		                        clonedCtx.drawImage(canvas, 0, 0);
		                    }
		                }
		                return clonedCanvas;
		            }
		            catch (e) {
		                this.context.logger.info("Unable to clone canvas as it is tainted", canvas);
		            }
		            return clonedCanvas;
		        };
		        DocumentCloner.prototype.createVideoClone = function (video) {
		            var canvas = video.ownerDocument.createElement('canvas');
		            canvas.width = video.offsetWidth;
		            canvas.height = video.offsetHeight;
		            var ctx = canvas.getContext('2d');
		            try {
		                if (ctx) {
		                    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
		                    if (!this.options.allowTaint) {
		                        ctx.getImageData(0, 0, canvas.width, canvas.height);
		                    }
		                }
		                return canvas;
		            }
		            catch (e) {
		                this.context.logger.info("Unable to clone video as it is tainted", video);
		            }
		            var blankCanvas = video.ownerDocument.createElement('canvas');
		            blankCanvas.width = video.offsetWidth;
		            blankCanvas.height = video.offsetHeight;
		            return blankCanvas;
		        };
		        DocumentCloner.prototype.appendChildNode = function (clone, child, copyStyles) {
		            if (!isElementNode(child) ||
		                (!isScriptElement(child) &&
		                    !child.hasAttribute(IGNORE_ATTRIBUTE) &&
		                    (typeof this.options.ignoreElements !== 'function' || !this.options.ignoreElements(child)))) {
		                if (!this.options.copyStyles || !isElementNode(child) || !isStyleElement(child)) {
		                    clone.appendChild(this.cloneNode(child, copyStyles));
		                }
		            }
		        };
		        DocumentCloner.prototype.cloneChildNodes = function (node, clone, copyStyles) {
		            var _this = this;
		            for (var child = node.shadowRoot ? node.shadowRoot.firstChild : node.firstChild; child; child = child.nextSibling) {
		                if (isElementNode(child) && isSlotElement(child) && typeof child.assignedNodes === 'function') {
		                    var assignedNodes = child.assignedNodes();
		                    if (assignedNodes.length) {
		                        assignedNodes.forEach(function (assignedNode) { return _this.appendChildNode(clone, assignedNode, copyStyles); });
		                    }
		                }
		                else {
		                    this.appendChildNode(clone, child, copyStyles);
		                }
		            }
		        };
		        DocumentCloner.prototype.cloneNode = function (node, copyStyles) {
		            if (isTextNode(node)) {
		                return document.createTextNode(node.data);
		            }
		            if (!node.ownerDocument) {
		                return node.cloneNode(false);
		            }
		            var window = node.ownerDocument.defaultView;
		            if (window && isElementNode(node) && (isHTMLElementNode(node) || isSVGElementNode(node))) {
		                var clone = this.createElementClone(node);
		                clone.style.transitionProperty = 'none';
		                var style = window.getComputedStyle(node);
		                var styleBefore = window.getComputedStyle(node, ':before');
		                var styleAfter = window.getComputedStyle(node, ':after');
		                if (this.referenceElement === node && isHTMLElementNode(clone)) {
		                    this.clonedReferenceElement = clone;
		                }
		                if (isBodyElement(clone)) {
		                    createPseudoHideStyles(clone);
		                }
		                var counters = this.counters.parse(new CSSParsedCounterDeclaration(this.context, style));
		                var before = this.resolvePseudoContent(node, clone, styleBefore, PseudoElementType.BEFORE);
		                if (isCustomElement(node)) {
		                    copyStyles = true;
		                }
		                if (!isVideoElement(node)) {
		                    this.cloneChildNodes(node, clone, copyStyles);
		                }
		                if (before) {
		                    clone.insertBefore(before, clone.firstChild);
		                }
		                var after = this.resolvePseudoContent(node, clone, styleAfter, PseudoElementType.AFTER);
		                if (after) {
		                    clone.appendChild(after);
		                }
		                this.counters.pop(counters);
		                if ((style && (this.options.copyStyles || isSVGElementNode(node)) && !isIFrameElement(node)) ||
		                    copyStyles) {
		                    copyCSSStyles(style, clone);
		                }
		                if (node.scrollTop !== 0 || node.scrollLeft !== 0) {
		                    this.scrolledElements.push([clone, node.scrollLeft, node.scrollTop]);
		                }
		                if ((isTextareaElement(node) || isSelectElement(node)) &&
		                    (isTextareaElement(clone) || isSelectElement(clone))) {
		                    clone.value = node.value;
		                }
		                return clone;
		            }
		            return node.cloneNode(false);
		        };
		        DocumentCloner.prototype.resolvePseudoContent = function (node, clone, style, pseudoElt) {
		            var _this = this;
		            if (!style) {
		                return;
		            }
		            var value = style.content;
		            var document = clone.ownerDocument;
		            if (!document || !value || value === 'none' || value === '-moz-alt-content' || style.display === 'none') {
		                return;
		            }
		            this.counters.parse(new CSSParsedCounterDeclaration(this.context, style));
		            var declaration = new CSSParsedPseudoDeclaration(this.context, style);
		            var anonymousReplacedElement = document.createElement('html2canvaspseudoelement');
		            copyCSSStyles(style, anonymousReplacedElement);
		            declaration.content.forEach(function (token) {
		                if (token.type === 0 /* STRING_TOKEN */) {
		                    anonymousReplacedElement.appendChild(document.createTextNode(token.value));
		                }
		                else if (token.type === 22 /* URL_TOKEN */) {
		                    var img = document.createElement('img');
		                    img.src = token.value;
		                    img.style.opacity = '1';
		                    anonymousReplacedElement.appendChild(img);
		                }
		                else if (token.type === 18 /* FUNCTION */) {
		                    if (token.name === 'attr') {
		                        var attr = token.values.filter(isIdentToken);
		                        if (attr.length) {
		                            anonymousReplacedElement.appendChild(document.createTextNode(node.getAttribute(attr[0].value) || ''));
		                        }
		                    }
		                    else if (token.name === 'counter') {
		                        var _a = token.values.filter(nonFunctionArgSeparator), counter = _a[0], counterStyle = _a[1];
		                        if (counter && isIdentToken(counter)) {
		                            var counterState = _this.counters.getCounterValue(counter.value);
		                            var counterType = counterStyle && isIdentToken(counterStyle)
		                                ? listStyleType.parse(_this.context, counterStyle.value)
		                                : 3 /* DECIMAL */;
		                            anonymousReplacedElement.appendChild(document.createTextNode(createCounterText(counterState, counterType, false)));
		                        }
		                    }
		                    else if (token.name === 'counters') {
		                        var _b = token.values.filter(nonFunctionArgSeparator), counter = _b[0], delim = _b[1], counterStyle = _b[2];
		                        if (counter && isIdentToken(counter)) {
		                            var counterStates = _this.counters.getCounterValues(counter.value);
		                            var counterType_1 = counterStyle && isIdentToken(counterStyle)
		                                ? listStyleType.parse(_this.context, counterStyle.value)
		                                : 3 /* DECIMAL */;
		                            var separator = delim && delim.type === 0 /* STRING_TOKEN */ ? delim.value : '';
		                            var text = counterStates
		                                .map(function (value) { return createCounterText(value, counterType_1, false); })
		                                .join(separator);
		                            anonymousReplacedElement.appendChild(document.createTextNode(text));
		                        }
		                    }
		                    else ;
		                }
		                else if (token.type === 20 /* IDENT_TOKEN */) {
		                    switch (token.value) {
		                        case 'open-quote':
		                            anonymousReplacedElement.appendChild(document.createTextNode(getQuote(declaration.quotes, _this.quoteDepth++, true)));
		                            break;
		                        case 'close-quote':
		                            anonymousReplacedElement.appendChild(document.createTextNode(getQuote(declaration.quotes, --_this.quoteDepth, false)));
		                            break;
		                        default:
		                            // safari doesn't parse string tokens correctly because of lack of quotes
		                            anonymousReplacedElement.appendChild(document.createTextNode(token.value));
		                    }
		                }
		            });
		            anonymousReplacedElement.className = PSEUDO_HIDE_ELEMENT_CLASS_BEFORE + " " + PSEUDO_HIDE_ELEMENT_CLASS_AFTER;
		            var newClassName = pseudoElt === PseudoElementType.BEFORE
		                ? " " + PSEUDO_HIDE_ELEMENT_CLASS_BEFORE
		                : " " + PSEUDO_HIDE_ELEMENT_CLASS_AFTER;
		            if (isSVGElementNode(clone)) {
		                clone.className.baseValue += newClassName;
		            }
		            else {
		                clone.className += newClassName;
		            }
		            return anonymousReplacedElement;
		        };
		        DocumentCloner.destroy = function (container) {
		            if (container.parentNode) {
		                container.parentNode.removeChild(container);
		                return true;
		            }
		            return false;
		        };
		        return DocumentCloner;
		    }());
		    var PseudoElementType;
		    (function (PseudoElementType) {
		        PseudoElementType[PseudoElementType["BEFORE"] = 0] = "BEFORE";
		        PseudoElementType[PseudoElementType["AFTER"] = 1] = "AFTER";
		    })(PseudoElementType || (PseudoElementType = {}));
		    var createIFrameContainer = function (ownerDocument, bounds) {
		        var cloneIframeContainer = ownerDocument.createElement('iframe');
		        cloneIframeContainer.className = 'html2canvas-container';
		        cloneIframeContainer.style.visibility = 'hidden';
		        cloneIframeContainer.style.position = 'fixed';
		        cloneIframeContainer.style.left = '-10000px';
		        cloneIframeContainer.style.top = '0px';
		        cloneIframeContainer.style.border = '0';
		        cloneIframeContainer.width = bounds.width.toString();
		        cloneIframeContainer.height = bounds.height.toString();
		        cloneIframeContainer.scrolling = 'no'; // ios won't scroll without it
		        cloneIframeContainer.setAttribute(IGNORE_ATTRIBUTE, 'true');
		        ownerDocument.body.appendChild(cloneIframeContainer);
		        return cloneIframeContainer;
		    };
		    var imageReady = function (img) {
		        return new Promise(function (resolve) {
		            if (img.complete) {
		                resolve();
		                return;
		            }
		            if (!img.src) {
		                resolve();
		                return;
		            }
		            img.onload = resolve;
		            img.onerror = resolve;
		        });
		    };
		    var imagesReady = function (document) {
		        return Promise.all([].slice.call(document.images, 0).map(imageReady));
		    };
		    var iframeLoader = function (iframe) {
		        return new Promise(function (resolve, reject) {
		            var cloneWindow = iframe.contentWindow;
		            if (!cloneWindow) {
		                return reject("No window assigned for iframe");
		            }
		            var documentClone = cloneWindow.document;
		            cloneWindow.onload = iframe.onload = function () {
		                cloneWindow.onload = iframe.onload = null;
		                var interval = setInterval(function () {
		                    if (documentClone.body.childNodes.length > 0 && documentClone.readyState === 'complete') {
		                        clearInterval(interval);
		                        resolve(iframe);
		                    }
		                }, 50);
		            };
		        });
		    };
		    var ignoredStyleProperties = [
		        'all',
		        'd',
		        'content' // Safari shows pseudoelements if content is set
		    ];
		    var copyCSSStyles = function (style, target) {
		        // Edge does not provide value for cssText
		        for (var i = style.length - 1; i >= 0; i--) {
		            var property = style.item(i);
		            if (ignoredStyleProperties.indexOf(property) === -1) {
		                target.style.setProperty(property, style.getPropertyValue(property));
		            }
		        }
		        return target;
		    };
		    var serializeDoctype = function (doctype) {
		        var str = '';
		        if (doctype) {
		            str += '<!DOCTYPE ';
		            if (doctype.name) {
		                str += doctype.name;
		            }
		            if (doctype.internalSubset) {
		                str += doctype.internalSubset;
		            }
		            if (doctype.publicId) {
		                str += "\"" + doctype.publicId + "\"";
		            }
		            if (doctype.systemId) {
		                str += "\"" + doctype.systemId + "\"";
		            }
		            str += '>';
		        }
		        return str;
		    };
		    var restoreOwnerScroll = function (ownerDocument, x, y) {
		        if (ownerDocument &&
		            ownerDocument.defaultView &&
		            (x !== ownerDocument.defaultView.pageXOffset || y !== ownerDocument.defaultView.pageYOffset)) {
		            ownerDocument.defaultView.scrollTo(x, y);
		        }
		    };
		    var restoreNodeScroll = function (_a) {
		        var element = _a[0], x = _a[1], y = _a[2];
		        element.scrollLeft = x;
		        element.scrollTop = y;
		    };
		    var PSEUDO_BEFORE = ':before';
		    var PSEUDO_AFTER = ':after';
		    var PSEUDO_HIDE_ELEMENT_CLASS_BEFORE = '___html2canvas___pseudoelement_before';
		    var PSEUDO_HIDE_ELEMENT_CLASS_AFTER = '___html2canvas___pseudoelement_after';
		    var PSEUDO_HIDE_ELEMENT_STYLE = "{\n    content: \"\" !important;\n    display: none !important;\n}";
		    var createPseudoHideStyles = function (body) {
		        createStyles(body, "." + PSEUDO_HIDE_ELEMENT_CLASS_BEFORE + PSEUDO_BEFORE + PSEUDO_HIDE_ELEMENT_STYLE + "\n         ." + PSEUDO_HIDE_ELEMENT_CLASS_AFTER + PSEUDO_AFTER + PSEUDO_HIDE_ELEMENT_STYLE);
		    };
		    var createStyles = function (body, styles) {
		        var document = body.ownerDocument;
		        if (document) {
		            var style = document.createElement('style');
		            style.textContent = styles;
		            body.appendChild(style);
		        }
		    };

		    var CacheStorage = /** @class */ (function () {
		        function CacheStorage() {
		        }
		        CacheStorage.getOrigin = function (url) {
		            var link = CacheStorage._link;
		            if (!link) {
		                return 'about:blank';
		            }
		            link.href = url;
		            link.href = link.href; // IE9, LOL! - http://jsfiddle.net/niklasvh/2e48b/
		            return link.protocol + link.hostname + link.port;
		        };
		        CacheStorage.isSameOrigin = function (src) {
		            return CacheStorage.getOrigin(src) === CacheStorage._origin;
		        };
		        CacheStorage.setContext = function (window) {
		            CacheStorage._link = window.document.createElement('a');
		            CacheStorage._origin = CacheStorage.getOrigin(window.location.href);
		        };
		        CacheStorage._origin = 'about:blank';
		        return CacheStorage;
		    }());
		    var Cache = /** @class */ (function () {
		        function Cache(context, _options) {
		            this.context = context;
		            this._options = _options;
		            // eslint-disable-next-line @typescript-eslint/no-explicit-any
		            this._cache = {};
		        }
		        Cache.prototype.addImage = function (src) {
		            var result = Promise.resolve();
		            if (this.has(src)) {
		                return result;
		            }
		            if (isBlobImage(src) || isRenderable(src)) {
		                (this._cache[src] = this.loadImage(src)).catch(function () {
		                    // prevent unhandled rejection
		                });
		                return result;
		            }
		            return result;
		        };
		        // eslint-disable-next-line @typescript-eslint/no-explicit-any
		        Cache.prototype.match = function (src) {
		            return this._cache[src];
		        };
		        Cache.prototype.loadImage = function (key) {
		            return __awaiter(this, void 0, void 0, function () {
		                var isSameOrigin, useCORS, useProxy, src;
		                var _this = this;
		                return __generator(this, function (_a) {
		                    switch (_a.label) {
		                        case 0:
		                            isSameOrigin = CacheStorage.isSameOrigin(key);
		                            useCORS = !isInlineImage(key) && this._options.useCORS === true && FEATURES.SUPPORT_CORS_IMAGES && !isSameOrigin;
		                            useProxy = !isInlineImage(key) &&
		                                !isSameOrigin &&
		                                !isBlobImage(key) &&
		                                typeof this._options.proxy === 'string' &&
		                                FEATURES.SUPPORT_CORS_XHR &&
		                                !useCORS;
		                            if (!isSameOrigin &&
		                                this._options.allowTaint === false &&
		                                !isInlineImage(key) &&
		                                !isBlobImage(key) &&
		                                !useProxy &&
		                                !useCORS) {
		                                return [2 /*return*/];
		                            }
		                            src = key;
		                            if (!useProxy) return [3 /*break*/, 2];
		                            return [4 /*yield*/, this.proxy(src)];
		                        case 1:
		                            src = _a.sent();
		                            _a.label = 2;
		                        case 2:
		                            this.context.logger.debug("Added image " + key.substring(0, 256));
		                            return [4 /*yield*/, new Promise(function (resolve, reject) {
		                                    var img = new Image();
		                                    img.onload = function () { return resolve(img); };
		                                    img.onerror = reject;
		                                    //ios safari 10.3 taints canvas with data urls unless crossOrigin is set to anonymous
		                                    if (isInlineBase64Image(src) || useCORS) {
		                                        img.crossOrigin = 'anonymous';
		                                    }
		                                    img.src = src;
		                                    if (img.complete === true) {
		                                        // Inline XML images may fail to parse, throwing an Error later on
		                                        setTimeout(function () { return resolve(img); }, 500);
		                                    }
		                                    if (_this._options.imageTimeout > 0) {
		                                        setTimeout(function () { return reject("Timed out (" + _this._options.imageTimeout + "ms) loading image"); }, _this._options.imageTimeout);
		                                    }
		                                })];
		                        case 3: return [2 /*return*/, _a.sent()];
		                    }
		                });
		            });
		        };
		        Cache.prototype.has = function (key) {
		            return typeof this._cache[key] !== 'undefined';
		        };
		        Cache.prototype.keys = function () {
		            return Promise.resolve(Object.keys(this._cache));
		        };
		        Cache.prototype.proxy = function (src) {
		            var _this = this;
		            var proxy = this._options.proxy;
		            if (!proxy) {
		                throw new Error('No proxy defined');
		            }
		            var key = src.substring(0, 256);
		            return new Promise(function (resolve, reject) {
		                var responseType = FEATURES.SUPPORT_RESPONSE_TYPE ? 'blob' : 'text';
		                var xhr = new XMLHttpRequest();
		                xhr.onload = function () {
		                    if (xhr.status === 200) {
		                        if (responseType === 'text') {
		                            resolve(xhr.response);
		                        }
		                        else {
		                            var reader_1 = new FileReader();
		                            reader_1.addEventListener('load', function () { return resolve(reader_1.result); }, false);
		                            reader_1.addEventListener('error', function (e) { return reject(e); }, false);
		                            reader_1.readAsDataURL(xhr.response);
		                        }
		                    }
		                    else {
		                        reject("Failed to proxy resource " + key + " with status code " + xhr.status);
		                    }
		                };
		                xhr.onerror = reject;
		                var queryString = proxy.indexOf('?') > -1 ? '&' : '?';
		                xhr.open('GET', "" + proxy + queryString + "url=" + encodeURIComponent(src) + "&responseType=" + responseType);
		                if (responseType !== 'text' && xhr instanceof XMLHttpRequest) {
		                    xhr.responseType = responseType;
		                }
		                if (_this._options.imageTimeout) {
		                    var timeout_1 = _this._options.imageTimeout;
		                    xhr.timeout = timeout_1;
		                    xhr.ontimeout = function () { return reject("Timed out (" + timeout_1 + "ms) proxying " + key); };
		                }
		                xhr.send();
		            });
		        };
		        return Cache;
		    }());
		    var INLINE_SVG = /^data:image\/svg\+xml/i;
		    var INLINE_BASE64 = /^data:image\/.*;base64,/i;
		    var INLINE_IMG = /^data:image\/.*/i;
		    var isRenderable = function (src) { return FEATURES.SUPPORT_SVG_DRAWING || !isSVG(src); };
		    var isInlineImage = function (src) { return INLINE_IMG.test(src); };
		    var isInlineBase64Image = function (src) { return INLINE_BASE64.test(src); };
		    var isBlobImage = function (src) { return src.substr(0, 4) === 'blob'; };
		    var isSVG = function (src) { return src.substr(-3).toLowerCase() === 'svg' || INLINE_SVG.test(src); };

		    var Vector = /** @class */ (function () {
		        function Vector(x, y) {
		            this.type = 0 /* VECTOR */;
		            this.x = x;
		            this.y = y;
		        }
		        Vector.prototype.add = function (deltaX, deltaY) {
		            return new Vector(this.x + deltaX, this.y + deltaY);
		        };
		        return Vector;
		    }());

		    var lerp = function (a, b, t) {
		        return new Vector(a.x + (b.x - a.x) * t, a.y + (b.y - a.y) * t);
		    };
		    var BezierCurve = /** @class */ (function () {
		        function BezierCurve(start, startControl, endControl, end) {
		            this.type = 1 /* BEZIER_CURVE */;
		            this.start = start;
		            this.startControl = startControl;
		            this.endControl = endControl;
		            this.end = end;
		        }
		        BezierCurve.prototype.subdivide = function (t, firstHalf) {
		            var ab = lerp(this.start, this.startControl, t);
		            var bc = lerp(this.startControl, this.endControl, t);
		            var cd = lerp(this.endControl, this.end, t);
		            var abbc = lerp(ab, bc, t);
		            var bccd = lerp(bc, cd, t);
		            var dest = lerp(abbc, bccd, t);
		            return firstHalf ? new BezierCurve(this.start, ab, abbc, dest) : new BezierCurve(dest, bccd, cd, this.end);
		        };
		        BezierCurve.prototype.add = function (deltaX, deltaY) {
		            return new BezierCurve(this.start.add(deltaX, deltaY), this.startControl.add(deltaX, deltaY), this.endControl.add(deltaX, deltaY), this.end.add(deltaX, deltaY));
		        };
		        BezierCurve.prototype.reverse = function () {
		            return new BezierCurve(this.end, this.endControl, this.startControl, this.start);
		        };
		        return BezierCurve;
		    }());
		    var isBezierCurve = function (path) { return path.type === 1 /* BEZIER_CURVE */; };

		    var BoundCurves = /** @class */ (function () {
		        function BoundCurves(element) {
		            var styles = element.styles;
		            var bounds = element.bounds;
		            var _a = getAbsoluteValueForTuple(styles.borderTopLeftRadius, bounds.width, bounds.height), tlh = _a[0], tlv = _a[1];
		            var _b = getAbsoluteValueForTuple(styles.borderTopRightRadius, bounds.width, bounds.height), trh = _b[0], trv = _b[1];
		            var _c = getAbsoluteValueForTuple(styles.borderBottomRightRadius, bounds.width, bounds.height), brh = _c[0], brv = _c[1];
		            var _d = getAbsoluteValueForTuple(styles.borderBottomLeftRadius, bounds.width, bounds.height), blh = _d[0], blv = _d[1];
		            var factors = [];
		            factors.push((tlh + trh) / bounds.width);
		            factors.push((blh + brh) / bounds.width);
		            factors.push((tlv + blv) / bounds.height);
		            factors.push((trv + brv) / bounds.height);
		            var maxFactor = Math.max.apply(Math, factors);
		            if (maxFactor > 1) {
		                tlh /= maxFactor;
		                tlv /= maxFactor;
		                trh /= maxFactor;
		                trv /= maxFactor;
		                brh /= maxFactor;
		                brv /= maxFactor;
		                blh /= maxFactor;
		                blv /= maxFactor;
		            }
		            var topWidth = bounds.width - trh;
		            var rightHeight = bounds.height - brv;
		            var bottomWidth = bounds.width - brh;
		            var leftHeight = bounds.height - blv;
		            var borderTopWidth = styles.borderTopWidth;
		            var borderRightWidth = styles.borderRightWidth;
		            var borderBottomWidth = styles.borderBottomWidth;
		            var borderLeftWidth = styles.borderLeftWidth;
		            var paddingTop = getAbsoluteValue(styles.paddingTop, element.bounds.width);
		            var paddingRight = getAbsoluteValue(styles.paddingRight, element.bounds.width);
		            var paddingBottom = getAbsoluteValue(styles.paddingBottom, element.bounds.width);
		            var paddingLeft = getAbsoluteValue(styles.paddingLeft, element.bounds.width);
		            this.topLeftBorderDoubleOuterBox =
		                tlh > 0 || tlv > 0
		                    ? getCurvePoints(bounds.left + borderLeftWidth / 3, bounds.top + borderTopWidth / 3, tlh - borderLeftWidth / 3, tlv - borderTopWidth / 3, CORNER.TOP_LEFT)
		                    : new Vector(bounds.left + borderLeftWidth / 3, bounds.top + borderTopWidth / 3);
		            this.topRightBorderDoubleOuterBox =
		                tlh > 0 || tlv > 0
		                    ? getCurvePoints(bounds.left + topWidth, bounds.top + borderTopWidth / 3, trh - borderRightWidth / 3, trv - borderTopWidth / 3, CORNER.TOP_RIGHT)
		                    : new Vector(bounds.left + bounds.width - borderRightWidth / 3, bounds.top + borderTopWidth / 3);
		            this.bottomRightBorderDoubleOuterBox =
		                brh > 0 || brv > 0
		                    ? getCurvePoints(bounds.left + bottomWidth, bounds.top + rightHeight, brh - borderRightWidth / 3, brv - borderBottomWidth / 3, CORNER.BOTTOM_RIGHT)
		                    : new Vector(bounds.left + bounds.width - borderRightWidth / 3, bounds.top + bounds.height - borderBottomWidth / 3);
		            this.bottomLeftBorderDoubleOuterBox =
		                blh > 0 || blv > 0
		                    ? getCurvePoints(bounds.left + borderLeftWidth / 3, bounds.top + leftHeight, blh - borderLeftWidth / 3, blv - borderBottomWidth / 3, CORNER.BOTTOM_LEFT)
		                    : new Vector(bounds.left + borderLeftWidth / 3, bounds.top + bounds.height - borderBottomWidth / 3);
		            this.topLeftBorderDoubleInnerBox =
		                tlh > 0 || tlv > 0
		                    ? getCurvePoints(bounds.left + (borderLeftWidth * 2) / 3, bounds.top + (borderTopWidth * 2) / 3, tlh - (borderLeftWidth * 2) / 3, tlv - (borderTopWidth * 2) / 3, CORNER.TOP_LEFT)
		                    : new Vector(bounds.left + (borderLeftWidth * 2) / 3, bounds.top + (borderTopWidth * 2) / 3);
		            this.topRightBorderDoubleInnerBox =
		                tlh > 0 || tlv > 0
		                    ? getCurvePoints(bounds.left + topWidth, bounds.top + (borderTopWidth * 2) / 3, trh - (borderRightWidth * 2) / 3, trv - (borderTopWidth * 2) / 3, CORNER.TOP_RIGHT)
		                    : new Vector(bounds.left + bounds.width - (borderRightWidth * 2) / 3, bounds.top + (borderTopWidth * 2) / 3);
		            this.bottomRightBorderDoubleInnerBox =
		                brh > 0 || brv > 0
		                    ? getCurvePoints(bounds.left + bottomWidth, bounds.top + rightHeight, brh - (borderRightWidth * 2) / 3, brv - (borderBottomWidth * 2) / 3, CORNER.BOTTOM_RIGHT)
		                    : new Vector(bounds.left + bounds.width - (borderRightWidth * 2) / 3, bounds.top + bounds.height - (borderBottomWidth * 2) / 3);
		            this.bottomLeftBorderDoubleInnerBox =
		                blh > 0 || blv > 0
		                    ? getCurvePoints(bounds.left + (borderLeftWidth * 2) / 3, bounds.top + leftHeight, blh - (borderLeftWidth * 2) / 3, blv - (borderBottomWidth * 2) / 3, CORNER.BOTTOM_LEFT)
		                    : new Vector(bounds.left + (borderLeftWidth * 2) / 3, bounds.top + bounds.height - (borderBottomWidth * 2) / 3);
		            this.topLeftBorderStroke =
		                tlh > 0 || tlv > 0
		                    ? getCurvePoints(bounds.left + borderLeftWidth / 2, bounds.top + borderTopWidth / 2, tlh - borderLeftWidth / 2, tlv - borderTopWidth / 2, CORNER.TOP_LEFT)
		                    : new Vector(bounds.left + borderLeftWidth / 2, bounds.top + borderTopWidth / 2);
		            this.topRightBorderStroke =
		                tlh > 0 || tlv > 0
		                    ? getCurvePoints(bounds.left + topWidth, bounds.top + borderTopWidth / 2, trh - borderRightWidth / 2, trv - borderTopWidth / 2, CORNER.TOP_RIGHT)
		                    : new Vector(bounds.left + bounds.width - borderRightWidth / 2, bounds.top + borderTopWidth / 2);
		            this.bottomRightBorderStroke =
		                brh > 0 || brv > 0
		                    ? getCurvePoints(bounds.left + bottomWidth, bounds.top + rightHeight, brh - borderRightWidth / 2, brv - borderBottomWidth / 2, CORNER.BOTTOM_RIGHT)
		                    : new Vector(bounds.left + bounds.width - borderRightWidth / 2, bounds.top + bounds.height - borderBottomWidth / 2);
		            this.bottomLeftBorderStroke =
		                blh > 0 || blv > 0
		                    ? getCurvePoints(bounds.left + borderLeftWidth / 2, bounds.top + leftHeight, blh - borderLeftWidth / 2, blv - borderBottomWidth / 2, CORNER.BOTTOM_LEFT)
		                    : new Vector(bounds.left + borderLeftWidth / 2, bounds.top + bounds.height - borderBottomWidth / 2);
		            this.topLeftBorderBox =
		                tlh > 0 || tlv > 0
		                    ? getCurvePoints(bounds.left, bounds.top, tlh, tlv, CORNER.TOP_LEFT)
		                    : new Vector(bounds.left, bounds.top);
		            this.topRightBorderBox =
		                trh > 0 || trv > 0
		                    ? getCurvePoints(bounds.left + topWidth, bounds.top, trh, trv, CORNER.TOP_RIGHT)
		                    : new Vector(bounds.left + bounds.width, bounds.top);
		            this.bottomRightBorderBox =
		                brh > 0 || brv > 0
		                    ? getCurvePoints(bounds.left + bottomWidth, bounds.top + rightHeight, brh, brv, CORNER.BOTTOM_RIGHT)
		                    : new Vector(bounds.left + bounds.width, bounds.top + bounds.height);
		            this.bottomLeftBorderBox =
		                blh > 0 || blv > 0
		                    ? getCurvePoints(bounds.left, bounds.top + leftHeight, blh, blv, CORNER.BOTTOM_LEFT)
		                    : new Vector(bounds.left, bounds.top + bounds.height);
		            this.topLeftPaddingBox =
		                tlh > 0 || tlv > 0
		                    ? getCurvePoints(bounds.left + borderLeftWidth, bounds.top + borderTopWidth, Math.max(0, tlh - borderLeftWidth), Math.max(0, tlv - borderTopWidth), CORNER.TOP_LEFT)
		                    : new Vector(bounds.left + borderLeftWidth, bounds.top + borderTopWidth);
		            this.topRightPaddingBox =
		                trh > 0 || trv > 0
		                    ? getCurvePoints(bounds.left + Math.min(topWidth, bounds.width - borderRightWidth), bounds.top + borderTopWidth, topWidth > bounds.width + borderRightWidth ? 0 : Math.max(0, trh - borderRightWidth), Math.max(0, trv - borderTopWidth), CORNER.TOP_RIGHT)
		                    : new Vector(bounds.left + bounds.width - borderRightWidth, bounds.top + borderTopWidth);
		            this.bottomRightPaddingBox =
		                brh > 0 || brv > 0
		                    ? getCurvePoints(bounds.left + Math.min(bottomWidth, bounds.width - borderLeftWidth), bounds.top + Math.min(rightHeight, bounds.height - borderBottomWidth), Math.max(0, brh - borderRightWidth), Math.max(0, brv - borderBottomWidth), CORNER.BOTTOM_RIGHT)
		                    : new Vector(bounds.left + bounds.width - borderRightWidth, bounds.top + bounds.height - borderBottomWidth);
		            this.bottomLeftPaddingBox =
		                blh > 0 || blv > 0
		                    ? getCurvePoints(bounds.left + borderLeftWidth, bounds.top + Math.min(leftHeight, bounds.height - borderBottomWidth), Math.max(0, blh - borderLeftWidth), Math.max(0, blv - borderBottomWidth), CORNER.BOTTOM_LEFT)
		                    : new Vector(bounds.left + borderLeftWidth, bounds.top + bounds.height - borderBottomWidth);
		            this.topLeftContentBox =
		                tlh > 0 || tlv > 0
		                    ? getCurvePoints(bounds.left + borderLeftWidth + paddingLeft, bounds.top + borderTopWidth + paddingTop, Math.max(0, tlh - (borderLeftWidth + paddingLeft)), Math.max(0, tlv - (borderTopWidth + paddingTop)), CORNER.TOP_LEFT)
		                    : new Vector(bounds.left + borderLeftWidth + paddingLeft, bounds.top + borderTopWidth + paddingTop);
		            this.topRightContentBox =
		                trh > 0 || trv > 0
		                    ? getCurvePoints(bounds.left + Math.min(topWidth, bounds.width + borderLeftWidth + paddingLeft), bounds.top + borderTopWidth + paddingTop, topWidth > bounds.width + borderLeftWidth + paddingLeft ? 0 : trh - borderLeftWidth + paddingLeft, trv - (borderTopWidth + paddingTop), CORNER.TOP_RIGHT)
		                    : new Vector(bounds.left + bounds.width - (borderRightWidth + paddingRight), bounds.top + borderTopWidth + paddingTop);
		            this.bottomRightContentBox =
		                brh > 0 || brv > 0
		                    ? getCurvePoints(bounds.left + Math.min(bottomWidth, bounds.width - (borderLeftWidth + paddingLeft)), bounds.top + Math.min(rightHeight, bounds.height + borderTopWidth + paddingTop), Math.max(0, brh - (borderRightWidth + paddingRight)), brv - (borderBottomWidth + paddingBottom), CORNER.BOTTOM_RIGHT)
		                    : new Vector(bounds.left + bounds.width - (borderRightWidth + paddingRight), bounds.top + bounds.height - (borderBottomWidth + paddingBottom));
		            this.bottomLeftContentBox =
		                blh > 0 || blv > 0
		                    ? getCurvePoints(bounds.left + borderLeftWidth + paddingLeft, bounds.top + leftHeight, Math.max(0, blh - (borderLeftWidth + paddingLeft)), blv - (borderBottomWidth + paddingBottom), CORNER.BOTTOM_LEFT)
		                    : new Vector(bounds.left + borderLeftWidth + paddingLeft, bounds.top + bounds.height - (borderBottomWidth + paddingBottom));
		        }
		        return BoundCurves;
		    }());
		    var CORNER;
		    (function (CORNER) {
		        CORNER[CORNER["TOP_LEFT"] = 0] = "TOP_LEFT";
		        CORNER[CORNER["TOP_RIGHT"] = 1] = "TOP_RIGHT";
		        CORNER[CORNER["BOTTOM_RIGHT"] = 2] = "BOTTOM_RIGHT";
		        CORNER[CORNER["BOTTOM_LEFT"] = 3] = "BOTTOM_LEFT";
		    })(CORNER || (CORNER = {}));
		    var getCurvePoints = function (x, y, r1, r2, position) {
		        var kappa = 4 * ((Math.sqrt(2) - 1) / 3);
		        var ox = r1 * kappa; // control point offset horizontal
		        var oy = r2 * kappa; // control point offset vertical
		        var xm = x + r1; // x-middle
		        var ym = y + r2; // y-middle
		        switch (position) {
		            case CORNER.TOP_LEFT:
		                return new BezierCurve(new Vector(x, ym), new Vector(x, ym - oy), new Vector(xm - ox, y), new Vector(xm, y));
		            case CORNER.TOP_RIGHT:
		                return new BezierCurve(new Vector(x, y), new Vector(x + ox, y), new Vector(xm, ym - oy), new Vector(xm, ym));
		            case CORNER.BOTTOM_RIGHT:
		                return new BezierCurve(new Vector(xm, y), new Vector(xm, y + oy), new Vector(x + ox, ym), new Vector(x, ym));
		            case CORNER.BOTTOM_LEFT:
		            default:
		                return new BezierCurve(new Vector(xm, ym), new Vector(xm - ox, ym), new Vector(x, y + oy), new Vector(x, y));
		        }
		    };
		    var calculateBorderBoxPath = function (curves) {
		        return [curves.topLeftBorderBox, curves.topRightBorderBox, curves.bottomRightBorderBox, curves.bottomLeftBorderBox];
		    };
		    var calculateContentBoxPath = function (curves) {
		        return [
		            curves.topLeftContentBox,
		            curves.topRightContentBox,
		            curves.bottomRightContentBox,
		            curves.bottomLeftContentBox
		        ];
		    };
		    var calculatePaddingBoxPath = function (curves) {
		        return [
		            curves.topLeftPaddingBox,
		            curves.topRightPaddingBox,
		            curves.bottomRightPaddingBox,
		            curves.bottomLeftPaddingBox
		        ];
		    };

		    var TransformEffect = /** @class */ (function () {
		        function TransformEffect(offsetX, offsetY, matrix) {
		            this.offsetX = offsetX;
		            this.offsetY = offsetY;
		            this.matrix = matrix;
		            this.type = 0 /* TRANSFORM */;
		            this.target = 2 /* BACKGROUND_BORDERS */ | 4 /* CONTENT */;
		        }
		        return TransformEffect;
		    }());
		    var ClipEffect = /** @class */ (function () {
		        function ClipEffect(path, target) {
		            this.path = path;
		            this.target = target;
		            this.type = 1 /* CLIP */;
		        }
		        return ClipEffect;
		    }());
		    var OpacityEffect = /** @class */ (function () {
		        function OpacityEffect(opacity) {
		            this.opacity = opacity;
		            this.type = 2 /* OPACITY */;
		            this.target = 2 /* BACKGROUND_BORDERS */ | 4 /* CONTENT */;
		        }
		        return OpacityEffect;
		    }());
		    var isTransformEffect = function (effect) {
		        return effect.type === 0 /* TRANSFORM */;
		    };
		    var isClipEffect = function (effect) { return effect.type === 1 /* CLIP */; };
		    var isOpacityEffect = function (effect) { return effect.type === 2 /* OPACITY */; };

		    var equalPath = function (a, b) {
		        if (a.length === b.length) {
		            return a.some(function (v, i) { return v === b[i]; });
		        }
		        return false;
		    };
		    var transformPath = function (path, deltaX, deltaY, deltaW, deltaH) {
		        return path.map(function (point, index) {
		            switch (index) {
		                case 0:
		                    return point.add(deltaX, deltaY);
		                case 1:
		                    return point.add(deltaX + deltaW, deltaY);
		                case 2:
		                    return point.add(deltaX + deltaW, deltaY + deltaH);
		                case 3:
		                    return point.add(deltaX, deltaY + deltaH);
		            }
		            return point;
		        });
		    };

		    var StackingContext = /** @class */ (function () {
		        function StackingContext(container) {
		            this.element = container;
		            this.inlineLevel = [];
		            this.nonInlineLevel = [];
		            this.negativeZIndex = [];
		            this.zeroOrAutoZIndexOrTransformedOrOpacity = [];
		            this.positiveZIndex = [];
		            this.nonPositionedFloats = [];
		            this.nonPositionedInlineLevel = [];
		        }
		        return StackingContext;
		    }());
		    var ElementPaint = /** @class */ (function () {
		        function ElementPaint(container, parent) {
		            this.container = container;
		            this.parent = parent;
		            this.effects = [];
		            this.curves = new BoundCurves(this.container);
		            if (this.container.styles.opacity < 1) {
		                this.effects.push(new OpacityEffect(this.container.styles.opacity));
		            }
		            if (this.container.styles.transform !== null) {
		                var offsetX = this.container.bounds.left + this.container.styles.transformOrigin[0].number;
		                var offsetY = this.container.bounds.top + this.container.styles.transformOrigin[1].number;
		                var matrix = this.container.styles.transform;
		                this.effects.push(new TransformEffect(offsetX, offsetY, matrix));
		            }
		            if (this.container.styles.overflowX !== 0 /* VISIBLE */) {
		                var borderBox = calculateBorderBoxPath(this.curves);
		                var paddingBox = calculatePaddingBoxPath(this.curves);
		                if (equalPath(borderBox, paddingBox)) {
		                    this.effects.push(new ClipEffect(borderBox, 2 /* BACKGROUND_BORDERS */ | 4 /* CONTENT */));
		                }
		                else {
		                    this.effects.push(new ClipEffect(borderBox, 2 /* BACKGROUND_BORDERS */));
		                    this.effects.push(new ClipEffect(paddingBox, 4 /* CONTENT */));
		                }
		            }
		        }
		        ElementPaint.prototype.getEffects = function (target) {
		            var inFlow = [2 /* ABSOLUTE */, 3 /* FIXED */].indexOf(this.container.styles.position) === -1;
		            var parent = this.parent;
		            var effects = this.effects.slice(0);
		            while (parent) {
		                var croplessEffects = parent.effects.filter(function (effect) { return !isClipEffect(effect); });
		                if (inFlow || parent.container.styles.position !== 0 /* STATIC */ || !parent.parent) {
		                    effects.unshift.apply(effects, croplessEffects);
		                    inFlow = [2 /* ABSOLUTE */, 3 /* FIXED */].indexOf(parent.container.styles.position) === -1;
		                    if (parent.container.styles.overflowX !== 0 /* VISIBLE */) {
		                        var borderBox = calculateBorderBoxPath(parent.curves);
		                        var paddingBox = calculatePaddingBoxPath(parent.curves);
		                        if (!equalPath(borderBox, paddingBox)) {
		                            effects.unshift(new ClipEffect(paddingBox, 2 /* BACKGROUND_BORDERS */ | 4 /* CONTENT */));
		                        }
		                    }
		                }
		                else {
		                    effects.unshift.apply(effects, croplessEffects);
		                }
		                parent = parent.parent;
		            }
		            return effects.filter(function (effect) { return contains(effect.target, target); });
		        };
		        return ElementPaint;
		    }());
		    var parseStackTree = function (parent, stackingContext, realStackingContext, listItems) {
		        parent.container.elements.forEach(function (child) {
		            var treatAsRealStackingContext = contains(child.flags, 4 /* CREATES_REAL_STACKING_CONTEXT */);
		            var createsStackingContext = contains(child.flags, 2 /* CREATES_STACKING_CONTEXT */);
		            var paintContainer = new ElementPaint(child, parent);
		            if (contains(child.styles.display, 2048 /* LIST_ITEM */)) {
		                listItems.push(paintContainer);
		            }
		            var listOwnerItems = contains(child.flags, 8 /* IS_LIST_OWNER */) ? [] : listItems;
		            if (treatAsRealStackingContext || createsStackingContext) {
		                var parentStack = treatAsRealStackingContext || child.styles.isPositioned() ? realStackingContext : stackingContext;
		                var stack = new StackingContext(paintContainer);
		                if (child.styles.isPositioned() || child.styles.opacity < 1 || child.styles.isTransformed()) {
		                    var order_1 = child.styles.zIndex.order;
		                    if (order_1 < 0) {
		                        var index_1 = 0;
		                        parentStack.negativeZIndex.some(function (current, i) {
		                            if (order_1 > current.element.container.styles.zIndex.order) {
		                                index_1 = i;
		                                return false;
		                            }
		                            else if (index_1 > 0) {
		                                return true;
		                            }
		                            return false;
		                        });
		                        parentStack.negativeZIndex.splice(index_1, 0, stack);
		                    }
		                    else if (order_1 > 0) {
		                        var index_2 = 0;
		                        parentStack.positiveZIndex.some(function (current, i) {
		                            if (order_1 >= current.element.container.styles.zIndex.order) {
		                                index_2 = i + 1;
		                                return false;
		                            }
		                            else if (index_2 > 0) {
		                                return true;
		                            }
		                            return false;
		                        });
		                        parentStack.positiveZIndex.splice(index_2, 0, stack);
		                    }
		                    else {
		                        parentStack.zeroOrAutoZIndexOrTransformedOrOpacity.push(stack);
		                    }
		                }
		                else {
		                    if (child.styles.isFloating()) {
		                        parentStack.nonPositionedFloats.push(stack);
		                    }
		                    else {
		                        parentStack.nonPositionedInlineLevel.push(stack);
		                    }
		                }
		                parseStackTree(paintContainer, stack, treatAsRealStackingContext ? stack : realStackingContext, listOwnerItems);
		            }
		            else {
		                if (child.styles.isInlineLevel()) {
		                    stackingContext.inlineLevel.push(paintContainer);
		                }
		                else {
		                    stackingContext.nonInlineLevel.push(paintContainer);
		                }
		                parseStackTree(paintContainer, stackingContext, realStackingContext, listOwnerItems);
		            }
		            if (contains(child.flags, 8 /* IS_LIST_OWNER */)) {
		                processListItems(child, listOwnerItems);
		            }
		        });
		    };
		    var processListItems = function (owner, elements) {
		        var numbering = owner instanceof OLElementContainer ? owner.start : 1;
		        var reversed = owner instanceof OLElementContainer ? owner.reversed : false;
		        for (var i = 0; i < elements.length; i++) {
		            var item = elements[i];
		            if (item.container instanceof LIElementContainer &&
		                typeof item.container.value === 'number' &&
		                item.container.value !== 0) {
		                numbering = item.container.value;
		            }
		            item.listValue = createCounterText(numbering, item.container.styles.listStyleType, true);
		            numbering += reversed ? -1 : 1;
		        }
		    };
		    var parseStackingContexts = function (container) {
		        var paintContainer = new ElementPaint(container, null);
		        var root = new StackingContext(paintContainer);
		        var listItems = [];
		        parseStackTree(paintContainer, root, root, listItems);
		        processListItems(paintContainer.container, listItems);
		        return root;
		    };

		    var parsePathForBorder = function (curves, borderSide) {
		        switch (borderSide) {
		            case 0:
		                return createPathFromCurves(curves.topLeftBorderBox, curves.topLeftPaddingBox, curves.topRightBorderBox, curves.topRightPaddingBox);
		            case 1:
		                return createPathFromCurves(curves.topRightBorderBox, curves.topRightPaddingBox, curves.bottomRightBorderBox, curves.bottomRightPaddingBox);
		            case 2:
		                return createPathFromCurves(curves.bottomRightBorderBox, curves.bottomRightPaddingBox, curves.bottomLeftBorderBox, curves.bottomLeftPaddingBox);
		            case 3:
		            default:
		                return createPathFromCurves(curves.bottomLeftBorderBox, curves.bottomLeftPaddingBox, curves.topLeftBorderBox, curves.topLeftPaddingBox);
		        }
		    };
		    var parsePathForBorderDoubleOuter = function (curves, borderSide) {
		        switch (borderSide) {
		            case 0:
		                return createPathFromCurves(curves.topLeftBorderBox, curves.topLeftBorderDoubleOuterBox, curves.topRightBorderBox, curves.topRightBorderDoubleOuterBox);
		            case 1:
		                return createPathFromCurves(curves.topRightBorderBox, curves.topRightBorderDoubleOuterBox, curves.bottomRightBorderBox, curves.bottomRightBorderDoubleOuterBox);
		            case 2:
		                return createPathFromCurves(curves.bottomRightBorderBox, curves.bottomRightBorderDoubleOuterBox, curves.bottomLeftBorderBox, curves.bottomLeftBorderDoubleOuterBox);
		            case 3:
		            default:
		                return createPathFromCurves(curves.bottomLeftBorderBox, curves.bottomLeftBorderDoubleOuterBox, curves.topLeftBorderBox, curves.topLeftBorderDoubleOuterBox);
		        }
		    };
		    var parsePathForBorderDoubleInner = function (curves, borderSide) {
		        switch (borderSide) {
		            case 0:
		                return createPathFromCurves(curves.topLeftBorderDoubleInnerBox, curves.topLeftPaddingBox, curves.topRightBorderDoubleInnerBox, curves.topRightPaddingBox);
		            case 1:
		                return createPathFromCurves(curves.topRightBorderDoubleInnerBox, curves.topRightPaddingBox, curves.bottomRightBorderDoubleInnerBox, curves.bottomRightPaddingBox);
		            case 2:
		                return createPathFromCurves(curves.bottomRightBorderDoubleInnerBox, curves.bottomRightPaddingBox, curves.bottomLeftBorderDoubleInnerBox, curves.bottomLeftPaddingBox);
		            case 3:
		            default:
		                return createPathFromCurves(curves.bottomLeftBorderDoubleInnerBox, curves.bottomLeftPaddingBox, curves.topLeftBorderDoubleInnerBox, curves.topLeftPaddingBox);
		        }
		    };
		    var parsePathForBorderStroke = function (curves, borderSide) {
		        switch (borderSide) {
		            case 0:
		                return createStrokePathFromCurves(curves.topLeftBorderStroke, curves.topRightBorderStroke);
		            case 1:
		                return createStrokePathFromCurves(curves.topRightBorderStroke, curves.bottomRightBorderStroke);
		            case 2:
		                return createStrokePathFromCurves(curves.bottomRightBorderStroke, curves.bottomLeftBorderStroke);
		            case 3:
		            default:
		                return createStrokePathFromCurves(curves.bottomLeftBorderStroke, curves.topLeftBorderStroke);
		        }
		    };
		    var createStrokePathFromCurves = function (outer1, outer2) {
		        var path = [];
		        if (isBezierCurve(outer1)) {
		            path.push(outer1.subdivide(0.5, false));
		        }
		        else {
		            path.push(outer1);
		        }
		        if (isBezierCurve(outer2)) {
		            path.push(outer2.subdivide(0.5, true));
		        }
		        else {
		            path.push(outer2);
		        }
		        return path;
		    };
		    var createPathFromCurves = function (outer1, inner1, outer2, inner2) {
		        var path = [];
		        if (isBezierCurve(outer1)) {
		            path.push(outer1.subdivide(0.5, false));
		        }
		        else {
		            path.push(outer1);
		        }
		        if (isBezierCurve(outer2)) {
		            path.push(outer2.subdivide(0.5, true));
		        }
		        else {
		            path.push(outer2);
		        }
		        if (isBezierCurve(inner2)) {
		            path.push(inner2.subdivide(0.5, true).reverse());
		        }
		        else {
		            path.push(inner2);
		        }
		        if (isBezierCurve(inner1)) {
		            path.push(inner1.subdivide(0.5, false).reverse());
		        }
		        else {
		            path.push(inner1);
		        }
		        return path;
		    };

		    var paddingBox = function (element) {
		        var bounds = element.bounds;
		        var styles = element.styles;
		        return bounds.add(styles.borderLeftWidth, styles.borderTopWidth, -(styles.borderRightWidth + styles.borderLeftWidth), -(styles.borderTopWidth + styles.borderBottomWidth));
		    };
		    var contentBox = function (element) {
		        var styles = element.styles;
		        var bounds = element.bounds;
		        var paddingLeft = getAbsoluteValue(styles.paddingLeft, bounds.width);
		        var paddingRight = getAbsoluteValue(styles.paddingRight, bounds.width);
		        var paddingTop = getAbsoluteValue(styles.paddingTop, bounds.width);
		        var paddingBottom = getAbsoluteValue(styles.paddingBottom, bounds.width);
		        return bounds.add(paddingLeft + styles.borderLeftWidth, paddingTop + styles.borderTopWidth, -(styles.borderRightWidth + styles.borderLeftWidth + paddingLeft + paddingRight), -(styles.borderTopWidth + styles.borderBottomWidth + paddingTop + paddingBottom));
		    };

		    var calculateBackgroundPositioningArea = function (backgroundOrigin, element) {
		        if (backgroundOrigin === 0 /* BORDER_BOX */) {
		            return element.bounds;
		        }
		        if (backgroundOrigin === 2 /* CONTENT_BOX */) {
		            return contentBox(element);
		        }
		        return paddingBox(element);
		    };
		    var calculateBackgroundPaintingArea = function (backgroundClip, element) {
		        if (backgroundClip === 0 /* BORDER_BOX */) {
		            return element.bounds;
		        }
		        if (backgroundClip === 2 /* CONTENT_BOX */) {
		            return contentBox(element);
		        }
		        return paddingBox(element);
		    };
		    var calculateBackgroundRendering = function (container, index, intrinsicSize) {
		        var backgroundPositioningArea = calculateBackgroundPositioningArea(getBackgroundValueForIndex(container.styles.backgroundOrigin, index), container);
		        var backgroundPaintingArea = calculateBackgroundPaintingArea(getBackgroundValueForIndex(container.styles.backgroundClip, index), container);
		        var backgroundImageSize = calculateBackgroundSize(getBackgroundValueForIndex(container.styles.backgroundSize, index), intrinsicSize, backgroundPositioningArea);
		        var sizeWidth = backgroundImageSize[0], sizeHeight = backgroundImageSize[1];
		        var position = getAbsoluteValueForTuple(getBackgroundValueForIndex(container.styles.backgroundPosition, index), backgroundPositioningArea.width - sizeWidth, backgroundPositioningArea.height - sizeHeight);
		        var path = calculateBackgroundRepeatPath(getBackgroundValueForIndex(container.styles.backgroundRepeat, index), position, backgroundImageSize, backgroundPositioningArea, backgroundPaintingArea);
		        var offsetX = Math.round(backgroundPositioningArea.left + position[0]);
		        var offsetY = Math.round(backgroundPositioningArea.top + position[1]);
		        return [path, offsetX, offsetY, sizeWidth, sizeHeight];
		    };
		    var isAuto = function (token) { return isIdentToken(token) && token.value === BACKGROUND_SIZE.AUTO; };
		    var hasIntrinsicValue = function (value) { return typeof value === 'number'; };
		    var calculateBackgroundSize = function (size, _a, bounds) {
		        var intrinsicWidth = _a[0], intrinsicHeight = _a[1], intrinsicProportion = _a[2];
		        var first = size[0], second = size[1];
		        if (!first) {
		            return [0, 0];
		        }
		        if (isLengthPercentage(first) && second && isLengthPercentage(second)) {
		            return [getAbsoluteValue(first, bounds.width), getAbsoluteValue(second, bounds.height)];
		        }
		        var hasIntrinsicProportion = hasIntrinsicValue(intrinsicProportion);
		        if (isIdentToken(first) && (first.value === BACKGROUND_SIZE.CONTAIN || first.value === BACKGROUND_SIZE.COVER)) {
		            if (hasIntrinsicValue(intrinsicProportion)) {
		                var targetRatio = bounds.width / bounds.height;
		                return targetRatio < intrinsicProportion !== (first.value === BACKGROUND_SIZE.COVER)
		                    ? [bounds.width, bounds.width / intrinsicProportion]
		                    : [bounds.height * intrinsicProportion, bounds.height];
		            }
		            return [bounds.width, bounds.height];
		        }
		        var hasIntrinsicWidth = hasIntrinsicValue(intrinsicWidth);
		        var hasIntrinsicHeight = hasIntrinsicValue(intrinsicHeight);
		        var hasIntrinsicDimensions = hasIntrinsicWidth || hasIntrinsicHeight;
		        // If the background-size is auto or auto auto:
		        if (isAuto(first) && (!second || isAuto(second))) {
		            // If the image has both horizontal and vertical intrinsic dimensions, it's rendered at that size.
		            if (hasIntrinsicWidth && hasIntrinsicHeight) {
		                return [intrinsicWidth, intrinsicHeight];
		            }
		            // If the image has no intrinsic dimensions and has no intrinsic proportions,
		            // it's rendered at the size of the background positioning area.
		            if (!hasIntrinsicProportion && !hasIntrinsicDimensions) {
		                return [bounds.width, bounds.height];
		            }
		            // TODO If the image has no intrinsic dimensions but has intrinsic proportions, it's rendered as if contain had been specified instead.
		            // If the image has only one intrinsic dimension and has intrinsic proportions, it's rendered at the size corresponding to that one dimension.
		            // The other dimension is computed using the specified dimension and the intrinsic proportions.
		            if (hasIntrinsicDimensions && hasIntrinsicProportion) {
		                var width_1 = hasIntrinsicWidth
		                    ? intrinsicWidth
		                    : intrinsicHeight * intrinsicProportion;
		                var height_1 = hasIntrinsicHeight
		                    ? intrinsicHeight
		                    : intrinsicWidth / intrinsicProportion;
		                return [width_1, height_1];
		            }
		            // If the image has only one intrinsic dimension but has no intrinsic proportions,
		            // it's rendered using the specified dimension and the other dimension of the background positioning area.
		            var width_2 = hasIntrinsicWidth ? intrinsicWidth : bounds.width;
		            var height_2 = hasIntrinsicHeight ? intrinsicHeight : bounds.height;
		            return [width_2, height_2];
		        }
		        // If the image has intrinsic proportions, it's stretched to the specified dimension.
		        // The unspecified dimension is computed using the specified dimension and the intrinsic proportions.
		        if (hasIntrinsicProportion) {
		            var width_3 = 0;
		            var height_3 = 0;
		            if (isLengthPercentage(first)) {
		                width_3 = getAbsoluteValue(first, bounds.width);
		            }
		            else if (isLengthPercentage(second)) {
		                height_3 = getAbsoluteValue(second, bounds.height);
		            }
		            if (isAuto(first)) {
		                width_3 = height_3 * intrinsicProportion;
		            }
		            else if (!second || isAuto(second)) {
		                height_3 = width_3 / intrinsicProportion;
		            }
		            return [width_3, height_3];
		        }
		        // If the image has no intrinsic proportions, it's stretched to the specified dimension.
		        // The unspecified dimension is computed using the image's corresponding intrinsic dimension,
		        // if there is one. If there is no such intrinsic dimension,
		        // it becomes the corresponding dimension of the background positioning area.
		        var width = null;
		        var height = null;
		        if (isLengthPercentage(first)) {
		            width = getAbsoluteValue(first, bounds.width);
		        }
		        else if (second && isLengthPercentage(second)) {
		            height = getAbsoluteValue(second, bounds.height);
		        }
		        if (width !== null && (!second || isAuto(second))) {
		            height =
		                hasIntrinsicWidth && hasIntrinsicHeight
		                    ? (width / intrinsicWidth) * intrinsicHeight
		                    : bounds.height;
		        }
		        if (height !== null && isAuto(first)) {
		            width =
		                hasIntrinsicWidth && hasIntrinsicHeight
		                    ? (height / intrinsicHeight) * intrinsicWidth
		                    : bounds.width;
		        }
		        if (width !== null && height !== null) {
		            return [width, height];
		        }
		        throw new Error("Unable to calculate background-size for element");
		    };
		    var getBackgroundValueForIndex = function (values, index) {
		        var value = values[index];
		        if (typeof value === 'undefined') {
		            return values[0];
		        }
		        return value;
		    };
		    var calculateBackgroundRepeatPath = function (repeat, _a, _b, backgroundPositioningArea, backgroundPaintingArea) {
		        var x = _a[0], y = _a[1];
		        var width = _b[0], height = _b[1];
		        switch (repeat) {
		            case 2 /* REPEAT_X */:
		                return [
		                    new Vector(Math.round(backgroundPositioningArea.left), Math.round(backgroundPositioningArea.top + y)),
		                    new Vector(Math.round(backgroundPositioningArea.left + backgroundPositioningArea.width), Math.round(backgroundPositioningArea.top + y)),
		                    new Vector(Math.round(backgroundPositioningArea.left + backgroundPositioningArea.width), Math.round(height + backgroundPositioningArea.top + y)),
		                    new Vector(Math.round(backgroundPositioningArea.left), Math.round(height + backgroundPositioningArea.top + y))
		                ];
		            case 3 /* REPEAT_Y */:
		                return [
		                    new Vector(Math.round(backgroundPositioningArea.left + x), Math.round(backgroundPositioningArea.top)),
		                    new Vector(Math.round(backgroundPositioningArea.left + x + width), Math.round(backgroundPositioningArea.top)),
		                    new Vector(Math.round(backgroundPositioningArea.left + x + width), Math.round(backgroundPositioningArea.height + backgroundPositioningArea.top)),
		                    new Vector(Math.round(backgroundPositioningArea.left + x), Math.round(backgroundPositioningArea.height + backgroundPositioningArea.top))
		                ];
		            case 1 /* NO_REPEAT */:
		                return [
		                    new Vector(Math.round(backgroundPositioningArea.left + x), Math.round(backgroundPositioningArea.top + y)),
		                    new Vector(Math.round(backgroundPositioningArea.left + x + width), Math.round(backgroundPositioningArea.top + y)),
		                    new Vector(Math.round(backgroundPositioningArea.left + x + width), Math.round(backgroundPositioningArea.top + y + height)),
		                    new Vector(Math.round(backgroundPositioningArea.left + x), Math.round(backgroundPositioningArea.top + y + height))
		                ];
		            default:
		                return [
		                    new Vector(Math.round(backgroundPaintingArea.left), Math.round(backgroundPaintingArea.top)),
		                    new Vector(Math.round(backgroundPaintingArea.left + backgroundPaintingArea.width), Math.round(backgroundPaintingArea.top)),
		                    new Vector(Math.round(backgroundPaintingArea.left + backgroundPaintingArea.width), Math.round(backgroundPaintingArea.height + backgroundPaintingArea.top)),
		                    new Vector(Math.round(backgroundPaintingArea.left), Math.round(backgroundPaintingArea.height + backgroundPaintingArea.top))
		                ];
		        }
		    };

		    var SMALL_IMAGE = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7';

		    var SAMPLE_TEXT = 'Hidden Text';
		    var FontMetrics = /** @class */ (function () {
		        function FontMetrics(document) {
		            this._data = {};
		            this._document = document;
		        }
		        FontMetrics.prototype.parseMetrics = function (fontFamily, fontSize) {
		            var container = this._document.createElement('div');
		            var img = this._document.createElement('img');
		            var span = this._document.createElement('span');
		            var body = this._document.body;
		            container.style.visibility = 'hidden';
		            container.style.fontFamily = fontFamily;
		            container.style.fontSize = fontSize;
		            container.style.margin = '0';
		            container.style.padding = '0';
		            container.style.whiteSpace = 'nowrap';
		            body.appendChild(container);
		            img.src = SMALL_IMAGE;
		            img.width = 1;
		            img.height = 1;
		            img.style.margin = '0';
		            img.style.padding = '0';
		            img.style.verticalAlign = 'baseline';
		            span.style.fontFamily = fontFamily;
		            span.style.fontSize = fontSize;
		            span.style.margin = '0';
		            span.style.padding = '0';
		            span.appendChild(this._document.createTextNode(SAMPLE_TEXT));
		            container.appendChild(span);
		            container.appendChild(img);
		            var baseline = img.offsetTop - span.offsetTop + 2;
		            container.removeChild(span);
		            container.appendChild(this._document.createTextNode(SAMPLE_TEXT));
		            container.style.lineHeight = 'normal';
		            img.style.verticalAlign = 'super';
		            var middle = img.offsetTop - container.offsetTop + 2;
		            body.removeChild(container);
		            return { baseline: baseline, middle: middle };
		        };
		        FontMetrics.prototype.getMetrics = function (fontFamily, fontSize) {
		            var key = fontFamily + " " + fontSize;
		            if (typeof this._data[key] === 'undefined') {
		                this._data[key] = this.parseMetrics(fontFamily, fontSize);
		            }
		            return this._data[key];
		        };
		        return FontMetrics;
		    }());

		    var Renderer = /** @class */ (function () {
		        function Renderer(context, options) {
		            this.context = context;
		            this.options = options;
		        }
		        return Renderer;
		    }());

		    var MASK_OFFSET = 10000;
		    var CanvasRenderer = /** @class */ (function (_super) {
		        __extends(CanvasRenderer, _super);
		        function CanvasRenderer(context, options) {
		            var _this = _super.call(this, context, options) || this;
		            _this._activeEffects = [];
		            _this.canvas = options.canvas ? options.canvas : document.createElement('canvas');
		            _this.ctx = _this.canvas.getContext('2d');
		            if (!options.canvas) {
		                _this.canvas.width = Math.floor(options.width * options.scale);
		                _this.canvas.height = Math.floor(options.height * options.scale);
		                _this.canvas.style.width = options.width + "px";
		                _this.canvas.style.height = options.height + "px";
		            }
		            _this.fontMetrics = new FontMetrics(document);
		            _this.ctx.scale(_this.options.scale, _this.options.scale);
		            _this.ctx.translate(-options.x, -options.y);
		            _this.ctx.textBaseline = 'bottom';
		            _this._activeEffects = [];
		            _this.context.logger.debug("Canvas renderer initialized (" + options.width + "x" + options.height + ") with scale " + options.scale);
		            return _this;
		        }
		        CanvasRenderer.prototype.applyEffects = function (effects) {
		            var _this = this;
		            while (this._activeEffects.length) {
		                this.popEffect();
		            }
		            effects.forEach(function (effect) { return _this.applyEffect(effect); });
		        };
		        CanvasRenderer.prototype.applyEffect = function (effect) {
		            this.ctx.save();
		            if (isOpacityEffect(effect)) {
		                this.ctx.globalAlpha = effect.opacity;
		            }
		            if (isTransformEffect(effect)) {
		                this.ctx.translate(effect.offsetX, effect.offsetY);
		                this.ctx.transform(effect.matrix[0], effect.matrix[1], effect.matrix[2], effect.matrix[3], effect.matrix[4], effect.matrix[5]);
		                this.ctx.translate(-effect.offsetX, -effect.offsetY);
		            }
		            if (isClipEffect(effect)) {
		                this.path(effect.path);
		                this.ctx.clip();
		            }
		            this._activeEffects.push(effect);
		        };
		        CanvasRenderer.prototype.popEffect = function () {
		            this._activeEffects.pop();
		            this.ctx.restore();
		        };
		        CanvasRenderer.prototype.renderStack = function (stack) {
		            return __awaiter(this, void 0, void 0, function () {
		                var styles;
		                return __generator(this, function (_a) {
		                    switch (_a.label) {
		                        case 0:
		                            styles = stack.element.container.styles;
		                            if (!styles.isVisible()) return [3 /*break*/, 2];
		                            return [4 /*yield*/, this.renderStackContent(stack)];
		                        case 1:
		                            _a.sent();
		                            _a.label = 2;
		                        case 2: return [2 /*return*/];
		                    }
		                });
		            });
		        };
		        CanvasRenderer.prototype.renderNode = function (paint) {
		            return __awaiter(this, void 0, void 0, function () {
		                return __generator(this, function (_a) {
		                    switch (_a.label) {
		                        case 0:
		                            if (contains(paint.container.flags, 16 /* DEBUG_RENDER */)) {
		                                debugger;
		                            }
		                            if (!paint.container.styles.isVisible()) return [3 /*break*/, 3];
		                            return [4 /*yield*/, this.renderNodeBackgroundAndBorders(paint)];
		                        case 1:
		                            _a.sent();
		                            return [4 /*yield*/, this.renderNodeContent(paint)];
		                        case 2:
		                            _a.sent();
		                            _a.label = 3;
		                        case 3: return [2 /*return*/];
		                    }
		                });
		            });
		        };
		        CanvasRenderer.prototype.renderTextWithLetterSpacing = function (text, letterSpacing, baseline) {
		            var _this = this;
		            if (letterSpacing === 0) {
		                this.ctx.fillText(text.text, text.bounds.left, text.bounds.top + baseline);
		            }
		            else {
		                var letters = segmentGraphemes(text.text);
		                letters.reduce(function (left, letter) {
		                    _this.ctx.fillText(letter, left, text.bounds.top + baseline);
		                    return left + _this.ctx.measureText(letter).width;
		                }, text.bounds.left);
		            }
		        };
		        CanvasRenderer.prototype.createFontStyle = function (styles) {
		            var fontVariant = styles.fontVariant
		                .filter(function (variant) { return variant === 'normal' || variant === 'small-caps'; })
		                .join('');
		            var fontFamily = fixIOSSystemFonts(styles.fontFamily).join(', ');
		            var fontSize = isDimensionToken(styles.fontSize)
		                ? "" + styles.fontSize.number + styles.fontSize.unit
		                : styles.fontSize.number + "px";
		            return [
		                [styles.fontStyle, fontVariant, styles.fontWeight, fontSize, fontFamily].join(' '),
		                fontFamily,
		                fontSize
		            ];
		        };
		        CanvasRenderer.prototype.renderTextNode = function (text, styles) {
		            return __awaiter(this, void 0, void 0, function () {
		                var _a, font, fontFamily, fontSize, _b, baseline, middle, paintOrder;
		                var _this = this;
		                return __generator(this, function (_c) {
		                    _a = this.createFontStyle(styles), font = _a[0], fontFamily = _a[1], fontSize = _a[2];
		                    this.ctx.font = font;
		                    this.ctx.direction = styles.direction === 1 /* RTL */ ? 'rtl' : 'ltr';
		                    this.ctx.textAlign = 'left';
		                    this.ctx.textBaseline = 'alphabetic';
		                    _b = this.fontMetrics.getMetrics(fontFamily, fontSize), baseline = _b.baseline, middle = _b.middle;
		                    paintOrder = styles.paintOrder;
		                    text.textBounds.forEach(function (text) {
		                        paintOrder.forEach(function (paintOrderLayer) {
		                            switch (paintOrderLayer) {
		                                case 0 /* FILL */:
		                                    _this.ctx.fillStyle = asString(styles.color);
		                                    _this.renderTextWithLetterSpacing(text, styles.letterSpacing, baseline);
		                                    var textShadows = styles.textShadow;
		                                    if (textShadows.length && text.text.trim().length) {
		                                        textShadows
		                                            .slice(0)
		                                            .reverse()
		                                            .forEach(function (textShadow) {
		                                            _this.ctx.shadowColor = asString(textShadow.color);
		                                            _this.ctx.shadowOffsetX = textShadow.offsetX.number * _this.options.scale;
		                                            _this.ctx.shadowOffsetY = textShadow.offsetY.number * _this.options.scale;
		                                            _this.ctx.shadowBlur = textShadow.blur.number;
		                                            _this.renderTextWithLetterSpacing(text, styles.letterSpacing, baseline);
		                                        });
		                                        _this.ctx.shadowColor = '';
		                                        _this.ctx.shadowOffsetX = 0;
		                                        _this.ctx.shadowOffsetY = 0;
		                                        _this.ctx.shadowBlur = 0;
		                                    }
		                                    if (styles.textDecorationLine.length) {
		                                        _this.ctx.fillStyle = asString(styles.textDecorationColor || styles.color);
		                                        styles.textDecorationLine.forEach(function (textDecorationLine) {
		                                            switch (textDecorationLine) {
		                                                case 1 /* UNDERLINE */:
		                                                    // Draws a line at the baseline of the font
		                                                    // TODO As some browsers display the line as more than 1px if the font-size is big,
		                                                    // need to take that into account both in position and size
		                                                    _this.ctx.fillRect(text.bounds.left, Math.round(text.bounds.top + baseline), text.bounds.width, 1);
		                                                    break;
		                                                case 2 /* OVERLINE */:
		                                                    _this.ctx.fillRect(text.bounds.left, Math.round(text.bounds.top), text.bounds.width, 1);
		                                                    break;
		                                                case 3 /* LINE_THROUGH */:
		                                                    // TODO try and find exact position for line-through
		                                                    _this.ctx.fillRect(text.bounds.left, Math.ceil(text.bounds.top + middle), text.bounds.width, 1);
		                                                    break;
		                                            }
		                                        });
		                                    }
		                                    break;
		                                case 1 /* STROKE */:
		                                    if (styles.webkitTextStrokeWidth && text.text.trim().length) {
		                                        _this.ctx.strokeStyle = asString(styles.webkitTextStrokeColor);
		                                        _this.ctx.lineWidth = styles.webkitTextStrokeWidth;
		                                        // eslint-disable-next-line @typescript-eslint/no-explicit-any
		                                        _this.ctx.lineJoin = !!window.chrome ? 'miter' : 'round';
		                                        _this.ctx.strokeText(text.text, text.bounds.left, text.bounds.top + baseline);
		                                    }
		                                    _this.ctx.strokeStyle = '';
		                                    _this.ctx.lineWidth = 0;
		                                    _this.ctx.lineJoin = 'miter';
		                                    break;
		                            }
		                        });
		                    });
		                    return [2 /*return*/];
		                });
		            });
		        };
		        CanvasRenderer.prototype.renderReplacedElement = function (container, curves, image) {
		            if (image && container.intrinsicWidth > 0 && container.intrinsicHeight > 0) {
		                var box = contentBox(container);
		                var path = calculatePaddingBoxPath(curves);
		                this.path(path);
		                this.ctx.save();
		                this.ctx.clip();
		                this.ctx.drawImage(image, 0, 0, container.intrinsicWidth, container.intrinsicHeight, box.left, box.top, box.width, box.height);
		                this.ctx.restore();
		            }
		        };
		        CanvasRenderer.prototype.renderNodeContent = function (paint) {
		            return __awaiter(this, void 0, void 0, function () {
		                var container, curves, styles, _i, _a, child, image, image, iframeRenderer, canvas, size, _b, fontFamily, fontSize, baseline, bounds, x, textBounds, img, image, url, fontFamily, bounds;
		                return __generator(this, function (_c) {
		                    switch (_c.label) {
		                        case 0:
		                            this.applyEffects(paint.getEffects(4 /* CONTENT */));
		                            container = paint.container;
		                            curves = paint.curves;
		                            styles = container.styles;
		                            _i = 0, _a = container.textNodes;
		                            _c.label = 1;
		                        case 1:
		                            if (!(_i < _a.length)) return [3 /*break*/, 4];
		                            child = _a[_i];
		                            return [4 /*yield*/, this.renderTextNode(child, styles)];
		                        case 2:
		                            _c.sent();
		                            _c.label = 3;
		                        case 3:
		                            _i++;
		                            return [3 /*break*/, 1];
		                        case 4:
		                            if (!(container instanceof ImageElementContainer)) return [3 /*break*/, 8];
		                            _c.label = 5;
		                        case 5:
		                            _c.trys.push([5, 7, , 8]);
		                            return [4 /*yield*/, this.context.cache.match(container.src)];
		                        case 6:
		                            image = _c.sent();
		                            this.renderReplacedElement(container, curves, image);
		                            return [3 /*break*/, 8];
		                        case 7:
		                            _c.sent();
		                            this.context.logger.error("Error loading image " + container.src);
		                            return [3 /*break*/, 8];
		                        case 8:
		                            if (container instanceof CanvasElementContainer) {
		                                this.renderReplacedElement(container, curves, container.canvas);
		                            }
		                            if (!(container instanceof SVGElementContainer)) return [3 /*break*/, 12];
		                            _c.label = 9;
		                        case 9:
		                            _c.trys.push([9, 11, , 12]);
		                            return [4 /*yield*/, this.context.cache.match(container.svg)];
		                        case 10:
		                            image = _c.sent();
		                            this.renderReplacedElement(container, curves, image);
		                            return [3 /*break*/, 12];
		                        case 11:
		                            _c.sent();
		                            this.context.logger.error("Error loading svg " + container.svg.substring(0, 255));
		                            return [3 /*break*/, 12];
		                        case 12:
		                            if (!(container instanceof IFrameElementContainer && container.tree)) return [3 /*break*/, 14];
		                            iframeRenderer = new CanvasRenderer(this.context, {
		                                scale: this.options.scale,
		                                backgroundColor: container.backgroundColor,
		                                x: 0,
		                                y: 0,
		                                width: container.width,
		                                height: container.height
		                            });
		                            return [4 /*yield*/, iframeRenderer.render(container.tree)];
		                        case 13:
		                            canvas = _c.sent();
		                            if (container.width && container.height) {
		                                this.ctx.drawImage(canvas, 0, 0, container.width, container.height, container.bounds.left, container.bounds.top, container.bounds.width, container.bounds.height);
		                            }
		                            _c.label = 14;
		                        case 14:
		                            if (container instanceof InputElementContainer) {
		                                size = Math.min(container.bounds.width, container.bounds.height);
		                                if (container.type === CHECKBOX) {
		                                    if (container.checked) {
		                                        this.ctx.save();
		                                        this.path([
		                                            new Vector(container.bounds.left + size * 0.39363, container.bounds.top + size * 0.79),
		                                            new Vector(container.bounds.left + size * 0.16, container.bounds.top + size * 0.5549),
		                                            new Vector(container.bounds.left + size * 0.27347, container.bounds.top + size * 0.44071),
		                                            new Vector(container.bounds.left + size * 0.39694, container.bounds.top + size * 0.5649),
		                                            new Vector(container.bounds.left + size * 0.72983, container.bounds.top + size * 0.23),
		                                            new Vector(container.bounds.left + size * 0.84, container.bounds.top + size * 0.34085),
		                                            new Vector(container.bounds.left + size * 0.39363, container.bounds.top + size * 0.79)
		                                        ]);
		                                        this.ctx.fillStyle = asString(INPUT_COLOR);
		                                        this.ctx.fill();
		                                        this.ctx.restore();
		                                    }
		                                }
		                                else if (container.type === RADIO) {
		                                    if (container.checked) {
		                                        this.ctx.save();
		                                        this.ctx.beginPath();
		                                        this.ctx.arc(container.bounds.left + size / 2, container.bounds.top + size / 2, size / 4, 0, Math.PI * 2, true);
		                                        this.ctx.fillStyle = asString(INPUT_COLOR);
		                                        this.ctx.fill();
		                                        this.ctx.restore();
		                                    }
		                                }
		                            }
		                            if (isTextInputElement(container) && container.value.length) {
		                                _b = this.createFontStyle(styles), fontFamily = _b[0], fontSize = _b[1];
		                                baseline = this.fontMetrics.getMetrics(fontFamily, fontSize).baseline;
		                                this.ctx.font = fontFamily;
		                                this.ctx.fillStyle = asString(styles.color);
		                                this.ctx.textBaseline = 'alphabetic';
		                                this.ctx.textAlign = canvasTextAlign(container.styles.textAlign);
		                                bounds = contentBox(container);
		                                x = 0;
		                                switch (container.styles.textAlign) {
		                                    case 1 /* CENTER */:
		                                        x += bounds.width / 2;
		                                        break;
		                                    case 2 /* RIGHT */:
		                                        x += bounds.width;
		                                        break;
		                                }
		                                textBounds = bounds.add(x, 0, 0, -bounds.height / 2 + 1);
		                                this.ctx.save();
		                                this.path([
		                                    new Vector(bounds.left, bounds.top),
		                                    new Vector(bounds.left + bounds.width, bounds.top),
		                                    new Vector(bounds.left + bounds.width, bounds.top + bounds.height),
		                                    new Vector(bounds.left, bounds.top + bounds.height)
		                                ]);
		                                this.ctx.clip();
		                                this.renderTextWithLetterSpacing(new TextBounds(container.value, textBounds), styles.letterSpacing, baseline);
		                                this.ctx.restore();
		                                this.ctx.textBaseline = 'alphabetic';
		                                this.ctx.textAlign = 'left';
		                            }
		                            if (!contains(container.styles.display, 2048 /* LIST_ITEM */)) return [3 /*break*/, 20];
		                            if (!(container.styles.listStyleImage !== null)) return [3 /*break*/, 19];
		                            img = container.styles.listStyleImage;
		                            if (!(img.type === 0 /* URL */)) return [3 /*break*/, 18];
		                            image = void 0;
		                            url = img.url;
		                            _c.label = 15;
		                        case 15:
		                            _c.trys.push([15, 17, , 18]);
		                            return [4 /*yield*/, this.context.cache.match(url)];
		                        case 16:
		                            image = _c.sent();
		                            this.ctx.drawImage(image, container.bounds.left - (image.width + 10), container.bounds.top);
		                            return [3 /*break*/, 18];
		                        case 17:
		                            _c.sent();
		                            this.context.logger.error("Error loading list-style-image " + url);
		                            return [3 /*break*/, 18];
		                        case 18: return [3 /*break*/, 20];
		                        case 19:
		                            if (paint.listValue && container.styles.listStyleType !== -1 /* NONE */) {
		                                fontFamily = this.createFontStyle(styles)[0];
		                                this.ctx.font = fontFamily;
		                                this.ctx.fillStyle = asString(styles.color);
		                                this.ctx.textBaseline = 'middle';
		                                this.ctx.textAlign = 'right';
		                                bounds = new Bounds(container.bounds.left, container.bounds.top + getAbsoluteValue(container.styles.paddingTop, container.bounds.width), container.bounds.width, computeLineHeight(styles.lineHeight, styles.fontSize.number) / 2 + 1);
		                                this.renderTextWithLetterSpacing(new TextBounds(paint.listValue, bounds), styles.letterSpacing, computeLineHeight(styles.lineHeight, styles.fontSize.number) / 2 + 2);
		                                this.ctx.textBaseline = 'bottom';
		                                this.ctx.textAlign = 'left';
		                            }
		                            _c.label = 20;
		                        case 20: return [2 /*return*/];
		                    }
		                });
		            });
		        };
		        CanvasRenderer.prototype.renderStackContent = function (stack) {
		            return __awaiter(this, void 0, void 0, function () {
		                var _i, _a, child, _b, _c, child, _d, _e, child, _f, _g, child, _h, _j, child, _k, _l, child, _m, _o, child;
		                return __generator(this, function (_p) {
		                    switch (_p.label) {
		                        case 0:
		                            if (contains(stack.element.container.flags, 16 /* DEBUG_RENDER */)) {
		                                debugger;
		                            }
		                            // https://www.w3.org/TR/css-position-3/#painting-order
		                            // 1. the background and borders of the element forming the stacking context.
		                            return [4 /*yield*/, this.renderNodeBackgroundAndBorders(stack.element)];
		                        case 1:
		                            // https://www.w3.org/TR/css-position-3/#painting-order
		                            // 1. the background and borders of the element forming the stacking context.
		                            _p.sent();
		                            _i = 0, _a = stack.negativeZIndex;
		                            _p.label = 2;
		                        case 2:
		                            if (!(_i < _a.length)) return [3 /*break*/, 5];
		                            child = _a[_i];
		                            return [4 /*yield*/, this.renderStack(child)];
		                        case 3:
		                            _p.sent();
		                            _p.label = 4;
		                        case 4:
		                            _i++;
		                            return [3 /*break*/, 2];
		                        case 5: 
		                        // 3. For all its in-flow, non-positioned, block-level descendants in tree order:
		                        return [4 /*yield*/, this.renderNodeContent(stack.element)];
		                        case 6:
		                            // 3. For all its in-flow, non-positioned, block-level descendants in tree order:
		                            _p.sent();
		                            _b = 0, _c = stack.nonInlineLevel;
		                            _p.label = 7;
		                        case 7:
		                            if (!(_b < _c.length)) return [3 /*break*/, 10];
		                            child = _c[_b];
		                            return [4 /*yield*/, this.renderNode(child)];
		                        case 8:
		                            _p.sent();
		                            _p.label = 9;
		                        case 9:
		                            _b++;
		                            return [3 /*break*/, 7];
		                        case 10:
		                            _d = 0, _e = stack.nonPositionedFloats;
		                            _p.label = 11;
		                        case 11:
		                            if (!(_d < _e.length)) return [3 /*break*/, 14];
		                            child = _e[_d];
		                            return [4 /*yield*/, this.renderStack(child)];
		                        case 12:
		                            _p.sent();
		                            _p.label = 13;
		                        case 13:
		                            _d++;
		                            return [3 /*break*/, 11];
		                        case 14:
		                            _f = 0, _g = stack.nonPositionedInlineLevel;
		                            _p.label = 15;
		                        case 15:
		                            if (!(_f < _g.length)) return [3 /*break*/, 18];
		                            child = _g[_f];
		                            return [4 /*yield*/, this.renderStack(child)];
		                        case 16:
		                            _p.sent();
		                            _p.label = 17;
		                        case 17:
		                            _f++;
		                            return [3 /*break*/, 15];
		                        case 18:
		                            _h = 0, _j = stack.inlineLevel;
		                            _p.label = 19;
		                        case 19:
		                            if (!(_h < _j.length)) return [3 /*break*/, 22];
		                            child = _j[_h];
		                            return [4 /*yield*/, this.renderNode(child)];
		                        case 20:
		                            _p.sent();
		                            _p.label = 21;
		                        case 21:
		                            _h++;
		                            return [3 /*break*/, 19];
		                        case 22:
		                            _k = 0, _l = stack.zeroOrAutoZIndexOrTransformedOrOpacity;
		                            _p.label = 23;
		                        case 23:
		                            if (!(_k < _l.length)) return [3 /*break*/, 26];
		                            child = _l[_k];
		                            return [4 /*yield*/, this.renderStack(child)];
		                        case 24:
		                            _p.sent();
		                            _p.label = 25;
		                        case 25:
		                            _k++;
		                            return [3 /*break*/, 23];
		                        case 26:
		                            _m = 0, _o = stack.positiveZIndex;
		                            _p.label = 27;
		                        case 27:
		                            if (!(_m < _o.length)) return [3 /*break*/, 30];
		                            child = _o[_m];
		                            return [4 /*yield*/, this.renderStack(child)];
		                        case 28:
		                            _p.sent();
		                            _p.label = 29;
		                        case 29:
		                            _m++;
		                            return [3 /*break*/, 27];
		                        case 30: return [2 /*return*/];
		                    }
		                });
		            });
		        };
		        CanvasRenderer.prototype.mask = function (paths) {
		            this.ctx.beginPath();
		            this.ctx.moveTo(0, 0);
		            this.ctx.lineTo(this.canvas.width, 0);
		            this.ctx.lineTo(this.canvas.width, this.canvas.height);
		            this.ctx.lineTo(0, this.canvas.height);
		            this.ctx.lineTo(0, 0);
		            this.formatPath(paths.slice(0).reverse());
		            this.ctx.closePath();
		        };
		        CanvasRenderer.prototype.path = function (paths) {
		            this.ctx.beginPath();
		            this.formatPath(paths);
		            this.ctx.closePath();
		        };
		        CanvasRenderer.prototype.formatPath = function (paths) {
		            var _this = this;
		            paths.forEach(function (point, index) {
		                var start = isBezierCurve(point) ? point.start : point;
		                if (index === 0) {
		                    _this.ctx.moveTo(start.x, start.y);
		                }
		                else {
		                    _this.ctx.lineTo(start.x, start.y);
		                }
		                if (isBezierCurve(point)) {
		                    _this.ctx.bezierCurveTo(point.startControl.x, point.startControl.y, point.endControl.x, point.endControl.y, point.end.x, point.end.y);
		                }
		            });
		        };
		        CanvasRenderer.prototype.renderRepeat = function (path, pattern, offsetX, offsetY) {
		            this.path(path);
		            this.ctx.fillStyle = pattern;
		            this.ctx.translate(offsetX, offsetY);
		            this.ctx.fill();
		            this.ctx.translate(-offsetX, -offsetY);
		        };
		        CanvasRenderer.prototype.resizeImage = function (image, width, height) {
		            var _a;
		            if (image.width === width && image.height === height) {
		                return image;
		            }
		            var ownerDocument = (_a = this.canvas.ownerDocument) !== null && _a !== void 0 ? _a : document;
		            var canvas = ownerDocument.createElement('canvas');
		            canvas.width = Math.max(1, width);
		            canvas.height = Math.max(1, height);
		            var ctx = canvas.getContext('2d');
		            ctx.drawImage(image, 0, 0, image.width, image.height, 0, 0, width, height);
		            return canvas;
		        };
		        CanvasRenderer.prototype.renderBackgroundImage = function (container) {
		            return __awaiter(this, void 0, void 0, function () {
		                var index, _loop_1, this_1, _i, _a, backgroundImage;
		                return __generator(this, function (_b) {
		                    switch (_b.label) {
		                        case 0:
		                            index = container.styles.backgroundImage.length - 1;
		                            _loop_1 = function (backgroundImage) {
		                                var image, url, _c, path, x, y, width, height, pattern, _d, path, x, y, width, height, _e, lineLength, x0, x1, y0, y1, canvas, ctx, gradient_1, pattern, _f, path, left, top_1, width, height, position, x, y, _g, rx, ry, radialGradient_1, midX, midY, f, invF;
		                                return __generator(this, function (_h) {
		                                    switch (_h.label) {
		                                        case 0:
		                                            if (!(backgroundImage.type === 0 /* URL */)) return [3 /*break*/, 5];
		                                            image = void 0;
		                                            url = backgroundImage.url;
		                                            _h.label = 1;
		                                        case 1:
		                                            _h.trys.push([1, 3, , 4]);
		                                            return [4 /*yield*/, this_1.context.cache.match(url)];
		                                        case 2:
		                                            image = _h.sent();
		                                            return [3 /*break*/, 4];
		                                        case 3:
		                                            _h.sent();
		                                            this_1.context.logger.error("Error loading background-image " + url);
		                                            return [3 /*break*/, 4];
		                                        case 4:
		                                            if (image) {
		                                                _c = calculateBackgroundRendering(container, index, [
		                                                    image.width,
		                                                    image.height,
		                                                    image.width / image.height
		                                                ]), path = _c[0], x = _c[1], y = _c[2], width = _c[3], height = _c[4];
		                                                pattern = this_1.ctx.createPattern(this_1.resizeImage(image, width, height), 'repeat');
		                                                this_1.renderRepeat(path, pattern, x, y);
		                                            }
		                                            return [3 /*break*/, 6];
		                                        case 5:
		                                            if (isLinearGradient(backgroundImage)) {
		                                                _d = calculateBackgroundRendering(container, index, [null, null, null]), path = _d[0], x = _d[1], y = _d[2], width = _d[3], height = _d[4];
		                                                _e = calculateGradientDirection(backgroundImage.angle, width, height), lineLength = _e[0], x0 = _e[1], x1 = _e[2], y0 = _e[3], y1 = _e[4];
		                                                canvas = document.createElement('canvas');
		                                                canvas.width = width;
		                                                canvas.height = height;
		                                                ctx = canvas.getContext('2d');
		                                                gradient_1 = ctx.createLinearGradient(x0, y0, x1, y1);
		                                                processColorStops(backgroundImage.stops, lineLength).forEach(function (colorStop) {
		                                                    return gradient_1.addColorStop(colorStop.stop, asString(colorStop.color));
		                                                });
		                                                ctx.fillStyle = gradient_1;
		                                                ctx.fillRect(0, 0, width, height);
		                                                if (width > 0 && height > 0) {
		                                                    pattern = this_1.ctx.createPattern(canvas, 'repeat');
		                                                    this_1.renderRepeat(path, pattern, x, y);
		                                                }
		                                            }
		                                            else if (isRadialGradient(backgroundImage)) {
		                                                _f = calculateBackgroundRendering(container, index, [
		                                                    null,
		                                                    null,
		                                                    null
		                                                ]), path = _f[0], left = _f[1], top_1 = _f[2], width = _f[3], height = _f[4];
		                                                position = backgroundImage.position.length === 0 ? [FIFTY_PERCENT] : backgroundImage.position;
		                                                x = getAbsoluteValue(position[0], width);
		                                                y = getAbsoluteValue(position[position.length - 1], height);
		                                                _g = calculateRadius(backgroundImage, x, y, width, height), rx = _g[0], ry = _g[1];
		                                                if (rx > 0 && ry > 0) {
		                                                    radialGradient_1 = this_1.ctx.createRadialGradient(left + x, top_1 + y, 0, left + x, top_1 + y, rx);
		                                                    processColorStops(backgroundImage.stops, rx * 2).forEach(function (colorStop) {
		                                                        return radialGradient_1.addColorStop(colorStop.stop, asString(colorStop.color));
		                                                    });
		                                                    this_1.path(path);
		                                                    this_1.ctx.fillStyle = radialGradient_1;
		                                                    if (rx !== ry) {
		                                                        midX = container.bounds.left + 0.5 * container.bounds.width;
		                                                        midY = container.bounds.top + 0.5 * container.bounds.height;
		                                                        f = ry / rx;
		                                                        invF = 1 / f;
		                                                        this_1.ctx.save();
		                                                        this_1.ctx.translate(midX, midY);
		                                                        this_1.ctx.transform(1, 0, 0, f, 0, 0);
		                                                        this_1.ctx.translate(-midX, -midY);
		                                                        this_1.ctx.fillRect(left, invF * (top_1 - midY) + midY, width, height * invF);
		                                                        this_1.ctx.restore();
		                                                    }
		                                                    else {
		                                                        this_1.ctx.fill();
		                                                    }
		                                                }
		                                            }
		                                            _h.label = 6;
		                                        case 6:
		                                            index--;
		                                            return [2 /*return*/];
		                                    }
		                                });
		                            };
		                            this_1 = this;
		                            _i = 0, _a = container.styles.backgroundImage.slice(0).reverse();
		                            _b.label = 1;
		                        case 1:
		                            if (!(_i < _a.length)) return [3 /*break*/, 4];
		                            backgroundImage = _a[_i];
		                            return [5 /*yield**/, _loop_1(backgroundImage)];
		                        case 2:
		                            _b.sent();
		                            _b.label = 3;
		                        case 3:
		                            _i++;
		                            return [3 /*break*/, 1];
		                        case 4: return [2 /*return*/];
		                    }
		                });
		            });
		        };
		        CanvasRenderer.prototype.renderSolidBorder = function (color, side, curvePoints) {
		            return __awaiter(this, void 0, void 0, function () {
		                return __generator(this, function (_a) {
		                    this.path(parsePathForBorder(curvePoints, side));
		                    this.ctx.fillStyle = asString(color);
		                    this.ctx.fill();
		                    return [2 /*return*/];
		                });
		            });
		        };
		        CanvasRenderer.prototype.renderDoubleBorder = function (color, width, side, curvePoints) {
		            return __awaiter(this, void 0, void 0, function () {
		                var outerPaths, innerPaths;
		                return __generator(this, function (_a) {
		                    switch (_a.label) {
		                        case 0:
		                            if (!(width < 3)) return [3 /*break*/, 2];
		                            return [4 /*yield*/, this.renderSolidBorder(color, side, curvePoints)];
		                        case 1:
		                            _a.sent();
		                            return [2 /*return*/];
		                        case 2:
		                            outerPaths = parsePathForBorderDoubleOuter(curvePoints, side);
		                            this.path(outerPaths);
		                            this.ctx.fillStyle = asString(color);
		                            this.ctx.fill();
		                            innerPaths = parsePathForBorderDoubleInner(curvePoints, side);
		                            this.path(innerPaths);
		                            this.ctx.fill();
		                            return [2 /*return*/];
		                    }
		                });
		            });
		        };
		        CanvasRenderer.prototype.renderNodeBackgroundAndBorders = function (paint) {
		            return __awaiter(this, void 0, void 0, function () {
		                var styles, hasBackground, borders, backgroundPaintingArea, side, _i, borders_1, border;
		                var _this = this;
		                return __generator(this, function (_a) {
		                    switch (_a.label) {
		                        case 0:
		                            this.applyEffects(paint.getEffects(2 /* BACKGROUND_BORDERS */));
		                            styles = paint.container.styles;
		                            hasBackground = !isTransparent(styles.backgroundColor) || styles.backgroundImage.length;
		                            borders = [
		                                { style: styles.borderTopStyle, color: styles.borderTopColor, width: styles.borderTopWidth },
		                                { style: styles.borderRightStyle, color: styles.borderRightColor, width: styles.borderRightWidth },
		                                { style: styles.borderBottomStyle, color: styles.borderBottomColor, width: styles.borderBottomWidth },
		                                { style: styles.borderLeftStyle, color: styles.borderLeftColor, width: styles.borderLeftWidth }
		                            ];
		                            backgroundPaintingArea = calculateBackgroundCurvedPaintingArea(getBackgroundValueForIndex(styles.backgroundClip, 0), paint.curves);
		                            if (!(hasBackground || styles.boxShadow.length)) return [3 /*break*/, 2];
		                            this.ctx.save();
		                            this.path(backgroundPaintingArea);
		                            this.ctx.clip();
		                            if (!isTransparent(styles.backgroundColor)) {
		                                this.ctx.fillStyle = asString(styles.backgroundColor);
		                                this.ctx.fill();
		                            }
		                            return [4 /*yield*/, this.renderBackgroundImage(paint.container)];
		                        case 1:
		                            _a.sent();
		                            this.ctx.restore();
		                            styles.boxShadow
		                                .slice(0)
		                                .reverse()
		                                .forEach(function (shadow) {
		                                _this.ctx.save();
		                                var borderBoxArea = calculateBorderBoxPath(paint.curves);
		                                var maskOffset = shadow.inset ? 0 : MASK_OFFSET;
		                                var shadowPaintingArea = transformPath(borderBoxArea, -maskOffset + (shadow.inset ? 1 : -1) * shadow.spread.number, (shadow.inset ? 1 : -1) * shadow.spread.number, shadow.spread.number * (shadow.inset ? -2 : 2), shadow.spread.number * (shadow.inset ? -2 : 2));
		                                if (shadow.inset) {
		                                    _this.path(borderBoxArea);
		                                    _this.ctx.clip();
		                                    _this.mask(shadowPaintingArea);
		                                }
		                                else {
		                                    _this.mask(borderBoxArea);
		                                    _this.ctx.clip();
		                                    _this.path(shadowPaintingArea);
		                                }
		                                _this.ctx.shadowOffsetX = shadow.offsetX.number + maskOffset;
		                                _this.ctx.shadowOffsetY = shadow.offsetY.number;
		                                _this.ctx.shadowColor = asString(shadow.color);
		                                _this.ctx.shadowBlur = shadow.blur.number;
		                                _this.ctx.fillStyle = shadow.inset ? asString(shadow.color) : 'rgba(0,0,0,1)';
		                                _this.ctx.fill();
		                                _this.ctx.restore();
		                            });
		                            _a.label = 2;
		                        case 2:
		                            side = 0;
		                            _i = 0, borders_1 = borders;
		                            _a.label = 3;
		                        case 3:
		                            if (!(_i < borders_1.length)) return [3 /*break*/, 13];
		                            border = borders_1[_i];
		                            if (!(border.style !== 0 /* NONE */ && !isTransparent(border.color) && border.width > 0)) return [3 /*break*/, 11];
		                            if (!(border.style === 2 /* DASHED */)) return [3 /*break*/, 5];
		                            return [4 /*yield*/, this.renderDashedDottedBorder(border.color, border.width, side, paint.curves, 2 /* DASHED */)];
		                        case 4:
		                            _a.sent();
		                            return [3 /*break*/, 11];
		                        case 5:
		                            if (!(border.style === 3 /* DOTTED */)) return [3 /*break*/, 7];
		                            return [4 /*yield*/, this.renderDashedDottedBorder(border.color, border.width, side, paint.curves, 3 /* DOTTED */)];
		                        case 6:
		                            _a.sent();
		                            return [3 /*break*/, 11];
		                        case 7:
		                            if (!(border.style === 4 /* DOUBLE */)) return [3 /*break*/, 9];
		                            return [4 /*yield*/, this.renderDoubleBorder(border.color, border.width, side, paint.curves)];
		                        case 8:
		                            _a.sent();
		                            return [3 /*break*/, 11];
		                        case 9: return [4 /*yield*/, this.renderSolidBorder(border.color, side, paint.curves)];
		                        case 10:
		                            _a.sent();
		                            _a.label = 11;
		                        case 11:
		                            side++;
		                            _a.label = 12;
		                        case 12:
		                            _i++;
		                            return [3 /*break*/, 3];
		                        case 13: return [2 /*return*/];
		                    }
		                });
		            });
		        };
		        CanvasRenderer.prototype.renderDashedDottedBorder = function (color, width, side, curvePoints, style) {
		            return __awaiter(this, void 0, void 0, function () {
		                var strokePaths, boxPaths, startX, startY, endX, endY, length, dashLength, spaceLength, useLineDash, multiplier, numberOfDashes, minSpace, maxSpace, path1, path2, path1, path2;
		                return __generator(this, function (_a) {
		                    this.ctx.save();
		                    strokePaths = parsePathForBorderStroke(curvePoints, side);
		                    boxPaths = parsePathForBorder(curvePoints, side);
		                    if (style === 2 /* DASHED */) {
		                        this.path(boxPaths);
		                        this.ctx.clip();
		                    }
		                    if (isBezierCurve(boxPaths[0])) {
		                        startX = boxPaths[0].start.x;
		                        startY = boxPaths[0].start.y;
		                    }
		                    else {
		                        startX = boxPaths[0].x;
		                        startY = boxPaths[0].y;
		                    }
		                    if (isBezierCurve(boxPaths[1])) {
		                        endX = boxPaths[1].end.x;
		                        endY = boxPaths[1].end.y;
		                    }
		                    else {
		                        endX = boxPaths[1].x;
		                        endY = boxPaths[1].y;
		                    }
		                    if (side === 0 || side === 2) {
		                        length = Math.abs(startX - endX);
		                    }
		                    else {
		                        length = Math.abs(startY - endY);
		                    }
		                    this.ctx.beginPath();
		                    if (style === 3 /* DOTTED */) {
		                        this.formatPath(strokePaths);
		                    }
		                    else {
		                        this.formatPath(boxPaths.slice(0, 2));
		                    }
		                    dashLength = width < 3 ? width * 3 : width * 2;
		                    spaceLength = width < 3 ? width * 2 : width;
		                    if (style === 3 /* DOTTED */) {
		                        dashLength = width;
		                        spaceLength = width;
		                    }
		                    useLineDash = true;
		                    if (length <= dashLength * 2) {
		                        useLineDash = false;
		                    }
		                    else if (length <= dashLength * 2 + spaceLength) {
		                        multiplier = length / (2 * dashLength + spaceLength);
		                        dashLength *= multiplier;
		                        spaceLength *= multiplier;
		                    }
		                    else {
		                        numberOfDashes = Math.floor((length + spaceLength) / (dashLength + spaceLength));
		                        minSpace = (length - numberOfDashes * dashLength) / (numberOfDashes - 1);
		                        maxSpace = (length - (numberOfDashes + 1) * dashLength) / numberOfDashes;
		                        spaceLength =
		                            maxSpace <= 0 || Math.abs(spaceLength - minSpace) < Math.abs(spaceLength - maxSpace)
		                                ? minSpace
		                                : maxSpace;
		                    }
		                    if (useLineDash) {
		                        if (style === 3 /* DOTTED */) {
		                            this.ctx.setLineDash([0, dashLength + spaceLength]);
		                        }
		                        else {
		                            this.ctx.setLineDash([dashLength, spaceLength]);
		                        }
		                    }
		                    if (style === 3 /* DOTTED */) {
		                        this.ctx.lineCap = 'round';
		                        this.ctx.lineWidth = width;
		                    }
		                    else {
		                        this.ctx.lineWidth = width * 2 + 1.1;
		                    }
		                    this.ctx.strokeStyle = asString(color);
		                    this.ctx.stroke();
		                    this.ctx.setLineDash([]);
		                    // dashed round edge gap
		                    if (style === 2 /* DASHED */) {
		                        if (isBezierCurve(boxPaths[0])) {
		                            path1 = boxPaths[3];
		                            path2 = boxPaths[0];
		                            this.ctx.beginPath();
		                            this.formatPath([new Vector(path1.end.x, path1.end.y), new Vector(path2.start.x, path2.start.y)]);
		                            this.ctx.stroke();
		                        }
		                        if (isBezierCurve(boxPaths[1])) {
		                            path1 = boxPaths[1];
		                            path2 = boxPaths[2];
		                            this.ctx.beginPath();
		                            this.formatPath([new Vector(path1.end.x, path1.end.y), new Vector(path2.start.x, path2.start.y)]);
		                            this.ctx.stroke();
		                        }
		                    }
		                    this.ctx.restore();
		                    return [2 /*return*/];
		                });
		            });
		        };
		        CanvasRenderer.prototype.render = function (element) {
		            return __awaiter(this, void 0, void 0, function () {
		                var stack;
		                return __generator(this, function (_a) {
		                    switch (_a.label) {
		                        case 0:
		                            if (this.options.backgroundColor) {
		                                this.ctx.fillStyle = asString(this.options.backgroundColor);
		                                this.ctx.fillRect(this.options.x, this.options.y, this.options.width, this.options.height);
		                            }
		                            stack = parseStackingContexts(element);
		                            return [4 /*yield*/, this.renderStack(stack)];
		                        case 1:
		                            _a.sent();
		                            this.applyEffects([]);
		                            return [2 /*return*/, this.canvas];
		                    }
		                });
		            });
		        };
		        return CanvasRenderer;
		    }(Renderer));
		    var isTextInputElement = function (container) {
		        if (container instanceof TextareaElementContainer) {
		            return true;
		        }
		        else if (container instanceof SelectElementContainer) {
		            return true;
		        }
		        else if (container instanceof InputElementContainer && container.type !== RADIO && container.type !== CHECKBOX) {
		            return true;
		        }
		        return false;
		    };
		    var calculateBackgroundCurvedPaintingArea = function (clip, curves) {
		        switch (clip) {
		            case 0 /* BORDER_BOX */:
		                return calculateBorderBoxPath(curves);
		            case 2 /* CONTENT_BOX */:
		                return calculateContentBoxPath(curves);
		            case 1 /* PADDING_BOX */:
		            default:
		                return calculatePaddingBoxPath(curves);
		        }
		    };
		    var canvasTextAlign = function (textAlign) {
		        switch (textAlign) {
		            case 1 /* CENTER */:
		                return 'center';
		            case 2 /* RIGHT */:
		                return 'right';
		            case 0 /* LEFT */:
		            default:
		                return 'left';
		        }
		    };
		    // see https://github.com/niklasvh/html2canvas/pull/2645
		    var iOSBrokenFonts = ['-apple-system', 'system-ui'];
		    var fixIOSSystemFonts = function (fontFamilies) {
		        return /iPhone OS 15_(0|1)/.test(window.navigator.userAgent)
		            ? fontFamilies.filter(function (fontFamily) { return iOSBrokenFonts.indexOf(fontFamily) === -1; })
		            : fontFamilies;
		    };

		    var ForeignObjectRenderer = /** @class */ (function (_super) {
		        __extends(ForeignObjectRenderer, _super);
		        function ForeignObjectRenderer(context, options) {
		            var _this = _super.call(this, context, options) || this;
		            _this.canvas = options.canvas ? options.canvas : document.createElement('canvas');
		            _this.ctx = _this.canvas.getContext('2d');
		            _this.options = options;
		            _this.canvas.width = Math.floor(options.width * options.scale);
		            _this.canvas.height = Math.floor(options.height * options.scale);
		            _this.canvas.style.width = options.width + "px";
		            _this.canvas.style.height = options.height + "px";
		            _this.ctx.scale(_this.options.scale, _this.options.scale);
		            _this.ctx.translate(-options.x, -options.y);
		            _this.context.logger.debug("EXPERIMENTAL ForeignObject renderer initialized (" + options.width + "x" + options.height + " at " + options.x + "," + options.y + ") with scale " + options.scale);
		            return _this;
		        }
		        ForeignObjectRenderer.prototype.render = function (element) {
		            return __awaiter(this, void 0, void 0, function () {
		                var svg, img;
		                return __generator(this, function (_a) {
		                    switch (_a.label) {
		                        case 0:
		                            svg = createForeignObjectSVG(this.options.width * this.options.scale, this.options.height * this.options.scale, this.options.scale, this.options.scale, element);
		                            return [4 /*yield*/, loadSerializedSVG(svg)];
		                        case 1:
		                            img = _a.sent();
		                            if (this.options.backgroundColor) {
		                                this.ctx.fillStyle = asString(this.options.backgroundColor);
		                                this.ctx.fillRect(0, 0, this.options.width * this.options.scale, this.options.height * this.options.scale);
		                            }
		                            this.ctx.drawImage(img, -this.options.x * this.options.scale, -this.options.y * this.options.scale);
		                            return [2 /*return*/, this.canvas];
		                    }
		                });
		            });
		        };
		        return ForeignObjectRenderer;
		    }(Renderer));
		    var loadSerializedSVG = function (svg) {
		        return new Promise(function (resolve, reject) {
		            var img = new Image();
		            img.onload = function () {
		                resolve(img);
		            };
		            img.onerror = reject;
		            img.src = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(new XMLSerializer().serializeToString(svg));
		        });
		    };

		    var Logger = /** @class */ (function () {
		        function Logger(_a) {
		            var id = _a.id, enabled = _a.enabled;
		            this.id = id;
		            this.enabled = enabled;
		            this.start = Date.now();
		        }
		        // eslint-disable-next-line @typescript-eslint/no-explicit-any
		        Logger.prototype.debug = function () {
		            var args = [];
		            for (var _i = 0; _i < arguments.length; _i++) {
		                args[_i] = arguments[_i];
		            }
		            if (this.enabled) {
		                // eslint-disable-next-line no-console
		                if (typeof window !== 'undefined' && window.console && typeof console.debug === 'function') {
		                    // eslint-disable-next-line no-console
		                    console.debug.apply(console, __spreadArray([this.id, this.getTime() + "ms"], args));
		                }
		                else {
		                    this.info.apply(this, args);
		                }
		            }
		        };
		        Logger.prototype.getTime = function () {
		            return Date.now() - this.start;
		        };
		        // eslint-disable-next-line @typescript-eslint/no-explicit-any
		        Logger.prototype.info = function () {
		            var args = [];
		            for (var _i = 0; _i < arguments.length; _i++) {
		                args[_i] = arguments[_i];
		            }
		            if (this.enabled) {
		                // eslint-disable-next-line no-console
		                if (typeof window !== 'undefined' && window.console && typeof console.info === 'function') {
		                    // eslint-disable-next-line no-console
		                    console.info.apply(console, __spreadArray([this.id, this.getTime() + "ms"], args));
		                }
		            }
		        };
		        // eslint-disable-next-line @typescript-eslint/no-explicit-any
		        Logger.prototype.warn = function () {
		            var args = [];
		            for (var _i = 0; _i < arguments.length; _i++) {
		                args[_i] = arguments[_i];
		            }
		            if (this.enabled) {
		                // eslint-disable-next-line no-console
		                if (typeof window !== 'undefined' && window.console && typeof console.warn === 'function') {
		                    // eslint-disable-next-line no-console
		                    console.warn.apply(console, __spreadArray([this.id, this.getTime() + "ms"], args));
		                }
		                else {
		                    this.info.apply(this, args);
		                }
		            }
		        };
		        // eslint-disable-next-line @typescript-eslint/no-explicit-any
		        Logger.prototype.error = function () {
		            var args = [];
		            for (var _i = 0; _i < arguments.length; _i++) {
		                args[_i] = arguments[_i];
		            }
		            if (this.enabled) {
		                // eslint-disable-next-line no-console
		                if (typeof window !== 'undefined' && window.console && typeof console.error === 'function') {
		                    // eslint-disable-next-line no-console
		                    console.error.apply(console, __spreadArray([this.id, this.getTime() + "ms"], args));
		                }
		                else {
		                    this.info.apply(this, args);
		                }
		            }
		        };
		        Logger.instances = {};
		        return Logger;
		    }());

		    var Context = /** @class */ (function () {
		        function Context(options, windowBounds) {
		            var _a;
		            this.windowBounds = windowBounds;
		            this.instanceName = "#" + Context.instanceCount++;
		            this.logger = new Logger({ id: this.instanceName, enabled: options.logging });
		            this.cache = (_a = options.cache) !== null && _a !== void 0 ? _a : new Cache(this, options);
		        }
		        Context.instanceCount = 1;
		        return Context;
		    }());

		    var html2canvas = function (element, options) {
		        if (options === void 0) { options = {}; }
		        return renderElement(element, options);
		    };
		    if (typeof window !== 'undefined') {
		        CacheStorage.setContext(window);
		    }
		    var renderElement = function (element, opts) { return __awaiter(void 0, void 0, void 0, function () {
		        var ownerDocument, defaultView, resourceOptions, contextOptions, windowOptions, windowBounds, context, foreignObjectRendering, cloneOptions, documentCloner, clonedElement, container, _a, width, height, left, top, backgroundColor, renderOptions, canvas, renderer, root, renderer;
		        var _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t;
		        return __generator(this, function (_u) {
		            switch (_u.label) {
		                case 0:
		                    if (!element || typeof element !== 'object') {
		                        return [2 /*return*/, Promise.reject('Invalid element provided as first argument')];
		                    }
		                    ownerDocument = element.ownerDocument;
		                    if (!ownerDocument) {
		                        throw new Error("Element is not attached to a Document");
		                    }
		                    defaultView = ownerDocument.defaultView;
		                    if (!defaultView) {
		                        throw new Error("Document is not attached to a Window");
		                    }
		                    resourceOptions = {
		                        allowTaint: (_b = opts.allowTaint) !== null && _b !== void 0 ? _b : false,
		                        imageTimeout: (_c = opts.imageTimeout) !== null && _c !== void 0 ? _c : 15000,
		                        proxy: opts.proxy,
		                        useCORS: (_d = opts.useCORS) !== null && _d !== void 0 ? _d : false
		                    };
		                    contextOptions = __assign({ logging: (_e = opts.logging) !== null && _e !== void 0 ? _e : true, cache: opts.cache }, resourceOptions);
		                    windowOptions = {
		                        windowWidth: (_f = opts.windowWidth) !== null && _f !== void 0 ? _f : defaultView.innerWidth,
		                        windowHeight: (_g = opts.windowHeight) !== null && _g !== void 0 ? _g : defaultView.innerHeight,
		                        scrollX: (_h = opts.scrollX) !== null && _h !== void 0 ? _h : defaultView.pageXOffset,
		                        scrollY: (_j = opts.scrollY) !== null && _j !== void 0 ? _j : defaultView.pageYOffset
		                    };
		                    windowBounds = new Bounds(windowOptions.scrollX, windowOptions.scrollY, windowOptions.windowWidth, windowOptions.windowHeight);
		                    context = new Context(contextOptions, windowBounds);
		                    foreignObjectRendering = (_k = opts.foreignObjectRendering) !== null && _k !== void 0 ? _k : false;
		                    cloneOptions = {
		                        allowTaint: (_l = opts.allowTaint) !== null && _l !== void 0 ? _l : false,
		                        onclone: opts.onclone,
		                        ignoreElements: opts.ignoreElements,
		                        inlineImages: foreignObjectRendering,
		                        copyStyles: foreignObjectRendering
		                    };
		                    context.logger.debug("Starting document clone with size " + windowBounds.width + "x" + windowBounds.height + " scrolled to " + -windowBounds.left + "," + -windowBounds.top);
		                    documentCloner = new DocumentCloner(context, element, cloneOptions);
		                    clonedElement = documentCloner.clonedReferenceElement;
		                    if (!clonedElement) {
		                        return [2 /*return*/, Promise.reject("Unable to find element in cloned iframe")];
		                    }
		                    return [4 /*yield*/, documentCloner.toIFrame(ownerDocument, windowBounds)];
		                case 1:
		                    container = _u.sent();
		                    _a = isBodyElement(clonedElement) || isHTMLElement(clonedElement)
		                        ? parseDocumentSize(clonedElement.ownerDocument)
		                        : parseBounds(context, clonedElement), width = _a.width, height = _a.height, left = _a.left, top = _a.top;
		                    backgroundColor = parseBackgroundColor(context, clonedElement, opts.backgroundColor);
		                    renderOptions = {
		                        canvas: opts.canvas,
		                        backgroundColor: backgroundColor,
		                        scale: (_o = (_m = opts.scale) !== null && _m !== void 0 ? _m : defaultView.devicePixelRatio) !== null && _o !== void 0 ? _o : 1,
		                        x: ((_p = opts.x) !== null && _p !== void 0 ? _p : 0) + left,
		                        y: ((_q = opts.y) !== null && _q !== void 0 ? _q : 0) + top,
		                        width: (_r = opts.width) !== null && _r !== void 0 ? _r : Math.ceil(width),
		                        height: (_s = opts.height) !== null && _s !== void 0 ? _s : Math.ceil(height)
		                    };
		                    if (!foreignObjectRendering) return [3 /*break*/, 3];
		                    context.logger.debug("Document cloned, using foreign object rendering");
		                    renderer = new ForeignObjectRenderer(context, renderOptions);
		                    return [4 /*yield*/, renderer.render(clonedElement)];
		                case 2:
		                    canvas = _u.sent();
		                    return [3 /*break*/, 5];
		                case 3:
		                    context.logger.debug("Document cloned, element located at " + left + "," + top + " with size " + width + "x" + height + " using computed rendering");
		                    context.logger.debug("Starting DOM parsing");
		                    root = parseTree(context, clonedElement);
		                    if (backgroundColor === root.styles.backgroundColor) {
		                        root.styles.backgroundColor = COLORS.TRANSPARENT;
		                    }
		                    context.logger.debug("Starting renderer for element at " + renderOptions.x + "," + renderOptions.y + " with size " + renderOptions.width + "x" + renderOptions.height);
		                    renderer = new CanvasRenderer(context, renderOptions);
		                    return [4 /*yield*/, renderer.render(root)];
		                case 4:
		                    canvas = _u.sent();
		                    _u.label = 5;
		                case 5:
		                    if ((_t = opts.removeContainer) !== null && _t !== void 0 ? _t : true) {
		                        if (!DocumentCloner.destroy(container)) {
		                            context.logger.error("Cannot detach cloned iframe as it is not in the DOM anymore");
		                        }
		                    }
		                    context.logger.debug("Finished rendering");
		                    return [2 /*return*/, canvas];
		            }
		        });
		    }); };
		    var parseBackgroundColor = function (context, element, backgroundColorOverride) {
		        var ownerDocument = element.ownerDocument;
		        // http://www.w3.org/TR/css3-background/#special-backgrounds
		        var documentBackgroundColor = ownerDocument.documentElement
		            ? parseColor(context, getComputedStyle(ownerDocument.documentElement).backgroundColor)
		            : COLORS.TRANSPARENT;
		        var bodyBackgroundColor = ownerDocument.body
		            ? parseColor(context, getComputedStyle(ownerDocument.body).backgroundColor)
		            : COLORS.TRANSPARENT;
		        var defaultBackgroundColor = typeof backgroundColorOverride === 'string'
		            ? parseColor(context, backgroundColorOverride)
		            : backgroundColorOverride === null
		                ? COLORS.TRANSPARENT
		                : 0xffffffff;
		        return element === ownerDocument.documentElement
		            ? isTransparent(documentBackgroundColor)
		                ? isTransparent(bodyBackgroundColor)
		                    ? defaultBackgroundColor
		                    : bodyBackgroundColor
		                : documentBackgroundColor
		            : defaultBackgroundColor;
		    };

		    return html2canvas;

		})));
		
	} (html2canvas$1));

	var html2canvas = html2canvas$1.exports;

	var toastify = {exports: {}};

	/*!
	 * Toastify js 1.12.0
	 * https://github.com/apvarun/toastify-js
	 * @license MIT licensed
	 *
	 * Copyright (C) 2018 Varun A P
	 */

	(function (module) {
		(function(root, factory) {
		  if (module.exports) {
		    module.exports = factory();
		  } else {
		    root.Toastify = factory();
		  }
		})(commonjsGlobal, function(global) {
		  // Object initialization
		  var Toastify = function(options) {
		      // Returning a new init object
		      return new Toastify.lib.init(options);
		    },
		    // Library version
		    version = "1.12.0";

		  // Set the default global options
		  Toastify.defaults = {
		    oldestFirst: true,
		    text: "Toastify is awesome!",
		    node: undefined,
		    duration: 3000,
		    selector: undefined,
		    callback: function () {
		    },
		    destination: undefined,
		    newWindow: false,
		    close: false,
		    gravity: "toastify-top",
		    positionLeft: false,
		    position: '',
		    backgroundColor: '',
		    avatar: "",
		    className: "",
		    stopOnFocus: true,
		    onClick: function () {
		    },
		    offset: {x: 0, y: 0},
		    escapeMarkup: true,
		    ariaLive: 'polite',
		    style: {background: ''}
		  };

		  // Defining the prototype of the object
		  Toastify.lib = Toastify.prototype = {
		    toastify: version,

		    constructor: Toastify,

		    // Initializing the object with required parameters
		    init: function(options) {
		      // Verifying and validating the input object
		      if (!options) {
		        options = {};
		      }

		      // Creating the options object
		      this.options = {};

		      this.toastElement = null;

		      // Validating the options
		      this.options.text = options.text || Toastify.defaults.text; // Display message
		      this.options.node = options.node || Toastify.defaults.node;  // Display content as node
		      this.options.duration = options.duration === 0 ? 0 : options.duration || Toastify.defaults.duration; // Display duration
		      this.options.selector = options.selector || Toastify.defaults.selector; // Parent selector
		      this.options.callback = options.callback || Toastify.defaults.callback; // Callback after display
		      this.options.destination = options.destination || Toastify.defaults.destination; // On-click destination
		      this.options.newWindow = options.newWindow || Toastify.defaults.newWindow; // Open destination in new window
		      this.options.close = options.close || Toastify.defaults.close; // Show toast close icon
		      this.options.gravity = options.gravity === "bottom" ? "toastify-bottom" : Toastify.defaults.gravity; // toast position - top or bottom
		      this.options.positionLeft = options.positionLeft || Toastify.defaults.positionLeft; // toast position - left or right
		      this.options.position = options.position || Toastify.defaults.position; // toast position - left or right
		      this.options.backgroundColor = options.backgroundColor || Toastify.defaults.backgroundColor; // toast background color
		      this.options.avatar = options.avatar || Toastify.defaults.avatar; // img element src - url or a path
		      this.options.className = options.className || Toastify.defaults.className; // additional class names for the toast
		      this.options.stopOnFocus = options.stopOnFocus === undefined ? Toastify.defaults.stopOnFocus : options.stopOnFocus; // stop timeout on focus
		      this.options.onClick = options.onClick || Toastify.defaults.onClick; // Callback after click
		      this.options.offset = options.offset || Toastify.defaults.offset; // toast offset
		      this.options.escapeMarkup = options.escapeMarkup !== undefined ? options.escapeMarkup : Toastify.defaults.escapeMarkup;
		      this.options.ariaLive = options.ariaLive || Toastify.defaults.ariaLive;
		      this.options.style = options.style || Toastify.defaults.style;
		      if(options.backgroundColor) {
		        this.options.style.background = options.backgroundColor;
		      }

		      // Returning the current object for chaining functions
		      return this;
		    },

		    // Building the DOM element
		    buildToast: function() {
		      // Validating if the options are defined
		      if (!this.options) {
		        throw "Toastify is not initialized";
		      }

		      // Creating the DOM object
		      var divElement = document.createElement("div");
		      divElement.className = "toastify on " + this.options.className;

		      // Positioning toast to left or right or center
		      if (!!this.options.position) {
		        divElement.className += " toastify-" + this.options.position;
		      } else {
		        // To be depreciated in further versions
		        if (this.options.positionLeft === true) {
		          divElement.className += " toastify-left";
		          console.warn('Property `positionLeft` will be depreciated in further versions. Please use `position` instead.');
		        } else {
		          // Default position
		          divElement.className += " toastify-right";
		        }
		      }

		      // Assigning gravity of element
		      divElement.className += " " + this.options.gravity;

		      if (this.options.backgroundColor) {
		        // This is being deprecated in favor of using the style HTML DOM property
		        console.warn('DEPRECATION NOTICE: "backgroundColor" is being deprecated. Please use the "style.background" property.');
		      }

		      // Loop through our style object and apply styles to divElement
		      for (var property in this.options.style) {
		        divElement.style[property] = this.options.style[property];
		      }

		      // Announce the toast to screen readers
		      if (this.options.ariaLive) {
		        divElement.setAttribute('aria-live', this.options.ariaLive);
		      }

		      // Adding the toast message/node
		      if (this.options.node && this.options.node.nodeType === Node.ELEMENT_NODE) {
		        // If we have a valid node, we insert it
		        divElement.appendChild(this.options.node);
		      } else {
		        if (this.options.escapeMarkup) {
		          divElement.innerText = this.options.text;
		        } else {
		          divElement.innerHTML = this.options.text;
		        }

		        if (this.options.avatar !== "") {
		          var avatarElement = document.createElement("img");
		          avatarElement.src = this.options.avatar;

		          avatarElement.className = "toastify-avatar";

		          if (this.options.position == "left" || this.options.positionLeft === true) {
		            // Adding close icon on the left of content
		            divElement.appendChild(avatarElement);
		          } else {
		            // Adding close icon on the right of content
		            divElement.insertAdjacentElement("afterbegin", avatarElement);
		          }
		        }
		      }

		      // Adding a close icon to the toast
		      if (this.options.close === true) {
		        // Create a span for close element
		        var closeElement = document.createElement("button");
		        closeElement.type = "button";
		        closeElement.setAttribute("aria-label", "Close");
		        closeElement.className = "toast-close";
		        closeElement.innerHTML = "&#10006;";

		        // Triggering the removal of toast from DOM on close click
		        closeElement.addEventListener(
		          "click",
		          function(event) {
		            event.stopPropagation();
		            this.removeElement(this.toastElement);
		            window.clearTimeout(this.toastElement.timeOutValue);
		          }.bind(this)
		        );

		        //Calculating screen width
		        var width = window.innerWidth > 0 ? window.innerWidth : screen.width;

		        // Adding the close icon to the toast element
		        // Display on the right if screen width is less than or equal to 360px
		        if ((this.options.position == "left" || this.options.positionLeft === true) && width > 360) {
		          // Adding close icon on the left of content
		          divElement.insertAdjacentElement("afterbegin", closeElement);
		        } else {
		          // Adding close icon on the right of content
		          divElement.appendChild(closeElement);
		        }
		      }

		      // Clear timeout while toast is focused
		      if (this.options.stopOnFocus && this.options.duration > 0) {
		        var self = this;
		        // stop countdown
		        divElement.addEventListener(
		          "mouseover",
		          function(event) {
		            window.clearTimeout(divElement.timeOutValue);
		          }
		        );
		        // add back the timeout
		        divElement.addEventListener(
		          "mouseleave",
		          function() {
		            divElement.timeOutValue = window.setTimeout(
		              function() {
		                // Remove the toast from DOM
		                self.removeElement(divElement);
		              },
		              self.options.duration
		            );
		          }
		        );
		      }

		      // Adding an on-click destination path
		      if (typeof this.options.destination !== "undefined") {
		        divElement.addEventListener(
		          "click",
		          function(event) {
		            event.stopPropagation();
		            if (this.options.newWindow === true) {
		              window.open(this.options.destination, "_blank");
		            } else {
		              window.location = this.options.destination;
		            }
		          }.bind(this)
		        );
		      }

		      if (typeof this.options.onClick === "function" && typeof this.options.destination === "undefined") {
		        divElement.addEventListener(
		          "click",
		          function(event) {
		            event.stopPropagation();
		            this.options.onClick();
		          }.bind(this)
		        );
		      }

		      // Adding offset
		      if(typeof this.options.offset === "object") {

		        var x = getAxisOffsetAValue("x", this.options);
		        var y = getAxisOffsetAValue("y", this.options);

		        var xOffset = this.options.position == "left" ? x : "-" + x;
		        var yOffset = this.options.gravity == "toastify-top" ? y : "-" + y;

		        divElement.style.transform = "translate(" + xOffset + "," + yOffset + ")";

		      }

		      // Returning the generated element
		      return divElement;
		    },

		    // Displaying the toast
		    showToast: function() {
		      // Creating the DOM object for the toast
		      this.toastElement = this.buildToast();

		      // Getting the root element to with the toast needs to be added
		      var rootElement;
		      if (typeof this.options.selector === "string") {
		        rootElement = document.getElementById(this.options.selector);
		      } else if (this.options.selector instanceof HTMLElement || (typeof ShadowRoot !== 'undefined' && this.options.selector instanceof ShadowRoot)) {
		        rootElement = this.options.selector;
		      } else {
		        rootElement = document.body;
		      }

		      // Validating if root element is present in DOM
		      if (!rootElement) {
		        throw "Root element is not defined";
		      }

		      // Adding the DOM element
		      var elementToInsert = Toastify.defaults.oldestFirst ? rootElement.firstChild : rootElement.lastChild;
		      rootElement.insertBefore(this.toastElement, elementToInsert);

		      // Repositioning the toasts in case multiple toasts are present
		      Toastify.reposition();

		      if (this.options.duration > 0) {
		        this.toastElement.timeOutValue = window.setTimeout(
		          function() {
		            // Remove the toast from DOM
		            this.removeElement(this.toastElement);
		          }.bind(this),
		          this.options.duration
		        ); // Binding `this` for function invocation
		      }

		      // Supporting function chaining
		      return this;
		    },

		    hideToast: function() {
		      if (this.toastElement.timeOutValue) {
		        clearTimeout(this.toastElement.timeOutValue);
		      }
		      this.removeElement(this.toastElement);
		    },

		    // Removing the element from the DOM
		    removeElement: function(toastElement) {
		      // Hiding the element
		      // toastElement.classList.remove("on");
		      toastElement.className = toastElement.className.replace(" on", "");

		      // Removing the element from DOM after transition end
		      window.setTimeout(
		        function() {
		          // remove options node if any
		          if (this.options.node && this.options.node.parentNode) {
		            this.options.node.parentNode.removeChild(this.options.node);
		          }

		          // Remove the element from the DOM, only when the parent node was not removed before.
		          if (toastElement.parentNode) {
		            toastElement.parentNode.removeChild(toastElement);
		          }

		          // Calling the callback function
		          this.options.callback.call(toastElement);

		          // Repositioning the toasts again
		          Toastify.reposition();
		        }.bind(this),
		        400
		      ); // Binding `this` for function invocation
		    },
		  };

		  // Positioning the toasts on the DOM
		  Toastify.reposition = function() {

		    // Top margins with gravity
		    var topLeftOffsetSize = {
		      top: 15,
		      bottom: 15,
		    };
		    var topRightOffsetSize = {
		      top: 15,
		      bottom: 15,
		    };
		    var offsetSize = {
		      top: 15,
		      bottom: 15,
		    };

		    // Get all toast messages on the DOM
		    var allToasts = document.getElementsByClassName("toastify");

		    var classUsed;

		    // Modifying the position of each toast element
		    for (var i = 0; i < allToasts.length; i++) {
		      // Getting the applied gravity
		      if (containsClass(allToasts[i], "toastify-top") === true) {
		        classUsed = "toastify-top";
		      } else {
		        classUsed = "toastify-bottom";
		      }

		      var height = allToasts[i].offsetHeight;
		      classUsed = classUsed.substr(9, classUsed.length-1);
		      // Spacing between toasts
		      var offset = 15;

		      var width = window.innerWidth > 0 ? window.innerWidth : screen.width;

		      // Show toast in center if screen with less than or equal to 360px
		      if (width <= 360) {
		        // Setting the position
		        allToasts[i].style[classUsed] = offsetSize[classUsed] + "px";

		        offsetSize[classUsed] += height + offset;
		      } else {
		        if (containsClass(allToasts[i], "toastify-left") === true) {
		          // Setting the position
		          allToasts[i].style[classUsed] = topLeftOffsetSize[classUsed] + "px";

		          topLeftOffsetSize[classUsed] += height + offset;
		        } else {
		          // Setting the position
		          allToasts[i].style[classUsed] = topRightOffsetSize[classUsed] + "px";

		          topRightOffsetSize[classUsed] += height + offset;
		        }
		      }
		    }

		    // Supporting function chaining
		    return this;
		  };

		  // Helper function to get offset.
		  function getAxisOffsetAValue(axis, options) {

		    if(options.offset[axis]) {
		      if(isNaN(options.offset[axis])) {
		        return options.offset[axis];
		      }
		      else {
		        return options.offset[axis] + 'px';
		      }
		    }

		    return '0px';

		  }

		  function containsClass(elem, yourClass) {
		    if (!elem || typeof yourClass !== "string") {
		      return false;
		    } else if (
		      elem.className &&
		      elem.className
		        .trim()
		        .split(/\s+/gi)
		        .indexOf(yourClass) > -1
		    ) {
		      return true;
		    } else {
		      return false;
		    }
		  }

		  // Setting up the prototype for the init object
		  Toastify.lib.init.prototype = Toastify.lib;

		  // Returning the Toastify function to be assigned to the window object/module
		  return Toastify;
		});
	} (toastify));

	var Toastify = toastify.exports;

	var lib$5 = {};

	var Parser$3 = {};

	var Tokenizer$1 = {};

	var decode_codepoint = {};

	var require$$0$1 = {"0":65533,"128":8364,"130":8218,"131":402,"132":8222,"133":8230,"134":8224,"135":8225,"136":710,"137":8240,"138":352,"139":8249,"140":338,"142":381,"145":8216,"146":8217,"147":8220,"148":8221,"149":8226,"150":8211,"151":8212,"152":732,"153":8482,"154":353,"155":8250,"156":339,"158":382,"159":376};

	var __importDefault$6 = (commonjsGlobal && commonjsGlobal.__importDefault) || function (mod) {
	    return (mod && mod.__esModule) ? mod : { "default": mod };
	};
	Object.defineProperty(decode_codepoint, "__esModule", { value: true });
	var decode_json_1 = __importDefault$6(require$$0$1);
	// Adapted from https://github.com/mathiasbynens/he/blob/master/src/he.js#L94-L119
	var fromCodePoint = 
	// eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
	String.fromCodePoint ||
	    function (codePoint) {
	        var output = "";
	        if (codePoint > 0xffff) {
	            codePoint -= 0x10000;
	            output += String.fromCharCode(((codePoint >>> 10) & 0x3ff) | 0xd800);
	            codePoint = 0xdc00 | (codePoint & 0x3ff);
	        }
	        output += String.fromCharCode(codePoint);
	        return output;
	    };
	function decodeCodePoint(codePoint) {
	    if ((codePoint >= 0xd800 && codePoint <= 0xdfff) || codePoint > 0x10ffff) {
	        return "\uFFFD";
	    }
	    if (codePoint in decode_json_1.default) {
	        codePoint = decode_json_1.default[codePoint];
	    }
	    return fromCodePoint(codePoint);
	}
	decode_codepoint.default = decodeCodePoint;

	var Aacute$1="Á";var aacute$1="á";var Abreve="Ă";var abreve="ă";var ac="∾";var acd="∿";var acE="∾̳";var Acirc$1="Â";var acirc$1="â";var acute$1="´";var Acy="А";var acy="а";var AElig$1="Æ";var aelig$1="æ";var af="⁡";var Afr="𝔄";var afr="𝔞";var Agrave$1="À";var agrave$1="à";var alefsym="ℵ";var aleph="ℵ";var Alpha="Α";var alpha="α";var Amacr="Ā";var amacr="ā";var amalg="⨿";var amp$2="&";var AMP$1="&";var andand="⩕";var And="⩓";var and="∧";var andd="⩜";var andslope="⩘";var andv="⩚";var ang="∠";var ange="⦤";var angle="∠";var angmsdaa="⦨";var angmsdab="⦩";var angmsdac="⦪";var angmsdad="⦫";var angmsdae="⦬";var angmsdaf="⦭";var angmsdag="⦮";var angmsdah="⦯";var angmsd="∡";var angrt="∟";var angrtvb="⊾";var angrtvbd="⦝";var angsph="∢";var angst="Å";var angzarr="⍼";var Aogon="Ą";var aogon="ą";var Aopf="𝔸";var aopf="𝕒";var apacir="⩯";var ap="≈";var apE="⩰";var ape="≊";var apid="≋";var apos$1="'";var ApplyFunction="⁡";var approx="≈";var approxeq="≊";var Aring$1="Å";var aring$1="å";var Ascr="𝒜";var ascr="𝒶";var Assign="≔";var ast="*";var asymp="≈";var asympeq="≍";var Atilde$1="Ã";var atilde$1="ã";var Auml$1="Ä";var auml$1="ä";var awconint="∳";var awint="⨑";var backcong="≌";var backepsilon="϶";var backprime="‵";var backsim="∽";var backsimeq="⋍";var Backslash="∖";var Barv="⫧";var barvee="⊽";var barwed="⌅";var Barwed="⌆";var barwedge="⌅";var bbrk="⎵";var bbrktbrk="⎶";var bcong="≌";var Bcy="Б";var bcy="б";var bdquo="„";var becaus="∵";var because="∵";var Because="∵";var bemptyv="⦰";var bepsi="϶";var bernou="ℬ";var Bernoullis="ℬ";var Beta="Β";var beta="β";var beth="ℶ";var between="≬";var Bfr="𝔅";var bfr="𝔟";var bigcap="⋂";var bigcirc="◯";var bigcup="⋃";var bigodot="⨀";var bigoplus="⨁";var bigotimes="⨂";var bigsqcup="⨆";var bigstar="★";var bigtriangledown="▽";var bigtriangleup="△";var biguplus="⨄";var bigvee="⋁";var bigwedge="⋀";var bkarow="⤍";var blacklozenge="⧫";var blacksquare="▪";var blacktriangle="▴";var blacktriangledown="▾";var blacktriangleleft="◂";var blacktriangleright="▸";var blank="␣";var blk12="▒";var blk14="░";var blk34="▓";var block="█";var bne="=⃥";var bnequiv="≡⃥";var bNot="⫭";var bnot="⌐";var Bopf="𝔹";var bopf="𝕓";var bot="⊥";var bottom="⊥";var bowtie="⋈";var boxbox="⧉";var boxdl="┐";var boxdL="╕";var boxDl="╖";var boxDL="╗";var boxdr="┌";var boxdR="╒";var boxDr="╓";var boxDR="╔";var boxh="─";var boxH="═";var boxhd="┬";var boxHd="╤";var boxhD="╥";var boxHD="╦";var boxhu="┴";var boxHu="╧";var boxhU="╨";var boxHU="╩";var boxminus="⊟";var boxplus="⊞";var boxtimes="⊠";var boxul="┘";var boxuL="╛";var boxUl="╜";var boxUL="╝";var boxur="└";var boxuR="╘";var boxUr="╙";var boxUR="╚";var boxv="│";var boxV="║";var boxvh="┼";var boxvH="╪";var boxVh="╫";var boxVH="╬";var boxvl="┤";var boxvL="╡";var boxVl="╢";var boxVL="╣";var boxvr="├";var boxvR="╞";var boxVr="╟";var boxVR="╠";var bprime="‵";var breve="˘";var Breve="˘";var brvbar$1="¦";var bscr="𝒷";var Bscr="ℬ";var bsemi="⁏";var bsim="∽";var bsime="⋍";var bsolb="⧅";var bsol="\\";var bsolhsub="⟈";var bull="•";var bullet="•";var bump="≎";var bumpE="⪮";var bumpe="≏";var Bumpeq="≎";var bumpeq="≏";var Cacute="Ć";var cacute="ć";var capand="⩄";var capbrcup="⩉";var capcap="⩋";var cap="∩";var Cap="⋒";var capcup="⩇";var capdot="⩀";var CapitalDifferentialD="ⅅ";var caps="∩︀";var caret="⁁";var caron="ˇ";var Cayleys="ℭ";var ccaps="⩍";var Ccaron="Č";var ccaron="č";var Ccedil$1="Ç";var ccedil$1="ç";var Ccirc="Ĉ";var ccirc="ĉ";var Cconint="∰";var ccups="⩌";var ccupssm="⩐";var Cdot="Ċ";var cdot="ċ";var cedil$1="¸";var Cedilla="¸";var cemptyv="⦲";var cent$1="¢";var centerdot="·";var CenterDot="·";var cfr="𝔠";var Cfr="ℭ";var CHcy="Ч";var chcy="ч";var check="✓";var checkmark="✓";var Chi="Χ";var chi="χ";var circ="ˆ";var circeq="≗";var circlearrowleft="↺";var circlearrowright="↻";var circledast="⊛";var circledcirc="⊚";var circleddash="⊝";var CircleDot="⊙";var circledR="®";var circledS="Ⓢ";var CircleMinus="⊖";var CirclePlus="⊕";var CircleTimes="⊗";var cir="○";var cirE="⧃";var cire="≗";var cirfnint="⨐";var cirmid="⫯";var cirscir="⧂";var ClockwiseContourIntegral="∲";var CloseCurlyDoubleQuote="”";var CloseCurlyQuote="’";var clubs="♣";var clubsuit="♣";var colon=":";var Colon="∷";var Colone="⩴";var colone="≔";var coloneq="≔";var comma=",";var commat="@";var comp="∁";var compfn="∘";var complement="∁";var complexes="ℂ";var cong="≅";var congdot="⩭";var Congruent="≡";var conint="∮";var Conint="∯";var ContourIntegral="∮";var copf="𝕔";var Copf="ℂ";var coprod="∐";var Coproduct="∐";var copy$1="©";var COPY$1="©";var copysr="℗";var CounterClockwiseContourIntegral="∳";var crarr="↵";var cross="✗";var Cross="⨯";var Cscr="𝒞";var cscr="𝒸";var csub="⫏";var csube="⫑";var csup="⫐";var csupe="⫒";var ctdot="⋯";var cudarrl="⤸";var cudarrr="⤵";var cuepr="⋞";var cuesc="⋟";var cularr="↶";var cularrp="⤽";var cupbrcap="⩈";var cupcap="⩆";var CupCap="≍";var cup="∪";var Cup="⋓";var cupcup="⩊";var cupdot="⊍";var cupor="⩅";var cups="∪︀";var curarr="↷";var curarrm="⤼";var curlyeqprec="⋞";var curlyeqsucc="⋟";var curlyvee="⋎";var curlywedge="⋏";var curren$1="¤";var curvearrowleft="↶";var curvearrowright="↷";var cuvee="⋎";var cuwed="⋏";var cwconint="∲";var cwint="∱";var cylcty="⌭";var dagger="†";var Dagger="‡";var daleth="ℸ";var darr="↓";var Darr="↡";var dArr="⇓";var dash="‐";var Dashv="⫤";var dashv="⊣";var dbkarow="⤏";var dblac="˝";var Dcaron="Ď";var dcaron="ď";var Dcy="Д";var dcy="д";var ddagger="‡";var ddarr="⇊";var DD="ⅅ";var dd="ⅆ";var DDotrahd="⤑";var ddotseq="⩷";var deg$1="°";var Del="∇";var Delta="Δ";var delta="δ";var demptyv="⦱";var dfisht="⥿";var Dfr="𝔇";var dfr="𝔡";var dHar="⥥";var dharl="⇃";var dharr="⇂";var DiacriticalAcute="´";var DiacriticalDot="˙";var DiacriticalDoubleAcute="˝";var DiacriticalGrave="`";var DiacriticalTilde="˜";var diam="⋄";var diamond="⋄";var Diamond="⋄";var diamondsuit="♦";var diams="♦";var die="¨";var DifferentialD="ⅆ";var digamma="ϝ";var disin="⋲";var div="÷";var divide$1="÷";var divideontimes="⋇";var divonx="⋇";var DJcy="Ђ";var djcy="ђ";var dlcorn="⌞";var dlcrop="⌍";var dollar="$";var Dopf="𝔻";var dopf="𝕕";var Dot="¨";var dot="˙";var DotDot="⃜";var doteq="≐";var doteqdot="≑";var DotEqual="≐";var dotminus="∸";var dotplus="∔";var dotsquare="⊡";var doublebarwedge="⌆";var DoubleContourIntegral="∯";var DoubleDot="¨";var DoubleDownArrow="⇓";var DoubleLeftArrow="⇐";var DoubleLeftRightArrow="⇔";var DoubleLeftTee="⫤";var DoubleLongLeftArrow="⟸";var DoubleLongLeftRightArrow="⟺";var DoubleLongRightArrow="⟹";var DoubleRightArrow="⇒";var DoubleRightTee="⊨";var DoubleUpArrow="⇑";var DoubleUpDownArrow="⇕";var DoubleVerticalBar="∥";var DownArrowBar="⤓";var downarrow="↓";var DownArrow="↓";var Downarrow="⇓";var DownArrowUpArrow="⇵";var DownBreve="̑";var downdownarrows="⇊";var downharpoonleft="⇃";var downharpoonright="⇂";var DownLeftRightVector="⥐";var DownLeftTeeVector="⥞";var DownLeftVectorBar="⥖";var DownLeftVector="↽";var DownRightTeeVector="⥟";var DownRightVectorBar="⥗";var DownRightVector="⇁";var DownTeeArrow="↧";var DownTee="⊤";var drbkarow="⤐";var drcorn="⌟";var drcrop="⌌";var Dscr="𝒟";var dscr="𝒹";var DScy="Ѕ";var dscy="ѕ";var dsol="⧶";var Dstrok="Đ";var dstrok="đ";var dtdot="⋱";var dtri="▿";var dtrif="▾";var duarr="⇵";var duhar="⥯";var dwangle="⦦";var DZcy="Џ";var dzcy="џ";var dzigrarr="⟿";var Eacute$1="É";var eacute$1="é";var easter="⩮";var Ecaron="Ě";var ecaron="ě";var Ecirc$1="Ê";var ecirc$1="ê";var ecir="≖";var ecolon="≕";var Ecy="Э";var ecy="э";var eDDot="⩷";var Edot="Ė";var edot="ė";var eDot="≑";var ee="ⅇ";var efDot="≒";var Efr="𝔈";var efr="𝔢";var eg="⪚";var Egrave$1="È";var egrave$1="è";var egs="⪖";var egsdot="⪘";var el$1="⪙";var Element$2="∈";var elinters="⏧";var ell="ℓ";var els="⪕";var elsdot="⪗";var Emacr="Ē";var emacr="ē";var empty="∅";var emptyset="∅";var EmptySmallSquare="◻";var emptyv="∅";var EmptyVerySmallSquare="▫";var emsp13=" ";var emsp14=" ";var emsp=" ";var ENG="Ŋ";var eng="ŋ";var ensp=" ";var Eogon="Ę";var eogon="ę";var Eopf="𝔼";var eopf="𝕖";var epar="⋕";var eparsl="⧣";var eplus="⩱";var epsi="ε";var Epsilon="Ε";var epsilon="ε";var epsiv="ϵ";var eqcirc="≖";var eqcolon="≕";var eqsim="≂";var eqslantgtr="⪖";var eqslantless="⪕";var Equal="⩵";var equals="=";var EqualTilde="≂";var equest="≟";var Equilibrium="⇌";var equiv="≡";var equivDD="⩸";var eqvparsl="⧥";var erarr="⥱";var erDot="≓";var escr="ℯ";var Escr="ℰ";var esdot="≐";var Esim="⩳";var esim="≂";var Eta="Η";var eta="η";var ETH$1="Ð";var eth$1="ð";var Euml$1="Ë";var euml$1="ë";var euro="€";var excl="!";var exist="∃";var Exists="∃";var expectation="ℰ";var exponentiale="ⅇ";var ExponentialE="ⅇ";var fallingdotseq="≒";var Fcy="Ф";var fcy="ф";var female="♀";var ffilig="ﬃ";var fflig="ﬀ";var ffllig="ﬄ";var Ffr="𝔉";var ffr="𝔣";var filig="ﬁ";var FilledSmallSquare="◼";var FilledVerySmallSquare="▪";var fjlig="fj";var flat="♭";var fllig="ﬂ";var fltns="▱";var fnof="ƒ";var Fopf="𝔽";var fopf="𝕗";var forall="∀";var ForAll="∀";var fork="⋔";var forkv="⫙";var Fouriertrf="ℱ";var fpartint="⨍";var frac12$1="½";var frac13="⅓";var frac14$1="¼";var frac15="⅕";var frac16="⅙";var frac18="⅛";var frac23="⅔";var frac25="⅖";var frac34$1="¾";var frac35="⅗";var frac38="⅜";var frac45="⅘";var frac56="⅚";var frac58="⅝";var frac78="⅞";var frasl="⁄";var frown="⌢";var fscr="𝒻";var Fscr="ℱ";var gacute="ǵ";var Gamma="Γ";var gamma="γ";var Gammad="Ϝ";var gammad="ϝ";var gap="⪆";var Gbreve="Ğ";var gbreve="ğ";var Gcedil="Ģ";var Gcirc="Ĝ";var gcirc="ĝ";var Gcy="Г";var gcy="г";var Gdot="Ġ";var gdot="ġ";var ge="≥";var gE="≧";var gEl="⪌";var gel="⋛";var geq="≥";var geqq="≧";var geqslant="⩾";var gescc="⪩";var ges="⩾";var gesdot="⪀";var gesdoto="⪂";var gesdotol="⪄";var gesl="⋛︀";var gesles="⪔";var Gfr="𝔊";var gfr="𝔤";var gg="≫";var Gg="⋙";var ggg="⋙";var gimel="ℷ";var GJcy="Ѓ";var gjcy="ѓ";var gla="⪥";var gl="≷";var glE="⪒";var glj="⪤";var gnap="⪊";var gnapprox="⪊";var gne="⪈";var gnE="≩";var gneq="⪈";var gneqq="≩";var gnsim="⋧";var Gopf="𝔾";var gopf="𝕘";var grave="`";var GreaterEqual="≥";var GreaterEqualLess="⋛";var GreaterFullEqual="≧";var GreaterGreater="⪢";var GreaterLess="≷";var GreaterSlantEqual="⩾";var GreaterTilde="≳";var Gscr="𝒢";var gscr="ℊ";var gsim="≳";var gsime="⪎";var gsiml="⪐";var gtcc="⪧";var gtcir="⩺";var gt$2=">";var GT$1=">";var Gt="≫";var gtdot="⋗";var gtlPar="⦕";var gtquest="⩼";var gtrapprox="⪆";var gtrarr="⥸";var gtrdot="⋗";var gtreqless="⋛";var gtreqqless="⪌";var gtrless="≷";var gtrsim="≳";var gvertneqq="≩︀";var gvnE="≩︀";var Hacek="ˇ";var hairsp=" ";var half="½";var hamilt="ℋ";var HARDcy="Ъ";var hardcy="ъ";var harrcir="⥈";var harr="↔";var hArr="⇔";var harrw="↭";var Hat="^";var hbar="ℏ";var Hcirc="Ĥ";var hcirc="ĥ";var hearts="♥";var heartsuit="♥";var hellip="…";var hercon="⊹";var hfr="𝔥";var Hfr="ℌ";var HilbertSpace="ℋ";var hksearow="⤥";var hkswarow="⤦";var hoarr="⇿";var homtht="∻";var hookleftarrow="↩";var hookrightarrow="↪";var hopf="𝕙";var Hopf="ℍ";var horbar="―";var HorizontalLine="─";var hscr="𝒽";var Hscr="ℋ";var hslash="ℏ";var Hstrok="Ħ";var hstrok="ħ";var HumpDownHump="≎";var HumpEqual="≏";var hybull="⁃";var hyphen="‐";var Iacute$1="Í";var iacute$1="í";var ic="⁣";var Icirc$1="Î";var icirc$1="î";var Icy="И";var icy="и";var Idot="İ";var IEcy="Е";var iecy="е";var iexcl$1="¡";var iff="⇔";var ifr="𝔦";var Ifr="ℑ";var Igrave$1="Ì";var igrave$1="ì";var ii="ⅈ";var iiiint="⨌";var iiint="∭";var iinfin="⧜";var iiota="℩";var IJlig="Ĳ";var ijlig="ĳ";var Imacr="Ī";var imacr="ī";var image="ℑ";var ImaginaryI="ⅈ";var imagline="ℐ";var imagpart="ℑ";var imath="ı";var Im="ℑ";var imof="⊷";var imped="Ƶ";var Implies="⇒";var incare="℅";var infin="∞";var infintie="⧝";var inodot="ı";var intcal="⊺";var int="∫";var Int="∬";var integers="ℤ";var Integral="∫";var intercal="⊺";var Intersection="⋂";var intlarhk="⨗";var intprod="⨼";var InvisibleComma="⁣";var InvisibleTimes="⁢";var IOcy="Ё";var iocy="ё";var Iogon="Į";var iogon="į";var Iopf="𝕀";var iopf="𝕚";var Iota="Ι";var iota="ι";var iprod="⨼";var iquest$1="¿";var iscr="𝒾";var Iscr="ℐ";var isin="∈";var isindot="⋵";var isinE="⋹";var isins="⋴";var isinsv="⋳";var isinv="∈";var it="⁢";var Itilde="Ĩ";var itilde="ĩ";var Iukcy="І";var iukcy="і";var Iuml$1="Ï";var iuml$1="ï";var Jcirc="Ĵ";var jcirc="ĵ";var Jcy="Й";var jcy="й";var Jfr="𝔍";var jfr="𝔧";var jmath="ȷ";var Jopf="𝕁";var jopf="𝕛";var Jscr="𝒥";var jscr="𝒿";var Jsercy="Ј";var jsercy="ј";var Jukcy="Є";var jukcy="є";var Kappa="Κ";var kappa="κ";var kappav="ϰ";var Kcedil="Ķ";var kcedil="ķ";var Kcy="К";var kcy="к";var Kfr="𝔎";var kfr="𝔨";var kgreen="ĸ";var KHcy="Х";var khcy="х";var KJcy="Ќ";var kjcy="ќ";var Kopf="𝕂";var kopf="𝕜";var Kscr="𝒦";var kscr="𝓀";var lAarr="⇚";var Lacute="Ĺ";var lacute="ĺ";var laemptyv="⦴";var lagran="ℒ";var Lambda="Λ";var lambda="λ";var lang="⟨";var Lang="⟪";var langd="⦑";var langle="⟨";var lap="⪅";var Laplacetrf="ℒ";var laquo$1="«";var larrb="⇤";var larrbfs="⤟";var larr="←";var Larr="↞";var lArr="⇐";var larrfs="⤝";var larrhk="↩";var larrlp="↫";var larrpl="⤹";var larrsim="⥳";var larrtl="↢";var latail="⤙";var lAtail="⤛";var lat="⪫";var late="⪭";var lates="⪭︀";var lbarr="⤌";var lBarr="⤎";var lbbrk="❲";var lbrace="{";var lbrack="[";var lbrke="⦋";var lbrksld="⦏";var lbrkslu="⦍";var Lcaron="Ľ";var lcaron="ľ";var Lcedil="Ļ";var lcedil="ļ";var lceil="⌈";var lcub="{";var Lcy="Л";var lcy="л";var ldca="⤶";var ldquo="“";var ldquor="„";var ldrdhar="⥧";var ldrushar="⥋";var ldsh="↲";var le="≤";var lE="≦";var LeftAngleBracket="⟨";var LeftArrowBar="⇤";var leftarrow="←";var LeftArrow="←";var Leftarrow="⇐";var LeftArrowRightArrow="⇆";var leftarrowtail="↢";var LeftCeiling="⌈";var LeftDoubleBracket="⟦";var LeftDownTeeVector="⥡";var LeftDownVectorBar="⥙";var LeftDownVector="⇃";var LeftFloor="⌊";var leftharpoondown="↽";var leftharpoonup="↼";var leftleftarrows="⇇";var leftrightarrow="↔";var LeftRightArrow="↔";var Leftrightarrow="⇔";var leftrightarrows="⇆";var leftrightharpoons="⇋";var leftrightsquigarrow="↭";var LeftRightVector="⥎";var LeftTeeArrow="↤";var LeftTee="⊣";var LeftTeeVector="⥚";var leftthreetimes="⋋";var LeftTriangleBar="⧏";var LeftTriangle="⊲";var LeftTriangleEqual="⊴";var LeftUpDownVector="⥑";var LeftUpTeeVector="⥠";var LeftUpVectorBar="⥘";var LeftUpVector="↿";var LeftVectorBar="⥒";var LeftVector="↼";var lEg="⪋";var leg="⋚";var leq="≤";var leqq="≦";var leqslant="⩽";var lescc="⪨";var les="⩽";var lesdot="⩿";var lesdoto="⪁";var lesdotor="⪃";var lesg="⋚︀";var lesges="⪓";var lessapprox="⪅";var lessdot="⋖";var lesseqgtr="⋚";var lesseqqgtr="⪋";var LessEqualGreater="⋚";var LessFullEqual="≦";var LessGreater="≶";var lessgtr="≶";var LessLess="⪡";var lesssim="≲";var LessSlantEqual="⩽";var LessTilde="≲";var lfisht="⥼";var lfloor="⌊";var Lfr="𝔏";var lfr="𝔩";var lg="≶";var lgE="⪑";var lHar="⥢";var lhard="↽";var lharu="↼";var lharul="⥪";var lhblk="▄";var LJcy="Љ";var ljcy="љ";var llarr="⇇";var ll="≪";var Ll="⋘";var llcorner="⌞";var Lleftarrow="⇚";var llhard="⥫";var lltri="◺";var Lmidot="Ŀ";var lmidot="ŀ";var lmoustache="⎰";var lmoust="⎰";var lnap="⪉";var lnapprox="⪉";var lne="⪇";var lnE="≨";var lneq="⪇";var lneqq="≨";var lnsim="⋦";var loang="⟬";var loarr="⇽";var lobrk="⟦";var longleftarrow="⟵";var LongLeftArrow="⟵";var Longleftarrow="⟸";var longleftrightarrow="⟷";var LongLeftRightArrow="⟷";var Longleftrightarrow="⟺";var longmapsto="⟼";var longrightarrow="⟶";var LongRightArrow="⟶";var Longrightarrow="⟹";var looparrowleft="↫";var looparrowright="↬";var lopar="⦅";var Lopf="𝕃";var lopf="𝕝";var loplus="⨭";var lotimes="⨴";var lowast="∗";var lowbar="_";var LowerLeftArrow="↙";var LowerRightArrow="↘";var loz="◊";var lozenge="◊";var lozf="⧫";var lpar="(";var lparlt="⦓";var lrarr="⇆";var lrcorner="⌟";var lrhar="⇋";var lrhard="⥭";var lrm="‎";var lrtri="⊿";var lsaquo="‹";var lscr="𝓁";var Lscr="ℒ";var lsh="↰";var Lsh="↰";var lsim="≲";var lsime="⪍";var lsimg="⪏";var lsqb="[";var lsquo="‘";var lsquor="‚";var Lstrok="Ł";var lstrok="ł";var ltcc="⪦";var ltcir="⩹";var lt$2="<";var LT$1="<";var Lt="≪";var ltdot="⋖";var lthree="⋋";var ltimes="⋉";var ltlarr="⥶";var ltquest="⩻";var ltri="◃";var ltrie="⊴";var ltrif="◂";var ltrPar="⦖";var lurdshar="⥊";var luruhar="⥦";var lvertneqq="≨︀";var lvnE="≨︀";var macr$1="¯";var male="♂";var malt="✠";var maltese="✠";var map="↦";var mapsto="↦";var mapstodown="↧";var mapstoleft="↤";var mapstoup="↥";var marker="▮";var mcomma="⨩";var Mcy="М";var mcy="м";var mdash="—";var mDDot="∺";var measuredangle="∡";var MediumSpace=" ";var Mellintrf="ℳ";var Mfr="𝔐";var mfr="𝔪";var mho="℧";var micro$1="µ";var midast="*";var midcir="⫰";var mid="∣";var middot$1="·";var minusb="⊟";var minus="−";var minusd="∸";var minusdu="⨪";var MinusPlus="∓";var mlcp="⫛";var mldr="…";var mnplus="∓";var models="⊧";var Mopf="𝕄";var mopf="𝕞";var mp="∓";var mscr="𝓂";var Mscr="ℳ";var mstpos="∾";var Mu="Μ";var mu="μ";var multimap="⊸";var mumap="⊸";var nabla="∇";var Nacute="Ń";var nacute="ń";var nang="∠⃒";var nap="≉";var napE="⩰̸";var napid="≋̸";var napos="ŉ";var napprox="≉";var natural="♮";var naturals="ℕ";var natur="♮";var nbsp$1=" ";var nbump="≎̸";var nbumpe="≏̸";var ncap="⩃";var Ncaron="Ň";var ncaron="ň";var Ncedil="Ņ";var ncedil="ņ";var ncong="≇";var ncongdot="⩭̸";var ncup="⩂";var Ncy="Н";var ncy="н";var ndash="–";var nearhk="⤤";var nearr="↗";var neArr="⇗";var nearrow="↗";var ne="≠";var nedot="≐̸";var NegativeMediumSpace="​";var NegativeThickSpace="​";var NegativeThinSpace="​";var NegativeVeryThinSpace="​";var nequiv="≢";var nesear="⤨";var nesim="≂̸";var NestedGreaterGreater="≫";var NestedLessLess="≪";var NewLine="\n";var nexist="∄";var nexists="∄";var Nfr="𝔑";var nfr="𝔫";var ngE="≧̸";var nge="≱";var ngeq="≱";var ngeqq="≧̸";var ngeqslant="⩾̸";var nges="⩾̸";var nGg="⋙̸";var ngsim="≵";var nGt="≫⃒";var ngt="≯";var ngtr="≯";var nGtv="≫̸";var nharr="↮";var nhArr="⇎";var nhpar="⫲";var ni="∋";var nis="⋼";var nisd="⋺";var niv="∋";var NJcy="Њ";var njcy="њ";var nlarr="↚";var nlArr="⇍";var nldr="‥";var nlE="≦̸";var nle="≰";var nleftarrow="↚";var nLeftarrow="⇍";var nleftrightarrow="↮";var nLeftrightarrow="⇎";var nleq="≰";var nleqq="≦̸";var nleqslant="⩽̸";var nles="⩽̸";var nless="≮";var nLl="⋘̸";var nlsim="≴";var nLt="≪⃒";var nlt="≮";var nltri="⋪";var nltrie="⋬";var nLtv="≪̸";var nmid="∤";var NoBreak="⁠";var NonBreakingSpace=" ";var nopf="𝕟";var Nopf="ℕ";var Not="⫬";var not$1="¬";var NotCongruent="≢";var NotCupCap="≭";var NotDoubleVerticalBar="∦";var NotElement="∉";var NotEqual="≠";var NotEqualTilde="≂̸";var NotExists="∄";var NotGreater="≯";var NotGreaterEqual="≱";var NotGreaterFullEqual="≧̸";var NotGreaterGreater="≫̸";var NotGreaterLess="≹";var NotGreaterSlantEqual="⩾̸";var NotGreaterTilde="≵";var NotHumpDownHump="≎̸";var NotHumpEqual="≏̸";var notin="∉";var notindot="⋵̸";var notinE="⋹̸";var notinva="∉";var notinvb="⋷";var notinvc="⋶";var NotLeftTriangleBar="⧏̸";var NotLeftTriangle="⋪";var NotLeftTriangleEqual="⋬";var NotLess="≮";var NotLessEqual="≰";var NotLessGreater="≸";var NotLessLess="≪̸";var NotLessSlantEqual="⩽̸";var NotLessTilde="≴";var NotNestedGreaterGreater="⪢̸";var NotNestedLessLess="⪡̸";var notni="∌";var notniva="∌";var notnivb="⋾";var notnivc="⋽";var NotPrecedes="⊀";var NotPrecedesEqual="⪯̸";var NotPrecedesSlantEqual="⋠";var NotReverseElement="∌";var NotRightTriangleBar="⧐̸";var NotRightTriangle="⋫";var NotRightTriangleEqual="⋭";var NotSquareSubset="⊏̸";var NotSquareSubsetEqual="⋢";var NotSquareSuperset="⊐̸";var NotSquareSupersetEqual="⋣";var NotSubset="⊂⃒";var NotSubsetEqual="⊈";var NotSucceeds="⊁";var NotSucceedsEqual="⪰̸";var NotSucceedsSlantEqual="⋡";var NotSucceedsTilde="≿̸";var NotSuperset="⊃⃒";var NotSupersetEqual="⊉";var NotTilde="≁";var NotTildeEqual="≄";var NotTildeFullEqual="≇";var NotTildeTilde="≉";var NotVerticalBar="∤";var nparallel="∦";var npar="∦";var nparsl="⫽⃥";var npart="∂̸";var npolint="⨔";var npr="⊀";var nprcue="⋠";var nprec="⊀";var npreceq="⪯̸";var npre="⪯̸";var nrarrc="⤳̸";var nrarr="↛";var nrArr="⇏";var nrarrw="↝̸";var nrightarrow="↛";var nRightarrow="⇏";var nrtri="⋫";var nrtrie="⋭";var nsc="⊁";var nsccue="⋡";var nsce="⪰̸";var Nscr="𝒩";var nscr="𝓃";var nshortmid="∤";var nshortparallel="∦";var nsim="≁";var nsime="≄";var nsimeq="≄";var nsmid="∤";var nspar="∦";var nsqsube="⋢";var nsqsupe="⋣";var nsub="⊄";var nsubE="⫅̸";var nsube="⊈";var nsubset="⊂⃒";var nsubseteq="⊈";var nsubseteqq="⫅̸";var nsucc="⊁";var nsucceq="⪰̸";var nsup="⊅";var nsupE="⫆̸";var nsupe="⊉";var nsupset="⊃⃒";var nsupseteq="⊉";var nsupseteqq="⫆̸";var ntgl="≹";var Ntilde$1="Ñ";var ntilde$1="ñ";var ntlg="≸";var ntriangleleft="⋪";var ntrianglelefteq="⋬";var ntriangleright="⋫";var ntrianglerighteq="⋭";var Nu="Ν";var nu="ν";var num="#";var numero="№";var numsp=" ";var nvap="≍⃒";var nvdash="⊬";var nvDash="⊭";var nVdash="⊮";var nVDash="⊯";var nvge="≥⃒";var nvgt=">⃒";var nvHarr="⤄";var nvinfin="⧞";var nvlArr="⤂";var nvle="≤⃒";var nvlt="<⃒";var nvltrie="⊴⃒";var nvrArr="⤃";var nvrtrie="⊵⃒";var nvsim="∼⃒";var nwarhk="⤣";var nwarr="↖";var nwArr="⇖";var nwarrow="↖";var nwnear="⤧";var Oacute$1="Ó";var oacute$1="ó";var oast="⊛";var Ocirc$1="Ô";var ocirc$1="ô";var ocir="⊚";var Ocy="О";var ocy="о";var odash="⊝";var Odblac="Ő";var odblac="ő";var odiv="⨸";var odot="⊙";var odsold="⦼";var OElig="Œ";var oelig="œ";var ofcir="⦿";var Ofr="𝔒";var ofr="𝔬";var ogon="˛";var Ograve$1="Ò";var ograve$1="ò";var ogt="⧁";var ohbar="⦵";var ohm="Ω";var oint="∮";var olarr="↺";var olcir="⦾";var olcross="⦻";var oline="‾";var olt="⧀";var Omacr="Ō";var omacr="ō";var Omega="Ω";var omega="ω";var Omicron="Ο";var omicron="ο";var omid="⦶";var ominus="⊖";var Oopf="𝕆";var oopf="𝕠";var opar="⦷";var OpenCurlyDoubleQuote="“";var OpenCurlyQuote="‘";var operp="⦹";var oplus="⊕";var orarr="↻";var Or="⩔";var or="∨";var ord="⩝";var order="ℴ";var orderof="ℴ";var ordf$1="ª";var ordm$1="º";var origof="⊶";var oror="⩖";var orslope="⩗";var orv="⩛";var oS="Ⓢ";var Oscr="𝒪";var oscr="ℴ";var Oslash$1="Ø";var oslash$1="ø";var osol="⊘";var Otilde$1="Õ";var otilde$1="õ";var otimesas="⨶";var Otimes="⨷";var otimes="⊗";var Ouml$1="Ö";var ouml$1="ö";var ovbar="⌽";var OverBar="‾";var OverBrace="⏞";var OverBracket="⎴";var OverParenthesis="⏜";var para$1="¶";var parallel="∥";var par="∥";var parsim="⫳";var parsl="⫽";var part="∂";var PartialD="∂";var Pcy="П";var pcy="п";var percnt="%";var period=".";var permil="‰";var perp="⊥";var pertenk="‱";var Pfr="𝔓";var pfr="𝔭";var Phi="Φ";var phi="φ";var phiv="ϕ";var phmmat="ℳ";var phone="☎";var Pi="Π";var pi="π";var pitchfork="⋔";var piv="ϖ";var planck="ℏ";var planckh="ℎ";var plankv="ℏ";var plusacir="⨣";var plusb="⊞";var pluscir="⨢";var plus="+";var plusdo="∔";var plusdu="⨥";var pluse="⩲";var PlusMinus="±";var plusmn$1="±";var plussim="⨦";var plustwo="⨧";var pm="±";var Poincareplane="ℌ";var pointint="⨕";var popf="𝕡";var Popf="ℙ";var pound$1="£";var prap="⪷";var Pr="⪻";var pr="≺";var prcue="≼";var precapprox="⪷";var prec="≺";var preccurlyeq="≼";var Precedes="≺";var PrecedesEqual="⪯";var PrecedesSlantEqual="≼";var PrecedesTilde="≾";var preceq="⪯";var precnapprox="⪹";var precneqq="⪵";var precnsim="⋨";var pre="⪯";var prE="⪳";var precsim="≾";var prime="′";var Prime="″";var primes="ℙ";var prnap="⪹";var prnE="⪵";var prnsim="⋨";var prod="∏";var Product="∏";var profalar="⌮";var profline="⌒";var profsurf="⌓";var prop="∝";var Proportional="∝";var Proportion="∷";var propto="∝";var prsim="≾";var prurel="⊰";var Pscr="𝒫";var pscr="𝓅";var Psi="Ψ";var psi="ψ";var puncsp=" ";var Qfr="𝔔";var qfr="𝔮";var qint="⨌";var qopf="𝕢";var Qopf="ℚ";var qprime="⁗";var Qscr="𝒬";var qscr="𝓆";var quaternions="ℍ";var quatint="⨖";var quest="?";var questeq="≟";var quot$2="\"";var QUOT$1="\"";var rAarr="⇛";var race="∽̱";var Racute="Ŕ";var racute="ŕ";var radic="√";var raemptyv="⦳";var rang="⟩";var Rang="⟫";var rangd="⦒";var range="⦥";var rangle="⟩";var raquo$1="»";var rarrap="⥵";var rarrb="⇥";var rarrbfs="⤠";var rarrc="⤳";var rarr="→";var Rarr="↠";var rArr="⇒";var rarrfs="⤞";var rarrhk="↪";var rarrlp="↬";var rarrpl="⥅";var rarrsim="⥴";var Rarrtl="⤖";var rarrtl="↣";var rarrw="↝";var ratail="⤚";var rAtail="⤜";var ratio="∶";var rationals="ℚ";var rbarr="⤍";var rBarr="⤏";var RBarr="⤐";var rbbrk="❳";var rbrace="}";var rbrack="]";var rbrke="⦌";var rbrksld="⦎";var rbrkslu="⦐";var Rcaron="Ř";var rcaron="ř";var Rcedil="Ŗ";var rcedil="ŗ";var rceil="⌉";var rcub="}";var Rcy="Р";var rcy="р";var rdca="⤷";var rdldhar="⥩";var rdquo="”";var rdquor="”";var rdsh="↳";var real="ℜ";var realine="ℛ";var realpart="ℜ";var reals="ℝ";var Re="ℜ";var rect="▭";var reg$1="®";var REG$1="®";var ReverseElement="∋";var ReverseEquilibrium="⇋";var ReverseUpEquilibrium="⥯";var rfisht="⥽";var rfloor="⌋";var rfr="𝔯";var Rfr="ℜ";var rHar="⥤";var rhard="⇁";var rharu="⇀";var rharul="⥬";var Rho="Ρ";var rho="ρ";var rhov="ϱ";var RightAngleBracket="⟩";var RightArrowBar="⇥";var rightarrow="→";var RightArrow="→";var Rightarrow="⇒";var RightArrowLeftArrow="⇄";var rightarrowtail="↣";var RightCeiling="⌉";var RightDoubleBracket="⟧";var RightDownTeeVector="⥝";var RightDownVectorBar="⥕";var RightDownVector="⇂";var RightFloor="⌋";var rightharpoondown="⇁";var rightharpoonup="⇀";var rightleftarrows="⇄";var rightleftharpoons="⇌";var rightrightarrows="⇉";var rightsquigarrow="↝";var RightTeeArrow="↦";var RightTee="⊢";var RightTeeVector="⥛";var rightthreetimes="⋌";var RightTriangleBar="⧐";var RightTriangle="⊳";var RightTriangleEqual="⊵";var RightUpDownVector="⥏";var RightUpTeeVector="⥜";var RightUpVectorBar="⥔";var RightUpVector="↾";var RightVectorBar="⥓";var RightVector="⇀";var ring="˚";var risingdotseq="≓";var rlarr="⇄";var rlhar="⇌";var rlm="‏";var rmoustache="⎱";var rmoust="⎱";var rnmid="⫮";var roang="⟭";var roarr="⇾";var robrk="⟧";var ropar="⦆";var ropf="𝕣";var Ropf="ℝ";var roplus="⨮";var rotimes="⨵";var RoundImplies="⥰";var rpar=")";var rpargt="⦔";var rppolint="⨒";var rrarr="⇉";var Rrightarrow="⇛";var rsaquo="›";var rscr="𝓇";var Rscr="ℛ";var rsh="↱";var Rsh="↱";var rsqb="]";var rsquo="’";var rsquor="’";var rthree="⋌";var rtimes="⋊";var rtri="▹";var rtrie="⊵";var rtrif="▸";var rtriltri="⧎";var RuleDelayed="⧴";var ruluhar="⥨";var rx="℞";var Sacute="Ś";var sacute="ś";var sbquo="‚";var scap="⪸";var Scaron="Š";var scaron="š";var Sc="⪼";var sc="≻";var sccue="≽";var sce="⪰";var scE="⪴";var Scedil="Ş";var scedil="ş";var Scirc="Ŝ";var scirc="ŝ";var scnap="⪺";var scnE="⪶";var scnsim="⋩";var scpolint="⨓";var scsim="≿";var Scy="С";var scy="с";var sdotb="⊡";var sdot="⋅";var sdote="⩦";var searhk="⤥";var searr="↘";var seArr="⇘";var searrow="↘";var sect$1="§";var semi=";";var seswar="⤩";var setminus="∖";var setmn="∖";var sext="✶";var Sfr="𝔖";var sfr="𝔰";var sfrown="⌢";var sharp="♯";var SHCHcy="Щ";var shchcy="щ";var SHcy="Ш";var shcy="ш";var ShortDownArrow="↓";var ShortLeftArrow="←";var shortmid="∣";var shortparallel="∥";var ShortRightArrow="→";var ShortUpArrow="↑";var shy$1="­";var Sigma="Σ";var sigma="σ";var sigmaf="ς";var sigmav="ς";var sim="∼";var simdot="⩪";var sime="≃";var simeq="≃";var simg="⪞";var simgE="⪠";var siml="⪝";var simlE="⪟";var simne="≆";var simplus="⨤";var simrarr="⥲";var slarr="←";var SmallCircle="∘";var smallsetminus="∖";var smashp="⨳";var smeparsl="⧤";var smid="∣";var smile="⌣";var smt="⪪";var smte="⪬";var smtes="⪬︀";var SOFTcy="Ь";var softcy="ь";var solbar="⌿";var solb="⧄";var sol="/";var Sopf="𝕊";var sopf="𝕤";var spades="♠";var spadesuit="♠";var spar="∥";var sqcap="⊓";var sqcaps="⊓︀";var sqcup="⊔";var sqcups="⊔︀";var Sqrt="√";var sqsub="⊏";var sqsube="⊑";var sqsubset="⊏";var sqsubseteq="⊑";var sqsup="⊐";var sqsupe="⊒";var sqsupset="⊐";var sqsupseteq="⊒";var square="□";var Square="□";var SquareIntersection="⊓";var SquareSubset="⊏";var SquareSubsetEqual="⊑";var SquareSuperset="⊐";var SquareSupersetEqual="⊒";var SquareUnion="⊔";var squarf="▪";var squ="□";var squf="▪";var srarr="→";var Sscr="𝒮";var sscr="𝓈";var ssetmn="∖";var ssmile="⌣";var sstarf="⋆";var Star="⋆";var star="☆";var starf="★";var straightepsilon="ϵ";var straightphi="ϕ";var strns="¯";var sub="⊂";var Sub="⋐";var subdot="⪽";var subE="⫅";var sube="⊆";var subedot="⫃";var submult="⫁";var subnE="⫋";var subne="⊊";var subplus="⪿";var subrarr="⥹";var subset="⊂";var Subset="⋐";var subseteq="⊆";var subseteqq="⫅";var SubsetEqual="⊆";var subsetneq="⊊";var subsetneqq="⫋";var subsim="⫇";var subsub="⫕";var subsup="⫓";var succapprox="⪸";var succ="≻";var succcurlyeq="≽";var Succeeds="≻";var SucceedsEqual="⪰";var SucceedsSlantEqual="≽";var SucceedsTilde="≿";var succeq="⪰";var succnapprox="⪺";var succneqq="⪶";var succnsim="⋩";var succsim="≿";var SuchThat="∋";var sum="∑";var Sum="∑";var sung="♪";var sup1$1="¹";var sup2$1="²";var sup3$1="³";var sup="⊃";var Sup="⋑";var supdot="⪾";var supdsub="⫘";var supE="⫆";var supe="⊇";var supedot="⫄";var Superset="⊃";var SupersetEqual="⊇";var suphsol="⟉";var suphsub="⫗";var suplarr="⥻";var supmult="⫂";var supnE="⫌";var supne="⊋";var supplus="⫀";var supset="⊃";var Supset="⋑";var supseteq="⊇";var supseteqq="⫆";var supsetneq="⊋";var supsetneqq="⫌";var supsim="⫈";var supsub="⫔";var supsup="⫖";var swarhk="⤦";var swarr="↙";var swArr="⇙";var swarrow="↙";var swnwar="⤪";var szlig$1="ß";var Tab="\t";var target="⌖";var Tau="Τ";var tau="τ";var tbrk="⎴";var Tcaron="Ť";var tcaron="ť";var Tcedil="Ţ";var tcedil="ţ";var Tcy="Т";var tcy="т";var tdot="⃛";var telrec="⌕";var Tfr="𝔗";var tfr="𝔱";var there4="∴";var therefore="∴";var Therefore="∴";var Theta="Θ";var theta="θ";var thetasym="ϑ";var thetav="ϑ";var thickapprox="≈";var thicksim="∼";var ThickSpace="  ";var ThinSpace=" ";var thinsp=" ";var thkap="≈";var thksim="∼";var THORN$1="Þ";var thorn$1="þ";var tilde="˜";var Tilde="∼";var TildeEqual="≃";var TildeFullEqual="≅";var TildeTilde="≈";var timesbar="⨱";var timesb="⊠";var times$1="×";var timesd="⨰";var tint="∭";var toea="⤨";var topbot="⌶";var topcir="⫱";var top="⊤";var Topf="𝕋";var topf="𝕥";var topfork="⫚";var tosa="⤩";var tprime="‴";var trade="™";var TRADE="™";var triangle="▵";var triangledown="▿";var triangleleft="◃";var trianglelefteq="⊴";var triangleq="≜";var triangleright="▹";var trianglerighteq="⊵";var tridot="◬";var trie="≜";var triminus="⨺";var TripleDot="⃛";var triplus="⨹";var trisb="⧍";var tritime="⨻";var trpezium="⏢";var Tscr="𝒯";var tscr="𝓉";var TScy="Ц";var tscy="ц";var TSHcy="Ћ";var tshcy="ћ";var Tstrok="Ŧ";var tstrok="ŧ";var twixt="≬";var twoheadleftarrow="↞";var twoheadrightarrow="↠";var Uacute$1="Ú";var uacute$1="ú";var uarr="↑";var Uarr="↟";var uArr="⇑";var Uarrocir="⥉";var Ubrcy="Ў";var ubrcy="ў";var Ubreve="Ŭ";var ubreve="ŭ";var Ucirc$1="Û";var ucirc$1="û";var Ucy="У";var ucy="у";var udarr="⇅";var Udblac="Ű";var udblac="ű";var udhar="⥮";var ufisht="⥾";var Ufr="𝔘";var ufr="𝔲";var Ugrave$1="Ù";var ugrave$1="ù";var uHar="⥣";var uharl="↿";var uharr="↾";var uhblk="▀";var ulcorn="⌜";var ulcorner="⌜";var ulcrop="⌏";var ultri="◸";var Umacr="Ū";var umacr="ū";var uml$1="¨";var UnderBar="_";var UnderBrace="⏟";var UnderBracket="⎵";var UnderParenthesis="⏝";var Union="⋃";var UnionPlus="⊎";var Uogon="Ų";var uogon="ų";var Uopf="𝕌";var uopf="𝕦";var UpArrowBar="⤒";var uparrow="↑";var UpArrow="↑";var Uparrow="⇑";var UpArrowDownArrow="⇅";var updownarrow="↕";var UpDownArrow="↕";var Updownarrow="⇕";var UpEquilibrium="⥮";var upharpoonleft="↿";var upharpoonright="↾";var uplus="⊎";var UpperLeftArrow="↖";var UpperRightArrow="↗";var upsi="υ";var Upsi="ϒ";var upsih="ϒ";var Upsilon="Υ";var upsilon="υ";var UpTeeArrow="↥";var UpTee="⊥";var upuparrows="⇈";var urcorn="⌝";var urcorner="⌝";var urcrop="⌎";var Uring="Ů";var uring="ů";var urtri="◹";var Uscr="𝒰";var uscr="𝓊";var utdot="⋰";var Utilde="Ũ";var utilde="ũ";var utri="▵";var utrif="▴";var uuarr="⇈";var Uuml$1="Ü";var uuml$1="ü";var uwangle="⦧";var vangrt="⦜";var varepsilon="ϵ";var varkappa="ϰ";var varnothing="∅";var varphi="ϕ";var varpi="ϖ";var varpropto="∝";var varr="↕";var vArr="⇕";var varrho="ϱ";var varsigma="ς";var varsubsetneq="⊊︀";var varsubsetneqq="⫋︀";var varsupsetneq="⊋︀";var varsupsetneqq="⫌︀";var vartheta="ϑ";var vartriangleleft="⊲";var vartriangleright="⊳";var vBar="⫨";var Vbar="⫫";var vBarv="⫩";var Vcy="В";var vcy="в";var vdash="⊢";var vDash="⊨";var Vdash="⊩";var VDash="⊫";var Vdashl="⫦";var veebar="⊻";var vee="∨";var Vee="⋁";var veeeq="≚";var vellip="⋮";var verbar="|";var Verbar="‖";var vert="|";var Vert="‖";var VerticalBar="∣";var VerticalLine="|";var VerticalSeparator="❘";var VerticalTilde="≀";var VeryThinSpace=" ";var Vfr="𝔙";var vfr="𝔳";var vltri="⊲";var vnsub="⊂⃒";var vnsup="⊃⃒";var Vopf="𝕍";var vopf="𝕧";var vprop="∝";var vrtri="⊳";var Vscr="𝒱";var vscr="𝓋";var vsubnE="⫋︀";var vsubne="⊊︀";var vsupnE="⫌︀";var vsupne="⊋︀";var Vvdash="⊪";var vzigzag="⦚";var Wcirc="Ŵ";var wcirc="ŵ";var wedbar="⩟";var wedge="∧";var Wedge="⋀";var wedgeq="≙";var weierp="℘";var Wfr="𝔚";var wfr="𝔴";var Wopf="𝕎";var wopf="𝕨";var wp="℘";var wr="≀";var wreath="≀";var Wscr="𝒲";var wscr="𝓌";var xcap="⋂";var xcirc="◯";var xcup="⋃";var xdtri="▽";var Xfr="𝔛";var xfr="𝔵";var xharr="⟷";var xhArr="⟺";var Xi="Ξ";var xi="ξ";var xlarr="⟵";var xlArr="⟸";var xmap="⟼";var xnis="⋻";var xodot="⨀";var Xopf="𝕏";var xopf="𝕩";var xoplus="⨁";var xotime="⨂";var xrarr="⟶";var xrArr="⟹";var Xscr="𝒳";var xscr="𝓍";var xsqcup="⨆";var xuplus="⨄";var xutri="△";var xvee="⋁";var xwedge="⋀";var Yacute$1="Ý";var yacute$1="ý";var YAcy="Я";var yacy="я";var Ycirc="Ŷ";var ycirc="ŷ";var Ycy="Ы";var ycy="ы";var yen$1="¥";var Yfr="𝔜";var yfr="𝔶";var YIcy="Ї";var yicy="ї";var Yopf="𝕐";var yopf="𝕪";var Yscr="𝒴";var yscr="𝓎";var YUcy="Ю";var yucy="ю";var yuml$1="ÿ";var Yuml="Ÿ";var Zacute="Ź";var zacute="ź";var Zcaron="Ž";var zcaron="ž";var Zcy="З";var zcy="з";var Zdot="Ż";var zdot="ż";var zeetrf="ℨ";var ZeroWidthSpace="​";var Zeta="Ζ";var zeta="ζ";var zfr="𝔷";var Zfr="ℨ";var ZHcy="Ж";var zhcy="ж";var zigrarr="⇝";var zopf="𝕫";var Zopf="ℤ";var Zscr="𝒵";var zscr="𝓏";var zwj="‍";var zwnj="‌";var require$$1$1 = {Aacute:Aacute$1,aacute:aacute$1,Abreve:Abreve,abreve:abreve,ac:ac,acd:acd,acE:acE,Acirc:Acirc$1,acirc:acirc$1,acute:acute$1,Acy:Acy,acy:acy,AElig:AElig$1,aelig:aelig$1,af:af,Afr:Afr,afr:afr,Agrave:Agrave$1,agrave:agrave$1,alefsym:alefsym,aleph:aleph,Alpha:Alpha,alpha:alpha,Amacr:Amacr,amacr:amacr,amalg:amalg,amp:amp$2,AMP:AMP$1,andand:andand,And:And,and:and,andd:andd,andslope:andslope,andv:andv,ang:ang,ange:ange,angle:angle,angmsdaa:angmsdaa,angmsdab:angmsdab,angmsdac:angmsdac,angmsdad:angmsdad,angmsdae:angmsdae,angmsdaf:angmsdaf,angmsdag:angmsdag,angmsdah:angmsdah,angmsd:angmsd,angrt:angrt,angrtvb:angrtvb,angrtvbd:angrtvbd,angsph:angsph,angst:angst,angzarr:angzarr,Aogon:Aogon,aogon:aogon,Aopf:Aopf,aopf:aopf,apacir:apacir,ap:ap,apE:apE,ape:ape,apid:apid,apos:apos$1,ApplyFunction:ApplyFunction,approx:approx,approxeq:approxeq,Aring:Aring$1,aring:aring$1,Ascr:Ascr,ascr:ascr,Assign:Assign,ast:ast,asymp:asymp,asympeq:asympeq,Atilde:Atilde$1,atilde:atilde$1,Auml:Auml$1,auml:auml$1,awconint:awconint,awint:awint,backcong:backcong,backepsilon:backepsilon,backprime:backprime,backsim:backsim,backsimeq:backsimeq,Backslash:Backslash,Barv:Barv,barvee:barvee,barwed:barwed,Barwed:Barwed,barwedge:barwedge,bbrk:bbrk,bbrktbrk:bbrktbrk,bcong:bcong,Bcy:Bcy,bcy:bcy,bdquo:bdquo,becaus:becaus,because:because,Because:Because,bemptyv:bemptyv,bepsi:bepsi,bernou:bernou,Bernoullis:Bernoullis,Beta:Beta,beta:beta,beth:beth,between:between,Bfr:Bfr,bfr:bfr,bigcap:bigcap,bigcirc:bigcirc,bigcup:bigcup,bigodot:bigodot,bigoplus:bigoplus,bigotimes:bigotimes,bigsqcup:bigsqcup,bigstar:bigstar,bigtriangledown:bigtriangledown,bigtriangleup:bigtriangleup,biguplus:biguplus,bigvee:bigvee,bigwedge:bigwedge,bkarow:bkarow,blacklozenge:blacklozenge,blacksquare:blacksquare,blacktriangle:blacktriangle,blacktriangledown:blacktriangledown,blacktriangleleft:blacktriangleleft,blacktriangleright:blacktriangleright,blank:blank,blk12:blk12,blk14:blk14,blk34:blk34,block:block,bne:bne,bnequiv:bnequiv,bNot:bNot,bnot:bnot,Bopf:Bopf,bopf:bopf,bot:bot,bottom:bottom,bowtie:bowtie,boxbox:boxbox,boxdl:boxdl,boxdL:boxdL,boxDl:boxDl,boxDL:boxDL,boxdr:boxdr,boxdR:boxdR,boxDr:boxDr,boxDR:boxDR,boxh:boxh,boxH:boxH,boxhd:boxhd,boxHd:boxHd,boxhD:boxhD,boxHD:boxHD,boxhu:boxhu,boxHu:boxHu,boxhU:boxhU,boxHU:boxHU,boxminus:boxminus,boxplus:boxplus,boxtimes:boxtimes,boxul:boxul,boxuL:boxuL,boxUl:boxUl,boxUL:boxUL,boxur:boxur,boxuR:boxuR,boxUr:boxUr,boxUR:boxUR,boxv:boxv,boxV:boxV,boxvh:boxvh,boxvH:boxvH,boxVh:boxVh,boxVH:boxVH,boxvl:boxvl,boxvL:boxvL,boxVl:boxVl,boxVL:boxVL,boxvr:boxvr,boxvR:boxvR,boxVr:boxVr,boxVR:boxVR,bprime:bprime,breve:breve,Breve:Breve,brvbar:brvbar$1,bscr:bscr,Bscr:Bscr,bsemi:bsemi,bsim:bsim,bsime:bsime,bsolb:bsolb,bsol:bsol,bsolhsub:bsolhsub,bull:bull,bullet:bullet,bump:bump,bumpE:bumpE,bumpe:bumpe,Bumpeq:Bumpeq,bumpeq:bumpeq,Cacute:Cacute,cacute:cacute,capand:capand,capbrcup:capbrcup,capcap:capcap,cap:cap,Cap:Cap,capcup:capcup,capdot:capdot,CapitalDifferentialD:CapitalDifferentialD,caps:caps,caret:caret,caron:caron,Cayleys:Cayleys,ccaps:ccaps,Ccaron:Ccaron,ccaron:ccaron,Ccedil:Ccedil$1,ccedil:ccedil$1,Ccirc:Ccirc,ccirc:ccirc,Cconint:Cconint,ccups:ccups,ccupssm:ccupssm,Cdot:Cdot,cdot:cdot,cedil:cedil$1,Cedilla:Cedilla,cemptyv:cemptyv,cent:cent$1,centerdot:centerdot,CenterDot:CenterDot,cfr:cfr,Cfr:Cfr,CHcy:CHcy,chcy:chcy,check:check,checkmark:checkmark,Chi:Chi,chi:chi,circ:circ,circeq:circeq,circlearrowleft:circlearrowleft,circlearrowright:circlearrowright,circledast:circledast,circledcirc:circledcirc,circleddash:circleddash,CircleDot:CircleDot,circledR:circledR,circledS:circledS,CircleMinus:CircleMinus,CirclePlus:CirclePlus,CircleTimes:CircleTimes,cir:cir,cirE:cirE,cire:cire,cirfnint:cirfnint,cirmid:cirmid,cirscir:cirscir,ClockwiseContourIntegral:ClockwiseContourIntegral,CloseCurlyDoubleQuote:CloseCurlyDoubleQuote,CloseCurlyQuote:CloseCurlyQuote,clubs:clubs,clubsuit:clubsuit,colon:colon,Colon:Colon,Colone:Colone,colone:colone,coloneq:coloneq,comma:comma,commat:commat,comp:comp,compfn:compfn,complement:complement,complexes:complexes,cong:cong,congdot:congdot,Congruent:Congruent,conint:conint,Conint:Conint,ContourIntegral:ContourIntegral,copf:copf,Copf:Copf,coprod:coprod,Coproduct:Coproduct,copy:copy$1,COPY:COPY$1,copysr:copysr,CounterClockwiseContourIntegral:CounterClockwiseContourIntegral,crarr:crarr,cross:cross,Cross:Cross,Cscr:Cscr,cscr:cscr,csub:csub,csube:csube,csup:csup,csupe:csupe,ctdot:ctdot,cudarrl:cudarrl,cudarrr:cudarrr,cuepr:cuepr,cuesc:cuesc,cularr:cularr,cularrp:cularrp,cupbrcap:cupbrcap,cupcap:cupcap,CupCap:CupCap,cup:cup,Cup:Cup,cupcup:cupcup,cupdot:cupdot,cupor:cupor,cups:cups,curarr:curarr,curarrm:curarrm,curlyeqprec:curlyeqprec,curlyeqsucc:curlyeqsucc,curlyvee:curlyvee,curlywedge:curlywedge,curren:curren$1,curvearrowleft:curvearrowleft,curvearrowright:curvearrowright,cuvee:cuvee,cuwed:cuwed,cwconint:cwconint,cwint:cwint,cylcty:cylcty,dagger:dagger,Dagger:Dagger,daleth:daleth,darr:darr,Darr:Darr,dArr:dArr,dash:dash,Dashv:Dashv,dashv:dashv,dbkarow:dbkarow,dblac:dblac,Dcaron:Dcaron,dcaron:dcaron,Dcy:Dcy,dcy:dcy,ddagger:ddagger,ddarr:ddarr,DD:DD,dd:dd,DDotrahd:DDotrahd,ddotseq:ddotseq,deg:deg$1,Del:Del,Delta:Delta,delta:delta,demptyv:demptyv,dfisht:dfisht,Dfr:Dfr,dfr:dfr,dHar:dHar,dharl:dharl,dharr:dharr,DiacriticalAcute:DiacriticalAcute,DiacriticalDot:DiacriticalDot,DiacriticalDoubleAcute:DiacriticalDoubleAcute,DiacriticalGrave:DiacriticalGrave,DiacriticalTilde:DiacriticalTilde,diam:diam,diamond:diamond,Diamond:Diamond,diamondsuit:diamondsuit,diams:diams,die:die,DifferentialD:DifferentialD,digamma:digamma,disin:disin,div:div,divide:divide$1,divideontimes:divideontimes,divonx:divonx,DJcy:DJcy,djcy:djcy,dlcorn:dlcorn,dlcrop:dlcrop,dollar:dollar,Dopf:Dopf,dopf:dopf,Dot:Dot,dot:dot,DotDot:DotDot,doteq:doteq,doteqdot:doteqdot,DotEqual:DotEqual,dotminus:dotminus,dotplus:dotplus,dotsquare:dotsquare,doublebarwedge:doublebarwedge,DoubleContourIntegral:DoubleContourIntegral,DoubleDot:DoubleDot,DoubleDownArrow:DoubleDownArrow,DoubleLeftArrow:DoubleLeftArrow,DoubleLeftRightArrow:DoubleLeftRightArrow,DoubleLeftTee:DoubleLeftTee,DoubleLongLeftArrow:DoubleLongLeftArrow,DoubleLongLeftRightArrow:DoubleLongLeftRightArrow,DoubleLongRightArrow:DoubleLongRightArrow,DoubleRightArrow:DoubleRightArrow,DoubleRightTee:DoubleRightTee,DoubleUpArrow:DoubleUpArrow,DoubleUpDownArrow:DoubleUpDownArrow,DoubleVerticalBar:DoubleVerticalBar,DownArrowBar:DownArrowBar,downarrow:downarrow,DownArrow:DownArrow,Downarrow:Downarrow,DownArrowUpArrow:DownArrowUpArrow,DownBreve:DownBreve,downdownarrows:downdownarrows,downharpoonleft:downharpoonleft,downharpoonright:downharpoonright,DownLeftRightVector:DownLeftRightVector,DownLeftTeeVector:DownLeftTeeVector,DownLeftVectorBar:DownLeftVectorBar,DownLeftVector:DownLeftVector,DownRightTeeVector:DownRightTeeVector,DownRightVectorBar:DownRightVectorBar,DownRightVector:DownRightVector,DownTeeArrow:DownTeeArrow,DownTee:DownTee,drbkarow:drbkarow,drcorn:drcorn,drcrop:drcrop,Dscr:Dscr,dscr:dscr,DScy:DScy,dscy:dscy,dsol:dsol,Dstrok:Dstrok,dstrok:dstrok,dtdot:dtdot,dtri:dtri,dtrif:dtrif,duarr:duarr,duhar:duhar,dwangle:dwangle,DZcy:DZcy,dzcy:dzcy,dzigrarr:dzigrarr,Eacute:Eacute$1,eacute:eacute$1,easter:easter,Ecaron:Ecaron,ecaron:ecaron,Ecirc:Ecirc$1,ecirc:ecirc$1,ecir:ecir,ecolon:ecolon,Ecy:Ecy,ecy:ecy,eDDot:eDDot,Edot:Edot,edot:edot,eDot:eDot,ee:ee,efDot:efDot,Efr:Efr,efr:efr,eg:eg,Egrave:Egrave$1,egrave:egrave$1,egs:egs,egsdot:egsdot,el:el$1,Element:Element$2,elinters:elinters,ell:ell,els:els,elsdot:elsdot,Emacr:Emacr,emacr:emacr,empty:empty,emptyset:emptyset,EmptySmallSquare:EmptySmallSquare,emptyv:emptyv,EmptyVerySmallSquare:EmptyVerySmallSquare,emsp13:emsp13,emsp14:emsp14,emsp:emsp,ENG:ENG,eng:eng,ensp:ensp,Eogon:Eogon,eogon:eogon,Eopf:Eopf,eopf:eopf,epar:epar,eparsl:eparsl,eplus:eplus,epsi:epsi,Epsilon:Epsilon,epsilon:epsilon,epsiv:epsiv,eqcirc:eqcirc,eqcolon:eqcolon,eqsim:eqsim,eqslantgtr:eqslantgtr,eqslantless:eqslantless,Equal:Equal,equals:equals,EqualTilde:EqualTilde,equest:equest,Equilibrium:Equilibrium,equiv:equiv,equivDD:equivDD,eqvparsl:eqvparsl,erarr:erarr,erDot:erDot,escr:escr,Escr:Escr,esdot:esdot,Esim:Esim,esim:esim,Eta:Eta,eta:eta,ETH:ETH$1,eth:eth$1,Euml:Euml$1,euml:euml$1,euro:euro,excl:excl,exist:exist,Exists:Exists,expectation:expectation,exponentiale:exponentiale,ExponentialE:ExponentialE,fallingdotseq:fallingdotseq,Fcy:Fcy,fcy:fcy,female:female,ffilig:ffilig,fflig:fflig,ffllig:ffllig,Ffr:Ffr,ffr:ffr,filig:filig,FilledSmallSquare:FilledSmallSquare,FilledVerySmallSquare:FilledVerySmallSquare,fjlig:fjlig,flat:flat,fllig:fllig,fltns:fltns,fnof:fnof,Fopf:Fopf,fopf:fopf,forall:forall,ForAll:ForAll,fork:fork,forkv:forkv,Fouriertrf:Fouriertrf,fpartint:fpartint,frac12:frac12$1,frac13:frac13,frac14:frac14$1,frac15:frac15,frac16:frac16,frac18:frac18,frac23:frac23,frac25:frac25,frac34:frac34$1,frac35:frac35,frac38:frac38,frac45:frac45,frac56:frac56,frac58:frac58,frac78:frac78,frasl:frasl,frown:frown,fscr:fscr,Fscr:Fscr,gacute:gacute,Gamma:Gamma,gamma:gamma,Gammad:Gammad,gammad:gammad,gap:gap,Gbreve:Gbreve,gbreve:gbreve,Gcedil:Gcedil,Gcirc:Gcirc,gcirc:gcirc,Gcy:Gcy,gcy:gcy,Gdot:Gdot,gdot:gdot,ge:ge,gE:gE,gEl:gEl,gel:gel,geq:geq,geqq:geqq,geqslant:geqslant,gescc:gescc,ges:ges,gesdot:gesdot,gesdoto:gesdoto,gesdotol:gesdotol,gesl:gesl,gesles:gesles,Gfr:Gfr,gfr:gfr,gg:gg,Gg:Gg,ggg:ggg,gimel:gimel,GJcy:GJcy,gjcy:gjcy,gla:gla,gl:gl,glE:glE,glj:glj,gnap:gnap,gnapprox:gnapprox,gne:gne,gnE:gnE,gneq:gneq,gneqq:gneqq,gnsim:gnsim,Gopf:Gopf,gopf:gopf,grave:grave,GreaterEqual:GreaterEqual,GreaterEqualLess:GreaterEqualLess,GreaterFullEqual:GreaterFullEqual,GreaterGreater:GreaterGreater,GreaterLess:GreaterLess,GreaterSlantEqual:GreaterSlantEqual,GreaterTilde:GreaterTilde,Gscr:Gscr,gscr:gscr,gsim:gsim,gsime:gsime,gsiml:gsiml,gtcc:gtcc,gtcir:gtcir,gt:gt$2,GT:GT$1,Gt:Gt,gtdot:gtdot,gtlPar:gtlPar,gtquest:gtquest,gtrapprox:gtrapprox,gtrarr:gtrarr,gtrdot:gtrdot,gtreqless:gtreqless,gtreqqless:gtreqqless,gtrless:gtrless,gtrsim:gtrsim,gvertneqq:gvertneqq,gvnE:gvnE,Hacek:Hacek,hairsp:hairsp,half:half,hamilt:hamilt,HARDcy:HARDcy,hardcy:hardcy,harrcir:harrcir,harr:harr,hArr:hArr,harrw:harrw,Hat:Hat,hbar:hbar,Hcirc:Hcirc,hcirc:hcirc,hearts:hearts,heartsuit:heartsuit,hellip:hellip,hercon:hercon,hfr:hfr,Hfr:Hfr,HilbertSpace:HilbertSpace,hksearow:hksearow,hkswarow:hkswarow,hoarr:hoarr,homtht:homtht,hookleftarrow:hookleftarrow,hookrightarrow:hookrightarrow,hopf:hopf,Hopf:Hopf,horbar:horbar,HorizontalLine:HorizontalLine,hscr:hscr,Hscr:Hscr,hslash:hslash,Hstrok:Hstrok,hstrok:hstrok,HumpDownHump:HumpDownHump,HumpEqual:HumpEqual,hybull:hybull,hyphen:hyphen,Iacute:Iacute$1,iacute:iacute$1,ic:ic,Icirc:Icirc$1,icirc:icirc$1,Icy:Icy,icy:icy,Idot:Idot,IEcy:IEcy,iecy:iecy,iexcl:iexcl$1,iff:iff,ifr:ifr,Ifr:Ifr,Igrave:Igrave$1,igrave:igrave$1,ii:ii,iiiint:iiiint,iiint:iiint,iinfin:iinfin,iiota:iiota,IJlig:IJlig,ijlig:ijlig,Imacr:Imacr,imacr:imacr,image:image,ImaginaryI:ImaginaryI,imagline:imagline,imagpart:imagpart,imath:imath,Im:Im,imof:imof,imped:imped,Implies:Implies,incare:incare,"in":"∈",infin:infin,infintie:infintie,inodot:inodot,intcal:intcal,int:int,Int:Int,integers:integers,Integral:Integral,intercal:intercal,Intersection:Intersection,intlarhk:intlarhk,intprod:intprod,InvisibleComma:InvisibleComma,InvisibleTimes:InvisibleTimes,IOcy:IOcy,iocy:iocy,Iogon:Iogon,iogon:iogon,Iopf:Iopf,iopf:iopf,Iota:Iota,iota:iota,iprod:iprod,iquest:iquest$1,iscr:iscr,Iscr:Iscr,isin:isin,isindot:isindot,isinE:isinE,isins:isins,isinsv:isinsv,isinv:isinv,it:it,Itilde:Itilde,itilde:itilde,Iukcy:Iukcy,iukcy:iukcy,Iuml:Iuml$1,iuml:iuml$1,Jcirc:Jcirc,jcirc:jcirc,Jcy:Jcy,jcy:jcy,Jfr:Jfr,jfr:jfr,jmath:jmath,Jopf:Jopf,jopf:jopf,Jscr:Jscr,jscr:jscr,Jsercy:Jsercy,jsercy:jsercy,Jukcy:Jukcy,jukcy:jukcy,Kappa:Kappa,kappa:kappa,kappav:kappav,Kcedil:Kcedil,kcedil:kcedil,Kcy:Kcy,kcy:kcy,Kfr:Kfr,kfr:kfr,kgreen:kgreen,KHcy:KHcy,khcy:khcy,KJcy:KJcy,kjcy:kjcy,Kopf:Kopf,kopf:kopf,Kscr:Kscr,kscr:kscr,lAarr:lAarr,Lacute:Lacute,lacute:lacute,laemptyv:laemptyv,lagran:lagran,Lambda:Lambda,lambda:lambda,lang:lang,Lang:Lang,langd:langd,langle:langle,lap:lap,Laplacetrf:Laplacetrf,laquo:laquo$1,larrb:larrb,larrbfs:larrbfs,larr:larr,Larr:Larr,lArr:lArr,larrfs:larrfs,larrhk:larrhk,larrlp:larrlp,larrpl:larrpl,larrsim:larrsim,larrtl:larrtl,latail:latail,lAtail:lAtail,lat:lat,late:late,lates:lates,lbarr:lbarr,lBarr:lBarr,lbbrk:lbbrk,lbrace:lbrace,lbrack:lbrack,lbrke:lbrke,lbrksld:lbrksld,lbrkslu:lbrkslu,Lcaron:Lcaron,lcaron:lcaron,Lcedil:Lcedil,lcedil:lcedil,lceil:lceil,lcub:lcub,Lcy:Lcy,lcy:lcy,ldca:ldca,ldquo:ldquo,ldquor:ldquor,ldrdhar:ldrdhar,ldrushar:ldrushar,ldsh:ldsh,le:le,lE:lE,LeftAngleBracket:LeftAngleBracket,LeftArrowBar:LeftArrowBar,leftarrow:leftarrow,LeftArrow:LeftArrow,Leftarrow:Leftarrow,LeftArrowRightArrow:LeftArrowRightArrow,leftarrowtail:leftarrowtail,LeftCeiling:LeftCeiling,LeftDoubleBracket:LeftDoubleBracket,LeftDownTeeVector:LeftDownTeeVector,LeftDownVectorBar:LeftDownVectorBar,LeftDownVector:LeftDownVector,LeftFloor:LeftFloor,leftharpoondown:leftharpoondown,leftharpoonup:leftharpoonup,leftleftarrows:leftleftarrows,leftrightarrow:leftrightarrow,LeftRightArrow:LeftRightArrow,Leftrightarrow:Leftrightarrow,leftrightarrows:leftrightarrows,leftrightharpoons:leftrightharpoons,leftrightsquigarrow:leftrightsquigarrow,LeftRightVector:LeftRightVector,LeftTeeArrow:LeftTeeArrow,LeftTee:LeftTee,LeftTeeVector:LeftTeeVector,leftthreetimes:leftthreetimes,LeftTriangleBar:LeftTriangleBar,LeftTriangle:LeftTriangle,LeftTriangleEqual:LeftTriangleEqual,LeftUpDownVector:LeftUpDownVector,LeftUpTeeVector:LeftUpTeeVector,LeftUpVectorBar:LeftUpVectorBar,LeftUpVector:LeftUpVector,LeftVectorBar:LeftVectorBar,LeftVector:LeftVector,lEg:lEg,leg:leg,leq:leq,leqq:leqq,leqslant:leqslant,lescc:lescc,les:les,lesdot:lesdot,lesdoto:lesdoto,lesdotor:lesdotor,lesg:lesg,lesges:lesges,lessapprox:lessapprox,lessdot:lessdot,lesseqgtr:lesseqgtr,lesseqqgtr:lesseqqgtr,LessEqualGreater:LessEqualGreater,LessFullEqual:LessFullEqual,LessGreater:LessGreater,lessgtr:lessgtr,LessLess:LessLess,lesssim:lesssim,LessSlantEqual:LessSlantEqual,LessTilde:LessTilde,lfisht:lfisht,lfloor:lfloor,Lfr:Lfr,lfr:lfr,lg:lg,lgE:lgE,lHar:lHar,lhard:lhard,lharu:lharu,lharul:lharul,lhblk:lhblk,LJcy:LJcy,ljcy:ljcy,llarr:llarr,ll:ll,Ll:Ll,llcorner:llcorner,Lleftarrow:Lleftarrow,llhard:llhard,lltri:lltri,Lmidot:Lmidot,lmidot:lmidot,lmoustache:lmoustache,lmoust:lmoust,lnap:lnap,lnapprox:lnapprox,lne:lne,lnE:lnE,lneq:lneq,lneqq:lneqq,lnsim:lnsim,loang:loang,loarr:loarr,lobrk:lobrk,longleftarrow:longleftarrow,LongLeftArrow:LongLeftArrow,Longleftarrow:Longleftarrow,longleftrightarrow:longleftrightarrow,LongLeftRightArrow:LongLeftRightArrow,Longleftrightarrow:Longleftrightarrow,longmapsto:longmapsto,longrightarrow:longrightarrow,LongRightArrow:LongRightArrow,Longrightarrow:Longrightarrow,looparrowleft:looparrowleft,looparrowright:looparrowright,lopar:lopar,Lopf:Lopf,lopf:lopf,loplus:loplus,lotimes:lotimes,lowast:lowast,lowbar:lowbar,LowerLeftArrow:LowerLeftArrow,LowerRightArrow:LowerRightArrow,loz:loz,lozenge:lozenge,lozf:lozf,lpar:lpar,lparlt:lparlt,lrarr:lrarr,lrcorner:lrcorner,lrhar:lrhar,lrhard:lrhard,lrm:lrm,lrtri:lrtri,lsaquo:lsaquo,lscr:lscr,Lscr:Lscr,lsh:lsh,Lsh:Lsh,lsim:lsim,lsime:lsime,lsimg:lsimg,lsqb:lsqb,lsquo:lsquo,lsquor:lsquor,Lstrok:Lstrok,lstrok:lstrok,ltcc:ltcc,ltcir:ltcir,lt:lt$2,LT:LT$1,Lt:Lt,ltdot:ltdot,lthree:lthree,ltimes:ltimes,ltlarr:ltlarr,ltquest:ltquest,ltri:ltri,ltrie:ltrie,ltrif:ltrif,ltrPar:ltrPar,lurdshar:lurdshar,luruhar:luruhar,lvertneqq:lvertneqq,lvnE:lvnE,macr:macr$1,male:male,malt:malt,maltese:maltese,"Map":"⤅",map:map,mapsto:mapsto,mapstodown:mapstodown,mapstoleft:mapstoleft,mapstoup:mapstoup,marker:marker,mcomma:mcomma,Mcy:Mcy,mcy:mcy,mdash:mdash,mDDot:mDDot,measuredangle:measuredangle,MediumSpace:MediumSpace,Mellintrf:Mellintrf,Mfr:Mfr,mfr:mfr,mho:mho,micro:micro$1,midast:midast,midcir:midcir,mid:mid,middot:middot$1,minusb:minusb,minus:minus,minusd:minusd,minusdu:minusdu,MinusPlus:MinusPlus,mlcp:mlcp,mldr:mldr,mnplus:mnplus,models:models,Mopf:Mopf,mopf:mopf,mp:mp,mscr:mscr,Mscr:Mscr,mstpos:mstpos,Mu:Mu,mu:mu,multimap:multimap,mumap:mumap,nabla:nabla,Nacute:Nacute,nacute:nacute,nang:nang,nap:nap,napE:napE,napid:napid,napos:napos,napprox:napprox,natural:natural,naturals:naturals,natur:natur,nbsp:nbsp$1,nbump:nbump,nbumpe:nbumpe,ncap:ncap,Ncaron:Ncaron,ncaron:ncaron,Ncedil:Ncedil,ncedil:ncedil,ncong:ncong,ncongdot:ncongdot,ncup:ncup,Ncy:Ncy,ncy:ncy,ndash:ndash,nearhk:nearhk,nearr:nearr,neArr:neArr,nearrow:nearrow,ne:ne,nedot:nedot,NegativeMediumSpace:NegativeMediumSpace,NegativeThickSpace:NegativeThickSpace,NegativeThinSpace:NegativeThinSpace,NegativeVeryThinSpace:NegativeVeryThinSpace,nequiv:nequiv,nesear:nesear,nesim:nesim,NestedGreaterGreater:NestedGreaterGreater,NestedLessLess:NestedLessLess,NewLine:NewLine,nexist:nexist,nexists:nexists,Nfr:Nfr,nfr:nfr,ngE:ngE,nge:nge,ngeq:ngeq,ngeqq:ngeqq,ngeqslant:ngeqslant,nges:nges,nGg:nGg,ngsim:ngsim,nGt:nGt,ngt:ngt,ngtr:ngtr,nGtv:nGtv,nharr:nharr,nhArr:nhArr,nhpar:nhpar,ni:ni,nis:nis,nisd:nisd,niv:niv,NJcy:NJcy,njcy:njcy,nlarr:nlarr,nlArr:nlArr,nldr:nldr,nlE:nlE,nle:nle,nleftarrow:nleftarrow,nLeftarrow:nLeftarrow,nleftrightarrow:nleftrightarrow,nLeftrightarrow:nLeftrightarrow,nleq:nleq,nleqq:nleqq,nleqslant:nleqslant,nles:nles,nless:nless,nLl:nLl,nlsim:nlsim,nLt:nLt,nlt:nlt,nltri:nltri,nltrie:nltrie,nLtv:nLtv,nmid:nmid,NoBreak:NoBreak,NonBreakingSpace:NonBreakingSpace,nopf:nopf,Nopf:Nopf,Not:Not,not:not$1,NotCongruent:NotCongruent,NotCupCap:NotCupCap,NotDoubleVerticalBar:NotDoubleVerticalBar,NotElement:NotElement,NotEqual:NotEqual,NotEqualTilde:NotEqualTilde,NotExists:NotExists,NotGreater:NotGreater,NotGreaterEqual:NotGreaterEqual,NotGreaterFullEqual:NotGreaterFullEqual,NotGreaterGreater:NotGreaterGreater,NotGreaterLess:NotGreaterLess,NotGreaterSlantEqual:NotGreaterSlantEqual,NotGreaterTilde:NotGreaterTilde,NotHumpDownHump:NotHumpDownHump,NotHumpEqual:NotHumpEqual,notin:notin,notindot:notindot,notinE:notinE,notinva:notinva,notinvb:notinvb,notinvc:notinvc,NotLeftTriangleBar:NotLeftTriangleBar,NotLeftTriangle:NotLeftTriangle,NotLeftTriangleEqual:NotLeftTriangleEqual,NotLess:NotLess,NotLessEqual:NotLessEqual,NotLessGreater:NotLessGreater,NotLessLess:NotLessLess,NotLessSlantEqual:NotLessSlantEqual,NotLessTilde:NotLessTilde,NotNestedGreaterGreater:NotNestedGreaterGreater,NotNestedLessLess:NotNestedLessLess,notni:notni,notniva:notniva,notnivb:notnivb,notnivc:notnivc,NotPrecedes:NotPrecedes,NotPrecedesEqual:NotPrecedesEqual,NotPrecedesSlantEqual:NotPrecedesSlantEqual,NotReverseElement:NotReverseElement,NotRightTriangleBar:NotRightTriangleBar,NotRightTriangle:NotRightTriangle,NotRightTriangleEqual:NotRightTriangleEqual,NotSquareSubset:NotSquareSubset,NotSquareSubsetEqual:NotSquareSubsetEqual,NotSquareSuperset:NotSquareSuperset,NotSquareSupersetEqual:NotSquareSupersetEqual,NotSubset:NotSubset,NotSubsetEqual:NotSubsetEqual,NotSucceeds:NotSucceeds,NotSucceedsEqual:NotSucceedsEqual,NotSucceedsSlantEqual:NotSucceedsSlantEqual,NotSucceedsTilde:NotSucceedsTilde,NotSuperset:NotSuperset,NotSupersetEqual:NotSupersetEqual,NotTilde:NotTilde,NotTildeEqual:NotTildeEqual,NotTildeFullEqual:NotTildeFullEqual,NotTildeTilde:NotTildeTilde,NotVerticalBar:NotVerticalBar,nparallel:nparallel,npar:npar,nparsl:nparsl,npart:npart,npolint:npolint,npr:npr,nprcue:nprcue,nprec:nprec,npreceq:npreceq,npre:npre,nrarrc:nrarrc,nrarr:nrarr,nrArr:nrArr,nrarrw:nrarrw,nrightarrow:nrightarrow,nRightarrow:nRightarrow,nrtri:nrtri,nrtrie:nrtrie,nsc:nsc,nsccue:nsccue,nsce:nsce,Nscr:Nscr,nscr:nscr,nshortmid:nshortmid,nshortparallel:nshortparallel,nsim:nsim,nsime:nsime,nsimeq:nsimeq,nsmid:nsmid,nspar:nspar,nsqsube:nsqsube,nsqsupe:nsqsupe,nsub:nsub,nsubE:nsubE,nsube:nsube,nsubset:nsubset,nsubseteq:nsubseteq,nsubseteqq:nsubseteqq,nsucc:nsucc,nsucceq:nsucceq,nsup:nsup,nsupE:nsupE,nsupe:nsupe,nsupset:nsupset,nsupseteq:nsupseteq,nsupseteqq:nsupseteqq,ntgl:ntgl,Ntilde:Ntilde$1,ntilde:ntilde$1,ntlg:ntlg,ntriangleleft:ntriangleleft,ntrianglelefteq:ntrianglelefteq,ntriangleright:ntriangleright,ntrianglerighteq:ntrianglerighteq,Nu:Nu,nu:nu,num:num,numero:numero,numsp:numsp,nvap:nvap,nvdash:nvdash,nvDash:nvDash,nVdash:nVdash,nVDash:nVDash,nvge:nvge,nvgt:nvgt,nvHarr:nvHarr,nvinfin:nvinfin,nvlArr:nvlArr,nvle:nvle,nvlt:nvlt,nvltrie:nvltrie,nvrArr:nvrArr,nvrtrie:nvrtrie,nvsim:nvsim,nwarhk:nwarhk,nwarr:nwarr,nwArr:nwArr,nwarrow:nwarrow,nwnear:nwnear,Oacute:Oacute$1,oacute:oacute$1,oast:oast,Ocirc:Ocirc$1,ocirc:ocirc$1,ocir:ocir,Ocy:Ocy,ocy:ocy,odash:odash,Odblac:Odblac,odblac:odblac,odiv:odiv,odot:odot,odsold:odsold,OElig:OElig,oelig:oelig,ofcir:ofcir,Ofr:Ofr,ofr:ofr,ogon:ogon,Ograve:Ograve$1,ograve:ograve$1,ogt:ogt,ohbar:ohbar,ohm:ohm,oint:oint,olarr:olarr,olcir:olcir,olcross:olcross,oline:oline,olt:olt,Omacr:Omacr,omacr:omacr,Omega:Omega,omega:omega,Omicron:Omicron,omicron:omicron,omid:omid,ominus:ominus,Oopf:Oopf,oopf:oopf,opar:opar,OpenCurlyDoubleQuote:OpenCurlyDoubleQuote,OpenCurlyQuote:OpenCurlyQuote,operp:operp,oplus:oplus,orarr:orarr,Or:Or,or:or,ord:ord,order:order,orderof:orderof,ordf:ordf$1,ordm:ordm$1,origof:origof,oror:oror,orslope:orslope,orv:orv,oS:oS,Oscr:Oscr,oscr:oscr,Oslash:Oslash$1,oslash:oslash$1,osol:osol,Otilde:Otilde$1,otilde:otilde$1,otimesas:otimesas,Otimes:Otimes,otimes:otimes,Ouml:Ouml$1,ouml:ouml$1,ovbar:ovbar,OverBar:OverBar,OverBrace:OverBrace,OverBracket:OverBracket,OverParenthesis:OverParenthesis,para:para$1,parallel:parallel,par:par,parsim:parsim,parsl:parsl,part:part,PartialD:PartialD,Pcy:Pcy,pcy:pcy,percnt:percnt,period:period,permil:permil,perp:perp,pertenk:pertenk,Pfr:Pfr,pfr:pfr,Phi:Phi,phi:phi,phiv:phiv,phmmat:phmmat,phone:phone,Pi:Pi,pi:pi,pitchfork:pitchfork,piv:piv,planck:planck,planckh:planckh,plankv:plankv,plusacir:plusacir,plusb:plusb,pluscir:pluscir,plus:plus,plusdo:plusdo,plusdu:plusdu,pluse:pluse,PlusMinus:PlusMinus,plusmn:plusmn$1,plussim:plussim,plustwo:plustwo,pm:pm,Poincareplane:Poincareplane,pointint:pointint,popf:popf,Popf:Popf,pound:pound$1,prap:prap,Pr:Pr,pr:pr,prcue:prcue,precapprox:precapprox,prec:prec,preccurlyeq:preccurlyeq,Precedes:Precedes,PrecedesEqual:PrecedesEqual,PrecedesSlantEqual:PrecedesSlantEqual,PrecedesTilde:PrecedesTilde,preceq:preceq,precnapprox:precnapprox,precneqq:precneqq,precnsim:precnsim,pre:pre,prE:prE,precsim:precsim,prime:prime,Prime:Prime,primes:primes,prnap:prnap,prnE:prnE,prnsim:prnsim,prod:prod,Product:Product,profalar:profalar,profline:profline,profsurf:profsurf,prop:prop,Proportional:Proportional,Proportion:Proportion,propto:propto,prsim:prsim,prurel:prurel,Pscr:Pscr,pscr:pscr,Psi:Psi,psi:psi,puncsp:puncsp,Qfr:Qfr,qfr:qfr,qint:qint,qopf:qopf,Qopf:Qopf,qprime:qprime,Qscr:Qscr,qscr:qscr,quaternions:quaternions,quatint:quatint,quest:quest,questeq:questeq,quot:quot$2,QUOT:QUOT$1,rAarr:rAarr,race:race,Racute:Racute,racute:racute,radic:radic,raemptyv:raemptyv,rang:rang,Rang:Rang,rangd:rangd,range:range,rangle:rangle,raquo:raquo$1,rarrap:rarrap,rarrb:rarrb,rarrbfs:rarrbfs,rarrc:rarrc,rarr:rarr,Rarr:Rarr,rArr:rArr,rarrfs:rarrfs,rarrhk:rarrhk,rarrlp:rarrlp,rarrpl:rarrpl,rarrsim:rarrsim,Rarrtl:Rarrtl,rarrtl:rarrtl,rarrw:rarrw,ratail:ratail,rAtail:rAtail,ratio:ratio,rationals:rationals,rbarr:rbarr,rBarr:rBarr,RBarr:RBarr,rbbrk:rbbrk,rbrace:rbrace,rbrack:rbrack,rbrke:rbrke,rbrksld:rbrksld,rbrkslu:rbrkslu,Rcaron:Rcaron,rcaron:rcaron,Rcedil:Rcedil,rcedil:rcedil,rceil:rceil,rcub:rcub,Rcy:Rcy,rcy:rcy,rdca:rdca,rdldhar:rdldhar,rdquo:rdquo,rdquor:rdquor,rdsh:rdsh,real:real,realine:realine,realpart:realpart,reals:reals,Re:Re,rect:rect,reg:reg$1,REG:REG$1,ReverseElement:ReverseElement,ReverseEquilibrium:ReverseEquilibrium,ReverseUpEquilibrium:ReverseUpEquilibrium,rfisht:rfisht,rfloor:rfloor,rfr:rfr,Rfr:Rfr,rHar:rHar,rhard:rhard,rharu:rharu,rharul:rharul,Rho:Rho,rho:rho,rhov:rhov,RightAngleBracket:RightAngleBracket,RightArrowBar:RightArrowBar,rightarrow:rightarrow,RightArrow:RightArrow,Rightarrow:Rightarrow,RightArrowLeftArrow:RightArrowLeftArrow,rightarrowtail:rightarrowtail,RightCeiling:RightCeiling,RightDoubleBracket:RightDoubleBracket,RightDownTeeVector:RightDownTeeVector,RightDownVectorBar:RightDownVectorBar,RightDownVector:RightDownVector,RightFloor:RightFloor,rightharpoondown:rightharpoondown,rightharpoonup:rightharpoonup,rightleftarrows:rightleftarrows,rightleftharpoons:rightleftharpoons,rightrightarrows:rightrightarrows,rightsquigarrow:rightsquigarrow,RightTeeArrow:RightTeeArrow,RightTee:RightTee,RightTeeVector:RightTeeVector,rightthreetimes:rightthreetimes,RightTriangleBar:RightTriangleBar,RightTriangle:RightTriangle,RightTriangleEqual:RightTriangleEqual,RightUpDownVector:RightUpDownVector,RightUpTeeVector:RightUpTeeVector,RightUpVectorBar:RightUpVectorBar,RightUpVector:RightUpVector,RightVectorBar:RightVectorBar,RightVector:RightVector,ring:ring,risingdotseq:risingdotseq,rlarr:rlarr,rlhar:rlhar,rlm:rlm,rmoustache:rmoustache,rmoust:rmoust,rnmid:rnmid,roang:roang,roarr:roarr,robrk:robrk,ropar:ropar,ropf:ropf,Ropf:Ropf,roplus:roplus,rotimes:rotimes,RoundImplies:RoundImplies,rpar:rpar,rpargt:rpargt,rppolint:rppolint,rrarr:rrarr,Rrightarrow:Rrightarrow,rsaquo:rsaquo,rscr:rscr,Rscr:Rscr,rsh:rsh,Rsh:Rsh,rsqb:rsqb,rsquo:rsquo,rsquor:rsquor,rthree:rthree,rtimes:rtimes,rtri:rtri,rtrie:rtrie,rtrif:rtrif,rtriltri:rtriltri,RuleDelayed:RuleDelayed,ruluhar:ruluhar,rx:rx,Sacute:Sacute,sacute:sacute,sbquo:sbquo,scap:scap,Scaron:Scaron,scaron:scaron,Sc:Sc,sc:sc,sccue:sccue,sce:sce,scE:scE,Scedil:Scedil,scedil:scedil,Scirc:Scirc,scirc:scirc,scnap:scnap,scnE:scnE,scnsim:scnsim,scpolint:scpolint,scsim:scsim,Scy:Scy,scy:scy,sdotb:sdotb,sdot:sdot,sdote:sdote,searhk:searhk,searr:searr,seArr:seArr,searrow:searrow,sect:sect$1,semi:semi,seswar:seswar,setminus:setminus,setmn:setmn,sext:sext,Sfr:Sfr,sfr:sfr,sfrown:sfrown,sharp:sharp,SHCHcy:SHCHcy,shchcy:shchcy,SHcy:SHcy,shcy:shcy,ShortDownArrow:ShortDownArrow,ShortLeftArrow:ShortLeftArrow,shortmid:shortmid,shortparallel:shortparallel,ShortRightArrow:ShortRightArrow,ShortUpArrow:ShortUpArrow,shy:shy$1,Sigma:Sigma,sigma:sigma,sigmaf:sigmaf,sigmav:sigmav,sim:sim,simdot:simdot,sime:sime,simeq:simeq,simg:simg,simgE:simgE,siml:siml,simlE:simlE,simne:simne,simplus:simplus,simrarr:simrarr,slarr:slarr,SmallCircle:SmallCircle,smallsetminus:smallsetminus,smashp:smashp,smeparsl:smeparsl,smid:smid,smile:smile,smt:smt,smte:smte,smtes:smtes,SOFTcy:SOFTcy,softcy:softcy,solbar:solbar,solb:solb,sol:sol,Sopf:Sopf,sopf:sopf,spades:spades,spadesuit:spadesuit,spar:spar,sqcap:sqcap,sqcaps:sqcaps,sqcup:sqcup,sqcups:sqcups,Sqrt:Sqrt,sqsub:sqsub,sqsube:sqsube,sqsubset:sqsubset,sqsubseteq:sqsubseteq,sqsup:sqsup,sqsupe:sqsupe,sqsupset:sqsupset,sqsupseteq:sqsupseteq,square:square,Square:Square,SquareIntersection:SquareIntersection,SquareSubset:SquareSubset,SquareSubsetEqual:SquareSubsetEqual,SquareSuperset:SquareSuperset,SquareSupersetEqual:SquareSupersetEqual,SquareUnion:SquareUnion,squarf:squarf,squ:squ,squf:squf,srarr:srarr,Sscr:Sscr,sscr:sscr,ssetmn:ssetmn,ssmile:ssmile,sstarf:sstarf,Star:Star,star:star,starf:starf,straightepsilon:straightepsilon,straightphi:straightphi,strns:strns,sub:sub,Sub:Sub,subdot:subdot,subE:subE,sube:sube,subedot:subedot,submult:submult,subnE:subnE,subne:subne,subplus:subplus,subrarr:subrarr,subset:subset,Subset:Subset,subseteq:subseteq,subseteqq:subseteqq,SubsetEqual:SubsetEqual,subsetneq:subsetneq,subsetneqq:subsetneqq,subsim:subsim,subsub:subsub,subsup:subsup,succapprox:succapprox,succ:succ,succcurlyeq:succcurlyeq,Succeeds:Succeeds,SucceedsEqual:SucceedsEqual,SucceedsSlantEqual:SucceedsSlantEqual,SucceedsTilde:SucceedsTilde,succeq:succeq,succnapprox:succnapprox,succneqq:succneqq,succnsim:succnsim,succsim:succsim,SuchThat:SuchThat,sum:sum,Sum:Sum,sung:sung,sup1:sup1$1,sup2:sup2$1,sup3:sup3$1,sup:sup,Sup:Sup,supdot:supdot,supdsub:supdsub,supE:supE,supe:supe,supedot:supedot,Superset:Superset,SupersetEqual:SupersetEqual,suphsol:suphsol,suphsub:suphsub,suplarr:suplarr,supmult:supmult,supnE:supnE,supne:supne,supplus:supplus,supset:supset,Supset:Supset,supseteq:supseteq,supseteqq:supseteqq,supsetneq:supsetneq,supsetneqq:supsetneqq,supsim:supsim,supsub:supsub,supsup:supsup,swarhk:swarhk,swarr:swarr,swArr:swArr,swarrow:swarrow,swnwar:swnwar,szlig:szlig$1,Tab:Tab,target:target,Tau:Tau,tau:tau,tbrk:tbrk,Tcaron:Tcaron,tcaron:tcaron,Tcedil:Tcedil,tcedil:tcedil,Tcy:Tcy,tcy:tcy,tdot:tdot,telrec:telrec,Tfr:Tfr,tfr:tfr,there4:there4,therefore:therefore,Therefore:Therefore,Theta:Theta,theta:theta,thetasym:thetasym,thetav:thetav,thickapprox:thickapprox,thicksim:thicksim,ThickSpace:ThickSpace,ThinSpace:ThinSpace,thinsp:thinsp,thkap:thkap,thksim:thksim,THORN:THORN$1,thorn:thorn$1,tilde:tilde,Tilde:Tilde,TildeEqual:TildeEqual,TildeFullEqual:TildeFullEqual,TildeTilde:TildeTilde,timesbar:timesbar,timesb:timesb,times:times$1,timesd:timesd,tint:tint,toea:toea,topbot:topbot,topcir:topcir,top:top,Topf:Topf,topf:topf,topfork:topfork,tosa:tosa,tprime:tprime,trade:trade,TRADE:TRADE,triangle:triangle,triangledown:triangledown,triangleleft:triangleleft,trianglelefteq:trianglelefteq,triangleq:triangleq,triangleright:triangleright,trianglerighteq:trianglerighteq,tridot:tridot,trie:trie,triminus:triminus,TripleDot:TripleDot,triplus:triplus,trisb:trisb,tritime:tritime,trpezium:trpezium,Tscr:Tscr,tscr:tscr,TScy:TScy,tscy:tscy,TSHcy:TSHcy,tshcy:tshcy,Tstrok:Tstrok,tstrok:tstrok,twixt:twixt,twoheadleftarrow:twoheadleftarrow,twoheadrightarrow:twoheadrightarrow,Uacute:Uacute$1,uacute:uacute$1,uarr:uarr,Uarr:Uarr,uArr:uArr,Uarrocir:Uarrocir,Ubrcy:Ubrcy,ubrcy:ubrcy,Ubreve:Ubreve,ubreve:ubreve,Ucirc:Ucirc$1,ucirc:ucirc$1,Ucy:Ucy,ucy:ucy,udarr:udarr,Udblac:Udblac,udblac:udblac,udhar:udhar,ufisht:ufisht,Ufr:Ufr,ufr:ufr,Ugrave:Ugrave$1,ugrave:ugrave$1,uHar:uHar,uharl:uharl,uharr:uharr,uhblk:uhblk,ulcorn:ulcorn,ulcorner:ulcorner,ulcrop:ulcrop,ultri:ultri,Umacr:Umacr,umacr:umacr,uml:uml$1,UnderBar:UnderBar,UnderBrace:UnderBrace,UnderBracket:UnderBracket,UnderParenthesis:UnderParenthesis,Union:Union,UnionPlus:UnionPlus,Uogon:Uogon,uogon:uogon,Uopf:Uopf,uopf:uopf,UpArrowBar:UpArrowBar,uparrow:uparrow,UpArrow:UpArrow,Uparrow:Uparrow,UpArrowDownArrow:UpArrowDownArrow,updownarrow:updownarrow,UpDownArrow:UpDownArrow,Updownarrow:Updownarrow,UpEquilibrium:UpEquilibrium,upharpoonleft:upharpoonleft,upharpoonright:upharpoonright,uplus:uplus,UpperLeftArrow:UpperLeftArrow,UpperRightArrow:UpperRightArrow,upsi:upsi,Upsi:Upsi,upsih:upsih,Upsilon:Upsilon,upsilon:upsilon,UpTeeArrow:UpTeeArrow,UpTee:UpTee,upuparrows:upuparrows,urcorn:urcorn,urcorner:urcorner,urcrop:urcrop,Uring:Uring,uring:uring,urtri:urtri,Uscr:Uscr,uscr:uscr,utdot:utdot,Utilde:Utilde,utilde:utilde,utri:utri,utrif:utrif,uuarr:uuarr,Uuml:Uuml$1,uuml:uuml$1,uwangle:uwangle,vangrt:vangrt,varepsilon:varepsilon,varkappa:varkappa,varnothing:varnothing,varphi:varphi,varpi:varpi,varpropto:varpropto,varr:varr,vArr:vArr,varrho:varrho,varsigma:varsigma,varsubsetneq:varsubsetneq,varsubsetneqq:varsubsetneqq,varsupsetneq:varsupsetneq,varsupsetneqq:varsupsetneqq,vartheta:vartheta,vartriangleleft:vartriangleleft,vartriangleright:vartriangleright,vBar:vBar,Vbar:Vbar,vBarv:vBarv,Vcy:Vcy,vcy:vcy,vdash:vdash,vDash:vDash,Vdash:Vdash,VDash:VDash,Vdashl:Vdashl,veebar:veebar,vee:vee,Vee:Vee,veeeq:veeeq,vellip:vellip,verbar:verbar,Verbar:Verbar,vert:vert,Vert:Vert,VerticalBar:VerticalBar,VerticalLine:VerticalLine,VerticalSeparator:VerticalSeparator,VerticalTilde:VerticalTilde,VeryThinSpace:VeryThinSpace,Vfr:Vfr,vfr:vfr,vltri:vltri,vnsub:vnsub,vnsup:vnsup,Vopf:Vopf,vopf:vopf,vprop:vprop,vrtri:vrtri,Vscr:Vscr,vscr:vscr,vsubnE:vsubnE,vsubne:vsubne,vsupnE:vsupnE,vsupne:vsupne,Vvdash:Vvdash,vzigzag:vzigzag,Wcirc:Wcirc,wcirc:wcirc,wedbar:wedbar,wedge:wedge,Wedge:Wedge,wedgeq:wedgeq,weierp:weierp,Wfr:Wfr,wfr:wfr,Wopf:Wopf,wopf:wopf,wp:wp,wr:wr,wreath:wreath,Wscr:Wscr,wscr:wscr,xcap:xcap,xcirc:xcirc,xcup:xcup,xdtri:xdtri,Xfr:Xfr,xfr:xfr,xharr:xharr,xhArr:xhArr,Xi:Xi,xi:xi,xlarr:xlarr,xlArr:xlArr,xmap:xmap,xnis:xnis,xodot:xodot,Xopf:Xopf,xopf:xopf,xoplus:xoplus,xotime:xotime,xrarr:xrarr,xrArr:xrArr,Xscr:Xscr,xscr:xscr,xsqcup:xsqcup,xuplus:xuplus,xutri:xutri,xvee:xvee,xwedge:xwedge,Yacute:Yacute$1,yacute:yacute$1,YAcy:YAcy,yacy:yacy,Ycirc:Ycirc,ycirc:ycirc,Ycy:Ycy,ycy:ycy,yen:yen$1,Yfr:Yfr,yfr:yfr,YIcy:YIcy,yicy:yicy,Yopf:Yopf,yopf:yopf,Yscr:Yscr,yscr:yscr,YUcy:YUcy,yucy:yucy,yuml:yuml$1,Yuml:Yuml,Zacute:Zacute,zacute:zacute,Zcaron:Zcaron,zcaron:zcaron,Zcy:Zcy,zcy:zcy,Zdot:Zdot,zdot:zdot,zeetrf:zeetrf,ZeroWidthSpace:ZeroWidthSpace,Zeta:Zeta,zeta:zeta,zfr:zfr,Zfr:Zfr,ZHcy:ZHcy,zhcy:zhcy,zigrarr:zigrarr,zopf:zopf,Zopf:Zopf,Zscr:Zscr,zscr:zscr,zwj:zwj,zwnj:zwnj};

	var Aacute="Á";var aacute="á";var Acirc="Â";var acirc="â";var acute="´";var AElig="Æ";var aelig="æ";var Agrave="À";var agrave="à";var amp$1="&";var AMP="&";var Aring="Å";var aring="å";var Atilde="Ã";var atilde="ã";var Auml="Ä";var auml="ä";var brvbar="¦";var Ccedil="Ç";var ccedil="ç";var cedil="¸";var cent="¢";var copy="©";var COPY="©";var curren="¤";var deg="°";var divide="÷";var Eacute="É";var eacute="é";var Ecirc="Ê";var ecirc="ê";var Egrave="È";var egrave="è";var ETH="Ð";var eth="ð";var Euml="Ë";var euml="ë";var frac12="½";var frac14="¼";var frac34="¾";var gt$1=">";var GT=">";var Iacute="Í";var iacute="í";var Icirc="Î";var icirc="î";var iexcl="¡";var Igrave="Ì";var igrave="ì";var iquest="¿";var Iuml="Ï";var iuml="ï";var laquo="«";var lt$1="<";var LT="<";var macr="¯";var micro="µ";var middot="·";var nbsp=" ";var not="¬";var Ntilde="Ñ";var ntilde="ñ";var Oacute="Ó";var oacute="ó";var Ocirc="Ô";var ocirc="ô";var Ograve="Ò";var ograve="ò";var ordf="ª";var ordm="º";var Oslash="Ø";var oslash="ø";var Otilde="Õ";var otilde="õ";var Ouml="Ö";var ouml="ö";var para="¶";var plusmn="±";var pound="£";var quot$1="\"";var QUOT="\"";var raquo="»";var reg="®";var REG="®";var sect="§";var shy="­";var sup1="¹";var sup2="²";var sup3="³";var szlig="ß";var THORN="Þ";var thorn="þ";var times="×";var Uacute="Ú";var uacute="ú";var Ucirc="Û";var ucirc="û";var Ugrave="Ù";var ugrave="ù";var uml="¨";var Uuml="Ü";var uuml="ü";var Yacute="Ý";var yacute="ý";var yen="¥";var yuml="ÿ";var require$$1 = {Aacute:Aacute,aacute:aacute,Acirc:Acirc,acirc:acirc,acute:acute,AElig:AElig,aelig:aelig,Agrave:Agrave,agrave:agrave,amp:amp$1,AMP:AMP,Aring:Aring,aring:aring,Atilde:Atilde,atilde:atilde,Auml:Auml,auml:auml,brvbar:brvbar,Ccedil:Ccedil,ccedil:ccedil,cedil:cedil,cent:cent,copy:copy,COPY:COPY,curren:curren,deg:deg,divide:divide,Eacute:Eacute,eacute:eacute,Ecirc:Ecirc,ecirc:ecirc,Egrave:Egrave,egrave:egrave,ETH:ETH,eth:eth,Euml:Euml,euml:euml,frac12:frac12,frac14:frac14,frac34:frac34,gt:gt$1,GT:GT,Iacute:Iacute,iacute:iacute,Icirc:Icirc,icirc:icirc,iexcl:iexcl,Igrave:Igrave,igrave:igrave,iquest:iquest,Iuml:Iuml,iuml:iuml,laquo:laquo,lt:lt$1,LT:LT,macr:macr,micro:micro,middot:middot,nbsp:nbsp,not:not,Ntilde:Ntilde,ntilde:ntilde,Oacute:Oacute,oacute:oacute,Ocirc:Ocirc,ocirc:ocirc,Ograve:Ograve,ograve:ograve,ordf:ordf,ordm:ordm,Oslash:Oslash,oslash:oslash,Otilde:Otilde,otilde:otilde,Ouml:Ouml,ouml:ouml,para:para,plusmn:plusmn,pound:pound,quot:quot$1,QUOT:QUOT,raquo:raquo,reg:reg,REG:REG,sect:sect,shy:shy,sup1:sup1,sup2:sup2,sup3:sup3,szlig:szlig,THORN:THORN,thorn:thorn,times:times,Uacute:Uacute,uacute:uacute,Ucirc:Ucirc,ucirc:ucirc,Ugrave:Ugrave,ugrave:ugrave,uml:uml,Uuml:Uuml,uuml:uuml,Yacute:Yacute,yacute:yacute,yen:yen,yuml:yuml};

	var amp="&";var apos="'";var gt=">";var lt="<";var quot="\"";var require$$0 = {amp:amp,apos:apos,gt:gt,lt:lt,quot:quot};

	var __importDefault$5 = (commonjsGlobal && commonjsGlobal.__importDefault) || function (mod) {
	    return (mod && mod.__esModule) ? mod : { "default": mod };
	};
	Object.defineProperty(Tokenizer$1, "__esModule", { value: true });
	var decode_codepoint_1$1 = __importDefault$5(decode_codepoint);
	var entities_json_1$2 = __importDefault$5(require$$1$1);
	var legacy_json_1$1 = __importDefault$5(require$$1);
	var xml_json_1$2 = __importDefault$5(require$$0);
	function whitespace(c) {
	    return c === " " || c === "\n" || c === "\t" || c === "\f" || c === "\r";
	}
	function isASCIIAlpha(c) {
	    return (c >= "a" && c <= "z") || (c >= "A" && c <= "Z");
	}
	function ifElseState(upper, SUCCESS, FAILURE) {
	    var lower = upper.toLowerCase();
	    if (upper === lower) {
	        return function (t, c) {
	            if (c === lower) {
	                t._state = SUCCESS;
	            }
	            else {
	                t._state = FAILURE;
	                t._index--;
	            }
	        };
	    }
	    return function (t, c) {
	        if (c === lower || c === upper) {
	            t._state = SUCCESS;
	        }
	        else {
	            t._state = FAILURE;
	            t._index--;
	        }
	    };
	}
	function consumeSpecialNameChar(upper, NEXT_STATE) {
	    var lower = upper.toLowerCase();
	    return function (t, c) {
	        if (c === lower || c === upper) {
	            t._state = NEXT_STATE;
	        }
	        else {
	            t._state = 3 /* InTagName */;
	            t._index--; // Consume the token again
	        }
	    };
	}
	var stateBeforeCdata1 = ifElseState("C", 24 /* BeforeCdata2 */, 16 /* InDeclaration */);
	var stateBeforeCdata2 = ifElseState("D", 25 /* BeforeCdata3 */, 16 /* InDeclaration */);
	var stateBeforeCdata3 = ifElseState("A", 26 /* BeforeCdata4 */, 16 /* InDeclaration */);
	var stateBeforeCdata4 = ifElseState("T", 27 /* BeforeCdata5 */, 16 /* InDeclaration */);
	var stateBeforeCdata5 = ifElseState("A", 28 /* BeforeCdata6 */, 16 /* InDeclaration */);
	var stateBeforeScript1 = consumeSpecialNameChar("R", 35 /* BeforeScript2 */);
	var stateBeforeScript2 = consumeSpecialNameChar("I", 36 /* BeforeScript3 */);
	var stateBeforeScript3 = consumeSpecialNameChar("P", 37 /* BeforeScript4 */);
	var stateBeforeScript4 = consumeSpecialNameChar("T", 38 /* BeforeScript5 */);
	var stateAfterScript1 = ifElseState("R", 40 /* AfterScript2 */, 1 /* Text */);
	var stateAfterScript2 = ifElseState("I", 41 /* AfterScript3 */, 1 /* Text */);
	var stateAfterScript3 = ifElseState("P", 42 /* AfterScript4 */, 1 /* Text */);
	var stateAfterScript4 = ifElseState("T", 43 /* AfterScript5 */, 1 /* Text */);
	var stateBeforeStyle1 = consumeSpecialNameChar("Y", 45 /* BeforeStyle2 */);
	var stateBeforeStyle2 = consumeSpecialNameChar("L", 46 /* BeforeStyle3 */);
	var stateBeforeStyle3 = consumeSpecialNameChar("E", 47 /* BeforeStyle4 */);
	var stateAfterStyle1 = ifElseState("Y", 49 /* AfterStyle2 */, 1 /* Text */);
	var stateAfterStyle2 = ifElseState("L", 50 /* AfterStyle3 */, 1 /* Text */);
	var stateAfterStyle3 = ifElseState("E", 51 /* AfterStyle4 */, 1 /* Text */);
	var stateBeforeSpecialT = consumeSpecialNameChar("I", 54 /* BeforeTitle1 */);
	var stateBeforeTitle1 = consumeSpecialNameChar("T", 55 /* BeforeTitle2 */);
	var stateBeforeTitle2 = consumeSpecialNameChar("L", 56 /* BeforeTitle3 */);
	var stateBeforeTitle3 = consumeSpecialNameChar("E", 57 /* BeforeTitle4 */);
	var stateAfterSpecialTEnd = ifElseState("I", 58 /* AfterTitle1 */, 1 /* Text */);
	var stateAfterTitle1 = ifElseState("T", 59 /* AfterTitle2 */, 1 /* Text */);
	var stateAfterTitle2 = ifElseState("L", 60 /* AfterTitle3 */, 1 /* Text */);
	var stateAfterTitle3 = ifElseState("E", 61 /* AfterTitle4 */, 1 /* Text */);
	var stateBeforeEntity = ifElseState("#", 63 /* BeforeNumericEntity */, 64 /* InNamedEntity */);
	var stateBeforeNumericEntity = ifElseState("X", 66 /* InHexEntity */, 65 /* InNumericEntity */);
	var Tokenizer = /** @class */ (function () {
	    function Tokenizer(options, cbs) {
	        var _a;
	        /** The current state the tokenizer is in. */
	        this._state = 1 /* Text */;
	        /** The read buffer. */
	        this.buffer = "";
	        /** The beginning of the section that is currently being read. */
	        this.sectionStart = 0;
	        /** The index within the buffer that we are currently looking at. */
	        this._index = 0;
	        /**
	         * Data that has already been processed will be removed from the buffer occasionally.
	         * `_bufferOffset` keeps track of how many characters have been removed, to make sure position information is accurate.
	         */
	        this.bufferOffset = 0;
	        /** Some behavior, eg. when decoding entities, is done while we are in another state. This keeps track of the other state type. */
	        this.baseState = 1 /* Text */;
	        /** For special parsing behavior inside of script and style tags. */
	        this.special = 1 /* None */;
	        /** Indicates whether the tokenizer has been paused. */
	        this.running = true;
	        /** Indicates whether the tokenizer has finished running / `.end` has been called. */
	        this.ended = false;
	        this.cbs = cbs;
	        this.xmlMode = !!(options === null || options === void 0 ? void 0 : options.xmlMode);
	        this.decodeEntities = (_a = options === null || options === void 0 ? void 0 : options.decodeEntities) !== null && _a !== void 0 ? _a : true;
	    }
	    Tokenizer.prototype.reset = function () {
	        this._state = 1 /* Text */;
	        this.buffer = "";
	        this.sectionStart = 0;
	        this._index = 0;
	        this.bufferOffset = 0;
	        this.baseState = 1 /* Text */;
	        this.special = 1 /* None */;
	        this.running = true;
	        this.ended = false;
	    };
	    Tokenizer.prototype.write = function (chunk) {
	        if (this.ended)
	            this.cbs.onerror(Error(".write() after done!"));
	        this.buffer += chunk;
	        this.parse();
	    };
	    Tokenizer.prototype.end = function (chunk) {
	        if (this.ended)
	            this.cbs.onerror(Error(".end() after done!"));
	        if (chunk)
	            this.write(chunk);
	        this.ended = true;
	        if (this.running)
	            this.finish();
	    };
	    Tokenizer.prototype.pause = function () {
	        this.running = false;
	    };
	    Tokenizer.prototype.resume = function () {
	        this.running = true;
	        if (this._index < this.buffer.length) {
	            this.parse();
	        }
	        if (this.ended) {
	            this.finish();
	        }
	    };
	    /**
	     * The current index within all of the written data.
	     */
	    Tokenizer.prototype.getAbsoluteIndex = function () {
	        return this.bufferOffset + this._index;
	    };
	    Tokenizer.prototype.stateText = function (c) {
	        if (c === "<") {
	            if (this._index > this.sectionStart) {
	                this.cbs.ontext(this.getSection());
	            }
	            this._state = 2 /* BeforeTagName */;
	            this.sectionStart = this._index;
	        }
	        else if (this.decodeEntities &&
	            c === "&" &&
	            (this.special === 1 /* None */ || this.special === 4 /* Title */)) {
	            if (this._index > this.sectionStart) {
	                this.cbs.ontext(this.getSection());
	            }
	            this.baseState = 1 /* Text */;
	            this._state = 62 /* BeforeEntity */;
	            this.sectionStart = this._index;
	        }
	    };
	    /**
	     * HTML only allows ASCII alpha characters (a-z and A-Z) at the beginning of a tag name.
	     *
	     * XML allows a lot more characters here (@see https://www.w3.org/TR/REC-xml/#NT-NameStartChar).
	     * We allow anything that wouldn't end the tag.
	     */
	    Tokenizer.prototype.isTagStartChar = function (c) {
	        return (isASCIIAlpha(c) ||
	            (this.xmlMode && !whitespace(c) && c !== "/" && c !== ">"));
	    };
	    Tokenizer.prototype.stateBeforeTagName = function (c) {
	        if (c === "/") {
	            this._state = 5 /* BeforeClosingTagName */;
	        }
	        else if (c === "<") {
	            this.cbs.ontext(this.getSection());
	            this.sectionStart = this._index;
	        }
	        else if (c === ">" ||
	            this.special !== 1 /* None */ ||
	            whitespace(c)) {
	            this._state = 1 /* Text */;
	        }
	        else if (c === "!") {
	            this._state = 15 /* BeforeDeclaration */;
	            this.sectionStart = this._index + 1;
	        }
	        else if (c === "?") {
	            this._state = 17 /* InProcessingInstruction */;
	            this.sectionStart = this._index + 1;
	        }
	        else if (!this.isTagStartChar(c)) {
	            this._state = 1 /* Text */;
	        }
	        else {
	            this._state =
	                !this.xmlMode && (c === "s" || c === "S")
	                    ? 32 /* BeforeSpecialS */
	                    : !this.xmlMode && (c === "t" || c === "T")
	                        ? 52 /* BeforeSpecialT */
	                        : 3 /* InTagName */;
	            this.sectionStart = this._index;
	        }
	    };
	    Tokenizer.prototype.stateInTagName = function (c) {
	        if (c === "/" || c === ">" || whitespace(c)) {
	            this.emitToken("onopentagname");
	            this._state = 8 /* BeforeAttributeName */;
	            this._index--;
	        }
	    };
	    Tokenizer.prototype.stateBeforeClosingTagName = function (c) {
	        if (whitespace(c)) ;
	        else if (c === ">") {
	            this._state = 1 /* Text */;
	        }
	        else if (this.special !== 1 /* None */) {
	            if (this.special !== 4 /* Title */ && (c === "s" || c === "S")) {
	                this._state = 33 /* BeforeSpecialSEnd */;
	            }
	            else if (this.special === 4 /* Title */ &&
	                (c === "t" || c === "T")) {
	                this._state = 53 /* BeforeSpecialTEnd */;
	            }
	            else {
	                this._state = 1 /* Text */;
	                this._index--;
	            }
	        }
	        else if (!this.isTagStartChar(c)) {
	            this._state = 20 /* InSpecialComment */;
	            this.sectionStart = this._index;
	        }
	        else {
	            this._state = 6 /* InClosingTagName */;
	            this.sectionStart = this._index;
	        }
	    };
	    Tokenizer.prototype.stateInClosingTagName = function (c) {
	        if (c === ">" || whitespace(c)) {
	            this.emitToken("onclosetag");
	            this._state = 7 /* AfterClosingTagName */;
	            this._index--;
	        }
	    };
	    Tokenizer.prototype.stateAfterClosingTagName = function (c) {
	        // Skip everything until ">"
	        if (c === ">") {
	            this._state = 1 /* Text */;
	            this.sectionStart = this._index + 1;
	        }
	    };
	    Tokenizer.prototype.stateBeforeAttributeName = function (c) {
	        if (c === ">") {
	            this.cbs.onopentagend();
	            this._state = 1 /* Text */;
	            this.sectionStart = this._index + 1;
	        }
	        else if (c === "/") {
	            this._state = 4 /* InSelfClosingTag */;
	        }
	        else if (!whitespace(c)) {
	            this._state = 9 /* InAttributeName */;
	            this.sectionStart = this._index;
	        }
	    };
	    Tokenizer.prototype.stateInSelfClosingTag = function (c) {
	        if (c === ">") {
	            this.cbs.onselfclosingtag();
	            this._state = 1 /* Text */;
	            this.sectionStart = this._index + 1;
	            this.special = 1 /* None */; // Reset special state, in case of self-closing special tags
	        }
	        else if (!whitespace(c)) {
	            this._state = 8 /* BeforeAttributeName */;
	            this._index--;
	        }
	    };
	    Tokenizer.prototype.stateInAttributeName = function (c) {
	        if (c === "=" || c === "/" || c === ">" || whitespace(c)) {
	            this.cbs.onattribname(this.getSection());
	            this.sectionStart = -1;
	            this._state = 10 /* AfterAttributeName */;
	            this._index--;
	        }
	    };
	    Tokenizer.prototype.stateAfterAttributeName = function (c) {
	        if (c === "=") {
	            this._state = 11 /* BeforeAttributeValue */;
	        }
	        else if (c === "/" || c === ">") {
	            this.cbs.onattribend(undefined);
	            this._state = 8 /* BeforeAttributeName */;
	            this._index--;
	        }
	        else if (!whitespace(c)) {
	            this.cbs.onattribend(undefined);
	            this._state = 9 /* InAttributeName */;
	            this.sectionStart = this._index;
	        }
	    };
	    Tokenizer.prototype.stateBeforeAttributeValue = function (c) {
	        if (c === '"') {
	            this._state = 12 /* InAttributeValueDq */;
	            this.sectionStart = this._index + 1;
	        }
	        else if (c === "'") {
	            this._state = 13 /* InAttributeValueSq */;
	            this.sectionStart = this._index + 1;
	        }
	        else if (!whitespace(c)) {
	            this._state = 14 /* InAttributeValueNq */;
	            this.sectionStart = this._index;
	            this._index--; // Reconsume token
	        }
	    };
	    Tokenizer.prototype.handleInAttributeValue = function (c, quote) {
	        if (c === quote) {
	            this.emitToken("onattribdata");
	            this.cbs.onattribend(quote);
	            this._state = 8 /* BeforeAttributeName */;
	        }
	        else if (this.decodeEntities && c === "&") {
	            this.emitToken("onattribdata");
	            this.baseState = this._state;
	            this._state = 62 /* BeforeEntity */;
	            this.sectionStart = this._index;
	        }
	    };
	    Tokenizer.prototype.stateInAttributeValueDoubleQuotes = function (c) {
	        this.handleInAttributeValue(c, '"');
	    };
	    Tokenizer.prototype.stateInAttributeValueSingleQuotes = function (c) {
	        this.handleInAttributeValue(c, "'");
	    };
	    Tokenizer.prototype.stateInAttributeValueNoQuotes = function (c) {
	        if (whitespace(c) || c === ">") {
	            this.emitToken("onattribdata");
	            this.cbs.onattribend(null);
	            this._state = 8 /* BeforeAttributeName */;
	            this._index--;
	        }
	        else if (this.decodeEntities && c === "&") {
	            this.emitToken("onattribdata");
	            this.baseState = this._state;
	            this._state = 62 /* BeforeEntity */;
	            this.sectionStart = this._index;
	        }
	    };
	    Tokenizer.prototype.stateBeforeDeclaration = function (c) {
	        this._state =
	            c === "["
	                ? 23 /* BeforeCdata1 */
	                : c === "-"
	                    ? 18 /* BeforeComment */
	                    : 16 /* InDeclaration */;
	    };
	    Tokenizer.prototype.stateInDeclaration = function (c) {
	        if (c === ">") {
	            this.cbs.ondeclaration(this.getSection());
	            this._state = 1 /* Text */;
	            this.sectionStart = this._index + 1;
	        }
	    };
	    Tokenizer.prototype.stateInProcessingInstruction = function (c) {
	        if (c === ">") {
	            this.cbs.onprocessinginstruction(this.getSection());
	            this._state = 1 /* Text */;
	            this.sectionStart = this._index + 1;
	        }
	    };
	    Tokenizer.prototype.stateBeforeComment = function (c) {
	        if (c === "-") {
	            this._state = 19 /* InComment */;
	            this.sectionStart = this._index + 1;
	        }
	        else {
	            this._state = 16 /* InDeclaration */;
	        }
	    };
	    Tokenizer.prototype.stateInComment = function (c) {
	        if (c === "-")
	            this._state = 21 /* AfterComment1 */;
	    };
	    Tokenizer.prototype.stateInSpecialComment = function (c) {
	        if (c === ">") {
	            this.cbs.oncomment(this.buffer.substring(this.sectionStart, this._index));
	            this._state = 1 /* Text */;
	            this.sectionStart = this._index + 1;
	        }
	    };
	    Tokenizer.prototype.stateAfterComment1 = function (c) {
	        if (c === "-") {
	            this._state = 22 /* AfterComment2 */;
	        }
	        else {
	            this._state = 19 /* InComment */;
	        }
	    };
	    Tokenizer.prototype.stateAfterComment2 = function (c) {
	        if (c === ">") {
	            // Remove 2 trailing chars
	            this.cbs.oncomment(this.buffer.substring(this.sectionStart, this._index - 2));
	            this._state = 1 /* Text */;
	            this.sectionStart = this._index + 1;
	        }
	        else if (c !== "-") {
	            this._state = 19 /* InComment */;
	        }
	        // Else: stay in AFTER_COMMENT_2 (`--->`)
	    };
	    Tokenizer.prototype.stateBeforeCdata6 = function (c) {
	        if (c === "[") {
	            this._state = 29 /* InCdata */;
	            this.sectionStart = this._index + 1;
	        }
	        else {
	            this._state = 16 /* InDeclaration */;
	            this._index--;
	        }
	    };
	    Tokenizer.prototype.stateInCdata = function (c) {
	        if (c === "]")
	            this._state = 30 /* AfterCdata1 */;
	    };
	    Tokenizer.prototype.stateAfterCdata1 = function (c) {
	        if (c === "]")
	            this._state = 31 /* AfterCdata2 */;
	        else
	            this._state = 29 /* InCdata */;
	    };
	    Tokenizer.prototype.stateAfterCdata2 = function (c) {
	        if (c === ">") {
	            // Remove 2 trailing chars
	            this.cbs.oncdata(this.buffer.substring(this.sectionStart, this._index - 2));
	            this._state = 1 /* Text */;
	            this.sectionStart = this._index + 1;
	        }
	        else if (c !== "]") {
	            this._state = 29 /* InCdata */;
	        }
	        // Else: stay in AFTER_CDATA_2 (`]]]>`)
	    };
	    Tokenizer.prototype.stateBeforeSpecialS = function (c) {
	        if (c === "c" || c === "C") {
	            this._state = 34 /* BeforeScript1 */;
	        }
	        else if (c === "t" || c === "T") {
	            this._state = 44 /* BeforeStyle1 */;
	        }
	        else {
	            this._state = 3 /* InTagName */;
	            this._index--; // Consume the token again
	        }
	    };
	    Tokenizer.prototype.stateBeforeSpecialSEnd = function (c) {
	        if (this.special === 2 /* Script */ && (c === "c" || c === "C")) {
	            this._state = 39 /* AfterScript1 */;
	        }
	        else if (this.special === 3 /* Style */ && (c === "t" || c === "T")) {
	            this._state = 48 /* AfterStyle1 */;
	        }
	        else
	            this._state = 1 /* Text */;
	    };
	    Tokenizer.prototype.stateBeforeSpecialLast = function (c, special) {
	        if (c === "/" || c === ">" || whitespace(c)) {
	            this.special = special;
	        }
	        this._state = 3 /* InTagName */;
	        this._index--; // Consume the token again
	    };
	    Tokenizer.prototype.stateAfterSpecialLast = function (c, sectionStartOffset) {
	        if (c === ">" || whitespace(c)) {
	            this.special = 1 /* None */;
	            this._state = 6 /* InClosingTagName */;
	            this.sectionStart = this._index - sectionStartOffset;
	            this._index--; // Reconsume the token
	        }
	        else
	            this._state = 1 /* Text */;
	    };
	    // For entities terminated with a semicolon
	    Tokenizer.prototype.parseFixedEntity = function (map) {
	        if (map === void 0) { map = this.xmlMode ? xml_json_1$2.default : entities_json_1$2.default; }
	        // Offset = 1
	        if (this.sectionStart + 1 < this._index) {
	            var entity = this.buffer.substring(this.sectionStart + 1, this._index);
	            if (Object.prototype.hasOwnProperty.call(map, entity)) {
	                this.emitPartial(map[entity]);
	                this.sectionStart = this._index + 1;
	            }
	        }
	    };
	    // Parses legacy entities (without trailing semicolon)
	    Tokenizer.prototype.parseLegacyEntity = function () {
	        var start = this.sectionStart + 1;
	        // The max length of legacy entities is 6
	        var limit = Math.min(this._index - start, 6);
	        while (limit >= 2) {
	            // The min length of legacy entities is 2
	            var entity = this.buffer.substr(start, limit);
	            if (Object.prototype.hasOwnProperty.call(legacy_json_1$1.default, entity)) {
	                this.emitPartial(legacy_json_1$1.default[entity]);
	                this.sectionStart += limit + 1;
	                return;
	            }
	            limit--;
	        }
	    };
	    Tokenizer.prototype.stateInNamedEntity = function (c) {
	        if (c === ";") {
	            this.parseFixedEntity();
	            // Retry as legacy entity if entity wasn't parsed
	            if (this.baseState === 1 /* Text */ &&
	                this.sectionStart + 1 < this._index &&
	                !this.xmlMode) {
	                this.parseLegacyEntity();
	            }
	            this._state = this.baseState;
	        }
	        else if ((c < "0" || c > "9") && !isASCIIAlpha(c)) {
	            if (this.xmlMode || this.sectionStart + 1 === this._index) ;
	            else if (this.baseState !== 1 /* Text */) {
	                if (c !== "=") {
	                    // Parse as legacy entity, without allowing additional characters.
	                    this.parseFixedEntity(legacy_json_1$1.default);
	                }
	            }
	            else {
	                this.parseLegacyEntity();
	            }
	            this._state = this.baseState;
	            this._index--;
	        }
	    };
	    Tokenizer.prototype.decodeNumericEntity = function (offset, base, strict) {
	        var sectionStart = this.sectionStart + offset;
	        if (sectionStart !== this._index) {
	            // Parse entity
	            var entity = this.buffer.substring(sectionStart, this._index);
	            var parsed = parseInt(entity, base);
	            this.emitPartial(decode_codepoint_1$1.default(parsed));
	            this.sectionStart = strict ? this._index + 1 : this._index;
	        }
	        this._state = this.baseState;
	    };
	    Tokenizer.prototype.stateInNumericEntity = function (c) {
	        if (c === ";") {
	            this.decodeNumericEntity(2, 10, true);
	        }
	        else if (c < "0" || c > "9") {
	            if (!this.xmlMode) {
	                this.decodeNumericEntity(2, 10, false);
	            }
	            else {
	                this._state = this.baseState;
	            }
	            this._index--;
	        }
	    };
	    Tokenizer.prototype.stateInHexEntity = function (c) {
	        if (c === ";") {
	            this.decodeNumericEntity(3, 16, true);
	        }
	        else if ((c < "a" || c > "f") &&
	            (c < "A" || c > "F") &&
	            (c < "0" || c > "9")) {
	            if (!this.xmlMode) {
	                this.decodeNumericEntity(3, 16, false);
	            }
	            else {
	                this._state = this.baseState;
	            }
	            this._index--;
	        }
	    };
	    Tokenizer.prototype.cleanup = function () {
	        if (this.sectionStart < 0) {
	            this.buffer = "";
	            this.bufferOffset += this._index;
	            this._index = 0;
	        }
	        else if (this.running) {
	            if (this._state === 1 /* Text */) {
	                if (this.sectionStart !== this._index) {
	                    this.cbs.ontext(this.buffer.substr(this.sectionStart));
	                }
	                this.buffer = "";
	                this.bufferOffset += this._index;
	                this._index = 0;
	            }
	            else if (this.sectionStart === this._index) {
	                // The section just started
	                this.buffer = "";
	                this.bufferOffset += this._index;
	                this._index = 0;
	            }
	            else {
	                // Remove everything unnecessary
	                this.buffer = this.buffer.substr(this.sectionStart);
	                this._index -= this.sectionStart;
	                this.bufferOffset += this.sectionStart;
	            }
	            this.sectionStart = 0;
	        }
	    };
	    /**
	     * Iterates through the buffer, calling the function corresponding to the current state.
	     *
	     * States that are more likely to be hit are higher up, as a performance improvement.
	     */
	    Tokenizer.prototype.parse = function () {
	        while (this._index < this.buffer.length && this.running) {
	            var c = this.buffer.charAt(this._index);
	            if (this._state === 1 /* Text */) {
	                this.stateText(c);
	            }
	            else if (this._state === 12 /* InAttributeValueDq */) {
	                this.stateInAttributeValueDoubleQuotes(c);
	            }
	            else if (this._state === 9 /* InAttributeName */) {
	                this.stateInAttributeName(c);
	            }
	            else if (this._state === 19 /* InComment */) {
	                this.stateInComment(c);
	            }
	            else if (this._state === 20 /* InSpecialComment */) {
	                this.stateInSpecialComment(c);
	            }
	            else if (this._state === 8 /* BeforeAttributeName */) {
	                this.stateBeforeAttributeName(c);
	            }
	            else if (this._state === 3 /* InTagName */) {
	                this.stateInTagName(c);
	            }
	            else if (this._state === 6 /* InClosingTagName */) {
	                this.stateInClosingTagName(c);
	            }
	            else if (this._state === 2 /* BeforeTagName */) {
	                this.stateBeforeTagName(c);
	            }
	            else if (this._state === 10 /* AfterAttributeName */) {
	                this.stateAfterAttributeName(c);
	            }
	            else if (this._state === 13 /* InAttributeValueSq */) {
	                this.stateInAttributeValueSingleQuotes(c);
	            }
	            else if (this._state === 11 /* BeforeAttributeValue */) {
	                this.stateBeforeAttributeValue(c);
	            }
	            else if (this._state === 5 /* BeforeClosingTagName */) {
	                this.stateBeforeClosingTagName(c);
	            }
	            else if (this._state === 7 /* AfterClosingTagName */) {
	                this.stateAfterClosingTagName(c);
	            }
	            else if (this._state === 32 /* BeforeSpecialS */) {
	                this.stateBeforeSpecialS(c);
	            }
	            else if (this._state === 21 /* AfterComment1 */) {
	                this.stateAfterComment1(c);
	            }
	            else if (this._state === 14 /* InAttributeValueNq */) {
	                this.stateInAttributeValueNoQuotes(c);
	            }
	            else if (this._state === 4 /* InSelfClosingTag */) {
	                this.stateInSelfClosingTag(c);
	            }
	            else if (this._state === 16 /* InDeclaration */) {
	                this.stateInDeclaration(c);
	            }
	            else if (this._state === 15 /* BeforeDeclaration */) {
	                this.stateBeforeDeclaration(c);
	            }
	            else if (this._state === 22 /* AfterComment2 */) {
	                this.stateAfterComment2(c);
	            }
	            else if (this._state === 18 /* BeforeComment */) {
	                this.stateBeforeComment(c);
	            }
	            else if (this._state === 33 /* BeforeSpecialSEnd */) {
	                this.stateBeforeSpecialSEnd(c);
	            }
	            else if (this._state === 53 /* BeforeSpecialTEnd */) {
	                stateAfterSpecialTEnd(this, c);
	            }
	            else if (this._state === 39 /* AfterScript1 */) {
	                stateAfterScript1(this, c);
	            }
	            else if (this._state === 40 /* AfterScript2 */) {
	                stateAfterScript2(this, c);
	            }
	            else if (this._state === 41 /* AfterScript3 */) {
	                stateAfterScript3(this, c);
	            }
	            else if (this._state === 34 /* BeforeScript1 */) {
	                stateBeforeScript1(this, c);
	            }
	            else if (this._state === 35 /* BeforeScript2 */) {
	                stateBeforeScript2(this, c);
	            }
	            else if (this._state === 36 /* BeforeScript3 */) {
	                stateBeforeScript3(this, c);
	            }
	            else if (this._state === 37 /* BeforeScript4 */) {
	                stateBeforeScript4(this, c);
	            }
	            else if (this._state === 38 /* BeforeScript5 */) {
	                this.stateBeforeSpecialLast(c, 2 /* Script */);
	            }
	            else if (this._state === 42 /* AfterScript4 */) {
	                stateAfterScript4(this, c);
	            }
	            else if (this._state === 43 /* AfterScript5 */) {
	                this.stateAfterSpecialLast(c, 6);
	            }
	            else if (this._state === 44 /* BeforeStyle1 */) {
	                stateBeforeStyle1(this, c);
	            }
	            else if (this._state === 29 /* InCdata */) {
	                this.stateInCdata(c);
	            }
	            else if (this._state === 45 /* BeforeStyle2 */) {
	                stateBeforeStyle2(this, c);
	            }
	            else if (this._state === 46 /* BeforeStyle3 */) {
	                stateBeforeStyle3(this, c);
	            }
	            else if (this._state === 47 /* BeforeStyle4 */) {
	                this.stateBeforeSpecialLast(c, 3 /* Style */);
	            }
	            else if (this._state === 48 /* AfterStyle1 */) {
	                stateAfterStyle1(this, c);
	            }
	            else if (this._state === 49 /* AfterStyle2 */) {
	                stateAfterStyle2(this, c);
	            }
	            else if (this._state === 50 /* AfterStyle3 */) {
	                stateAfterStyle3(this, c);
	            }
	            else if (this._state === 51 /* AfterStyle4 */) {
	                this.stateAfterSpecialLast(c, 5);
	            }
	            else if (this._state === 52 /* BeforeSpecialT */) {
	                stateBeforeSpecialT(this, c);
	            }
	            else if (this._state === 54 /* BeforeTitle1 */) {
	                stateBeforeTitle1(this, c);
	            }
	            else if (this._state === 55 /* BeforeTitle2 */) {
	                stateBeforeTitle2(this, c);
	            }
	            else if (this._state === 56 /* BeforeTitle3 */) {
	                stateBeforeTitle3(this, c);
	            }
	            else if (this._state === 57 /* BeforeTitle4 */) {
	                this.stateBeforeSpecialLast(c, 4 /* Title */);
	            }
	            else if (this._state === 58 /* AfterTitle1 */) {
	                stateAfterTitle1(this, c);
	            }
	            else if (this._state === 59 /* AfterTitle2 */) {
	                stateAfterTitle2(this, c);
	            }
	            else if (this._state === 60 /* AfterTitle3 */) {
	                stateAfterTitle3(this, c);
	            }
	            else if (this._state === 61 /* AfterTitle4 */) {
	                this.stateAfterSpecialLast(c, 5);
	            }
	            else if (this._state === 17 /* InProcessingInstruction */) {
	                this.stateInProcessingInstruction(c);
	            }
	            else if (this._state === 64 /* InNamedEntity */) {
	                this.stateInNamedEntity(c);
	            }
	            else if (this._state === 23 /* BeforeCdata1 */) {
	                stateBeforeCdata1(this, c);
	            }
	            else if (this._state === 62 /* BeforeEntity */) {
	                stateBeforeEntity(this, c);
	            }
	            else if (this._state === 24 /* BeforeCdata2 */) {
	                stateBeforeCdata2(this, c);
	            }
	            else if (this._state === 25 /* BeforeCdata3 */) {
	                stateBeforeCdata3(this, c);
	            }
	            else if (this._state === 30 /* AfterCdata1 */) {
	                this.stateAfterCdata1(c);
	            }
	            else if (this._state === 31 /* AfterCdata2 */) {
	                this.stateAfterCdata2(c);
	            }
	            else if (this._state === 26 /* BeforeCdata4 */) {
	                stateBeforeCdata4(this, c);
	            }
	            else if (this._state === 27 /* BeforeCdata5 */) {
	                stateBeforeCdata5(this, c);
	            }
	            else if (this._state === 28 /* BeforeCdata6 */) {
	                this.stateBeforeCdata6(c);
	            }
	            else if (this._state === 66 /* InHexEntity */) {
	                this.stateInHexEntity(c);
	            }
	            else if (this._state === 65 /* InNumericEntity */) {
	                this.stateInNumericEntity(c);
	                // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
	            }
	            else if (this._state === 63 /* BeforeNumericEntity */) {
	                stateBeforeNumericEntity(this, c);
	            }
	            else {
	                this.cbs.onerror(Error("unknown _state"), this._state);
	            }
	            this._index++;
	        }
	        this.cleanup();
	    };
	    Tokenizer.prototype.finish = function () {
	        // If there is remaining data, emit it in a reasonable way
	        if (this.sectionStart < this._index) {
	            this.handleTrailingData();
	        }
	        this.cbs.onend();
	    };
	    Tokenizer.prototype.handleTrailingData = function () {
	        var data = this.buffer.substr(this.sectionStart);
	        if (this._state === 29 /* InCdata */ ||
	            this._state === 30 /* AfterCdata1 */ ||
	            this._state === 31 /* AfterCdata2 */) {
	            this.cbs.oncdata(data);
	        }
	        else if (this._state === 19 /* InComment */ ||
	            this._state === 21 /* AfterComment1 */ ||
	            this._state === 22 /* AfterComment2 */) {
	            this.cbs.oncomment(data);
	        }
	        else if (this._state === 64 /* InNamedEntity */ && !this.xmlMode) {
	            this.parseLegacyEntity();
	            if (this.sectionStart < this._index) {
	                this._state = this.baseState;
	                this.handleTrailingData();
	            }
	        }
	        else if (this._state === 65 /* InNumericEntity */ && !this.xmlMode) {
	            this.decodeNumericEntity(2, 10, false);
	            if (this.sectionStart < this._index) {
	                this._state = this.baseState;
	                this.handleTrailingData();
	            }
	        }
	        else if (this._state === 66 /* InHexEntity */ && !this.xmlMode) {
	            this.decodeNumericEntity(3, 16, false);
	            if (this.sectionStart < this._index) {
	                this._state = this.baseState;
	                this.handleTrailingData();
	            }
	        }
	        else if (this._state !== 3 /* InTagName */ &&
	            this._state !== 8 /* BeforeAttributeName */ &&
	            this._state !== 11 /* BeforeAttributeValue */ &&
	            this._state !== 10 /* AfterAttributeName */ &&
	            this._state !== 9 /* InAttributeName */ &&
	            this._state !== 13 /* InAttributeValueSq */ &&
	            this._state !== 12 /* InAttributeValueDq */ &&
	            this._state !== 14 /* InAttributeValueNq */ &&
	            this._state !== 6 /* InClosingTagName */) {
	            this.cbs.ontext(data);
	        }
	        /*
	         * Else, ignore remaining data
	         * TODO add a way to remove current tag
	         */
	    };
	    Tokenizer.prototype.getSection = function () {
	        return this.buffer.substring(this.sectionStart, this._index);
	    };
	    Tokenizer.prototype.emitToken = function (name) {
	        this.cbs[name](this.getSection());
	        this.sectionStart = -1;
	    };
	    Tokenizer.prototype.emitPartial = function (value) {
	        if (this.baseState !== 1 /* Text */) {
	            this.cbs.onattribdata(value); // TODO implement the new event
	        }
	        else {
	            this.cbs.ontext(value);
	        }
	    };
	    return Tokenizer;
	}());
	Tokenizer$1.default = Tokenizer;

	var __importDefault$4 = (commonjsGlobal && commonjsGlobal.__importDefault) || function (mod) {
	    return (mod && mod.__esModule) ? mod : { "default": mod };
	};
	Object.defineProperty(Parser$3, "__esModule", { value: true });
	Parser$3.Parser = void 0;
	var Tokenizer_1 = __importDefault$4(Tokenizer$1);
	var formTags = new Set([
	    "input",
	    "option",
	    "optgroup",
	    "select",
	    "button",
	    "datalist",
	    "textarea",
	]);
	var pTag = new Set(["p"]);
	var openImpliesClose = {
	    tr: new Set(["tr", "th", "td"]),
	    th: new Set(["th"]),
	    td: new Set(["thead", "th", "td"]),
	    body: new Set(["head", "link", "script"]),
	    li: new Set(["li"]),
	    p: pTag,
	    h1: pTag,
	    h2: pTag,
	    h3: pTag,
	    h4: pTag,
	    h5: pTag,
	    h6: pTag,
	    select: formTags,
	    input: formTags,
	    output: formTags,
	    button: formTags,
	    datalist: formTags,
	    textarea: formTags,
	    option: new Set(["option"]),
	    optgroup: new Set(["optgroup", "option"]),
	    dd: new Set(["dt", "dd"]),
	    dt: new Set(["dt", "dd"]),
	    address: pTag,
	    article: pTag,
	    aside: pTag,
	    blockquote: pTag,
	    details: pTag,
	    div: pTag,
	    dl: pTag,
	    fieldset: pTag,
	    figcaption: pTag,
	    figure: pTag,
	    footer: pTag,
	    form: pTag,
	    header: pTag,
	    hr: pTag,
	    main: pTag,
	    nav: pTag,
	    ol: pTag,
	    pre: pTag,
	    section: pTag,
	    table: pTag,
	    ul: pTag,
	    rt: new Set(["rt", "rp"]),
	    rp: new Set(["rt", "rp"]),
	    tbody: new Set(["thead", "tbody"]),
	    tfoot: new Set(["thead", "tbody"]),
	};
	var voidElements = new Set([
	    "area",
	    "base",
	    "basefont",
	    "br",
	    "col",
	    "command",
	    "embed",
	    "frame",
	    "hr",
	    "img",
	    "input",
	    "isindex",
	    "keygen",
	    "link",
	    "meta",
	    "param",
	    "source",
	    "track",
	    "wbr",
	]);
	var foreignContextElements = new Set(["math", "svg"]);
	var htmlIntegrationElements = new Set([
	    "mi",
	    "mo",
	    "mn",
	    "ms",
	    "mtext",
	    "annotation-xml",
	    "foreignObject",
	    "desc",
	    "title",
	]);
	var reNameEnd = /\s|\//;
	var Parser$2 = /** @class */ (function () {
	    function Parser(cbs, options) {
	        if (options === void 0) { options = {}; }
	        var _a, _b, _c, _d, _e;
	        /** The start index of the last event. */
	        this.startIndex = 0;
	        /** The end index of the last event. */
	        this.endIndex = null;
	        this.tagname = "";
	        this.attribname = "";
	        this.attribvalue = "";
	        this.attribs = null;
	        this.stack = [];
	        this.foreignContext = [];
	        this.options = options;
	        this.cbs = cbs !== null && cbs !== void 0 ? cbs : {};
	        this.lowerCaseTagNames = (_a = options.lowerCaseTags) !== null && _a !== void 0 ? _a : !options.xmlMode;
	        this.lowerCaseAttributeNames =
	            (_b = options.lowerCaseAttributeNames) !== null && _b !== void 0 ? _b : !options.xmlMode;
	        this.tokenizer = new ((_c = options.Tokenizer) !== null && _c !== void 0 ? _c : Tokenizer_1.default)(this.options, this);
	        (_e = (_d = this.cbs).onparserinit) === null || _e === void 0 ? void 0 : _e.call(_d, this);
	    }
	    Parser.prototype.updatePosition = function (initialOffset) {
	        if (this.endIndex === null) {
	            if (this.tokenizer.sectionStart <= initialOffset) {
	                this.startIndex = 0;
	            }
	            else {
	                this.startIndex = this.tokenizer.sectionStart - initialOffset;
	            }
	        }
	        else {
	            this.startIndex = this.endIndex + 1;
	        }
	        this.endIndex = this.tokenizer.getAbsoluteIndex();
	    };
	    // Tokenizer event handlers
	    Parser.prototype.ontext = function (data) {
	        var _a, _b;
	        this.updatePosition(1);
	        this.endIndex--;
	        (_b = (_a = this.cbs).ontext) === null || _b === void 0 ? void 0 : _b.call(_a, data);
	    };
	    Parser.prototype.onopentagname = function (name) {
	        var _a, _b;
	        if (this.lowerCaseTagNames) {
	            name = name.toLowerCase();
	        }
	        this.tagname = name;
	        if (!this.options.xmlMode &&
	            Object.prototype.hasOwnProperty.call(openImpliesClose, name)) {
	            var el = void 0;
	            while (this.stack.length > 0 &&
	                openImpliesClose[name].has((el = this.stack[this.stack.length - 1]))) {
	                this.onclosetag(el);
	            }
	        }
	        if (this.options.xmlMode || !voidElements.has(name)) {
	            this.stack.push(name);
	            if (foreignContextElements.has(name)) {
	                this.foreignContext.push(true);
	            }
	            else if (htmlIntegrationElements.has(name)) {
	                this.foreignContext.push(false);
	            }
	        }
	        (_b = (_a = this.cbs).onopentagname) === null || _b === void 0 ? void 0 : _b.call(_a, name);
	        if (this.cbs.onopentag)
	            this.attribs = {};
	    };
	    Parser.prototype.onopentagend = function () {
	        var _a, _b;
	        this.updatePosition(1);
	        if (this.attribs) {
	            (_b = (_a = this.cbs).onopentag) === null || _b === void 0 ? void 0 : _b.call(_a, this.tagname, this.attribs);
	            this.attribs = null;
	        }
	        if (!this.options.xmlMode &&
	            this.cbs.onclosetag &&
	            voidElements.has(this.tagname)) {
	            this.cbs.onclosetag(this.tagname);
	        }
	        this.tagname = "";
	    };
	    Parser.prototype.onclosetag = function (name) {
	        this.updatePosition(1);
	        if (this.lowerCaseTagNames) {
	            name = name.toLowerCase();
	        }
	        if (foreignContextElements.has(name) ||
	            htmlIntegrationElements.has(name)) {
	            this.foreignContext.pop();
	        }
	        if (this.stack.length &&
	            (this.options.xmlMode || !voidElements.has(name))) {
	            var pos = this.stack.lastIndexOf(name);
	            if (pos !== -1) {
	                if (this.cbs.onclosetag) {
	                    pos = this.stack.length - pos;
	                    while (pos--) {
	                        // We know the stack has sufficient elements.
	                        this.cbs.onclosetag(this.stack.pop());
	                    }
	                }
	                else
	                    this.stack.length = pos;
	            }
	            else if (name === "p" && !this.options.xmlMode) {
	                this.onopentagname(name);
	                this.closeCurrentTag();
	            }
	        }
	        else if (!this.options.xmlMode && (name === "br" || name === "p")) {
	            this.onopentagname(name);
	            this.closeCurrentTag();
	        }
	    };
	    Parser.prototype.onselfclosingtag = function () {
	        if (this.options.xmlMode ||
	            this.options.recognizeSelfClosing ||
	            this.foreignContext[this.foreignContext.length - 1]) {
	            this.closeCurrentTag();
	        }
	        else {
	            this.onopentagend();
	        }
	    };
	    Parser.prototype.closeCurrentTag = function () {
	        var _a, _b;
	        var name = this.tagname;
	        this.onopentagend();
	        /*
	         * Self-closing tags will be on the top of the stack
	         * (cheaper check than in onclosetag)
	         */
	        if (this.stack[this.stack.length - 1] === name) {
	            (_b = (_a = this.cbs).onclosetag) === null || _b === void 0 ? void 0 : _b.call(_a, name);
	            this.stack.pop();
	        }
	    };
	    Parser.prototype.onattribname = function (name) {
	        if (this.lowerCaseAttributeNames) {
	            name = name.toLowerCase();
	        }
	        this.attribname = name;
	    };
	    Parser.prototype.onattribdata = function (value) {
	        this.attribvalue += value;
	    };
	    Parser.prototype.onattribend = function (quote) {
	        var _a, _b;
	        (_b = (_a = this.cbs).onattribute) === null || _b === void 0 ? void 0 : _b.call(_a, this.attribname, this.attribvalue, quote);
	        if (this.attribs &&
	            !Object.prototype.hasOwnProperty.call(this.attribs, this.attribname)) {
	            this.attribs[this.attribname] = this.attribvalue;
	        }
	        this.attribname = "";
	        this.attribvalue = "";
	    };
	    Parser.prototype.getInstructionName = function (value) {
	        var idx = value.search(reNameEnd);
	        var name = idx < 0 ? value : value.substr(0, idx);
	        if (this.lowerCaseTagNames) {
	            name = name.toLowerCase();
	        }
	        return name;
	    };
	    Parser.prototype.ondeclaration = function (value) {
	        if (this.cbs.onprocessinginstruction) {
	            var name_1 = this.getInstructionName(value);
	            this.cbs.onprocessinginstruction("!" + name_1, "!" + value);
	        }
	    };
	    Parser.prototype.onprocessinginstruction = function (value) {
	        if (this.cbs.onprocessinginstruction) {
	            var name_2 = this.getInstructionName(value);
	            this.cbs.onprocessinginstruction("?" + name_2, "?" + value);
	        }
	    };
	    Parser.prototype.oncomment = function (value) {
	        var _a, _b, _c, _d;
	        this.updatePosition(4);
	        (_b = (_a = this.cbs).oncomment) === null || _b === void 0 ? void 0 : _b.call(_a, value);
	        (_d = (_c = this.cbs).oncommentend) === null || _d === void 0 ? void 0 : _d.call(_c);
	    };
	    Parser.prototype.oncdata = function (value) {
	        var _a, _b, _c, _d, _e, _f;
	        this.updatePosition(1);
	        if (this.options.xmlMode || this.options.recognizeCDATA) {
	            (_b = (_a = this.cbs).oncdatastart) === null || _b === void 0 ? void 0 : _b.call(_a);
	            (_d = (_c = this.cbs).ontext) === null || _d === void 0 ? void 0 : _d.call(_c, value);
	            (_f = (_e = this.cbs).oncdataend) === null || _f === void 0 ? void 0 : _f.call(_e);
	        }
	        else {
	            this.oncomment("[CDATA[" + value + "]]");
	        }
	    };
	    Parser.prototype.onerror = function (err) {
	        var _a, _b;
	        (_b = (_a = this.cbs).onerror) === null || _b === void 0 ? void 0 : _b.call(_a, err);
	    };
	    Parser.prototype.onend = function () {
	        var _a, _b;
	        if (this.cbs.onclosetag) {
	            for (var i = this.stack.length; i > 0; this.cbs.onclosetag(this.stack[--i]))
	                ;
	        }
	        (_b = (_a = this.cbs).onend) === null || _b === void 0 ? void 0 : _b.call(_a);
	    };
	    /**
	     * Resets the parser to a blank state, ready to parse a new HTML document
	     */
	    Parser.prototype.reset = function () {
	        var _a, _b, _c, _d;
	        (_b = (_a = this.cbs).onreset) === null || _b === void 0 ? void 0 : _b.call(_a);
	        this.tokenizer.reset();
	        this.tagname = "";
	        this.attribname = "";
	        this.attribs = null;
	        this.stack = [];
	        (_d = (_c = this.cbs).onparserinit) === null || _d === void 0 ? void 0 : _d.call(_c, this);
	    };
	    /**
	     * Resets the parser, then parses a complete document and
	     * pushes it to the handler.
	     *
	     * @param data Document to parse.
	     */
	    Parser.prototype.parseComplete = function (data) {
	        this.reset();
	        this.end(data);
	    };
	    /**
	     * Parses a chunk of data and calls the corresponding callbacks.
	     *
	     * @param chunk Chunk to parse.
	     */
	    Parser.prototype.write = function (chunk) {
	        this.tokenizer.write(chunk);
	    };
	    /**
	     * Parses the end of the buffer and clears the stack, calls onend.
	     *
	     * @param chunk Optional final chunk to parse.
	     */
	    Parser.prototype.end = function (chunk) {
	        this.tokenizer.end(chunk);
	    };
	    /**
	     * Pauses parsing. The parser won't emit events until `resume` is called.
	     */
	    Parser.prototype.pause = function () {
	        this.tokenizer.pause();
	    };
	    /**
	     * Resumes parsing after `pause` was called.
	     */
	    Parser.prototype.resume = function () {
	        this.tokenizer.resume();
	    };
	    /**
	     * Alias of `write`, for backwards compatibility.
	     *
	     * @param chunk Chunk to parse.
	     * @deprecated
	     */
	    Parser.prototype.parseChunk = function (chunk) {
	        this.write(chunk);
	    };
	    /**
	     * Alias of `end`, for backwards compatibility.
	     *
	     * @param chunk Optional final chunk to parse.
	     * @deprecated
	     */
	    Parser.prototype.done = function (chunk) {
	        this.end(chunk);
	    };
	    return Parser;
	}());
	Parser$3.Parser = Parser$2;

	var lib$4 = {};

	var lib$3 = {};

	(function (exports) {
		Object.defineProperty(exports, "__esModule", { value: true });
		exports.Doctype = exports.CDATA = exports.Tag = exports.Style = exports.Script = exports.Comment = exports.Directive = exports.Text = exports.Root = exports.isTag = exports.ElementType = void 0;
		/** Types of elements found in htmlparser2's DOM */
		var ElementType;
		(function (ElementType) {
		    /** Type for the root element of a document */
		    ElementType["Root"] = "root";
		    /** Type for Text */
		    ElementType["Text"] = "text";
		    /** Type for <? ... ?> */
		    ElementType["Directive"] = "directive";
		    /** Type for <!-- ... --> */
		    ElementType["Comment"] = "comment";
		    /** Type for <script> tags */
		    ElementType["Script"] = "script";
		    /** Type for <style> tags */
		    ElementType["Style"] = "style";
		    /** Type for Any tag */
		    ElementType["Tag"] = "tag";
		    /** Type for <![CDATA[ ... ]]> */
		    ElementType["CDATA"] = "cdata";
		    /** Type for <!doctype ...> */
		    ElementType["Doctype"] = "doctype";
		})(ElementType = exports.ElementType || (exports.ElementType = {}));
		/**
		 * Tests whether an element is a tag or not.
		 *
		 * @param elem Element to test
		 */
		function isTag(elem) {
		    return (elem.type === ElementType.Tag ||
		        elem.type === ElementType.Script ||
		        elem.type === ElementType.Style);
		}
		exports.isTag = isTag;
		// Exports for backwards compatibility
		/** Type for the root element of a document */
		exports.Root = ElementType.Root;
		/** Type for Text */
		exports.Text = ElementType.Text;
		/** Type for <? ... ?> */
		exports.Directive = ElementType.Directive;
		/** Type for <!-- ... --> */
		exports.Comment = ElementType.Comment;
		/** Type for <script> tags */
		exports.Script = ElementType.Script;
		/** Type for <style> tags */
		exports.Style = ElementType.Style;
		/** Type for Any tag */
		exports.Tag = ElementType.Tag;
		/** Type for <![CDATA[ ... ]]> */
		exports.CDATA = ElementType.CDATA;
		/** Type for <!doctype ...> */
		exports.Doctype = ElementType.Doctype;
	} (lib$3));

	var node = {};

	var __extends$1 = (commonjsGlobal && commonjsGlobal.__extends) || (function () {
	    var extendStatics = function (d, b) {
	        extendStatics = Object.setPrototypeOf ||
	            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
	            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
	        return extendStatics(d, b);
	    };
	    return function (d, b) {
	        if (typeof b !== "function" && b !== null)
	            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
	        extendStatics(d, b);
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	})();
	var __assign$1 = (commonjsGlobal && commonjsGlobal.__assign) || function () {
	    __assign$1 = Object.assign || function(t) {
	        for (var s, i = 1, n = arguments.length; i < n; i++) {
	            s = arguments[i];
	            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
	                t[p] = s[p];
	        }
	        return t;
	    };
	    return __assign$1.apply(this, arguments);
	};
	Object.defineProperty(node, "__esModule", { value: true });
	node.cloneNode = node.hasChildren = node.isDocument = node.isDirective = node.isComment = node.isText = node.isCDATA = node.isTag = node.Element = node.Document = node.NodeWithChildren = node.ProcessingInstruction = node.Comment = node.Text = node.DataNode = node.Node = void 0;
	var domelementtype_1$1 = lib$3;
	var nodeTypes = new Map([
	    [domelementtype_1$1.ElementType.Tag, 1],
	    [domelementtype_1$1.ElementType.Script, 1],
	    [domelementtype_1$1.ElementType.Style, 1],
	    [domelementtype_1$1.ElementType.Directive, 1],
	    [domelementtype_1$1.ElementType.Text, 3],
	    [domelementtype_1$1.ElementType.CDATA, 4],
	    [domelementtype_1$1.ElementType.Comment, 8],
	    [domelementtype_1$1.ElementType.Root, 9],
	]);
	/**
	 * This object will be used as the prototype for Nodes when creating a
	 * DOM-Level-1-compliant structure.
	 */
	var Node$6 = /** @class */ (function () {
	    /**
	     *
	     * @param type The type of the node.
	     */
	    function Node(type) {
	        this.type = type;
	        /** Parent of the node */
	        this.parent = null;
	        /** Previous sibling */
	        this.prev = null;
	        /** Next sibling */
	        this.next = null;
	        /** The start index of the node. Requires `withStartIndices` on the handler to be `true. */
	        this.startIndex = null;
	        /** The end index of the node. Requires `withEndIndices` on the handler to be `true. */
	        this.endIndex = null;
	    }
	    Object.defineProperty(Node.prototype, "nodeType", {
	        // Read-only aliases
	        /**
	         * [DOM spec](https://dom.spec.whatwg.org/#dom-node-nodetype)-compatible
	         * node {@link type}.
	         */
	        get: function () {
	            var _a;
	            return (_a = nodeTypes.get(this.type)) !== null && _a !== void 0 ? _a : 1;
	        },
	        enumerable: false,
	        configurable: true
	    });
	    Object.defineProperty(Node.prototype, "parentNode", {
	        // Read-write aliases for properties
	        /**
	         * Same as {@link parent}.
	         * [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
	         */
	        get: function () {
	            return this.parent;
	        },
	        set: function (parent) {
	            this.parent = parent;
	        },
	        enumerable: false,
	        configurable: true
	    });
	    Object.defineProperty(Node.prototype, "previousSibling", {
	        /**
	         * Same as {@link prev}.
	         * [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
	         */
	        get: function () {
	            return this.prev;
	        },
	        set: function (prev) {
	            this.prev = prev;
	        },
	        enumerable: false,
	        configurable: true
	    });
	    Object.defineProperty(Node.prototype, "nextSibling", {
	        /**
	         * Same as {@link next}.
	         * [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
	         */
	        get: function () {
	            return this.next;
	        },
	        set: function (next) {
	            this.next = next;
	        },
	        enumerable: false,
	        configurable: true
	    });
	    /**
	     * Clone this node, and optionally its children.
	     *
	     * @param recursive Clone child nodes as well.
	     * @returns A clone of the node.
	     */
	    Node.prototype.cloneNode = function (recursive) {
	        if (recursive === void 0) { recursive = false; }
	        return cloneNode$1(this, recursive);
	    };
	    return Node;
	}());
	node.Node = Node$6;
	/**
	 * A node that contains some data.
	 */
	var DataNode = /** @class */ (function (_super) {
	    __extends$1(DataNode, _super);
	    /**
	     * @param type The type of the node
	     * @param data The content of the data node
	     */
	    function DataNode(type, data) {
	        var _this = _super.call(this, type) || this;
	        _this.data = data;
	        return _this;
	    }
	    Object.defineProperty(DataNode.prototype, "nodeValue", {
	        /**
	         * Same as {@link data}.
	         * [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
	         */
	        get: function () {
	            return this.data;
	        },
	        set: function (data) {
	            this.data = data;
	        },
	        enumerable: false,
	        configurable: true
	    });
	    return DataNode;
	}(Node$6));
	node.DataNode = DataNode;
	/**
	 * Text within the document.
	 */
	var Text = /** @class */ (function (_super) {
	    __extends$1(Text, _super);
	    function Text(data) {
	        return _super.call(this, domelementtype_1$1.ElementType.Text, data) || this;
	    }
	    return Text;
	}(DataNode));
	node.Text = Text;
	/**
	 * Comments within the document.
	 */
	var Comment$5 = /** @class */ (function (_super) {
	    __extends$1(Comment, _super);
	    function Comment(data) {
	        return _super.call(this, domelementtype_1$1.ElementType.Comment, data) || this;
	    }
	    return Comment;
	}(DataNode));
	node.Comment = Comment$5;
	/**
	 * Processing instructions, including doc types.
	 */
	var ProcessingInstruction = /** @class */ (function (_super) {
	    __extends$1(ProcessingInstruction, _super);
	    function ProcessingInstruction(name, data) {
	        var _this = _super.call(this, domelementtype_1$1.ElementType.Directive, data) || this;
	        _this.name = name;
	        return _this;
	    }
	    return ProcessingInstruction;
	}(DataNode));
	node.ProcessingInstruction = ProcessingInstruction;
	/**
	 * A `Node` that can have children.
	 */
	var NodeWithChildren = /** @class */ (function (_super) {
	    __extends$1(NodeWithChildren, _super);
	    /**
	     * @param type Type of the node.
	     * @param children Children of the node. Only certain node types can have children.
	     */
	    function NodeWithChildren(type, children) {
	        var _this = _super.call(this, type) || this;
	        _this.children = children;
	        return _this;
	    }
	    Object.defineProperty(NodeWithChildren.prototype, "firstChild", {
	        // Aliases
	        /** First child of the node. */
	        get: function () {
	            var _a;
	            return (_a = this.children[0]) !== null && _a !== void 0 ? _a : null;
	        },
	        enumerable: false,
	        configurable: true
	    });
	    Object.defineProperty(NodeWithChildren.prototype, "lastChild", {
	        /** Last child of the node. */
	        get: function () {
	            return this.children.length > 0
	                ? this.children[this.children.length - 1]
	                : null;
	        },
	        enumerable: false,
	        configurable: true
	    });
	    Object.defineProperty(NodeWithChildren.prototype, "childNodes", {
	        /**
	         * Same as {@link children}.
	         * [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
	         */
	        get: function () {
	            return this.children;
	        },
	        set: function (children) {
	            this.children = children;
	        },
	        enumerable: false,
	        configurable: true
	    });
	    return NodeWithChildren;
	}(Node$6));
	node.NodeWithChildren = NodeWithChildren;
	/**
	 * The root node of the document.
	 */
	var Document$4 = /** @class */ (function (_super) {
	    __extends$1(Document, _super);
	    function Document(children) {
	        return _super.call(this, domelementtype_1$1.ElementType.Root, children) || this;
	    }
	    return Document;
	}(NodeWithChildren));
	node.Document = Document$4;
	/**
	 * An element within the DOM.
	 */
	var Element$1 = /** @class */ (function (_super) {
	    __extends$1(Element, _super);
	    /**
	     * @param name Name of the tag, eg. `div`, `span`.
	     * @param attribs Object mapping attribute names to attribute values.
	     * @param children Children of the node.
	     */
	    function Element(name, attribs, children, type) {
	        if (children === void 0) { children = []; }
	        if (type === void 0) { type = name === "script"
	            ? domelementtype_1$1.ElementType.Script
	            : name === "style"
	                ? domelementtype_1$1.ElementType.Style
	                : domelementtype_1$1.ElementType.Tag; }
	        var _this = _super.call(this, type, children) || this;
	        _this.name = name;
	        _this.attribs = attribs;
	        return _this;
	    }
	    Object.defineProperty(Element.prototype, "tagName", {
	        // DOM Level 1 aliases
	        /**
	         * Same as {@link name}.
	         * [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
	         */
	        get: function () {
	            return this.name;
	        },
	        set: function (name) {
	            this.name = name;
	        },
	        enumerable: false,
	        configurable: true
	    });
	    Object.defineProperty(Element.prototype, "attributes", {
	        get: function () {
	            var _this = this;
	            return Object.keys(this.attribs).map(function (name) {
	                var _a, _b;
	                return ({
	                    name: name,
	                    value: _this.attribs[name],
	                    namespace: (_a = _this["x-attribsNamespace"]) === null || _a === void 0 ? void 0 : _a[name],
	                    prefix: (_b = _this["x-attribsPrefix"]) === null || _b === void 0 ? void 0 : _b[name],
	                });
	            });
	        },
	        enumerable: false,
	        configurable: true
	    });
	    return Element;
	}(NodeWithChildren));
	node.Element = Element$1;
	/**
	 * @param node Node to check.
	 * @returns `true` if the node is a `Element`, `false` otherwise.
	 */
	function isTag(node) {
	    return (0, domelementtype_1$1.isTag)(node);
	}
	node.isTag = isTag;
	/**
	 * @param node Node to check.
	 * @returns `true` if the node has the type `CDATA`, `false` otherwise.
	 */
	function isCDATA(node) {
	    return node.type === domelementtype_1$1.ElementType.CDATA;
	}
	node.isCDATA = isCDATA;
	/**
	 * @param node Node to check.
	 * @returns `true` if the node has the type `Text`, `false` otherwise.
	 */
	function isText(node) {
	    return node.type === domelementtype_1$1.ElementType.Text;
	}
	node.isText = isText;
	/**
	 * @param node Node to check.
	 * @returns `true` if the node has the type `Comment`, `false` otherwise.
	 */
	function isComment(node) {
	    return node.type === domelementtype_1$1.ElementType.Comment;
	}
	node.isComment = isComment;
	/**
	 * @param node Node to check.
	 * @returns `true` if the node has the type `ProcessingInstruction`, `false` otherwise.
	 */
	function isDirective(node) {
	    return node.type === domelementtype_1$1.ElementType.Directive;
	}
	node.isDirective = isDirective;
	/**
	 * @param node Node to check.
	 * @returns `true` if the node has the type `ProcessingInstruction`, `false` otherwise.
	 */
	function isDocument(node) {
	    return node.type === domelementtype_1$1.ElementType.Root;
	}
	node.isDocument = isDocument;
	/**
	 * @param node Node to check.
	 * @returns `true` if the node is a `NodeWithChildren` (has children), `false` otherwise.
	 */
	function hasChildren(node) {
	    return Object.prototype.hasOwnProperty.call(node, "children");
	}
	node.hasChildren = hasChildren;
	/**
	 * Clone a node, and optionally its children.
	 *
	 * @param recursive Clone child nodes as well.
	 * @returns A clone of the node.
	 */
	function cloneNode$1(node, recursive) {
	    if (recursive === void 0) { recursive = false; }
	    var result;
	    if (isText(node)) {
	        result = new Text(node.data);
	    }
	    else if (isComment(node)) {
	        result = new Comment$5(node.data);
	    }
	    else if (isTag(node)) {
	        var children = recursive ? cloneChildren(node.children) : [];
	        var clone_1 = new Element$1(node.name, __assign$1({}, node.attribs), children);
	        children.forEach(function (child) { return (child.parent = clone_1); });
	        if (node.namespace != null) {
	            clone_1.namespace = node.namespace;
	        }
	        if (node["x-attribsNamespace"]) {
	            clone_1["x-attribsNamespace"] = __assign$1({}, node["x-attribsNamespace"]);
	        }
	        if (node["x-attribsPrefix"]) {
	            clone_1["x-attribsPrefix"] = __assign$1({}, node["x-attribsPrefix"]);
	        }
	        result = clone_1;
	    }
	    else if (isCDATA(node)) {
	        var children = recursive ? cloneChildren(node.children) : [];
	        var clone_2 = new NodeWithChildren(domelementtype_1$1.ElementType.CDATA, children);
	        children.forEach(function (child) { return (child.parent = clone_2); });
	        result = clone_2;
	    }
	    else if (isDocument(node)) {
	        var children = recursive ? cloneChildren(node.children) : [];
	        var clone_3 = new Document$4(children);
	        children.forEach(function (child) { return (child.parent = clone_3); });
	        if (node["x-mode"]) {
	            clone_3["x-mode"] = node["x-mode"];
	        }
	        result = clone_3;
	    }
	    else if (isDirective(node)) {
	        var instruction = new ProcessingInstruction(node.name, node.data);
	        if (node["x-name"] != null) {
	            instruction["x-name"] = node["x-name"];
	            instruction["x-publicId"] = node["x-publicId"];
	            instruction["x-systemId"] = node["x-systemId"];
	        }
	        result = instruction;
	    }
	    else {
	        throw new Error("Not implemented yet: ".concat(node.type));
	    }
	    result.startIndex = node.startIndex;
	    result.endIndex = node.endIndex;
	    if (node.sourceCodeLocation != null) {
	        result.sourceCodeLocation = node.sourceCodeLocation;
	    }
	    return result;
	}
	node.cloneNode = cloneNode$1;
	function cloneChildren(childs) {
	    var children = childs.map(function (child) { return cloneNode$1(child, true); });
	    for (var i = 1; i < children.length; i++) {
	        children[i].prev = children[i - 1];
	        children[i - 1].next = children[i];
	    }
	    return children;
	}

	(function (exports) {
		var __createBinding = (commonjsGlobal && commonjsGlobal.__createBinding) || (Object.create ? (function(o, m, k, k2) {
		    if (k2 === undefined) k2 = k;
		    var desc = Object.getOwnPropertyDescriptor(m, k);
		    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
		      desc = { enumerable: true, get: function() { return m[k]; } };
		    }
		    Object.defineProperty(o, k2, desc);
		}) : (function(o, m, k, k2) {
		    if (k2 === undefined) k2 = k;
		    o[k2] = m[k];
		}));
		var __exportStar = (commonjsGlobal && commonjsGlobal.__exportStar) || function(m, exports) {
		    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
		};
		Object.defineProperty(exports, "__esModule", { value: true });
		exports.DomHandler = void 0;
		var domelementtype_1 = lib$3;
		var node_1 = node;
		__exportStar(node, exports);
		var reWhitespace = /\s+/g;
		// Default options
		var defaultOpts = {
		    normalizeWhitespace: false,
		    withStartIndices: false,
		    withEndIndices: false,
		    xmlMode: false,
		};
		var DomHandler = /** @class */ (function () {
		    /**
		     * @param callback Called once parsing has completed.
		     * @param options Settings for the handler.
		     * @param elementCB Callback whenever a tag is closed.
		     */
		    function DomHandler(callback, options, elementCB) {
		        /** The elements of the DOM */
		        this.dom = [];
		        /** The root element for the DOM */
		        this.root = new node_1.Document(this.dom);
		        /** Indicated whether parsing has been completed. */
		        this.done = false;
		        /** Stack of open tags. */
		        this.tagStack = [this.root];
		        /** A data node that is still being written to. */
		        this.lastNode = null;
		        /** Reference to the parser instance. Used for location information. */
		        this.parser = null;
		        // Make it possible to skip arguments, for backwards-compatibility
		        if (typeof options === "function") {
		            elementCB = options;
		            options = defaultOpts;
		        }
		        if (typeof callback === "object") {
		            options = callback;
		            callback = undefined;
		        }
		        this.callback = callback !== null && callback !== void 0 ? callback : null;
		        this.options = options !== null && options !== void 0 ? options : defaultOpts;
		        this.elementCB = elementCB !== null && elementCB !== void 0 ? elementCB : null;
		    }
		    DomHandler.prototype.onparserinit = function (parser) {
		        this.parser = parser;
		    };
		    // Resets the handler back to starting state
		    DomHandler.prototype.onreset = function () {
		        this.dom = [];
		        this.root = new node_1.Document(this.dom);
		        this.done = false;
		        this.tagStack = [this.root];
		        this.lastNode = null;
		        this.parser = null;
		    };
		    // Signals the handler that parsing is done
		    DomHandler.prototype.onend = function () {
		        if (this.done)
		            return;
		        this.done = true;
		        this.parser = null;
		        this.handleCallback(null);
		    };
		    DomHandler.prototype.onerror = function (error) {
		        this.handleCallback(error);
		    };
		    DomHandler.prototype.onclosetag = function () {
		        this.lastNode = null;
		        var elem = this.tagStack.pop();
		        if (this.options.withEndIndices) {
		            elem.endIndex = this.parser.endIndex;
		        }
		        if (this.elementCB)
		            this.elementCB(elem);
		    };
		    DomHandler.prototype.onopentag = function (name, attribs) {
		        var type = this.options.xmlMode ? domelementtype_1.ElementType.Tag : undefined;
		        var element = new node_1.Element(name, attribs, undefined, type);
		        this.addNode(element);
		        this.tagStack.push(element);
		    };
		    DomHandler.prototype.ontext = function (data) {
		        var normalizeWhitespace = this.options.normalizeWhitespace;
		        var lastNode = this.lastNode;
		        if (lastNode && lastNode.type === domelementtype_1.ElementType.Text) {
		            if (normalizeWhitespace) {
		                lastNode.data = (lastNode.data + data).replace(reWhitespace, " ");
		            }
		            else {
		                lastNode.data += data;
		            }
		            if (this.options.withEndIndices) {
		                lastNode.endIndex = this.parser.endIndex;
		            }
		        }
		        else {
		            if (normalizeWhitespace) {
		                data = data.replace(reWhitespace, " ");
		            }
		            var node = new node_1.Text(data);
		            this.addNode(node);
		            this.lastNode = node;
		        }
		    };
		    DomHandler.prototype.oncomment = function (data) {
		        if (this.lastNode && this.lastNode.type === domelementtype_1.ElementType.Comment) {
		            this.lastNode.data += data;
		            return;
		        }
		        var node = new node_1.Comment(data);
		        this.addNode(node);
		        this.lastNode = node;
		    };
		    DomHandler.prototype.oncommentend = function () {
		        this.lastNode = null;
		    };
		    DomHandler.prototype.oncdatastart = function () {
		        var text = new node_1.Text("");
		        var node = new node_1.NodeWithChildren(domelementtype_1.ElementType.CDATA, [text]);
		        this.addNode(node);
		        text.parent = node;
		        this.lastNode = text;
		    };
		    DomHandler.prototype.oncdataend = function () {
		        this.lastNode = null;
		    };
		    DomHandler.prototype.onprocessinginstruction = function (name, data) {
		        var node = new node_1.ProcessingInstruction(name, data);
		        this.addNode(node);
		    };
		    DomHandler.prototype.handleCallback = function (error) {
		        if (typeof this.callback === "function") {
		            this.callback(error, this.dom);
		        }
		        else if (error) {
		            throw error;
		        }
		    };
		    DomHandler.prototype.addNode = function (node) {
		        var parent = this.tagStack[this.tagStack.length - 1];
		        var previousSibling = parent.children[parent.children.length - 1];
		        if (this.options.withStartIndices) {
		            node.startIndex = this.parser.startIndex;
		        }
		        if (this.options.withEndIndices) {
		            node.endIndex = this.parser.endIndex;
		        }
		        parent.children.push(node);
		        if (previousSibling) {
		            node.prev = previousSibling;
		            previousSibling.next = node;
		        }
		        node.parent = parent;
		        this.lastNode = null;
		    };
		    return DomHandler;
		}());
		exports.DomHandler = DomHandler;
		exports.default = DomHandler;
	} (lib$4));

	var FeedHandler$1 = {};

	var lib$2 = {};

	var stringify$5 = {};

	var lib$1 = {};

	var lib = {};

	var decode = {};

	var __importDefault$3 = (commonjsGlobal && commonjsGlobal.__importDefault) || function (mod) {
	    return (mod && mod.__esModule) ? mod : { "default": mod };
	};
	Object.defineProperty(decode, "__esModule", { value: true });
	decode.decodeHTML = decode.decodeHTMLStrict = decode.decodeXML = void 0;
	var entities_json_1$1 = __importDefault$3(require$$1$1);
	var legacy_json_1 = __importDefault$3(require$$1);
	var xml_json_1$1 = __importDefault$3(require$$0);
	var decode_codepoint_1 = __importDefault$3(decode_codepoint);
	var strictEntityRe = /&(?:[a-zA-Z0-9]+|#[xX][\da-fA-F]+|#\d+);/g;
	decode.decodeXML = getStrictDecoder(xml_json_1$1.default);
	decode.decodeHTMLStrict = getStrictDecoder(entities_json_1$1.default);
	function getStrictDecoder(map) {
	    var replace = getReplacer(map);
	    return function (str) { return String(str).replace(strictEntityRe, replace); };
	}
	var sorter = function (a, b) { return (a < b ? 1 : -1); };
	decode.decodeHTML = (function () {
	    var legacy = Object.keys(legacy_json_1.default).sort(sorter);
	    var keys = Object.keys(entities_json_1$1.default).sort(sorter);
	    for (var i = 0, j = 0; i < keys.length; i++) {
	        if (legacy[j] === keys[i]) {
	            keys[i] += ";?";
	            j++;
	        }
	        else {
	            keys[i] += ";";
	        }
	    }
	    var re = new RegExp("&(?:" + keys.join("|") + "|#[xX][\\da-fA-F]+;?|#\\d+;?)", "g");
	    var replace = getReplacer(entities_json_1$1.default);
	    function replacer(str) {
	        if (str.substr(-1) !== ";")
	            str += ";";
	        return replace(str);
	    }
	    // TODO consider creating a merged map
	    return function (str) { return String(str).replace(re, replacer); };
	})();
	function getReplacer(map) {
	    return function replace(str) {
	        if (str.charAt(1) === "#") {
	            var secondChar = str.charAt(2);
	            if (secondChar === "X" || secondChar === "x") {
	                return decode_codepoint_1.default(parseInt(str.substr(3), 16));
	            }
	            return decode_codepoint_1.default(parseInt(str.substr(2), 10));
	        }
	        // eslint-disable-next-line @typescript-eslint/prefer-nullish-coalescing
	        return map[str.slice(1, -1)] || str;
	    };
	}

	var encode = {};

	var __importDefault$2 = (commonjsGlobal && commonjsGlobal.__importDefault) || function (mod) {
	    return (mod && mod.__esModule) ? mod : { "default": mod };
	};
	Object.defineProperty(encode, "__esModule", { value: true });
	encode.escapeUTF8 = encode.escape = encode.encodeNonAsciiHTML = encode.encodeHTML = encode.encodeXML = void 0;
	var xml_json_1 = __importDefault$2(require$$0);
	var inverseXML = getInverseObj(xml_json_1.default);
	var xmlReplacer = getInverseReplacer(inverseXML);
	/**
	 * Encodes all non-ASCII characters, as well as characters not valid in XML
	 * documents using XML entities.
	 *
	 * If a character has no equivalent entity, a
	 * numeric hexadecimal reference (eg. `&#xfc;`) will be used.
	 */
	encode.encodeXML = getASCIIEncoder(inverseXML);
	var entities_json_1 = __importDefault$2(require$$1$1);
	var inverseHTML = getInverseObj(entities_json_1.default);
	var htmlReplacer = getInverseReplacer(inverseHTML);
	/**
	 * Encodes all entities and non-ASCII characters in the input.
	 *
	 * This includes characters that are valid ASCII characters in HTML documents.
	 * For example `#` will be encoded as `&num;`. To get a more compact output,
	 * consider using the `encodeNonAsciiHTML` function.
	 *
	 * If a character has no equivalent entity, a
	 * numeric hexadecimal reference (eg. `&#xfc;`) will be used.
	 */
	encode.encodeHTML = getInverse(inverseHTML, htmlReplacer);
	/**
	 * Encodes all non-ASCII characters, as well as characters not valid in HTML
	 * documents using HTML entities.
	 *
	 * If a character has no equivalent entity, a
	 * numeric hexadecimal reference (eg. `&#xfc;`) will be used.
	 */
	encode.encodeNonAsciiHTML = getASCIIEncoder(inverseHTML);
	function getInverseObj(obj) {
	    return Object.keys(obj)
	        .sort()
	        .reduce(function (inverse, name) {
	        inverse[obj[name]] = "&" + name + ";";
	        return inverse;
	    }, {});
	}
	function getInverseReplacer(inverse) {
	    var single = [];
	    var multiple = [];
	    for (var _i = 0, _a = Object.keys(inverse); _i < _a.length; _i++) {
	        var k = _a[_i];
	        if (k.length === 1) {
	            // Add value to single array
	            single.push("\\" + k);
	        }
	        else {
	            // Add value to multiple array
	            multiple.push(k);
	        }
	    }
	    // Add ranges to single characters.
	    single.sort();
	    for (var start = 0; start < single.length - 1; start++) {
	        // Find the end of a run of characters
	        var end = start;
	        while (end < single.length - 1 &&
	            single[end].charCodeAt(1) + 1 === single[end + 1].charCodeAt(1)) {
	            end += 1;
	        }
	        var count = 1 + end - start;
	        // We want to replace at least three characters
	        if (count < 3)
	            continue;
	        single.splice(start, count, single[start] + "-" + single[end]);
	    }
	    multiple.unshift("[" + single.join("") + "]");
	    return new RegExp(multiple.join("|"), "g");
	}
	// /[^\0-\x7F]/gu
	var reNonASCII = /(?:[\x80-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])/g;
	var getCodePoint = 
	// eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
	String.prototype.codePointAt != null
	    ? // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
	        function (str) { return str.codePointAt(0); }
	    : // http://mathiasbynens.be/notes/javascript-encoding#surrogate-formulae
	        function (c) {
	            return (c.charCodeAt(0) - 0xd800) * 0x400 +
	                c.charCodeAt(1) -
	                0xdc00 +
	                0x10000;
	        };
	function singleCharReplacer(c) {
	    return "&#x" + (c.length > 1 ? getCodePoint(c) : c.charCodeAt(0))
	        .toString(16)
	        .toUpperCase() + ";";
	}
	function getInverse(inverse, re) {
	    return function (data) {
	        return data
	            .replace(re, function (name) { return inverse[name]; })
	            .replace(reNonASCII, singleCharReplacer);
	    };
	}
	var reEscapeChars = new RegExp(xmlReplacer.source + "|" + reNonASCII.source, "g");
	/**
	 * Encodes all non-ASCII characters, as well as characters not valid in XML
	 * documents using numeric hexadecimal reference (eg. `&#xfc;`).
	 *
	 * Have a look at `escapeUTF8` if you want a more concise output at the expense
	 * of reduced transportability.
	 *
	 * @param data String to escape.
	 */
	function escape(data) {
	    return data.replace(reEscapeChars, singleCharReplacer);
	}
	encode.escape = escape;
	/**
	 * Encodes all characters not valid in XML documents using numeric hexadecimal
	 * reference (eg. `&#xfc;`).
	 *
	 * Note that the output will be character-set dependent.
	 *
	 * @param data String to escape.
	 */
	function escapeUTF8(data) {
	    return data.replace(xmlReplacer, singleCharReplacer);
	}
	encode.escapeUTF8 = escapeUTF8;
	function getASCIIEncoder(obj) {
	    return function (data) {
	        return data.replace(reEscapeChars, function (c) { return obj[c] || singleCharReplacer(c); });
	    };
	}

	(function (exports) {
		Object.defineProperty(exports, "__esModule", { value: true });
		exports.decodeXMLStrict = exports.decodeHTML5Strict = exports.decodeHTML4Strict = exports.decodeHTML5 = exports.decodeHTML4 = exports.decodeHTMLStrict = exports.decodeHTML = exports.decodeXML = exports.encodeHTML5 = exports.encodeHTML4 = exports.escapeUTF8 = exports.escape = exports.encodeNonAsciiHTML = exports.encodeHTML = exports.encodeXML = exports.encode = exports.decodeStrict = exports.decode = void 0;
		var decode_1 = decode;
		var encode_1 = encode;
		/**
		 * Decodes a string with entities.
		 *
		 * @param data String to decode.
		 * @param level Optional level to decode at. 0 = XML, 1 = HTML. Default is 0.
		 * @deprecated Use `decodeXML` or `decodeHTML` directly.
		 */
		function decode$1(data, level) {
		    return (!level || level <= 0 ? decode_1.decodeXML : decode_1.decodeHTML)(data);
		}
		exports.decode = decode$1;
		/**
		 * Decodes a string with entities. Does not allow missing trailing semicolons for entities.
		 *
		 * @param data String to decode.
		 * @param level Optional level to decode at. 0 = XML, 1 = HTML. Default is 0.
		 * @deprecated Use `decodeHTMLStrict` or `decodeXML` directly.
		 */
		function decodeStrict(data, level) {
		    return (!level || level <= 0 ? decode_1.decodeXML : decode_1.decodeHTMLStrict)(data);
		}
		exports.decodeStrict = decodeStrict;
		/**
		 * Encodes a string with entities.
		 *
		 * @param data String to encode.
		 * @param level Optional level to encode at. 0 = XML, 1 = HTML. Default is 0.
		 * @deprecated Use `encodeHTML`, `encodeXML` or `encodeNonAsciiHTML` directly.
		 */
		function encode$1(data, level) {
		    return (!level || level <= 0 ? encode_1.encodeXML : encode_1.encodeHTML)(data);
		}
		exports.encode = encode$1;
		var encode_2 = encode;
		Object.defineProperty(exports, "encodeXML", { enumerable: true, get: function () { return encode_2.encodeXML; } });
		Object.defineProperty(exports, "encodeHTML", { enumerable: true, get: function () { return encode_2.encodeHTML; } });
		Object.defineProperty(exports, "encodeNonAsciiHTML", { enumerable: true, get: function () { return encode_2.encodeNonAsciiHTML; } });
		Object.defineProperty(exports, "escape", { enumerable: true, get: function () { return encode_2.escape; } });
		Object.defineProperty(exports, "escapeUTF8", { enumerable: true, get: function () { return encode_2.escapeUTF8; } });
		// Legacy aliases (deprecated)
		Object.defineProperty(exports, "encodeHTML4", { enumerable: true, get: function () { return encode_2.encodeHTML; } });
		Object.defineProperty(exports, "encodeHTML5", { enumerable: true, get: function () { return encode_2.encodeHTML; } });
		var decode_2 = decode;
		Object.defineProperty(exports, "decodeXML", { enumerable: true, get: function () { return decode_2.decodeXML; } });
		Object.defineProperty(exports, "decodeHTML", { enumerable: true, get: function () { return decode_2.decodeHTML; } });
		Object.defineProperty(exports, "decodeHTMLStrict", { enumerable: true, get: function () { return decode_2.decodeHTMLStrict; } });
		// Legacy aliases (deprecated)
		Object.defineProperty(exports, "decodeHTML4", { enumerable: true, get: function () { return decode_2.decodeHTML; } });
		Object.defineProperty(exports, "decodeHTML5", { enumerable: true, get: function () { return decode_2.decodeHTML; } });
		Object.defineProperty(exports, "decodeHTML4Strict", { enumerable: true, get: function () { return decode_2.decodeHTMLStrict; } });
		Object.defineProperty(exports, "decodeHTML5Strict", { enumerable: true, get: function () { return decode_2.decodeHTMLStrict; } });
		Object.defineProperty(exports, "decodeXMLStrict", { enumerable: true, get: function () { return decode_2.decodeXML; } });
	} (lib));

	var foreignNames = {};

	Object.defineProperty(foreignNames, "__esModule", { value: true });
	foreignNames.attributeNames = foreignNames.elementNames = void 0;
	foreignNames.elementNames = new Map([
	    ["altglyph", "altGlyph"],
	    ["altglyphdef", "altGlyphDef"],
	    ["altglyphitem", "altGlyphItem"],
	    ["animatecolor", "animateColor"],
	    ["animatemotion", "animateMotion"],
	    ["animatetransform", "animateTransform"],
	    ["clippath", "clipPath"],
	    ["feblend", "feBlend"],
	    ["fecolormatrix", "feColorMatrix"],
	    ["fecomponenttransfer", "feComponentTransfer"],
	    ["fecomposite", "feComposite"],
	    ["feconvolvematrix", "feConvolveMatrix"],
	    ["fediffuselighting", "feDiffuseLighting"],
	    ["fedisplacementmap", "feDisplacementMap"],
	    ["fedistantlight", "feDistantLight"],
	    ["fedropshadow", "feDropShadow"],
	    ["feflood", "feFlood"],
	    ["fefunca", "feFuncA"],
	    ["fefuncb", "feFuncB"],
	    ["fefuncg", "feFuncG"],
	    ["fefuncr", "feFuncR"],
	    ["fegaussianblur", "feGaussianBlur"],
	    ["feimage", "feImage"],
	    ["femerge", "feMerge"],
	    ["femergenode", "feMergeNode"],
	    ["femorphology", "feMorphology"],
	    ["feoffset", "feOffset"],
	    ["fepointlight", "fePointLight"],
	    ["fespecularlighting", "feSpecularLighting"],
	    ["fespotlight", "feSpotLight"],
	    ["fetile", "feTile"],
	    ["feturbulence", "feTurbulence"],
	    ["foreignobject", "foreignObject"],
	    ["glyphref", "glyphRef"],
	    ["lineargradient", "linearGradient"],
	    ["radialgradient", "radialGradient"],
	    ["textpath", "textPath"],
	]);
	foreignNames.attributeNames = new Map([
	    ["definitionurl", "definitionURL"],
	    ["attributename", "attributeName"],
	    ["attributetype", "attributeType"],
	    ["basefrequency", "baseFrequency"],
	    ["baseprofile", "baseProfile"],
	    ["calcmode", "calcMode"],
	    ["clippathunits", "clipPathUnits"],
	    ["diffuseconstant", "diffuseConstant"],
	    ["edgemode", "edgeMode"],
	    ["filterunits", "filterUnits"],
	    ["glyphref", "glyphRef"],
	    ["gradienttransform", "gradientTransform"],
	    ["gradientunits", "gradientUnits"],
	    ["kernelmatrix", "kernelMatrix"],
	    ["kernelunitlength", "kernelUnitLength"],
	    ["keypoints", "keyPoints"],
	    ["keysplines", "keySplines"],
	    ["keytimes", "keyTimes"],
	    ["lengthadjust", "lengthAdjust"],
	    ["limitingconeangle", "limitingConeAngle"],
	    ["markerheight", "markerHeight"],
	    ["markerunits", "markerUnits"],
	    ["markerwidth", "markerWidth"],
	    ["maskcontentunits", "maskContentUnits"],
	    ["maskunits", "maskUnits"],
	    ["numoctaves", "numOctaves"],
	    ["pathlength", "pathLength"],
	    ["patterncontentunits", "patternContentUnits"],
	    ["patterntransform", "patternTransform"],
	    ["patternunits", "patternUnits"],
	    ["pointsatx", "pointsAtX"],
	    ["pointsaty", "pointsAtY"],
	    ["pointsatz", "pointsAtZ"],
	    ["preservealpha", "preserveAlpha"],
	    ["preserveaspectratio", "preserveAspectRatio"],
	    ["primitiveunits", "primitiveUnits"],
	    ["refx", "refX"],
	    ["refy", "refY"],
	    ["repeatcount", "repeatCount"],
	    ["repeatdur", "repeatDur"],
	    ["requiredextensions", "requiredExtensions"],
	    ["requiredfeatures", "requiredFeatures"],
	    ["specularconstant", "specularConstant"],
	    ["specularexponent", "specularExponent"],
	    ["spreadmethod", "spreadMethod"],
	    ["startoffset", "startOffset"],
	    ["stddeviation", "stdDeviation"],
	    ["stitchtiles", "stitchTiles"],
	    ["surfacescale", "surfaceScale"],
	    ["systemlanguage", "systemLanguage"],
	    ["tablevalues", "tableValues"],
	    ["targetx", "targetX"],
	    ["targety", "targetY"],
	    ["textlength", "textLength"],
	    ["viewbox", "viewBox"],
	    ["viewtarget", "viewTarget"],
	    ["xchannelselector", "xChannelSelector"],
	    ["ychannelselector", "yChannelSelector"],
	    ["zoomandpan", "zoomAndPan"],
	]);

	var __assign = (commonjsGlobal && commonjsGlobal.__assign) || function () {
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
	var __createBinding$1 = (commonjsGlobal && commonjsGlobal.__createBinding) || (Object.create ? (function(o, m, k, k2) {
	    if (k2 === undefined) k2 = k;
	    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
	}) : (function(o, m, k, k2) {
	    if (k2 === undefined) k2 = k;
	    o[k2] = m[k];
	}));
	var __setModuleDefault$1 = (commonjsGlobal && commonjsGlobal.__setModuleDefault) || (Object.create ? (function(o, v) {
	    Object.defineProperty(o, "default", { enumerable: true, value: v });
	}) : function(o, v) {
	    o["default"] = v;
	});
	var __importStar$1 = (commonjsGlobal && commonjsGlobal.__importStar) || function (mod) {
	    if (mod && mod.__esModule) return mod;
	    var result = {};
	    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding$1(result, mod, k);
	    __setModuleDefault$1(result, mod);
	    return result;
	};
	Object.defineProperty(lib$1, "__esModule", { value: true });
	/*
	 * Module dependencies
	 */
	var ElementType = __importStar$1(lib$3);
	var entities_1 = lib;
	/**
	 * Mixed-case SVG and MathML tags & attributes
	 * recognized by the HTML parser.
	 *
	 * @see https://html.spec.whatwg.org/multipage/parsing.html#parsing-main-inforeign
	 */
	var foreignNames_1 = foreignNames;
	var unencodedElements = new Set([
	    "style",
	    "script",
	    "xmp",
	    "iframe",
	    "noembed",
	    "noframes",
	    "plaintext",
	    "noscript",
	]);
	/**
	 * Format attributes
	 */
	function formatAttributes(attributes, opts) {
	    if (!attributes)
	        return;
	    return Object.keys(attributes)
	        .map(function (key) {
	        var _a, _b;
	        var value = (_a = attributes[key]) !== null && _a !== void 0 ? _a : "";
	        if (opts.xmlMode === "foreign") {
	            /* Fix up mixed-case attribute names */
	            key = (_b = foreignNames_1.attributeNames.get(key)) !== null && _b !== void 0 ? _b : key;
	        }
	        if (!opts.emptyAttrs && !opts.xmlMode && value === "") {
	            return key;
	        }
	        return key + "=\"" + (opts.decodeEntities !== false
	            ? entities_1.encodeXML(value)
	            : value.replace(/"/g, "&quot;")) + "\"";
	    })
	        .join(" ");
	}
	/**
	 * Self-enclosing tags
	 */
	var singleTag = new Set([
	    "area",
	    "base",
	    "basefont",
	    "br",
	    "col",
	    "command",
	    "embed",
	    "frame",
	    "hr",
	    "img",
	    "input",
	    "isindex",
	    "keygen",
	    "link",
	    "meta",
	    "param",
	    "source",
	    "track",
	    "wbr",
	]);
	/**
	 * Renders a DOM node or an array of DOM nodes to a string.
	 *
	 * Can be thought of as the equivalent of the `outerHTML` of the passed node(s).
	 *
	 * @param node Node to be rendered.
	 * @param options Changes serialization behavior
	 */
	function render(node, options) {
	    if (options === void 0) { options = {}; }
	    var nodes = "length" in node ? node : [node];
	    var output = "";
	    for (var i = 0; i < nodes.length; i++) {
	        output += renderNode(nodes[i], options);
	    }
	    return output;
	}
	lib$1.default = render;
	function renderNode(node, options) {
	    switch (node.type) {
	        case ElementType.Root:
	            return render(node.children, options);
	        case ElementType.Directive:
	        case ElementType.Doctype:
	            return renderDirective(node);
	        case ElementType.Comment:
	            return renderComment(node);
	        case ElementType.CDATA:
	            return renderCdata(node);
	        case ElementType.Script:
	        case ElementType.Style:
	        case ElementType.Tag:
	            return renderTag(node, options);
	        case ElementType.Text:
	            return renderText(node, options);
	    }
	}
	var foreignModeIntegrationPoints = new Set([
	    "mi",
	    "mo",
	    "mn",
	    "ms",
	    "mtext",
	    "annotation-xml",
	    "foreignObject",
	    "desc",
	    "title",
	]);
	var foreignElements = new Set(["svg", "math"]);
	function renderTag(elem, opts) {
	    var _a;
	    // Handle SVG / MathML in HTML
	    if (opts.xmlMode === "foreign") {
	        /* Fix up mixed-case element names */
	        elem.name = (_a = foreignNames_1.elementNames.get(elem.name)) !== null && _a !== void 0 ? _a : elem.name;
	        /* Exit foreign mode at integration points */
	        if (elem.parent &&
	            foreignModeIntegrationPoints.has(elem.parent.name)) {
	            opts = __assign(__assign({}, opts), { xmlMode: false });
	        }
	    }
	    if (!opts.xmlMode && foreignElements.has(elem.name)) {
	        opts = __assign(__assign({}, opts), { xmlMode: "foreign" });
	    }
	    var tag = "<" + elem.name;
	    var attribs = formatAttributes(elem.attribs, opts);
	    if (attribs) {
	        tag += " " + attribs;
	    }
	    if (elem.children.length === 0 &&
	        (opts.xmlMode
	            ? // In XML mode or foreign mode, and user hasn't explicitly turned off self-closing tags
	                opts.selfClosingTags !== false
	            : // User explicitly asked for self-closing tags, even in HTML mode
	                opts.selfClosingTags && singleTag.has(elem.name))) {
	        if (!opts.xmlMode)
	            tag += " ";
	        tag += "/>";
	    }
	    else {
	        tag += ">";
	        if (elem.children.length > 0) {
	            tag += render(elem.children, opts);
	        }
	        if (opts.xmlMode || !singleTag.has(elem.name)) {
	            tag += "</" + elem.name + ">";
	        }
	    }
	    return tag;
	}
	function renderDirective(elem) {
	    return "<" + elem.data + ">";
	}
	function renderText(elem, opts) {
	    var data = elem.data || "";
	    // If entities weren't decoded, no need to encode them back
	    if (opts.decodeEntities !== false &&
	        !(!opts.xmlMode &&
	            elem.parent &&
	            unencodedElements.has(elem.parent.name))) {
	        data = entities_1.encodeXML(data);
	    }
	    return data;
	}
	function renderCdata(elem) {
	    return "<![CDATA[" + elem.children[0].data + "]]>";
	}
	function renderComment(elem) {
	    return "<!--" + elem.data + "-->";
	}

	var __importDefault$1 = (commonjsGlobal && commonjsGlobal.__importDefault) || function (mod) {
	    return (mod && mod.__esModule) ? mod : { "default": mod };
	};
	Object.defineProperty(stringify$5, "__esModule", { value: true });
	stringify$5.innerText = stringify$5.textContent = stringify$5.getText = stringify$5.getInnerHTML = stringify$5.getOuterHTML = void 0;
	var domhandler_1$5 = lib$4;
	var dom_serializer_1 = __importDefault$1(lib$1);
	var domelementtype_1 = lib$3;
	/**
	 * @param node Node to get the outer HTML of.
	 * @param options Options for serialization.
	 * @deprecated Use the `dom-serializer` module directly.
	 * @returns `node`'s outer HTML.
	 */
	function getOuterHTML(node, options) {
	    return (0, dom_serializer_1.default)(node, options);
	}
	stringify$5.getOuterHTML = getOuterHTML;
	/**
	 * @param node Node to get the inner HTML of.
	 * @param options Options for serialization.
	 * @deprecated Use the `dom-serializer` module directly.
	 * @returns `node`'s inner HTML.
	 */
	function getInnerHTML(node, options) {
	    return (0, domhandler_1$5.hasChildren)(node)
	        ? node.children.map(function (node) { return getOuterHTML(node, options); }).join("")
	        : "";
	}
	stringify$5.getInnerHTML = getInnerHTML;
	/**
	 * Get a node's inner text. Same as `textContent`, but inserts newlines for `<br>` tags.
	 *
	 * @deprecated Use `textContent` instead.
	 * @param node Node to get the inner text of.
	 * @returns `node`'s inner text.
	 */
	function getText(node) {
	    if (Array.isArray(node))
	        return node.map(getText).join("");
	    if ((0, domhandler_1$5.isTag)(node))
	        return node.name === "br" ? "\n" : getText(node.children);
	    if ((0, domhandler_1$5.isCDATA)(node))
	        return getText(node.children);
	    if ((0, domhandler_1$5.isText)(node))
	        return node.data;
	    return "";
	}
	stringify$5.getText = getText;
	/**
	 * Get a node's text content.
	 *
	 * @param node Node to get the text content of.
	 * @returns `node`'s text content.
	 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Node/textContent}
	 */
	function textContent(node) {
	    if (Array.isArray(node))
	        return node.map(textContent).join("");
	    if ((0, domhandler_1$5.hasChildren)(node) && !(0, domhandler_1$5.isComment)(node)) {
	        return textContent(node.children);
	    }
	    if ((0, domhandler_1$5.isText)(node))
	        return node.data;
	    return "";
	}
	stringify$5.textContent = textContent;
	/**
	 * Get a node's inner text.
	 *
	 * @param node Node to get the inner text of.
	 * @returns `node`'s inner text.
	 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Node/innerText}
	 */
	function innerText(node) {
	    if (Array.isArray(node))
	        return node.map(innerText).join("");
	    if ((0, domhandler_1$5.hasChildren)(node) && (node.type === domelementtype_1.ElementType.Tag || (0, domhandler_1$5.isCDATA)(node))) {
	        return innerText(node.children);
	    }
	    if ((0, domhandler_1$5.isText)(node))
	        return node.data;
	    return "";
	}
	stringify$5.innerText = innerText;

	var traversal = {};

	Object.defineProperty(traversal, "__esModule", { value: true });
	traversal.prevElementSibling = traversal.nextElementSibling = traversal.getName = traversal.hasAttrib = traversal.getAttributeValue = traversal.getSiblings = traversal.getParent = traversal.getChildren = void 0;
	var domhandler_1$4 = lib$4;
	var emptyArray = [];
	/**
	 * Get a node's children.
	 *
	 * @param elem Node to get the children of.
	 * @returns `elem`'s children, or an empty array.
	 */
	function getChildren(elem) {
	    var _a;
	    return (_a = elem.children) !== null && _a !== void 0 ? _a : emptyArray;
	}
	traversal.getChildren = getChildren;
	/**
	 * Get a node's parent.
	 *
	 * @param elem Node to get the parent of.
	 * @returns `elem`'s parent node.
	 */
	function getParent(elem) {
	    return elem.parent || null;
	}
	traversal.getParent = getParent;
	/**
	 * Gets an elements siblings, including the element itself.
	 *
	 * Attempts to get the children through the element's parent first.
	 * If we don't have a parent (the element is a root node),
	 * we walk the element's `prev` & `next` to get all remaining nodes.
	 *
	 * @param elem Element to get the siblings of.
	 * @returns `elem`'s siblings.
	 */
	function getSiblings(elem) {
	    var _a, _b;
	    var parent = getParent(elem);
	    if (parent != null)
	        return getChildren(parent);
	    var siblings = [elem];
	    var prev = elem.prev, next = elem.next;
	    while (prev != null) {
	        siblings.unshift(prev);
	        (_a = prev, prev = _a.prev);
	    }
	    while (next != null) {
	        siblings.push(next);
	        (_b = next, next = _b.next);
	    }
	    return siblings;
	}
	traversal.getSiblings = getSiblings;
	/**
	 * Gets an attribute from an element.
	 *
	 * @param elem Element to check.
	 * @param name Attribute name to retrieve.
	 * @returns The element's attribute value, or `undefined`.
	 */
	function getAttributeValue(elem, name) {
	    var _a;
	    return (_a = elem.attribs) === null || _a === void 0 ? void 0 : _a[name];
	}
	traversal.getAttributeValue = getAttributeValue;
	/**
	 * Checks whether an element has an attribute.
	 *
	 * @param elem Element to check.
	 * @param name Attribute name to look for.
	 * @returns Returns whether `elem` has the attribute `name`.
	 */
	function hasAttrib(elem, name) {
	    return (elem.attribs != null &&
	        Object.prototype.hasOwnProperty.call(elem.attribs, name) &&
	        elem.attribs[name] != null);
	}
	traversal.hasAttrib = hasAttrib;
	/**
	 * Get the tag name of an element.
	 *
	 * @param elem The element to get the name for.
	 * @returns The tag name of `elem`.
	 */
	function getName(elem) {
	    return elem.name;
	}
	traversal.getName = getName;
	/**
	 * Returns the next element sibling of a node.
	 *
	 * @param elem The element to get the next sibling of.
	 * @returns `elem`'s next sibling that is a tag.
	 */
	function nextElementSibling(elem) {
	    var _a;
	    var next = elem.next;
	    while (next !== null && !(0, domhandler_1$4.isTag)(next))
	        (_a = next, next = _a.next);
	    return next;
	}
	traversal.nextElementSibling = nextElementSibling;
	/**
	 * Returns the previous element sibling of a node.
	 *
	 * @param elem The element to get the previous sibling of.
	 * @returns `elem`'s previous sibling that is a tag.
	 */
	function prevElementSibling(elem) {
	    var _a;
	    var prev = elem.prev;
	    while (prev !== null && !(0, domhandler_1$4.isTag)(prev))
	        (_a = prev, prev = _a.prev);
	    return prev;
	}
	traversal.prevElementSibling = prevElementSibling;

	var manipulation = {};

	Object.defineProperty(manipulation, "__esModule", { value: true });
	manipulation.prepend = manipulation.prependChild = manipulation.append = manipulation.appendChild = manipulation.replaceElement = manipulation.removeElement = void 0;
	/**
	 * Remove an element from the dom
	 *
	 * @param elem The element to be removed
	 */
	function removeElement(elem) {
	    if (elem.prev)
	        elem.prev.next = elem.next;
	    if (elem.next)
	        elem.next.prev = elem.prev;
	    if (elem.parent) {
	        var childs = elem.parent.children;
	        childs.splice(childs.lastIndexOf(elem), 1);
	    }
	}
	manipulation.removeElement = removeElement;
	/**
	 * Replace an element in the dom
	 *
	 * @param elem The element to be replaced
	 * @param replacement The element to be added
	 */
	function replaceElement(elem, replacement) {
	    var prev = (replacement.prev = elem.prev);
	    if (prev) {
	        prev.next = replacement;
	    }
	    var next = (replacement.next = elem.next);
	    if (next) {
	        next.prev = replacement;
	    }
	    var parent = (replacement.parent = elem.parent);
	    if (parent) {
	        var childs = parent.children;
	        childs[childs.lastIndexOf(elem)] = replacement;
	    }
	}
	manipulation.replaceElement = replaceElement;
	/**
	 * Append a child to an element.
	 *
	 * @param elem The element to append to.
	 * @param child The element to be added as a child.
	 */
	function appendChild(elem, child) {
	    removeElement(child);
	    child.next = null;
	    child.parent = elem;
	    if (elem.children.push(child) > 1) {
	        var sibling = elem.children[elem.children.length - 2];
	        sibling.next = child;
	        child.prev = sibling;
	    }
	    else {
	        child.prev = null;
	    }
	}
	manipulation.appendChild = appendChild;
	/**
	 * Append an element after another.
	 *
	 * @param elem The element to append after.
	 * @param next The element be added.
	 */
	function append(elem, next) {
	    removeElement(next);
	    var parent = elem.parent;
	    var currNext = elem.next;
	    next.next = currNext;
	    next.prev = elem;
	    elem.next = next;
	    next.parent = parent;
	    if (currNext) {
	        currNext.prev = next;
	        if (parent) {
	            var childs = parent.children;
	            childs.splice(childs.lastIndexOf(currNext), 0, next);
	        }
	    }
	    else if (parent) {
	        parent.children.push(next);
	    }
	}
	manipulation.append = append;
	/**
	 * Prepend a child to an element.
	 *
	 * @param elem The element to prepend before.
	 * @param child The element to be added as a child.
	 */
	function prependChild(elem, child) {
	    removeElement(child);
	    child.parent = elem;
	    child.prev = null;
	    if (elem.children.unshift(child) !== 1) {
	        var sibling = elem.children[1];
	        sibling.prev = child;
	        child.next = sibling;
	    }
	    else {
	        child.next = null;
	    }
	}
	manipulation.prependChild = prependChild;
	/**
	 * Prepend an element before another.
	 *
	 * @param elem The element to prepend before.
	 * @param prev The element be added.
	 */
	function prepend(elem, prev) {
	    removeElement(prev);
	    var parent = elem.parent;
	    if (parent) {
	        var childs = parent.children;
	        childs.splice(childs.indexOf(elem), 0, prev);
	    }
	    if (elem.prev) {
	        elem.prev.next = prev;
	    }
	    prev.parent = parent;
	    prev.prev = elem.prev;
	    prev.next = elem;
	    elem.prev = prev;
	}
	manipulation.prepend = prepend;

	var querying = {};

	Object.defineProperty(querying, "__esModule", { value: true });
	querying.findAll = querying.existsOne = querying.findOne = querying.findOneChild = querying.find = querying.filter = void 0;
	var domhandler_1$3 = lib$4;
	/**
	 * Search a node and its children for nodes passing a test function.
	 *
	 * @param test Function to test nodes on.
	 * @param node Node to search. Will be included in the result set if it matches.
	 * @param recurse Also consider child nodes.
	 * @param limit Maximum number of nodes to return.
	 * @returns All nodes passing `test`.
	 */
	function filter$1(test, node, recurse, limit) {
	    if (recurse === void 0) { recurse = true; }
	    if (limit === void 0) { limit = Infinity; }
	    if (!Array.isArray(node))
	        node = [node];
	    return find(test, node, recurse, limit);
	}
	querying.filter = filter$1;
	/**
	 * Search an array of node and its children for nodes passing a test function.
	 *
	 * @param test Function to test nodes on.
	 * @param nodes Array of nodes to search.
	 * @param recurse Also consider child nodes.
	 * @param limit Maximum number of nodes to return.
	 * @returns All nodes passing `test`.
	 */
	function find(test, nodes, recurse, limit) {
	    var result = [];
	    for (var _i = 0, nodes_1 = nodes; _i < nodes_1.length; _i++) {
	        var elem = nodes_1[_i];
	        if (test(elem)) {
	            result.push(elem);
	            if (--limit <= 0)
	                break;
	        }
	        if (recurse && (0, domhandler_1$3.hasChildren)(elem) && elem.children.length > 0) {
	            var children = find(test, elem.children, recurse, limit);
	            result.push.apply(result, children);
	            limit -= children.length;
	            if (limit <= 0)
	                break;
	        }
	    }
	    return result;
	}
	querying.find = find;
	/**
	 * Finds the first element inside of an array that matches a test function.
	 *
	 * @param test Function to test nodes on.
	 * @param nodes Array of nodes to search.
	 * @returns The first node in the array that passes `test`.
	 */
	function findOneChild(test, nodes) {
	    return nodes.find(test);
	}
	querying.findOneChild = findOneChild;
	/**
	 * Finds one element in a tree that passes a test.
	 *
	 * @param test Function to test nodes on.
	 * @param nodes Array of nodes to search.
	 * @param recurse Also consider child nodes.
	 * @returns The first child node that passes `test`.
	 */
	function findOne(test, nodes, recurse) {
	    if (recurse === void 0) { recurse = true; }
	    var elem = null;
	    for (var i = 0; i < nodes.length && !elem; i++) {
	        var checked = nodes[i];
	        if (!(0, domhandler_1$3.isTag)(checked)) {
	            continue;
	        }
	        else if (test(checked)) {
	            elem = checked;
	        }
	        else if (recurse && checked.children.length > 0) {
	            elem = findOne(test, checked.children);
	        }
	    }
	    return elem;
	}
	querying.findOne = findOne;
	/**
	 * @param test Function to test nodes on.
	 * @param nodes Array of nodes to search.
	 * @returns Whether a tree of nodes contains at least one node passing a test.
	 */
	function existsOne(test, nodes) {
	    return nodes.some(function (checked) {
	        return (0, domhandler_1$3.isTag)(checked) &&
	            (test(checked) ||
	                (checked.children.length > 0 &&
	                    existsOne(test, checked.children)));
	    });
	}
	querying.existsOne = existsOne;
	/**
	 * Search and array of nodes and its children for nodes passing a test function.
	 *
	 * Same as `find`, only with less options, leading to reduced complexity.
	 *
	 * @param test Function to test nodes on.
	 * @param nodes Array of nodes to search.
	 * @returns All nodes passing `test`.
	 */
	function findAll(test, nodes) {
	    var _a;
	    var result = [];
	    var stack = nodes.filter(domhandler_1$3.isTag);
	    var elem;
	    while ((elem = stack.shift())) {
	        var children = (_a = elem.children) === null || _a === void 0 ? void 0 : _a.filter(domhandler_1$3.isTag);
	        if (children && children.length > 0) {
	            stack.unshift.apply(stack, children);
	        }
	        if (test(elem))
	            result.push(elem);
	    }
	    return result;
	}
	querying.findAll = findAll;

	var legacy = {};

	Object.defineProperty(legacy, "__esModule", { value: true });
	legacy.getElementsByTagType = legacy.getElementsByTagName = legacy.getElementById = legacy.getElements = legacy.testElement = void 0;
	var domhandler_1$2 = lib$4;
	var querying_1 = querying;
	var Checks = {
	    tag_name: function (name) {
	        if (typeof name === "function") {
	            return function (elem) { return (0, domhandler_1$2.isTag)(elem) && name(elem.name); };
	        }
	        else if (name === "*") {
	            return domhandler_1$2.isTag;
	        }
	        return function (elem) { return (0, domhandler_1$2.isTag)(elem) && elem.name === name; };
	    },
	    tag_type: function (type) {
	        if (typeof type === "function") {
	            return function (elem) { return type(elem.type); };
	        }
	        return function (elem) { return elem.type === type; };
	    },
	    tag_contains: function (data) {
	        if (typeof data === "function") {
	            return function (elem) { return (0, domhandler_1$2.isText)(elem) && data(elem.data); };
	        }
	        return function (elem) { return (0, domhandler_1$2.isText)(elem) && elem.data === data; };
	    },
	};
	/**
	 * @param attrib Attribute to check.
	 * @param value Attribute value to look for.
	 * @returns A function to check whether the a node has an attribute with a particular value.
	 */
	function getAttribCheck(attrib, value) {
	    if (typeof value === "function") {
	        return function (elem) { return (0, domhandler_1$2.isTag)(elem) && value(elem.attribs[attrib]); };
	    }
	    return function (elem) { return (0, domhandler_1$2.isTag)(elem) && elem.attribs[attrib] === value; };
	}
	/**
	 * @param a First function to combine.
	 * @param b Second function to combine.
	 * @returns A function taking a node and returning `true` if either
	 * of the input functions returns `true` for the node.
	 */
	function combineFuncs(a, b) {
	    return function (elem) { return a(elem) || b(elem); };
	}
	/**
	 * @param options An object describing nodes to look for.
	 * @returns A function executing all checks in `options` and returning `true`
	 * if any of them match a node.
	 */
	function compileTest(options) {
	    var funcs = Object.keys(options).map(function (key) {
	        var value = options[key];
	        return Object.prototype.hasOwnProperty.call(Checks, key)
	            ? Checks[key](value)
	            : getAttribCheck(key, value);
	    });
	    return funcs.length === 0 ? null : funcs.reduce(combineFuncs);
	}
	/**
	 * @param options An object describing nodes to look for.
	 * @param node The element to test.
	 * @returns Whether the element matches the description in `options`.
	 */
	function testElement(options, node) {
	    var test = compileTest(options);
	    return test ? test(node) : true;
	}
	legacy.testElement = testElement;
	/**
	 * @param options An object describing nodes to look for.
	 * @param nodes Nodes to search through.
	 * @param recurse Also consider child nodes.
	 * @param limit Maximum number of nodes to return.
	 * @returns All nodes that match `options`.
	 */
	function getElements$1(options, nodes, recurse, limit) {
	    if (limit === void 0) { limit = Infinity; }
	    var test = compileTest(options);
	    return test ? (0, querying_1.filter)(test, nodes, recurse, limit) : [];
	}
	legacy.getElements = getElements$1;
	/**
	 * @param id The unique ID attribute value to look for.
	 * @param nodes Nodes to search through.
	 * @param recurse Also consider child nodes.
	 * @returns The node with the supplied ID.
	 */
	function getElementById(id, nodes, recurse) {
	    if (recurse === void 0) { recurse = true; }
	    if (!Array.isArray(nodes))
	        nodes = [nodes];
	    return (0, querying_1.findOne)(getAttribCheck("id", id), nodes, recurse);
	}
	legacy.getElementById = getElementById;
	/**
	 * @param tagName Tag name to search for.
	 * @param nodes Nodes to search through.
	 * @param recurse Also consider child nodes.
	 * @param limit Maximum number of nodes to return.
	 * @returns All nodes with the supplied `tagName`.
	 */
	function getElementsByTagName(tagName, nodes, recurse, limit) {
	    if (recurse === void 0) { recurse = true; }
	    if (limit === void 0) { limit = Infinity; }
	    return (0, querying_1.filter)(Checks.tag_name(tagName), nodes, recurse, limit);
	}
	legacy.getElementsByTagName = getElementsByTagName;
	/**
	 * @param type Element type to look for.
	 * @param nodes Nodes to search through.
	 * @param recurse Also consider child nodes.
	 * @param limit Maximum number of nodes to return.
	 * @returns All nodes with the supplied `type`.
	 */
	function getElementsByTagType(type, nodes, recurse, limit) {
	    if (recurse === void 0) { recurse = true; }
	    if (limit === void 0) { limit = Infinity; }
	    return (0, querying_1.filter)(Checks.tag_type(type), nodes, recurse, limit);
	}
	legacy.getElementsByTagType = getElementsByTagType;

	var helpers = {};

	Object.defineProperty(helpers, "__esModule", { value: true });
	helpers.uniqueSort = helpers.compareDocumentPosition = helpers.removeSubsets = void 0;
	var domhandler_1$1 = lib$4;
	/**
	 * Given an array of nodes, remove any member that is contained by another.
	 *
	 * @param nodes Nodes to filter.
	 * @returns Remaining nodes that aren't subtrees of each other.
	 */
	function removeSubsets(nodes) {
	    var idx = nodes.length;
	    /*
	     * Check if each node (or one of its ancestors) is already contained in the
	     * array.
	     */
	    while (--idx >= 0) {
	        var node = nodes[idx];
	        /*
	         * Remove the node if it is not unique.
	         * We are going through the array from the end, so we only
	         * have to check nodes that preceed the node under consideration in the array.
	         */
	        if (idx > 0 && nodes.lastIndexOf(node, idx - 1) >= 0) {
	            nodes.splice(idx, 1);
	            continue;
	        }
	        for (var ancestor = node.parent; ancestor; ancestor = ancestor.parent) {
	            if (nodes.includes(ancestor)) {
	                nodes.splice(idx, 1);
	                break;
	            }
	        }
	    }
	    return nodes;
	}
	helpers.removeSubsets = removeSubsets;
	/**
	 * Compare the position of one node against another node in any other document.
	 * The return value is a bitmask with the following values:
	 *
	 * Document order:
	 * > There is an ordering, document order, defined on all the nodes in the
	 * > document corresponding to the order in which the first character of the
	 * > XML representation of each node occurs in the XML representation of the
	 * > document after expansion of general entities. Thus, the document element
	 * > node will be the first node. Element nodes occur before their children.
	 * > Thus, document order orders element nodes in order of the occurrence of
	 * > their start-tag in the XML (after expansion of entities). The attribute
	 * > nodes of an element occur after the element and before its children. The
	 * > relative order of attribute nodes is implementation-dependent./
	 *
	 * Source:
	 * http://www.w3.org/TR/DOM-Level-3-Core/glossary.html#dt-document-order
	 *
	 * @param nodeA The first node to use in the comparison
	 * @param nodeB The second node to use in the comparison
	 * @returns A bitmask describing the input nodes' relative position.
	 *
	 * See http://dom.spec.whatwg.org/#dom-node-comparedocumentposition for
	 * a description of these values.
	 */
	function compareDocumentPosition(nodeA, nodeB) {
	    var aParents = [];
	    var bParents = [];
	    if (nodeA === nodeB) {
	        return 0;
	    }
	    var current = (0, domhandler_1$1.hasChildren)(nodeA) ? nodeA : nodeA.parent;
	    while (current) {
	        aParents.unshift(current);
	        current = current.parent;
	    }
	    current = (0, domhandler_1$1.hasChildren)(nodeB) ? nodeB : nodeB.parent;
	    while (current) {
	        bParents.unshift(current);
	        current = current.parent;
	    }
	    var maxIdx = Math.min(aParents.length, bParents.length);
	    var idx = 0;
	    while (idx < maxIdx && aParents[idx] === bParents[idx]) {
	        idx++;
	    }
	    if (idx === 0) {
	        return 1 /* DISCONNECTED */;
	    }
	    var sharedParent = aParents[idx - 1];
	    var siblings = sharedParent.children;
	    var aSibling = aParents[idx];
	    var bSibling = bParents[idx];
	    if (siblings.indexOf(aSibling) > siblings.indexOf(bSibling)) {
	        if (sharedParent === nodeB) {
	            return 4 /* FOLLOWING */ | 16 /* CONTAINED_BY */;
	        }
	        return 4 /* FOLLOWING */;
	    }
	    if (sharedParent === nodeA) {
	        return 2 /* PRECEDING */ | 8 /* CONTAINS */;
	    }
	    return 2 /* PRECEDING */;
	}
	helpers.compareDocumentPosition = compareDocumentPosition;
	/**
	 * Sort an array of nodes based on their relative position in the document and
	 * remove any duplicate nodes. If the array contains nodes that do not belong
	 * to the same document, sort order is unspecified.
	 *
	 * @param nodes Array of DOM nodes.
	 * @returns Collection of unique nodes, sorted in document order.
	 */
	function uniqueSort(nodes) {
	    nodes = nodes.filter(function (node, i, arr) { return !arr.includes(node, i + 1); });
	    nodes.sort(function (a, b) {
	        var relative = compareDocumentPosition(a, b);
	        if (relative & 2 /* PRECEDING */) {
	            return -1;
	        }
	        else if (relative & 4 /* FOLLOWING */) {
	            return 1;
	        }
	        return 0;
	    });
	    return nodes;
	}
	helpers.uniqueSort = uniqueSort;

	var feeds = {};

	Object.defineProperty(feeds, "__esModule", { value: true });
	feeds.getFeed = void 0;
	var stringify_1$1 = stringify$5;
	var legacy_1 = legacy;
	/**
	 * Get the feed object from the root of a DOM tree.
	 *
	 * @param doc - The DOM to to extract the feed from.
	 * @returns The feed.
	 */
	function getFeed(doc) {
	    var feedRoot = getOneElement$1(isValidFeed$1, doc);
	    return !feedRoot
	        ? null
	        : feedRoot.name === "feed"
	            ? getAtomFeed(feedRoot)
	            : getRssFeed(feedRoot);
	}
	feeds.getFeed = getFeed;
	/**
	 * Parse an Atom feed.
	 *
	 * @param feedRoot The root of the feed.
	 * @returns The parsed feed.
	 */
	function getAtomFeed(feedRoot) {
	    var _a;
	    var childs = feedRoot.children;
	    var feed = {
	        type: "atom",
	        items: (0, legacy_1.getElementsByTagName)("entry", childs).map(function (item) {
	            var _a;
	            var children = item.children;
	            var entry = { media: getMediaElements$1(children) };
	            addConditionally$1(entry, "id", "id", children);
	            addConditionally$1(entry, "title", "title", children);
	            var href = (_a = getOneElement$1("link", children)) === null || _a === void 0 ? void 0 : _a.attribs.href;
	            if (href) {
	                entry.link = href;
	            }
	            var description = fetch$1("summary", children) || fetch$1("content", children);
	            if (description) {
	                entry.description = description;
	            }
	            var pubDate = fetch$1("updated", children);
	            if (pubDate) {
	                entry.pubDate = new Date(pubDate);
	            }
	            return entry;
	        }),
	    };
	    addConditionally$1(feed, "id", "id", childs);
	    addConditionally$1(feed, "title", "title", childs);
	    var href = (_a = getOneElement$1("link", childs)) === null || _a === void 0 ? void 0 : _a.attribs.href;
	    if (href) {
	        feed.link = href;
	    }
	    addConditionally$1(feed, "description", "subtitle", childs);
	    var updated = fetch$1("updated", childs);
	    if (updated) {
	        feed.updated = new Date(updated);
	    }
	    addConditionally$1(feed, "author", "email", childs, true);
	    return feed;
	}
	/**
	 * Parse a RSS feed.
	 *
	 * @param feedRoot The root of the feed.
	 * @returns The parsed feed.
	 */
	function getRssFeed(feedRoot) {
	    var _a, _b;
	    var childs = (_b = (_a = getOneElement$1("channel", feedRoot.children)) === null || _a === void 0 ? void 0 : _a.children) !== null && _b !== void 0 ? _b : [];
	    var feed = {
	        type: feedRoot.name.substr(0, 3),
	        id: "",
	        items: (0, legacy_1.getElementsByTagName)("item", feedRoot.children).map(function (item) {
	            var children = item.children;
	            var entry = { media: getMediaElements$1(children) };
	            addConditionally$1(entry, "id", "guid", children);
	            addConditionally$1(entry, "title", "title", children);
	            addConditionally$1(entry, "link", "link", children);
	            addConditionally$1(entry, "description", "description", children);
	            var pubDate = fetch$1("pubDate", children);
	            if (pubDate)
	                entry.pubDate = new Date(pubDate);
	            return entry;
	        }),
	    };
	    addConditionally$1(feed, "title", "title", childs);
	    addConditionally$1(feed, "link", "link", childs);
	    addConditionally$1(feed, "description", "description", childs);
	    var updated = fetch$1("lastBuildDate", childs);
	    if (updated) {
	        feed.updated = new Date(updated);
	    }
	    addConditionally$1(feed, "author", "managingEditor", childs, true);
	    return feed;
	}
	var MEDIA_KEYS_STRING = ["url", "type", "lang"];
	var MEDIA_KEYS_INT = [
	    "fileSize",
	    "bitrate",
	    "framerate",
	    "samplingrate",
	    "channels",
	    "duration",
	    "height",
	    "width",
	];
	/**
	 * Get all media elements of a feed item.
	 *
	 * @param where Nodes to search in.
	 * @returns Media elements.
	 */
	function getMediaElements$1(where) {
	    return (0, legacy_1.getElementsByTagName)("media:content", where).map(function (elem) {
	        var attribs = elem.attribs;
	        var media = {
	            medium: attribs.medium,
	            isDefault: !!attribs.isDefault,
	        };
	        for (var _i = 0, MEDIA_KEYS_STRING_1 = MEDIA_KEYS_STRING; _i < MEDIA_KEYS_STRING_1.length; _i++) {
	            var attrib = MEDIA_KEYS_STRING_1[_i];
	            if (attribs[attrib]) {
	                media[attrib] = attribs[attrib];
	            }
	        }
	        for (var _a = 0, MEDIA_KEYS_INT_1 = MEDIA_KEYS_INT; _a < MEDIA_KEYS_INT_1.length; _a++) {
	            var attrib = MEDIA_KEYS_INT_1[_a];
	            if (attribs[attrib]) {
	                media[attrib] = parseInt(attribs[attrib], 10);
	            }
	        }
	        if (attribs.expression) {
	            media.expression =
	                attribs.expression;
	        }
	        return media;
	    });
	}
	/**
	 * Get one element by tag name.
	 *
	 * @param tagName Tag name to look for
	 * @param node Node to search in
	 * @returns The element or null
	 */
	function getOneElement$1(tagName, node) {
	    return (0, legacy_1.getElementsByTagName)(tagName, node, true, 1)[0];
	}
	/**
	 * Get the text content of an element with a certain tag name.
	 *
	 * @param tagName Tag name to look for.
	 * @param where  Node to search in.
	 * @param recurse Whether to recurse into child nodes.
	 * @returns The text content of the element.
	 */
	function fetch$1(tagName, where, recurse) {
	    if (recurse === void 0) { recurse = false; }
	    return (0, stringify_1$1.textContent)((0, legacy_1.getElementsByTagName)(tagName, where, recurse, 1)).trim();
	}
	/**
	 * Adds a property to an object if it has a value.
	 *
	 * @param obj Object to be extended
	 * @param prop Property name
	 * @param tagName Tag name that contains the conditionally added property
	 * @param where Element to search for the property
	 * @param recurse Whether to recurse into child nodes.
	 */
	function addConditionally$1(obj, prop, tagName, where, recurse) {
	    if (recurse === void 0) { recurse = false; }
	    var val = fetch$1(tagName, where, recurse);
	    if (val)
	        obj[prop] = val;
	}
	/**
	 * Checks if an element is a feed root node.
	 *
	 * @param value The name of the element to check.
	 * @returns Whether an element is a feed root node.
	 */
	function isValidFeed$1(value) {
	    return value === "rss" || value === "feed" || value === "rdf:RDF";
	}

	(function (exports) {
		var __createBinding = (commonjsGlobal && commonjsGlobal.__createBinding) || (Object.create ? (function(o, m, k, k2) {
		    if (k2 === undefined) k2 = k;
		    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
		}) : (function(o, m, k, k2) {
		    if (k2 === undefined) k2 = k;
		    o[k2] = m[k];
		}));
		var __exportStar = (commonjsGlobal && commonjsGlobal.__exportStar) || function(m, exports) {
		    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
		};
		Object.defineProperty(exports, "__esModule", { value: true });
		exports.hasChildren = exports.isDocument = exports.isComment = exports.isText = exports.isCDATA = exports.isTag = void 0;
		__exportStar(stringify$5, exports);
		__exportStar(traversal, exports);
		__exportStar(manipulation, exports);
		__exportStar(querying, exports);
		__exportStar(legacy, exports);
		__exportStar(helpers, exports);
		__exportStar(feeds, exports);
		/** @deprecated Use these methods from `domhandler` directly. */
		var domhandler_1 = lib$4;
		Object.defineProperty(exports, "isTag", { enumerable: true, get: function () { return domhandler_1.isTag; } });
		Object.defineProperty(exports, "isCDATA", { enumerable: true, get: function () { return domhandler_1.isCDATA; } });
		Object.defineProperty(exports, "isText", { enumerable: true, get: function () { return domhandler_1.isText; } });
		Object.defineProperty(exports, "isComment", { enumerable: true, get: function () { return domhandler_1.isComment; } });
		Object.defineProperty(exports, "isDocument", { enumerable: true, get: function () { return domhandler_1.isDocument; } });
		Object.defineProperty(exports, "hasChildren", { enumerable: true, get: function () { return domhandler_1.hasChildren; } });
	} (lib$2));

	var __extends = (commonjsGlobal && commonjsGlobal.__extends) || (function () {
	    var extendStatics = function (d, b) {
	        extendStatics = Object.setPrototypeOf ||
	            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
	            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
	        return extendStatics(d, b);
	    };
	    return function (d, b) {
	        if (typeof b !== "function" && b !== null)
	            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
	        extendStatics(d, b);
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	})();
	var __createBinding = (commonjsGlobal && commonjsGlobal.__createBinding) || (Object.create ? (function(o, m, k, k2) {
	    if (k2 === undefined) k2 = k;
	    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
	}) : (function(o, m, k, k2) {
	    if (k2 === undefined) k2 = k;
	    o[k2] = m[k];
	}));
	var __setModuleDefault = (commonjsGlobal && commonjsGlobal.__setModuleDefault) || (Object.create ? (function(o, v) {
	    Object.defineProperty(o, "default", { enumerable: true, value: v });
	}) : function(o, v) {
	    o["default"] = v;
	});
	var __importStar = (commonjsGlobal && commonjsGlobal.__importStar) || function (mod) {
	    if (mod && mod.__esModule) return mod;
	    var result = {};
	    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
	    __setModuleDefault(result, mod);
	    return result;
	};
	var __importDefault = (commonjsGlobal && commonjsGlobal.__importDefault) || function (mod) {
	    return (mod && mod.__esModule) ? mod : { "default": mod };
	};
	Object.defineProperty(FeedHandler$1, "__esModule", { value: true });
	FeedHandler$1.parseFeed = FeedHandler$1.FeedHandler = void 0;
	var domhandler_1 = __importDefault(lib$4);
	var DomUtils = __importStar(lib$2);
	var Parser_1 = Parser$3;
	var FeedItemMediaMedium;
	(function (FeedItemMediaMedium) {
	    FeedItemMediaMedium[FeedItemMediaMedium["image"] = 0] = "image";
	    FeedItemMediaMedium[FeedItemMediaMedium["audio"] = 1] = "audio";
	    FeedItemMediaMedium[FeedItemMediaMedium["video"] = 2] = "video";
	    FeedItemMediaMedium[FeedItemMediaMedium["document"] = 3] = "document";
	    FeedItemMediaMedium[FeedItemMediaMedium["executable"] = 4] = "executable";
	})(FeedItemMediaMedium || (FeedItemMediaMedium = {}));
	var FeedItemMediaExpression;
	(function (FeedItemMediaExpression) {
	    FeedItemMediaExpression[FeedItemMediaExpression["sample"] = 0] = "sample";
	    FeedItemMediaExpression[FeedItemMediaExpression["full"] = 1] = "full";
	    FeedItemMediaExpression[FeedItemMediaExpression["nonstop"] = 2] = "nonstop";
	})(FeedItemMediaExpression || (FeedItemMediaExpression = {}));
	// TODO: Consume data as it is coming in
	var FeedHandler = /** @class */ (function (_super) {
	    __extends(FeedHandler, _super);
	    /**
	     *
	     * @param callback
	     * @param options
	     */
	    function FeedHandler(callback, options) {
	        var _this = this;
	        if (typeof callback === "object") {
	            callback = undefined;
	            options = callback;
	        }
	        _this = _super.call(this, callback, options) || this;
	        return _this;
	    }
	    FeedHandler.prototype.onend = function () {
	        var _a, _b;
	        var feedRoot = getOneElement(isValidFeed, this.dom);
	        if (!feedRoot) {
	            this.handleCallback(new Error("couldn't find root of feed"));
	            return;
	        }
	        var feed = {};
	        if (feedRoot.name === "feed") {
	            var childs = feedRoot.children;
	            feed.type = "atom";
	            addConditionally(feed, "id", "id", childs);
	            addConditionally(feed, "title", "title", childs);
	            var href = getAttribute("href", getOneElement("link", childs));
	            if (href) {
	                feed.link = href;
	            }
	            addConditionally(feed, "description", "subtitle", childs);
	            var updated = fetch("updated", childs);
	            if (updated) {
	                feed.updated = new Date(updated);
	            }
	            addConditionally(feed, "author", "email", childs, true);
	            feed.items = getElements("entry", childs).map(function (item) {
	                var entry = {};
	                var children = item.children;
	                addConditionally(entry, "id", "id", children);
	                addConditionally(entry, "title", "title", children);
	                var href = getAttribute("href", getOneElement("link", children));
	                if (href) {
	                    entry.link = href;
	                }
	                var description = fetch("summary", children) || fetch("content", children);
	                if (description) {
	                    entry.description = description;
	                }
	                var pubDate = fetch("updated", children);
	                if (pubDate) {
	                    entry.pubDate = new Date(pubDate);
	                }
	                entry.media = getMediaElements(children);
	                return entry;
	            });
	        }
	        else {
	            var childs = (_b = (_a = getOneElement("channel", feedRoot.children)) === null || _a === void 0 ? void 0 : _a.children) !== null && _b !== void 0 ? _b : [];
	            feed.type = feedRoot.name.substr(0, 3);
	            feed.id = "";
	            addConditionally(feed, "title", "title", childs);
	            addConditionally(feed, "link", "link", childs);
	            addConditionally(feed, "description", "description", childs);
	            var updated = fetch("lastBuildDate", childs);
	            if (updated) {
	                feed.updated = new Date(updated);
	            }
	            addConditionally(feed, "author", "managingEditor", childs, true);
	            feed.items = getElements("item", feedRoot.children).map(function (item) {
	                var entry = {};
	                var children = item.children;
	                addConditionally(entry, "id", "guid", children);
	                addConditionally(entry, "title", "title", children);
	                addConditionally(entry, "link", "link", children);
	                addConditionally(entry, "description", "description", children);
	                var pubDate = fetch("pubDate", children);
	                if (pubDate)
	                    entry.pubDate = new Date(pubDate);
	                entry.media = getMediaElements(children);
	                return entry;
	            });
	        }
	        this.feed = feed;
	        this.handleCallback(null);
	    };
	    return FeedHandler;
	}(domhandler_1.default));
	FeedHandler$1.FeedHandler = FeedHandler;
	function getMediaElements(where) {
	    return getElements("media:content", where).map(function (elem) {
	        var media = {
	            medium: elem.attribs.medium,
	            isDefault: !!elem.attribs.isDefault,
	        };
	        if (elem.attribs.url) {
	            media.url = elem.attribs.url;
	        }
	        if (elem.attribs.fileSize) {
	            media.fileSize = parseInt(elem.attribs.fileSize, 10);
	        }
	        if (elem.attribs.type) {
	            media.type = elem.attribs.type;
	        }
	        if (elem.attribs.expression) {
	            media.expression = elem.attribs
	                .expression;
	        }
	        if (elem.attribs.bitrate) {
	            media.bitrate = parseInt(elem.attribs.bitrate, 10);
	        }
	        if (elem.attribs.framerate) {
	            media.framerate = parseInt(elem.attribs.framerate, 10);
	        }
	        if (elem.attribs.samplingrate) {
	            media.samplingrate = parseInt(elem.attribs.samplingrate, 10);
	        }
	        if (elem.attribs.channels) {
	            media.channels = parseInt(elem.attribs.channels, 10);
	        }
	        if (elem.attribs.duration) {
	            media.duration = parseInt(elem.attribs.duration, 10);
	        }
	        if (elem.attribs.height) {
	            media.height = parseInt(elem.attribs.height, 10);
	        }
	        if (elem.attribs.width) {
	            media.width = parseInt(elem.attribs.width, 10);
	        }
	        if (elem.attribs.lang) {
	            media.lang = elem.attribs.lang;
	        }
	        return media;
	    });
	}
	function getElements(tagName, where) {
	    return DomUtils.getElementsByTagName(tagName, where, true);
	}
	function getOneElement(tagName, node) {
	    return DomUtils.getElementsByTagName(tagName, node, true, 1)[0];
	}
	function fetch(tagName, where, recurse) {
	    if (recurse === void 0) { recurse = false; }
	    return DomUtils.getText(DomUtils.getElementsByTagName(tagName, where, recurse, 1)).trim();
	}
	function getAttribute(name, elem) {
	    if (!elem) {
	        return null;
	    }
	    var attribs = elem.attribs;
	    return attribs[name];
	}
	function addConditionally(obj, prop, what, where, recurse) {
	    if (recurse === void 0) { recurse = false; }
	    var tmp = fetch(what, where, recurse);
	    if (tmp)
	        obj[prop] = tmp;
	}
	function isValidFeed(value) {
	    return value === "rss" || value === "feed" || value === "rdf:RDF";
	}
	/**
	 * Parse a feed.
	 *
	 * @param feed The feed that should be parsed, as a string.
	 * @param options Optionally, options for parsing. When using this option, you should set `xmlMode` to `true`.
	 */
	function parseFeed(feed, options) {
	    if (options === void 0) { options = { xmlMode: true }; }
	    var handler = new FeedHandler(options);
	    new Parser_1.Parser(handler, options).end(feed);
	    return handler.feed;
	}
	FeedHandler$1.parseFeed = parseFeed;

	(function (exports) {
		var __createBinding = (commonjsGlobal && commonjsGlobal.__createBinding) || (Object.create ? (function(o, m, k, k2) {
		    if (k2 === undefined) k2 = k;
		    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
		}) : (function(o, m, k, k2) {
		    if (k2 === undefined) k2 = k;
		    o[k2] = m[k];
		}));
		var __setModuleDefault = (commonjsGlobal && commonjsGlobal.__setModuleDefault) || (Object.create ? (function(o, v) {
		    Object.defineProperty(o, "default", { enumerable: true, value: v });
		}) : function(o, v) {
		    o["default"] = v;
		});
		var __importStar = (commonjsGlobal && commonjsGlobal.__importStar) || function (mod) {
		    if (mod && mod.__esModule) return mod;
		    var result = {};
		    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
		    __setModuleDefault(result, mod);
		    return result;
		};
		var __exportStar = (commonjsGlobal && commonjsGlobal.__exportStar) || function(m, exports) {
		    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
		};
		var __importDefault = (commonjsGlobal && commonjsGlobal.__importDefault) || function (mod) {
		    return (mod && mod.__esModule) ? mod : { "default": mod };
		};
		Object.defineProperty(exports, "__esModule", { value: true });
		exports.RssHandler = exports.DefaultHandler = exports.DomUtils = exports.ElementType = exports.Tokenizer = exports.createDomStream = exports.parseDOM = exports.parseDocument = exports.DomHandler = exports.Parser = void 0;
		var Parser_1 = Parser$3;
		Object.defineProperty(exports, "Parser", { enumerable: true, get: function () { return Parser_1.Parser; } });
		var domhandler_1 = lib$4;
		Object.defineProperty(exports, "DomHandler", { enumerable: true, get: function () { return domhandler_1.DomHandler; } });
		Object.defineProperty(exports, "DefaultHandler", { enumerable: true, get: function () { return domhandler_1.DomHandler; } });
		// Helper methods
		/**
		 * Parses the data, returns the resulting document.
		 *
		 * @param data The data that should be parsed.
		 * @param options Optional options for the parser and DOM builder.
		 */
		function parseDocument(data, options) {
		    var handler = new domhandler_1.DomHandler(undefined, options);
		    new Parser_1.Parser(handler, options).end(data);
		    return handler.root;
		}
		exports.parseDocument = parseDocument;
		/**
		 * Parses data, returns an array of the root nodes.
		 *
		 * Note that the root nodes still have a `Document` node as their parent.
		 * Use `parseDocument` to get the `Document` node instead.
		 *
		 * @param data The data that should be parsed.
		 * @param options Optional options for the parser and DOM builder.
		 * @deprecated Use `parseDocument` instead.
		 */
		function parseDOM(data, options) {
		    return parseDocument(data, options).children;
		}
		exports.parseDOM = parseDOM;
		/**
		 * Creates a parser instance, with an attached DOM handler.
		 *
		 * @param cb A callback that will be called once parsing has been completed.
		 * @param options Optional options for the parser and DOM builder.
		 * @param elementCb An optional callback that will be called every time a tag has been completed inside of the DOM.
		 */
		function createDomStream(cb, options, elementCb) {
		    var handler = new domhandler_1.DomHandler(cb, options, elementCb);
		    return new Parser_1.Parser(handler, options);
		}
		exports.createDomStream = createDomStream;
		var Tokenizer_1 = Tokenizer$1;
		Object.defineProperty(exports, "Tokenizer", { enumerable: true, get: function () { return __importDefault(Tokenizer_1).default; } });
		var ElementType = __importStar(lib$3);
		exports.ElementType = ElementType;
		/*
		 * All of the following exports exist for backwards-compatibility.
		 * They should probably be removed eventually.
		 */
		__exportStar(FeedHandler$1, exports);
		exports.DomUtils = __importStar(lib$2);
		var FeedHandler_1 = FeedHandler$1;
		Object.defineProperty(exports, "RssHandler", { enumerable: true, get: function () { return FeedHandler_1.FeedHandler; } });
	} (lib$5));

	var escapeStringRegexp$1 = string => {
		if (typeof string !== 'string') {
			throw new TypeError('Expected a string');
		}

		// Escape characters with special meaning either inside or outside character sets.
		// Use a simple backslash escape when it’s always valid, and a \unnnn escape when the simpler form would be disallowed by Unicode patterns’ stricter grammar.
		return string
			.replace(/[|\\{}()[\]^$+*?.]/g, '\\$&')
			.replace(/-/g, '\\x2d');
	};

	var isPlainObject$2 = {};

	Object.defineProperty(isPlainObject$2, '__esModule', { value: true });

	/*!
	 * is-plain-object <https://github.com/jonschlinkert/is-plain-object>
	 *
	 * Copyright (c) 2014-2017, Jon Schlinkert.
	 * Released under the MIT License.
	 */

	function isObject$1(o) {
	  return Object.prototype.toString.call(o) === '[object Object]';
	}

	function isPlainObject$1(o) {
	  var ctor,prot;

	  if (isObject$1(o) === false) return false;

	  // If has modified constructor
	  ctor = o.constructor;
	  if (ctor === undefined) return true;

	  // If has modified prototype
	  prot = ctor.prototype;
	  if (isObject$1(prot) === false) return false;

	  // If constructor does not have an Object-specific method
	  if (prot.hasOwnProperty('isPrototypeOf') === false) {
	    return false;
	  }

	  // Most likely a plain Object
	  return true;
	}

	isPlainObject$2.isPlainObject = isPlainObject$1;

	var isMergeableObject = function isMergeableObject(value) {
		return isNonNullObject(value)
			&& !isSpecial(value)
	};

	function isNonNullObject(value) {
		return !!value && typeof value === 'object'
	}

	function isSpecial(value) {
		var stringValue = Object.prototype.toString.call(value);

		return stringValue === '[object RegExp]'
			|| stringValue === '[object Date]'
			|| isReactElement(value)
	}

	// see https://github.com/facebook/react/blob/b5ac963fb791d1298e7f396236383bc955f916c1/src/isomorphic/classic/element/ReactElement.js#L21-L25
	var canUseSymbol = typeof Symbol === 'function' && Symbol.for;
	var REACT_ELEMENT_TYPE = canUseSymbol ? Symbol.for('react.element') : 0xeac7;

	function isReactElement(value) {
		return value.$$typeof === REACT_ELEMENT_TYPE
	}

	function emptyTarget(val) {
		return Array.isArray(val) ? [] : {}
	}

	function cloneUnlessOtherwiseSpecified(value, options) {
		return (options.clone !== false && options.isMergeableObject(value))
			? deepmerge$1(emptyTarget(value), value, options)
			: value
	}

	function defaultArrayMerge(target, source, options) {
		return target.concat(source).map(function(element) {
			return cloneUnlessOtherwiseSpecified(element, options)
		})
	}

	function getMergeFunction(key, options) {
		if (!options.customMerge) {
			return deepmerge$1
		}
		var customMerge = options.customMerge(key);
		return typeof customMerge === 'function' ? customMerge : deepmerge$1
	}

	function getEnumerableOwnPropertySymbols(target) {
		return Object.getOwnPropertySymbols
			? Object.getOwnPropertySymbols(target).filter(function(symbol) {
				return target.propertyIsEnumerable(symbol)
			})
			: []
	}

	function getKeys(target) {
		return Object.keys(target).concat(getEnumerableOwnPropertySymbols(target))
	}

	function propertyIsOnObject(object, property) {
		try {
			return property in object
		} catch(_) {
			return false
		}
	}

	// Protects from prototype poisoning and unexpected merging up the prototype chain.
	function propertyIsUnsafe(target, key) {
		return propertyIsOnObject(target, key) // Properties are safe to merge if they don't exist in the target yet,
			&& !(Object.hasOwnProperty.call(target, key) // unsafe if they exist up the prototype chain,
				&& Object.propertyIsEnumerable.call(target, key)) // and also unsafe if they're nonenumerable.
	}

	function mergeObject(target, source, options) {
		var destination = {};
		if (options.isMergeableObject(target)) {
			getKeys(target).forEach(function(key) {
				destination[key] = cloneUnlessOtherwiseSpecified(target[key], options);
			});
		}
		getKeys(source).forEach(function(key) {
			if (propertyIsUnsafe(target, key)) {
				return
			}

			if (propertyIsOnObject(target, key) && options.isMergeableObject(source[key])) {
				destination[key] = getMergeFunction(key, options)(target[key], source[key], options);
			} else {
				destination[key] = cloneUnlessOtherwiseSpecified(source[key], options);
			}
		});
		return destination
	}

	function deepmerge$1(target, source, options) {
		options = options || {};
		options.arrayMerge = options.arrayMerge || defaultArrayMerge;
		options.isMergeableObject = options.isMergeableObject || isMergeableObject;
		// cloneUnlessOtherwiseSpecified is added to `options` so that custom arrayMerge()
		// implementations can use it. The caller may not replace it.
		options.cloneUnlessOtherwiseSpecified = cloneUnlessOtherwiseSpecified;

		var sourceIsArray = Array.isArray(source);
		var targetIsArray = Array.isArray(target);
		var sourceAndTargetTypesMatch = sourceIsArray === targetIsArray;

		if (!sourceAndTargetTypesMatch) {
			return cloneUnlessOtherwiseSpecified(source, options)
		} else if (sourceIsArray) {
			return options.arrayMerge(target, source, options)
		} else {
			return mergeObject(target, source, options)
		}
	}

	deepmerge$1.all = function deepmergeAll(array, options) {
		if (!Array.isArray(array)) {
			throw new Error('first argument should be an array')
		}

		return array.reduce(function(prev, next) {
			return deepmerge$1(prev, next, options)
		}, {})
	};

	var deepmerge_1 = deepmerge$1;

	var cjs = deepmerge_1;

	var parseSrcset$1 = {exports: {}};

	/**
	 * Srcset Parser
	 *
	 * By Alex Bell |  MIT License
	 *
	 * JS Parser for the string value that appears in markup <img srcset="here">
	 *
	 * @returns Array [{url: _, d: _, w: _, h:_}, ...]
	 *
	 * Based super duper closely on the reference algorithm at:
	 * https://html.spec.whatwg.org/multipage/embedded-content.html#parse-a-srcset-attribute
	 *
	 * Most comments are copied in directly from the spec
	 * (except for comments in parens).
	 */

	(function (module) {
		(function (root, factory) {
			if (module.exports) {
				// Node. Does not work with strict CommonJS, but
				// only CommonJS-like environments that support module.exports,
				// like Node.
				module.exports = factory();
			} else {
				// Browser globals (root is window)
				root.parseSrcset = factory();
			}
		}(commonjsGlobal, function () {

			// 1. Let input be the value passed to this algorithm.
			return function (input) {

				// UTILITY FUNCTIONS

				// Manual is faster than RegEx
				// http://bjorn.tipling.com/state-and-regular-expressions-in-javascript
				// http://jsperf.com/whitespace-character/5
				function isSpace(c) {
					return (c === "\u0020" || // space
					c === "\u0009" || // horizontal tab
					c === "\u000A" || // new line
					c === "\u000C" || // form feed
					c === "\u000D");  // carriage return
				}

				function collectCharacters(regEx) {
					var chars,
						match = regEx.exec(input.substring(pos));
					if (match) {
						chars = match[ 0 ];
						pos += chars.length;
						return chars;
					}
				}

				var inputLength = input.length,

					// (Don't use \s, to avoid matching non-breaking space)
					regexLeadingSpaces = /^[ \t\n\r\u000c]+/,
					regexLeadingCommasOrSpaces = /^[, \t\n\r\u000c]+/,
					regexLeadingNotSpaces = /^[^ \t\n\r\u000c]+/,
					regexTrailingCommas = /[,]+$/,
					regexNonNegativeInteger = /^\d+$/,

					// ( Positive or negative or unsigned integers or decimals, without or without exponents.
					// Must include at least one digit.
					// According to spec tests any decimal point must be followed by a digit.
					// No leading plus sign is allowed.)
					// https://html.spec.whatwg.org/multipage/infrastructure.html#valid-floating-point-number
					regexFloatingPoint = /^-?(?:[0-9]+|[0-9]*\.[0-9]+)(?:[eE][+-]?[0-9]+)?$/,

					url,
					descriptors,
					currentDescriptor,
					state,
					c,

					// 2. Let position be a pointer into input, initially pointing at the start
					//    of the string.
					pos = 0,

					// 3. Let candidates be an initially empty source set.
					candidates = [];

				// 4. Splitting loop: Collect a sequence of characters that are space
				//    characters or U+002C COMMA characters. If any U+002C COMMA characters
				//    were collected, that is a parse error.
				while (true) {
					collectCharacters(regexLeadingCommasOrSpaces);

					// 5. If position is past the end of input, return candidates and abort these steps.
					if (pos >= inputLength) {
						return candidates; // (we're done, this is the sole return path)
					}

					// 6. Collect a sequence of characters that are not space characters,
					//    and let that be url.
					url = collectCharacters(regexLeadingNotSpaces);

					// 7. Let descriptors be a new empty list.
					descriptors = [];

					// 8. If url ends with a U+002C COMMA character (,), follow these substeps:
					//		(1). Remove all trailing U+002C COMMA characters from url. If this removed
					//         more than one character, that is a parse error.
					if (url.slice(-1) === ",") {
						url = url.replace(regexTrailingCommas, "");
						// (Jump ahead to step 9 to skip tokenization and just push the candidate).
						parseDescriptors();

						//	Otherwise, follow these substeps:
					} else {
						tokenize();
					} // (close else of step 8)

					// 16. Return to the step labeled splitting loop.
				} // (Close of big while loop.)

				/**
				 * Tokenizes descriptor properties prior to parsing
				 * Returns undefined.
				 */
				function tokenize() {

					// 8.1. Descriptor tokeniser: Skip whitespace
					collectCharacters(regexLeadingSpaces);

					// 8.2. Let current descriptor be the empty string.
					currentDescriptor = "";

					// 8.3. Let state be in descriptor.
					state = "in descriptor";

					while (true) {

						// 8.4. Let c be the character at position.
						c = input.charAt(pos);

						//  Do the following depending on the value of state.
						//  For the purpose of this step, "EOF" is a special character representing
						//  that position is past the end of input.

						// In descriptor
						if (state === "in descriptor") {
							// Do the following, depending on the value of c:

							// Space character
							// If current descriptor is not empty, append current descriptor to
							// descriptors and let current descriptor be the empty string.
							// Set state to after descriptor.
							if (isSpace(c)) {
								if (currentDescriptor) {
									descriptors.push(currentDescriptor);
									currentDescriptor = "";
									state = "after descriptor";
								}

								// U+002C COMMA (,)
								// Advance position to the next character in input. If current descriptor
								// is not empty, append current descriptor to descriptors. Jump to the step
								// labeled descriptor parser.
							} else if (c === ",") {
								pos += 1;
								if (currentDescriptor) {
									descriptors.push(currentDescriptor);
								}
								parseDescriptors();
								return;

								// U+0028 LEFT PARENTHESIS (()
								// Append c to current descriptor. Set state to in parens.
							} else if (c === "\u0028") {
								currentDescriptor = currentDescriptor + c;
								state = "in parens";

								// EOF
								// If current descriptor is not empty, append current descriptor to
								// descriptors. Jump to the step labeled descriptor parser.
							} else if (c === "") {
								if (currentDescriptor) {
									descriptors.push(currentDescriptor);
								}
								parseDescriptors();
								return;

								// Anything else
								// Append c to current descriptor.
							} else {
								currentDescriptor = currentDescriptor + c;
							}
							// (end "in descriptor"

							// In parens
						} else if (state === "in parens") {

							// U+0029 RIGHT PARENTHESIS ())
							// Append c to current descriptor. Set state to in descriptor.
							if (c === ")") {
								currentDescriptor = currentDescriptor + c;
								state = "in descriptor";

								// EOF
								// Append current descriptor to descriptors. Jump to the step labeled
								// descriptor parser.
							} else if (c === "") {
								descriptors.push(currentDescriptor);
								parseDescriptors();
								return;

								// Anything else
								// Append c to current descriptor.
							} else {
								currentDescriptor = currentDescriptor + c;
							}

							// After descriptor
						} else if (state === "after descriptor") {

							// Do the following, depending on the value of c:
							// Space character: Stay in this state.
							if (isSpace(c)) ; else if (c === "") {
								parseDescriptors();
								return;

								// Anything else
								// Set state to in descriptor. Set position to the previous character in input.
							} else {
								state = "in descriptor";
								pos -= 1;

							}
						}

						// Advance position to the next character in input.
						pos += 1;

						// Repeat this step.
					} // (close while true loop)
				}

				/**
				 * Adds descriptor properties to a candidate, pushes to the candidates array
				 * @return undefined
				 */
				// Declared outside of the while loop so that it's only created once.
				function parseDescriptors() {

					// 9. Descriptor parser: Let error be no.
					var pError = false,

						// 10. Let width be absent.
						// 11. Let density be absent.
						// 12. Let future-compat-h be absent. (We're implementing it now as h)
						w, d, h, i,
						candidate = {},
						desc, lastChar, value, intVal, floatVal;

					// 13. For each descriptor in descriptors, run the appropriate set of steps
					// from the following list:
					for (i = 0 ; i < descriptors.length; i++) {
						desc = descriptors[ i ];

						lastChar = desc[ desc.length - 1 ];
						value = desc.substring(0, desc.length - 1);
						intVal = parseInt(value, 10);
						floatVal = parseFloat(value);

						// If the descriptor consists of a valid non-negative integer followed by
						// a U+0077 LATIN SMALL LETTER W character
						if (regexNonNegativeInteger.test(value) && (lastChar === "w")) {

							// If width and density are not both absent, then let error be yes.
							if (w || d) {pError = true;}

							// Apply the rules for parsing non-negative integers to the descriptor.
							// If the result is zero, let error be yes.
							// Otherwise, let width be the result.
							if (intVal === 0) {pError = true;} else {w = intVal;}

							// If the descriptor consists of a valid floating-point number followed by
							// a U+0078 LATIN SMALL LETTER X character
						} else if (regexFloatingPoint.test(value) && (lastChar === "x")) {

							// If width, density and future-compat-h are not all absent, then let error
							// be yes.
							if (w || d || h) {pError = true;}

							// Apply the rules for parsing floating-point number values to the descriptor.
							// If the result is less than zero, let error be yes. Otherwise, let density
							// be the result.
							if (floatVal < 0) {pError = true;} else {d = floatVal;}

							// If the descriptor consists of a valid non-negative integer followed by
							// a U+0068 LATIN SMALL LETTER H character
						} else if (regexNonNegativeInteger.test(value) && (lastChar === "h")) {

							// If height and density are not both absent, then let error be yes.
							if (h || d) {pError = true;}

							// Apply the rules for parsing non-negative integers to the descriptor.
							// If the result is zero, let error be yes. Otherwise, let future-compat-h
							// be the result.
							if (intVal === 0) {pError = true;} else {h = intVal;}

							// Anything else, Let error be yes.
						} else {pError = true;}
					} // (close step 13 for loop)

					// 15. If error is still no, then append a new image source to candidates whose
					// URL is url, associated with a width width if not absent and a pixel
					// density density if not absent. Otherwise, there is a parse error.
					if (!pError) {
						candidate.url = url;
						if (w) { candidate.w = w;}
						if (d) { candidate.d = d;}
						if (h) { candidate.h = h;}
						candidates.push(candidate);
					} else if (console && console.log) {
						console.log("Invalid srcset descriptor found in '" +
							input + "' at '" + desc + "'.");
					}
				} // (close parseDescriptors fn)

			}
		}));
	} (parseSrcset$1));

	var picocolors_browser = {exports: {}};

	var x=String;
	var create=function() {return {isColorSupported:false,reset:x,bold:x,dim:x,italic:x,underline:x,inverse:x,hidden:x,strikethrough:x,black:x,red:x,green:x,yellow:x,blue:x,magenta:x,cyan:x,white:x,gray:x,bgBlack:x,bgRed:x,bgGreen:x,bgYellow:x,bgBlue:x,bgMagenta:x,bgCyan:x,bgWhite:x}};
	picocolors_browser.exports=create();
	picocolors_browser.exports.createColors = create;

	var _nodeResolve_empty = {};

	var _nodeResolve_empty$1 = /*#__PURE__*/Object.freeze({
		__proto__: null,
		'default': _nodeResolve_empty
	});

	var require$$2 = /*@__PURE__*/getAugmentedNamespace(_nodeResolve_empty$1);

	let pico = picocolors_browser.exports;

	let terminalHighlight$1 = require$$2;

	class CssSyntaxError$3 extends Error {
	  constructor(message, line, column, source, file, plugin) {
	    super(message);
	    this.name = 'CssSyntaxError';
	    this.reason = message;

	    if (file) {
	      this.file = file;
	    }
	    if (source) {
	      this.source = source;
	    }
	    if (plugin) {
	      this.plugin = plugin;
	    }
	    if (typeof line !== 'undefined' && typeof column !== 'undefined') {
	      if (typeof line === 'number') {
	        this.line = line;
	        this.column = column;
	      } else {
	        this.line = line.line;
	        this.column = line.column;
	        this.endLine = column.line;
	        this.endColumn = column.column;
	      }
	    }

	    this.setMessage();

	    if (Error.captureStackTrace) {
	      Error.captureStackTrace(this, CssSyntaxError$3);
	    }
	  }

	  setMessage() {
	    this.message = this.plugin ? this.plugin + ': ' : '';
	    this.message += this.file ? this.file : '<css input>';
	    if (typeof this.line !== 'undefined') {
	      this.message += ':' + this.line + ':' + this.column;
	    }
	    this.message += ': ' + this.reason;
	  }

	  showSourceCode(color) {
	    if (!this.source) return ''

	    let css = this.source;
	    if (color == null) color = pico.isColorSupported;
	    if (terminalHighlight$1) {
	      if (color) css = terminalHighlight$1(css);
	    }

	    let lines = css.split(/\r?\n/);
	    let start = Math.max(this.line - 3, 0);
	    let end = Math.min(this.line + 2, lines.length);

	    let maxWidth = String(end).length;

	    let mark, aside;
	    if (color) {
	      let { bold, red, gray } = pico.createColors(true);
	      mark = text => bold(red(text));
	      aside = text => gray(text);
	    } else {
	      mark = aside = str => str;
	    }

	    return lines
	      .slice(start, end)
	      .map((line, index) => {
	        let number = start + 1 + index;
	        let gutter = ' ' + (' ' + number).slice(-maxWidth) + ' | ';
	        if (number === this.line) {
	          let spacing =
	            aside(gutter.replace(/\d/g, ' ')) +
	            line.slice(0, this.column - 1).replace(/[^\t]/g, ' ');
	          return mark('>') + aside(gutter) + line + '\n ' + spacing + mark('^')
	        }
	        return ' ' + aside(gutter) + line
	      })
	      .join('\n')
	  }

	  toString() {
	    let code = this.showSourceCode();
	    if (code) {
	      code = '\n\n' + code + '\n';
	    }
	    return this.name + ': ' + this.message + code
	  }
	}

	var cssSyntaxError = CssSyntaxError$3;
	CssSyntaxError$3.default = CssSyntaxError$3;

	var symbols = {};

	symbols.isClean = Symbol('isClean');

	symbols.my = Symbol('my');

	const DEFAULT_RAW = {
	  colon: ': ',
	  indent: '    ',
	  beforeDecl: '\n',
	  beforeRule: '\n',
	  beforeOpen: ' ',
	  beforeClose: '\n',
	  beforeComment: '\n',
	  after: '\n',
	  emptyBody: '',
	  commentLeft: ' ',
	  commentRight: ' ',
	  semicolon: false
	};

	function capitalize$1(str) {
	  return str[0].toUpperCase() + str.slice(1)
	}

	class Stringifier$2 {
	  constructor(builder) {
	    this.builder = builder;
	  }

	  stringify(node, semicolon) {
	    /* c8 ignore start */
	    if (!this[node.type]) {
	      throw new Error(
	        'Unknown AST node type ' +
	          node.type +
	          '. ' +
	          'Maybe you need to change PostCSS stringifier.'
	      )
	    }
	    /* c8 ignore stop */
	    this[node.type](node, semicolon);
	  }

	  document(node) {
	    this.body(node);
	  }

	  root(node) {
	    this.body(node);
	    if (node.raws.after) this.builder(node.raws.after);
	  }

	  comment(node) {
	    let left = this.raw(node, 'left', 'commentLeft');
	    let right = this.raw(node, 'right', 'commentRight');
	    this.builder('/*' + left + node.text + right + '*/', node);
	  }

	  decl(node, semicolon) {
	    let between = this.raw(node, 'between', 'colon');
	    let string = node.prop + between + this.rawValue(node, 'value');

	    if (node.important) {
	      string += node.raws.important || ' !important';
	    }

	    if (semicolon) string += ';';
	    this.builder(string, node);
	  }

	  rule(node) {
	    this.block(node, this.rawValue(node, 'selector'));
	    if (node.raws.ownSemicolon) {
	      this.builder(node.raws.ownSemicolon, node, 'end');
	    }
	  }

	  atrule(node, semicolon) {
	    let name = '@' + node.name;
	    let params = node.params ? this.rawValue(node, 'params') : '';

	    if (typeof node.raws.afterName !== 'undefined') {
	      name += node.raws.afterName;
	    } else if (params) {
	      name += ' ';
	    }

	    if (node.nodes) {
	      this.block(node, name + params);
	    } else {
	      let end = (node.raws.between || '') + (semicolon ? ';' : '');
	      this.builder(name + params + end, node);
	    }
	  }

	  body(node) {
	    let last = node.nodes.length - 1;
	    while (last > 0) {
	      if (node.nodes[last].type !== 'comment') break
	      last -= 1;
	    }

	    let semicolon = this.raw(node, 'semicolon');
	    for (let i = 0; i < node.nodes.length; i++) {
	      let child = node.nodes[i];
	      let before = this.raw(child, 'before');
	      if (before) this.builder(before);
	      this.stringify(child, last !== i || semicolon);
	    }
	  }

	  block(node, start) {
	    let between = this.raw(node, 'between', 'beforeOpen');
	    this.builder(start + between + '{', node, 'start');

	    let after;
	    if (node.nodes && node.nodes.length) {
	      this.body(node);
	      after = this.raw(node, 'after');
	    } else {
	      after = this.raw(node, 'after', 'emptyBody');
	    }

	    if (after) this.builder(after);
	    this.builder('}', node, 'end');
	  }

	  raw(node, own, detect) {
	    let value;
	    if (!detect) detect = own;

	    // Already had
	    if (own) {
	      value = node.raws[own];
	      if (typeof value !== 'undefined') return value
	    }

	    let parent = node.parent;

	    if (detect === 'before') {
	      // Hack for first rule in CSS
	      if (!parent || (parent.type === 'root' && parent.first === node)) {
	        return ''
	      }

	      // `root` nodes in `document` should use only their own raws
	      if (parent && parent.type === 'document') {
	        return ''
	      }
	    }

	    // Floating child without parent
	    if (!parent) return DEFAULT_RAW[detect]

	    // Detect style by other nodes
	    let root = node.root();
	    if (!root.rawCache) root.rawCache = {};
	    if (typeof root.rawCache[detect] !== 'undefined') {
	      return root.rawCache[detect]
	    }

	    if (detect === 'before' || detect === 'after') {
	      return this.beforeAfter(node, detect)
	    } else {
	      let method = 'raw' + capitalize$1(detect);
	      if (this[method]) {
	        value = this[method](root, node);
	      } else {
	        root.walk(i => {
	          value = i.raws[own];
	          if (typeof value !== 'undefined') return false
	        });
	      }
	    }

	    if (typeof value === 'undefined') value = DEFAULT_RAW[detect];

	    root.rawCache[detect] = value;
	    return value
	  }

	  rawSemicolon(root) {
	    let value;
	    root.walk(i => {
	      if (i.nodes && i.nodes.length && i.last.type === 'decl') {
	        value = i.raws.semicolon;
	        if (typeof value !== 'undefined') return false
	      }
	    });
	    return value
	  }

	  rawEmptyBody(root) {
	    let value;
	    root.walk(i => {
	      if (i.nodes && i.nodes.length === 0) {
	        value = i.raws.after;
	        if (typeof value !== 'undefined') return false
	      }
	    });
	    return value
	  }

	  rawIndent(root) {
	    if (root.raws.indent) return root.raws.indent
	    let value;
	    root.walk(i => {
	      let p = i.parent;
	      if (p && p !== root && p.parent && p.parent === root) {
	        if (typeof i.raws.before !== 'undefined') {
	          let parts = i.raws.before.split('\n');
	          value = parts[parts.length - 1];
	          value = value.replace(/\S/g, '');
	          return false
	        }
	      }
	    });
	    return value
	  }

	  rawBeforeComment(root, node) {
	    let value;
	    root.walkComments(i => {
	      if (typeof i.raws.before !== 'undefined') {
	        value = i.raws.before;
	        if (value.includes('\n')) {
	          value = value.replace(/[^\n]+$/, '');
	        }
	        return false
	      }
	    });
	    if (typeof value === 'undefined') {
	      value = this.raw(node, null, 'beforeDecl');
	    } else if (value) {
	      value = value.replace(/\S/g, '');
	    }
	    return value
	  }

	  rawBeforeDecl(root, node) {
	    let value;
	    root.walkDecls(i => {
	      if (typeof i.raws.before !== 'undefined') {
	        value = i.raws.before;
	        if (value.includes('\n')) {
	          value = value.replace(/[^\n]+$/, '');
	        }
	        return false
	      }
	    });
	    if (typeof value === 'undefined') {
	      value = this.raw(node, null, 'beforeRule');
	    } else if (value) {
	      value = value.replace(/\S/g, '');
	    }
	    return value
	  }

	  rawBeforeRule(root) {
	    let value;
	    root.walk(i => {
	      if (i.nodes && (i.parent !== root || root.first !== i)) {
	        if (typeof i.raws.before !== 'undefined') {
	          value = i.raws.before;
	          if (value.includes('\n')) {
	            value = value.replace(/[^\n]+$/, '');
	          }
	          return false
	        }
	      }
	    });
	    if (value) value = value.replace(/\S/g, '');
	    return value
	  }

	  rawBeforeClose(root) {
	    let value;
	    root.walk(i => {
	      if (i.nodes && i.nodes.length > 0) {
	        if (typeof i.raws.after !== 'undefined') {
	          value = i.raws.after;
	          if (value.includes('\n')) {
	            value = value.replace(/[^\n]+$/, '');
	          }
	          return false
	        }
	      }
	    });
	    if (value) value = value.replace(/\S/g, '');
	    return value
	  }

	  rawBeforeOpen(root) {
	    let value;
	    root.walk(i => {
	      if (i.type !== 'decl') {
	        value = i.raws.between;
	        if (typeof value !== 'undefined') return false
	      }
	    });
	    return value
	  }

	  rawColon(root) {
	    let value;
	    root.walkDecls(i => {
	      if (typeof i.raws.between !== 'undefined') {
	        value = i.raws.between.replace(/[^\s:]/g, '');
	        return false
	      }
	    });
	    return value
	  }

	  beforeAfter(node, detect) {
	    let value;
	    if (node.type === 'decl') {
	      value = this.raw(node, null, 'beforeDecl');
	    } else if (node.type === 'comment') {
	      value = this.raw(node, null, 'beforeComment');
	    } else if (detect === 'before') {
	      value = this.raw(node, null, 'beforeRule');
	    } else {
	      value = this.raw(node, null, 'beforeClose');
	    }

	    let buf = node.parent;
	    let depth = 0;
	    while (buf && buf.type !== 'root') {
	      depth += 1;
	      buf = buf.parent;
	    }

	    if (value.includes('\n')) {
	      let indent = this.raw(node, null, 'indent');
	      if (indent.length) {
	        for (let step = 0; step < depth; step++) value += indent;
	      }
	    }

	    return value
	  }

	  rawValue(node, prop) {
	    let value = node[prop];
	    let raw = node.raws[prop];
	    if (raw && raw.value === value) {
	      return raw.raw
	    }

	    return value
	  }
	}

	var stringifier = Stringifier$2;
	Stringifier$2.default = Stringifier$2;

	let Stringifier$1 = stringifier;

	function stringify$4(node, builder) {
	  let str = new Stringifier$1(builder);
	  str.stringify(node);
	}

	var stringify_1 = stringify$4;
	stringify$4.default = stringify$4;

	let { isClean: isClean$2, my: my$2 } = symbols;
	let CssSyntaxError$2 = cssSyntaxError;
	let Stringifier = stringifier;
	let stringify$3 = stringify_1;

	function cloneNode(obj, parent) {
	  let cloned = new obj.constructor();

	  for (let i in obj) {
	    if (!Object.prototype.hasOwnProperty.call(obj, i)) {
	      /* c8 ignore next 2 */
	      continue
	    }
	    if (i === 'proxyCache') continue
	    let value = obj[i];
	    let type = typeof value;

	    if (i === 'parent' && type === 'object') {
	      if (parent) cloned[i] = parent;
	    } else if (i === 'source') {
	      cloned[i] = value;
	    } else if (Array.isArray(value)) {
	      cloned[i] = value.map(j => cloneNode(j, cloned));
	    } else {
	      if (type === 'object' && value !== null) value = cloneNode(value);
	      cloned[i] = value;
	    }
	  }

	  return cloned
	}

	class Node$5 {
	  constructor(defaults = {}) {
	    this.raws = {};
	    this[isClean$2] = false;
	    this[my$2] = true;

	    for (let name in defaults) {
	      if (name === 'nodes') {
	        this.nodes = [];
	        for (let node of defaults[name]) {
	          if (typeof node.clone === 'function') {
	            this.append(node.clone());
	          } else {
	            this.append(node);
	          }
	        }
	      } else {
	        this[name] = defaults[name];
	      }
	    }
	  }

	  error(message, opts = {}) {
	    if (this.source) {
	      let { start, end } = this.rangeBy(opts);
	      return this.source.input.error(
	        message,
	        { line: start.line, column: start.column },
	        { line: end.line, column: end.column },
	        opts
	      )
	    }
	    return new CssSyntaxError$2(message)
	  }

	  warn(result, text, opts) {
	    let data = { node: this };
	    for (let i in opts) data[i] = opts[i];
	    return result.warn(text, data)
	  }

	  remove() {
	    if (this.parent) {
	      this.parent.removeChild(this);
	    }
	    this.parent = undefined;
	    return this
	  }

	  toString(stringifier = stringify$3) {
	    if (stringifier.stringify) stringifier = stringifier.stringify;
	    let result = '';
	    stringifier(this, i => {
	      result += i;
	    });
	    return result
	  }

	  assign(overrides = {}) {
	    for (let name in overrides) {
	      this[name] = overrides[name];
	    }
	    return this
	  }

	  clone(overrides = {}) {
	    let cloned = cloneNode(this);
	    for (let name in overrides) {
	      cloned[name] = overrides[name];
	    }
	    return cloned
	  }

	  cloneBefore(overrides = {}) {
	    let cloned = this.clone(overrides);
	    this.parent.insertBefore(this, cloned);
	    return cloned
	  }

	  cloneAfter(overrides = {}) {
	    let cloned = this.clone(overrides);
	    this.parent.insertAfter(this, cloned);
	    return cloned
	  }

	  replaceWith(...nodes) {
	    if (this.parent) {
	      let bookmark = this;
	      let foundSelf = false;
	      for (let node of nodes) {
	        if (node === this) {
	          foundSelf = true;
	        } else if (foundSelf) {
	          this.parent.insertAfter(bookmark, node);
	          bookmark = node;
	        } else {
	          this.parent.insertBefore(bookmark, node);
	        }
	      }

	      if (!foundSelf) {
	        this.remove();
	      }
	    }

	    return this
	  }

	  next() {
	    if (!this.parent) return undefined
	    let index = this.parent.index(this);
	    return this.parent.nodes[index + 1]
	  }

	  prev() {
	    if (!this.parent) return undefined
	    let index = this.parent.index(this);
	    return this.parent.nodes[index - 1]
	  }

	  before(add) {
	    this.parent.insertBefore(this, add);
	    return this
	  }

	  after(add) {
	    this.parent.insertAfter(this, add);
	    return this
	  }

	  root() {
	    let result = this;
	    while (result.parent && result.parent.type !== 'document') {
	      result = result.parent;
	    }
	    return result
	  }

	  raw(prop, defaultType) {
	    let str = new Stringifier();
	    return str.raw(this, prop, defaultType)
	  }

	  cleanRaws(keepBetween) {
	    delete this.raws.before;
	    delete this.raws.after;
	    if (!keepBetween) delete this.raws.between;
	  }

	  toJSON(_, inputs) {
	    let fixed = {};
	    let emitInputs = inputs == null;
	    inputs = inputs || new Map();
	    let inputsNextIndex = 0;

	    for (let name in this) {
	      if (!Object.prototype.hasOwnProperty.call(this, name)) {
	        /* c8 ignore next 2 */
	        continue
	      }
	      if (name === 'parent' || name === 'proxyCache') continue
	      let value = this[name];

	      if (Array.isArray(value)) {
	        fixed[name] = value.map(i => {
	          if (typeof i === 'object' && i.toJSON) {
	            return i.toJSON(null, inputs)
	          } else {
	            return i
	          }
	        });
	      } else if (typeof value === 'object' && value.toJSON) {
	        fixed[name] = value.toJSON(null, inputs);
	      } else if (name === 'source') {
	        let inputId = inputs.get(value.input);
	        if (inputId == null) {
	          inputId = inputsNextIndex;
	          inputs.set(value.input, inputsNextIndex);
	          inputsNextIndex++;
	        }
	        fixed[name] = {
	          inputId,
	          start: value.start,
	          end: value.end
	        };
	      } else {
	        fixed[name] = value;
	      }
	    }

	    if (emitInputs) {
	      fixed.inputs = [...inputs.keys()].map(input => input.toJSON());
	    }

	    return fixed
	  }

	  positionInside(index) {
	    let string = this.toString();
	    let column = this.source.start.column;
	    let line = this.source.start.line;

	    for (let i = 0; i < index; i++) {
	      if (string[i] === '\n') {
	        column = 1;
	        line += 1;
	      } else {
	        column += 1;
	      }
	    }

	    return { line, column }
	  }

	  positionBy(opts) {
	    let pos = this.source.start;
	    if (opts.index) {
	      pos = this.positionInside(opts.index);
	    } else if (opts.word) {
	      let index = this.toString().indexOf(opts.word);
	      if (index !== -1) pos = this.positionInside(index);
	    }
	    return pos
	  }

	  rangeBy(opts) {
	    let start = {
	      line: this.source.start.line,
	      column: this.source.start.column
	    };
	    let end = this.source.end
	      ? {
	          line: this.source.end.line,
	          column: this.source.end.column + 1
	        }
	      : {
	          line: start.line,
	          column: start.column + 1
	        };

	    if (opts.word) {
	      let index = this.toString().indexOf(opts.word);
	      if (index !== -1) {
	        start = this.positionInside(index);
	        end = this.positionInside(index + opts.word.length);
	      }
	    } else {
	      if (opts.start) {
	        start = {
	          line: opts.start.line,
	          column: opts.start.column
	        };
	      } else if (opts.index) {
	        start = this.positionInside(opts.index);
	      }

	      if (opts.end) {
	        end = {
	          line: opts.end.line,
	          column: opts.end.column
	        };
	      } else if (opts.endIndex) {
	        end = this.positionInside(opts.endIndex);
	      } else if (opts.index) {
	        end = this.positionInside(opts.index + 1);
	      }
	    }

	    if (
	      end.line < start.line ||
	      (end.line === start.line && end.column <= start.column)
	    ) {
	      end = { line: start.line, column: start.column + 1 };
	    }

	    return { start, end }
	  }

	  getProxyProcessor() {
	    return {
	      set(node, prop, value) {
	        if (node[prop] === value) return true
	        node[prop] = value;
	        if (
	          prop === 'prop' ||
	          prop === 'value' ||
	          prop === 'name' ||
	          prop === 'params' ||
	          prop === 'important' ||
	          /* c8 ignore next */
	          prop === 'text'
	        ) {
	          node.markDirty();
	        }
	        return true
	      },

	      get(node, prop) {
	        if (prop === 'proxyOf') {
	          return node
	        } else if (prop === 'root') {
	          return () => node.root().toProxy()
	        } else {
	          return node[prop]
	        }
	      }
	    }
	  }

	  toProxy() {
	    if (!this.proxyCache) {
	      this.proxyCache = new Proxy(this, this.getProxyProcessor());
	    }
	    return this.proxyCache
	  }

	  addToError(error) {
	    error.postcssNode = this;
	    if (error.stack && this.source && /\n\s{4}at /.test(error.stack)) {
	      let s = this.source;
	      error.stack = error.stack.replace(
	        /\n\s{4}at /,
	        `$&${s.input.from}:${s.start.line}:${s.start.column}$&`
	      );
	    }
	    return error
	  }

	  markDirty() {
	    if (this[isClean$2]) {
	      this[isClean$2] = false;
	      let next = this;
	      while ((next = next.parent)) {
	        next[isClean$2] = false;
	      }
	    }
	  }

	  get proxyOf() {
	    return this
	  }
	}

	var node_1 = Node$5;
	Node$5.default = Node$5;

	let Node$4 = node_1;

	class Declaration$4 extends Node$4 {
	  constructor(defaults) {
	    if (
	      defaults &&
	      typeof defaults.value !== 'undefined' &&
	      typeof defaults.value !== 'string'
	    ) {
	      defaults = { ...defaults, value: String(defaults.value) };
	    }
	    super(defaults);
	    this.type = 'decl';
	  }

	  get variable() {
	    return this.prop.startsWith('--') || this.prop[0] === '$'
	  }
	}

	var declaration = Declaration$4;
	Declaration$4.default = Declaration$4;

	let urlAlphabet =
	  'useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict';
	let customAlphabet = (alphabet, defaultSize = 21) => {
	  return (size = defaultSize) => {
	    let id = '';
	    let i = size;
	    while (i--) {
	      id += alphabet[(Math.random() * alphabet.length) | 0];
	    }
	    return id
	  }
	};
	let nanoid$1 = (size = 21) => {
	  let id = '';
	  let i = size;
	  while (i--) {
	    id += urlAlphabet[(Math.random() * 64) | 0];
	  }
	  return id
	};
	var nonSecure = { nanoid: nanoid$1, customAlphabet };

	let { SourceMapConsumer: SourceMapConsumer$2, SourceMapGenerator: SourceMapGenerator$2 } = require$$2;
	let { existsSync, readFileSync } = require$$2;
	let { dirname: dirname$1, join } = require$$2;

	function fromBase64(str) {
	  if (Buffer) {
	    return Buffer.from(str, 'base64').toString()
	  } else {
	    /* c8 ignore next 2 */
	    return window.atob(str)
	  }
	}

	class PreviousMap$2 {
	  constructor(css, opts) {
	    if (opts.map === false) return
	    this.loadAnnotation(css);
	    this.inline = this.startWith(this.annotation, 'data:');

	    let prev = opts.map ? opts.map.prev : undefined;
	    let text = this.loadMap(opts.from, prev);
	    if (!this.mapFile && opts.from) {
	      this.mapFile = opts.from;
	    }
	    if (this.mapFile) this.root = dirname$1(this.mapFile);
	    if (text) this.text = text;
	  }

	  consumer() {
	    if (!this.consumerCache) {
	      this.consumerCache = new SourceMapConsumer$2(this.text);
	    }
	    return this.consumerCache
	  }

	  withContent() {
	    return !!(
	      this.consumer().sourcesContent &&
	      this.consumer().sourcesContent.length > 0
	    )
	  }

	  startWith(string, start) {
	    if (!string) return false
	    return string.substr(0, start.length) === start
	  }

	  getAnnotationURL(sourceMapString) {
	    return sourceMapString.replace(/^\/\*\s*# sourceMappingURL=/, '').trim()
	  }

	  loadAnnotation(css) {
	    let comments = css.match(/\/\*\s*# sourceMappingURL=/gm);
	    if (!comments) return

	    // sourceMappingURLs from comments, strings, etc.
	    let start = css.lastIndexOf(comments.pop());
	    let end = css.indexOf('*/', start);

	    if (start > -1 && end > -1) {
	      // Locate the last sourceMappingURL to avoid pickin
	      this.annotation = this.getAnnotationURL(css.substring(start, end));
	    }
	  }

	  decodeInline(text) {
	    let baseCharsetUri = /^data:application\/json;charset=utf-?8;base64,/;
	    let baseUri = /^data:application\/json;base64,/;
	    let charsetUri = /^data:application\/json;charset=utf-?8,/;
	    let uri = /^data:application\/json,/;

	    if (charsetUri.test(text) || uri.test(text)) {
	      return decodeURIComponent(text.substr(RegExp.lastMatch.length))
	    }

	    if (baseCharsetUri.test(text) || baseUri.test(text)) {
	      return fromBase64(text.substr(RegExp.lastMatch.length))
	    }

	    let encoding = text.match(/data:application\/json;([^,]+),/)[1];
	    throw new Error('Unsupported source map encoding ' + encoding)
	  }

	  loadFile(path) {
	    this.root = dirname$1(path);
	    if (existsSync(path)) {
	      this.mapFile = path;
	      return readFileSync(path, 'utf-8').toString().trim()
	    }
	  }

	  loadMap(file, prev) {
	    if (prev === false) return false

	    if (prev) {
	      if (typeof prev === 'string') {
	        return prev
	      } else if (typeof prev === 'function') {
	        let prevPath = prev(file);
	        if (prevPath) {
	          let map = this.loadFile(prevPath);
	          if (!map) {
	            throw new Error(
	              'Unable to load previous source map: ' + prevPath.toString()
	            )
	          }
	          return map
	        }
	      } else if (prev instanceof SourceMapConsumer$2) {
	        return SourceMapGenerator$2.fromSourceMap(prev).toString()
	      } else if (prev instanceof SourceMapGenerator$2) {
	        return prev.toString()
	      } else if (this.isMap(prev)) {
	        return JSON.stringify(prev)
	      } else {
	        throw new Error(
	          'Unsupported previous source map format: ' + prev.toString()
	        )
	      }
	    } else if (this.inline) {
	      return this.decodeInline(this.annotation)
	    } else if (this.annotation) {
	      let map = this.annotation;
	      if (file) map = join(dirname$1(file), map);
	      return this.loadFile(map)
	    }
	  }

	  isMap(map) {
	    if (typeof map !== 'object') return false
	    return (
	      typeof map.mappings === 'string' ||
	      typeof map._mappings === 'string' ||
	      Array.isArray(map.sections)
	    )
	  }
	}

	var previousMap = PreviousMap$2;
	PreviousMap$2.default = PreviousMap$2;

	let { SourceMapConsumer: SourceMapConsumer$1, SourceMapGenerator: SourceMapGenerator$1 } = require$$2;
	let { fileURLToPath, pathToFileURL: pathToFileURL$1 } = require$$2;
	let { resolve: resolve$1, isAbsolute } = require$$2;
	let { nanoid } = nonSecure;

	let terminalHighlight = require$$2;
	let CssSyntaxError$1 = cssSyntaxError;
	let PreviousMap$1 = previousMap;

	let fromOffsetCache = Symbol('fromOffsetCache');

	let sourceMapAvailable$1 = Boolean(SourceMapConsumer$1 && SourceMapGenerator$1);
	let pathAvailable$1 = Boolean(resolve$1 && isAbsolute);

	class Input$4 {
	  constructor(css, opts = {}) {
	    if (
	      css === null ||
	      typeof css === 'undefined' ||
	      (typeof css === 'object' && !css.toString)
	    ) {
	      throw new Error(`PostCSS received ${css} instead of CSS string`)
	    }

	    this.css = css.toString();

	    if (this.css[0] === '\uFEFF' || this.css[0] === '\uFFFE') {
	      this.hasBOM = true;
	      this.css = this.css.slice(1);
	    } else {
	      this.hasBOM = false;
	    }

	    if (opts.from) {
	      if (
	        !pathAvailable$1 ||
	        /^\w+:\/\//.test(opts.from) ||
	        isAbsolute(opts.from)
	      ) {
	        this.file = opts.from;
	      } else {
	        this.file = resolve$1(opts.from);
	      }
	    }

	    if (pathAvailable$1 && sourceMapAvailable$1) {
	      let map = new PreviousMap$1(this.css, opts);
	      if (map.text) {
	        this.map = map;
	        let file = map.consumer().file;
	        if (!this.file && file) this.file = this.mapResolve(file);
	      }
	    }

	    if (!this.file) {
	      this.id = '<input css ' + nanoid(6) + '>';
	    }
	    if (this.map) this.map.file = this.from;
	  }

	  fromOffset(offset) {
	    let lastLine, lineToIndex;
	    if (!this[fromOffsetCache]) {
	      let lines = this.css.split('\n');
	      lineToIndex = new Array(lines.length);
	      let prevIndex = 0;

	      for (let i = 0, l = lines.length; i < l; i++) {
	        lineToIndex[i] = prevIndex;
	        prevIndex += lines[i].length + 1;
	      }

	      this[fromOffsetCache] = lineToIndex;
	    } else {
	      lineToIndex = this[fromOffsetCache];
	    }
	    lastLine = lineToIndex[lineToIndex.length - 1];

	    let min = 0;
	    if (offset >= lastLine) {
	      min = lineToIndex.length - 1;
	    } else {
	      let max = lineToIndex.length - 2;
	      let mid;
	      while (min < max) {
	        mid = min + ((max - min) >> 1);
	        if (offset < lineToIndex[mid]) {
	          max = mid - 1;
	        } else if (offset >= lineToIndex[mid + 1]) {
	          min = mid + 1;
	        } else {
	          min = mid;
	          break
	        }
	      }
	    }
	    return {
	      line: min + 1,
	      col: offset - lineToIndex[min] + 1
	    }
	  }

	  error(message, line, column, opts = {}) {
	    let result, endLine, endColumn;

	    if (line && typeof line === 'object') {
	      let start = line;
	      let end = column;
	      if (typeof line.offset === 'number') {
	        let pos = this.fromOffset(start.offset);
	        line = pos.line;
	        column = pos.col;
	      } else {
	        line = start.line;
	        column = start.column;
	      }
	      if (typeof end.offset === 'number') {
	        let pos = this.fromOffset(end.offset);
	        endLine = pos.line;
	        endColumn = pos.col;
	      } else {
	        endLine = end.line;
	        endColumn = end.column;
	      }
	    } else if (!column) {
	      let pos = this.fromOffset(line);
	      line = pos.line;
	      column = pos.col;
	    }

	    let origin = this.origin(line, column, endLine, endColumn);
	    if (origin) {
	      result = new CssSyntaxError$1(
	        message,
	        origin.endLine === undefined
	          ? origin.line
	          : { line: origin.line, column: origin.column },
	        origin.endLine === undefined
	          ? origin.column
	          : { line: origin.endLine, column: origin.endColumn },
	        origin.source,
	        origin.file,
	        opts.plugin
	      );
	    } else {
	      result = new CssSyntaxError$1(
	        message,
	        endLine === undefined ? line : { line, column },
	        endLine === undefined ? column : { line: endLine, column: endColumn },
	        this.css,
	        this.file,
	        opts.plugin
	      );
	    }

	    result.input = { line, column, endLine, endColumn, source: this.css };
	    if (this.file) {
	      if (pathToFileURL$1) {
	        result.input.url = pathToFileURL$1(this.file).toString();
	      }
	      result.input.file = this.file;
	    }

	    return result
	  }

	  origin(line, column, endLine, endColumn) {
	    if (!this.map) return false
	    let consumer = this.map.consumer();

	    let from = consumer.originalPositionFor({ line, column });
	    if (!from.source) return false

	    let to;
	    if (typeof endLine === 'number') {
	      to = consumer.originalPositionFor({ line: endLine, column: endColumn });
	    }

	    let fromUrl;

	    if (isAbsolute(from.source)) {
	      fromUrl = pathToFileURL$1(from.source);
	    } else {
	      fromUrl = new URL(
	        from.source,
	        this.map.consumer().sourceRoot || pathToFileURL$1(this.map.mapFile)
	      );
	    }

	    let result = {
	      url: fromUrl.toString(),
	      line: from.line,
	      column: from.column,
	      endLine: to && to.line,
	      endColumn: to && to.column
	    };

	    if (fromUrl.protocol === 'file:') {
	      if (fileURLToPath) {
	        result.file = fileURLToPath(fromUrl);
	      } else {
	        /* c8 ignore next 2 */
	        throw new Error(`file: protocol is not available in this PostCSS build`)
	      }
	    }

	    let source = consumer.sourceContentFor(from.source);
	    if (source) result.source = source;

	    return result
	  }

	  mapResolve(file) {
	    if (/^\w+:\/\//.test(file)) {
	      return file
	    }
	    return resolve$1(this.map.consumer().sourceRoot || this.map.root || '.', file)
	  }

	  get from() {
	    return this.file || this.id
	  }

	  toJSON() {
	    let json = {};
	    for (let name of ['hasBOM', 'css', 'file', 'id']) {
	      if (this[name] != null) {
	        json[name] = this[name];
	      }
	    }
	    if (this.map) {
	      json.map = { ...this.map };
	      if (json.map.consumerCache) {
	        json.map.consumerCache = undefined;
	      }
	    }
	    return json
	  }
	}

	var input = Input$4;
	Input$4.default = Input$4;

	if (terminalHighlight && terminalHighlight.registerInput) {
	  terminalHighlight.registerInput(Input$4);
	}

	let { SourceMapConsumer, SourceMapGenerator } = require$$2;
	let { dirname, resolve, relative, sep } = require$$2;
	let { pathToFileURL } = require$$2;

	let Input$3 = input;

	let sourceMapAvailable = Boolean(SourceMapConsumer && SourceMapGenerator);
	let pathAvailable = Boolean(dirname && resolve && relative && sep);

	class MapGenerator$2 {
	  constructor(stringify, root, opts, cssString) {
	    this.stringify = stringify;
	    this.mapOpts = opts.map || {};
	    this.root = root;
	    this.opts = opts;
	    this.css = cssString;
	  }

	  isMap() {
	    if (typeof this.opts.map !== 'undefined') {
	      return !!this.opts.map
	    }
	    return this.previous().length > 0
	  }

	  previous() {
	    if (!this.previousMaps) {
	      this.previousMaps = [];
	      if (this.root) {
	        this.root.walk(node => {
	          if (node.source && node.source.input.map) {
	            let map = node.source.input.map;
	            if (!this.previousMaps.includes(map)) {
	              this.previousMaps.push(map);
	            }
	          }
	        });
	      } else {
	        let input = new Input$3(this.css, this.opts);
	        if (input.map) this.previousMaps.push(input.map);
	      }
	    }

	    return this.previousMaps
	  }

	  isInline() {
	    if (typeof this.mapOpts.inline !== 'undefined') {
	      return this.mapOpts.inline
	    }

	    let annotation = this.mapOpts.annotation;
	    if (typeof annotation !== 'undefined' && annotation !== true) {
	      return false
	    }

	    if (this.previous().length) {
	      return this.previous().some(i => i.inline)
	    }
	    return true
	  }

	  isSourcesContent() {
	    if (typeof this.mapOpts.sourcesContent !== 'undefined') {
	      return this.mapOpts.sourcesContent
	    }
	    if (this.previous().length) {
	      return this.previous().some(i => i.withContent())
	    }
	    return true
	  }

	  clearAnnotation() {
	    if (this.mapOpts.annotation === false) return

	    if (this.root) {
	      let node;
	      for (let i = this.root.nodes.length - 1; i >= 0; i--) {
	        node = this.root.nodes[i];
	        if (node.type !== 'comment') continue
	        if (node.text.indexOf('# sourceMappingURL=') === 0) {
	          this.root.removeChild(i);
	        }
	      }
	    } else if (this.css) {
	      this.css = this.css.replace(/(\n)?\/\*#[\S\s]*?\*\/$/gm, '');
	    }
	  }

	  setSourcesContent() {
	    let already = {};
	    if (this.root) {
	      this.root.walk(node => {
	        if (node.source) {
	          let from = node.source.input.from;
	          if (from && !already[from]) {
	            already[from] = true;
	            this.map.setSourceContent(
	              this.toUrl(this.path(from)),
	              node.source.input.css
	            );
	          }
	        }
	      });
	    } else if (this.css) {
	      let from = this.opts.from
	        ? this.toUrl(this.path(this.opts.from))
	        : '<no source>';
	      this.map.setSourceContent(from, this.css);
	    }
	  }

	  applyPrevMaps() {
	    for (let prev of this.previous()) {
	      let from = this.toUrl(this.path(prev.file));
	      let root = prev.root || dirname(prev.file);
	      let map;

	      if (this.mapOpts.sourcesContent === false) {
	        map = new SourceMapConsumer(prev.text);
	        if (map.sourcesContent) {
	          map.sourcesContent = map.sourcesContent.map(() => null);
	        }
	      } else {
	        map = prev.consumer();
	      }

	      this.map.applySourceMap(map, from, this.toUrl(this.path(root)));
	    }
	  }

	  isAnnotation() {
	    if (this.isInline()) {
	      return true
	    }
	    if (typeof this.mapOpts.annotation !== 'undefined') {
	      return this.mapOpts.annotation
	    }
	    if (this.previous().length) {
	      return this.previous().some(i => i.annotation)
	    }
	    return true
	  }

	  toBase64(str) {
	    if (Buffer) {
	      return Buffer.from(str).toString('base64')
	    } else {
	      return window.btoa(unescape(encodeURIComponent(str)))
	    }
	  }

	  addAnnotation() {
	    let content;

	    if (this.isInline()) {
	      content =
	        'data:application/json;base64,' + this.toBase64(this.map.toString());
	    } else if (typeof this.mapOpts.annotation === 'string') {
	      content = this.mapOpts.annotation;
	    } else if (typeof this.mapOpts.annotation === 'function') {
	      content = this.mapOpts.annotation(this.opts.to, this.root);
	    } else {
	      content = this.outputFile() + '.map';
	    }
	    let eol = '\n';
	    if (this.css.includes('\r\n')) eol = '\r\n';

	    this.css += eol + '/*# sourceMappingURL=' + content + ' */';
	  }

	  outputFile() {
	    if (this.opts.to) {
	      return this.path(this.opts.to)
	    } else if (this.opts.from) {
	      return this.path(this.opts.from)
	    } else {
	      return 'to.css'
	    }
	  }

	  generateMap() {
	    if (this.root) {
	      this.generateString();
	    } else if (this.previous().length === 1) {
	      let prev = this.previous()[0].consumer();
	      prev.file = this.outputFile();
	      this.map = SourceMapGenerator.fromSourceMap(prev);
	    } else {
	      this.map = new SourceMapGenerator({ file: this.outputFile() });
	      this.map.addMapping({
	        source: this.opts.from
	          ? this.toUrl(this.path(this.opts.from))
	          : '<no source>',
	        generated: { line: 1, column: 0 },
	        original: { line: 1, column: 0 }
	      });
	    }

	    if (this.isSourcesContent()) this.setSourcesContent();
	    if (this.root && this.previous().length > 0) this.applyPrevMaps();
	    if (this.isAnnotation()) this.addAnnotation();

	    if (this.isInline()) {
	      return [this.css]
	    } else {
	      return [this.css, this.map]
	    }
	  }

	  path(file) {
	    if (file.indexOf('<') === 0) return file
	    if (/^\w+:\/\//.test(file)) return file
	    if (this.mapOpts.absolute) return file

	    let from = this.opts.to ? dirname(this.opts.to) : '.';

	    if (typeof this.mapOpts.annotation === 'string') {
	      from = dirname(resolve(from, this.mapOpts.annotation));
	    }

	    file = relative(from, file);
	    return file
	  }

	  toUrl(path) {
	    if (sep === '\\') {
	      path = path.replace(/\\/g, '/');
	    }
	    return encodeURI(path).replace(/[#?]/g, encodeURIComponent)
	  }

	  sourcePath(node) {
	    if (this.mapOpts.from) {
	      return this.toUrl(this.mapOpts.from)
	    } else if (this.mapOpts.absolute) {
	      if (pathToFileURL) {
	        return pathToFileURL(node.source.input.from).toString()
	      } else {
	        throw new Error(
	          '`map.absolute` option is not available in this PostCSS build'
	        )
	      }
	    } else {
	      return this.toUrl(this.path(node.source.input.from))
	    }
	  }

	  generateString() {
	    this.css = '';
	    this.map = new SourceMapGenerator({ file: this.outputFile() });

	    let line = 1;
	    let column = 1;

	    let noSource = '<no source>';
	    let mapping = {
	      source: '',
	      generated: { line: 0, column: 0 },
	      original: { line: 0, column: 0 }
	    };

	    let lines, last;
	    this.stringify(this.root, (str, node, type) => {
	      this.css += str;

	      if (node && type !== 'end') {
	        mapping.generated.line = line;
	        mapping.generated.column = column - 1;
	        if (node.source && node.source.start) {
	          mapping.source = this.sourcePath(node);
	          mapping.original.line = node.source.start.line;
	          mapping.original.column = node.source.start.column - 1;
	          this.map.addMapping(mapping);
	        } else {
	          mapping.source = noSource;
	          mapping.original.line = 1;
	          mapping.original.column = 0;
	          this.map.addMapping(mapping);
	        }
	      }

	      lines = str.match(/\n/g);
	      if (lines) {
	        line += lines.length;
	        last = str.lastIndexOf('\n');
	        column = str.length - last;
	      } else {
	        column += str.length;
	      }

	      if (node && type !== 'start') {
	        let p = node.parent || { raws: {} };
	        if (node.type !== 'decl' || node !== p.last || p.raws.semicolon) {
	          if (node.source && node.source.end) {
	            mapping.source = this.sourcePath(node);
	            mapping.original.line = node.source.end.line;
	            mapping.original.column = node.source.end.column - 1;
	            mapping.generated.line = line;
	            mapping.generated.column = column - 2;
	            this.map.addMapping(mapping);
	          } else {
	            mapping.source = noSource;
	            mapping.original.line = 1;
	            mapping.original.column = 0;
	            mapping.generated.line = line;
	            mapping.generated.column = column - 1;
	            this.map.addMapping(mapping);
	          }
	        }
	      }
	    });
	  }

	  generate() {
	    this.clearAnnotation();
	    if (pathAvailable && sourceMapAvailable && this.isMap()) {
	      return this.generateMap()
	    } else {
	      let result = '';
	      this.stringify(this.root, i => {
	        result += i;
	      });
	      return [result]
	    }
	  }
	}

	var mapGenerator = MapGenerator$2;

	let Node$3 = node_1;

	class Comment$4 extends Node$3 {
	  constructor(defaults) {
	    super(defaults);
	    this.type = 'comment';
	  }
	}

	var comment = Comment$4;
	Comment$4.default = Comment$4;

	let { isClean: isClean$1, my: my$1 } = symbols;
	let Declaration$3 = declaration;
	let Comment$3 = comment;
	let Node$2 = node_1;

	let parse$4, Rule$4, AtRule$4;

	function cleanSource(nodes) {
	  return nodes.map(i => {
	    if (i.nodes) i.nodes = cleanSource(i.nodes);
	    delete i.source;
	    return i
	  })
	}

	function markDirtyUp(node) {
	  node[isClean$1] = false;
	  if (node.proxyOf.nodes) {
	    for (let i of node.proxyOf.nodes) {
	      markDirtyUp(i);
	    }
	  }
	}

	class Container$7 extends Node$2 {
	  push(child) {
	    child.parent = this;
	    this.proxyOf.nodes.push(child);
	    return this
	  }

	  each(callback) {
	    if (!this.proxyOf.nodes) return undefined
	    let iterator = this.getIterator();

	    let index, result;
	    while (this.indexes[iterator] < this.proxyOf.nodes.length) {
	      index = this.indexes[iterator];
	      result = callback(this.proxyOf.nodes[index], index);
	      if (result === false) break

	      this.indexes[iterator] += 1;
	    }

	    delete this.indexes[iterator];
	    return result
	  }

	  walk(callback) {
	    return this.each((child, i) => {
	      let result;
	      try {
	        result = callback(child, i);
	      } catch (e) {
	        throw child.addToError(e)
	      }
	      if (result !== false && child.walk) {
	        result = child.walk(callback);
	      }

	      return result
	    })
	  }

	  walkDecls(prop, callback) {
	    if (!callback) {
	      callback = prop;
	      return this.walk((child, i) => {
	        if (child.type === 'decl') {
	          return callback(child, i)
	        }
	      })
	    }
	    if (prop instanceof RegExp) {
	      return this.walk((child, i) => {
	        if (child.type === 'decl' && prop.test(child.prop)) {
	          return callback(child, i)
	        }
	      })
	    }
	    return this.walk((child, i) => {
	      if (child.type === 'decl' && child.prop === prop) {
	        return callback(child, i)
	      }
	    })
	  }

	  walkRules(selector, callback) {
	    if (!callback) {
	      callback = selector;

	      return this.walk((child, i) => {
	        if (child.type === 'rule') {
	          return callback(child, i)
	        }
	      })
	    }
	    if (selector instanceof RegExp) {
	      return this.walk((child, i) => {
	        if (child.type === 'rule' && selector.test(child.selector)) {
	          return callback(child, i)
	        }
	      })
	    }
	    return this.walk((child, i) => {
	      if (child.type === 'rule' && child.selector === selector) {
	        return callback(child, i)
	      }
	    })
	  }

	  walkAtRules(name, callback) {
	    if (!callback) {
	      callback = name;
	      return this.walk((child, i) => {
	        if (child.type === 'atrule') {
	          return callback(child, i)
	        }
	      })
	    }
	    if (name instanceof RegExp) {
	      return this.walk((child, i) => {
	        if (child.type === 'atrule' && name.test(child.name)) {
	          return callback(child, i)
	        }
	      })
	    }
	    return this.walk((child, i) => {
	      if (child.type === 'atrule' && child.name === name) {
	        return callback(child, i)
	      }
	    })
	  }

	  walkComments(callback) {
	    return this.walk((child, i) => {
	      if (child.type === 'comment') {
	        return callback(child, i)
	      }
	    })
	  }

	  append(...children) {
	    for (let child of children) {
	      let nodes = this.normalize(child, this.last);
	      for (let node of nodes) this.proxyOf.nodes.push(node);
	    }

	    this.markDirty();

	    return this
	  }

	  prepend(...children) {
	    children = children.reverse();
	    for (let child of children) {
	      let nodes = this.normalize(child, this.first, 'prepend').reverse();
	      for (let node of nodes) this.proxyOf.nodes.unshift(node);
	      for (let id in this.indexes) {
	        this.indexes[id] = this.indexes[id] + nodes.length;
	      }
	    }

	    this.markDirty();

	    return this
	  }

	  cleanRaws(keepBetween) {
	    super.cleanRaws(keepBetween);
	    if (this.nodes) {
	      for (let node of this.nodes) node.cleanRaws(keepBetween);
	    }
	  }

	  insertBefore(exist, add) {
	    exist = this.index(exist);

	    let type = exist === 0 ? 'prepend' : false;
	    let nodes = this.normalize(add, this.proxyOf.nodes[exist], type).reverse();
	    for (let node of nodes) this.proxyOf.nodes.splice(exist, 0, node);

	    let index;
	    for (let id in this.indexes) {
	      index = this.indexes[id];
	      if (exist <= index) {
	        this.indexes[id] = index + nodes.length;
	      }
	    }

	    this.markDirty();

	    return this
	  }

	  insertAfter(exist, add) {
	    exist = this.index(exist);

	    let nodes = this.normalize(add, this.proxyOf.nodes[exist]).reverse();
	    for (let node of nodes) this.proxyOf.nodes.splice(exist + 1, 0, node);

	    let index;
	    for (let id in this.indexes) {
	      index = this.indexes[id];
	      if (exist < index) {
	        this.indexes[id] = index + nodes.length;
	      }
	    }

	    this.markDirty();

	    return this
	  }

	  removeChild(child) {
	    child = this.index(child);
	    this.proxyOf.nodes[child].parent = undefined;
	    this.proxyOf.nodes.splice(child, 1);

	    let index;
	    for (let id in this.indexes) {
	      index = this.indexes[id];
	      if (index >= child) {
	        this.indexes[id] = index - 1;
	      }
	    }

	    this.markDirty();

	    return this
	  }

	  removeAll() {
	    for (let node of this.proxyOf.nodes) node.parent = undefined;
	    this.proxyOf.nodes = [];

	    this.markDirty();

	    return this
	  }

	  replaceValues(pattern, opts, callback) {
	    if (!callback) {
	      callback = opts;
	      opts = {};
	    }

	    this.walkDecls(decl => {
	      if (opts.props && !opts.props.includes(decl.prop)) return
	      if (opts.fast && !decl.value.includes(opts.fast)) return

	      decl.value = decl.value.replace(pattern, callback);
	    });

	    this.markDirty();

	    return this
	  }

	  every(condition) {
	    return this.nodes.every(condition)
	  }

	  some(condition) {
	    return this.nodes.some(condition)
	  }

	  index(child) {
	    if (typeof child === 'number') return child
	    if (child.proxyOf) child = child.proxyOf;
	    return this.proxyOf.nodes.indexOf(child)
	  }

	  get first() {
	    if (!this.proxyOf.nodes) return undefined
	    return this.proxyOf.nodes[0]
	  }

	  get last() {
	    if (!this.proxyOf.nodes) return undefined
	    return this.proxyOf.nodes[this.proxyOf.nodes.length - 1]
	  }

	  normalize(nodes, sample) {
	    if (typeof nodes === 'string') {
	      nodes = cleanSource(parse$4(nodes).nodes);
	    } else if (Array.isArray(nodes)) {
	      nodes = nodes.slice(0);
	      for (let i of nodes) {
	        if (i.parent) i.parent.removeChild(i, 'ignore');
	      }
	    } else if (nodes.type === 'root' && this.type !== 'document') {
	      nodes = nodes.nodes.slice(0);
	      for (let i of nodes) {
	        if (i.parent) i.parent.removeChild(i, 'ignore');
	      }
	    } else if (nodes.type) {
	      nodes = [nodes];
	    } else if (nodes.prop) {
	      if (typeof nodes.value === 'undefined') {
	        throw new Error('Value field is missed in node creation')
	      } else if (typeof nodes.value !== 'string') {
	        nodes.value = String(nodes.value);
	      }
	      nodes = [new Declaration$3(nodes)];
	    } else if (nodes.selector) {
	      nodes = [new Rule$4(nodes)];
	    } else if (nodes.name) {
	      nodes = [new AtRule$4(nodes)];
	    } else if (nodes.text) {
	      nodes = [new Comment$3(nodes)];
	    } else {
	      throw new Error('Unknown node type in node creation')
	    }

	    let processed = nodes.map(i => {
	      /* c8 ignore next */
	      if (!i[my$1]) Container$7.rebuild(i);
	      i = i.proxyOf;
	      if (i.parent) i.parent.removeChild(i);
	      if (i[isClean$1]) markDirtyUp(i);
	      if (typeof i.raws.before === 'undefined') {
	        if (sample && typeof sample.raws.before !== 'undefined') {
	          i.raws.before = sample.raws.before.replace(/\S/g, '');
	        }
	      }
	      i.parent = this.proxyOf;
	      return i
	    });

	    return processed
	  }

	  getProxyProcessor() {
	    return {
	      set(node, prop, value) {
	        if (node[prop] === value) return true
	        node[prop] = value;
	        if (prop === 'name' || prop === 'params' || prop === 'selector') {
	          node.markDirty();
	        }
	        return true
	      },

	      get(node, prop) {
	        if (prop === 'proxyOf') {
	          return node
	        } else if (!node[prop]) {
	          return node[prop]
	        } else if (
	          prop === 'each' ||
	          (typeof prop === 'string' && prop.startsWith('walk'))
	        ) {
	          return (...args) => {
	            return node[prop](
	              ...args.map(i => {
	                if (typeof i === 'function') {
	                  return (child, index) => i(child.toProxy(), index)
	                } else {
	                  return i
	                }
	              })
	            )
	          }
	        } else if (prop === 'every' || prop === 'some') {
	          return cb => {
	            return node[prop]((child, ...other) =>
	              cb(child.toProxy(), ...other)
	            )
	          }
	        } else if (prop === 'root') {
	          return () => node.root().toProxy()
	        } else if (prop === 'nodes') {
	          return node.nodes.map(i => i.toProxy())
	        } else if (prop === 'first' || prop === 'last') {
	          return node[prop].toProxy()
	        } else {
	          return node[prop]
	        }
	      }
	    }
	  }

	  getIterator() {
	    if (!this.lastEach) this.lastEach = 0;
	    if (!this.indexes) this.indexes = {};

	    this.lastEach += 1;
	    let iterator = this.lastEach;
	    this.indexes[iterator] = 0;

	    return iterator
	  }
	}

	Container$7.registerParse = dependant => {
	  parse$4 = dependant;
	};

	Container$7.registerRule = dependant => {
	  Rule$4 = dependant;
	};

	Container$7.registerAtRule = dependant => {
	  AtRule$4 = dependant;
	};

	var container = Container$7;
	Container$7.default = Container$7;

	/* c8 ignore start */
	Container$7.rebuild = node => {
	  if (node.type === 'atrule') {
	    Object.setPrototypeOf(node, AtRule$4.prototype);
	  } else if (node.type === 'rule') {
	    Object.setPrototypeOf(node, Rule$4.prototype);
	  } else if (node.type === 'decl') {
	    Object.setPrototypeOf(node, Declaration$3.prototype);
	  } else if (node.type === 'comment') {
	    Object.setPrototypeOf(node, Comment$3.prototype);
	  }

	  node[my$1] = true;

	  if (node.nodes) {
	    node.nodes.forEach(child => {
	      Container$7.rebuild(child);
	    });
	  }
	};

	let Container$6 = container;

	let LazyResult$4, Processor$3;

	class Document$3 extends Container$6 {
	  constructor(defaults) {
	    // type needs to be passed to super, otherwise child roots won't be normalized correctly
	    super({ type: 'document', ...defaults });

	    if (!this.nodes) {
	      this.nodes = [];
	    }
	  }

	  toResult(opts = {}) {
	    let lazy = new LazyResult$4(new Processor$3(), this, opts);

	    return lazy.stringify()
	  }
	}

	Document$3.registerLazyResult = dependant => {
	  LazyResult$4 = dependant;
	};

	Document$3.registerProcessor = dependant => {
	  Processor$3 = dependant;
	};

	var document$1 = Document$3;
	Document$3.default = Document$3;

	/* eslint-disable no-console */

	let printed = {};

	var warnOnce$2 = function warnOnce(message) {
	  if (printed[message]) return
	  printed[message] = true;

	  if (typeof console !== 'undefined' && console.warn) {
	    console.warn(message);
	  }
	};

	class Warning$2 {
	  constructor(text, opts = {}) {
	    this.type = 'warning';
	    this.text = text;

	    if (opts.node && opts.node.source) {
	      let range = opts.node.rangeBy(opts);
	      this.line = range.start.line;
	      this.column = range.start.column;
	      this.endLine = range.end.line;
	      this.endColumn = range.end.column;
	    }

	    for (let opt in opts) this[opt] = opts[opt];
	  }

	  toString() {
	    if (this.node) {
	      return this.node.error(this.text, {
	        plugin: this.plugin,
	        index: this.index,
	        word: this.word
	      }).message
	    }

	    if (this.plugin) {
	      return this.plugin + ': ' + this.text
	    }

	    return this.text
	  }
	}

	var warning = Warning$2;
	Warning$2.default = Warning$2;

	let Warning$1 = warning;

	class Result$3 {
	  constructor(processor, root, opts) {
	    this.processor = processor;
	    this.messages = [];
	    this.root = root;
	    this.opts = opts;
	    this.css = undefined;
	    this.map = undefined;
	  }

	  toString() {
	    return this.css
	  }

	  warn(text, opts = {}) {
	    if (!opts.plugin) {
	      if (this.lastPlugin && this.lastPlugin.postcssPlugin) {
	        opts.plugin = this.lastPlugin.postcssPlugin;
	      }
	    }

	    let warning = new Warning$1(text, opts);
	    this.messages.push(warning);

	    return warning
	  }

	  warnings() {
	    return this.messages.filter(i => i.type === 'warning')
	  }

	  get content() {
	    return this.css
	  }
	}

	var result = Result$3;
	Result$3.default = Result$3;

	const SINGLE_QUOTE = "'".charCodeAt(0);
	const DOUBLE_QUOTE = '"'.charCodeAt(0);
	const BACKSLASH = '\\'.charCodeAt(0);
	const SLASH = '/'.charCodeAt(0);
	const NEWLINE = '\n'.charCodeAt(0);
	const SPACE = ' '.charCodeAt(0);
	const FEED = '\f'.charCodeAt(0);
	const TAB = '\t'.charCodeAt(0);
	const CR = '\r'.charCodeAt(0);
	const OPEN_SQUARE = '['.charCodeAt(0);
	const CLOSE_SQUARE = ']'.charCodeAt(0);
	const OPEN_PARENTHESES = '('.charCodeAt(0);
	const CLOSE_PARENTHESES = ')'.charCodeAt(0);
	const OPEN_CURLY = '{'.charCodeAt(0);
	const CLOSE_CURLY = '}'.charCodeAt(0);
	const SEMICOLON = ';'.charCodeAt(0);
	const ASTERISK = '*'.charCodeAt(0);
	const COLON = ':'.charCodeAt(0);
	const AT = '@'.charCodeAt(0);

	const RE_AT_END = /[\t\n\f\r "#'()/;[\\\]{}]/g;
	const RE_WORD_END = /[\t\n\f\r !"#'():;@[\\\]{}]|\/(?=\*)/g;
	const RE_BAD_BRACKET = /.[\n"'(/\\]/;
	const RE_HEX_ESCAPE = /[\da-f]/i;

	var tokenize = function tokenizer(input, options = {}) {
	  let css = input.css.valueOf();
	  let ignore = options.ignoreErrors;

	  let code, next, quote, content, escape;
	  let escaped, escapePos, prev, n, currentToken;

	  let length = css.length;
	  let pos = 0;
	  let buffer = [];
	  let returned = [];

	  function position() {
	    return pos
	  }

	  function unclosed(what) {
	    throw input.error('Unclosed ' + what, pos)
	  }

	  function endOfFile() {
	    return returned.length === 0 && pos >= length
	  }

	  function nextToken(opts) {
	    if (returned.length) return returned.pop()
	    if (pos >= length) return

	    let ignoreUnclosed = opts ? opts.ignoreUnclosed : false;

	    code = css.charCodeAt(pos);

	    switch (code) {
	      case NEWLINE:
	      case SPACE:
	      case TAB:
	      case CR:
	      case FEED: {
	        next = pos;
	        do {
	          next += 1;
	          code = css.charCodeAt(next);
	        } while (
	          code === SPACE ||
	          code === NEWLINE ||
	          code === TAB ||
	          code === CR ||
	          code === FEED
	        )

	        currentToken = ['space', css.slice(pos, next)];
	        pos = next - 1;
	        break
	      }

	      case OPEN_SQUARE:
	      case CLOSE_SQUARE:
	      case OPEN_CURLY:
	      case CLOSE_CURLY:
	      case COLON:
	      case SEMICOLON:
	      case CLOSE_PARENTHESES: {
	        let controlChar = String.fromCharCode(code);
	        currentToken = [controlChar, controlChar, pos];
	        break
	      }

	      case OPEN_PARENTHESES: {
	        prev = buffer.length ? buffer.pop()[1] : '';
	        n = css.charCodeAt(pos + 1);
	        if (
	          prev === 'url' &&
	          n !== SINGLE_QUOTE &&
	          n !== DOUBLE_QUOTE &&
	          n !== SPACE &&
	          n !== NEWLINE &&
	          n !== TAB &&
	          n !== FEED &&
	          n !== CR
	        ) {
	          next = pos;
	          do {
	            escaped = false;
	            next = css.indexOf(')', next + 1);
	            if (next === -1) {
	              if (ignore || ignoreUnclosed) {
	                next = pos;
	                break
	              } else {
	                unclosed('bracket');
	              }
	            }
	            escapePos = next;
	            while (css.charCodeAt(escapePos - 1) === BACKSLASH) {
	              escapePos -= 1;
	              escaped = !escaped;
	            }
	          } while (escaped)

	          currentToken = ['brackets', css.slice(pos, next + 1), pos, next];

	          pos = next;
	        } else {
	          next = css.indexOf(')', pos + 1);
	          content = css.slice(pos, next + 1);

	          if (next === -1 || RE_BAD_BRACKET.test(content)) {
	            currentToken = ['(', '(', pos];
	          } else {
	            currentToken = ['brackets', content, pos, next];
	            pos = next;
	          }
	        }

	        break
	      }

	      case SINGLE_QUOTE:
	      case DOUBLE_QUOTE: {
	        quote = code === SINGLE_QUOTE ? "'" : '"';
	        next = pos;
	        do {
	          escaped = false;
	          next = css.indexOf(quote, next + 1);
	          if (next === -1) {
	            if (ignore || ignoreUnclosed) {
	              next = pos + 1;
	              break
	            } else {
	              unclosed('string');
	            }
	          }
	          escapePos = next;
	          while (css.charCodeAt(escapePos - 1) === BACKSLASH) {
	            escapePos -= 1;
	            escaped = !escaped;
	          }
	        } while (escaped)

	        currentToken = ['string', css.slice(pos, next + 1), pos, next];
	        pos = next;
	        break
	      }

	      case AT: {
	        RE_AT_END.lastIndex = pos + 1;
	        RE_AT_END.test(css);
	        if (RE_AT_END.lastIndex === 0) {
	          next = css.length - 1;
	        } else {
	          next = RE_AT_END.lastIndex - 2;
	        }

	        currentToken = ['at-word', css.slice(pos, next + 1), pos, next];

	        pos = next;
	        break
	      }

	      case BACKSLASH: {
	        next = pos;
	        escape = true;
	        while (css.charCodeAt(next + 1) === BACKSLASH) {
	          next += 1;
	          escape = !escape;
	        }
	        code = css.charCodeAt(next + 1);
	        if (
	          escape &&
	          code !== SLASH &&
	          code !== SPACE &&
	          code !== NEWLINE &&
	          code !== TAB &&
	          code !== CR &&
	          code !== FEED
	        ) {
	          next += 1;
	          if (RE_HEX_ESCAPE.test(css.charAt(next))) {
	            while (RE_HEX_ESCAPE.test(css.charAt(next + 1))) {
	              next += 1;
	            }
	            if (css.charCodeAt(next + 1) === SPACE) {
	              next += 1;
	            }
	          }
	        }

	        currentToken = ['word', css.slice(pos, next + 1), pos, next];

	        pos = next;
	        break
	      }

	      default: {
	        if (code === SLASH && css.charCodeAt(pos + 1) === ASTERISK) {
	          next = css.indexOf('*/', pos + 2) + 1;
	          if (next === 0) {
	            if (ignore || ignoreUnclosed) {
	              next = css.length;
	            } else {
	              unclosed('comment');
	            }
	          }

	          currentToken = ['comment', css.slice(pos, next + 1), pos, next];
	          pos = next;
	        } else {
	          RE_WORD_END.lastIndex = pos + 1;
	          RE_WORD_END.test(css);
	          if (RE_WORD_END.lastIndex === 0) {
	            next = css.length - 1;
	          } else {
	            next = RE_WORD_END.lastIndex - 2;
	          }

	          currentToken = ['word', css.slice(pos, next + 1), pos, next];
	          buffer.push(currentToken);
	          pos = next;
	        }

	        break
	      }
	    }

	    pos++;
	    return currentToken
	  }

	  function back(token) {
	    returned.push(token);
	  }

	  return {
	    back,
	    nextToken,
	    endOfFile,
	    position
	  }
	};

	let Container$5 = container;

	class AtRule$3 extends Container$5 {
	  constructor(defaults) {
	    super(defaults);
	    this.type = 'atrule';
	  }

	  append(...children) {
	    if (!this.proxyOf.nodes) this.nodes = [];
	    return super.append(...children)
	  }

	  prepend(...children) {
	    if (!this.proxyOf.nodes) this.nodes = [];
	    return super.prepend(...children)
	  }
	}

	var atRule = AtRule$3;
	AtRule$3.default = AtRule$3;

	Container$5.registerAtRule(AtRule$3);

	let Container$4 = container;

	let LazyResult$3, Processor$2;

	class Root$5 extends Container$4 {
	  constructor(defaults) {
	    super(defaults);
	    this.type = 'root';
	    if (!this.nodes) this.nodes = [];
	  }

	  removeChild(child, ignore) {
	    let index = this.index(child);

	    if (!ignore && index === 0 && this.nodes.length > 1) {
	      this.nodes[1].raws.before = this.nodes[index].raws.before;
	    }

	    return super.removeChild(child)
	  }

	  normalize(child, sample, type) {
	    let nodes = super.normalize(child);

	    if (sample) {
	      if (type === 'prepend') {
	        if (this.nodes.length > 1) {
	          sample.raws.before = this.nodes[1].raws.before;
	        } else {
	          delete sample.raws.before;
	        }
	      } else if (this.first !== sample) {
	        for (let node of nodes) {
	          node.raws.before = sample.raws.before;
	        }
	      }
	    }

	    return nodes
	  }

	  toResult(opts = {}) {
	    let lazy = new LazyResult$3(new Processor$2(), this, opts);
	    return lazy.stringify()
	  }
	}

	Root$5.registerLazyResult = dependant => {
	  LazyResult$3 = dependant;
	};

	Root$5.registerProcessor = dependant => {
	  Processor$2 = dependant;
	};

	var root = Root$5;
	Root$5.default = Root$5;

	let list$2 = {
	  split(string, separators, last) {
	    let array = [];
	    let current = '';
	    let split = false;

	    let func = 0;
	    let quote = false;
	    let escape = false;

	    for (let letter of string) {
	      if (escape) {
	        escape = false;
	      } else if (letter === '\\') {
	        escape = true;
	      } else if (quote) {
	        if (letter === quote) {
	          quote = false;
	        }
	      } else if (letter === '"' || letter === "'") {
	        quote = letter;
	      } else if (letter === '(') {
	        func += 1;
	      } else if (letter === ')') {
	        if (func > 0) func -= 1;
	      } else if (func === 0) {
	        if (separators.includes(letter)) split = true;
	      }

	      if (split) {
	        if (current !== '') array.push(current.trim());
	        current = '';
	        split = false;
	      } else {
	        current += letter;
	      }
	    }

	    if (last || current !== '') array.push(current.trim());
	    return array
	  },

	  space(string) {
	    let spaces = [' ', '\n', '\t'];
	    return list$2.split(string, spaces)
	  },

	  comma(string) {
	    return list$2.split(string, [','], true)
	  }
	};

	var list_1 = list$2;
	list$2.default = list$2;

	let Container$3 = container;
	let list$1 = list_1;

	class Rule$3 extends Container$3 {
	  constructor(defaults) {
	    super(defaults);
	    this.type = 'rule';
	    if (!this.nodes) this.nodes = [];
	  }

	  get selectors() {
	    return list$1.comma(this.selector)
	  }

	  set selectors(values) {
	    let match = this.selector ? this.selector.match(/,\s*/) : null;
	    let sep = match ? match[0] : ',' + this.raw('between', 'beforeOpen');
	    this.selector = values.join(sep);
	  }
	}

	var rule = Rule$3;
	Rule$3.default = Rule$3;

	Container$3.registerRule(Rule$3);

	let Declaration$2 = declaration;
	let tokenizer = tokenize;
	let Comment$2 = comment;
	let AtRule$2 = atRule;
	let Root$4 = root;
	let Rule$2 = rule;

	const SAFE_COMMENT_NEIGHBOR = {
	  empty: true,
	  space: true
	};

	function findLastWithPosition(tokens) {
	  for (let i = tokens.length - 1; i >= 0; i--) {
	    let token = tokens[i];
	    let pos = token[3] || token[2];
	    if (pos) return pos
	  }
	}

	class Parser$1 {
	  constructor(input) {
	    this.input = input;

	    this.root = new Root$4();
	    this.current = this.root;
	    this.spaces = '';
	    this.semicolon = false;
	    this.customProperty = false;

	    this.createTokenizer();
	    this.root.source = { input, start: { offset: 0, line: 1, column: 1 } };
	  }

	  createTokenizer() {
	    this.tokenizer = tokenizer(this.input);
	  }

	  parse() {
	    let token;
	    while (!this.tokenizer.endOfFile()) {
	      token = this.tokenizer.nextToken();

	      switch (token[0]) {
	        case 'space':
	          this.spaces += token[1];
	          break

	        case ';':
	          this.freeSemicolon(token);
	          break

	        case '}':
	          this.end(token);
	          break

	        case 'comment':
	          this.comment(token);
	          break

	        case 'at-word':
	          this.atrule(token);
	          break

	        case '{':
	          this.emptyRule(token);
	          break

	        default:
	          this.other(token);
	          break
	      }
	    }
	    this.endFile();
	  }

	  comment(token) {
	    let node = new Comment$2();
	    this.init(node, token[2]);
	    node.source.end = this.getPosition(token[3] || token[2]);

	    let text = token[1].slice(2, -2);
	    if (/^\s*$/.test(text)) {
	      node.text = '';
	      node.raws.left = text;
	      node.raws.right = '';
	    } else {
	      let match = text.match(/^(\s*)([^]*\S)(\s*)$/);
	      node.text = match[2];
	      node.raws.left = match[1];
	      node.raws.right = match[3];
	    }
	  }

	  emptyRule(token) {
	    let node = new Rule$2();
	    this.init(node, token[2]);
	    node.selector = '';
	    node.raws.between = '';
	    this.current = node;
	  }

	  other(start) {
	    let end = false;
	    let type = null;
	    let colon = false;
	    let bracket = null;
	    let brackets = [];
	    let customProperty = start[1].startsWith('--');

	    let tokens = [];
	    let token = start;
	    while (token) {
	      type = token[0];
	      tokens.push(token);

	      if (type === '(' || type === '[') {
	        if (!bracket) bracket = token;
	        brackets.push(type === '(' ? ')' : ']');
	      } else if (customProperty && colon && type === '{') {
	        if (!bracket) bracket = token;
	        brackets.push('}');
	      } else if (brackets.length === 0) {
	        if (type === ';') {
	          if (colon) {
	            this.decl(tokens, customProperty);
	            return
	          } else {
	            break
	          }
	        } else if (type === '{') {
	          this.rule(tokens);
	          return
	        } else if (type === '}') {
	          this.tokenizer.back(tokens.pop());
	          end = true;
	          break
	        } else if (type === ':') {
	          colon = true;
	        }
	      } else if (type === brackets[brackets.length - 1]) {
	        brackets.pop();
	        if (brackets.length === 0) bracket = null;
	      }

	      token = this.tokenizer.nextToken();
	    }

	    if (this.tokenizer.endOfFile()) end = true;
	    if (brackets.length > 0) this.unclosedBracket(bracket);

	    if (end && colon) {
	      if (!customProperty) {
	        while (tokens.length) {
	          token = tokens[tokens.length - 1][0];
	          if (token !== 'space' && token !== 'comment') break
	          this.tokenizer.back(tokens.pop());
	        }
	      }
	      this.decl(tokens, customProperty);
	    } else {
	      this.unknownWord(tokens);
	    }
	  }

	  rule(tokens) {
	    tokens.pop();

	    let node = new Rule$2();
	    this.init(node, tokens[0][2]);

	    node.raws.between = this.spacesAndCommentsFromEnd(tokens);
	    this.raw(node, 'selector', tokens);
	    this.current = node;
	  }

	  decl(tokens, customProperty) {
	    let node = new Declaration$2();
	    this.init(node, tokens[0][2]);

	    let last = tokens[tokens.length - 1];
	    if (last[0] === ';') {
	      this.semicolon = true;
	      tokens.pop();
	    }

	    node.source.end = this.getPosition(
	      last[3] || last[2] || findLastWithPosition(tokens)
	    );

	    while (tokens[0][0] !== 'word') {
	      if (tokens.length === 1) this.unknownWord(tokens);
	      node.raws.before += tokens.shift()[1];
	    }
	    node.source.start = this.getPosition(tokens[0][2]);

	    node.prop = '';
	    while (tokens.length) {
	      let type = tokens[0][0];
	      if (type === ':' || type === 'space' || type === 'comment') {
	        break
	      }
	      node.prop += tokens.shift()[1];
	    }

	    node.raws.between = '';

	    let token;
	    while (tokens.length) {
	      token = tokens.shift();

	      if (token[0] === ':') {
	        node.raws.between += token[1];
	        break
	      } else {
	        if (token[0] === 'word' && /\w/.test(token[1])) {
	          this.unknownWord([token]);
	        }
	        node.raws.between += token[1];
	      }
	    }

	    if (node.prop[0] === '_' || node.prop[0] === '*') {
	      node.raws.before += node.prop[0];
	      node.prop = node.prop.slice(1);
	    }

	    let firstSpaces = [];
	    let next;
	    while (tokens.length) {
	      next = tokens[0][0];
	      if (next !== 'space' && next !== 'comment') break
	      firstSpaces.push(tokens.shift());
	    }

	    this.precheckMissedSemicolon(tokens);

	    for (let i = tokens.length - 1; i >= 0; i--) {
	      token = tokens[i];
	      if (token[1].toLowerCase() === '!important') {
	        node.important = true;
	        let string = this.stringFrom(tokens, i);
	        string = this.spacesFromEnd(tokens) + string;
	        if (string !== ' !important') node.raws.important = string;
	        break
	      } else if (token[1].toLowerCase() === 'important') {
	        let cache = tokens.slice(0);
	        let str = '';
	        for (let j = i; j > 0; j--) {
	          let type = cache[j][0];
	          if (str.trim().indexOf('!') === 0 && type !== 'space') {
	            break
	          }
	          str = cache.pop()[1] + str;
	        }
	        if (str.trim().indexOf('!') === 0) {
	          node.important = true;
	          node.raws.important = str;
	          tokens = cache;
	        }
	      }

	      if (token[0] !== 'space' && token[0] !== 'comment') {
	        break
	      }
	    }

	    let hasWord = tokens.some(i => i[0] !== 'space' && i[0] !== 'comment');

	    if (hasWord) {
	      node.raws.between += firstSpaces.map(i => i[1]).join('');
	      firstSpaces = [];
	    }
	    this.raw(node, 'value', firstSpaces.concat(tokens), customProperty);

	    if (node.value.includes(':') && !customProperty) {
	      this.checkMissedSemicolon(tokens);
	    }
	  }

	  atrule(token) {
	    let node = new AtRule$2();
	    node.name = token[1].slice(1);
	    if (node.name === '') {
	      this.unnamedAtrule(node, token);
	    }
	    this.init(node, token[2]);

	    let type;
	    let prev;
	    let shift;
	    let last = false;
	    let open = false;
	    let params = [];
	    let brackets = [];

	    while (!this.tokenizer.endOfFile()) {
	      token = this.tokenizer.nextToken();
	      type = token[0];

	      if (type === '(' || type === '[') {
	        brackets.push(type === '(' ? ')' : ']');
	      } else if (type === '{' && brackets.length > 0) {
	        brackets.push('}');
	      } else if (type === brackets[brackets.length - 1]) {
	        brackets.pop();
	      }

	      if (brackets.length === 0) {
	        if (type === ';') {
	          node.source.end = this.getPosition(token[2]);
	          this.semicolon = true;
	          break
	        } else if (type === '{') {
	          open = true;
	          break
	        } else if (type === '}') {
	          if (params.length > 0) {
	            shift = params.length - 1;
	            prev = params[shift];
	            while (prev && prev[0] === 'space') {
	              prev = params[--shift];
	            }
	            if (prev) {
	              node.source.end = this.getPosition(prev[3] || prev[2]);
	            }
	          }
	          this.end(token);
	          break
	        } else {
	          params.push(token);
	        }
	      } else {
	        params.push(token);
	      }

	      if (this.tokenizer.endOfFile()) {
	        last = true;
	        break
	      }
	    }

	    node.raws.between = this.spacesAndCommentsFromEnd(params);
	    if (params.length) {
	      node.raws.afterName = this.spacesAndCommentsFromStart(params);
	      this.raw(node, 'params', params);
	      if (last) {
	        token = params[params.length - 1];
	        node.source.end = this.getPosition(token[3] || token[2]);
	        this.spaces = node.raws.between;
	        node.raws.between = '';
	      }
	    } else {
	      node.raws.afterName = '';
	      node.params = '';
	    }

	    if (open) {
	      node.nodes = [];
	      this.current = node;
	    }
	  }

	  end(token) {
	    if (this.current.nodes && this.current.nodes.length) {
	      this.current.raws.semicolon = this.semicolon;
	    }
	    this.semicolon = false;

	    this.current.raws.after = (this.current.raws.after || '') + this.spaces;
	    this.spaces = '';

	    if (this.current.parent) {
	      this.current.source.end = this.getPosition(token[2]);
	      this.current = this.current.parent;
	    } else {
	      this.unexpectedClose(token);
	    }
	  }

	  endFile() {
	    if (this.current.parent) this.unclosedBlock();
	    if (this.current.nodes && this.current.nodes.length) {
	      this.current.raws.semicolon = this.semicolon;
	    }
	    this.current.raws.after = (this.current.raws.after || '') + this.spaces;
	  }

	  freeSemicolon(token) {
	    this.spaces += token[1];
	    if (this.current.nodes) {
	      let prev = this.current.nodes[this.current.nodes.length - 1];
	      if (prev && prev.type === 'rule' && !prev.raws.ownSemicolon) {
	        prev.raws.ownSemicolon = this.spaces;
	        this.spaces = '';
	      }
	    }
	  }

	  // Helpers

	  getPosition(offset) {
	    let pos = this.input.fromOffset(offset);
	    return {
	      offset,
	      line: pos.line,
	      column: pos.col
	    }
	  }

	  init(node, offset) {
	    this.current.push(node);
	    node.source = {
	      start: this.getPosition(offset),
	      input: this.input
	    };
	    node.raws.before = this.spaces;
	    this.spaces = '';
	    if (node.type !== 'comment') this.semicolon = false;
	  }

	  raw(node, prop, tokens, customProperty) {
	    let token, type;
	    let length = tokens.length;
	    let value = '';
	    let clean = true;
	    let next, prev;

	    for (let i = 0; i < length; i += 1) {
	      token = tokens[i];
	      type = token[0];
	      if (type === 'space' && i === length - 1 && !customProperty) {
	        clean = false;
	      } else if (type === 'comment') {
	        prev = tokens[i - 1] ? tokens[i - 1][0] : 'empty';
	        next = tokens[i + 1] ? tokens[i + 1][0] : 'empty';
	        if (!SAFE_COMMENT_NEIGHBOR[prev] && !SAFE_COMMENT_NEIGHBOR[next]) {
	          if (value.slice(-1) === ',') {
	            clean = false;
	          } else {
	            value += token[1];
	          }
	        } else {
	          clean = false;
	        }
	      } else {
	        value += token[1];
	      }
	    }
	    if (!clean) {
	      let raw = tokens.reduce((all, i) => all + i[1], '');
	      node.raws[prop] = { value, raw };
	    }
	    node[prop] = value;
	  }

	  spacesAndCommentsFromEnd(tokens) {
	    let lastTokenType;
	    let spaces = '';
	    while (tokens.length) {
	      lastTokenType = tokens[tokens.length - 1][0];
	      if (lastTokenType !== 'space' && lastTokenType !== 'comment') break
	      spaces = tokens.pop()[1] + spaces;
	    }
	    return spaces
	  }

	  spacesAndCommentsFromStart(tokens) {
	    let next;
	    let spaces = '';
	    while (tokens.length) {
	      next = tokens[0][0];
	      if (next !== 'space' && next !== 'comment') break
	      spaces += tokens.shift()[1];
	    }
	    return spaces
	  }

	  spacesFromEnd(tokens) {
	    let lastTokenType;
	    let spaces = '';
	    while (tokens.length) {
	      lastTokenType = tokens[tokens.length - 1][0];
	      if (lastTokenType !== 'space') break
	      spaces = tokens.pop()[1] + spaces;
	    }
	    return spaces
	  }

	  stringFrom(tokens, from) {
	    let result = '';
	    for (let i = from; i < tokens.length; i++) {
	      result += tokens[i][1];
	    }
	    tokens.splice(from, tokens.length - from);
	    return result
	  }

	  colon(tokens) {
	    let brackets = 0;
	    let token, type, prev;
	    for (let [i, element] of tokens.entries()) {
	      token = element;
	      type = token[0];

	      if (type === '(') {
	        brackets += 1;
	      }
	      if (type === ')') {
	        brackets -= 1;
	      }
	      if (brackets === 0 && type === ':') {
	        if (!prev) {
	          this.doubleColon(token);
	        } else if (prev[0] === 'word' && prev[1] === 'progid') {
	          continue
	        } else {
	          return i
	        }
	      }

	      prev = token;
	    }
	    return false
	  }

	  // Errors

	  unclosedBracket(bracket) {
	    throw this.input.error(
	      'Unclosed bracket',
	      { offset: bracket[2] },
	      { offset: bracket[2] + 1 }
	    )
	  }

	  unknownWord(tokens) {
	    throw this.input.error(
	      'Unknown word',
	      { offset: tokens[0][2] },
	      { offset: tokens[0][2] + tokens[0][1].length }
	    )
	  }

	  unexpectedClose(token) {
	    throw this.input.error(
	      'Unexpected }',
	      { offset: token[2] },
	      { offset: token[2] + 1 }
	    )
	  }

	  unclosedBlock() {
	    let pos = this.current.source.start;
	    throw this.input.error('Unclosed block', pos.line, pos.column)
	  }

	  doubleColon(token) {
	    throw this.input.error(
	      'Double colon',
	      { offset: token[2] },
	      { offset: token[2] + token[1].length }
	    )
	  }

	  unnamedAtrule(node, token) {
	    throw this.input.error(
	      'At-rule without name',
	      { offset: token[2] },
	      { offset: token[2] + token[1].length }
	    )
	  }

	  precheckMissedSemicolon(/* tokens */) {
	    // Hook for Safe Parser
	  }

	  checkMissedSemicolon(tokens) {
	    let colon = this.colon(tokens);
	    if (colon === false) return

	    let founded = 0;
	    let token;
	    for (let j = colon - 1; j >= 0; j--) {
	      token = tokens[j];
	      if (token[0] !== 'space') {
	        founded += 1;
	        if (founded === 2) break
	      }
	    }
	    // If the token is a word, e.g. `!important`, `red` or any other valid property's value.
	    // Then we need to return the colon after that word token. [3] is the "end" colon of that word.
	    // And because we need it after that one we do +1 to get the next one.
	    throw this.input.error(
	      'Missed semicolon',
	      token[0] === 'word' ? token[3] + 1 : token[2]
	    )
	  }
	}

	var parser = Parser$1;

	let Container$2 = container;
	let Parser = parser;
	let Input$2 = input;

	function parse$3(css, opts) {
	  let input = new Input$2(css, opts);
	  let parser = new Parser(input);
	  try {
	    parser.parse();
	  } catch (e) {
	    if (process.env.NODE_ENV !== 'production') {
	      if (e.name === 'CssSyntaxError' && opts && opts.from) {
	        if (/\.scss$/i.test(opts.from)) {
	          e.message +=
	            '\nYou tried to parse SCSS with ' +
	            'the standard CSS parser; ' +
	            'try again with the postcss-scss parser';
	        } else if (/\.sass/i.test(opts.from)) {
	          e.message +=
	            '\nYou tried to parse Sass with ' +
	            'the standard CSS parser; ' +
	            'try again with the postcss-sass parser';
	        } else if (/\.less$/i.test(opts.from)) {
	          e.message +=
	            '\nYou tried to parse Less with ' +
	            'the standard CSS parser; ' +
	            'try again with the postcss-less parser';
	        }
	      }
	    }
	    throw e
	  }

	  return parser.root
	}

	var parse_1 = parse$3;
	parse$3.default = parse$3;

	Container$2.registerParse(parse$3);

	let { isClean, my } = symbols;
	let MapGenerator$1 = mapGenerator;
	let stringify$2 = stringify_1;
	let Container$1 = container;
	let Document$2 = document$1;
	let warnOnce$1 = warnOnce$2;
	let Result$2 = result;
	let parse$2 = parse_1;
	let Root$3 = root;

	const TYPE_TO_CLASS_NAME = {
	  document: 'Document',
	  root: 'Root',
	  atrule: 'AtRule',
	  rule: 'Rule',
	  decl: 'Declaration',
	  comment: 'Comment'
	};

	const PLUGIN_PROPS = {
	  postcssPlugin: true,
	  prepare: true,
	  Once: true,
	  Document: true,
	  Root: true,
	  Declaration: true,
	  Rule: true,
	  AtRule: true,
	  Comment: true,
	  DeclarationExit: true,
	  RuleExit: true,
	  AtRuleExit: true,
	  CommentExit: true,
	  RootExit: true,
	  DocumentExit: true,
	  OnceExit: true
	};

	const NOT_VISITORS = {
	  postcssPlugin: true,
	  prepare: true,
	  Once: true
	};

	const CHILDREN = 0;

	function isPromise(obj) {
	  return typeof obj === 'object' && typeof obj.then === 'function'
	}

	function getEvents(node) {
	  let key = false;
	  let type = TYPE_TO_CLASS_NAME[node.type];
	  if (node.type === 'decl') {
	    key = node.prop.toLowerCase();
	  } else if (node.type === 'atrule') {
	    key = node.name.toLowerCase();
	  }

	  if (key && node.append) {
	    return [
	      type,
	      type + '-' + key,
	      CHILDREN,
	      type + 'Exit',
	      type + 'Exit-' + key
	    ]
	  } else if (key) {
	    return [type, type + '-' + key, type + 'Exit', type + 'Exit-' + key]
	  } else if (node.append) {
	    return [type, CHILDREN, type + 'Exit']
	  } else {
	    return [type, type + 'Exit']
	  }
	}

	function toStack(node) {
	  let events;
	  if (node.type === 'document') {
	    events = ['Document', CHILDREN, 'DocumentExit'];
	  } else if (node.type === 'root') {
	    events = ['Root', CHILDREN, 'RootExit'];
	  } else {
	    events = getEvents(node);
	  }

	  return {
	    node,
	    events,
	    eventIndex: 0,
	    visitors: [],
	    visitorIndex: 0,
	    iterator: 0
	  }
	}

	function cleanMarks(node) {
	  node[isClean] = false;
	  if (node.nodes) node.nodes.forEach(i => cleanMarks(i));
	  return node
	}

	let postcss$1 = {};

	class LazyResult$2 {
	  constructor(processor, css, opts) {
	    this.stringified = false;
	    this.processed = false;

	    let root;
	    if (
	      typeof css === 'object' &&
	      css !== null &&
	      (css.type === 'root' || css.type === 'document')
	    ) {
	      root = cleanMarks(css);
	    } else if (css instanceof LazyResult$2 || css instanceof Result$2) {
	      root = cleanMarks(css.root);
	      if (css.map) {
	        if (typeof opts.map === 'undefined') opts.map = {};
	        if (!opts.map.inline) opts.map.inline = false;
	        opts.map.prev = css.map;
	      }
	    } else {
	      let parser = parse$2;
	      if (opts.syntax) parser = opts.syntax.parse;
	      if (opts.parser) parser = opts.parser;
	      if (parser.parse) parser = parser.parse;

	      try {
	        root = parser(css, opts);
	      } catch (error) {
	        this.processed = true;
	        this.error = error;
	      }

	      if (root && !root[my]) {
	        /* c8 ignore next 2 */
	        Container$1.rebuild(root);
	      }
	    }

	    this.result = new Result$2(processor, root, opts);
	    this.helpers = { ...postcss$1, result: this.result, postcss: postcss$1 };
	    this.plugins = this.processor.plugins.map(plugin => {
	      if (typeof plugin === 'object' && plugin.prepare) {
	        return { ...plugin, ...plugin.prepare(this.result) }
	      } else {
	        return plugin
	      }
	    });
	  }

	  get [Symbol.toStringTag]() {
	    return 'LazyResult'
	  }

	  get processor() {
	    return this.result.processor
	  }

	  get opts() {
	    return this.result.opts
	  }

	  get css() {
	    return this.stringify().css
	  }

	  get content() {
	    return this.stringify().content
	  }

	  get map() {
	    return this.stringify().map
	  }

	  get root() {
	    return this.sync().root
	  }

	  get messages() {
	    return this.sync().messages
	  }

	  warnings() {
	    return this.sync().warnings()
	  }

	  toString() {
	    return this.css
	  }

	  then(onFulfilled, onRejected) {
	    if (process.env.NODE_ENV !== 'production') {
	      if (!('from' in this.opts)) {
	        warnOnce$1(
	          'Without `from` option PostCSS could generate wrong source map ' +
	            'and will not find Browserslist config. Set it to CSS file path ' +
	            'or to `undefined` to prevent this warning.'
	        );
	      }
	    }
	    return this.async().then(onFulfilled, onRejected)
	  }

	  catch(onRejected) {
	    return this.async().catch(onRejected)
	  }

	  finally(onFinally) {
	    return this.async().then(onFinally, onFinally)
	  }

	  async() {
	    if (this.error) return Promise.reject(this.error)
	    if (this.processed) return Promise.resolve(this.result)
	    if (!this.processing) {
	      this.processing = this.runAsync();
	    }
	    return this.processing
	  }

	  sync() {
	    if (this.error) throw this.error
	    if (this.processed) return this.result
	    this.processed = true;

	    if (this.processing) {
	      throw this.getAsyncError()
	    }

	    for (let plugin of this.plugins) {
	      let promise = this.runOnRoot(plugin);
	      if (isPromise(promise)) {
	        throw this.getAsyncError()
	      }
	    }

	    this.prepareVisitors();
	    if (this.hasListener) {
	      let root = this.result.root;
	      while (!root[isClean]) {
	        root[isClean] = true;
	        this.walkSync(root);
	      }
	      if (this.listeners.OnceExit) {
	        if (root.type === 'document') {
	          for (let subRoot of root.nodes) {
	            this.visitSync(this.listeners.OnceExit, subRoot);
	          }
	        } else {
	          this.visitSync(this.listeners.OnceExit, root);
	        }
	      }
	    }

	    return this.result
	  }

	  stringify() {
	    if (this.error) throw this.error
	    if (this.stringified) return this.result
	    this.stringified = true;

	    this.sync();

	    let opts = this.result.opts;
	    let str = stringify$2;
	    if (opts.syntax) str = opts.syntax.stringify;
	    if (opts.stringifier) str = opts.stringifier;
	    if (str.stringify) str = str.stringify;

	    let map = new MapGenerator$1(str, this.result.root, this.result.opts);
	    let data = map.generate();
	    this.result.css = data[0];
	    this.result.map = data[1];

	    return this.result
	  }

	  walkSync(node) {
	    node[isClean] = true;
	    let events = getEvents(node);
	    for (let event of events) {
	      if (event === CHILDREN) {
	        if (node.nodes) {
	          node.each(child => {
	            if (!child[isClean]) this.walkSync(child);
	          });
	        }
	      } else {
	        let visitors = this.listeners[event];
	        if (visitors) {
	          if (this.visitSync(visitors, node.toProxy())) return
	        }
	      }
	    }
	  }

	  visitSync(visitors, node) {
	    for (let [plugin, visitor] of visitors) {
	      this.result.lastPlugin = plugin;
	      let promise;
	      try {
	        promise = visitor(node, this.helpers);
	      } catch (e) {
	        throw this.handleError(e, node.proxyOf)
	      }
	      if (node.type !== 'root' && node.type !== 'document' && !node.parent) {
	        return true
	      }
	      if (isPromise(promise)) {
	        throw this.getAsyncError()
	      }
	    }
	  }

	  runOnRoot(plugin) {
	    this.result.lastPlugin = plugin;
	    try {
	      if (typeof plugin === 'object' && plugin.Once) {
	        if (this.result.root.type === 'document') {
	          let roots = this.result.root.nodes.map(root =>
	            plugin.Once(root, this.helpers)
	          );

	          if (isPromise(roots[0])) {
	            return Promise.all(roots)
	          }

	          return roots
	        }

	        return plugin.Once(this.result.root, this.helpers)
	      } else if (typeof plugin === 'function') {
	        return plugin(this.result.root, this.result)
	      }
	    } catch (error) {
	      throw this.handleError(error)
	    }
	  }

	  getAsyncError() {
	    throw new Error('Use process(css).then(cb) to work with async plugins')
	  }

	  handleError(error, node) {
	    let plugin = this.result.lastPlugin;
	    try {
	      if (node) node.addToError(error);
	      this.error = error;
	      if (error.name === 'CssSyntaxError' && !error.plugin) {
	        error.plugin = plugin.postcssPlugin;
	        error.setMessage();
	      } else if (plugin.postcssVersion) {
	        if (process.env.NODE_ENV !== 'production') {
	          let pluginName = plugin.postcssPlugin;
	          let pluginVer = plugin.postcssVersion;
	          let runtimeVer = this.result.processor.version;
	          let a = pluginVer.split('.');
	          let b = runtimeVer.split('.');

	          if (a[0] !== b[0] || parseInt(a[1]) > parseInt(b[1])) {
	            // eslint-disable-next-line no-console
	            console.error(
	              'Unknown error from PostCSS plugin. Your current PostCSS ' +
	                'version is ' +
	                runtimeVer +
	                ', but ' +
	                pluginName +
	                ' uses ' +
	                pluginVer +
	                '. Perhaps this is the source of the error below.'
	            );
	          }
	        }
	      }
	    } catch (err) {
	      /* c8 ignore next 3 */
	      // eslint-disable-next-line no-console
	      if (console && console.error) console.error(err);
	    }
	    return error
	  }

	  async runAsync() {
	    this.plugin = 0;
	    for (let i = 0; i < this.plugins.length; i++) {
	      let plugin = this.plugins[i];
	      let promise = this.runOnRoot(plugin);
	      if (isPromise(promise)) {
	        try {
	          await promise;
	        } catch (error) {
	          throw this.handleError(error)
	        }
	      }
	    }

	    this.prepareVisitors();
	    if (this.hasListener) {
	      let root = this.result.root;
	      while (!root[isClean]) {
	        root[isClean] = true;
	        let stack = [toStack(root)];
	        while (stack.length > 0) {
	          let promise = this.visitTick(stack);
	          if (isPromise(promise)) {
	            try {
	              await promise;
	            } catch (e) {
	              let node = stack[stack.length - 1].node;
	              throw this.handleError(e, node)
	            }
	          }
	        }
	      }

	      if (this.listeners.OnceExit) {
	        for (let [plugin, visitor] of this.listeners.OnceExit) {
	          this.result.lastPlugin = plugin;
	          try {
	            if (root.type === 'document') {
	              let roots = root.nodes.map(subRoot =>
	                visitor(subRoot, this.helpers)
	              );

	              await Promise.all(roots);
	            } else {
	              await visitor(root, this.helpers);
	            }
	          } catch (e) {
	            throw this.handleError(e)
	          }
	        }
	      }
	    }

	    this.processed = true;
	    return this.stringify()
	  }

	  prepareVisitors() {
	    this.listeners = {};
	    let add = (plugin, type, cb) => {
	      if (!this.listeners[type]) this.listeners[type] = [];
	      this.listeners[type].push([plugin, cb]);
	    };
	    for (let plugin of this.plugins) {
	      if (typeof plugin === 'object') {
	        for (let event in plugin) {
	          if (!PLUGIN_PROPS[event] && /^[A-Z]/.test(event)) {
	            throw new Error(
	              `Unknown event ${event} in ${plugin.postcssPlugin}. ` +
	                `Try to update PostCSS (${this.processor.version} now).`
	            )
	          }
	          if (!NOT_VISITORS[event]) {
	            if (typeof plugin[event] === 'object') {
	              for (let filter in plugin[event]) {
	                if (filter === '*') {
	                  add(plugin, event, plugin[event][filter]);
	                } else {
	                  add(
	                    plugin,
	                    event + '-' + filter.toLowerCase(),
	                    plugin[event][filter]
	                  );
	                }
	              }
	            } else if (typeof plugin[event] === 'function') {
	              add(plugin, event, plugin[event]);
	            }
	          }
	        }
	      }
	    }
	    this.hasListener = Object.keys(this.listeners).length > 0;
	  }

	  visitTick(stack) {
	    let visit = stack[stack.length - 1];
	    let { node, visitors } = visit;

	    if (node.type !== 'root' && node.type !== 'document' && !node.parent) {
	      stack.pop();
	      return
	    }

	    if (visitors.length > 0 && visit.visitorIndex < visitors.length) {
	      let [plugin, visitor] = visitors[visit.visitorIndex];
	      visit.visitorIndex += 1;
	      if (visit.visitorIndex === visitors.length) {
	        visit.visitors = [];
	        visit.visitorIndex = 0;
	      }
	      this.result.lastPlugin = plugin;
	      try {
	        return visitor(node.toProxy(), this.helpers)
	      } catch (e) {
	        throw this.handleError(e, node)
	      }
	    }

	    if (visit.iterator !== 0) {
	      let iterator = visit.iterator;
	      let child;
	      while ((child = node.nodes[node.indexes[iterator]])) {
	        node.indexes[iterator] += 1;
	        if (!child[isClean]) {
	          child[isClean] = true;
	          stack.push(toStack(child));
	          return
	        }
	      }
	      visit.iterator = 0;
	      delete node.indexes[iterator];
	    }

	    let events = visit.events;
	    while (visit.eventIndex < events.length) {
	      let event = events[visit.eventIndex];
	      visit.eventIndex += 1;
	      if (event === CHILDREN) {
	        if (node.nodes && node.nodes.length) {
	          node[isClean] = true;
	          visit.iterator = node.getIterator();
	        }
	        return
	      } else if (this.listeners[event]) {
	        visit.visitors = this.listeners[event];
	        return
	      }
	    }
	    stack.pop();
	  }
	}

	LazyResult$2.registerPostcss = dependant => {
	  postcss$1 = dependant;
	};

	var lazyResult = LazyResult$2;
	LazyResult$2.default = LazyResult$2;

	Root$3.registerLazyResult(LazyResult$2);
	Document$2.registerLazyResult(LazyResult$2);

	let MapGenerator = mapGenerator;
	let stringify$1 = stringify_1;
	let warnOnce = warnOnce$2;
	let parse$1 = parse_1;
	const Result$1 = result;

	class NoWorkResult$1 {
	  constructor(processor, css, opts) {
	    css = css.toString();
	    this.stringified = false;

	    this._processor = processor;
	    this._css = css;
	    this._opts = opts;
	    this._map = undefined;
	    let root;

	    let str = stringify$1;
	    this.result = new Result$1(this._processor, root, this._opts);
	    this.result.css = css;

	    let self = this;
	    Object.defineProperty(this.result, 'root', {
	      get() {
	        return self.root
	      }
	    });

	    let map = new MapGenerator(str, root, this._opts, css);
	    if (map.isMap()) {
	      let [generatedCSS, generatedMap] = map.generate();
	      if (generatedCSS) {
	        this.result.css = generatedCSS;
	      }
	      if (generatedMap) {
	        this.result.map = generatedMap;
	      }
	    }
	  }

	  get [Symbol.toStringTag]() {
	    return 'NoWorkResult'
	  }

	  get processor() {
	    return this.result.processor
	  }

	  get opts() {
	    return this.result.opts
	  }

	  get css() {
	    return this.result.css
	  }

	  get content() {
	    return this.result.css
	  }

	  get map() {
	    return this.result.map
	  }

	  get root() {
	    if (this._root) {
	      return this._root
	    }

	    let root;
	    let parser = parse$1;

	    try {
	      root = parser(this._css, this._opts);
	    } catch (error) {
	      this.error = error;
	    }

	    if (this.error) {
	      throw this.error
	    } else {
	      this._root = root;
	      return root
	    }
	  }

	  get messages() {
	    return []
	  }

	  warnings() {
	    return []
	  }

	  toString() {
	    return this._css
	  }

	  then(onFulfilled, onRejected) {
	    if (process.env.NODE_ENV !== 'production') {
	      if (!('from' in this._opts)) {
	        warnOnce(
	          'Without `from` option PostCSS could generate wrong source map ' +
	            'and will not find Browserslist config. Set it to CSS file path ' +
	            'or to `undefined` to prevent this warning.'
	        );
	      }
	    }

	    return this.async().then(onFulfilled, onRejected)
	  }

	  catch(onRejected) {
	    return this.async().catch(onRejected)
	  }

	  finally(onFinally) {
	    return this.async().then(onFinally, onFinally)
	  }

	  async() {
	    if (this.error) return Promise.reject(this.error)
	    return Promise.resolve(this.result)
	  }

	  sync() {
	    if (this.error) throw this.error
	    return this.result
	  }
	}

	var noWorkResult = NoWorkResult$1;
	NoWorkResult$1.default = NoWorkResult$1;

	let NoWorkResult = noWorkResult;
	let LazyResult$1 = lazyResult;
	let Document$1 = document$1;
	let Root$2 = root;

	class Processor$1 {
	  constructor(plugins = []) {
	    this.version = '8.4.14';
	    this.plugins = this.normalize(plugins);
	  }

	  use(plugin) {
	    this.plugins = this.plugins.concat(this.normalize([plugin]));
	    return this
	  }

	  process(css, opts = {}) {
	    if (
	      this.plugins.length === 0 &&
	      typeof opts.parser === 'undefined' &&
	      typeof opts.stringifier === 'undefined' &&
	      typeof opts.syntax === 'undefined'
	    ) {
	      return new NoWorkResult(this, css, opts)
	    } else {
	      return new LazyResult$1(this, css, opts)
	    }
	  }

	  normalize(plugins) {
	    let normalized = [];
	    for (let i of plugins) {
	      if (i.postcss === true) {
	        i = i();
	      } else if (i.postcss) {
	        i = i.postcss;
	      }

	      if (typeof i === 'object' && Array.isArray(i.plugins)) {
	        normalized = normalized.concat(i.plugins);
	      } else if (typeof i === 'object' && i.postcssPlugin) {
	        normalized.push(i);
	      } else if (typeof i === 'function') {
	        normalized.push(i);
	      } else if (typeof i === 'object' && (i.parse || i.stringify)) {
	        if (process.env.NODE_ENV !== 'production') {
	          throw new Error(
	            'PostCSS syntaxes cannot be used as plugins. Instead, please use ' +
	              'one of the syntax/parser/stringifier options as outlined ' +
	              'in your PostCSS runner documentation.'
	          )
	        }
	      } else {
	        throw new Error(i + ' is not a PostCSS plugin')
	      }
	    }
	    return normalized
	  }
	}

	var processor = Processor$1;
	Processor$1.default = Processor$1;

	Root$2.registerProcessor(Processor$1);
	Document$1.registerProcessor(Processor$1);

	let Declaration$1 = declaration;
	let PreviousMap = previousMap;
	let Comment$1 = comment;
	let AtRule$1 = atRule;
	let Input$1 = input;
	let Root$1 = root;
	let Rule$1 = rule;

	function fromJSON$1(json, inputs) {
	  if (Array.isArray(json)) return json.map(n => fromJSON$1(n))

	  let { inputs: ownInputs, ...defaults } = json;
	  if (ownInputs) {
	    inputs = [];
	    for (let input of ownInputs) {
	      let inputHydrated = { ...input, __proto__: Input$1.prototype };
	      if (inputHydrated.map) {
	        inputHydrated.map = {
	          ...inputHydrated.map,
	          __proto__: PreviousMap.prototype
	        };
	      }
	      inputs.push(inputHydrated);
	    }
	  }
	  if (defaults.nodes) {
	    defaults.nodes = json.nodes.map(n => fromJSON$1(n, inputs));
	  }
	  if (defaults.source) {
	    let { inputId, ...source } = defaults.source;
	    defaults.source = source;
	    if (inputId != null) {
	      defaults.source.input = inputs[inputId];
	    }
	  }
	  if (defaults.type === 'root') {
	    return new Root$1(defaults)
	  } else if (defaults.type === 'decl') {
	    return new Declaration$1(defaults)
	  } else if (defaults.type === 'rule') {
	    return new Rule$1(defaults)
	  } else if (defaults.type === 'comment') {
	    return new Comment$1(defaults)
	  } else if (defaults.type === 'atrule') {
	    return new AtRule$1(defaults)
	  } else {
	    throw new Error('Unknown node type: ' + json.type)
	  }
	}

	var fromJSON_1 = fromJSON$1;
	fromJSON$1.default = fromJSON$1;

	let CssSyntaxError = cssSyntaxError;
	let Declaration = declaration;
	let LazyResult = lazyResult;
	let Container = container;
	let Processor = processor;
	let stringify = stringify_1;
	let fromJSON = fromJSON_1;
	let Document = document$1;
	let Warning = warning;
	let Comment = comment;
	let AtRule = atRule;
	let Result = result;
	let Input = input;
	let parse = parse_1;
	let list = list_1;
	let Rule = rule;
	let Root = root;
	let Node$1 = node_1;

	function postcss(...plugins) {
	  if (plugins.length === 1 && Array.isArray(plugins[0])) {
	    plugins = plugins[0];
	  }
	  return new Processor(plugins)
	}

	postcss.plugin = function plugin(name, initializer) {
	  let warningPrinted = false;
	  function creator(...args) {
	    // eslint-disable-next-line no-console
	    if (console && console.warn && !warningPrinted) {
	      warningPrinted = true;
	      // eslint-disable-next-line no-console
	      console.warn(
	        name +
	          ': postcss.plugin was deprecated. Migration guide:\n' +
	          'https://evilmartians.com/chronicles/postcss-8-plugin-migration'
	      );
	      if (process.env.LANG && process.env.LANG.startsWith('cn')) {
	        /* c8 ignore next 7 */
	        // eslint-disable-next-line no-console
	        console.warn(
	          name +
	            ': 里面 postcss.plugin 被弃用. 迁移指南:\n' +
	            'https://www.w3ctech.com/topic/2226'
	        );
	      }
	    }
	    let transformer = initializer(...args);
	    transformer.postcssPlugin = name;
	    transformer.postcssVersion = new Processor().version;
	    return transformer
	  }

	  let cache;
	  Object.defineProperty(creator, 'postcss', {
	    get() {
	      if (!cache) cache = creator();
	      return cache
	    }
	  });

	  creator.process = function (css, processOpts, pluginOpts) {
	    return postcss([creator(pluginOpts)]).process(css, processOpts)
	  };

	  return creator
	};

	postcss.stringify = stringify;
	postcss.parse = parse;
	postcss.fromJSON = fromJSON;
	postcss.list = list;

	postcss.comment = defaults => new Comment(defaults);
	postcss.atRule = defaults => new AtRule(defaults);
	postcss.decl = defaults => new Declaration(defaults);
	postcss.rule = defaults => new Rule(defaults);
	postcss.root = defaults => new Root(defaults);
	postcss.document = defaults => new Document(defaults);

	postcss.CssSyntaxError = CssSyntaxError;
	postcss.Declaration = Declaration;
	postcss.Container = Container;
	postcss.Processor = Processor;
	postcss.Document = Document;
	postcss.Comment = Comment;
	postcss.Warning = Warning;
	postcss.AtRule = AtRule;
	postcss.Result = Result;
	postcss.Input = Input;
	postcss.Rule = Rule;
	postcss.Root = Root;
	postcss.Node = Node$1;

	LazyResult.registerPostcss(postcss);

	var postcss_1 = postcss;
	postcss.default = postcss;

	const htmlparser = lib$5;
	const escapeStringRegexp = escapeStringRegexp$1;
	const { isPlainObject } = isPlainObject$2;
	const deepmerge = cjs;
	const parseSrcset = parseSrcset$1.exports;
	const { parse: postcssParse } = postcss_1;
	// Tags that can conceivably represent stand-alone media.
	const mediaTags = [
	  'img', 'audio', 'video', 'picture', 'svg',
	  'object', 'map', 'iframe', 'embed'
	];
	// Tags that are inherently vulnerable to being used in XSS attacks.
	const vulnerableTags = [ 'script', 'style' ];

	function each(obj, cb) {
	  if (obj) {
	    Object.keys(obj).forEach(function (key) {
	      cb(obj[key], key);
	    });
	  }
	}

	// Avoid false positives with .__proto__, .hasOwnProperty, etc.
	function has$2(obj, key) {
	  return ({}).hasOwnProperty.call(obj, key);
	}

	// Returns those elements of `a` for which `cb(a)` returns truthy
	function filter(a, cb) {
	  const n = [];
	  each(a, function(v) {
	    if (cb(v)) {
	      n.push(v);
	    }
	  });
	  return n;
	}

	function isEmptyObject(obj) {
	  for (const key in obj) {
	    if (has$2(obj, key)) {
	      return false;
	    }
	  }
	  return true;
	}

	function stringifySrcset(parsedSrcset) {
	  return parsedSrcset.map(function(part) {
	    if (!part.url) {
	      throw new Error('URL missing');
	    }

	    return (
	      part.url +
	      (part.w ? ` ${part.w}w` : '') +
	      (part.h ? ` ${part.h}h` : '') +
	      (part.d ? ` ${part.d}x` : '')
	    );
	  }).join(', ');
	}

	var sanitizeHtml_1 = sanitizeHtml;

	// A valid attribute name.
	// We use a tolerant definition based on the set of strings defined by
	// html.spec.whatwg.org/multipage/parsing.html#before-attribute-name-state
	// and html.spec.whatwg.org/multipage/parsing.html#attribute-name-state .
	// The characters accepted are ones which can be appended to the attribute
	// name buffer without triggering a parse error:
	//   * unexpected-equals-sign-before-attribute-name
	//   * unexpected-null-character
	//   * unexpected-character-in-attribute-name
	// We exclude the empty string because it's impossible to get to the after
	// attribute name state with an empty attribute name buffer.
	const VALID_HTML_ATTRIBUTE_NAME = /^[^\0\t\n\f\r /<=>]+$/;

	// Ignore the _recursing flag; it's there for recursive
	// invocation as a guard against this exploit:
	// https://github.com/fb55/htmlparser2/issues/105

	function sanitizeHtml(html, options, _recursing) {
	  if (html == null) {
	    return '';
	  }

	  let result = '';
	  // Used for hot swapping the result variable with an empty string in order to "capture" the text written to it.
	  let tempResult = '';

	  function Frame(tag, attribs) {
	    const that = this;
	    this.tag = tag;
	    this.attribs = attribs || {};
	    this.tagPosition = result.length;
	    this.text = ''; // Node inner text
	    this.mediaChildren = [];

	    this.updateParentNodeText = function() {
	      if (stack.length) {
	        const parentFrame = stack[stack.length - 1];
	        parentFrame.text += that.text;
	      }
	    };

	    this.updateParentNodeMediaChildren = function() {
	      if (stack.length && mediaTags.includes(this.tag)) {
	        const parentFrame = stack[stack.length - 1];
	        parentFrame.mediaChildren.push(this.tag);
	      }
	    };
	  }

	  options = Object.assign({}, sanitizeHtml.defaults, options);
	  options.parser = Object.assign({}, htmlParserDefaults, options.parser);

	  // vulnerableTags
	  vulnerableTags.forEach(function (tag) {
	    if (
	      options.allowedTags && options.allowedTags.indexOf(tag) > -1 &&
	      !options.allowVulnerableTags
	    ) {
	      console.warn(`\n\n⚠️ Your \`allowedTags\` option includes, \`${tag}\`, which is inherently\nvulnerable to XSS attacks. Please remove it from \`allowedTags\`.\nOr, to disable this warning, add the \`allowVulnerableTags\` option\nand ensure you are accounting for this risk.\n\n`);
	    }
	  });

	  // Tags that contain something other than HTML, or where discarding
	  // the text when the tag is disallowed makes sense for other reasons.
	  // If we are not allowing these tags, we should drop their content too.
	  // For other tags you would drop the tag but keep its content.
	  const nonTextTagsArray = options.nonTextTags || [
	    'script',
	    'style',
	    'textarea',
	    'option'
	  ];
	  let allowedAttributesMap;
	  let allowedAttributesGlobMap;
	  if (options.allowedAttributes) {
	    allowedAttributesMap = {};
	    allowedAttributesGlobMap = {};
	    each(options.allowedAttributes, function(attributes, tag) {
	      allowedAttributesMap[tag] = [];
	      const globRegex = [];
	      attributes.forEach(function(obj) {
	        if (typeof obj === 'string' && obj.indexOf('*') >= 0) {
	          globRegex.push(escapeStringRegexp(obj).replace(/\\\*/g, '.*'));
	        } else {
	          allowedAttributesMap[tag].push(obj);
	        }
	      });
	      if (globRegex.length) {
	        allowedAttributesGlobMap[tag] = new RegExp('^(' + globRegex.join('|') + ')$');
	      }
	    });
	  }
	  const allowedClassesMap = {};
	  const allowedClassesGlobMap = {};
	  const allowedClassesRegexMap = {};
	  each(options.allowedClasses, function(classes, tag) {
	    // Implicitly allows the class attribute
	    if (allowedAttributesMap) {
	      if (!has$2(allowedAttributesMap, tag)) {
	        allowedAttributesMap[tag] = [];
	      }
	      allowedAttributesMap[tag].push('class');
	    }

	    allowedClassesMap[tag] = [];
	    allowedClassesRegexMap[tag] = [];
	    const globRegex = [];
	    classes.forEach(function(obj) {
	      if (typeof obj === 'string' && obj.indexOf('*') >= 0) {
	        globRegex.push(escapeStringRegexp(obj).replace(/\\\*/g, '.*'));
	      } else if (obj instanceof RegExp) {
	        allowedClassesRegexMap[tag].push(obj);
	      } else {
	        allowedClassesMap[tag].push(obj);
	      }
	    });
	    if (globRegex.length) {
	      allowedClassesGlobMap[tag] = new RegExp('^(' + globRegex.join('|') + ')$');
	    }
	  });

	  const transformTagsMap = {};
	  let transformTagsAll;
	  each(options.transformTags, function(transform, tag) {
	    let transFun;
	    if (typeof transform === 'function') {
	      transFun = transform;
	    } else if (typeof transform === 'string') {
	      transFun = sanitizeHtml.simpleTransform(transform);
	    }
	    if (tag === '*') {
	      transformTagsAll = transFun;
	    } else {
	      transformTagsMap[tag] = transFun;
	    }
	  });

	  let depth;
	  let stack;
	  let skipMap;
	  let transformMap;
	  let skipText;
	  let skipTextDepth;
	  let addedText = false;

	  initializeState();

	  const parser = new htmlparser.Parser({
	    onopentag: function(name, attribs) {
	      // If `enforceHtmlBoundary` is `true` and this has found the opening
	      // `html` tag, reset the state.
	      if (options.enforceHtmlBoundary && name === 'html') {
	        initializeState();
	      }

	      if (skipText) {
	        skipTextDepth++;
	        return;
	      }
	      const frame = new Frame(name, attribs);
	      stack.push(frame);

	      let skip = false;
	      const hasText = !!frame.text;
	      let transformedTag;
	      if (has$2(transformTagsMap, name)) {
	        transformedTag = transformTagsMap[name](name, attribs);

	        frame.attribs = attribs = transformedTag.attribs;

	        if (transformedTag.text !== undefined) {
	          frame.innerText = transformedTag.text;
	        }

	        if (name !== transformedTag.tagName) {
	          frame.name = name = transformedTag.tagName;
	          transformMap[depth] = transformedTag.tagName;
	        }
	      }
	      if (transformTagsAll) {
	        transformedTag = transformTagsAll(name, attribs);

	        frame.attribs = attribs = transformedTag.attribs;
	        if (name !== transformedTag.tagName) {
	          frame.name = name = transformedTag.tagName;
	          transformMap[depth] = transformedTag.tagName;
	        }
	      }

	      if ((options.allowedTags && options.allowedTags.indexOf(name) === -1) || (options.disallowedTagsMode === 'recursiveEscape' && !isEmptyObject(skipMap)) || (options.nestingLimit != null && depth >= options.nestingLimit)) {
	        skip = true;
	        skipMap[depth] = true;
	        if (options.disallowedTagsMode === 'discard') {
	          if (nonTextTagsArray.indexOf(name) !== -1) {
	            skipText = true;
	            skipTextDepth = 1;
	          }
	        }
	        skipMap[depth] = true;
	      }
	      depth++;
	      if (skip) {
	        if (options.disallowedTagsMode === 'discard') {
	          // We want the contents but not this tag
	          return;
	        }
	        tempResult = result;
	        result = '';
	      }
	      result += '<' + name;

	      if (name === 'script') {
	        if (options.allowedScriptHostnames || options.allowedScriptDomains) {
	          frame.innerText = '';
	        }
	      }

	      if (!allowedAttributesMap || has$2(allowedAttributesMap, name) || allowedAttributesMap['*']) {
	        each(attribs, function(value, a) {
	          if (!VALID_HTML_ATTRIBUTE_NAME.test(a)) {
	            // This prevents part of an attribute name in the output from being
	            // interpreted as the end of an attribute, or end of a tag.
	            delete frame.attribs[a];
	            return;
	          }
	          // check allowedAttributesMap for the element and attribute and modify the value
	          // as necessary if there are specific values defined.
	          let passedAllowedAttributesMapCheck = false;
	          if (!allowedAttributesMap ||
	            (has$2(allowedAttributesMap, name) && allowedAttributesMap[name].indexOf(a) !== -1) ||
	            (allowedAttributesMap['*'] && allowedAttributesMap['*'].indexOf(a) !== -1) ||
	            (has$2(allowedAttributesGlobMap, name) && allowedAttributesGlobMap[name].test(a)) ||
	            (allowedAttributesGlobMap['*'] && allowedAttributesGlobMap['*'].test(a))) {
	            passedAllowedAttributesMapCheck = true;
	          } else if (allowedAttributesMap && allowedAttributesMap[name]) {
	            for (const o of allowedAttributesMap[name]) {
	              if (isPlainObject(o) && o.name && (o.name === a)) {
	                passedAllowedAttributesMapCheck = true;
	                let newValue = '';
	                if (o.multiple === true) {
	                  // verify the values that are allowed
	                  const splitStrArray = value.split(' ');
	                  for (const s of splitStrArray) {
	                    if (o.values.indexOf(s) !== -1) {
	                      if (newValue === '') {
	                        newValue = s;
	                      } else {
	                        newValue += ' ' + s;
	                      }
	                    }
	                  }
	                } else if (o.values.indexOf(value) >= 0) {
	                  // verified an allowed value matches the entire attribute value
	                  newValue = value;
	                }
	                value = newValue;
	              }
	            }
	          }
	          if (passedAllowedAttributesMapCheck) {
	            if (options.allowedSchemesAppliedToAttributes.indexOf(a) !== -1) {
	              if (naughtyHref(name, value)) {
	                delete frame.attribs[a];
	                return;
	              }
	            }

	            if (name === 'script' && a === 'src') {

	              let allowed = true;

	              try {
	                const parsed = parseUrl(value);

	                if (options.allowedScriptHostnames || options.allowedScriptDomains) {
	                  const allowedHostname = (options.allowedScriptHostnames || []).find(function (hostname) {
	                    return hostname === parsed.url.hostname;
	                  });
	                  const allowedDomain = (options.allowedScriptDomains || []).find(function(domain) {
	                    return parsed.url.hostname === domain || parsed.url.hostname.endsWith(`.${domain}`);
	                  });
	                  allowed = allowedHostname || allowedDomain;
	                }
	              } catch (e) {
	                allowed = false;
	              }

	              if (!allowed) {
	                delete frame.attribs[a];
	                return;
	              }
	            }

	            if (name === 'iframe' && a === 'src') {
	              let allowed = true;
	              try {
	                const parsed = parseUrl(value);

	                if (parsed.isRelativeUrl) {
	                  // default value of allowIframeRelativeUrls is true
	                  // unless allowedIframeHostnames or allowedIframeDomains specified
	                  allowed = has$2(options, 'allowIframeRelativeUrls')
	                    ? options.allowIframeRelativeUrls
	                    : (!options.allowedIframeHostnames && !options.allowedIframeDomains);
	                } else if (options.allowedIframeHostnames || options.allowedIframeDomains) {
	                  const allowedHostname = (options.allowedIframeHostnames || []).find(function (hostname) {
	                    return hostname === parsed.url.hostname;
	                  });
	                  const allowedDomain = (options.allowedIframeDomains || []).find(function(domain) {
	                    return parsed.url.hostname === domain || parsed.url.hostname.endsWith(`.${domain}`);
	                  });
	                  allowed = allowedHostname || allowedDomain;
	                }
	              } catch (e) {
	                // Unparseable iframe src
	                allowed = false;
	              }
	              if (!allowed) {
	                delete frame.attribs[a];
	                return;
	              }
	            }
	            if (a === 'srcset') {
	              try {
	                let parsed = parseSrcset(value);
	                parsed.forEach(function(value) {
	                  if (naughtyHref('srcset', value.url)) {
	                    value.evil = true;
	                  }
	                });
	                parsed = filter(parsed, function(v) {
	                  return !v.evil;
	                });
	                if (!parsed.length) {
	                  delete frame.attribs[a];
	                  return;
	                } else {
	                  value = stringifySrcset(filter(parsed, function(v) {
	                    return !v.evil;
	                  }));
	                  frame.attribs[a] = value;
	                }
	              } catch (e) {
	                // Unparseable srcset
	                delete frame.attribs[a];
	                return;
	              }
	            }
	            if (a === 'class') {
	              const allowedSpecificClasses = allowedClassesMap[name];
	              const allowedWildcardClasses = allowedClassesMap['*'];
	              const allowedSpecificClassesGlob = allowedClassesGlobMap[name];
	              const allowedSpecificClassesRegex = allowedClassesRegexMap[name];
	              const allowedWildcardClassesGlob = allowedClassesGlobMap['*'];
	              const allowedClassesGlobs = [
	                allowedSpecificClassesGlob,
	                allowedWildcardClassesGlob
	              ]
	                .concat(allowedSpecificClassesRegex)
	                .filter(function (t) {
	                  return t;
	                });
	              if (allowedSpecificClasses && allowedWildcardClasses) {
	                value = filterClasses(value, deepmerge(allowedSpecificClasses, allowedWildcardClasses), allowedClassesGlobs);
	              } else {
	                value = filterClasses(value, allowedSpecificClasses || allowedWildcardClasses, allowedClassesGlobs);
	              }
	              if (!value.length) {
	                delete frame.attribs[a];
	                return;
	              }
	            }
	            if (a === 'style') {
	              try {
	                const abstractSyntaxTree = postcssParse(name + ' {' + value + '}');
	                const filteredAST = filterCss(abstractSyntaxTree, options.allowedStyles);

	                value = stringifyStyleAttributes(filteredAST);

	                if (value.length === 0) {
	                  delete frame.attribs[a];
	                  return;
	                }
	              } catch (e) {
	                delete frame.attribs[a];
	                return;
	              }
	            }
	            result += ' ' + a;
	            if (value && value.length) {
	              result += '="' + escapeHtml(value, true) + '"';
	            }
	          } else {
	            delete frame.attribs[a];
	          }
	        });
	      }
	      if (options.selfClosing.indexOf(name) !== -1) {
	        result += ' />';
	      } else {
	        result += '>';
	        if (frame.innerText && !hasText && !options.textFilter) {
	          result += escapeHtml(frame.innerText);
	          addedText = true;
	        }
	      }
	      if (skip) {
	        result = tempResult + escapeHtml(result);
	        tempResult = '';
	      }
	    },
	    ontext: function(text) {
	      if (skipText) {
	        return;
	      }
	      const lastFrame = stack[stack.length - 1];
	      let tag;

	      if (lastFrame) {
	        tag = lastFrame.tag;
	        // If inner text was set by transform function then let's use it
	        text = lastFrame.innerText !== undefined ? lastFrame.innerText : text;
	      }

	      if (options.disallowedTagsMode === 'discard' && ((tag === 'script') || (tag === 'style'))) {
	        // htmlparser2 gives us these as-is. Escaping them ruins the content. Allowing
	        // script tags is, by definition, game over for XSS protection, so if that's
	        // your concern, don't allow them. The same is essentially true for style tags
	        // which have their own collection of XSS vectors.
	        result += text;
	      } else {
	        const escaped = escapeHtml(text, false);
	        if (options.textFilter && !addedText) {
	          result += options.textFilter(escaped, tag);
	        } else if (!addedText) {
	          result += escaped;
	        }
	      }
	      if (stack.length) {
	        const frame = stack[stack.length - 1];
	        frame.text += text;
	      }
	    },
	    onclosetag: function(name) {

	      if (skipText) {
	        skipTextDepth--;
	        if (!skipTextDepth) {
	          skipText = false;
	        } else {
	          return;
	        }
	      }

	      const frame = stack.pop();
	      if (!frame) {
	        // Do not crash on bad markup
	        return;
	      }
	      skipText = options.enforceHtmlBoundary ? name === 'html' : false;
	      depth--;
	      const skip = skipMap[depth];
	      if (skip) {
	        delete skipMap[depth];
	        if (options.disallowedTagsMode === 'discard') {
	          frame.updateParentNodeText();
	          return;
	        }
	        tempResult = result;
	        result = '';
	      }

	      if (transformMap[depth]) {
	        name = transformMap[depth];
	        delete transformMap[depth];
	      }

	      if (options.exclusiveFilter && options.exclusiveFilter(frame)) {
	        result = result.substr(0, frame.tagPosition);
	        return;
	      }

	      frame.updateParentNodeMediaChildren();
	      frame.updateParentNodeText();

	      if (options.selfClosing.indexOf(name) !== -1) {
	        // Already output />
	        if (skip) {
	          result = tempResult;
	          tempResult = '';
	        }
	        return;
	      }

	      result += '</' + name + '>';
	      if (skip) {
	        result = tempResult + escapeHtml(result);
	        tempResult = '';
	      }
	      addedText = false;
	    }
	  }, options.parser);
	  parser.write(html);
	  parser.end();

	  return result;

	  function initializeState() {
	    result = '';
	    depth = 0;
	    stack = [];
	    skipMap = {};
	    transformMap = {};
	    skipText = false;
	    skipTextDepth = 0;
	  }

	  function escapeHtml(s, quote) {
	    if (typeof (s) !== 'string') {
	      s = s + '';
	    }
	    if (options.parser.decodeEntities) {
	      s = s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
	      if (quote) {
	        s = s.replace(/"/g, '&quot;');
	      }
	    }
	    // TODO: this is inadequate because it will pass `&0;`. This approach
	    // will not work, each & must be considered with regard to whether it
	    // is followed by a 100% syntactically valid entity or not, and escaped
	    // if it is not. If this bothers you, don't set parser.decodeEntities
	    // to false. (The default is true.)
	    s = s.replace(/&(?![a-zA-Z0-9#]{1,20};)/g, '&amp;') // Match ampersands not part of existing HTML entity
	      .replace(/</g, '&lt;')
	      .replace(/>/g, '&gt;');
	    if (quote) {
	      s = s.replace(/"/g, '&quot;');
	    }
	    return s;
	  }

	  function naughtyHref(name, href) {
	    // Browsers ignore character codes of 32 (space) and below in a surprising
	    // number of situations. Start reading here:
	    // https://www.owasp.org/index.php/XSS_Filter_Evasion_Cheat_Sheet#Embedded_tab
	    // eslint-disable-next-line no-control-regex
	    href = href.replace(/[\x00-\x20]+/g, '');
	    // Clobber any comments in URLs, which the browser might
	    // interpret inside an XML data island, allowing
	    // a javascript: URL to be snuck through
	    while (true) {
	      const firstIndex = href.indexOf('<!--');
	      if (firstIndex === -1) {
	        break;
	      }
	      const lastIndex = href.indexOf('-->', firstIndex + 4);
	      if (lastIndex === -1) {
	        break;
	      }
	      href = href.substring(0, firstIndex) + href.substring(lastIndex + 3);
	    }
	    // Case insensitive so we don't get faked out by JAVASCRIPT #1
	    // Allow more characters after the first so we don't get faked
	    // out by certain schemes browsers accept
	    const matches = href.match(/^([a-zA-Z][a-zA-Z0-9.\-+]*):/);
	    if (!matches) {
	      // Protocol-relative URL starting with any combination of '/' and '\'
	      if (href.match(/^[/\\]{2}/)) {
	        return !options.allowProtocolRelative;
	      }

	      // No scheme
	      return false;
	    }
	    const scheme = matches[1].toLowerCase();

	    if (has$2(options.allowedSchemesByTag, name)) {
	      return options.allowedSchemesByTag[name].indexOf(scheme) === -1;
	    }

	    return !options.allowedSchemes || options.allowedSchemes.indexOf(scheme) === -1;
	  }

	  function parseUrl(value) {
	    value = value.replace(/^(\w+:)?\s*[\\/]\s*[\\/]/, '$1//');
	    if (value.startsWith('relative:')) {
	      // An attempt to exploit our workaround for base URLs being
	      // mandatory for relative URL validation in the WHATWG
	      // URL parser, reject it
	      throw new Error('relative: exploit attempt');
	    }
	    // naughtyHref is in charge of whether protocol relative URLs
	    // are cool. Here we are concerned just with allowed hostnames and
	    // whether to allow relative URLs.
	    //
	    // Build a placeholder "base URL" against which any reasonable
	    // relative URL may be parsed successfully
	    let base = 'relative://relative-site';
	    for (let i = 0; (i < 100); i++) {
	      base += `/${i}`;
	    }

	    const parsed = new URL(value, base);

	    const isRelativeUrl = parsed && parsed.hostname === 'relative-site' && parsed.protocol === 'relative:';
	    return {
	      isRelativeUrl,
	      url: parsed
	    };
	  }
	  /**
	   * Filters user input css properties by allowlisted regex attributes.
	   * Modifies the abstractSyntaxTree object.
	   *
	   * @param {object} abstractSyntaxTree  - Object representation of CSS attributes.
	   * @property {array[Declaration]} abstractSyntaxTree.nodes[0] - Each object cointains prop and value key, i.e { prop: 'color', value: 'red' }.
	   * @param {object} allowedStyles       - Keys are properties (i.e color), value is list of permitted regex rules (i.e /green/i).
	   * @return {object}                    - The modified tree.
	   */
	  function filterCss(abstractSyntaxTree, allowedStyles) {
	    if (!allowedStyles) {
	      return abstractSyntaxTree;
	    }

	    const astRules = abstractSyntaxTree.nodes[0];
	    let selectedRule;

	    // Merge global and tag-specific styles into new AST.
	    if (allowedStyles[astRules.selector] && allowedStyles['*']) {
	      selectedRule = deepmerge(
	        allowedStyles[astRules.selector],
	        allowedStyles['*']
	      );
	    } else {
	      selectedRule = allowedStyles[astRules.selector] || allowedStyles['*'];
	    }

	    if (selectedRule) {
	      abstractSyntaxTree.nodes[0].nodes = astRules.nodes.reduce(filterDeclarations(selectedRule), []);
	    }

	    return abstractSyntaxTree;
	  }

	  /**
	   * Extracts the style attributes from an AbstractSyntaxTree and formats those
	   * values in the inline style attribute format.
	   *
	   * @param  {AbstractSyntaxTree} filteredAST
	   * @return {string}             - Example: "color:yellow;text-align:center !important;font-family:helvetica;"
	   */
	  function stringifyStyleAttributes(filteredAST) {
	    return filteredAST.nodes[0].nodes
	      .reduce(function(extractedAttributes, attrObject) {
	        extractedAttributes.push(
	          `${attrObject.prop}:${attrObject.value}${attrObject.important ? ' !important' : ''}`
	        );
	        return extractedAttributes;
	      }, [])
	      .join(';');
	  }

	  /**
	    * Filters the existing attributes for the given property. Discards any attributes
	    * which don't match the allowlist.
	    *
	    * @param  {object} selectedRule             - Example: { color: red, font-family: helvetica }
	    * @param  {array} allowedDeclarationsList   - List of declarations which pass the allowlist.
	    * @param  {object} attributeObject          - Object representing the current css property.
	    * @property {string} attributeObject.type   - Typically 'declaration'.
	    * @property {string} attributeObject.prop   - The CSS property, i.e 'color'.
	    * @property {string} attributeObject.value  - The corresponding value to the css property, i.e 'red'.
	    * @return {function}                        - When used in Array.reduce, will return an array of Declaration objects
	    */
	  function filterDeclarations(selectedRule) {
	    return function (allowedDeclarationsList, attributeObject) {
	      // If this property is allowlisted...
	      if (has$2(selectedRule, attributeObject.prop)) {
	        const matchesRegex = selectedRule[attributeObject.prop].some(function(regularExpression) {
	          return regularExpression.test(attributeObject.value);
	        });

	        if (matchesRegex) {
	          allowedDeclarationsList.push(attributeObject);
	        }
	      }
	      return allowedDeclarationsList;
	    };
	  }

	  function filterClasses(classes, allowed, allowedGlobs) {
	    if (!allowed) {
	      // The class attribute is allowed without filtering on this tag
	      return classes;
	    }
	    classes = classes.split(/\s+/);
	    return classes.filter(function(clss) {
	      return allowed.indexOf(clss) !== -1 || allowedGlobs.some(function(glob) {
	        return glob.test(clss);
	      });
	    }).join(' ');
	  }
	}

	// Defaults are accessible to you so that you can use them as a starting point
	// programmatically if you wish

	const htmlParserDefaults = {
	  decodeEntities: true
	};
	sanitizeHtml.defaults = {
	  allowedTags: [
	    // Sections derived from MDN element categories and limited to the more
	    // benign categories.
	    // https://developer.mozilla.org/en-US/docs/Web/HTML/Element
	    // Content sectioning
	    'address', 'article', 'aside', 'footer', 'header',
	    'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'hgroup',
	    'main', 'nav', 'section',
	    // Text content
	    'blockquote', 'dd', 'div', 'dl', 'dt', 'figcaption', 'figure',
	    'hr', 'li', 'main', 'ol', 'p', 'pre', 'ul',
	    // Inline text semantics
	    'a', 'abbr', 'b', 'bdi', 'bdo', 'br', 'cite', 'code', 'data', 'dfn',
	    'em', 'i', 'kbd', 'mark', 'q',
	    'rb', 'rp', 'rt', 'rtc', 'ruby',
	    's', 'samp', 'small', 'span', 'strong', 'sub', 'sup', 'time', 'u', 'var', 'wbr',
	    // Table content
	    'caption', 'col', 'colgroup', 'table', 'tbody', 'td', 'tfoot', 'th',
	    'thead', 'tr'
	  ],
	  disallowedTagsMode: 'discard',
	  allowedAttributes: {
	    a: [ 'href', 'name', 'target' ],
	    // We don't currently allow img itself by default, but
	    // these attributes would make sense if we did.
	    img: [ 'src', 'srcset', 'alt', 'title', 'width', 'height', 'loading' ]
	  },
	  // Lots of these won't come up by default because we don't allow them
	  selfClosing: [ 'img', 'br', 'hr', 'area', 'base', 'basefont', 'input', 'link', 'meta' ],
	  // URL schemes we permit
	  allowedSchemes: [ 'http', 'https', 'ftp', 'mailto', 'tel' ],
	  allowedSchemesByTag: {},
	  allowedSchemesAppliedToAttributes: [ 'href', 'src', 'cite' ],
	  allowProtocolRelative: true,
	  enforceHtmlBoundary: false
	};

	sanitizeHtml.simpleTransform = function(newTagName, newAttribs, merge) {
	  merge = (merge === undefined) ? true : merge;
	  newAttribs = newAttribs || {};

	  return function(tagName, attribs) {
	    let attrib;
	    if (merge) {
	      for (attrib in newAttribs) {
	        attribs[attrib] = newAttribs[attrib];
	      }
	    } else {
	      attribs = newAttribs;
	    }

	    return {
	      tagName: newTagName,
	      attribs: attribs
	    };
	  };
	};

	// packages/alpinejs/src/scheduler.js
	var flushPending = false;
	var flushing = false;
	var queue = [];
	function scheduler(callback) {
	  queueJob(callback);
	}
	function queueJob(job) {
	  if (!queue.includes(job))
	    queue.push(job);
	  queueFlush();
	}
	function dequeueJob(job) {
	  let index = queue.indexOf(job);
	  if (index !== -1)
	    queue.splice(index, 1);
	}
	function queueFlush() {
	  if (!flushing && !flushPending) {
	    flushPending = true;
	    queueMicrotask(flushJobs);
	  }
	}
	function flushJobs() {
	  flushPending = false;
	  flushing = true;
	  for (let i = 0; i < queue.length; i++) {
	    queue[i]();
	  }
	  queue.length = 0;
	  flushing = false;
	}

	// packages/alpinejs/src/reactivity.js
	var reactive;
	var effect;
	var release;
	var raw;
	var shouldSchedule = true;
	function disableEffectScheduling(callback) {
	  shouldSchedule = false;
	  callback();
	  shouldSchedule = true;
	}
	function setReactivityEngine(engine) {
	  reactive = engine.reactive;
	  release = engine.release;
	  effect = (callback) => engine.effect(callback, {scheduler: (task) => {
	    if (shouldSchedule) {
	      scheduler(task);
	    } else {
	      task();
	    }
	  }});
	  raw = engine.raw;
	}
	function overrideEffect(override) {
	  effect = override;
	}
	function elementBoundEffect(el) {
	  let cleanup2 = () => {
	  };
	  let wrappedEffect = (callback) => {
	    let effectReference = effect(callback);
	    if (!el._x_effects) {
	      el._x_effects = new Set();
	      el._x_runEffects = () => {
	        el._x_effects.forEach((i) => i());
	      };
	    }
	    el._x_effects.add(effectReference);
	    cleanup2 = () => {
	      if (effectReference === void 0)
	        return;
	      el._x_effects.delete(effectReference);
	      release(effectReference);
	    };
	    return effectReference;
	  };
	  return [wrappedEffect, () => {
	    cleanup2();
	  }];
	}

	// packages/alpinejs/src/mutation.js
	var onAttributeAddeds = [];
	var onElRemoveds = [];
	var onElAddeds = [];
	function onElAdded(callback) {
	  onElAddeds.push(callback);
	}
	function onElRemoved(el, callback) {
	  if (typeof callback === "function") {
	    if (!el._x_cleanups)
	      el._x_cleanups = [];
	    el._x_cleanups.push(callback);
	  } else {
	    callback = el;
	    onElRemoveds.push(callback);
	  }
	}
	function onAttributesAdded(callback) {
	  onAttributeAddeds.push(callback);
	}
	function onAttributeRemoved(el, name, callback) {
	  if (!el._x_attributeCleanups)
	    el._x_attributeCleanups = {};
	  if (!el._x_attributeCleanups[name])
	    el._x_attributeCleanups[name] = [];
	  el._x_attributeCleanups[name].push(callback);
	}
	function cleanupAttributes(el, names) {
	  if (!el._x_attributeCleanups)
	    return;
	  Object.entries(el._x_attributeCleanups).forEach(([name, value]) => {
	    if (names === void 0 || names.includes(name)) {
	      value.forEach((i) => i());
	      delete el._x_attributeCleanups[name];
	    }
	  });
	}
	var observer = new MutationObserver(onMutate);
	var currentlyObserving = false;
	function startObservingMutations() {
	  observer.observe(document, {subtree: true, childList: true, attributes: true, attributeOldValue: true});
	  currentlyObserving = true;
	}
	function stopObservingMutations() {
	  flushObserver();
	  observer.disconnect();
	  currentlyObserving = false;
	}
	var recordQueue = [];
	var willProcessRecordQueue = false;
	function flushObserver() {
	  recordQueue = recordQueue.concat(observer.takeRecords());
	  if (recordQueue.length && !willProcessRecordQueue) {
	    willProcessRecordQueue = true;
	    queueMicrotask(() => {
	      processRecordQueue();
	      willProcessRecordQueue = false;
	    });
	  }
	}
	function processRecordQueue() {
	  onMutate(recordQueue);
	  recordQueue.length = 0;
	}
	function mutateDom(callback) {
	  if (!currentlyObserving)
	    return callback();
	  stopObservingMutations();
	  let result = callback();
	  startObservingMutations();
	  return result;
	}
	var isCollecting = false;
	var deferredMutations = [];
	function deferMutations() {
	  isCollecting = true;
	}
	function flushAndStopDeferringMutations() {
	  isCollecting = false;
	  onMutate(deferredMutations);
	  deferredMutations = [];
	}
	function onMutate(mutations) {
	  if (isCollecting) {
	    deferredMutations = deferredMutations.concat(mutations);
	    return;
	  }
	  let addedNodes = [];
	  let removedNodes = [];
	  let addedAttributes = new Map();
	  let removedAttributes = new Map();
	  for (let i = 0; i < mutations.length; i++) {
	    if (mutations[i].target._x_ignoreMutationObserver)
	      continue;
	    if (mutations[i].type === "childList") {
	      mutations[i].addedNodes.forEach((node) => node.nodeType === 1 && addedNodes.push(node));
	      mutations[i].removedNodes.forEach((node) => node.nodeType === 1 && removedNodes.push(node));
	    }
	    if (mutations[i].type === "attributes") {
	      let el = mutations[i].target;
	      let name = mutations[i].attributeName;
	      let oldValue = mutations[i].oldValue;
	      let add2 = () => {
	        if (!addedAttributes.has(el))
	          addedAttributes.set(el, []);
	        addedAttributes.get(el).push({name, value: el.getAttribute(name)});
	      };
	      let remove = () => {
	        if (!removedAttributes.has(el))
	          removedAttributes.set(el, []);
	        removedAttributes.get(el).push(name);
	      };
	      if (el.hasAttribute(name) && oldValue === null) {
	        add2();
	      } else if (el.hasAttribute(name)) {
	        remove();
	        add2();
	      } else {
	        remove();
	      }
	    }
	  }
	  removedAttributes.forEach((attrs, el) => {
	    cleanupAttributes(el, attrs);
	  });
	  addedAttributes.forEach((attrs, el) => {
	    onAttributeAddeds.forEach((i) => i(el, attrs));
	  });
	  for (let node of removedNodes) {
	    if (addedNodes.includes(node))
	      continue;
	    onElRemoveds.forEach((i) => i(node));
	    if (node._x_cleanups) {
	      while (node._x_cleanups.length)
	        node._x_cleanups.pop()();
	    }
	  }
	  addedNodes.forEach((node) => {
	    node._x_ignoreSelf = true;
	    node._x_ignore = true;
	  });
	  for (let node of addedNodes) {
	    if (removedNodes.includes(node))
	      continue;
	    if (!node.isConnected)
	      continue;
	    delete node._x_ignoreSelf;
	    delete node._x_ignore;
	    onElAddeds.forEach((i) => i(node));
	    node._x_ignore = true;
	    node._x_ignoreSelf = true;
	  }
	  addedNodes.forEach((node) => {
	    delete node._x_ignoreSelf;
	    delete node._x_ignore;
	  });
	  addedNodes = null;
	  removedNodes = null;
	  addedAttributes = null;
	  removedAttributes = null;
	}

	// packages/alpinejs/src/scope.js
	function scope(node) {
	  return mergeProxies(closestDataStack(node));
	}
	function addScopeToNode(node, data2, referenceNode) {
	  node._x_dataStack = [data2, ...closestDataStack(referenceNode || node)];
	  return () => {
	    node._x_dataStack = node._x_dataStack.filter((i) => i !== data2);
	  };
	}
	function refreshScope(element, scope2) {
	  let existingScope = element._x_dataStack[0];
	  Object.entries(scope2).forEach(([key, value]) => {
	    existingScope[key] = value;
	  });
	}
	function closestDataStack(node) {
	  if (node._x_dataStack)
	    return node._x_dataStack;
	  if (typeof ShadowRoot === "function" && node instanceof ShadowRoot) {
	    return closestDataStack(node.host);
	  }
	  if (!node.parentNode) {
	    return [];
	  }
	  return closestDataStack(node.parentNode);
	}
	function mergeProxies(objects) {
	  let thisProxy = new Proxy({}, {
	    ownKeys: () => {
	      return Array.from(new Set(objects.flatMap((i) => Object.keys(i))));
	    },
	    has: (target, name) => {
	      return objects.some((obj) => obj.hasOwnProperty(name));
	    },
	    get: (target, name) => {
	      return (objects.find((obj) => {
	        if (obj.hasOwnProperty(name)) {
	          let descriptor = Object.getOwnPropertyDescriptor(obj, name);
	          if (descriptor.get && descriptor.get._x_alreadyBound || descriptor.set && descriptor.set._x_alreadyBound) {
	            return true;
	          }
	          if ((descriptor.get || descriptor.set) && descriptor.enumerable) {
	            let getter = descriptor.get;
	            let setter = descriptor.set;
	            let property = descriptor;
	            getter = getter && getter.bind(thisProxy);
	            setter = setter && setter.bind(thisProxy);
	            if (getter)
	              getter._x_alreadyBound = true;
	            if (setter)
	              setter._x_alreadyBound = true;
	            Object.defineProperty(obj, name, {
	              ...property,
	              get: getter,
	              set: setter
	            });
	          }
	          return true;
	        }
	        return false;
	      }) || {})[name];
	    },
	    set: (target, name, value) => {
	      let closestObjectWithKey = objects.find((obj) => obj.hasOwnProperty(name));
	      if (closestObjectWithKey) {
	        closestObjectWithKey[name] = value;
	      } else {
	        objects[objects.length - 1][name] = value;
	      }
	      return true;
	    }
	  });
	  return thisProxy;
	}

	// packages/alpinejs/src/interceptor.js
	function initInterceptors(data2) {
	  let isObject2 = (val) => typeof val === "object" && !Array.isArray(val) && val !== null;
	  let recurse = (obj, basePath = "") => {
	    Object.entries(Object.getOwnPropertyDescriptors(obj)).forEach(([key, {value, enumerable}]) => {
	      if (enumerable === false || value === void 0)
	        return;
	      let path = basePath === "" ? key : `${basePath}.${key}`;
	      if (typeof value === "object" && value !== null && value._x_interceptor) {
	        obj[key] = value.initialize(data2, path, key);
	      } else {
	        if (isObject2(value) && value !== obj && !(value instanceof Element)) {
	          recurse(value, path);
	        }
	      }
	    });
	  };
	  return recurse(data2);
	}
	function interceptor(callback, mutateObj = () => {
	}) {
	  let obj = {
	    initialValue: void 0,
	    _x_interceptor: true,
	    initialize(data2, path, key) {
	      return callback(this.initialValue, () => get(data2, path), (value) => set(data2, path, value), path, key);
	    }
	  };
	  mutateObj(obj);
	  return (initialValue) => {
	    if (typeof initialValue === "object" && initialValue !== null && initialValue._x_interceptor) {
	      let initialize = obj.initialize.bind(obj);
	      obj.initialize = (data2, path, key) => {
	        let innerValue = initialValue.initialize(data2, path, key);
	        obj.initialValue = innerValue;
	        return initialize(data2, path, key);
	      };
	    } else {
	      obj.initialValue = initialValue;
	    }
	    return obj;
	  };
	}
	function get(obj, path) {
	  return path.split(".").reduce((carry, segment) => carry[segment], obj);
	}
	function set(obj, path, value) {
	  if (typeof path === "string")
	    path = path.split(".");
	  if (path.length === 1)
	    obj[path[0]] = value;
	  else if (path.length === 0)
	    throw error;
	  else {
	    if (obj[path[0]])
	      return set(obj[path[0]], path.slice(1), value);
	    else {
	      obj[path[0]] = {};
	      return set(obj[path[0]], path.slice(1), value);
	    }
	  }
	}

	// packages/alpinejs/src/magics.js
	var magics = {};
	function magic(name, callback) {
	  magics[name] = callback;
	}
	function injectMagics(obj, el) {
	  Object.entries(magics).forEach(([name, callback]) => {
	    Object.defineProperty(obj, `$${name}`, {
	      get() {
	        let [utilities, cleanup2] = getElementBoundUtilities(el);
	        utilities = {interceptor, ...utilities};
	        onElRemoved(el, cleanup2);
	        return callback(el, utilities);
	      },
	      enumerable: false
	    });
	  });
	  return obj;
	}

	// packages/alpinejs/src/utils/error.js
	function tryCatch(el, expression, callback, ...args) {
	  try {
	    return callback(...args);
	  } catch (e) {
	    handleError(e, el, expression);
	  }
	}
	function handleError(error2, el, expression = void 0) {
	  Object.assign(error2, {el, expression});
	  console.warn(`Alpine Expression Error: ${error2.message}

${expression ? 'Expression: "' + expression + '"\n\n' : ""}`, el);
	  setTimeout(() => {
	    throw error2;
	  }, 0);
	}

	// packages/alpinejs/src/evaluator.js
	var shouldAutoEvaluateFunctions = true;
	function dontAutoEvaluateFunctions(callback) {
	  let cache = shouldAutoEvaluateFunctions;
	  shouldAutoEvaluateFunctions = false;
	  callback();
	  shouldAutoEvaluateFunctions = cache;
	}
	function evaluate(el, expression, extras = {}) {
	  let result;
	  evaluateLater(el, expression)((value) => result = value, extras);
	  return result;
	}
	function evaluateLater(...args) {
	  return theEvaluatorFunction(...args);
	}
	var theEvaluatorFunction = normalEvaluator;
	function setEvaluator(newEvaluator) {
	  theEvaluatorFunction = newEvaluator;
	}
	function normalEvaluator(el, expression) {
	  let overriddenMagics = {};
	  injectMagics(overriddenMagics, el);
	  let dataStack = [overriddenMagics, ...closestDataStack(el)];
	  if (typeof expression === "function") {
	    return generateEvaluatorFromFunction(dataStack, expression);
	  }
	  let evaluator = generateEvaluatorFromString(dataStack, expression, el);
	  return tryCatch.bind(null, el, expression, evaluator);
	}
	function generateEvaluatorFromFunction(dataStack, func) {
	  return (receiver = () => {
	  }, {scope: scope2 = {}, params = []} = {}) => {
	    let result = func.apply(mergeProxies([scope2, ...dataStack]), params);
	    runIfTypeOfFunction(receiver, result);
	  };
	}
	var evaluatorMemo = {};
	function generateFunctionFromString(expression, el) {
	  if (evaluatorMemo[expression]) {
	    return evaluatorMemo[expression];
	  }
	  let AsyncFunction = Object.getPrototypeOf(async function() {
	  }).constructor;
	  let rightSideSafeExpression = /^[\n\s]*if.*\(.*\)/.test(expression) || /^(let|const)\s/.test(expression) ? `(() => { ${expression} })()` : expression;
	  const safeAsyncFunction = () => {
	    try {
	      return new AsyncFunction(["__self", "scope"], `with (scope) { __self.result = ${rightSideSafeExpression} }; __self.finished = true; return __self.result;`);
	    } catch (error2) {
	      handleError(error2, el, expression);
	      return Promise.resolve();
	    }
	  };
	  let func = safeAsyncFunction();
	  evaluatorMemo[expression] = func;
	  return func;
	}
	function generateEvaluatorFromString(dataStack, expression, el) {
	  let func = generateFunctionFromString(expression, el);
	  return (receiver = () => {
	  }, {scope: scope2 = {}, params = []} = {}) => {
	    func.result = void 0;
	    func.finished = false;
	    let completeScope = mergeProxies([scope2, ...dataStack]);
	    if (typeof func === "function") {
	      let promise = func(func, completeScope).catch((error2) => handleError(error2, el, expression));
	      if (func.finished) {
	        runIfTypeOfFunction(receiver, func.result, completeScope, params, el);
	        func.result = void 0;
	      } else {
	        promise.then((result) => {
	          runIfTypeOfFunction(receiver, result, completeScope, params, el);
	        }).catch((error2) => handleError(error2, el, expression)).finally(() => func.result = void 0);
	      }
	    }
	  };
	}
	function runIfTypeOfFunction(receiver, value, scope2, params, el) {
	  if (shouldAutoEvaluateFunctions && typeof value === "function") {
	    let result = value.apply(scope2, params);
	    if (result instanceof Promise) {
	      result.then((i) => runIfTypeOfFunction(receiver, i, scope2, params)).catch((error2) => handleError(error2, el, value));
	    } else {
	      receiver(result);
	    }
	  } else {
	    receiver(value);
	  }
	}

	// packages/alpinejs/src/directives.js
	var prefixAsString = "x-";
	function prefix(subject = "") {
	  return prefixAsString + subject;
	}
	function setPrefix(newPrefix) {
	  prefixAsString = newPrefix;
	}
	var directiveHandlers = {};
	function directive(name, callback) {
	  directiveHandlers[name] = callback;
	}
	function directives(el, attributes, originalAttributeOverride) {
	  attributes = Array.from(attributes);
	  if (el._x_virtualDirectives) {
	    let vAttributes = Object.entries(el._x_virtualDirectives).map(([name, value]) => ({name, value}));
	    let staticAttributes = attributesOnly(vAttributes);
	    vAttributes = vAttributes.map((attribute) => {
	      if (staticAttributes.find((attr) => attr.name === attribute.name)) {
	        return {
	          name: `x-bind:${attribute.name}`,
	          value: `"${attribute.value}"`
	        };
	      }
	      return attribute;
	    });
	    attributes = attributes.concat(vAttributes);
	  }
	  let transformedAttributeMap = {};
	  let directives2 = attributes.map(toTransformedAttributes((newName, oldName) => transformedAttributeMap[newName] = oldName)).filter(outNonAlpineAttributes).map(toParsedDirectives(transformedAttributeMap, originalAttributeOverride)).sort(byPriority);
	  return directives2.map((directive2) => {
	    return getDirectiveHandler(el, directive2);
	  });
	}
	function attributesOnly(attributes) {
	  return Array.from(attributes).map(toTransformedAttributes()).filter((attr) => !outNonAlpineAttributes(attr));
	}
	var isDeferringHandlers = false;
	var directiveHandlerStacks = new Map();
	var currentHandlerStackKey = Symbol();
	function deferHandlingDirectives(callback) {
	  isDeferringHandlers = true;
	  let key = Symbol();
	  currentHandlerStackKey = key;
	  directiveHandlerStacks.set(key, []);
	  let flushHandlers = () => {
	    while (directiveHandlerStacks.get(key).length)
	      directiveHandlerStacks.get(key).shift()();
	    directiveHandlerStacks.delete(key);
	  };
	  let stopDeferring = () => {
	    isDeferringHandlers = false;
	    flushHandlers();
	  };
	  callback(flushHandlers);
	  stopDeferring();
	}
	function getElementBoundUtilities(el) {
	  let cleanups = [];
	  let cleanup2 = (callback) => cleanups.push(callback);
	  let [effect3, cleanupEffect] = elementBoundEffect(el);
	  cleanups.push(cleanupEffect);
	  let utilities = {
	    Alpine: alpine_default,
	    effect: effect3,
	    cleanup: cleanup2,
	    evaluateLater: evaluateLater.bind(evaluateLater, el),
	    evaluate: evaluate.bind(evaluate, el)
	  };
	  let doCleanup = () => cleanups.forEach((i) => i());
	  return [utilities, doCleanup];
	}
	function getDirectiveHandler(el, directive2) {
	  let noop = () => {
	  };
	  let handler3 = directiveHandlers[directive2.type] || noop;
	  let [utilities, cleanup2] = getElementBoundUtilities(el);
	  onAttributeRemoved(el, directive2.original, cleanup2);
	  let fullHandler = () => {
	    if (el._x_ignore || el._x_ignoreSelf)
	      return;
	    handler3.inline && handler3.inline(el, directive2, utilities);
	    handler3 = handler3.bind(handler3, el, directive2, utilities);
	    isDeferringHandlers ? directiveHandlerStacks.get(currentHandlerStackKey).push(handler3) : handler3();
	  };
	  fullHandler.runCleanups = cleanup2;
	  return fullHandler;
	}
	var startingWith = (subject, replacement) => ({name, value}) => {
	  if (name.startsWith(subject))
	    name = name.replace(subject, replacement);
	  return {name, value};
	};
	var into = (i) => i;
	function toTransformedAttributes(callback = () => {
	}) {
	  return ({name, value}) => {
	    let {name: newName, value: newValue} = attributeTransformers.reduce((carry, transform) => {
	      return transform(carry);
	    }, {name, value});
	    if (newName !== name)
	      callback(newName, name);
	    return {name: newName, value: newValue};
	  };
	}
	var attributeTransformers = [];
	function mapAttributes(callback) {
	  attributeTransformers.push(callback);
	}
	function outNonAlpineAttributes({name}) {
	  return alpineAttributeRegex().test(name);
	}
	var alpineAttributeRegex = () => new RegExp(`^${prefixAsString}([^:^.]+)\\b`);
	function toParsedDirectives(transformedAttributeMap, originalAttributeOverride) {
	  return ({name, value}) => {
	    let typeMatch = name.match(alpineAttributeRegex());
	    let valueMatch = name.match(/:([a-zA-Z0-9\-:]+)/);
	    let modifiers = name.match(/\.[^.\]]+(?=[^\]]*$)/g) || [];
	    let original = originalAttributeOverride || transformedAttributeMap[name] || name;
	    return {
	      type: typeMatch ? typeMatch[1] : null,
	      value: valueMatch ? valueMatch[1] : null,
	      modifiers: modifiers.map((i) => i.replace(".", "")),
	      expression: value,
	      original
	    };
	  };
	}
	var DEFAULT = "DEFAULT";
	var directiveOrder = [
	  "ignore",
	  "ref",
	  "data",
	  "id",
	  "bind",
	  "init",
	  "for",
	  "mask",
	  "model",
	  "modelable",
	  "transition",
	  "show",
	  "if",
	  DEFAULT,
	  "teleport"
	];
	function byPriority(a, b) {
	  let typeA = directiveOrder.indexOf(a.type) === -1 ? DEFAULT : a.type;
	  let typeB = directiveOrder.indexOf(b.type) === -1 ? DEFAULT : b.type;
	  return directiveOrder.indexOf(typeA) - directiveOrder.indexOf(typeB);
	}

	// packages/alpinejs/src/utils/dispatch.js
	function dispatch(el, name, detail = {}) {
	  el.dispatchEvent(new CustomEvent(name, {
	    detail,
	    bubbles: true,
	    composed: true,
	    cancelable: true
	  }));
	}

	// packages/alpinejs/src/nextTick.js
	var tickStack = [];
	var isHolding = false;
	function nextTick(callback = () => {
	}) {
	  queueMicrotask(() => {
	    isHolding || setTimeout(() => {
	      releaseNextTicks();
	    });
	  });
	  return new Promise((res) => {
	    tickStack.push(() => {
	      callback();
	      res();
	    });
	  });
	}
	function releaseNextTicks() {
	  isHolding = false;
	  while (tickStack.length)
	    tickStack.shift()();
	}
	function holdNextTicks() {
	  isHolding = true;
	}

	// packages/alpinejs/src/utils/walk.js
	function walk(el, callback) {
	  if (typeof ShadowRoot === "function" && el instanceof ShadowRoot) {
	    Array.from(el.children).forEach((el2) => walk(el2, callback));
	    return;
	  }
	  let skip = false;
	  callback(el, () => skip = true);
	  if (skip)
	    return;
	  let node = el.firstElementChild;
	  while (node) {
	    walk(node, callback);
	    node = node.nextElementSibling;
	  }
	}

	// packages/alpinejs/src/utils/warn.js
	function warn(message, ...args) {
	  console.warn(`Alpine Warning: ${message}`, ...args);
	}

	// packages/alpinejs/src/lifecycle.js
	function start() {
	  if (!document.body)
	    warn("Unable to initialize. Trying to load Alpine before `<body>` is available. Did you forget to add `defer` in Alpine's `<script>` tag?");
	  dispatch(document, "alpine:init");
	  dispatch(document, "alpine:initializing");
	  startObservingMutations();
	  onElAdded((el) => initTree(el, walk));
	  onElRemoved((el) => destroyTree(el));
	  onAttributesAdded((el, attrs) => {
	    directives(el, attrs).forEach((handle) => handle());
	  });
	  let outNestedComponents = (el) => !closestRoot(el.parentElement, true);
	  Array.from(document.querySelectorAll(allSelectors())).filter(outNestedComponents).forEach((el) => {
	    initTree(el);
	  });
	  dispatch(document, "alpine:initialized");
	}
	var rootSelectorCallbacks = [];
	var initSelectorCallbacks = [];
	function rootSelectors() {
	  return rootSelectorCallbacks.map((fn) => fn());
	}
	function allSelectors() {
	  return rootSelectorCallbacks.concat(initSelectorCallbacks).map((fn) => fn());
	}
	function addRootSelector(selectorCallback) {
	  rootSelectorCallbacks.push(selectorCallback);
	}
	function addInitSelector(selectorCallback) {
	  initSelectorCallbacks.push(selectorCallback);
	}
	function closestRoot(el, includeInitSelectors = false) {
	  return findClosest(el, (element) => {
	    const selectors = includeInitSelectors ? allSelectors() : rootSelectors();
	    if (selectors.some((selector) => element.matches(selector)))
	      return true;
	  });
	}
	function findClosest(el, callback) {
	  if (!el)
	    return;
	  if (callback(el))
	    return el;
	  if (el._x_teleportBack)
	    el = el._x_teleportBack;
	  if (!el.parentElement)
	    return;
	  return findClosest(el.parentElement, callback);
	}
	function isRoot(el) {
	  return rootSelectors().some((selector) => el.matches(selector));
	}
	function initTree(el, walker = walk) {
	  deferHandlingDirectives(() => {
	    walker(el, (el2, skip) => {
	      directives(el2, el2.attributes).forEach((handle) => handle());
	      el2._x_ignore && skip();
	    });
	  });
	}
	function destroyTree(root) {
	  walk(root, (el) => cleanupAttributes(el));
	}

	// packages/alpinejs/src/utils/classes.js
	function setClasses(el, value) {
	  if (Array.isArray(value)) {
	    return setClassesFromString(el, value.join(" "));
	  } else if (typeof value === "object" && value !== null) {
	    return setClassesFromObject(el, value);
	  } else if (typeof value === "function") {
	    return setClasses(el, value());
	  }
	  return setClassesFromString(el, value);
	}
	function setClassesFromString(el, classString) {
	  let missingClasses = (classString2) => classString2.split(" ").filter((i) => !el.classList.contains(i)).filter(Boolean);
	  let addClassesAndReturnUndo = (classes) => {
	    el.classList.add(...classes);
	    return () => {
	      el.classList.remove(...classes);
	    };
	  };
	  classString = classString === true ? classString = "" : classString || "";
	  return addClassesAndReturnUndo(missingClasses(classString));
	}
	function setClassesFromObject(el, classObject) {
	  let split = (classString) => classString.split(" ").filter(Boolean);
	  let forAdd = Object.entries(classObject).flatMap(([classString, bool]) => bool ? split(classString) : false).filter(Boolean);
	  let forRemove = Object.entries(classObject).flatMap(([classString, bool]) => !bool ? split(classString) : false).filter(Boolean);
	  let added = [];
	  let removed = [];
	  forRemove.forEach((i) => {
	    if (el.classList.contains(i)) {
	      el.classList.remove(i);
	      removed.push(i);
	    }
	  });
	  forAdd.forEach((i) => {
	    if (!el.classList.contains(i)) {
	      el.classList.add(i);
	      added.push(i);
	    }
	  });
	  return () => {
	    removed.forEach((i) => el.classList.add(i));
	    added.forEach((i) => el.classList.remove(i));
	  };
	}

	// packages/alpinejs/src/utils/styles.js
	function setStyles(el, value) {
	  if (typeof value === "object" && value !== null) {
	    return setStylesFromObject(el, value);
	  }
	  return setStylesFromString(el, value);
	}
	function setStylesFromObject(el, value) {
	  let previousStyles = {};
	  Object.entries(value).forEach(([key, value2]) => {
	    previousStyles[key] = el.style[key];
	    if (!key.startsWith("--")) {
	      key = kebabCase(key);
	    }
	    el.style.setProperty(key, value2);
	  });
	  setTimeout(() => {
	    if (el.style.length === 0) {
	      el.removeAttribute("style");
	    }
	  });
	  return () => {
	    setStyles(el, previousStyles);
	  };
	}
	function setStylesFromString(el, value) {
	  let cache = el.getAttribute("style", value);
	  el.setAttribute("style", value);
	  return () => {
	    el.setAttribute("style", cache || "");
	  };
	}
	function kebabCase(subject) {
	  return subject.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
	}

	// packages/alpinejs/src/utils/once.js
	function once(callback, fallback = () => {
	}) {
	  let called = false;
	  return function() {
	    if (!called) {
	      called = true;
	      callback.apply(this, arguments);
	    } else {
	      fallback.apply(this, arguments);
	    }
	  };
	}

	// packages/alpinejs/src/directives/x-transition.js
	directive("transition", (el, {value, modifiers, expression}, {evaluate: evaluate2}) => {
	  if (typeof expression === "function")
	    expression = evaluate2(expression);
	  if (!expression) {
	    registerTransitionsFromHelper(el, modifiers, value);
	  } else {
	    registerTransitionsFromClassString(el, expression, value);
	  }
	});
	function registerTransitionsFromClassString(el, classString, stage) {
	  registerTransitionObject(el, setClasses, "");
	  let directiveStorageMap = {
	    enter: (classes) => {
	      el._x_transition.enter.during = classes;
	    },
	    "enter-start": (classes) => {
	      el._x_transition.enter.start = classes;
	    },
	    "enter-end": (classes) => {
	      el._x_transition.enter.end = classes;
	    },
	    leave: (classes) => {
	      el._x_transition.leave.during = classes;
	    },
	    "leave-start": (classes) => {
	      el._x_transition.leave.start = classes;
	    },
	    "leave-end": (classes) => {
	      el._x_transition.leave.end = classes;
	    }
	  };
	  directiveStorageMap[stage](classString);
	}
	function registerTransitionsFromHelper(el, modifiers, stage) {
	  registerTransitionObject(el, setStyles);
	  let doesntSpecify = !modifiers.includes("in") && !modifiers.includes("out") && !stage;
	  let transitioningIn = doesntSpecify || modifiers.includes("in") || ["enter"].includes(stage);
	  let transitioningOut = doesntSpecify || modifiers.includes("out") || ["leave"].includes(stage);
	  if (modifiers.includes("in") && !doesntSpecify) {
	    modifiers = modifiers.filter((i, index) => index < modifiers.indexOf("out"));
	  }
	  if (modifiers.includes("out") && !doesntSpecify) {
	    modifiers = modifiers.filter((i, index) => index > modifiers.indexOf("out"));
	  }
	  let wantsAll = !modifiers.includes("opacity") && !modifiers.includes("scale");
	  let wantsOpacity = wantsAll || modifiers.includes("opacity");
	  let wantsScale = wantsAll || modifiers.includes("scale");
	  let opacityValue = wantsOpacity ? 0 : 1;
	  let scaleValue = wantsScale ? modifierValue(modifiers, "scale", 95) / 100 : 1;
	  let delay = modifierValue(modifiers, "delay", 0);
	  let origin = modifierValue(modifiers, "origin", "center");
	  let property = "opacity, transform";
	  let durationIn = modifierValue(modifiers, "duration", 150) / 1e3;
	  let durationOut = modifierValue(modifiers, "duration", 75) / 1e3;
	  let easing = `cubic-bezier(0.4, 0.0, 0.2, 1)`;
	  if (transitioningIn) {
	    el._x_transition.enter.during = {
	      transformOrigin: origin,
	      transitionDelay: delay,
	      transitionProperty: property,
	      transitionDuration: `${durationIn}s`,
	      transitionTimingFunction: easing
	    };
	    el._x_transition.enter.start = {
	      opacity: opacityValue,
	      transform: `scale(${scaleValue})`
	    };
	    el._x_transition.enter.end = {
	      opacity: 1,
	      transform: `scale(1)`
	    };
	  }
	  if (transitioningOut) {
	    el._x_transition.leave.during = {
	      transformOrigin: origin,
	      transitionDelay: delay,
	      transitionProperty: property,
	      transitionDuration: `${durationOut}s`,
	      transitionTimingFunction: easing
	    };
	    el._x_transition.leave.start = {
	      opacity: 1,
	      transform: `scale(1)`
	    };
	    el._x_transition.leave.end = {
	      opacity: opacityValue,
	      transform: `scale(${scaleValue})`
	    };
	  }
	}
	function registerTransitionObject(el, setFunction, defaultValue = {}) {
	  if (!el._x_transition)
	    el._x_transition = {
	      enter: {during: defaultValue, start: defaultValue, end: defaultValue},
	      leave: {during: defaultValue, start: defaultValue, end: defaultValue},
	      in(before = () => {
	      }, after = () => {
	      }) {
	        transition(el, setFunction, {
	          during: this.enter.during,
	          start: this.enter.start,
	          end: this.enter.end
	        }, before, after);
	      },
	      out(before = () => {
	      }, after = () => {
	      }) {
	        transition(el, setFunction, {
	          during: this.leave.during,
	          start: this.leave.start,
	          end: this.leave.end
	        }, before, after);
	      }
	    };
	}
	window.Element.prototype._x_toggleAndCascadeWithTransitions = function(el, value, show, hide) {
	  const nextTick2 = document.visibilityState === "visible" ? requestAnimationFrame : setTimeout;
	  let clickAwayCompatibleShow = () => nextTick2(show);
	  if (value) {
	    if (el._x_transition && (el._x_transition.enter || el._x_transition.leave)) {
	      el._x_transition.enter && (Object.entries(el._x_transition.enter.during).length || Object.entries(el._x_transition.enter.start).length || Object.entries(el._x_transition.enter.end).length) ? el._x_transition.in(show) : clickAwayCompatibleShow();
	    } else {
	      el._x_transition ? el._x_transition.in(show) : clickAwayCompatibleShow();
	    }
	    return;
	  }
	  el._x_hidePromise = el._x_transition ? new Promise((resolve, reject) => {
	    el._x_transition.out(() => {
	    }, () => resolve(hide));
	    el._x_transitioning.beforeCancel(() => reject({isFromCancelledTransition: true}));
	  }) : Promise.resolve(hide);
	  queueMicrotask(() => {
	    let closest = closestHide(el);
	    if (closest) {
	      if (!closest._x_hideChildren)
	        closest._x_hideChildren = [];
	      closest._x_hideChildren.push(el);
	    } else {
	      nextTick2(() => {
	        let hideAfterChildren = (el2) => {
	          let carry = Promise.all([
	            el2._x_hidePromise,
	            ...(el2._x_hideChildren || []).map(hideAfterChildren)
	          ]).then(([i]) => i());
	          delete el2._x_hidePromise;
	          delete el2._x_hideChildren;
	          return carry;
	        };
	        hideAfterChildren(el).catch((e) => {
	          if (!e.isFromCancelledTransition)
	            throw e;
	        });
	      });
	    }
	  });
	};
	function closestHide(el) {
	  let parent = el.parentNode;
	  if (!parent)
	    return;
	  return parent._x_hidePromise ? parent : closestHide(parent);
	}
	function transition(el, setFunction, {during, start: start2, end} = {}, before = () => {
	}, after = () => {
	}) {
	  if (el._x_transitioning)
	    el._x_transitioning.cancel();
	  if (Object.keys(during).length === 0 && Object.keys(start2).length === 0 && Object.keys(end).length === 0) {
	    before();
	    after();
	    return;
	  }
	  let undoStart, undoDuring, undoEnd;
	  performTransition(el, {
	    start() {
	      undoStart = setFunction(el, start2);
	    },
	    during() {
	      undoDuring = setFunction(el, during);
	    },
	    before,
	    end() {
	      undoStart();
	      undoEnd = setFunction(el, end);
	    },
	    after,
	    cleanup() {
	      undoDuring();
	      undoEnd();
	    }
	  });
	}
	function performTransition(el, stages) {
	  let interrupted, reachedBefore, reachedEnd;
	  let finish = once(() => {
	    mutateDom(() => {
	      interrupted = true;
	      if (!reachedBefore)
	        stages.before();
	      if (!reachedEnd) {
	        stages.end();
	        releaseNextTicks();
	      }
	      stages.after();
	      if (el.isConnected)
	        stages.cleanup();
	      delete el._x_transitioning;
	    });
	  });
	  el._x_transitioning = {
	    beforeCancels: [],
	    beforeCancel(callback) {
	      this.beforeCancels.push(callback);
	    },
	    cancel: once(function() {
	      while (this.beforeCancels.length) {
	        this.beforeCancels.shift()();
	      }
	      finish();
	    }),
	    finish
	  };
	  mutateDom(() => {
	    stages.start();
	    stages.during();
	  });
	  holdNextTicks();
	  requestAnimationFrame(() => {
	    if (interrupted)
	      return;
	    let duration = Number(getComputedStyle(el).transitionDuration.replace(/,.*/, "").replace("s", "")) * 1e3;
	    let delay = Number(getComputedStyle(el).transitionDelay.replace(/,.*/, "").replace("s", "")) * 1e3;
	    if (duration === 0)
	      duration = Number(getComputedStyle(el).animationDuration.replace("s", "")) * 1e3;
	    mutateDom(() => {
	      stages.before();
	    });
	    reachedBefore = true;
	    requestAnimationFrame(() => {
	      if (interrupted)
	        return;
	      mutateDom(() => {
	        stages.end();
	      });
	      releaseNextTicks();
	      setTimeout(el._x_transitioning.finish, duration + delay);
	      reachedEnd = true;
	    });
	  });
	}
	function modifierValue(modifiers, key, fallback) {
	  if (modifiers.indexOf(key) === -1)
	    return fallback;
	  const rawValue = modifiers[modifiers.indexOf(key) + 1];
	  if (!rawValue)
	    return fallback;
	  if (key === "scale") {
	    if (isNaN(rawValue))
	      return fallback;
	  }
	  if (key === "duration") {
	    let match = rawValue.match(/([0-9]+)ms/);
	    if (match)
	      return match[1];
	  }
	  if (key === "origin") {
	    if (["top", "right", "left", "center", "bottom"].includes(modifiers[modifiers.indexOf(key) + 2])) {
	      return [rawValue, modifiers[modifiers.indexOf(key) + 2]].join(" ");
	    }
	  }
	  return rawValue;
	}

	// packages/alpinejs/src/clone.js
	var isCloning = false;
	function skipDuringClone(callback, fallback = () => {
	}) {
	  return (...args) => isCloning ? fallback(...args) : callback(...args);
	}
	function clone(oldEl, newEl) {
	  if (!newEl._x_dataStack)
	    newEl._x_dataStack = oldEl._x_dataStack;
	  isCloning = true;
	  dontRegisterReactiveSideEffects(() => {
	    cloneTree(newEl);
	  });
	  isCloning = false;
	}
	function cloneTree(el) {
	  let hasRunThroughFirstEl = false;
	  let shallowWalker = (el2, callback) => {
	    walk(el2, (el3, skip) => {
	      if (hasRunThroughFirstEl && isRoot(el3))
	        return skip();
	      hasRunThroughFirstEl = true;
	      callback(el3, skip);
	    });
	  };
	  initTree(el, shallowWalker);
	}
	function dontRegisterReactiveSideEffects(callback) {
	  let cache = effect;
	  overrideEffect((callback2, el) => {
	    let storedEffect = cache(callback2);
	    release(storedEffect);
	    return () => {
	    };
	  });
	  callback();
	  overrideEffect(cache);
	}

	// packages/alpinejs/src/utils/bind.js
	function bind(el, name, value, modifiers = []) {
	  if (!el._x_bindings)
	    el._x_bindings = reactive({});
	  el._x_bindings[name] = value;
	  name = modifiers.includes("camel") ? camelCase(name) : name;
	  switch (name) {
	    case "value":
	      bindInputValue(el, value);
	      break;
	    case "style":
	      bindStyles(el, value);
	      break;
	    case "class":
	      bindClasses(el, value);
	      break;
	    default:
	      bindAttribute(el, name, value);
	      break;
	  }
	}
	function bindInputValue(el, value) {
	  if (el.type === "radio") {
	    if (el.attributes.value === void 0) {
	      el.value = value;
	    }
	    if (window.fromModel) {
	      el.checked = checkedAttrLooseCompare(el.value, value);
	    }
	  } else if (el.type === "checkbox") {
	    if (Number.isInteger(value)) {
	      el.value = value;
	    } else if (!Number.isInteger(value) && !Array.isArray(value) && typeof value !== "boolean" && ![null, void 0].includes(value)) {
	      el.value = String(value);
	    } else {
	      if (Array.isArray(value)) {
	        el.checked = value.some((val) => checkedAttrLooseCompare(val, el.value));
	      } else {
	        el.checked = !!value;
	      }
	    }
	  } else if (el.tagName === "SELECT") {
	    updateSelect(el, value);
	  } else {
	    if (el.value === value)
	      return;
	    el.value = value;
	  }
	}
	function bindClasses(el, value) {
	  if (el._x_undoAddedClasses)
	    el._x_undoAddedClasses();
	  el._x_undoAddedClasses = setClasses(el, value);
	}
	function bindStyles(el, value) {
	  if (el._x_undoAddedStyles)
	    el._x_undoAddedStyles();
	  el._x_undoAddedStyles = setStyles(el, value);
	}
	function bindAttribute(el, name, value) {
	  if ([null, void 0, false].includes(value) && attributeShouldntBePreservedIfFalsy(name)) {
	    el.removeAttribute(name);
	  } else {
	    if (isBooleanAttr(name))
	      value = name;
	    setIfChanged(el, name, value);
	  }
	}
	function setIfChanged(el, attrName, value) {
	  if (el.getAttribute(attrName) != value) {
	    el.setAttribute(attrName, value);
	  }
	}
	function updateSelect(el, value) {
	  const arrayWrappedValue = [].concat(value).map((value2) => {
	    return value2 + "";
	  });
	  Array.from(el.options).forEach((option) => {
	    option.selected = arrayWrappedValue.includes(option.value);
	  });
	}
	function camelCase(subject) {
	  return subject.toLowerCase().replace(/-(\w)/g, (match, char) => char.toUpperCase());
	}
	function checkedAttrLooseCompare(valueA, valueB) {
	  return valueA == valueB;
	}
	function isBooleanAttr(attrName) {
	  const booleanAttributes = [
	    "disabled",
	    "checked",
	    "required",
	    "readonly",
	    "hidden",
	    "open",
	    "selected",
	    "autofocus",
	    "itemscope",
	    "multiple",
	    "novalidate",
	    "allowfullscreen",
	    "allowpaymentrequest",
	    "formnovalidate",
	    "autoplay",
	    "controls",
	    "loop",
	    "muted",
	    "playsinline",
	    "default",
	    "ismap",
	    "reversed",
	    "async",
	    "defer",
	    "nomodule"
	  ];
	  return booleanAttributes.includes(attrName);
	}
	function attributeShouldntBePreservedIfFalsy(name) {
	  return !["aria-pressed", "aria-checked", "aria-expanded", "aria-selected"].includes(name);
	}
	function getBinding(el, name, fallback) {
	  if (el._x_bindings && el._x_bindings[name] !== void 0)
	    return el._x_bindings[name];
	  let attr = el.getAttribute(name);
	  if (attr === null)
	    return typeof fallback === "function" ? fallback() : fallback;
	  if (isBooleanAttr(name)) {
	    return !![name, "true"].includes(attr);
	  }
	  if (attr === "")
	    return true;
	  return attr;
	}

	// packages/alpinejs/src/utils/debounce.js
	function debounce(func, wait) {
	  var timeout;
	  return function() {
	    var context = this, args = arguments;
	    var later = function() {
	      timeout = null;
	      func.apply(context, args);
	    };
	    clearTimeout(timeout);
	    timeout = setTimeout(later, wait);
	  };
	}

	// packages/alpinejs/src/utils/throttle.js
	function throttle(func, limit) {
	  let inThrottle;
	  return function() {
	    let context = this, args = arguments;
	    if (!inThrottle) {
	      func.apply(context, args);
	      inThrottle = true;
	      setTimeout(() => inThrottle = false, limit);
	    }
	  };
	}

	// packages/alpinejs/src/plugin.js
	function plugin(callback) {
	  callback(alpine_default);
	}

	// packages/alpinejs/src/store.js
	var stores = {};
	var isReactive = false;
	function store(name, value) {
	  if (!isReactive) {
	    stores = reactive(stores);
	    isReactive = true;
	  }
	  if (value === void 0) {
	    return stores[name];
	  }
	  stores[name] = value;
	  if (typeof value === "object" && value !== null && value.hasOwnProperty("init") && typeof value.init === "function") {
	    stores[name].init();
	  }
	  initInterceptors(stores[name]);
	}
	function getStores() {
	  return stores;
	}

	// packages/alpinejs/src/binds.js
	var binds = {};
	function bind2(name, bindings) {
	  let getBindings = typeof bindings !== "function" ? () => bindings : bindings;
	  if (name instanceof Element) {
	    applyBindingsObject(name, getBindings());
	  } else {
	    binds[name] = getBindings;
	  }
	}
	function injectBindingProviders(obj) {
	  Object.entries(binds).forEach(([name, callback]) => {
	    Object.defineProperty(obj, name, {
	      get() {
	        return (...args) => {
	          return callback(...args);
	        };
	      }
	    });
	  });
	  return obj;
	}
	function applyBindingsObject(el, obj, original) {
	  let cleanupRunners = [];
	  while (cleanupRunners.length)
	    cleanupRunners.pop()();
	  let attributes = Object.entries(obj).map(([name, value]) => ({name, value}));
	  let staticAttributes = attributesOnly(attributes);
	  attributes = attributes.map((attribute) => {
	    if (staticAttributes.find((attr) => attr.name === attribute.name)) {
	      return {
	        name: `x-bind:${attribute.name}`,
	        value: `"${attribute.value}"`
	      };
	    }
	    return attribute;
	  });
	  directives(el, attributes, original).map((handle) => {
	    cleanupRunners.push(handle.runCleanups);
	    handle();
	  });
	}

	// packages/alpinejs/src/datas.js
	var datas = {};
	function data(name, callback) {
	  datas[name] = callback;
	}
	function injectDataProviders(obj, context) {
	  Object.entries(datas).forEach(([name, callback]) => {
	    Object.defineProperty(obj, name, {
	      get() {
	        return (...args) => {
	          return callback.bind(context)(...args);
	        };
	      },
	      enumerable: false
	    });
	  });
	  return obj;
	}

	// packages/alpinejs/src/alpine.js
	var Alpine = {
	  get reactive() {
	    return reactive;
	  },
	  get release() {
	    return release;
	  },
	  get effect() {
	    return effect;
	  },
	  get raw() {
	    return raw;
	  },
	  version: "3.10.3",
	  flushAndStopDeferringMutations,
	  dontAutoEvaluateFunctions,
	  disableEffectScheduling,
	  setReactivityEngine,
	  closestDataStack,
	  skipDuringClone,
	  addRootSelector,
	  addInitSelector,
	  addScopeToNode,
	  deferMutations,
	  mapAttributes,
	  evaluateLater,
	  setEvaluator,
	  mergeProxies,
	  findClosest,
	  closestRoot,
	  interceptor,
	  transition,
	  setStyles,
	  mutateDom,
	  directive,
	  throttle,
	  debounce,
	  evaluate,
	  initTree,
	  nextTick,
	  prefixed: prefix,
	  prefix: setPrefix,
	  plugin,
	  magic,
	  store,
	  start,
	  clone,
	  bound: getBinding,
	  $data: scope,
	  data,
	  bind: bind2
	};
	var alpine_default = Alpine;

	// node_modules/@vue/shared/dist/shared.esm-bundler.js
	function makeMap(str, expectsLowerCase) {
	  const map = Object.create(null);
	  const list = str.split(",");
	  for (let i = 0; i < list.length; i++) {
	    map[list[i]] = true;
	  }
	  return expectsLowerCase ? (val) => !!map[val.toLowerCase()] : (val) => !!map[val];
	}
	var EMPTY_OBJ = Object.freeze({}) ;
	Object.freeze([]) ;
	var extend = Object.assign;
	var hasOwnProperty = Object.prototype.hasOwnProperty;
	var hasOwn = (val, key) => hasOwnProperty.call(val, key);
	var isArray = Array.isArray;
	var isMap = (val) => toTypeString(val) === "[object Map]";
	var isString = (val) => typeof val === "string";
	var isSymbol = (val) => typeof val === "symbol";
	var isObject = (val) => val !== null && typeof val === "object";
	var objectToString = Object.prototype.toString;
	var toTypeString = (value) => objectToString.call(value);
	var toRawType = (value) => {
	  return toTypeString(value).slice(8, -1);
	};
	var isIntegerKey = (key) => isString(key) && key !== "NaN" && key[0] !== "-" && "" + parseInt(key, 10) === key;
	var cacheStringFunction = (fn) => {
	  const cache = Object.create(null);
	  return (str) => {
	    const hit = cache[str];
	    return hit || (cache[str] = fn(str));
	  };
	};
	var capitalize = cacheStringFunction((str) => str.charAt(0).toUpperCase() + str.slice(1));
	var hasChanged = (value, oldValue) => value !== oldValue && (value === value || oldValue === oldValue);

	// node_modules/@vue/reactivity/dist/reactivity.esm-bundler.js
	var targetMap = new WeakMap();
	var effectStack = [];
	var activeEffect;
	var ITERATE_KEY = Symbol("iterate" );
	var MAP_KEY_ITERATE_KEY = Symbol("Map key iterate" );
	function isEffect(fn) {
	  return fn && fn._isEffect === true;
	}
	function effect2(fn, options = EMPTY_OBJ) {
	  if (isEffect(fn)) {
	    fn = fn.raw;
	  }
	  const effect3 = createReactiveEffect(fn, options);
	  if (!options.lazy) {
	    effect3();
	  }
	  return effect3;
	}
	function stop(effect3) {
	  if (effect3.active) {
	    cleanup(effect3);
	    if (effect3.options.onStop) {
	      effect3.options.onStop();
	    }
	    effect3.active = false;
	  }
	}
	var uid = 0;
	function createReactiveEffect(fn, options) {
	  const effect3 = function reactiveEffect() {
	    if (!effect3.active) {
	      return fn();
	    }
	    if (!effectStack.includes(effect3)) {
	      cleanup(effect3);
	      try {
	        enableTracking();
	        effectStack.push(effect3);
	        activeEffect = effect3;
	        return fn();
	      } finally {
	        effectStack.pop();
	        resetTracking();
	        activeEffect = effectStack[effectStack.length - 1];
	      }
	    }
	  };
	  effect3.id = uid++;
	  effect3.allowRecurse = !!options.allowRecurse;
	  effect3._isEffect = true;
	  effect3.active = true;
	  effect3.raw = fn;
	  effect3.deps = [];
	  effect3.options = options;
	  return effect3;
	}
	function cleanup(effect3) {
	  const {deps} = effect3;
	  if (deps.length) {
	    for (let i = 0; i < deps.length; i++) {
	      deps[i].delete(effect3);
	    }
	    deps.length = 0;
	  }
	}
	var shouldTrack = true;
	var trackStack = [];
	function pauseTracking() {
	  trackStack.push(shouldTrack);
	  shouldTrack = false;
	}
	function enableTracking() {
	  trackStack.push(shouldTrack);
	  shouldTrack = true;
	}
	function resetTracking() {
	  const last = trackStack.pop();
	  shouldTrack = last === void 0 ? true : last;
	}
	function track(target, type, key) {
	  if (!shouldTrack || activeEffect === void 0) {
	    return;
	  }
	  let depsMap = targetMap.get(target);
	  if (!depsMap) {
	    targetMap.set(target, depsMap = new Map());
	  }
	  let dep = depsMap.get(key);
	  if (!dep) {
	    depsMap.set(key, dep = new Set());
	  }
	  if (!dep.has(activeEffect)) {
	    dep.add(activeEffect);
	    activeEffect.deps.push(dep);
	    if (activeEffect.options.onTrack) {
	      activeEffect.options.onTrack({
	        effect: activeEffect,
	        target,
	        type,
	        key
	      });
	    }
	  }
	}
	function trigger(target, type, key, newValue, oldValue, oldTarget) {
	  const depsMap = targetMap.get(target);
	  if (!depsMap) {
	    return;
	  }
	  const effects = new Set();
	  const add2 = (effectsToAdd) => {
	    if (effectsToAdd) {
	      effectsToAdd.forEach((effect3) => {
	        if (effect3 !== activeEffect || effect3.allowRecurse) {
	          effects.add(effect3);
	        }
	      });
	    }
	  };
	  if (type === "clear") {
	    depsMap.forEach(add2);
	  } else if (key === "length" && isArray(target)) {
	    depsMap.forEach((dep, key2) => {
	      if (key2 === "length" || key2 >= newValue) {
	        add2(dep);
	      }
	    });
	  } else {
	    if (key !== void 0) {
	      add2(depsMap.get(key));
	    }
	    switch (type) {
	      case "add":
	        if (!isArray(target)) {
	          add2(depsMap.get(ITERATE_KEY));
	          if (isMap(target)) {
	            add2(depsMap.get(MAP_KEY_ITERATE_KEY));
	          }
	        } else if (isIntegerKey(key)) {
	          add2(depsMap.get("length"));
	        }
	        break;
	      case "delete":
	        if (!isArray(target)) {
	          add2(depsMap.get(ITERATE_KEY));
	          if (isMap(target)) {
	            add2(depsMap.get(MAP_KEY_ITERATE_KEY));
	          }
	        }
	        break;
	      case "set":
	        if (isMap(target)) {
	          add2(depsMap.get(ITERATE_KEY));
	        }
	        break;
	    }
	  }
	  const run = (effect3) => {
	    if (effect3.options.onTrigger) {
	      effect3.options.onTrigger({
	        effect: effect3,
	        target,
	        key,
	        type,
	        newValue,
	        oldValue,
	        oldTarget
	      });
	    }
	    if (effect3.options.scheduler) {
	      effect3.options.scheduler(effect3);
	    } else {
	      effect3();
	    }
	  };
	  effects.forEach(run);
	}
	var isNonTrackableKeys = /* @__PURE__ */ makeMap(`__proto__,__v_isRef,__isVue`);
	var builtInSymbols = new Set(Object.getOwnPropertyNames(Symbol).map((key) => Symbol[key]).filter(isSymbol));
	var get2 = /* @__PURE__ */ createGetter();
	var shallowGet = /* @__PURE__ */ createGetter(false, true);
	var readonlyGet = /* @__PURE__ */ createGetter(true);
	var shallowReadonlyGet = /* @__PURE__ */ createGetter(true, true);
	var arrayInstrumentations = {};
	["includes", "indexOf", "lastIndexOf"].forEach((key) => {
	  const method = Array.prototype[key];
	  arrayInstrumentations[key] = function(...args) {
	    const arr = toRaw(this);
	    for (let i = 0, l = this.length; i < l; i++) {
	      track(arr, "get", i + "");
	    }
	    const res = method.apply(arr, args);
	    if (res === -1 || res === false) {
	      return method.apply(arr, args.map(toRaw));
	    } else {
	      return res;
	    }
	  };
	});
	["push", "pop", "shift", "unshift", "splice"].forEach((key) => {
	  const method = Array.prototype[key];
	  arrayInstrumentations[key] = function(...args) {
	    pauseTracking();
	    const res = method.apply(this, args);
	    resetTracking();
	    return res;
	  };
	});
	function createGetter(isReadonly = false, shallow = false) {
	  return function get3(target, key, receiver) {
	    if (key === "__v_isReactive") {
	      return !isReadonly;
	    } else if (key === "__v_isReadonly") {
	      return isReadonly;
	    } else if (key === "__v_raw" && receiver === (isReadonly ? shallow ? shallowReadonlyMap : readonlyMap : shallow ? shallowReactiveMap : reactiveMap).get(target)) {
	      return target;
	    }
	    const targetIsArray = isArray(target);
	    if (!isReadonly && targetIsArray && hasOwn(arrayInstrumentations, key)) {
	      return Reflect.get(arrayInstrumentations, key, receiver);
	    }
	    const res = Reflect.get(target, key, receiver);
	    if (isSymbol(key) ? builtInSymbols.has(key) : isNonTrackableKeys(key)) {
	      return res;
	    }
	    if (!isReadonly) {
	      track(target, "get", key);
	    }
	    if (shallow) {
	      return res;
	    }
	    if (isRef(res)) {
	      const shouldUnwrap = !targetIsArray || !isIntegerKey(key);
	      return shouldUnwrap ? res.value : res;
	    }
	    if (isObject(res)) {
	      return isReadonly ? readonly(res) : reactive2(res);
	    }
	    return res;
	  };
	}
	var set2 = /* @__PURE__ */ createSetter();
	var shallowSet = /* @__PURE__ */ createSetter(true);
	function createSetter(shallow = false) {
	  return function set3(target, key, value, receiver) {
	    let oldValue = target[key];
	    if (!shallow) {
	      value = toRaw(value);
	      oldValue = toRaw(oldValue);
	      if (!isArray(target) && isRef(oldValue) && !isRef(value)) {
	        oldValue.value = value;
	        return true;
	      }
	    }
	    const hadKey = isArray(target) && isIntegerKey(key) ? Number(key) < target.length : hasOwn(target, key);
	    const result = Reflect.set(target, key, value, receiver);
	    if (target === toRaw(receiver)) {
	      if (!hadKey) {
	        trigger(target, "add", key, value);
	      } else if (hasChanged(value, oldValue)) {
	        trigger(target, "set", key, value, oldValue);
	      }
	    }
	    return result;
	  };
	}
	function deleteProperty(target, key) {
	  const hadKey = hasOwn(target, key);
	  const oldValue = target[key];
	  const result = Reflect.deleteProperty(target, key);
	  if (result && hadKey) {
	    trigger(target, "delete", key, void 0, oldValue);
	  }
	  return result;
	}
	function has(target, key) {
	  const result = Reflect.has(target, key);
	  if (!isSymbol(key) || !builtInSymbols.has(key)) {
	    track(target, "has", key);
	  }
	  return result;
	}
	function ownKeys(target) {
	  track(target, "iterate", isArray(target) ? "length" : ITERATE_KEY);
	  return Reflect.ownKeys(target);
	}
	var mutableHandlers = {
	  get: get2,
	  set: set2,
	  deleteProperty,
	  has,
	  ownKeys
	};
	var readonlyHandlers = {
	  get: readonlyGet,
	  set(target, key) {
	    {
	      console.warn(`Set operation on key "${String(key)}" failed: target is readonly.`, target);
	    }
	    return true;
	  },
	  deleteProperty(target, key) {
	    {
	      console.warn(`Delete operation on key "${String(key)}" failed: target is readonly.`, target);
	    }
	    return true;
	  }
	};
	extend({}, mutableHandlers, {
	  get: shallowGet,
	  set: shallowSet
	});
	extend({}, readonlyHandlers, {
	  get: shallowReadonlyGet
	});
	var toReactive = (value) => isObject(value) ? reactive2(value) : value;
	var toReadonly = (value) => isObject(value) ? readonly(value) : value;
	var toShallow = (value) => value;
	var getProto = (v) => Reflect.getPrototypeOf(v);
	function get$1(target, key, isReadonly = false, isShallow = false) {
	  target = target["__v_raw"];
	  const rawTarget = toRaw(target);
	  const rawKey = toRaw(key);
	  if (key !== rawKey) {
	    !isReadonly && track(rawTarget, "get", key);
	  }
	  !isReadonly && track(rawTarget, "get", rawKey);
	  const {has: has2} = getProto(rawTarget);
	  const wrap = isShallow ? toShallow : isReadonly ? toReadonly : toReactive;
	  if (has2.call(rawTarget, key)) {
	    return wrap(target.get(key));
	  } else if (has2.call(rawTarget, rawKey)) {
	    return wrap(target.get(rawKey));
	  } else if (target !== rawTarget) {
	    target.get(key);
	  }
	}
	function has$1(key, isReadonly = false) {
	  const target = this["__v_raw"];
	  const rawTarget = toRaw(target);
	  const rawKey = toRaw(key);
	  if (key !== rawKey) {
	    !isReadonly && track(rawTarget, "has", key);
	  }
	  !isReadonly && track(rawTarget, "has", rawKey);
	  return key === rawKey ? target.has(key) : target.has(key) || target.has(rawKey);
	}
	function size(target, isReadonly = false) {
	  target = target["__v_raw"];
	  !isReadonly && track(toRaw(target), "iterate", ITERATE_KEY);
	  return Reflect.get(target, "size", target);
	}
	function add(value) {
	  value = toRaw(value);
	  const target = toRaw(this);
	  const proto = getProto(target);
	  const hadKey = proto.has.call(target, value);
	  if (!hadKey) {
	    target.add(value);
	    trigger(target, "add", value, value);
	  }
	  return this;
	}
	function set$1(key, value) {
	  value = toRaw(value);
	  const target = toRaw(this);
	  const {has: has2, get: get3} = getProto(target);
	  let hadKey = has2.call(target, key);
	  if (!hadKey) {
	    key = toRaw(key);
	    hadKey = has2.call(target, key);
	  } else {
	    checkIdentityKeys(target, has2, key);
	  }
	  const oldValue = get3.call(target, key);
	  target.set(key, value);
	  if (!hadKey) {
	    trigger(target, "add", key, value);
	  } else if (hasChanged(value, oldValue)) {
	    trigger(target, "set", key, value, oldValue);
	  }
	  return this;
	}
	function deleteEntry(key) {
	  const target = toRaw(this);
	  const {has: has2, get: get3} = getProto(target);
	  let hadKey = has2.call(target, key);
	  if (!hadKey) {
	    key = toRaw(key);
	    hadKey = has2.call(target, key);
	  } else {
	    checkIdentityKeys(target, has2, key);
	  }
	  const oldValue = get3 ? get3.call(target, key) : void 0;
	  const result = target.delete(key);
	  if (hadKey) {
	    trigger(target, "delete", key, void 0, oldValue);
	  }
	  return result;
	}
	function clear() {
	  const target = toRaw(this);
	  const hadItems = target.size !== 0;
	  const oldTarget = isMap(target) ? new Map(target) : new Set(target) ;
	  const result = target.clear();
	  if (hadItems) {
	    trigger(target, "clear", void 0, void 0, oldTarget);
	  }
	  return result;
	}
	function createForEach(isReadonly, isShallow) {
	  return function forEach(callback, thisArg) {
	    const observed = this;
	    const target = observed["__v_raw"];
	    const rawTarget = toRaw(target);
	    const wrap = isShallow ? toShallow : isReadonly ? toReadonly : toReactive;
	    !isReadonly && track(rawTarget, "iterate", ITERATE_KEY);
	    return target.forEach((value, key) => {
	      return callback.call(thisArg, wrap(value), wrap(key), observed);
	    });
	  };
	}
	function createIterableMethod(method, isReadonly, isShallow) {
	  return function(...args) {
	    const target = this["__v_raw"];
	    const rawTarget = toRaw(target);
	    const targetIsMap = isMap(rawTarget);
	    const isPair = method === "entries" || method === Symbol.iterator && targetIsMap;
	    const isKeyOnly = method === "keys" && targetIsMap;
	    const innerIterator = target[method](...args);
	    const wrap = isShallow ? toShallow : isReadonly ? toReadonly : toReactive;
	    !isReadonly && track(rawTarget, "iterate", isKeyOnly ? MAP_KEY_ITERATE_KEY : ITERATE_KEY);
	    return {
	      next() {
	        const {value, done} = innerIterator.next();
	        return done ? {value, done} : {
	          value: isPair ? [wrap(value[0]), wrap(value[1])] : wrap(value),
	          done
	        };
	      },
	      [Symbol.iterator]() {
	        return this;
	      }
	    };
	  };
	}
	function createReadonlyMethod(type) {
	  return function(...args) {
	    {
	      const key = args[0] ? `on key "${args[0]}" ` : ``;
	      console.warn(`${capitalize(type)} operation ${key}failed: target is readonly.`, toRaw(this));
	    }
	    return type === "delete" ? false : this;
	  };
	}
	var mutableInstrumentations = {
	  get(key) {
	    return get$1(this, key);
	  },
	  get size() {
	    return size(this);
	  },
	  has: has$1,
	  add,
	  set: set$1,
	  delete: deleteEntry,
	  clear,
	  forEach: createForEach(false, false)
	};
	var shallowInstrumentations = {
	  get(key) {
	    return get$1(this, key, false, true);
	  },
	  get size() {
	    return size(this);
	  },
	  has: has$1,
	  add,
	  set: set$1,
	  delete: deleteEntry,
	  clear,
	  forEach: createForEach(false, true)
	};
	var readonlyInstrumentations = {
	  get(key) {
	    return get$1(this, key, true);
	  },
	  get size() {
	    return size(this, true);
	  },
	  has(key) {
	    return has$1.call(this, key, true);
	  },
	  add: createReadonlyMethod("add"),
	  set: createReadonlyMethod("set"),
	  delete: createReadonlyMethod("delete"),
	  clear: createReadonlyMethod("clear"),
	  forEach: createForEach(true, false)
	};
	var shallowReadonlyInstrumentations = {
	  get(key) {
	    return get$1(this, key, true, true);
	  },
	  get size() {
	    return size(this, true);
	  },
	  has(key) {
	    return has$1.call(this, key, true);
	  },
	  add: createReadonlyMethod("add"),
	  set: createReadonlyMethod("set"),
	  delete: createReadonlyMethod("delete"),
	  clear: createReadonlyMethod("clear"),
	  forEach: createForEach(true, true)
	};
	var iteratorMethods = ["keys", "values", "entries", Symbol.iterator];
	iteratorMethods.forEach((method) => {
	  mutableInstrumentations[method] = createIterableMethod(method, false, false);
	  readonlyInstrumentations[method] = createIterableMethod(method, true, false);
	  shallowInstrumentations[method] = createIterableMethod(method, false, true);
	  shallowReadonlyInstrumentations[method] = createIterableMethod(method, true, true);
	});
	function createInstrumentationGetter(isReadonly, shallow) {
	  const instrumentations = shallow ? isReadonly ? shallowReadonlyInstrumentations : shallowInstrumentations : isReadonly ? readonlyInstrumentations : mutableInstrumentations;
	  return (target, key, receiver) => {
	    if (key === "__v_isReactive") {
	      return !isReadonly;
	    } else if (key === "__v_isReadonly") {
	      return isReadonly;
	    } else if (key === "__v_raw") {
	      return target;
	    }
	    return Reflect.get(hasOwn(instrumentations, key) && key in target ? instrumentations : target, key, receiver);
	  };
	}
	var mutableCollectionHandlers = {
	  get: createInstrumentationGetter(false, false)
	};
	var readonlyCollectionHandlers = {
	  get: createInstrumentationGetter(true, false)
	};
	function checkIdentityKeys(target, has2, key) {
	  const rawKey = toRaw(key);
	  if (rawKey !== key && has2.call(target, rawKey)) {
	    const type = toRawType(target);
	    console.warn(`Reactive ${type} contains both the raw and reactive versions of the same object${type === `Map` ? ` as keys` : ``}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`);
	  }
	}
	var reactiveMap = new WeakMap();
	var shallowReactiveMap = new WeakMap();
	var readonlyMap = new WeakMap();
	var shallowReadonlyMap = new WeakMap();
	function targetTypeMap(rawType) {
	  switch (rawType) {
	    case "Object":
	    case "Array":
	      return 1;
	    case "Map":
	    case "Set":
	    case "WeakMap":
	    case "WeakSet":
	      return 2;
	    default:
	      return 0;
	  }
	}
	function getTargetType(value) {
	  return value["__v_skip"] || !Object.isExtensible(value) ? 0 : targetTypeMap(toRawType(value));
	}
	function reactive2(target) {
	  if (target && target["__v_isReadonly"]) {
	    return target;
	  }
	  return createReactiveObject(target, false, mutableHandlers, mutableCollectionHandlers, reactiveMap);
	}
	function readonly(target) {
	  return createReactiveObject(target, true, readonlyHandlers, readonlyCollectionHandlers, readonlyMap);
	}
	function createReactiveObject(target, isReadonly, baseHandlers, collectionHandlers, proxyMap) {
	  if (!isObject(target)) {
	    {
	      console.warn(`value cannot be made reactive: ${String(target)}`);
	    }
	    return target;
	  }
	  if (target["__v_raw"] && !(isReadonly && target["__v_isReactive"])) {
	    return target;
	  }
	  const existingProxy = proxyMap.get(target);
	  if (existingProxy) {
	    return existingProxy;
	  }
	  const targetType = getTargetType(target);
	  if (targetType === 0) {
	    return target;
	  }
	  const proxy = new Proxy(target, targetType === 2 ? collectionHandlers : baseHandlers);
	  proxyMap.set(target, proxy);
	  return proxy;
	}
	function toRaw(observed) {
	  return observed && toRaw(observed["__v_raw"]) || observed;
	}
	function isRef(r) {
	  return Boolean(r && r.__v_isRef === true);
	}

	// packages/alpinejs/src/magics/$nextTick.js
	magic("nextTick", () => nextTick);

	// packages/alpinejs/src/magics/$dispatch.js
	magic("dispatch", (el) => dispatch.bind(dispatch, el));

	// packages/alpinejs/src/magics/$watch.js
	magic("watch", (el, {evaluateLater: evaluateLater2, effect: effect3}) => (key, callback) => {
	  let evaluate2 = evaluateLater2(key);
	  let firstTime = true;
	  let oldValue;
	  let effectReference = effect3(() => evaluate2((value) => {
	    JSON.stringify(value);
	    if (!firstTime) {
	      queueMicrotask(() => {
	        callback(value, oldValue);
	        oldValue = value;
	      });
	    } else {
	      oldValue = value;
	    }
	    firstTime = false;
	  }));
	  el._x_effects.delete(effectReference);
	});

	// packages/alpinejs/src/magics/$store.js
	magic("store", getStores);

	// packages/alpinejs/src/magics/$data.js
	magic("data", (el) => scope(el));

	// packages/alpinejs/src/magics/$root.js
	magic("root", (el) => closestRoot(el));

	// packages/alpinejs/src/magics/$refs.js
	magic("refs", (el) => {
	  if (el._x_refs_proxy)
	    return el._x_refs_proxy;
	  el._x_refs_proxy = mergeProxies(getArrayOfRefObject(el));
	  return el._x_refs_proxy;
	});
	function getArrayOfRefObject(el) {
	  let refObjects = [];
	  let currentEl = el;
	  while (currentEl) {
	    if (currentEl._x_refs)
	      refObjects.push(currentEl._x_refs);
	    currentEl = currentEl.parentNode;
	  }
	  return refObjects;
	}

	// packages/alpinejs/src/ids.js
	var globalIdMemo = {};
	function findAndIncrementId(name) {
	  if (!globalIdMemo[name])
	    globalIdMemo[name] = 0;
	  return ++globalIdMemo[name];
	}
	function closestIdRoot(el, name) {
	  return findClosest(el, (element) => {
	    if (element._x_ids && element._x_ids[name])
	      return true;
	  });
	}
	function setIdRoot(el, name) {
	  if (!el._x_ids)
	    el._x_ids = {};
	  if (!el._x_ids[name])
	    el._x_ids[name] = findAndIncrementId(name);
	}

	// packages/alpinejs/src/magics/$id.js
	magic("id", (el) => (name, key = null) => {
	  let root = closestIdRoot(el, name);
	  let id = root ? root._x_ids[name] : findAndIncrementId(name);
	  return key ? `${name}-${id}-${key}` : `${name}-${id}`;
	});

	// packages/alpinejs/src/magics/$el.js
	magic("el", (el) => el);

	// packages/alpinejs/src/magics/index.js
	warnMissingPluginMagic("Focus", "focus", "focus");
	warnMissingPluginMagic("Persist", "persist", "persist");
	function warnMissingPluginMagic(name, magicName, slug) {
	  magic(magicName, (el) => warn(`You can't use [$${directiveName}] without first installing the "${name}" plugin here: https://alpinejs.dev/plugins/${slug}`, el));
	}

	// packages/alpinejs/src/directives/x-modelable.js
	directive("modelable", (el, {expression}, {effect: effect3, evaluateLater: evaluateLater2}) => {
	  let func = evaluateLater2(expression);
	  let innerGet = () => {
	    let result;
	    func((i) => result = i);
	    return result;
	  };
	  let evaluateInnerSet = evaluateLater2(`${expression} = __placeholder`);
	  let innerSet = (val) => evaluateInnerSet(() => {
	  }, {scope: {__placeholder: val}});
	  let initialValue = innerGet();
	  innerSet(initialValue);
	  queueMicrotask(() => {
	    if (!el._x_model)
	      return;
	    el._x_removeModelListeners["default"]();
	    let outerGet = el._x_model.get;
	    let outerSet = el._x_model.set;
	    effect3(() => innerSet(outerGet()));
	    effect3(() => outerSet(innerGet()));
	  });
	});

	// packages/alpinejs/src/directives/x-teleport.js
	directive("teleport", (el, {expression}, {cleanup: cleanup2}) => {
	  if (el.tagName.toLowerCase() !== "template")
	    warn("x-teleport can only be used on a <template> tag", el);
	  let target = document.querySelector(expression);
	  if (!target)
	    warn(`Cannot find x-teleport element for selector: "${expression}"`);
	  let clone2 = el.content.cloneNode(true).firstElementChild;
	  el._x_teleport = clone2;
	  clone2._x_teleportBack = el;
	  if (el._x_forwardEvents) {
	    el._x_forwardEvents.forEach((eventName) => {
	      clone2.addEventListener(eventName, (e) => {
	        e.stopPropagation();
	        el.dispatchEvent(new e.constructor(e.type, e));
	      });
	    });
	  }
	  addScopeToNode(clone2, {}, el);
	  mutateDom(() => {
	    target.appendChild(clone2);
	    initTree(clone2);
	    clone2._x_ignore = true;
	  });
	  cleanup2(() => clone2.remove());
	});

	// packages/alpinejs/src/directives/x-ignore.js
	var handler = () => {
	};
	handler.inline = (el, {modifiers}, {cleanup: cleanup2}) => {
	  modifiers.includes("self") ? el._x_ignoreSelf = true : el._x_ignore = true;
	  cleanup2(() => {
	    modifiers.includes("self") ? delete el._x_ignoreSelf : delete el._x_ignore;
	  });
	};
	directive("ignore", handler);

	// packages/alpinejs/src/directives/x-effect.js
	directive("effect", (el, {expression}, {effect: effect3}) => effect3(evaluateLater(el, expression)));

	// packages/alpinejs/src/utils/on.js
	function on(el, event, modifiers, callback) {
	  let listenerTarget = el;
	  let handler3 = (e) => callback(e);
	  let options = {};
	  let wrapHandler = (callback2, wrapper) => (e) => wrapper(callback2, e);
	  if (modifiers.includes("dot"))
	    event = dotSyntax(event);
	  if (modifiers.includes("camel"))
	    event = camelCase2(event);
	  if (modifiers.includes("passive"))
	    options.passive = true;
	  if (modifiers.includes("capture"))
	    options.capture = true;
	  if (modifiers.includes("window"))
	    listenerTarget = window;
	  if (modifiers.includes("document"))
	    listenerTarget = document;
	  if (modifiers.includes("prevent"))
	    handler3 = wrapHandler(handler3, (next, e) => {
	      e.preventDefault();
	      next(e);
	    });
	  if (modifiers.includes("stop"))
	    handler3 = wrapHandler(handler3, (next, e) => {
	      e.stopPropagation();
	      next(e);
	    });
	  if (modifiers.includes("self"))
	    handler3 = wrapHandler(handler3, (next, e) => {
	      e.target === el && next(e);
	    });
	  if (modifiers.includes("away") || modifiers.includes("outside")) {
	    listenerTarget = document;
	    handler3 = wrapHandler(handler3, (next, e) => {
	      if (el.contains(e.target))
	        return;
	      if (e.target.isConnected === false)
	        return;
	      if (el.offsetWidth < 1 && el.offsetHeight < 1)
	        return;
	      if (el._x_isShown === false)
	        return;
	      next(e);
	    });
	  }
	  if (modifiers.includes("once")) {
	    handler3 = wrapHandler(handler3, (next, e) => {
	      next(e);
	      listenerTarget.removeEventListener(event, handler3, options);
	    });
	  }
	  handler3 = wrapHandler(handler3, (next, e) => {
	    if (isKeyEvent(event)) {
	      if (isListeningForASpecificKeyThatHasntBeenPressed(e, modifiers)) {
	        return;
	      }
	    }
	    next(e);
	  });
	  if (modifiers.includes("debounce")) {
	    let nextModifier = modifiers[modifiers.indexOf("debounce") + 1] || "invalid-wait";
	    let wait = isNumeric(nextModifier.split("ms")[0]) ? Number(nextModifier.split("ms")[0]) : 250;
	    handler3 = debounce(handler3, wait);
	  }
	  if (modifiers.includes("throttle")) {
	    let nextModifier = modifiers[modifiers.indexOf("throttle") + 1] || "invalid-wait";
	    let wait = isNumeric(nextModifier.split("ms")[0]) ? Number(nextModifier.split("ms")[0]) : 250;
	    handler3 = throttle(handler3, wait);
	  }
	  listenerTarget.addEventListener(event, handler3, options);
	  return () => {
	    listenerTarget.removeEventListener(event, handler3, options);
	  };
	}
	function dotSyntax(subject) {
	  return subject.replace(/-/g, ".");
	}
	function camelCase2(subject) {
	  return subject.toLowerCase().replace(/-(\w)/g, (match, char) => char.toUpperCase());
	}
	function isNumeric(subject) {
	  return !Array.isArray(subject) && !isNaN(subject);
	}
	function kebabCase2(subject) {
	  return subject.replace(/([a-z])([A-Z])/g, "$1-$2").replace(/[_\s]/, "-").toLowerCase();
	}
	function isKeyEvent(event) {
	  return ["keydown", "keyup"].includes(event);
	}
	function isListeningForASpecificKeyThatHasntBeenPressed(e, modifiers) {
	  let keyModifiers = modifiers.filter((i) => {
	    return !["window", "document", "prevent", "stop", "once"].includes(i);
	  });
	  if (keyModifiers.includes("debounce")) {
	    let debounceIndex = keyModifiers.indexOf("debounce");
	    keyModifiers.splice(debounceIndex, isNumeric((keyModifiers[debounceIndex + 1] || "invalid-wait").split("ms")[0]) ? 2 : 1);
	  }
	  if (keyModifiers.length === 0)
	    return false;
	  if (keyModifiers.length === 1 && keyToModifiers(e.key).includes(keyModifiers[0]))
	    return false;
	  const systemKeyModifiers = ["ctrl", "shift", "alt", "meta", "cmd", "super"];
	  const selectedSystemKeyModifiers = systemKeyModifiers.filter((modifier) => keyModifiers.includes(modifier));
	  keyModifiers = keyModifiers.filter((i) => !selectedSystemKeyModifiers.includes(i));
	  if (selectedSystemKeyModifiers.length > 0) {
	    const activelyPressedKeyModifiers = selectedSystemKeyModifiers.filter((modifier) => {
	      if (modifier === "cmd" || modifier === "super")
	        modifier = "meta";
	      return e[`${modifier}Key`];
	    });
	    if (activelyPressedKeyModifiers.length === selectedSystemKeyModifiers.length) {
	      if (keyToModifiers(e.key).includes(keyModifiers[0]))
	        return false;
	    }
	  }
	  return true;
	}
	function keyToModifiers(key) {
	  if (!key)
	    return [];
	  key = kebabCase2(key);
	  let modifierToKeyMap = {
	    ctrl: "control",
	    slash: "/",
	    space: "-",
	    spacebar: "-",
	    cmd: "meta",
	    esc: "escape",
	    up: "arrow-up",
	    down: "arrow-down",
	    left: "arrow-left",
	    right: "arrow-right",
	    period: ".",
	    equal: "="
	  };
	  modifierToKeyMap[key] = key;
	  return Object.keys(modifierToKeyMap).map((modifier) => {
	    if (modifierToKeyMap[modifier] === key)
	      return modifier;
	  }).filter((modifier) => modifier);
	}

	// packages/alpinejs/src/directives/x-model.js
	directive("model", (el, {modifiers, expression}, {effect: effect3, cleanup: cleanup2}) => {
	  let evaluate2 = evaluateLater(el, expression);
	  let assignmentExpression = `${expression} = rightSideOfExpression($event, ${expression})`;
	  let evaluateAssignment = evaluateLater(el, assignmentExpression);
	  var event = el.tagName.toLowerCase() === "select" || ["checkbox", "radio"].includes(el.type) || modifiers.includes("lazy") ? "change" : "input";
	  let assigmentFunction = generateAssignmentFunction(el, modifiers, expression);
	  let removeListener = on(el, event, modifiers, (e) => {
	    evaluateAssignment(() => {
	    }, {scope: {
	      $event: e,
	      rightSideOfExpression: assigmentFunction
	    }});
	  });
	  if (!el._x_removeModelListeners)
	    el._x_removeModelListeners = {};
	  el._x_removeModelListeners["default"] = removeListener;
	  cleanup2(() => el._x_removeModelListeners["default"]());
	  let evaluateSetModel = evaluateLater(el, `${expression} = __placeholder`);
	  el._x_model = {
	    get() {
	      let result;
	      evaluate2((value) => result = value);
	      return result;
	    },
	    set(value) {
	      evaluateSetModel(() => {
	      }, {scope: {__placeholder: value}});
	    }
	  };
	  el._x_forceModelUpdate = () => {
	    evaluate2((value) => {
	      if (value === void 0 && expression.match(/\./))
	        value = "";
	      window.fromModel = true;
	      mutateDom(() => bind(el, "value", value));
	      delete window.fromModel;
	    });
	  };
	  effect3(() => {
	    if (modifiers.includes("unintrusive") && document.activeElement.isSameNode(el))
	      return;
	    el._x_forceModelUpdate();
	  });
	});
	function generateAssignmentFunction(el, modifiers, expression) {
	  if (el.type === "radio") {
	    mutateDom(() => {
	      if (!el.hasAttribute("name"))
	        el.setAttribute("name", expression);
	    });
	  }
	  return (event, currentValue) => {
	    return mutateDom(() => {
	      if (event instanceof CustomEvent && event.detail !== void 0) {
	        return event.detail || event.target.value;
	      } else if (el.type === "checkbox") {
	        if (Array.isArray(currentValue)) {
	          let newValue = modifiers.includes("number") ? safeParseNumber(event.target.value) : event.target.value;
	          return event.target.checked ? currentValue.concat([newValue]) : currentValue.filter((el2) => !checkedAttrLooseCompare2(el2, newValue));
	        } else {
	          return event.target.checked;
	        }
	      } else if (el.tagName.toLowerCase() === "select" && el.multiple) {
	        return modifiers.includes("number") ? Array.from(event.target.selectedOptions).map((option) => {
	          let rawValue = option.value || option.text;
	          return safeParseNumber(rawValue);
	        }) : Array.from(event.target.selectedOptions).map((option) => {
	          return option.value || option.text;
	        });
	      } else {
	        let rawValue = event.target.value;
	        return modifiers.includes("number") ? safeParseNumber(rawValue) : modifiers.includes("trim") ? rawValue.trim() : rawValue;
	      }
	    });
	  };
	}
	function safeParseNumber(rawValue) {
	  let number = rawValue ? parseFloat(rawValue) : null;
	  return isNumeric2(number) ? number : rawValue;
	}
	function checkedAttrLooseCompare2(valueA, valueB) {
	  return valueA == valueB;
	}
	function isNumeric2(subject) {
	  return !Array.isArray(subject) && !isNaN(subject);
	}

	// packages/alpinejs/src/directives/x-cloak.js
	directive("cloak", (el) => queueMicrotask(() => mutateDom(() => el.removeAttribute(prefix("cloak")))));

	// packages/alpinejs/src/directives/x-init.js
	addInitSelector(() => `[${prefix("init")}]`);
	directive("init", skipDuringClone((el, {expression}, {evaluate: evaluate2}) => {
	  if (typeof expression === "string") {
	    return !!expression.trim() && evaluate2(expression, {}, false);
	  }
	  return evaluate2(expression, {}, false);
	}));

	// packages/alpinejs/src/directives/x-text.js
	directive("text", (el, {expression}, {effect: effect3, evaluateLater: evaluateLater2}) => {
	  let evaluate2 = evaluateLater2(expression);
	  effect3(() => {
	    evaluate2((value) => {
	      mutateDom(() => {
	        el.textContent = value;
	      });
	    });
	  });
	});

	// packages/alpinejs/src/directives/x-html.js
	directive("html", (el, {expression}, {effect: effect3, evaluateLater: evaluateLater2}) => {
	  let evaluate2 = evaluateLater2(expression);
	  effect3(() => {
	    evaluate2((value) => {
	      mutateDom(() => {
	        el.innerHTML = value;
	        el._x_ignoreSelf = true;
	        initTree(el);
	        delete el._x_ignoreSelf;
	      });
	    });
	  });
	});

	// packages/alpinejs/src/directives/x-bind.js
	mapAttributes(startingWith(":", into(prefix("bind:"))));
	directive("bind", (el, {value, modifiers, expression, original}, {effect: effect3}) => {
	  if (!value) {
	    let bindingProviders = {};
	    injectBindingProviders(bindingProviders);
	    let getBindings = evaluateLater(el, expression);
	    getBindings((bindings) => {
	      applyBindingsObject(el, bindings, original);
	    }, {scope: bindingProviders});
	    return;
	  }
	  if (value === "key")
	    return storeKeyForXFor(el, expression);
	  let evaluate2 = evaluateLater(el, expression);
	  effect3(() => evaluate2((result) => {
	    if (result === void 0 && expression.match(/\./))
	      result = "";
	    mutateDom(() => bind(el, value, result, modifiers));
	  }));
	});
	function storeKeyForXFor(el, expression) {
	  el._x_keyExpression = expression;
	}

	// packages/alpinejs/src/directives/x-data.js
	addRootSelector(() => `[${prefix("data")}]`);
	directive("data", skipDuringClone((el, {expression}, {cleanup: cleanup2}) => {
	  expression = expression === "" ? "{}" : expression;
	  let magicContext = {};
	  injectMagics(magicContext, el);
	  let dataProviderContext = {};
	  injectDataProviders(dataProviderContext, magicContext);
	  let data2 = evaluate(el, expression, {scope: dataProviderContext});
	  if (data2 === void 0)
	    data2 = {};
	  injectMagics(data2, el);
	  let reactiveData = reactive(data2);
	  initInterceptors(reactiveData);
	  let undo = addScopeToNode(el, reactiveData);
	  reactiveData["init"] && evaluate(el, reactiveData["init"]);
	  cleanup2(() => {
	    reactiveData["destroy"] && evaluate(el, reactiveData["destroy"]);
	    undo();
	  });
	}));

	// packages/alpinejs/src/directives/x-show.js
	directive("show", (el, {modifiers, expression}, {effect: effect3}) => {
	  let evaluate2 = evaluateLater(el, expression);
	  if (!el._x_doHide)
	    el._x_doHide = () => {
	      mutateDom(() => {
	        el.style.setProperty("display", "none", modifiers.includes("important") ? "important" : void 0);
	      });
	    };
	  if (!el._x_doShow)
	    el._x_doShow = () => {
	      mutateDom(() => {
	        if (el.style.length === 1 && el.style.display === "none") {
	          el.removeAttribute("style");
	        } else {
	          el.style.removeProperty("display");
	        }
	      });
	    };
	  let hide = () => {
	    el._x_doHide();
	    el._x_isShown = false;
	  };
	  let show = () => {
	    el._x_doShow();
	    el._x_isShown = true;
	  };
	  let clickAwayCompatibleShow = () => setTimeout(show);
	  let toggle = once((value) => value ? show() : hide(), (value) => {
	    if (typeof el._x_toggleAndCascadeWithTransitions === "function") {
	      el._x_toggleAndCascadeWithTransitions(el, value, show, hide);
	    } else {
	      value ? clickAwayCompatibleShow() : hide();
	    }
	  });
	  let oldValue;
	  let firstTime = true;
	  effect3(() => evaluate2((value) => {
	    if (!firstTime && value === oldValue)
	      return;
	    if (modifiers.includes("immediate"))
	      value ? clickAwayCompatibleShow() : hide();
	    toggle(value);
	    oldValue = value;
	    firstTime = false;
	  }));
	});

	// packages/alpinejs/src/directives/x-for.js
	directive("for", (el, {expression}, {effect: effect3, cleanup: cleanup2}) => {
	  let iteratorNames = parseForExpression(expression);
	  let evaluateItems = evaluateLater(el, iteratorNames.items);
	  let evaluateKey = evaluateLater(el, el._x_keyExpression || "index");
	  el._x_prevKeys = [];
	  el._x_lookup = {};
	  effect3(() => loop(el, iteratorNames, evaluateItems, evaluateKey));
	  cleanup2(() => {
	    Object.values(el._x_lookup).forEach((el2) => el2.remove());
	    delete el._x_prevKeys;
	    delete el._x_lookup;
	  });
	});
	function loop(el, iteratorNames, evaluateItems, evaluateKey) {
	  let isObject2 = (i) => typeof i === "object" && !Array.isArray(i);
	  let templateEl = el;
	  evaluateItems((items) => {
	    if (isNumeric3(items) && items >= 0) {
	      items = Array.from(Array(items).keys(), (i) => i + 1);
	    }
	    if (items === void 0)
	      items = [];
	    let lookup = el._x_lookup;
	    let prevKeys = el._x_prevKeys;
	    let scopes = [];
	    let keys = [];
	    if (isObject2(items)) {
	      items = Object.entries(items).map(([key, value]) => {
	        let scope2 = getIterationScopeVariables(iteratorNames, value, key, items);
	        evaluateKey((value2) => keys.push(value2), {scope: {index: key, ...scope2}});
	        scopes.push(scope2);
	      });
	    } else {
	      for (let i = 0; i < items.length; i++) {
	        let scope2 = getIterationScopeVariables(iteratorNames, items[i], i, items);
	        evaluateKey((value) => keys.push(value), {scope: {index: i, ...scope2}});
	        scopes.push(scope2);
	      }
	    }
	    let adds = [];
	    let moves = [];
	    let removes = [];
	    let sames = [];
	    for (let i = 0; i < prevKeys.length; i++) {
	      let key = prevKeys[i];
	      if (keys.indexOf(key) === -1)
	        removes.push(key);
	    }
	    prevKeys = prevKeys.filter((key) => !removes.includes(key));
	    let lastKey = "template";
	    for (let i = 0; i < keys.length; i++) {
	      let key = keys[i];
	      let prevIndex = prevKeys.indexOf(key);
	      if (prevIndex === -1) {
	        prevKeys.splice(i, 0, key);
	        adds.push([lastKey, i]);
	      } else if (prevIndex !== i) {
	        let keyInSpot = prevKeys.splice(i, 1)[0];
	        let keyForSpot = prevKeys.splice(prevIndex - 1, 1)[0];
	        prevKeys.splice(i, 0, keyForSpot);
	        prevKeys.splice(prevIndex, 0, keyInSpot);
	        moves.push([keyInSpot, keyForSpot]);
	      } else {
	        sames.push(key);
	      }
	      lastKey = key;
	    }
	    for (let i = 0; i < removes.length; i++) {
	      let key = removes[i];
	      if (!!lookup[key]._x_effects) {
	        lookup[key]._x_effects.forEach(dequeueJob);
	      }
	      lookup[key].remove();
	      lookup[key] = null;
	      delete lookup[key];
	    }
	    for (let i = 0; i < moves.length; i++) {
	      let [keyInSpot, keyForSpot] = moves[i];
	      let elInSpot = lookup[keyInSpot];
	      let elForSpot = lookup[keyForSpot];
	      let marker = document.createElement("div");
	      mutateDom(() => {
	        elForSpot.after(marker);
	        elInSpot.after(elForSpot);
	        elForSpot._x_currentIfEl && elForSpot.after(elForSpot._x_currentIfEl);
	        marker.before(elInSpot);
	        elInSpot._x_currentIfEl && elInSpot.after(elInSpot._x_currentIfEl);
	        marker.remove();
	      });
	      refreshScope(elForSpot, scopes[keys.indexOf(keyForSpot)]);
	    }
	    for (let i = 0; i < adds.length; i++) {
	      let [lastKey2, index] = adds[i];
	      let lastEl = lastKey2 === "template" ? templateEl : lookup[lastKey2];
	      if (lastEl._x_currentIfEl)
	        lastEl = lastEl._x_currentIfEl;
	      let scope2 = scopes[index];
	      let key = keys[index];
	      let clone2 = document.importNode(templateEl.content, true).firstElementChild;
	      addScopeToNode(clone2, reactive(scope2), templateEl);
	      mutateDom(() => {
	        lastEl.after(clone2);
	        initTree(clone2);
	      });
	      if (typeof key === "object") {
	        warn("x-for key cannot be an object, it must be a string or an integer", templateEl);
	      }
	      lookup[key] = clone2;
	    }
	    for (let i = 0; i < sames.length; i++) {
	      refreshScope(lookup[sames[i]], scopes[keys.indexOf(sames[i])]);
	    }
	    templateEl._x_prevKeys = keys;
	  });
	}
	function parseForExpression(expression) {
	  let forIteratorRE = /,([^,\}\]]*)(?:,([^,\}\]]*))?$/;
	  let stripParensRE = /^\s*\(|\)\s*$/g;
	  let forAliasRE = /([\s\S]*?)\s+(?:in|of)\s+([\s\S]*)/;
	  let inMatch = expression.match(forAliasRE);
	  if (!inMatch)
	    return;
	  let res = {};
	  res.items = inMatch[2].trim();
	  let item = inMatch[1].replace(stripParensRE, "").trim();
	  let iteratorMatch = item.match(forIteratorRE);
	  if (iteratorMatch) {
	    res.item = item.replace(forIteratorRE, "").trim();
	    res.index = iteratorMatch[1].trim();
	    if (iteratorMatch[2]) {
	      res.collection = iteratorMatch[2].trim();
	    }
	  } else {
	    res.item = item;
	  }
	  return res;
	}
	function getIterationScopeVariables(iteratorNames, item, index, items) {
	  let scopeVariables = {};
	  if (/^\[.*\]$/.test(iteratorNames.item) && Array.isArray(item)) {
	    let names = iteratorNames.item.replace("[", "").replace("]", "").split(",").map((i) => i.trim());
	    names.forEach((name, i) => {
	      scopeVariables[name] = item[i];
	    });
	  } else if (/^\{.*\}$/.test(iteratorNames.item) && !Array.isArray(item) && typeof item === "object") {
	    let names = iteratorNames.item.replace("{", "").replace("}", "").split(",").map((i) => i.trim());
	    names.forEach((name) => {
	      scopeVariables[name] = item[name];
	    });
	  } else {
	    scopeVariables[iteratorNames.item] = item;
	  }
	  if (iteratorNames.index)
	    scopeVariables[iteratorNames.index] = index;
	  if (iteratorNames.collection)
	    scopeVariables[iteratorNames.collection] = items;
	  return scopeVariables;
	}
	function isNumeric3(subject) {
	  return !Array.isArray(subject) && !isNaN(subject);
	}

	// packages/alpinejs/src/directives/x-ref.js
	function handler2() {
	}
	handler2.inline = (el, {expression}, {cleanup: cleanup2}) => {
	  let root = closestRoot(el);
	  if (!root._x_refs)
	    root._x_refs = {};
	  root._x_refs[expression] = el;
	  cleanup2(() => delete root._x_refs[expression]);
	};
	directive("ref", handler2);

	// packages/alpinejs/src/directives/x-if.js
	directive("if", (el, {expression}, {effect: effect3, cleanup: cleanup2}) => {
	  let evaluate2 = evaluateLater(el, expression);
	  let show = () => {
	    if (el._x_currentIfEl)
	      return el._x_currentIfEl;
	    let clone2 = el.content.cloneNode(true).firstElementChild;
	    addScopeToNode(clone2, {}, el);
	    mutateDom(() => {
	      el.after(clone2);
	      initTree(clone2);
	    });
	    el._x_currentIfEl = clone2;
	    el._x_undoIf = () => {
	      walk(clone2, (node) => {
	        if (!!node._x_effects) {
	          node._x_effects.forEach(dequeueJob);
	        }
	      });
	      clone2.remove();
	      delete el._x_currentIfEl;
	    };
	    return clone2;
	  };
	  let hide = () => {
	    if (!el._x_undoIf)
	      return;
	    el._x_undoIf();
	    delete el._x_undoIf;
	  };
	  effect3(() => evaluate2((value) => {
	    value ? show() : hide();
	  }));
	  cleanup2(() => el._x_undoIf && el._x_undoIf());
	});

	// packages/alpinejs/src/directives/x-id.js
	directive("id", (el, {expression}, {evaluate: evaluate2}) => {
	  let names = evaluate2(expression);
	  names.forEach((name) => setIdRoot(el, name));
	});

	// packages/alpinejs/src/directives/x-on.js
	mapAttributes(startingWith("@", into(prefix("on:"))));
	directive("on", skipDuringClone((el, {value, modifiers, expression}, {cleanup: cleanup2}) => {
	  let evaluate2 = expression ? evaluateLater(el, expression) : () => {
	  };
	  if (el.tagName.toLowerCase() === "template") {
	    if (!el._x_forwardEvents)
	      el._x_forwardEvents = [];
	    if (!el._x_forwardEvents.includes(value))
	      el._x_forwardEvents.push(value);
	  }
	  let removeListener = on(el, value, modifiers, (e) => {
	    evaluate2(() => {
	    }, {scope: {$event: e}, params: [e]});
	  });
	  cleanup2(() => removeListener());
	}));

	// packages/alpinejs/src/directives/index.js
	warnMissingPluginDirective("Collapse", "collapse", "collapse");
	warnMissingPluginDirective("Intersect", "intersect", "intersect");
	warnMissingPluginDirective("Focus", "trap", "focus");
	warnMissingPluginDirective("Mask", "mask", "mask");
	function warnMissingPluginDirective(name, directiveName2, slug) {
	  directive(directiveName2, (el) => warn(`You can't use [x-${directiveName2}] without first installing the "${name}" plugin here: https://alpinejs.dev/plugins/${slug}`, el));
	}

	// packages/alpinejs/src/index.js
	alpine_default.setEvaluator(normalEvaluator);
	alpine_default.setReactivityEngine({reactive: reactive2, effect: effect2, release: stop, raw: toRaw});
	var src_default = alpine_default;

	// packages/alpinejs/builds/module.js
	var module_default = src_default;

	window.Alpine = module_default;
	module_default.start();

	const link = document.querySelector('link[rel="canonical"]')
	    ? document.querySelector('link[rel="canonical"]')
	    : document.createElement('link');
	const pathname = typeof window !== 'undefined' ? window.location.href : '';
	link.setAttribute('rel', 'canonical');
	link.setAttribute('href', pathname);
	document.head.appendChild(link);

	var el = document.querySelector('#postData');
	if (el) {
	    el.addEventListener('submit', postData);
	}

	function postData(event) {
	    event.preventDefault();
	    let getQuotes = document.querySelector('#getquotes').value;
	    let getAuthor = document.querySelector('#author').value;
	    let getColor = document.querySelector('#getcolor').value;
	    const getInput = sanitizeHtml_1(getQuotes) || 'Your Quotes';
	    const authorInput = sanitizeHtml_1(getAuthor) || '';
	    const quotesColor = getColor || '#E9D5FF';
	    const random_id = Math.floor(1000 + Math.random() * 9000);
	    const basename = 'quotes-image-' + random_id;
	    const word = getInput;
	    const author = authorInput;
	    Toastify({
	        text: 'Created',
	        duration: 2000,
	        close: true,
	        gravity: 'bottom',
	        position: 'right',
	        style: {
	            background: '#833471',
	        },
	    }).showToast();

	    document.getElementById('notice').style.display = 'block';
	    document.getElementById('notice').innerHTML = ` 
            <div style="background-color: ${quotesColor}" class="quotes-box quotes-container" id="copy-wish">
            <p style="white-space: pre-line;">${word}</p>
            <br />
            <div class="quotes-footer">${author}</div>
            </div>
          `;
	    document.querySelector('#result').scrollIntoView({
	        behavior: 'smooth',
	    });
	    if (word == 'Your Name') {
	        console.log('Hello World');
	    } else {
	        html2canvas(document.getElementById('copy-wish'), {
	            allowTaint: true,
	            useCORS: true,
	            logging: false,
	        })
	            .then(function (canvas) {
	                let image = canvas.toDataURL('image/jpeg', 0.5);
	                document.getElementById('result').innerHTML = `
            <div class="flex items-center justify-center">
            <p><img src=${image}><P>
            </div>
            <br>
            <div class="flex items-center justify-center">
            <a class="inline-block px-12 py-3 rounded text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 font-medium uppercase umami--click--download-image" href="${image}" download="${basename}">⬇ Download image</a>
            </div>`;
	                document.getElementById('notice').style.display = 'none';
	            })
	            .catch(e => {
	                console.log(e);
	            });
	    }
	}
	if ('serviceWorker' in navigator) {
	    window.addEventListener('load', function () {
	        navigator.serviceWorker
	            .register('/sw.js')
	            .then(function (registration) {
	                console.log(
	                    'ServiceWorker and PWA registration successful with scope: ',
	                    registration.scope
	                );
	            })
	            .catch(function (err) {
	                console.log('ServiceWorker registration failed: ', err);
	            });
	    });
	}

})();
//# sourceMappingURL=bundle.js.map
