import { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

/**
 * Write class
 */
class Write extends Component {
    /**
     * @return {Component} Component
     */
    render() {
        return (
            <div>
                <Form>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>도전</Form.Label>
                        <Form.Control type="email" placeholder="도전이름" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>내용</Form.Label>
                        <Form.Control as="textarea" placeholder="내용 입력" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>참가비</Form.Label>
                        <Form.Control type="email" placeholder="ex)10,000원" />
                    </Form.Group>
                </Form>
                <Button variant="info">작성완료</Button>
                <Button variant="secondary">취소</Button>
            </div>
        );
    }
}

export default Write;
