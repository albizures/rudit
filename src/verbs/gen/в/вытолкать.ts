import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вытолкать: PerfectVerb = {
  name: Word('вытолкать', 1),
  singular1stPerson: Word('вытолкаю', 1),
  singular2ndPerson: Word('вытолкаешь', 1),
  singular3rdPerson: Word('вытолкает', 1),
  plural1stPerson: Word('вытолкаем', 1),
  plural2ndPerson: Word('вытолкаете', 1),
  plural3rdPerson: Word('вытолкают', 1),
  masculinePast: Word('вытолкал', 1),
  femininePast: Word('вытолкала', 1),
  neuterPast: Word('вытолкало', 1),
  pluralPast: Word('вытолкали', 1),
  imperativeInformal: Word('вытолкай', 1),
  imperativeFormal: Word('вытолкайте', 1),
  imperfect: [],
};

perfectVerbs.set(вытолкать.name.text, вытолкать);

export { вытолкать };