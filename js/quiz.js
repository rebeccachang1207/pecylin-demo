document.addEventListener('DOMContentLoaded', function () {
	const questionBlocks = document.querySelectorAll('.content > .flex.alignCenter');
	const totalQuestions = questionBlocks.length;
	let current = 0;
	let answers = [];
	let scores = [];

	// 分數對照表，依題目順序，每題四個選項（A~D）
	const scoreTable = [
		// Q1
		[1, 2, 3, 4],
		// Q2
		[4, 3, 2, 1],
		// Q3
		[2, 4, 1, 3],
		// Q4
		[3, 1, 4, 2],
		// Q5
		[1, 4, 3, 2],
		// Q6
		[1, 3, 2, 4],
		// Q7
		[2, 3, 4, 1],
		// Q8
		[2, 1, 3, 4],
	];

	function showQuestion(idx) {
		questionBlocks.forEach((block, i) => {
			block.style.display = i === idx ? 'flex' : 'none';
		});
	}

	function handleAnswer(e) {
		if (!e.target.classList.contains('btn')) return;
		const li = e.target.closest('li');
		if (!li) return;
		// 取得選項索引（A=0, B=1, C=2, D=3）
		const optionIdx = Array.from(li.parentNode.children).indexOf(li);
		// 記錄分數
		scores[current] = scoreTable[current][optionIdx];
		// 也可記錄答案文字
		answers[current] = e.target.textContent.trim();
		if (current < totalQuestions - 1) {
			console.log(22222)
			current++;
			showQuestion(current);
		} else {
			console.log(11111)
			// 測驗結束，將分數與答案存到 localStorage 並跳轉
			localStorage.setItem('quizAnswers', JSON.stringify(answers));
			localStorage.setItem('quizScores', JSON.stringify(scores));
			console.log({url: getHashIndex(scores) + '.html', scores, answers});
			window.location.href = getHashIndex(scores) + '.html';
		}
	}

	function getHashIndex(scores) {
		let total = 0;
		if (scores.length > 0) {
			total = scores.reduce((a, b) => a + b, 0);
		}
		// 分數區間對應結果
		// 8～11: result-1, 12～17: result-2, 18～23: result-3, 24～28: result-4, 29～32: result-5
		let resultIdx = 0; // 預設 result-1
		if (total >= 8 && total <= 11) resultIdx = 0; // result-1
		else if (total >= 12 && total <= 17) resultIdx = 1; // result-2
		else if (total >= 18 && total <= 23) resultIdx = 2; // result-3
		else if (total >= 24 && total <= 28) resultIdx = 3; // result-4
		else if (total >= 29 && total <= 32) resultIdx = 4; // result-5

  		const hashArr = ['result1', 'result2', 'result3', 'result4', 'result5'];
		return hashArr[resultIdx];
	}

	// 綁定所有題目的選項
	questionBlocks.forEach(block => {
		block.addEventListener('click', handleAnswer);
	});

	// 初始化顯示第一題
	showQuestion(0);
});
