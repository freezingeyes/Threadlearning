package com.threadlearn;

public class Actor extends Thread {
	public void run(){
		System.out.println(getName()+"是一个演员！");
		int	count	=	1;
		while(count	<=	100){
			System.out.println(getName()+"正在演出"+count);
			if(count	%10	==	0){
					try {
						Thread.sleep(100000);
					} catch (InterruptedException e) {
						e.printStackTrace();
					}
			}
			count++;
		}
		System.out.println(getName()+"演出结束！");
	}

}
