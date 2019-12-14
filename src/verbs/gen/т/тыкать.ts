import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const тыкать: PerfectVerb = {
  name: Word('тыкать', 1),
  singular1stPerson: Word('тыкаю', 1),
  singular2ndPerson: Word('тыкаешь', 1),
  singular3rdPerson: Word('тыкает', 1),
  plural1stPerson: Word('тыкаем', 1),
  plural2ndPerson: Word('тыкаете', 1),
  plural3rdPerson: Word('тыкают', 1),
  masculinePast: Word('тыкал', 1),
  femininePast: Word('тыкала', 1),
  neuterPast: Word('тыкало', 1),
  pluralPast: Word('тыкали', 1),
  imperativeInformal: Word('тыкай', 1),
  imperativeFormal: Word('тыкайте', 1),
  imperfect: ['ткнуть'],
};

perfectVerbs.set(тыкать.name.text, тыкать);

export { тыкать };