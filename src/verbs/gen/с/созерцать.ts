import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const созерцать: PerfectVerb = {
  name: Word('созерцать', 6),
  singular1stPerson: Word('созерцаю', 6),
  singular2ndPerson: Word('созерцаешь', 6),
  singular3rdPerson: Word('созерцает', 6),
  plural1stPerson: Word('созерцаем', 6),
  plural2ndPerson: Word('созерцаете', 6),
  plural3rdPerson: Word('созерцают', 6),
  masculinePast: Word('созерцал', 6),
  femininePast: Word('созерцала', 6),
  neuterPast: Word('созерцало', 6),
  pluralPast: Word('созерцали', 6),
  imperativeInformal: Word('созерцай', 6),
  imperativeFormal: Word('созерцайте', 6),
  imperfect: [],
};

perfectVerbs.set(созерцать.name.text, созерцать);

export { созерцать };