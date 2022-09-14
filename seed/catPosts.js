const db = require('../db')
const { Category, Post } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  const category1 = await new Category({
    description: 'Naruto',
    url: 'https://giffiles.alphacoders.com/215/215597.gif'
  })
  category1.save()

  const category2 = await new Category({
    description: 'Sword Art Online',
    url: 'https://c.tenor.com/JJXP77656U4AAAAM/sword-art-online-unamused.gif'
  })
  category2.save()

  const category3 = await new Category({
    description: 'Attack On Titan',
    url: 'https://www.icegif.com/wp-content/uploads/icegif-3485.gif'
  })
  category3.save()

  const category4 = await new Category({
    description: 'Another',
    url: 'https://image.myanimelist.net/ui/_3fYL8i6Q-n-155t3dn_4gfofHpguZQE6dH7oK7e2ly-4958X2hUmUkrkf8Ogc5T'
  })
  category4.save()

  const category5 = await new Category({
    description: 'Parasyte',
    url: 'https://i.pinimg.com/originals/23/71/a6/2371a688c939d10aff2e1baa416f7adc.gif'
  })
  category5.save()

  const category6 = await new Category({
    description: 'Tokyo Ghoul',
    url: 'https://c.tenor.com/zG-5Iy77F_oAAAAC/tokyo-ghoul.gif'
  })
  category6.save()

  const posts = [
    {
      nickname: 'Sasuke',
      description: 'Cringe Lord',
      url: 'https://i.pinimg.com/originals/6f/cd/10/6fcd10e9393b188f2797904e8df36f27.jpg',
      category: category1._id
    },
    {
      nickname: 'Kakashi',
      description: 'OP',
      url: 'https://wallpapers.com/images/hd/comical-kakashi-pfp-07qrdp65cx7bzyqw.jpg',
      category: category1._id
    },
    {
      nickname: 'Sakura',
      description: 'Useless',
      url: 'https://i.pinimg.com/736x/44/3e/81/443e817ba851abe77c3b7e2c3cc690ba.jpg',
      category: category1._id
    },
    {
      nickname: 'Kirito',
      description: 'not balanced',
      url: 'https://i.pinimg.com/236x/5d/2c/4c/5d2c4c13ef437fee15793ed43354e55d.jpg',
      category: category2._id
    },

    {
      nickname: 'Asuna',
      description: 'GOAT',
      url: 'https://i.pinimg.com/736x/6f/02/23/6f02233140d8b7f7ef78b7b00220b681.jpg',
      category: category2._id
    },

    {
      nickname: 'Eren',
      description: 'Not really the MC',
      url: 'https://i.pinimg.com/236x/fd/31/96/fd3196b35eb0cc832b96d1623b893d20.jpg',
      category: category2._id
    },

    {
      nickname: 'Mikasa',
      description: 'Actual MC',
      url: 'https://i.pinimg.com/originals/9f/87/7c/9f877c2062221ea223eb7c69d7d1bda5.jpg',
      category: category3._id
    },

    {
      nickname: 'Armin',
      description: '300iq',
      url: 'https://i.pinimg.com/originals/15/ff/83/15ff839a817e3f5e430ec4572112fd2d.jpg',
      category: category3._id
    },

    {
      nickname: 'Reiner',
      description: 'Trator',
      url: 'https://i.pinimg.com/originals/cd/4f/e9/cd4fe988c40e8452a584652bc91a61db.jpg',
      category: category3._id
    },

    {
      nickname: 'Attack Titan',
      description: 'The best titan',
      url: 'https://i.pinimg.com/originals/65/14/01/651401eb765f11f484f0b17c18e71181.jpg',
      category: category4._id
    },

    {
      nickname: 'Colossal Titan',
      description: 'second biggest titan',
      url: 'https://i.pinimg.com/originals/fa/07/2a/fa072aa92c5c17af1ba46b8802bd9577.png',
      category: category4._id
    },

    {
      nickname: 'Mei',
      description: 'The girl',
      url: 'https://i.pinimg.com/564x/a5/cb/13/a5cb13e5e4ed7e70d753e2cede079eae.jpg',
      category: category4._id
    },

    {
      nickname: 'Koichi',
      description: 'Tries to save Mei',
      url: 'https://i.pinimg.com/originals/fe/ec/44/feec44f6f18250e5f8cc42d59e8e6c2e.png',
      category: category5._id
    },

    {
      nickname: 'Shinichi',
      description: 'school to cool',
      url: 'https://i.pinimg.com/originals/09/e9/53/09e9538110c81e8a2024203f9461620c.jpg',
      category: category5._id
    },

    {
      nickname: 'Migi',
      description: 'right hand man',
      url: 'https://i.pinimg.com/736x/6f/1b/f9/6f1bf988308bab438590e7ea4dfd0192.jpg',
      category: category5._id
    },

    {
      nickname: 'Satomi',
      description: 'Sakura-like',
      url: 'https://i.pinimg.com/236x/d4/cb/56/d4cb56257416b48b4d87f4578c7af19c.jpg',
      category: category6._id
    },

    {
      nickname: 'Ken',
      description: 'white hair',
      url: 'https://wallpapers-clan.com/wp-content/uploads/2022/07/ken-kaneki-1.jpg',
      category: category6._id
    },

    {
      nickname: 'touka',
      description: 'loves ken',
      url: 'https://i.pinimg.com/originals/10/5a/8b/105a8ba0f6d832131beaa6959a7dd71d.jpg',
      category: category6._id
    }
  ]

  await Post.insertMany(posts)
  console.log('Posts done!')
}

const run = async () => {
  await main()
  db.close()
}

run()
