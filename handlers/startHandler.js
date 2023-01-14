import catchAsync from '../utils/catchAsync.js';

export default catchAsync(async ctx => {
  await ctx.reply(
    'Hi! This is Terentiusbot, the Terry personal chatbot because humans are too boring!\n\n Type /help to see available commands! Think about it!'
  );
});
