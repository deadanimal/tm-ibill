import uuid
import os
import datetime

from django.utils.deconstruct import deconstructible

from django.views.decorators.csrf import csrf_exempt
from django.http import HttpResponse
from twilio.rest import Client

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
    account_sid = 'AC0e734015c6d217cbde2f7cb3b749a670'
    key = '9237e9e8db24173e7050bdc093bea2cc'
    message_from = '+18454201095'
    message_to = '+60145234392'
    message_to_send = ('Hello yus, malam ni nak makan apa?')
    client = Client(
        account_sid,
        key
    )
    message = client.messages.create(
        to = message_to,
        from_ = message_from,
        body = message_to_send
    )
    print(message.sid)
    # return HttpResponse("messages sent!", 200)