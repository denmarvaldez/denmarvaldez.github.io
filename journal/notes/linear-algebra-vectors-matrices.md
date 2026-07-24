# Linear Algebra: Vector Spaces, Transformations & Eigenvectors

## 1. Vector Spaces & Span

In machine learning and data science, data points are fundamentally represented as vectors in multi-dimensional vector spaces $\mathbb{R}^n$.

A **vector space** $V$ over a field $\mathbb{R}$ is a set of elements (vectors) closed under vector addition and scalar multiplication. 

The **span** of a set of vectors $\{v_1, v_2, \dots, v_k\}$ is the set of all linear combinations:

$$\text{Span}(v_1, \dots, v_k) = \left\{ \sum_{i=1}^k c_i v_i \;\Big|\; c_i \in \mathbb{R} \right\}$$

---

## 2. Matrix Transformations as Linear Maps

A matrix $A \in \mathbb{R}^{m \times n}$ acts as a function transforming vectors from $\mathbb{R}^n$ to $\mathbb{R}^m$:

$$T(x) = A x$$

Linear transformations satisfy two fundamental properties:
1. **Additivity**: $T(u + v) = T(u) + T(v)$
2. **Homogeneity**: $T(c u) = c T(u)$

### Matrix Multiplication

For matrices $A \in \mathbb{R}^{m \times k}$ and $B \in \mathbb{R}^{k \times n}$, the entry $(AB)_{ij}$ represents the dot product of row $i$ of $A$ and column $j$ of $B$:

$$(AB)_{ij} = \sum_{l=1}^k A_{il} B_{lj}$$

---

## 3. The Eigenvalue & Eigenvector Problem

One of the most important concepts in dimensionality reduction algorithms like **Principal Component Analysis (PCA)** is finding directions where a linear transformation simply scales the vector without changing its direction.

For a square matrix $A \in \mathbb{R}^{n \times n}$, a non-zero vector $v \in \mathbb{R}^n$ is an **eigenvector** with corresponding **eigenvalue** $\lambda \in \mathbb{R}$ if:

$$A v = \lambda v$$

### Solving for Eigenvalues

Rearranging the eigenvalue equation gives:

$$(A - \lambda I) v = 0$$

For non-trivial solutions ($v \neq 0$), the matrix $(A - \lambda I)$ must be singular, meaning its determinant is zero:

$$\det(A - \lambda I) = 0$$

This produces the **characteristic polynomial**, whose roots are the eigenvalues $\lambda_1, \lambda_2, \dots, \lambda_n$.

---

## 4. Relevance to Machine Learning

- **PCA (Principal Component Analysis)**: Finds the eigenvectors of the data covariance matrix $\Sigma = \frac{1}{m} X^T X$ corresponding to the largest eigenvalues to project data onto variance-maximizing axes.
- **SVD (Singular Value Decomposition)**: Decomposes any matrix $A = U \Sigma V^T$, forming the foundation of recommendation engines and latent semantic analysis.
