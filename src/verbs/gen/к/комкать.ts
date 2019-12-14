import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const комкать: PerfectVerb = {
  name: Word('комкать', 1),
  singular1stPerson: Word('комкаю', 1),
  singular2ndPerson: Word('комкаешь', 1),
  singular3rdPerson: Word('комкает', 1),
  plural1stPerson: Word('комкаем', 1),
  plural2ndPerson: Word('комкаете', 1),
  plural3rdPerson: Word('комкают', 1),
  masculinePast: Word('комкал', 1),
  femininePast: Word('комкала', 1),
  neuterPast: Word('комкало', 1),
  pluralPast: Word('комкали', 1),
  imperativeInformal: Word('комкай', 1),
  imperativeFormal: Word('комкайте', 1),
  imperfect: [],
};

perfectVerbs.set(комкать.name.text, комкать);

export { комкать };