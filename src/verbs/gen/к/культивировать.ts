import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const культивировать: PerfectVerb = {
  name: Word('культивировать', 7),
  singular1stPerson: Word('культивирую', 7),
  singular2ndPerson: Word('культивируешь', 7),
  singular3rdPerson: Word('культивирует', 7),
  plural1stPerson: Word('культивируем', 7),
  plural2ndPerson: Word('культивируете', 7),
  plural3rdPerson: Word('культивируют', 7),
  masculinePast: Word('культивировал', 7),
  femininePast: Word('культивировала', 7),
  neuterPast: Word('культивировало', 7),
  pluralPast: Word('культивировали', 7),
  imperativeInformal: Word('культивируй', 7),
  imperativeFormal: Word('культивируйте', 7),
  imperfect: [],
};

perfectVerbs.set(культивировать.name.text, культивировать);

export { культивировать };