import mongoose, { Document, Schema } from 'mongoose';

interface ITodo extends Document {
  text: string;
  complete: boolean;
  timestamp: string;
}

const TodoSchema = new Schema<ITodo>({
  text: {
    type: String,
    required: true
  },
  complete: {
    type: Boolean,
    default: false
  },
  timestamp: {
    type: String,
    default: Date.now.toString()
  }
});

const Todo = mongoose.model<ITodo>('Todo', TodoSchema);

module.exports = Todo;
