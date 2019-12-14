import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const крейаировать: PerfectVerb = {
  name: Word('крейаировать', 4),
  singular1stPerson: Word('крейсирую', 2),
  singular2ndPerson: Word('крейсируешь', 2),
  singular3rdPerson: Word('крейсирует', 2),
  plural1stPerson: Word('крейсируем', 2),
  plural2ndPerson: Word('крейсируете', 2),
  plural3rdPerson: Word('крейсируют', 2),
  masculinePast: Word('крейсировал', 2),
  femininePast: Word('крейсировала', 2),
  neuterPast: Word('крейсировало', 2),
  pluralPast: Word('крейсировали', 2),
  imperativeInformal: Word('крейсируй', 2),
  imperativeFormal: Word('крейсируйте', 2),
  imperfect: [],
};

perfectVerbs.set(крейаировать.name.text, крейаировать);

export { крейаировать };