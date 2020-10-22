#ifndef REQUESTHANDLER_H
#define REQUESTHANDLER_H
#define BUFFER_SIZE 4096

class RequestHandler
{
public:
    RequestHandler(const char *); 
    ~RequestHandler();
    int socketConnect();
    int socketShutdown();
    int makeRequest();
    int printResponse();

private:
    int sock;
    int req;
    int totalTime;
	char buffer[BUFFER_SIZE + 1];
    char const *host;
};
#endif