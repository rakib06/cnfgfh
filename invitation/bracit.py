class Invitation:

    def __init__(self, who='brac IT'):
        self.greet = f"Dear Team {who}, \nGood day, I hope you are well.\nI am going to extend my life with Sadia Afroze Shithi!\n"
        self.invite = "I would eagerly look forward to your presence on the occasion."

        self.event_details = {
            "groom": "Rakibul Hasan",
            "bride": "Sadia Shithi",
            "weddig_date": "16, September 2022",
            "weddig_day": "Friday",
            "weddig_time": "7.00 PM",
            "weeding_venue": "Orchid Community Center",
            "weeding_location": "Mirpur, Section 6, Block D,House 24, Dhaka 1216.",
            "google_location": "https://goo.gl/maps/XcrBYymSW7b6mbdg9",
        }

    def get_card(self):
        print(f"{self.greet}{self.invite}\n")
        print("Event Details:\n\t")
        print(''.join([f'\t{key}: {value}\n'for key,
                       value in self.event_details.items()]))

    def __del__(self):
        print("We expect you to bless us during the holiest wedding of love, dedication, and devotion.\n")


Invitation('brac IT').get_card()
