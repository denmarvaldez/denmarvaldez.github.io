# Machine Learning: Calculus & Mathematics of Gradient Descent

## 1. Loss Functions & Objective Formulation

Optimization is the heart of machine learning. Given a model parameterized by weights $\theta \in \mathbb{R}^d$, we define a **loss function** $L(\theta)$ measuring how poorly our model performs on training data $(X, y)$.

For example, in Linear Regression, the **Mean Squared Error (MSE)** loss is:

$$L(\theta) = \frac{1}{2m} \sum_{i=1}^m \left( h_\theta(x^{(i)}) - y^{(i)} \right)^2 = \frac{1}{2m} \| X\theta - y \|_2^2$$

---

## 2. The Gradient Vector $\nabla L(\theta)$

The **gradient** $\nabla L(\theta)$ is a vector containing all partial derivatives of $L$ with respect to each parameter $\theta_j$:

$$\nabla L(\theta) = \begin{bmatrix} \frac{\partial L}{\partial \theta_1} \\ \frac{\partial L}{\partial \theta_2} \\ \vdots \\ \frac{\partial L}{\partial \theta_d} \end{bmatrix}$$

The gradient vector points in the direction of **steepest increase** of the function $L(\theta)$. Therefore, moving in the opposite direction $-\nabla L(\theta)$ guarantees the steepest decrease.

### Gradient Derivation for MSE Loss

$$\nabla_\theta L(\theta) = \frac{1}{m} X^T (X\theta - y)$$

---

## 3. The Gradient Descent Update Rule

Given a learning rate parameter $\eta > 0$ (alpha/step size), the update rule for parameters at step $t+1$ is:

$$\theta^{(t+1)} = \theta^{(t)} - \eta \, \nabla L(\theta^{(t)})$$

### Learning Rate Selection & Convergence

- **Too Large ($\eta \gg 0$)**: The updates overshoot the minimum, causing divergence or oscillation.
- **Too Small ($\eta \approx 0$)**: Convergence is excessively slow and can get trapped in shallow local minima or saddle points.

---

## 4. Stochastic vs. Batch vs. Mini-Batch Gradient Descent

1. **Batch Gradient Descent**: Computes gradients across the entire dataset of size $m$ per step. Exact gradient, but computationally expensive for massive datasets.
2. **Stochastic Gradient Descent (SGD)**: Updates parameters using a single random sample $i$:
   $$\theta^{(t+1)} = \theta^{(t)} - \eta \, \nabla L_i(\theta^{(t)})$$
3. **Mini-Batch Gradient Descent**: Computes gradients over a small batch $B$ (e.g., 32, 64, 128 samples):
   $$\theta^{(t+1)} = \theta^{(t)} - \eta \frac{1}{|B|} \sum_{i \in B} \nabla L_i(\theta^{(t)})$$

---

## 5. Key Takeaways & Advanced Optimizers

Modern optimizers extend standard gradient descent by incorporating momentum and adaptive learning rates:
- **Adam (Adaptive Moment Estimation)**: Tracks both first moment (mean) $m_t$ and second moment (uncentered variance) $v_t$ of gradients:
  $$m_t = \beta_1 m_{t-1} + (1-\beta_1) g_t, \quad v_t = \beta_2 v_{t-1} + (1-\beta_2) g_t^2$$
