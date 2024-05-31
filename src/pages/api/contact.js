import fs from "fs";
import path from "path";

const dataFilePath = path.join(process.cwd(), "data", "user.json");

export default function handler(req, res) {
  if (req.method === "POST") {
    const { name, password,count } = req.body;

    // Baca data yang ada di data.json
    let data = [];
    if (fs.existsSync(dataFilePath)) {
      const jsonData = fs.readFileSync(dataFilePath);
      data = JSON.parse(jsonData);
    }

    // Tambahkan data baru
    const newContact = {
      name,
      password,
      count
    };
    data.push(newContact);

    // Tulis kembali ke data.json
    fs.writeFileSync(dataFilePath, JSON.stringify(data, null, 2));

    res.status(200).json({
      message: "Contact info saved successfully!",
    });
  } else {
    res.status(405).json({
      message: "Method not allowed",
    });
  }
}
