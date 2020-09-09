export function isCollided(obj1, obj2) {
  let distance = Math.sqrt(
    (obj1.x - obj2.x) * (obj1.x - obj2.x) +
      (obj1.y - obj2.y) * (obj1.y - obj2.y)
  );
  return distance < obj1.size + obj2.size;
}
