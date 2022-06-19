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


# sudo docker run -it -d -v $HOME/code/idle_game:/go/game -w /go/game --restart unless-stopped idle_game


