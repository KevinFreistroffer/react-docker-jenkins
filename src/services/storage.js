export const save = (key, value) => {
  if (window.localStorage) {
    window.localStorage.setItem(key, JSON.stringify(value));
  } else {
    return 'Local storage is not supported.';
  }
};

// Add/push item to an existing localStorage object
// ie accounts [], or transactions []
export const addNew = (key, value) => {
  if (window.localStorage) {
    const data = load(key);
    console.log(data);

    if (data) {
      const updatedData = [...data, value];
      console.log('udpatedData', updatedData);
      save(key, updatedData);
    } else {
      return `Data not found by key ${key}.`;
    }
  }
};

export const load = (key) => {
  if (window.localStorage) {
    return JSON.parse(window.localStorage.getItem(key));
  } else {
    return 'Local storage is not supported.';
  }
};

export const remove = (key) => {
  if (window.localStorage) {
    window.localStorage.removeItem(key);
  } else {
    return 'Local storage is not supported.';
  }
};

export const clear = () => {
  if (window.localStorage) {
    window.localStorage.clear();
  } else {
    return 'Local storage is not supported.';
  }
};

export const isSupported = () => {
  if (window.localStorage) {
    return true;
  } else {
    return false;
  }
};
