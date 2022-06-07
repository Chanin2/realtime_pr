import json
import requests
from random import randint
from time import sleep

from channels.generic.websocket import WebsocketConsumer

class WSConsumer(WebsocketConsumer):
    def connect(self):
        self.accept()
        l = [1]
        for x in l:
            l.append(x + 1)
            url = "http://127.0.0.1:5000/api"
            payload = ""
            headers = {}
            response = requests.request("GET", url, headers=headers, data=payload)
            self.send(json.dumps({'message':response.text}))
            sleep(2)
