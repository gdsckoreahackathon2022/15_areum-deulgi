# Generated by Django 3.1.3 on 2022-02-04 05:21

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('areum', '0002_auto_20220204_0212'),
    ]

    operations = [
        migrations.AddField(
            model_name='edu',
            name='category',
            field=models.IntegerField(default=4),
        ),
        migrations.AlterField(
            model_name='edu',
            name='date',
            field=models.DateTimeField(default=datetime.datetime(2022, 2, 4, 14, 21, 7, 437618)),
        ),
    ]
