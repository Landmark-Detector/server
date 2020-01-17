const qs = require('querystring')
const request = require('request')

class TwitterController {
  static requestToken(req, res, next) {
    const url = 'https://api.twitter.com/oauth/request_token'
    const oauth = {
      callback: 'http://localhost:3000/parse-token',
      consumer_key: process.env.TWITTER_CONSUMER_KEY,
      consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
      token: process.env.TWITTER_TOKEN,
      token_secret: process.env.TWITTER_TOKEN_SECRET,
    }

    request.post({ url, oauth }, function(e, r, body) {
      if (e) res.status(500).json(e)
      console.log(body)

      const res_data = qs.parse(body)

      res.redirect(
        `https://api.twitter.com/oauth/authorize?oauth_token=${res_data.oauth_token}`,
      )
    })
  }

  static parseToken(req, res, next) {
    const { oauth_token, oauth_verifier } = req.query

    request.post(
      {
        url: 'https://api.twitter.com/oauth/access_token',
        qs: {
          oauth_consumer_key: 'zdfx5AIFG8jeEgsyH26HHy56z',
          oauth_token,
          oauth_verifier,
        },
      },
      function(e, r, body) {
        let res1 = qs.parse(body)
        let oauth1 = res1.oauth_token
        let oauth1_secret = res1.oauth_token_secret
        let user_id = res1.user_id
        let screen_name = res1.screen_name
        res.redirect(
          `http://localhost:3000/get-user?oauth_token=${oauth1}&oauth_token_secret=${oauth1_secret}&user_id=${user_id}&screen_name=${screen_name}`,
        )
      },
    )
  }

  static getUser(req, res, next) {
    request.get(
      {
        url: 'https://api.twitter.com/1.1/account/verify_credentials.json',
        oauth: {
          consumer_key: 'zdfx5AIFG8jeEgsyH26HHy56z',
          consumer_secret: 't2qRQarfS3gmYH7FFiEzKFHC3gVqIjRpxrpC1Ia0ezZbDSuUN7',
          token: req.query.oauth_token,
          token_secret: req.query.oauth_token_secret,
        },
        qs: {
          include_email: true,
        },
        json: true,
      },
      function(e, r, body) {
        if (e) res.status(500).json(e)

        console.log(body)

        res.redirect('http://localhost:3000')
        // res.redirect(
        // `http://localhost:3000/post-twitter?oauth_token=${req.query.oauth_token}&oauth_token_secret=${req.query.oauth_token_secret}`,
        // )
      },
    )
  }
}

module.exports = TwitterController