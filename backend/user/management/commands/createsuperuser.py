from django.contrib.auth.management.commands.createsuperuser import Command as CreateSuperUserCommand
from django.core.management import CommandError

class Command(CreateSuperUserCommand):
    def add_arguments(self, parser):
        super().add_arguments(parser)
        parser.add_argument(
            '--nickname', dest='nickname', default=None,
            help='Specifies the nickname for the superuser.',
        )

    def handle(self, *args, **options):
        nickname = options.get('nickname')
        if not nickname:
            raise CommandError("You must use --nickname with createsuperuser command.")
        
        options['username'] = nickname
        super().handle(*args, **options)