from flask import Flask, jsonify, request
from flask_restful import Api, Resource, reqparse

app = Flask(__name__)
api = Api(app)

std_put = reqparse.RequestParser()
std_put.add_argument("Name", type=str)
std_put.add_argument("Rollno", type=str)

students = [
    {"id": 1, "Name": "Saad", "Rollno": "66"},
    {"id": 2, "Name": "Ather", "Rollno": "86"},
    {"id": 3, "Name": "Ali", "Rollno": "76"}
]

nextstd_id = 4


class StudentsResource(Resource):
    def get(self):
        return jsonify(students)

    def post(self):
        new_student = std_put.parse_args()
        if not stud_is_valid(new_student):
            return jsonify({'error': 'Invalid student data'}), 400

        global nextstd_id
        new_student["id"] = nextstd_id
        nextstd_id += 1

        students.append(new_student)
        return jsonify(new_student), 201


def stud_is_valid(student):
    # Add your validation logic here
    return True  # Modify as needed


api.add_resource(StudentsResource, '/students')


if __name__ == '__main__':
    app.run(debug=True)
