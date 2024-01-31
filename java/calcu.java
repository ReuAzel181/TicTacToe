package Java;

public class calcu {
    public static void main(String args[]) {
        
        int sum = 0;

        for (int i = 1; i <= 100; i++) {
            if (i % 3 != 0) {
                System.out.print("\rCalculating... " + getProgressBar(i, 100));
                sum += i;

                // Delay for the animation effect
                try {
                    Thread.sleep(50);
                } catch (InterruptedException e) {
                    e.printStackTrace();
                }
            }
        }

        System.out.println("\n\nResult: " + sum);
    }

    private static String getProgressBar(int current, int total) {
        int progress = (int) ((double) current / total * 50); 
        StringBuilder progressBar = new StringBuilder();

        progressBar.append("[");

        // Ini man lang talaga su code
        for (int i = 0; i < 50; i++) {
            if (i < progress) {
                progressBar.append("=");
            } else {
                progressBar.append(" ");
            }
        }
        progressBar.append("] " + (int) ((double) current / total * 100) + "%");

        return progressBar.toString();
    }
}
