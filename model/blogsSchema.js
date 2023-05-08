const mongoose = require("mongoose");
const tabsSchema = mongoose.Schema({
  value: {
    type: "string",
  },
});

const blogsSchema = mongoose.Schema(
  {
    title: { type: String, require: true },
    category: { type: String, require: true },
    tags: {
      type: [
        {
          value: {
            type: "string",
          },
        },
      ],
      require: true,
    },
    content: { type: String, require: true },
    author: { type: String, require: true,default:"Admin" },
    Visitor: { type: Number, require: true },
    status: { type: Boolean, default: false },
  },
  { timestamps: true }
);

const Blogmodel = mongoose.model("blog", blogsSchema);

module.exports = Blogmodel;
