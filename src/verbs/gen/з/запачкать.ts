import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const запачкать: PerfectVerb = {
  name: Word('запачкать', 3),
  singular1stPerson: Word('запачкаю', 3),
  singular2ndPerson: Word('запачкаешь', 3),
  singular3rdPerson: Word('запачкает', 3),
  plural1stPerson: Word('запачкаем', 3),
  plural2ndPerson: Word('запачкаете', 3),
  plural3rdPerson: Word('запачкают', 3),
  masculinePast: Word('запачкал', 3),
  femininePast: Word('запачкала', 3),
  neuterPast: Word('запачкало', 3),
  pluralPast: Word('запачкали', 3),
  imperativeInformal: Word('запачкай', 3),
  imperativeFormal: Word('запачкайте', 3),
  imperfect: [],
};

perfectVerbs.set(запачкать.name.text, запачкать);

export { запачкать };