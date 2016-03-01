L = []
nbrOfCommands = int(raw_input())
for x in xrange(nbrOfCommands):
    currentCommande = raw_input().split(' ')
    lenght = len(currentCommande)
    CurrentAction = str(currentCommande[0])
    if (lenght == 3):
        FirstArgument = int(currentCommande[1])
        SecondArgument = int(currentCommande[2])
        getattr(L,CurrentAction)(FirstArgument,SecondArgument)
    if (lenght == 2):
        FirstArgument = int(currentCommande[1])
        getattr(L,CurrentAction)(FirstArgument)
    if (lenght == 1 and CurrentAction != 'print'):
        getattr(L,CurrentAction)()
    if (currentCommande[0] == "print"):
        print L
