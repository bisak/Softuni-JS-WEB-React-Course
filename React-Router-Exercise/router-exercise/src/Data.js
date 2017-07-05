const storage = [
  {
    _id: 1,
    title: 'title 1',
    author: 'Pesho',
    comments: ['nqkakuv comment'],
    createdAt: 1,
    price: 432
  },
  {
    _id: 2,
    title: 'title 1232',
    author: 'Pesho',
    comments: ['gosho e tup avtor', 'pesho e qk avtor'],
    createdAt: 4,
    price: 666
  },
  {
    _id: 3,
    title: 'title 1233',
    author: 'Na pesho bratmu',
    comments: ['ebahti knigata brat', 'brat knigata si e ebahti'],
    createdAt: 2,
    price: 234
  },
  {
    _id: 4,
    title: 'title 134',
    author: 'Test author 4',
    comments: ['OK', 'LEL tupa kniga', 'QKA KNIGA'],
    createdAt: 1.2,
    price: 77
  },
  {
    _id: 5,
    title: 'title 73',
    author: 'Na pesho bratmu',
    comments: ['comment123123', 'comment1231asd23'],
    createdAt: 2,
    price: 444
  },
  {
    _id: 6,
    title: 'title 63',
    author: 'Na pesho bratmu',
    comments: ['commentaadsdasdsa23123', 'commenasddasadst123123'],
    createdAt: 2,
    price: 66
  },
  {
    _id: 7,
    title: 'title 43',
    author: 'javascript is the answer',
    comments: ['commentasd12312356789123123', 'comme9999999nt123123'],
    createdAt: 5,
    price: 123
  },
  {
    _id: 8,
    title: 'title 42243',
    author: 'javascript is the answer',
    comments: ['comment123123', 'comment123123', 'ebahti knigata brat', 'brat knigata si e ebahti'],
    createdAt: 10,
    price: 5
  },
  {
    _id: 9,
    title: 'title 3243432',
    author: 'totally not defined author',
    comments: ['asdasdadsdsasda knigata brat', 'brat dsadsadsadasadssadsadknigata si e ebahti'],
    createdAt: 10,
    price: 4
  },
  {
    _id: 10,
    title: 'title 3243234',
    author: 'Pesho na bratmu',
    comments: ['ebahti knigasaddsadsaase421342432ata brat', 'brat kn342243432432432igata si e ebahti'],
    createdAt: 15,
    price: 312
  },
  {
    _id: 11,
    title: 'title 3243432',
    author: 'Bratmu na pesho',
    comments: ['ebahti knigata24423423423 brat', 'brat 234234342knigata si e ebahti'],
    createdAt: 16,
    price: 123
  },
  {
    _id: 12,
    title: 'title 323432',
    author: 'Na bratmu pesho',
    comments: ['ebaht234234423432423i knigata brat', 'brat k23443243242343423nigata si e ebahti'],
    createdAt: 7,
    price: 111
  },
  {
    _id: 13,
    title: 'title 3234',
    author: 'Nqkoi avtor',
    comments: ['ebah234234234234232342ti knigata brat', 'brat knigata si234234234234 e ebahti'],
    createdAt: 9,
    price: 123
  },
  {
    _id: 14,
    title: 'title 233',
    author: 'aNai golemiq mangal',
    comments: ['ebahti asdasSADDASDSADSADASknigata brat', 'bratFDSFDSFDSFDSFDSFDS knigata si e ebahti'],
    createdAt: 123,
    price: 33
  },
  {
    _id: 15,
    title: 'title 35',
    author: 'Na bratmu pesho',
    comments: ['ebaSDFFDSFSDFDSFDShti knigata brat', 'brat knigatSFDFDSFDSFDSFDSa si e ebahti'],
    createdAt: 123333,
    price: 12333
  }
]

function getOnePageBooks (page) {
  const PAGE_SIZE = 10
  let booksToReturn = []
  const start = ((page - 1) * PAGE_SIZE)
  const end = ((page - 1) * PAGE_SIZE) + PAGE_SIZE
  booksToReturn = storage.slice(start, end)
  return new Promise((resolve, reject) => {
    resolve(booksToReturn)
  })
}

function getOnePageAuthors (page, sort) {
  const PAGE_SIZE = 10
  let authorsToReturn = []
  const start = ((page - 1) * PAGE_SIZE)
  const end = ((page - 1) * PAGE_SIZE) + PAGE_SIZE
  authorsToReturn = storage.map((item) => item.author).sort((a, b) => {
    if (sort === 'asc') {
      return a.localeCompare(b)
    } else {
      return b.localeCompare(a)
    }
  }).slice(start, end)
  return new Promise((resolve, reject) => {
    resolve(authorsToReturn)
  })
}

function getOneBook () {
  return new Promise((resolve, reject) => {
    resolve(storage[1])
  })
}

function getAuthorById (id) {
  return new Promise((resolve, reject) => {
    resolve(storage.filter(element => element.author === id))
  })
}

function getBookById (id) {
  return new Promise((resolve, reject) => {
    resolve(storage.find(element => element._id === Number(id)))
  })
}

function getBooksForHomePage () {
  let booksToReturn = []

  booksToReturn = storage.sort((a, b) => b.createdAt - a.createdAt).slice(0, 6)
  return new Promise((resolve, reject) => {
    resolve(booksToReturn)
  })
}

export {getOnePageBooks, getOneBook, getBooksForHomePage, getBookById, getAuthorById, getOnePageAuthors}
