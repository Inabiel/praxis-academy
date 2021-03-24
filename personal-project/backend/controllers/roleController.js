const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const editRole = async (req, res) => {
  try {
    let { email, role } = req.body;
    console.log(role);

    const gantiRole = await prisma.user.update({
      where: {
        email: email,
      },
      data: {
        rolesId: role,
      },
    });
    if (gantiRole) {
      return res.status(200).json({ success: true, msg: "ok!" });
    }
  } catch (e) {
    console.log(e);
  }
};

const editDeskripi = async (req, res) => {
  try {
    let { email, deskripsi } = req.body;
    const gantiDeskripsi = await prisma.user.update({
      where: {
        email: email,
      },
      data: {
        deskripsi: deskripsi,
      },
    });
    if (gantiDeskripsi) {
      return res.status(200).json({ success: true, msg: "ok!" });
    }
  } catch (e) {
    console.log(e);
  }
};

module.exports = {
  editRole,
  editDeskripi,
};
