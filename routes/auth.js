const express = require("express");
const router = express.Router();
router.use(express.json());
/**
 * @swagger
 * /signup:
 *   post:
 *     summary: 회원가입
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               userid:
 *                 type: string
 *               password:
 *                 type: string
 *               email:
 *                 type: string
 *               name:
 *                 type: string
 *               phone:
 *                 type: string
 *     responses:
 *       200:
 *         description: 사용자가 회원 정보를 입력하여 가입처리
 */

/**
 * @swagger
 * /login:
 *   post:
 *     summary: 로그인
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               userid:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       201:
 *         description: 아이디와 비밀번호로 로그인 요청 처리
 */

/**
 * @swagger
 * /user:
 *   put:
 *     summary: 회원정보 수정
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               password:
 *                 type: string
 *               email:
 *                 type: string
 *               name:
 *                 type: string
 *               phone:
 *                 type: string
 *     responses:
 *       201:
 *         description: 이메일, 이름, 전화번호 등을 수정
 */

/**
 * @swagger
 * /user:
 *   delete:
 *     summary: 계정 삭제
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               userid:
 *                 type: string
 *     responses:
 *       200:
 *         description: 회원탈퇴 처리
 */

router.post("/signup", (req, res) => {
  const { userid, password, email, name, phone } = req.body;
  res.status(200).send("사용자가 회원 정보를 입력하여 가입처리");
});

router.post("/login", (req, res) => {
  const { userid, password } = req.body;
  res.status(201).send("아이디와 비밀번호로 로그인 요청 처리");
});

router.put("/user", (req, res) => {
  const { password, email, name, phone } = req.body;
  res.status(201).send("이메일, 이름, 전화번호 등을 수정");
});

router.delete("/user", (req, res) => {
  const { userid } = req.body;
  res.status(200).send("회원탈퇴 처리");
});

module.exports = router;
