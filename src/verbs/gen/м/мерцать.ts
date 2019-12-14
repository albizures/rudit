import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const мерцать: PerfectVerb = {
  name: Word('мерцать', 4),
  singular1stPerson: Word('мерцаю', 4),
  singular2ndPerson: Word('мерцаешь', 4),
  singular3rdPerson: Word('мерцает', 4),
  plural1stPerson: Word('мерцаем', 4),
  plural2ndPerson: Word('мерцаете', 4),
  plural3rdPerson: Word('мерцают', 4),
  masculinePast: Word('мерцал', 4),
  femininePast: Word('мерцала', 4),
  neuterPast: Word('мерцало', 4),
  pluralPast: Word('мерцали', 4),
  imperativeInformal: Word('мерцай', 4),
  imperativeFormal: Word('мерцайте', 4),
  imperfect: [],
};

perfectVerbs.set(мерцать.name.text, мерцать);

export { мерцать };