========
Notation
========

.. include:: replacements.rst 
   
+------------------------+------------+
| Symbol                 | Desciption |
+========================+============+
| :math:`x`              | scalar     |
+------------------------+------------+
| :math:`\boldsymbol{x}` | vector     |
+------------------------+------------+
| :math:`X`              | matrix     |
+------------------------+------------+
| :math:`\boldsymbol{X}` | tensor     |
+------------------------+------------+

.. csv-table:: NumPy functions related to complex numbers
   :header: "Function", "Description", "Example"
   :widths: 10, 40, 30

      ":func:`numpy.array`", "Create array with complex numbers. Use dtype 'F', 'G' or 'D'", "``z = numpy.array([3,2,1,0], dtype='complex64')``, ``z = numpy.array([3,2,1,0], dtype='F')``"
      ":meth:`numpy.ndarray.astype`", "Convert float array to complex", "``z = x.astype('F')``, ``z = x*1j``"
      ":func:`numpy.complex`", "Create a complex number from a real part and an optional imaginary part", "``z = numpy.complex(3.2)``"
     ":func:`numpy.real`, :func:`numpy.imag`", "Create new arrays with only the real or the imaginary part of the complex number(s) z. Note that these new arrays are views on the original array. If you change an element in the original array, than it will also change in the new array with only the real or the imaginary part. If you don't want this behaviour, make an explicit copy.", "``numpy.real(z)``, ``numpy.imag(z)``, ``x = numpy.real(z).copy()``"
      ":func:`numpy.absolute`- `numpy.absolute() function <http://docs.scipy.org/doc/numpy/reference/generated/numpy.absolute.html>`_ (numpy.abs(z))", "Length of z", "``r = numpy.abs(z)``"
      ":func:`numpy.angle`", "Return the angle of the complex argument. If deg=True, then return angle in degrees", "``angles = numpy.angle(z,deg=True)``"
      ":func:`numpy.conj`- `conj() function <http://docs.scipy.org/doc/numpy/reference/generated/numpy.conj.html>`_", "Return the complex conjugate, element-wise. The complex conjugate of a complex number is obtained by changing the sign of its imaginary part.", "``zc = z.conjugate() # Creates a copy with changed contents``"
      ":func:`numpy.iscomplex`", "Returns an array with Booleans. True for every complex number.", "``print numpy.iscomplex(z)``"
