import { screen, waitFor, fireEvent, act } from "@testing-library/react";
import customRender from "../../../utils/customRender";
import { getTrendingGif } from "../../../api/gif";
import { LIMIT } from "../../../constants/gif";
import { mockGiphy } from "../__fixtures__/data";
import HomePage from "..";

jest.mock("../../../api/gif", () => {
  return {
    getTrendingGif: jest.fn(),
  };
});

describe("Trending Giphy List View", () => {
  beforeEach(async () => {
    const fetchTrendingGiphyPromise = Promise.resolve(mockGiphy);
    getTrendingGif.mockImplementation(() => fetchTrendingGiphyPromise);

    customRender(<HomePage />);

    await act(() => fetchTrendingGiphyPromise);
  });

  afterEach(async () => {
    getTrendingGif.mockClear();
  });

  it("should fetch with initial state", async () => {
    await waitFor(() => expect(getTrendingGif).toBeCalledTimes(1));

    const params = getTrendingGif.mock.calls[0][0];
    const { limit } = params;

    expect(limit).toBe(LIMIT);
  });

  it("should render correct giphy list", () => {
    mockGiphy.data.forEach((item) => {
      expect(screen.getAllByText(item.user.display_name)[0]).toBeInTheDocument();
      const card = screen.getAllByAltText(item.slug)[0];
      expect(card).toHaveAttribute('src', item.images.downsized.url);
    });
  });

  it("should render `Get more` button.", async () => {
    expect(
      screen.getByRole("button", {
        name: "Get more",
      })
    ).toBeInTheDocument();
  });

  it('should fetch giphy when click to Get more button', async() => {
    const getMoreBtn = screen.getByRole('button', {
      name: "Get more"
    });

    fireEvent.click(getMoreBtn);

    await waitFor(() => expect(getTrendingGif).toBeCalledTimes(2));

    const params = getTrendingGif.mock.calls[1][0];
    const { limit, offset } = params;

    expect(limit).toBe(LIMIT);
    expect(offset).toBe(mockGiphy.pagination.count + mockGiphy.pagination.offset);
  });
});
