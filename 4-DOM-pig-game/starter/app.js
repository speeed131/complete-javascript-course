/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach winScore points on GLOBAL score wins the game

*/

'use strict';

let winScore, scores, roundScore, previousRoundScore, activePlayer, gamePlaying;

init();

document.querySelector('.btn-roll').addEventListener('click', function(){
    if(gamePlaying){
        // 1. 0~6のランダムな数
        // let dice = Math.floor(Math.random() * 6 + 1);
        let dice = 6

        // 2. 画像を出力
        let diceDom = document.querySelector('.dice');
        diceDom.style.display = 'block';
        diceDom.src = 'dice-' + dice + '.png';


        // 3. ラウンドスコアを更新する。 １の場合の処理はプレイヤーを変える
        //２回連続 ６が出た場合
        if(dice === 6 && previousRoundScore === 6) {
            scores[activePlayer] = 0;
            document.querySelector('#score-' + activePlayer).textContent = '0';
            nextPlayer();
        } else if(dice !== 1) {
            //スコアを足す
            roundScore += dice;
            document.querySelector('#current-' + activePlayer).textContent = roundScore;
            previousRoundScore = dice;
        }
        else {
        nextPlayer();
        }
    }
});

document.querySelector('.btn-hold').addEventListener('click', function () {
    if(gamePlaying){
        // 1,現在のスコアをグローバルスコアに加える
        scores[activePlayer] += roundScore;
        // 2,見た目のグローバルスコアを更新
        document.querySelector('#score-' + activePlayer).textContent = 
        scores[activePlayer]; 
        // 3,もし１００を超えていたらWinを表示する
        if(scores[activePlayer] >= winScore){
            document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
            document.querySelector('.dice').style.display = 'none';
            document.querySelector('.player-' + activePlayer + '-panel')
            .classList.remove('active');
            gamePlaying = false;
        } else {
            // 4,もし超えていなかったら、最後に順番を交代
            nextPlayer();
        }
    }
});


function nextPlayer(){
    //プレイヤーを交代
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;

    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');

    document.querySelector('.dice').style.display = 'none';
}

document.querySelector('.btn-new').addEventListener('click', init);

function init() {
    scores = [0,0];
    activePlayer = 0;
    roundScore = 0;
    previousRoundScore = 0;
    gamePlaying = true;

    document.querySelector('.dice').style.display = 'none';

    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active')

}