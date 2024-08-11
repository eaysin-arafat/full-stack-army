const StudentAttendance = require("../models/StudentAttendance");
const AdminAttendance = require("../models/AdminAttendance");
const error = require("../utils/error");
const { isAfter, addMinutes } = require("date-fns");

const getAttendance = async (req, res, next) => {
  const { id } = req.params;

  try {
    // Step 01: Find admin attendance by id
    // 02: check if it is running or not
    // 03: check already register or not
    // 04: register entry

    const adminAttendance = await AdminAttendance.findById(id);
    if (!adminAttendance) throw error("Invalid attendance Id", 400);

    if (adminAttendance.status === "COMPLETED")
      throw error("Attendance already completed");

    let attendance = await StudentAttendance.findOne({
      adminAttendance: id,
      user: req.user._id,
    });

    if (attendance) throw error("Already Registered", 400);

    attendance = new StudentAttendance({
      user: req.user._id,
      adminAttendance: id,
    });

    await attendance.save();

    return res.status(201).json(attendance);
  } catch (e) {
    next(e);
  }
};

const getAttendanceStatus = async (_req, res, next) => {
  try {
    const running = await AdminAttendance.findOne({ status: "RUNNING" });

    if (!running) throw error("Not Running", 400);

    const started = addMinutes(new Date(running.createdAt), running.timeLimit);

    if (isAfter(new Date(), started)) {
      running.status = "COMPLETED";
      await running.save();
    }

    return res.status(200).json(running);
  } catch (e) {
    next(e);
  }
};

module.exports = {
  getAttendance,
  getAttendanceStatus,
};
