#include "RequestHandler.h"
#include <iostream>
#include <string>

#include <unistd.h>
#include <netinet/tcp.h>
#include <sys/types.h>
#include <sys/socket.h> /* socket, connect */
#include <netinet/in.h> /* struct sockaddr_in, struct sockaddr */
#include <netdb.h>      /* struct hostent, gethostbyname */
#define PORT 80
using namespace std;

RequestHandler::RequestHandler(char const *url) : totalTime(0), host(url)
{
    cout << "Request handler created!" << endl;
}

RequestHandler::~RequestHandler() {}

int RequestHandler::socketConnect()
{
    cout << endl
         << "Connecting to server ........" << endl;

    struct hostent *hp;
    struct sockaddr_in addr;
    int on = 1;

    if ((hp = gethostbyname(host)) == NULL)
    {
        herror("gethostbyname");
        exit(EXIT_FAILURE);
    }
    bcopy(hp->h_addr, &addr.sin_addr, hp->h_length);
    addr.sin_port = htons(PORT);
    addr.sin_family = AF_INET;
    sock = socket(PF_INET, SOCK_STREAM, IPPROTO_TCP);
    setsockopt(sock, IPPROTO_TCP, TCP_NODELAY, (const char *)&on, sizeof(int));
    int cn = connect(sock, (struct sockaddr *)&addr, sizeof(struct sockaddr_in));

    if (sock < 0)
    {
        perror("setsockopt");
        exit(EXIT_FAILURE);
    }

    if (cn < 0)
    {
        perror("connect");
        exit(EXIT_FAILURE);
    }

    cout << "Connection established!" << endl;
    return sock;
}

int RequestHandler::socketShutdown()
{
    cout << endl
         << "Shutting down server ........" << endl;
    // int sd = shutdown(sock, SHUT_RDWR);
    // if (sd < 0)
    //     perror("shutdown");
    int cls = close(sock);
    if (cls < 0)
        perror("close");
    cout << "Server is shut down. Goodbye!" << endl
         << endl;
    return cls;
}

int RequestHandler::makeRequest()
{
    cout << endl
         << "Sending request to URL ........" << endl;
    req = write(sock, "GET /links HTTP/1.1\r\n", strlen("GET /links HTTP/1.1\r\n")); // write(fd, char[]*, len);
    if (req < 0)
        perror("write");
    cout << "Request was sent!" << endl;
    return req;
}

int RequestHandler::printResponse()
{
    cout << endl
         << "Waiting for response ........" << endl;
    int n = 1;
    while (n > 0)
    {
        n = recv(sock, buffer, sizeof(buffer), 0);
        if (n > 0)
        {
            // null terminate the buffer so that we can print it
            buffer[n] = '\0';

            // output response
            printf("%s", buffer);
        }
        else{
            perror("read");
        }
    }
    bzero(buffer, BUFFER_SIZE);
    cout << "<========== END OF RESPONSE ==========>" << endl;
    return n;
}
