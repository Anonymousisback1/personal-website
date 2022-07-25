# Importing flask module in the project is mandatory
# An object of Flask class is our WSGI application.
from flask import Flask, render_template

# Flask constructor takes the name of
# current module (__name__) as argument.
app = Flask(__name__)


# The route() function of the Flask class is a decorator,
# which tells the application which URL should call
# the associated function.
@app.route('/')
# ‘/’ URL is bound with hello_world() function.
def index():
    return render_template("index.html")


@app.route('/single_post')
# ‘/’ URL is bound with hello_world() function.
def single_post():
    return render_template("single-post.html")


@app.route('/projects')
# ‘/’ URL is bound with hello_world() function.
def myprojects():
    return render_template("mypage.html")



# main driver function
if __name__ == '__main__':
    # run() method of Flask class runs the application
    # on the local development server.
    app.run(debug=True)
