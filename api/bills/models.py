# -*- coding: utf-8 -*-
from __future__ import unicode_literals
import uuid

from django.contrib.gis.db import models
from django.core.validators import MaxValueValidator, MinValueValidator

from simple_history.models import HistoricalRecords

from core.helpers import PathAndRename

from users.models import (
    CustomUser
)

class Bill(models.Model):

    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    name = models.CharField(max_length=100, default='NA')
    billed_to = models.ForeignKey(
        CustomUser,
        on_delete=models.CASCADE,
        limit_choices_to={
            'user_type': 'CT'
        }
    )

    bill_invoice = models.FileField(null=True, upload_to=PathAndRename('bills'))

    bill_generated = models.BooleanField(default=True)
    bill_invoiced = models.BooleanField(default=False)
    bill_due_date = models.BooleanField(default=False)
    bill_paid = models.BooleanField(default=False)

    date_generated = models.DateTimeField(null=True, blank=True)
    date_invoice_sent = models.DateTimeField(null=True, blank=True)
    date_due_date = models.DateTimeField(null=True, blank=True)
    date_paid = models.DateTimeField(null=True, blank=True)

    created_at = models.DateTimeField(auto_now_add=True)
    modified_at = models.DateTimeField(auto_now=True)

    class meta:
        ordering = ['name']
    
    def __str__(self):
        return self.name

