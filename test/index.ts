import { expect } from 'chai'
import { getRootFiles } from '../src'

describe('fs operations', () => {

  it('should get a list of / files', () => {
    const files = getRootFiles()

    expect(files).to.include('home')
  })

})
