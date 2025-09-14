
import classes from "./AppTable.module.css";
import TableSkeleton from "@/component/atoms/TableSkeleton";
import { RECORDS_LIMIT } from "@/resources/const";
import NoDataFound from "@/component/atoms/NoDataFound";
import Pagination from "@/component/molecule/Pagination";
import { mergeClass } from "@/resources/utils/helper";

export default function AppTable({
  data = [],
  tableHeader = [],
  loading = false,
  noDataText,
  renderItem = null,
  renderTableHeader = null,
  hasPagination,
  bodyContainerClass,
  ...props
}) {
  return (
    <>
      <div className={mergeClass(`${classes?.tableMainContainer}`)}>
        <div className={mergeClass(`${classes?.tableHeaderContainer}`)}>
          <table>
            <thead>
              <tr>
                {tableHeader?.map((item, index) => (
                  <th
                    key={`TableHeader-th-${index}`}
                    style={{
                      textAlign: "left",
                      ...(item.style && item.style),
                    }}
                  >
                    {renderTableHeader
                      ? renderTableHeader({ item: item, index })
                      : item?.title}
                  </th>
                ))}
              </tr>
            </thead>
          </table>
        </div>
        {loading ? (
          <TableSkeleton rowsCount={RECORDS_LIMIT} colsData={tableHeader} />
        ) : (
          <div
            className={mergeClass(
              `${classes?.tableBodyContainer}`,
              bodyContainerClass && bodyContainerClass
            )}
          >
            <table>
              <tbody>
                {data?.length ? (
                  data?.map((item, rowIndex) => {
                    return (
                      <tr
                        key={`TableBody-tr-${rowIndex}`}
                        className={mergeClass(classes.bodyRow)}
                      >
                        {tableHeader?.map(
                          ({ key, style, title, renderValue }, colIndex) => (
                            <td
                              key={`TableBody-td-${colIndex}`}
                              style={{
                                textAlign: "left",
                                ...style,
                              }}
                            >
                              {renderItem
                                ? renderItem({
                                    item: item[key],
                                    colIndex,
                                    rowIndex,
                                    key,
                                    title,
                                    renderValue,
                                  })
                                : renderValue
                                ? renderValue(item[key], item)
                                : item[key]}
                            </td>
                          )
                        )}
                      </tr>
                    );
                  })
                ) : (
                  <tr
                    className={mergeClass(
                      `${classes?.noDataTr}`,
                      bodyContainerClass && bodyContainerClass
                    )}
                  >
                    <td>
                      <NoDataFound text={noDataText} />
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        )}

        {hasPagination && <Pagination {...props} />}
      </div>
    </>
  );
}
