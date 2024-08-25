FROM nginx
WORKDIR /
RUN apt update
RUN apt install git -y
RUN git clone https://github.com/CookieDude24/school-day-countdown.git
RUN cp -r /school-day-countdown/source/* /usr/share/nginx/html
RUN rm -rf /school-day-countdown
