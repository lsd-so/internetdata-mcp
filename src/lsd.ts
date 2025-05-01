import drop from 'internetdata';

export const runLSD = async (code: string): Promise<Array<Record<string, any>>> => {
  const trip = await drop.tab();
  const results = await trip.execute(code);
  return results;
}
