(define (sine angle)
  (define (p x)
    ((-
      (* 3 x)
      (* 4 (* x x x)))))
  (if (not (> (abs angle) 0.1))
      angle
      (p (sine (/ angle 3.0)))))
