import uuid
import os
import datetime

from django.utils.deconstruct import deconstructible

from django.views.decorators.csrf import csrf_exempt
from django.http import HttpResponse
from twilio.rest import Client

from decouple import config

twilio_account_sid = config('TWILIO_ID')
twilio_key = config('TWILIO_KEY')
twilio_sender = '+18454201095'

@deconstructible
class PathAndRename(object):

    def __init__(self, sub_path):
        self.path = sub_path

    def __call__(self, instance, filename):
        ext = filename.split('.')[-1]
        # set filename as random string
        filename_ = datetime.datetime.utcnow().strftime("%s") + uuid.uuid4().hex
        filename = '{}.{}'.format(filename_, ext)
        # return the whole path to the file
        return os.path.join(self.path, filename)


def send_email(to_, subject_, html_content_):
    message = Mail(
        from_email='no-reply@pipeline.com.my',
        to_emails=to_,
        subject=subject_,
        html_content=html_content_
    )

    try:
        sg = SendGridAPIClient('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')
        #sg = SendGridAPIClient(os.environ.get('SENDGRID_API_KEY'))
        response = sg.send(message)
        print(response.status_code)
        print(response.body)
        print(response.headers)
    except Exception as e:
        print(e.message)


# @csrf_exempt
def send_sms_():
    message_to = '+601111367500'
    message_to_send = ('Bro jom balik')
    client = Client(
        twilio_account_sid,
        twilio_key
    )
    message = client.messages.create(
        to = message_to,
        from_ = twilio_sender,
        body = message_to_send
    )
    print(message.sid)
    # return HttpResponse("messages sent!", 200)