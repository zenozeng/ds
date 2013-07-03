;; 牛顿法求立方根
(define (cube-root-iter guess x)
  (if (good-enough? guess x)
      guess
      (cube-root-iter (improve guess x) x)))

(define (improve y x)
  (/ (+ (/ x (* y y))
	(* 2 y))
     3))

(define (cube-root x)
  (if (= 0 x)
      0
      (cube-root-iter 1.0 x)))

(define (good-enough? guess x)
  (display guess)
  (display "\n")
  (display (square guess))
  (display "\n\n")
  (< (abs (- 1
	     (/ guess (improve guess x))))
     0.01))
