import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const завибрировать: PerfectVerb = {
  name: Word('завибрировать', 6),
  singular1stPerson: Word('завибрирую', 6),
  singular2ndPerson: Word('завибрируешь', 6),
  singular3rdPerson: Word('завибрирует', 6),
  plural1stPerson: Word('завибрируем', 6),
  plural2ndPerson: Word('завибрируете', 6),
  plural3rdPerson: Word('завибрируют', 6),
  masculinePast: Word('завибрировал', 6),
  femininePast: Word('завибрировала', 6),
  neuterPast: Word('завибрировало', 6),
  pluralPast: Word('завибрировали', 6),
  imperativeInformal: Word('завибрируй', 6),
  imperativeFormal: Word('завибрируйте', 6),
  imperfect: [],
};

perfectVerbs.set(завибрировать.name.text, завибрировать);

export { завибрировать };