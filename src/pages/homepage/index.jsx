import { Box } from "@mui/material";

const Homepage = () => {
  return (
    <Box component="main">
      {/* intro */}
      <Stack spacing={2}>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          sx={{ pt: 1 }}
        >
          {/* 1 */}
          <Box component="div">
            <Stack direction="row" alignItems="center" spacing={1}>
              <Box component="div">
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: "bold",
                    color: "#08061B",
                  }}
                  gutterBottom
                >
                  Welcome back Taylor
                </Typography>
              </Box>
              <Box component="div" sx={{ width: "20px" }}>
                <Image
                  src="/images/waving-hand.png" //
                  alt="Your Image"
                  sx={{ width: "100%", height: "auto" }}
                />
              </Box>
            </Stack>
          </Box>
          {/* 2 */}
          <Box component="div">
            <Stack direction="row" alignItems="center" spacing={2}>
              <Box
                component="div"
                sx={{
                  borderRadius: "50px",
                  backgroundColor: "white",
                  outline: "none",
                  boxShadow: 1,
                  px: 2,
                  py: 0.5,
                }}
              >
                <Stack direction="row" alignItems="center" spacing={2}>
                  <Search sx={{ color: "#a6a1ad" }} />
                  <InputBase
                    // className={classes.input}
                    placeholder="Search courses"
                    fullWidth
                  />
                </Stack>
              </Box>
              <Box component="div">
                <Avatar alt="Remy Sharp" src="/images/1.jpg" />
              </Box>
            </Stack>
          </Box>
        </Stack>
        {/* section 2 */}
        <Grid container spacing={2}>
          <Grid item xs={8}>
            <Box component="div">
              <Stack direction="column">
                <Stack
                  direction="row"
                  alignItems="center"
                  justifyContent="space-between"
                  sx={{
                    color: "#08061B",
                  }}
                >
                  <Typography variant="h6" gutterBottom>
                    New Courses
                  </Typography>
                  <Link href="#" color="inherit" variant="body2">
                    View All
                  </Link>
                </Stack>
                {/* cards */}
                <Box>
                  <Grid container spacing={2}>
                    {[1, 2, 3].map((item, index) => (
                      <Grid item xs>
                        <Box component="div">
                          <Card>
                            <CardContent>
                              <Stack spacing={2}>
                                <Stack
                                  direction="row"
                                  alignItems="center"
                                  spacing={2}
                                >
                                  <Box
                                    sx={{
                                      bgcolor: "#F7E3D8",
                                      borderRadius: "50%",
                                      p: 0.5,
                                    }}
                                  >
                                    <Camera />
                                  </Box>
                                  <Box>
                                    <Typography
                                      sx={{
                                        fontSize: 14,
                                        fontWeight: "medium",
                                      }}
                                    >
                                      Content Writing
                                    </Typography>
                                    <Typography
                                      sx={{ mb: 1.5, fontSize: 11 }}
                                      color="text.secondary"
                                    >
                                      12 Lessons
                                    </Typography>
                                  </Box>
                                </Stack>
                                <Stack
                                  direction="row"
                                  alignItems="center"
                                  spacing={2}
                                >
                                  <Box>
                                    <Stack direction="column">
                                      <Typography
                                        sx={{ fontSize: 11 }}
                                        color="text.secondary"
                                      >
                                        Rate
                                      </Typography>
                                      <Stack direction="row" spacing={1}>
                                        <StarIcon color="warning" />
                                        <Typography
                                          sx={{
                                            fontSize: 14,
                                            fontWeight: "medium",
                                          }}
                                        >
                                          4.8
                                        </Typography>
                                      </Stack>
                                    </Stack>
                                  </Box>
                                  <Box>
                                    <Typography
                                      sx={{ mb: 0.5, fontSize: 11 }}
                                      color="text.secondary"
                                    >
                                      Type
                                    </Typography>
                                    <Typography
                                      sx={{
                                        fontSize: 13,
                                        fontWeight: "medium",
                                        lineHeight: "16px",
                                      }}
                                    >
                                      Data Research
                                    </Typography>
                                  </Box>
                                </Stack>
                              </Stack>
                            </CardContent>
                          </Card>
                        </Box>
                      </Grid>
                    ))}
                  </Grid>
                </Box>
              </Stack>
            </Box>
          </Grid>
          {/* right side */}
          <Grid item xs={4}>
            <Box>
              <Card sx={{ backgroundColor: "#1F1E30", pl: 1 }}>
                <CardContent
                  sx={{
                    backgroundImage: `url('/images/2.png')`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    color: "#fff",
                  }}
                >
                  <Stack spacing={1}>
                    <Box component="div">
                      <Stack direction="row" spacing={1} alignItems="center">
                        <DeviceHubIcon />
                        <Typography variant="h6" gutterBottom>
                          Eduplex
                        </Typography>
                      </Stack>
                    </Box>
                    <Box sx={{ maxWidth: "60%" }}>
                      <Stack spacing={0.5}>
                        <Typography
                          variant="h5"
                          sx={{
                            fontWeight: "medium",
                          }}
                        >
                          Go Premium
                        </Typography>
                        <Typography
                          sx={{
                            fontSize: 11,
                            fontWeight: "medium",
                            lineHeight: "16px",
                          }}
                        >
                          Explore 25k+ courses with lifetime membership
                        </Typography>
                      </Stack>
                    </Box>
                  </Stack>
                </CardContent>
                <CardActions>
                  <Button
                    size="small"
                    variant="contained"
                    sx={{
                      bgcolor: "#D8F275",
                      borderRadius: "50px",
                      color: "#000",
                      fontSize: 10,
                      px: 2,
                      mb: 1,
                    }}
                  >
                    Get Access
                  </Button>
                </CardActions>
              </Card>
            </Box>
          </Grid>
        </Grid>
      </Stack>
    </Box>
  );
};
