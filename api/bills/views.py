from django.shortcuts import render
from django.db.models import Q
from django.http import JsonResponse

import datetime

from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.response import Response
from rest_framework.decorators import action
from rest_framework.filters import SearchFilter, OrderingFilter
from rest_framework import viewsets, status
from rest_framework_extensions.mixins import NestedViewSetMixin

from django_filters.rest_framework import DjangoFilterBackend

from django.template.loader import render_to_string
from weasyprint import HTML, CSS
from django.core.files.storage import FileSystemStorage
from django.http import HttpResponse

from django.core.files.storage import default_storage
from django.core.files.base import ContentFile
from django.conf import settings

from core.helpers import (
    send_sms_,
    send_email_
)

from .models import (
    Bill
)

from .serializers import (
    BillSerializer
)

class BillViewSet(NestedViewSetMixin, viewsets.ModelViewSet):
    queryset = Bill.objects.all()
    serializer_class = BillSerializer
    filter_backends = (DjangoFilterBackend, SearchFilter, OrderingFilter)

    def get_permissions(self):
        if self.action == 'list':
            permission_classes = [AllowAny]
        else:
            permission_classes = [AllowAny]

        return [permission() for permission in permission_classes]    

    
    def get_queryset(self):
        queryset = Bill.objects.all()

        """
        if self.request.user.is_anonymous:
            queryset = Company.objects.none()

        else:
            user = self.request.user
            company_employee = CompanyEmployee.objects.filter(employee=user)
            company = company_employee[0].company
            
            if company.company_type == 'AD':
                queryset = Bill.objects.all()
            else:
                queryset = Bill.objects.filter(company=company.id)
        """
        return queryset

    @action(methods=['GET'], detail=True)
    def generate_report_1(self, request, *args, **kwargs):
        # bill = self.get_object()
        # bill.status = 'AP'
        # bill.save()
        html_string = render_to_string('pdf_template.html')
        html = HTML(string=html_string)
        # pdf_file = html.write_pdf()
        pdf_file = html.write_pdf(stylesheets=[CSS('https://prototype-spaces.sgp1.digitaloceanspaces.com/template.css')])
        
        file_path = "tm-ibill/bills/" + datetime.datetime.utcnow().strftime("%s") + '.pdf'
        # "mbpj-ghg/application-report/" <-- naming system
        saved_file = default_storage.save(
            file_path, 
            ContentFile(pdf_file)
        )
        
        full_url_path = settings.MEDIA_ROOT + saved_file
        send_email_()
        send_sms_()
        # print(full_url_path)

        pdf_path = 'https://pipeline-project.sgp1.digitaloceanspaces.com/'+full_url_path
        data_ = {
            'report': [
                {
                    'url': pdf_path
                }
            ]
        }

        return JsonResponse(data_)
    

    @action(methods=['GET'], detail=True)
    def generate_report_2(self, request, *args, **kwargs):
        bill = self.get_object()
        # bill.status = 'AP'
        # bill.save()
        html_string = render_to_string('pdf_template_1.html')
        html = HTML(string=html_string)
        pdf_file = html.write_pdf(stylesheets=[CSS('https://prototype-spaces.sgp1.digitaloceanspaces.com/template.css')])
        
        file_path = "tm-ibill/bills/" + datetime.datetime.utcnow().strftime("%s") + '.pdf'
        # "mbpj-ghg/application-report/" <-- naming system
        saved_file = default_storage.save(
            file_path, 
            ContentFile(pdf_file)
        )
        
        full_url_path = settings.MEDIA_ROOT + saved_file
        send_email_()
        send_sms_()
        # print(full_url_path)

        pdf_path = 'https://pipeline-project.sgp1.digitaloceanspaces.com/'+full_url_path
        data_ = {
            'report': [
                {
                    'url': pdf_path
                }
            ]
        }

        return JsonResponse(data_)
    

    @action(methods=['GET'], detail=False)
    def import_xml(self, request, *args, **kwargs):
        # bill = self.get_object()
        # bill.status = 'AP'
        # bill.save()

        html_string = render_to_string('pdf_template.html')
        html = HTML(string=html_string)
        pdf_file = html.write_pdf(stylesheets=[CSS('https://prototype-spaces.sgp1.digitaloceanspaces.com/template.css')])
        
        file_path = "tm-ibill/bills/" + datetime.datetime.utcnow().strftime("%s") + '.pdf'
        # "mbpj-ghg/application-report/" <-- naming system
        saved_file = default_storage.save(
            file_path, 
            ContentFile(pdf_file)
        )
        
        full_url_path = settings.MEDIA_ROOT + saved_file
        send_email_()
        send_sms_()
        # print(full_url_path)

        pdf_path = 'https://pipeline-project.sgp1.digitaloceanspaces.com/'+full_url_path
        data_ = {
            'report': [
                {
                    'url': pdf_path
                }
            ]
        }
        return JsonResponse(data_)


    @action(methods=['GET'], detail=False)
    def import_json(self, request, *args, **kwargs):
        # bill = self.get_object()
        # bill.status = 'AP'
        # bill.save()

        html_string = render_to_string('pdf_template.html')
        html = HTML(string=html_string)
        # pdf_file = html.write_pdf()
        pdf_file = html.write_pdf(stylesheets=[CSS('https://prototype-spaces.sgp1.digitaloceanspaces.com/template.css')])
        
        file_path = "tm-ibill/bills/" + datetime.datetime.utcnow().strftime("%s") + '.pdf'

        saved_file = default_storage.save(
            file_path, 
            ContentFile(pdf_file)
        )
        
        full_url_path = settings.MEDIA_ROOT + saved_file
        send_email_()
        send_sms_()
        # print(full_url_path)

        pdf_path = 'https://pipeline-project.sgp1.digitaloceanspaces.com/'+full_url_path
        data_ = {
            'report': [
                {
                    'url': pdf_path
                }
            ]
        }
        return JsonResponse(data_)
    
    @action(methods=['GET'], detail=False)
    def stats(self, request, *args, **kwargs):
        data_ = {
            'stats': [
                {
                    'total_bill': 5124,
                    'unpaid_bill': 1231,
                    'total_bill_month': 4121
                }
            ]
        }
        return JsonResponse(data_)
    
    @action(methods=['GET'], detail=False)
    def charts(self, request, *args, **kwargs):
        data_ = {
            'chart_1': [
                {
                    'jan': 2414,
                    'feb': 2555,
                    'mar': 2912,
                    'apr': 3123,
                    'may': 3241,
                    'jun': 3912,
                    'jul': 4122,
                    'aug': 4412,
                    'sep': 4792,
                    'oct': 5912,
                    'nov': 6122,
                    'dec': 6281,
                }
            ],
            'chart_2': [
                {
                    'jan': 2414,
                    'feb': 2555,
                    'mar': 2912,
                    'apr': 3123,
                    'may': 3241,
                    'jun': 3912,
                    'jul': 4122,
                    'aug': 4412,
                    'sep': 4792,
                    'oct': 5912,
                    'nov': 6122,
                    'dec': 6281,
                }
            ],
            'chart_3': [
                {
                    'jan': 2414,
                    'feb': 2555,
                    'mar': 2912,
                    'apr': 3123,
                    'may': 3241,
                    'jun': 3912,
                    'jul': 4122,
                    'aug': 4412,
                    'sep': 4792,
                    'oct': 5912,
                    'nov': 6122,
                    'dec': 6281,
                }
            ],
            'chart_4': [
                {
                    'jan': 2414,
                    'feb': 2555,
                    'mar': 2912,
                    'apr': 3123,
                    'may': 3241,
                    'jun': 3912,
                    'jul': 4122,
                    'aug': 4412,
                    'sep': 4792,
                    'oct': 5912,
                    'nov': 6122,
                    'dec': 6281,
                }
            ],
        }
        return JsonResponse(data_)
    
    @action(methods=['GET'], detail=True)
    def send_email(self, request, *args, **kwargs):
        test = print('send_email')

        return test
    
    @action(methods=['GET'], detail=False)
    def send_sms(self, request, *args, **kwargs):
        test = print('send_sms')
        send_sms_()
        aasfqwrwq = {
            'test': 'asdasd'
        }
        return JsonResponse(aasfqwrwq)
    
