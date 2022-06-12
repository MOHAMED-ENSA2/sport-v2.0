import React from 'react'

import styles from "../styles/Footer.module.css"

function Footer() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.top}>
          <div className={styles.legal}>
            <div>
              معلومات قانونية
            </div>
            <div>
              شروط الإستخدام
            </div>
            <div>
              سياسة الكوكيز 
            </div>
            <div>
              سياسة الخصوصية 
            </div>
          </div>
          
          <div>
            <div>
              النتائج
            </div>
            <div>
              الأخبار
            </div>
            <div>
              المسابقات
            </div>
            <div>
              اللاعبين
            </div>
            <div>
              رياضات أخرى
            </div>
          </div>
          <div>
            <div>
              النتائج
            </div>
            <div>
              الأخبار
            </div>
            <div>
              المسابقات
            </div>
            <div>
              اللاعبين
            </div>
            <div>
              رياضات أخرى
            </div>
          </div>
          <div>
            الشعار
          </div>
      </div>
      <div className={styles.down}>
        <div className={styles.rights}>
              جميع الحقوق محفوظة لموقعنا 2022 <i className="fas fa-copyright fa-xs"></i>
        </div>
        <div className={styles.socialmedia}>
            <div className={styles.media}><i className="fab fa-facebook"></i></div>
            <div className={styles.media}><i className="fab fa-instagram"></i>	</div>
            <div className={styles.media}><i className="fab fa-twitter"></i></div>
            <div className={styles.media}><i className="fab fa-youtube"></i></div>
        </div>
      </div>

    </div>
  )
}

export default Footer