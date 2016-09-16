Slack API
=======

* Acessar unasp.slack.com

* Habiliar API

--- https://unasp.slack.com/apps/A0F7XDUAZ-incoming-webhooks


curl -X POST --data-urlencode 'payload={"channel": "#api", "username": "webhookbot", "text": "This is posted to #api and comes from a bot named webhookbot.", "icon_emoji": ":ghost:"}' https://hooks.slack.com/services/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


POST https://hooks.slack.com/services/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

    {  
    "channel":"#api",
    "username":"lalalala",
    "text":"Ola Mundo",
    "icon_emoji":":ghost:"
    }


API CALL BACK

https://api.slack.com/methods/

https://slack.com/api/users.info?token=xoxp-80209255940-80212247174-80342716053-152ff42355&user=U2C687954&pretty=1



