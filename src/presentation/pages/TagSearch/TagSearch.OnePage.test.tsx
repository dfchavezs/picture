import { render, waitFor } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

import Wrapper from "../../tools/wrappers/Wrapper";
import { ELang } from "../../tools/utils/intl/lang.enum";
import { langMap } from "../../tools/utils/intl";
import { setLocalLang } from "../../tools/utils/local-storage-manager";
import { generatePhoto } from "../../../core/infrastructure/mock/photo.service";
import TagSearch from "./TagSearch";
import { faker } from "@faker-js/faker";
import { ROWS_PER_PAGE } from "../../../config";

const nPhotos = faker.number.int({ min: 1, max: ROWS_PER_PAGE - 1 });
const total = nPhotos;

const photos = Array.from({ length: nPhotos }, () => generatePhoto()).map(photo => ({
  ...photo,
  createdAt: new Date(photo.created_at),
}));

describe.each([ELang.PT, ELang.ES, ELang.EN])("TagSearch - OnePage - %s", lang => {
  beforeEach(() => {
    vi.mock("../../api/hooks/photo", () => {
      return {
        useSearchPhoto: () => ({
          data: {
            total,
            totalPages: Math.ceil(total / ROWS_PER_PAGE),
            results: photos,
          },
          isLoading: false,
          isError: false,
          isSuccess: true,
        }),
        useGetPhotos: () => ({
          data: photos,
          isLoading: false,
        }),
      };
    });
    setLocalLang(lang);
  });
  const langMessages = langMap[lang];
  it("Default", async () => {
    const { queryByText, queryAllByText } = render(
      <Wrapper>
        <TagSearch />
      </Wrapper>,
    );
    // check title
    expect(
      queryByText(langMessages["tagSearch.title"], { exact: false }),
    ).toBeInTheDocument();
    // wait for requests
    await waitFor(() => {
      // Check photos
      expect(queryAllByText(langMessages["card.takenOn"], { exact: false })).toHaveLength(
        nPhotos,
      );
    });
    // paginator shouldn't appear
    const paginator = document.querySelector(".p-paginator");
    expect(paginator).not.toBeInTheDocument();
  });

  afterEach(() => {
    vi.clearAllMocks();
  });
});
