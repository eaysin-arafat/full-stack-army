class Storage {
  save(key: string, data: any) {
    localStorage.setItem(key, JSON.stringify(data));
  }

  get(key: string) {
    const json = localStorage.getItem(key);
    return JSON.parse(json);
  }
}

const storage = new Storage();
export default storage;
