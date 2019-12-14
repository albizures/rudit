import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const курировать: PerfectVerb = {
  name: Word('курировать', 3),
  singular1stPerson: Word('курирую', 3),
  singular2ndPerson: Word('курируешь', 3),
  singular3rdPerson: Word('курирует', 3),
  plural1stPerson: Word('курируем', 3),
  plural2ndPerson: Word('курируете', 3),
  plural3rdPerson: Word('курируют', 3),
  masculinePast: Word('курировал', 3),
  femininePast: Word('курировала', 3),
  neuterPast: Word('курировало', 3),
  pluralPast: Word('курировали', 3),
  imperativeInformal: Word('курируй', 3),
  imperativeFormal: Word('курируйте', 3),
  imperfect: [],
};

perfectVerbs.set(курировать.name.text, курировать);

export { курировать };