FROM golang

RUN apt update && \
    apt install -y build-essential && \
    apt install -y git && \
    git clone https://github.com/eradman/entr
RUN cd ./entr && \
    ./configure && \
    make test && \
    make install

CMD ["/bin/bash", "-c", "./launch.sh"]

# sudo docker build -t idle -f dockerfile .
# sudo docker run -it -d -p 8080:8080 -v $HOME/code/idle_game:/go/game -w /go/game --name idle_game --restart unless-stopped idle


