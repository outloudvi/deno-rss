import { assertEquals } from 'jsr:@std/assert'
import { getSanityIdAt } from './spotify.ts'

Deno.test('Sanity check', () => {
  assertEquals(getSanityIdAt(1740614400000), '319356')
  assertEquals(getSanityIdAt(1794873600000), '724877')
})
