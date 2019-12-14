import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const командировать: PerfectVerb = {
  name: Word('командировать', 10),
  singular1stPerson: Word('командирую', 8),
  singular2ndPerson: Word('командируешь', 8),
  singular3rdPerson: Word('командирует', 8),
  plural1stPerson: Word('командируем', 8),
  plural2ndPerson: Word('командируете', 8),
  plural3rdPerson: Word('командируют', 8),
  masculinePast: Word('командировал', 10),
  femininePast: Word('командировала', 10),
  neuterPast: Word('командировало', 10),
  pluralPast: Word('командировали', 10),
  imperativeInformal: Word('командируй', 8),
  imperativeFormal: Word('командируйте', 8),
  imperfect: [],
};

perfectVerbs.set(командировать.name.text, командировать);

export { командировать };