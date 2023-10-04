from django.urls import path
from . import views
from rest_framework.urlpatterns import format_suffix_patterns
from graphene_django.views import GraphQLView
from .schema import schema


urlpatterns = [
    path('advance-stats/', views.advance_stats_list),
    path('graphql/', GraphQLView.as_view(graphiql=True, schema=schema))
]


urlpatterns = format_suffix_patterns(urlpatterns)