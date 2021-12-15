import Delaunator from "delaunator";

export default function fn() {
  return Delaunator.from([
    [0, 0],
    [1, 0],
    [0, 1],
  ]).coords;
}
