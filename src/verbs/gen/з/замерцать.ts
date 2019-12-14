import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const замерцать: PerfectVerb = {
  name: Word('замерцать', 6),
  singular1stPerson: Word('замерцаю', 6),
  singular2ndPerson: Word('замерцаешь', 6),
  singular3rdPerson: Word('замерцает', 6),
  plural1stPerson: Word('замерцаем', 6),
  plural2ndPerson: Word('замерцаете', 6),
  plural3rdPerson: Word('замерцают', 6),
  masculinePast: Word('замерцал', 6),
  femininePast: Word('замерцала', 6),
  neuterPast: Word('замерцало', 6),
  pluralPast: Word('замерцали', 6),
  imperativeInformal: Word('замерцай', 6),
  imperativeFormal: Word('замерцайте', 6),
  imperfect: [],
};

perfectVerbs.set(замерцать.name.text, замерцать);

export { замерцать };