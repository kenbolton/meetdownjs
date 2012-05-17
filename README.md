# Meetdown.js

Install dependencies:

    $ npm install

Start the mongo daemon (in a new terminal):

    $ sudo mongod

Start the server (in another terminal; [tmux][] anyone?):

    $ node app

Open the Mongo shell (in YAT; tmuxinator?):

    $ mongo

Add a record:

    > ken = {name: 'ken bolton', created_at: new Date()}
    { "name" : "ken bolton", "created_at" : ISODate("2012-05-16T23:28:23.670Z") }
    > db.users.save(ken)

Then open the a browser to <http://localhost:3000/user/>

[tmux]: http://tmux.sourceforge.net/ "Many terminals, one screen"
