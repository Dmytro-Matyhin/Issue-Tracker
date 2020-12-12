export default function validWords(data: string) {
  return /^[a-zA-Z]{1,16}$/.test(data);
}