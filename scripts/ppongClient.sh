#! /bin/bash
#
# $1 - loop this many times
# $2 - url to hit
# $3 - -p run tests in parallel 

if [ "$3" == "-p" ]; then
	printf "\nrunning tests in parallel..."
	cat /dev/null > ./parallel-output.tmp
else
	printf "\nrunning tests in sequence..."
fi

for i in `seq 1 $1`; 
do
	if [ "$3" == "-p" ]; then
		#curl -s $2 >> ./parallel-output.tmp &
		curl -s $2 &
	else
		printf "\nseq [%s] date [%s]" "$i" `date +\"%Y-%m-%d_%H-%M-%S\"`
		curl -s $2
		printf "\nZZZzzz... 3 seconds..."
		sleep 3
	fi

done
wait

if [ "$3" == "-p" ]; then
	cat ./parallel-output.tmp
fi

printf "\nDone.";

