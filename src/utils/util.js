export function formatId(id) {
  return id.toString().padStart(4, '0'); // e.g., 1 -> "0001"
}
