FROM httpd:2.4
WORKDIR /
RUN apt update
RUN apt install git -y
RUN git clone https://github.com/CookieDude24/school-day-countdown.git
RUN cp  /school-day-countdown/* /usr/local/apache2/htdocs/
RUN rm -rf /school-day-countdown
