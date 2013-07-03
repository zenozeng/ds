;; 递归版本
(define (fast-expt b n)
  (define (even? x)
    (= (remainder n 2) 0))
  (define (square x)
    (* x x))
  (if (= 0 n)
      1
      (if (even? n)
	  (square (fast-expt b (/ n 2)))
	  (* b (fast-expt b (- n 1))))
      ))
