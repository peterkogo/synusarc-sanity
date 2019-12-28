import S from '@sanity/desk-tool/structure-builder'
import { FiBookOpen, FiFileText } from 'react-icons/fi'
import { GoPaintcan } from 'react-icons/go'

export default () =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
      .title('Poems by Cycle')
      .icon(FiBookOpen)
      .child(
        S.documentTypeList('cycle')
          .title('Cycles')
          .child(cycleId =>
            S.documentTypeList('poem')
              .title('Poems')
              .filter('_type == $type && $cycleId == cycle._ref')
              .params({type: 'poem', cycleId})
              .initialValueTemplates([
                S.initialValueTemplateItem('poem-by-cycle', {cycleId})
              ])
          )
      ),
      S.listItem()
      .title('Art by Artist')
      .icon(GoPaintcan)
      .child(
        S.documentTypeList('artist')
          .title('Artists')
          .child(artistId =>
            S.documentTypeList('art')
              .title('Art')
              .filter('_type == $type && $artistId == artist._ref')
              .params({type: 'art', artistId})
              .initialValueTemplates([
                S.initialValueTemplateItem('art-by-artist', {artistId})
              ])
          )
      ),
      S.listItem()
      .title('Essays')
      .icon(FiFileText)
      .child(
        S.documentTypeList('essay')
        .title('Essays')
      ),
      S.divider(),
      ...S.documentTypeListItems()
      ])