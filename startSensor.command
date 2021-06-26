for i in {1..10}
do
    curl -X POST -H "Content-Type: application/text" localhost:64163  # change the ip and port, with the host/port address given by Nulcio 
    echo "\n"
    sleep 6
done