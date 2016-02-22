from __future__ import division 

dictionary = {}
i =  0
NbrOfStudent =int(raw_input())

while i < NbrOfStudent:
    i+=1
    StudentInfo = raw_input() 
    row = StudentInfo.split(' ') 
    average = (float(row[1]) + float(row[2]) + float(row[3]))/3
    dictionary[row[0]] = average

request = raw_input()
print "{:.2f}".format(dictionary[request])
