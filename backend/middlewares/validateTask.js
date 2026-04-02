exports.validateTask = (req, res, next) => {
    const { title, completed } = req.body;

    if (!title || typeof title !== "string") {
        const err = new Error("Le champ title est requis et doit être une string");
        err.status = 400;
        return next(err);
    }

    if (typeof completed !== "boolean") {
        const err = new Error("Le champ completed doit être un boolean");
        err.status = 400;
        return next(err);
    }

    next();
};
