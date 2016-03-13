package com.threadlearn;

public class Actress implements Runnable {

	@Override
	public void run() {
		System.out.println(Thread.currentThread().getName()+"是另一个演员！");
		int	count	=	1;
		while(count	<=	100){
			System.out.println(Thread.currentThread().getName()+"正在演出"+count);
			if(count	%10	==	0){
					try {
						Thread.sleep(1000);
					} catch (InterruptedException e) {
						e.printStackTrace();
					}
			}
			count++;
		}
		System.out.println(Thread.currentThread().getName()+"演出结束！");

	}

}
