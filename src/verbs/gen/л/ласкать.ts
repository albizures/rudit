import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const ласкать: PerfectVerb = {
  name: Word('ласкать', 4),
  singular1stPerson: Word('ласкаю', 4),
  singular2ndPerson: Word('ласкаешь', 4),
  singular3rdPerson: Word('ласкает', 4),
  plural1stPerson: Word('ласкаем', 4),
  plural2ndPerson: Word('ласкаете', 4),
  plural3rdPerson: Word('ласкают', 4),
  masculinePast: Word('ласкал', 4),
  femininePast: Word('ласкала', 4),
  neuterPast: Word('ласкало', 4),
  pluralPast: Word('ласкали', 4),
  imperativeInformal: Word('ласкай', 4),
  imperativeFormal: Word('ласкайте', 4),
  imperfect: [],
};

perfectVerbs.set(ласкать.name.text, ласкать);

export { ласкать };