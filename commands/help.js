const Discord = require('discord.js');

module.exports = {
	name: 'help',
	description: 'Command list',
	execute(message, args) {
		const embed = new Discord.MessageEmbed()
			.setColor('#ff0000')
			.setTitle('Commands')
			.setDescription('Following Commands were used:')
			.setFooter('!help command for bot-info')
			.addFields(
				{ name: '1) !CourseCode + "weight"', value: 'finds weight distribution of the course ' },
				{ name: '2) !CourseCode + "syllabus" + "midterm/final""', value: 'Syllabus for the midterm/final' },
				{ name: '3) !CourseCode + "calc" + lab mark,midterm mark', value: 'finds final mark needed to pass the course' },
				{ name: '4) !CourseCode + "calcfinal" + lab mark,midterm mark, final mark', value: 'finds final grade in course' },
				{ name: '5) !CourseCode + "calcgpa" + course1 grade, course2 grade, course3 grade, etc ', value: 'cumulative gpa for semester ' },
				{ name: '6) !help', value:  'displays commands list' },
			);

		return message.channel.send(embed);
	},
};