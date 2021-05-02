module.exports = {
	name: 'ele404',
	description: 'Information Regarding Electronics Circuits Course.',
	execute(message, args) {
		const first = Number(args[1]);
		const second = Number(args[2]);
		const third = Number(args[3]);
		const fourth = Number(args[4]);
		const fifth = Number(args[5]);
		if(!args.length) {
			return message.channel.send(`Please provide arguments, ${message.author}`);
		}
		else if(args[0] === 'weight') {
			return message.channel.send('Labs : 20%  Midterm : 30% Final : 50% ');
		}
		else if(args[0] === 'syllabus' && args[1] === 'midterm') {
			return message.channel.send('Modules 5-7');
		}
		else if(args[0] === 'syllabus' && args[1] === 'final') {
			return message.channel.send('Modules 10-12');
		}
		else if(args[0] === 'calc') {
			const dothis = 50 - (first + second);
			if(dothis < 0) {return message.channel.send('You are passing already.');}
			else {
				return message.channel.send(` You will need at least : ${dothis} %`);
			}
		}
		else if(args[0] === 'calcfinal') {
			const dothis = (first + second + third);
			return message.channel.send(` Final Percentage : ${dothis} %`);
		}
		else if(args[0] === 'calcgpa') {
			const dothis = (first + second + third + fourth + fifth) / 5;
			return message.channel.send(` CGPA : ${dothis} %`);
		}


	},
};