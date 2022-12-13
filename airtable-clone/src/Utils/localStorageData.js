//to retrieve the data from local storage
const getLocalData = (key) => {
  try {
    let data = JSON.parse(localStorage.getItem(key));
    return data;
  } catch (error) {
    return null;
  }
};

//to save some data in the local storage
const saveData = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

export { getLocalData, saveData };
