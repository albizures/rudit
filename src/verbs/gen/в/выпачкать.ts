import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const выпачкать: PerfectVerb = {
  name: Word('выпачкать', 1),
  singular1stPerson: Word('выпачкаю', 1),
  singular2ndPerson: Word('выпачкаешь', 1),
  singular3rdPerson: Word('выпачкает', 1),
  plural1stPerson: Word('выпачкаем', 1),
  plural2ndPerson: Word('выпачкаете', 1),
  plural3rdPerson: Word('выпачкают', 1),
  masculinePast: Word('выпачкал', 1),
  femininePast: Word('выпачкала', 1),
  neuterPast: Word('выпачкало', 1),
  pluralPast: Word('выпачкали', 1),
  imperativeInformal: Word('выпачкай', 1),
  imperativeFormal: Word('выпачкайте', 1),
  imperfect: [],
};

perfectVerbs.set(выпачкать.name.text, выпачкать);

export { выпачкать };