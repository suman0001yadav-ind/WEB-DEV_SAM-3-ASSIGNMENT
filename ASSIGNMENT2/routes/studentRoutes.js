
const express = require("express");
const router = express.Router();

const students = require("../data/students");

// 1. GET: View all students
router.get("/", (req, res) => {
    res.status(200).json({
        message: "All students fetched successfully",
        data: students
    });
});

// 2. GET: View a single student by ID
router.get("/:id", (req, res) => {
    const id = Number(req.params.id);

    if (!Number.isInteger(id) || id <= 0) {
        return res.status(400).json({
            message: "Invalid student ID"
        });
    }

    const student = students.find(s => s.id === id);

    if (!student) {
        return res.status(404).json({
            message: "Student not found"
        });
    }

    res.status(200).json({
        message: "Student fetched successfully",
        data: student
    });
});

// 3. POST: Add a new student
router.post("/", (req, res) => {
    const { name, age, course } = req.body;

    if (
        typeof name !== "string" ||
        !name.trim() ||
        !Number.isInteger(age) ||
        age <= 0 ||
        typeof course !== "string" ||
        !course.trim()
    ) {
        return res.status(400).json({
            message: "Please provide valid name, age and course"
        });
    }

    const newId = students.length > 0
        ? Math.max(...students.map(s => s.id)) + 1
        : 1;

    const newStudent = {
        id: newId,
        name: name.trim(),
        age: age,
        course: course.trim()
    };

    students.push(newStudent);

    res.status(201).json({
        message: "Student created successfully",
        data: newStudent
    });
});

// 4. PUT: Update a student
router.put("/:id", (req, res) => {
    const id = Number(req.params.id);

    if (!Number.isInteger(id) || id <= 0) {
        return res.status(400).json({
            message: "Invalid student ID"
        });
    }

    const student = students.find(s => s.id === id);

    if (!student) {
        return res.status(404).json({
            message: "Student not found"
        });
    }

    const { name, age, course } = req.body;

    if (
        typeof name !== "string" ||
        !name.trim() ||
        !Number.isInteger(age) ||
        age <= 0 ||
        typeof course !== "string" ||
        !course.trim()
    ) {
        return res.status(400).json({
            message: "Please provide valid name, age and course"
        });
    }

    student.name = name.trim();
    student.age = age;
    student.course = course.trim();

    res.status(200).json({
        message: "Student updated successfully",
        data: student
    });
});

// 5. DELETE: Delete a student
router.delete("/:id", (req, res) => {
    const id = Number(req.params.id);

    if (!Number.isInteger(id) || id <= 0) {
        return res.status(400).json({
            message: "Invalid student ID"
        });
    }

    const index = students.findIndex(s => s.id === id);

    if (index === -1) {
        return res.status(404).json({
            message: "Student not found"
        });
    }

    const deletedStudent = students.splice(index, 1);

    res.status(200).json({
        message: "Student deleted successfully",
        data: deletedStudent[0]
    });
});

module.exports = router;