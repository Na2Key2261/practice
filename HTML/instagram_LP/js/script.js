// 動きのきっかけの起点となるアニメーションの名前を定義
function fadeAnime(){

    // ふわっ
  
    $('.fadeUpTrigger').each(function(){ //fadeUpTriggerというクラス名が
      var elemPos = $(this).offset().top-50;//要素より、50px上の
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll >= elemPos - windowHeight){
      $(this).addClass('fadeUp');// 画面内に入ったらfadeUpというクラス名を追記
      }else{
      $(this).removeClass('fadeUp');// 画面外に出たらfadeUpというクラス名を外す
      }
    });
    
    
        $('.fadeDownTrigger').each(function(){ //fadeDownTriggerというクラス名が
            var elemPos = $(this).offset().top-50;//要素より、50px上の
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll >= elemPos - windowHeight){
            $(this).addClass('fadeDown');// 画面内に入ったらfadeDownというクラス名を追記
            }else{
            $(this).removeClass('fadeDown');// 画面外に出たらfadeDownというクラス名を外す
            }
        });
    
    
    
        $('.fadeLeftTrigger').each(function(){ //fadeLeftTriggerというクラス名が
            var elemPos = $(this).offset().top-50;//要素より、50px上の
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll >= elemPos - windowHeight){
            $(this).addClass('fadeLeft');// 画面内に入ったらfadeLeftというクラス名を追記
            }else{
            $(this).removeClass('fadeLeft');// 画面外に出たらfadeLeftというクラス名を外す
            }
            });
    
    
    
        $('.fadeRightTrigger').each(function(){ //fadeRightTriggerというクラス名が
            var elemPos = $(this).offset().top-50;//要素より、50px上の
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll >= elemPos - windowHeight){
            $(this).addClass('fadeRight');// 画面内に入ったらfadeRightというクラス名を追記
            }else{
            $(this).removeClass('fadeRight');// 画面外に出たらfadeRightというクラス名を外す
            }
            });
    
    
    
        $('.upRightTrigger').each(function(){ //smoothTriggerというクラス名が
            var elemPos = $(this).offset().top-50;//要素より、50px上の
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll >= elemPos - windowHeight){
            $(this).addClass('upRight');// 画面内に入ったらsmoothというクラス名を追記
            }else{
            $(this).removeClass('upRight');// 画面外に出たらsmoothというクラス名を外す
            }
            }); 
    
    
    
}
    // 画面をスクロールをしたら動かしたい場合の記述
    $(window).scroll(function (){
        fadeAnime();/* アニメーション用の関数を呼ぶ*/
      });// ここまで画面をスクロールをしたら動かしたい場合の記述


      function delayScrollAnime() {
        var time = 0.2;//遅延時間を増やす秒数の値
        var value = time;
        $('.delayScroll').each(function () {
          var parent = this;          //親要素を取得
          var elemPos = $(this).offset().top;//要素の位置まで来たら
          var scroll = $(window).scrollTop();//スクロール値を取得
          var windowHeight = $(window).height();//画面の高さを取得
          var childs = $(this).children();  //子要素を取得
          
          if (scroll >= elemPos - windowHeight && !$(parent).hasClass("play")) {//指定領域内にスクロールが入ったらまた親要素にクラスplayがなければ
            $(childs).each(function () {
              
              if (!$(this).hasClass("fadeDelayUp")) {//アニメーションのクラス名が指定されているかどうかをチェック
                
                $(parent).addClass("play"); //親要素にクラス名playを追加
                $(this).css("animation-delay", value + "s");//アニメーション遅延のCSS animation-delayを追加し
                $(this).addClass("fadeDelayUp");//アニメーションのクラス名を追加
                value = value + time;//delay時間を増加させる
                
                //全ての処理を終わったらplayを外す
                var index = $(childs).index(this);
                if((childs.length-1) == index){
                  $(parent).removeClass("play");
                }
              }
            })
          }else {
            $(childs).removeClass("fadeDelayUp");//アニメーションのクラス名を削除
            value = time;//delay初期値の数値に戻す
          }
        })
      }
      
      // 画面をスクロールをしたら動かしたい場合の記述
        $(window).scroll(function (){
          delayScrollAnime();/* アニメーション用の関数を呼ぶ*/
        });



        /*$(function() {
          $.extend( $.validator.messages, {
              required: function(val, element) {
                  // data-nameの値を取得し、エラーメッセージに反映させる
                  const name = $(element).data('name');
                  return '「' + name + '」は必須です。';
              }
          });
          const commentForm = $("#commentForm");
          $('#check').on('click', function() {
              // 検証実行
              commentForm.valid();
              return false;
          });
      })*/
      
      


        document.addEventListener('DOMContentLoaded', () => {
          //.validationForm を指定した最初の form 要素を取得
          const validationForm = document.querySelector('.validationForm');
          /*//required クラスを指定された要素の集まり  
const requiredElems = document.querySelectorAll('.required');*/
          //.validationForm を指定した form 要素が存在すれば
          if(validationForm) {
            //エラーを表示する span 要素に付与するクラス名（エラー用のクラス）
            const errorClassName = 'error';
            
            //required クラスを指定された要素の集まり  
            const kanzirequiredElems = document.querySelectorAll('.kanzi');
            //required クラスを指定された要素の集まり  
            const hirarequiredElems = document.querySelectorAll('.hira');
            //email クラスを指定された要素の集まり
            const emailrequiredElems =  document.querySelectorAll('.email');
            //tel クラスを指定された要素の集まり
            const telrequiredElems =  document.querySelectorAll('.tel');
            //maxlength クラスを指定された要素の集まり
            const textrequiredElems =  document.querySelectorAll('.text');
            //equal-to クラスを指定された要素の集まり
            const checkrequiredElems = document.querySelectorAll('.check'); 
            
            //エラーメッセージを表示する span 要素を生成して親要素に追加する関数
            //elem ：対象の要素
            //errorMessage ：表示するエラーメッセージ
            const createError = (elem, errorMessage) => {
              //span 要素を生成
              const errorSpan = document.createElement('span');
              //エラー用のクラスを追加（設定）
              errorSpan.classList.add(errorClassName);
              //aria-live 属性を設定
              errorSpan.setAttribute('aria-live', 'polite');
              //引数に指定されたエラーメッセージを設定
              errorSpan.textContent = errorMessage;
              //elem の親要素の子要素として追加
              elem.parentNode.appendChild(errorSpan);
              
            }
         
            //form 要素の submit イベントを使った送信時の処理
            validationForm.addEventListener('submit', (e) => {
              //エラーを表示する要素を全て取得して削除（初期化）
              const errorElems = validationForm.querySelectorAll('.' + errorClassName);
              errorElems.forEach( (elem) => {
                elem.remove(); 
                
      
              });
              

              //.required を指定した要素を検証
              kanzirequiredElems.forEach( (elem) => {
                //値（value プロパティ）の前後の空白文字を削除
                const elemValue = elem.value.trim(); 
                //値が空の場合はエラーを表示してフォームの送信を中止
                if(elemValue.length === 0) {
                  createError(elem, '名前を入力してください');
                  
                  e.preventDefault();
                  const submit = document.querySelector('.submit');
      // フォームの要素を取得
      const name = document.querySelector('#line1');
      if(!name.value){
           // クラスを追加(フォームの枠線を赤くする)
          name.classList.add('input-invalid');
          // 後続の処理を止める
          return;
      }else{
           // クラスを削除
          name.classList.remove('input-invalid');
      }
                  
                }
              });
              //.required を指定した要素を検証
              hirarequiredElems.forEach( (elem) => {
                //値（value プロパティ）の前後の空白文字を削除
                const elemValue = elem.value.trim(); 
                //値が空の場合はエラーを表示してフォームの送信を中止
                if(elemValue.length === 0) {
                  createError(elem, 'ふりがなを入力してください');
                  e.preventDefault();
                  // フォームの要素を取得
      const name = document.querySelector('#line2');
      if(!name.value){
           // クラスを追加(フォームの枠線を赤くする)
          name.classList.add('input-invalid');
          // 後続の処理を止める
          return;
      }else{
           // クラスを削除
          name.classList.remove('input-invalid');
      }
                }
              });
              //.required を指定した要素を検証
              telrequiredElems.forEach( (elem) => {
                //値（value プロパティ）の前後の空白文字を削除
                const elemValue = elem.value.trim(); 
                //値が空の場合はエラーを表示してフォームの送信を中止
                if(elemValue.length === 0) {
                  createError(elem, '電話番号を入力してください');
                  e.preventDefault();
                  // フォームの要素を取得
      const name = document.querySelector('#line3');
      if(!name.value){
           // クラスを追加(フォームの枠線を赤くする)
          name.classList.add('input-invalid');
          // 後続の処理を止める
          return;
      }else{
           // クラスを削除
          name.classList.remove('input-invalid');
      }
                }
              });
              //.required を指定した要素を検証
              emailrequiredElems.forEach( (elem) => {
                //値（value プロパティ）の前後の空白文字を削除
                const elemValue = elem.value.trim(); 
                //値が空の場合はエラーを表示してフォームの送信を中止
                if(elemValue.length === 0) {
                  createError(elem, 'メールアドレスを入力してください');
                  e.preventDefault();
                  // フォームの要素を取得
      const name = document.querySelector('#line4');
      if(!name.value){
           // クラスを追加(フォームの枠線を赤くする)
          name.classList.add('input-invalid');
          // 後続の処理を止める
          return;
      }else{
           // クラスを削除
          name.classList.remove('input-invalid');
      }
                }
              });
              //.required を指定した要素を検証
              textrequiredElems.forEach( (elem) => {
                //値（value プロパティ）の前後の空白文字を削除
                const elemValue = elem.value.trim(); 
                //値が空の場合はエラーを表示してフォームの送信を中止
                if(elemValue.length === 0) {
                  createError(elem, 'お問合せ内容を入力してください');
                  e.preventDefault();
                  // フォームの要素を取得
      const name = document.querySelector('#line5');
      if(!name.value){
           // クラスを追加(フォームの枠線を赤くする)
          name.classList.add('input-invalid');
          // 後続の処理を止める
          return;
      }else{
           // クラスを削除
          name.classList.remove('input-invalid');
      }
                }
              });
              
              checkrequiredElems.forEach( (elem) => {
                //チェックボックスの場合
                if(elem.tagName === 'INPUT' && elem.getAttribute('type') === 'checkbox') {
                  //親要素を基点に選択状態の最初のチェックボックス要素を取得
                  const checked = elem.parentElement.querySelector('input[type="checkbox"]:checked');
                  //選択状態のチェックボックス要素を取得できない場合
                  if(checked === null) {
                    //エラーを表示
                    createError(elem, 'プライバシーポリシーに同意してください');
                    //フォームの送信を中止
                    e.preventDefault();
                  }
                }
              });
            }); 
            
          }
        });
        //送信時の処理
 
    {
      const elemValue = elem.value.trim(); 
      //値が空の場合はエラーを表示してフォームの送信を中止
      if(elemValue.length === 0) {
        if(elem.tagName === 'SELECT') {
          createError(elem, '選択してください');
        }else{
          createError(elem, '入力は必須です');
        } 
        e.preventDefault();
      } 
    }  
  

  
window.addEventListener('DOMContentLoaded', () => {
  // 「送信」ボタンの要素を取得
  const submit = document.querySelector('.submit');
  // 「送信」ボタンの要素にクリックイベントを設定する
  submit.addEventListener('click', (e) => {
      // デフォルトアクションをキャンセル
      e.preventDefault();
      // 「お名前」入力欄の空欄チェック
      // フォームの要素を取得
      const name = document.querySelector('#line');
      if(!name.value){
           // クラスを追加(フォームの枠線を赤くする)
          name.classList.add('input-invalid');
          // 後続の処理を止める
          return;
      }else{
           // クラスを削除
          name.classList.remove('input-invalid');
      }
  }, false);
  });

