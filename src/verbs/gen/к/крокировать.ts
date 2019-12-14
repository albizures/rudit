import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const крокировать: PerfectVerb = {
  name: Word('крокировать', 4),
  singular1stPerson: Word('крокирую', 4),
  singular2ndPerson: Word('крокируешь', 4),
  singular3rdPerson: Word('крокирует', 4),
  plural1stPerson: Word('крокируем', 4),
  plural2ndPerson: Word('крокируете', 4),
  plural3rdPerson: Word('крокируют', 4),
  masculinePast: Word('крокировал', 4),
  femininePast: Word('крокировала', 4),
  neuterPast: Word('крокировало', 4),
  pluralPast: Word('крокировали', 4),
  imperativeInformal: Word('крокируй', 4),
  imperativeFormal: Word('крокируйте', 4),
  imperfect: [],
};

perfectVerbs.set(крокировать.name.text, крокировать);

export { крокировать };