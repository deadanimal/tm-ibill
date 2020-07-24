import uuid
import os
import datetime

from django.utils.deconstruct import deconstructible

from django.views.decorators.csrf import csrf_exempt
from django.http import HttpResponse
from twilio.rest import Client

from decouple import config

from sendgrid import SendGridAPIClient
from sendgrid.helpers.mail import Mail

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


def send_email_():
    # to_ = 'syafiqbasri@pipeline.com.my'
    # subject_ = '[TM - iBill] Bill Generated'
    # html_content_ = 'Your bill has been generated. Please login to portal to view or download.'
    message = Mail(
        from_email='connect@pipeline.com.my',
        to_emails='syafiqbasri@pipeline.com.my',
        subject='[TM - iBill] Bill Generated',
        html_content='Your bill has been generated. Please login to portal to view or download.')
    try:
        sg = SendGridAPIClient('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')
        #sg = SendGridAPIClient(os.environ.get('SENDGRID_API_KEY'))
        print('Message: ', message)
        response = sg.send(message)
        print('Status code: ', response.status_code)
        print('Response body: ', response.body)
        print('Response header: ', response.headers)
    except Exception as e:
        print('Error kot: ', e.message)


# @csrf_exempt
def send_sms_():
    # '+60145234392'
    message_to = '+60176866900'
    message_to_send = ('[TM - iBill] Your bill has been generated. Please login to portal to view ')
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