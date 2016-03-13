package com.threadlearn;

public class Test {

	public static void main(String[] args) {
		Thread	actor	=	new	Actor();
		actor.setName("Mr thread");
		actor.start();
		Thread	actress	=	new	Thread(new Actress(),"Miss.thread");
		actress.start();
	}

}
