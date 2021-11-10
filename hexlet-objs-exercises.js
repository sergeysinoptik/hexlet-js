// lesson 3

import _ from "lodash";

const normalize = (obj) => {
  obj.name = obj.name.substr(0, 1).toUpperCase() + obj.name.substr(1).toLowerCase();
  obj.description = obj.description.toLowerCase();
  return obj;
};

export default normalize;

// lesson 4

const is = (obj1, obj2) => {
  if ((obj1.name === obj2.name) && (obj1.state === obj2.state) && (obj1.website === obj2.website)) {
    return true;
  }
  return false;
};

export default is;

// lesson 5

const getDomainInfo = (domain) => {
  const info = {};
  if (domain.startsWith('https://')) {
    info.scheme = 'https';
  } else {
    info.scheme = 'http';
  }
  info.name = _.last(domain.split('/'));
  return info;
};

export default getDomainInfo;

// lesson 6

const countWords = (str) => {
  const arrayOfWords = str.toLowerCase().split(' ');
  const result = {};
  for (const word of arrayOfWords) {
    result[word] = (result[word] ?? 0) + 1;
  }
  return result;
};

export default countWords;

// lesson 7

const pick = (obj, arr) => {
  const result = {};
  for (const item of arr) {
    if (_.has(obj, item)) {
      result[item] = obj[item];
    }
  }
  return result;
};

export default pick;

// lesson 8

const get = (obj, arr) => {
  if (arr.length === 1) {
    if (Object.prototype.hasOwnProperty.call(obj, String(arr[0]))) {
      return obj[String(arr[0])];
    } else {
      return null;
    }
  } else {
    let tempObj = obj;
    for (let i = 0; i < arr.length; i += 1) {
      if (!Object.prototype.hasOwnProperty.call(tempObj, String(arr[i]))) {
        return null;
      } else {
        tempObj = tempObj[arr[i]];
      }
    }
    return tempObj;
  }
};

export default get;

// lesson 9

const fill = (obj1, arr, obj2) => {
  if (arr.length === 0) {
    Object.assign(obj1, obj2);
  } else {
    for (let i = 0; i < arr.length; i += 1) {
      obj1[arr[i]] = obj2[arr[i]];
    }
  }
  return obj1;
};

export default fill;

// lesson 10

const cloneDeep20 = (obj) => {
  const result = {};
  for (const item in obj) {
    if (!_.isObject(item)) {
      result[item] = _.clone(obj[item]);
    } else {
      result[item] = _.clone(cloneDeep(item));
    }
  }
  return result;
}