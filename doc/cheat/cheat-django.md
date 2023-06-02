# Cheat Django

## ManyToManyField

```
class Affection(models.Model):
    name  = models.CharField(max_length=50)
    rich = models.Boolean()
    subject = models.ManyToManyField(Subject, related_name="lovers", blank=True)


affection = Affection(name="Tim")
affection.subject.add(Subject.objects.get(name="Tam"))
affection.subject.add(Subject.objects.get(name="Tom"))
affection.subject.remove(Subject.objects.get(name="Tum"))

subject = Subject(name="Tam")
subject.lovers.all()

objects_of_my_affection = Affection.subject.through.objects.filter(subject=Subject.objects.filter(name__startswith="T"))
subject_sugardaddies = Affection.subject.through.objects.filter(affection=Affection.objects.filter(rich=True))
```

## Q

```
from django.db.models import Q
from functools import reduce
import operator

def free_text_query(free_text):
    return (
        Q(
            reduce(
                operator.or_,
                (
                    Q(surname__icontains=x)
                    for x in free_text.split(" ")
                ),
            )
            | reduce(
                operator.or_,
                (
                    Q(forename__icontains=x)
                    for x in free_text.split(" ")
                ),
            )
        )
    )

smiths_or_joes = Contact.objects.filter(free_text_query("joe smith"))
```

## Management Commands

```
from django.core.management import call_command
from django.core.management.base import BaseCommand, CommandError

class Command(BaseCommand):
    def add_arguments(self, parser):
        parser.add_argument("one_or_more",  nargs="+", type=str, help="django-admin mc OneOrMore TwoIsOkay ThreeAsWell etc")
        parser.add_argument("zero_or_more",  nargs="*", type=str, help="django-admin mc")
        parser.add_argument("--named_int", "-i", type=int, help="django-admin mc --named_int 3" )
        parser.add_argument("--named_str", "-s", type=str, help="django-admin mc --named_str hello")
        parser.add_argument("--named_switch", dest="switch", action="store_true", help="django-admin mc --named_switch")
        parser.set_defaults(switch=False)

    def handle(self, *args, **options):
        one_or_more = options["one_or_more"]
        named_int = options["named_int"]
        named_str = options["named_str"]
        switch = options["switch"]
        if "error" in one_or_more:
            CommandError("Error found in one or more inputs!")
        if switch:
            for i in one_or_more:
                print(one_or_more, named_str * named_int)
        call_command("another_command")

        a_list = [1,2,3]
        call_command(
            "name",
            *a_list,
            named_int=731,
            named_str="12",
            named_switch=True,
        )

    def print_table(self, table):
        """
        :param table: A list of tuples. e.g.
        ::
            self.print_table(
                [ ("First", "Last", "Email")] +
                [
                    (str(user.firstname), str(user.lastname), str(user.email))
                    for user in contacts
                ]
            )"""
        col_width = [max(len(str(txt)) for txt in col) for col in zip(*table)]
        for line in table:
            row = (
                " | "
                + " | ".join(
                    "{:{}}".format(txt, col_width[i])
                    for i, txt in enumerate(line)
                )
                + " |"
            )
            self.stdout.write(row)
            cnt += 1
            if cnt == 1:
                row = (
                    " |-"
                    + "-|-".join(
                        "-" * col_width[i]
                        for i, txt in enumerate(line)
                    )
                    + "-|"
                )
                self.stdout.write(row)
```
