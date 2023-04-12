export default interface Ientryinfo {
  'im:name': {
    label: string
  }
  'im:image': [
    {
      label: string
      attributes: {
        height: string
      }
    },
    {
      label: string
      attributes: {
        height: string
      }
    },
    {
      label: string
      attributes: {
        height: string
      }
    }
  ]
  'im:itemCount': {
    label: '14'
  }
  'im:price': {
    label: string
    attributes: {
      amount: string
      currency: string
    }
  }
  'im:contentType': {
    'im:contentType': {
      attributes: {
        term: string
        label: string
      }
    }
    attributes: {
      term: string
      label: string
    }
  }
  rights: {
    label: string
  }
  title: {
    label: string
  }
  link: {
    attributes: {
      rel: string
      type: string
      href: string
    }
  }
  id: {
    label: string
    attributes: {
      'im:id': string
    }
  }
  'im:artist': {
    label: string
    attributes: {
      href: string
    }
  }
  category: {
    attributes: {
      'im:id': string
      term: string
      scheme: string
      label: string
    }
  }
  'im:releaseDate': {
    label: Date
    attributes: {
      label: string
    }
  }
}

export default interface ITriplInfo {
  author: {
    name: {
      label: string
    }
    uri: {
      label: string
    }
  }

  // entry: Ientryinfo[]
}
