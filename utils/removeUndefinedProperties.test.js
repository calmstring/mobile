import removeUndefinedProperties from "./removeUndefinedProperties";

test("removeUndefinedProperties", () => {
  const obj = {
    a: 1,
    b: 2,
    c: undefined,
    d: undefined,
    e: undefined,
    f: undefined,
    g: undefined,
    h: undefined,
    i: undefined,
    j: undefined,
    k: undefined,
    l: undefined,
    m: undefined,
    n: undefined,
    o: undefined,
    p: undefined,
    q: undefined,
    r: undefined,
    s: undefined,
    t: undefined,
    u: undefined,
    v: undefined,
    w: undefined,
    x: undefined,
    y: undefined,
    z: undefined,
  };
  const expected = {
    a: 1,
    b: 2,
  };
  expect(removeUndefinedProperties(obj)).toEqual(expected);
});
