import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const травмировать: PerfectVerb = {
  name: Word('травмировать', 5),
  singular1stPerson: Word('травмирую', 5),
  singular2ndPerson: Word('травмируешь', 5),
  singular3rdPerson: Word('травмирует', 5),
  plural1stPerson: Word('травмируем', 5),
  plural2ndPerson: Word('травмируете', 5),
  plural3rdPerson: Word('травмируют', 5),
  masculinePast: Word('травмировал', 5),
  femininePast: Word('травмировала', 5),
  neuterPast: Word('травмировало', 5),
  pluralPast: Word('травмировали', 5),
  imperativeInformal: Word('травмируй', 5),
  imperativeFormal: Word('травмируйте', 5),
  imperfect: [],
};

perfectVerbs.set(травмировать.name.text, травмировать);

export { травмировать };