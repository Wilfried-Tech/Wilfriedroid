var instances = {};

export function singleton(cls) {
  return function() {
    if (cls.name in instances) {
      return instances[cls.name];
    } else {
      instances[cls.name] = new cls(...arguments);
      return instances[cls.name];
    }
  }
}
