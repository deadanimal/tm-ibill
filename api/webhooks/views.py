from django.shortcuts import render
from django.db.models import Q

from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.response import Response
from rest_framework.decorators import action
from rest_framework.filters import SearchFilter, OrderingFilter
from rest_framework import viewsets, status
from rest_framework_extensions.mixins import NestedViewSetMixin

from django_filters.rest_framework import DjangoFilterBackend

# from .models import (
#     Webhook
# )

# from .serializers import (
#     WebhookSerializer
# )

class WebhookViewSet(NestedViewSetMixin, viewsets.ModelViewSet):
    # queryset = 'Webhook'
    # serializer_class = WebhookSerializer
    # filter_backends = (DjangoFilterBackend, SearchFilter, OrderingFilter)

    # def get_permissions(self):
    #     if self.action == 'list':
    #         permission_classes = [AllowAny]
    #     else:
    #         permission_classes = [AllowAny]

    #     return [permission() for permission in permission_classes]    

    
    # def get_queryset(self):
    #     queryset = Webhook.objects.all()

    #     """
    #     if self.request.user.is_anonymous:
    #         queryset = Company.objects.none()

    #     else:
    #         user = self.request.user
    #         company_employee = CompanyEmployee.objects.filter(employee=user)
    #         company = company_employee[0].company
            
    #         if company.company_type == 'AD':
    #             queryset = Webhook.objects.all()
    #         else:
    #             queryset = Webhook.objects.filter(company=company.id)
    #     """
    # return queryset    

    @action(methods=['GET'], detail=False)
    def testt(self, request, *args, **kwargs):
        # test = print('send_sms')
        # send_sms_()
        aasfqwrwq = {
            'test': 'asdasd'
        }
        return JsonResponse(aasfqwrwq)
 
