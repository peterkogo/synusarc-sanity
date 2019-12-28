import T from '@sanity/base/initial-value-template-builder'

export default [
  T.template({
    id: 'poem-by-cycle',
    title: 'Poem by Cycle',
    description: 'Poem sorted into a Cycle',
    schemaType: 'poem',
    parameters: [{name: 'cycleId', type: 'string'}],
    value: params => ({
      cycle: {_type: 'reference', _ref: params.cycleId}
    })
  }),
  T.template({
    id: 'art-by-artist',
    title: 'Art by Artist',
    description: 'Art sorted by Artist',
    schemaType: 'art',
    parameters: [{name: 'artistId', type: 'string'}],
    value: params => ({
      artist: {_type: 'reference', _ref: params.artistId}
    })
  }),
  ...T.defaults()  
]