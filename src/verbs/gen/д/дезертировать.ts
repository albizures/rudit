import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const дезертировать: PerfectVerb = {
  name: Word('дезертировать', 6),
  singular1stPerson: Word('дезертирую', 6),
  singular2ndPerson: Word('дезертируешь', 6),
  singular3rdPerson: Word('дезертирует', 6),
  plural1stPerson: Word('дезертируем', 6),
  plural2ndPerson: Word('дезертируете', 6),
  plural3rdPerson: Word('дезертируют', 6),
  masculinePast: Word('дезертировал', 6),
  femininePast: Word('дезертировала', 6),
  neuterPast: Word('дезертировало', 6),
  pluralPast: Word('дезертировали', 6),
  imperativeInformal: Word('дезертируй', 6),
  imperativeFormal: Word('дезертируйте', 6),
  imperfect: [],
};

perfectVerbs.set(дезертировать.name.text, дезертировать);

export { дезертировать };