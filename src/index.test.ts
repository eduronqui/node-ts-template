import { beforeEach, describe, it } from 'node:test'

import assert from 'node:assert'
import { getTrue } from './index'

describe('some-test', () => {
  let foo: boolean

  beforeEach(() => {
    foo = getTrue()
  })

  it('should work', () => {
    assert(foo)
  })
})
