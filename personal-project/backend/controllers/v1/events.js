const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient({});
const jwt = require("jsonwebtoken");

let getAllEvent = async (req, res) => {
  let events = await prisma.event.findMany({
    select: {
      id: true,
      nama: true,
      deskripsi: true,
      createdAt: true,
      doneAt: true,
      startAt: true,
      finishAt: true,
      user: true,
      categories: true,
      eventImages: true,
      user: {
        select: {
          id: true,
          nama: true,
          email: true,
          noTelpon: true,
          avatar: true,
          deskripsi: true,
          roles: true,
        },
      },
    },
    where: {
      isDone: false,
    },
  });
  if (!events) {
    return res
      .status(400)
      .json({ success: false, msg: "error on our backend" });
  }
  return res.status(200).json({ success: true, data: events });
};

let getEventById = async (req, res) => {};

module.exports = {
  getAllEvent,
};
