#include <unistd.h>
#include <getopt.h>
#include <iostream>
#include <string>
#include "RequestHandler.h"
using namespace std;

int main(int argc, char *argv[])
{

    cout << "<==== Toya Okeke's Clouflare 2021 New Grad Systems Assignment ====>" << endl;
    // STEP 1: Check if any arguments were passed
    if (argc < 2)
    {
        cout << "This CLI tool will make an HTTP request to your specified URL and print the response directly to the console" << endl;
        cout << "use '--help' to see the list of commands" << endl;
        exit(EXIT_SUCCESS);
    }
    // STEP 2: parse command line arguments
    int opt;
    int num_requests = 1;
    bool profileOpt = false;
    char *url;
    int digit_optind = 0;

    while (1)
    {
        int this_option_optind = optind ? optind : 1;
        int option_index = 0;
        static struct option long_options[] = {
            {"help", no_argument, 0, 'h'},
            {"profile", required_argument, 0, 'p'},
            {"url", required_argument, 0, 'u'},
            {0, 0, 0, 0}};

        opt = getopt_long(argc, argv, "",
                          long_options, &option_index);
        if (opt == -1)
            break;

        switch (opt)
        {
        case 'h':
            cout << "\tHOW TO USE THIS PROGRAM" << endl;
            cout << "--url <url-link>\t\tThe tool will make an HTTP request to the URL and print the response directly to the console\n"
                 << endl;
            cout << "--profile <positive-integer>\tThe tool will make x number of requests and print the following:" << endl;
            cout << "\t\t\t\t- The number of requests" << endl;
            cout << "\t\t\t\t- The fastest time" << endl;
            cout << "\t\t\t\t- The slowest time" << endl;
            cout << "\t\t\t\t- The percentage of requests that succeeded" << endl;
            cout << "\t\t\t\t- Any error codes that weren't a success" << endl;
            cout << "\t\t\t\t- The size in bytes of the smallest response" << endl;
            cout << "\t\t\t\t- The size in bytes of the largest response" << endl;

            exit(EXIT_SUCCESS);

        case 'u':
            url = optarg;
            cout << "URL Link: " << url << endl;
            break;

        case 'p':
            num_requests = stoi(optarg);
            profileOpt = true;
            cout << "No. Requests: " << num_requests << endl;
            break;

        case '?':
            if (optopt == 'u' || optopt == 'p')
                ;
            else if (isprint(optopt))
                fprintf(stderr, "Unknown option `-%c'.\n", optopt);
            else
                fprintf(stderr,
                        "Unknown option character `\\x%x'.\n",
                        optopt);
            cout << "use --help to see the list of commands" << endl;
            exit(EXIT_FAILURE);

        default:
            abort();
        }
    }

    // STEP 3: Check if any additional arguments were passed
    if (optind < argc)
    {
        cout << "ERROR: Unexpected argument(s): ";
        while (optind < argc)
            printf("'%s' ", argv[optind++]);
        cout << endl
             << "use --help to see the list of commands" << endl;
        exit(EXIT_FAILURE);
    }

    // STEP 4: Handle API requests if --url command was used
    cout << endl
         << "Creating request handler ........" << endl;
    RequestHandler req(url);
    cout << req.socketConnect() << endl;
    cout << req.makeRequest() << endl;
    cout << req.printResponse() << endl;
    cout << req.socketShutdown() << endl;

    return 0;
}
