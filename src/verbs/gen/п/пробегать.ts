import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const пробегать: PerfectVerb = {
  name: Word('пробегать', 6),
  singular1stPerson: Word('пробегаю', 6),
  singular2ndPerson: Word('пробегаешь', 6),
  singular3rdPerson: Word('пробегает', 6),
  plural1stPerson: Word('пробегаем', 6),
  plural2ndPerson: Word('пробегаете', 6),
  plural3rdPerson: Word('пробегают', 6),
  masculinePast: Word('пробегал', 6),
  femininePast: Word('пробегала', 6),
  neuterPast: Word('пробегало', 6),
  pluralPast: Word('пробегали', 6),
  imperativeInformal: Word('пробегай', 6),
  imperativeFormal: Word('пробегайте', 6),
  imperfect: [],
};

perfectVerbs.set(пробегать.name.text, пробегать);

export { пробегать };