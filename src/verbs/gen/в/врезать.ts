import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const врезать: PerfectVerb = {
  name: Word('врезать', 4),
  singular1stPerson: Word('врезаю', 4),
  singular2ndPerson: Word('врезаешь', 4),
  singular3rdPerson: Word('врезает', 4),
  plural1stPerson: Word('врезаем', 4),
  plural2ndPerson: Word('врезаете', 4),
  plural3rdPerson: Word('врезают', 4),
  masculinePast: Word('врезал', 4),
  femininePast: Word('врезала', 4),
  neuterPast: Word('врезало', 4),
  pluralPast: Word('врезали', 4),
  imperativeInformal: Word('врезай', 4),
  imperativeFormal: Word('врезайте', 4),
  imperfect: [],
};

perfectVerbs.set(врезать.name.text, врезать);

export { врезать };