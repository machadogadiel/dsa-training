import { assertEquals } from "@std/assert/equals";
import { LinkedList } from "./singly-linked-list.ts";

Deno.test("should initialize an empty list", () => {
  const linkedList = new LinkedList();

  assertEquals(linkedList.head, null);
  assertEquals(linkedList.tail, null);
  assertEquals(linkedList.size, 0);
});

Deno.test("Inserting into tail, first node: should updated tail and head pointers, and insert correctly", () => {
  const linkedList = new LinkedList();

  linkedList.insertTail(2);

  assertEquals(linkedList?.tail?.value, 2);
  assertEquals(linkedList?.head?.value, 2);
  assertEquals(linkedList.get(0), 2);
});

Deno.test("Inserting into head, first node: should update tail and head pointers, and insert correctly", () => {
  const linkedList = new LinkedList();

  linkedList.insertHead(1);

  assertEquals(linkedList?.head?.value, 1);
  assertEquals(linkedList?.tail?.value, 1);
  assertEquals(linkedList.get(0), 1);
});

Deno.test("get method should return the value of ith node, if not found should return -1", () => {
  const linkedList = new LinkedList();

  linkedList.insertHead(1);

  assertEquals(linkedList.get(0), 1);
  assertEquals(linkedList.get(10), -1);
});

Deno.test(
  "Remove method should remove only from the specified index and return true",
  () => {
    const linkedList = new LinkedList();

    linkedList.insertHead(1);

    assertEquals(linkedList.remove(0), true);
    assertEquals(linkedList.size, 0);

    linkedList.insertTail(1);
    linkedList.insertTail(2);

    assertEquals(linkedList.remove(1), true);
    assertEquals(linkedList.size, 1);
  },
);

Deno.test("Remove method should return false when node at index not found", () => {
  const linkedList = new LinkedList();

  assertEquals(linkedList.remove(2), false);
});

Deno.test("getValues method should return list with all nodes values correctly", () => {
  const linkedList = new LinkedList();
  const linkedList2 = new LinkedList();
  const expectedResult = [];

  for (let i = 0; i < 20; i++) {
    linkedList.insertTail(i);
    linkedList2.insertHead(i);
    expectedResult.push(i);
  }

  assertEquals(linkedList.getValues(), expectedResult);
  assertEquals(linkedList2.getValues(), expectedResult.reverse());
});
