module.exports = {
  succeed,
  fail,
  repair,
  get
};

function succeed(item) {
  if (item.enhancement < 20) {
    item.enhancement += 1;
  }
  return { ...item };
}

function fail(item) {
  if (item.enhancement < 15 && item.durability <= 4) {
    item.durability = 0;
  }
  if (item.enhancement < 15 && item.durability >= 5) {
    item.durability -= 5;
  }

  if (item.enhancement >= 15 && item.durability <= 10) {
    item.durability = 0;
  }
  if (item.enhancement >= 15 && item.durability > 10) {
    item.durability -= 10;
  }

  if (item.enhancement > 16) {
    item.enhancement -= 1;
  }
  return { ...item };
}

function repair(item) {
  item.durability = 100;
  return { ...item };
}

function get(item) {
  if (item.enhancement >= 1) {
    item.name = `[+${item.enhancement}] ${item.name}`;
  }
  return { ...item };
}
