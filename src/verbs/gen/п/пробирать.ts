import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const пробирать: PerfectVerb = {
  name: Word('пробирать', 6),
  singular1stPerson: Word('пробираю', 6),
  singular2ndPerson: Word('пробираешь', 6),
  singular3rdPerson: Word('пробирает', 6),
  plural1stPerson: Word('пробираем', 6),
  plural2ndPerson: Word('пробираете', 6),
  plural3rdPerson: Word('пробирают', 6),
  masculinePast: Word('пробирал', 6),
  femininePast: Word('пробирала', 6),
  neuterPast: Word('пробирало', 6),
  pluralPast: Word('пробирали', 6),
  imperativeInformal: Word('пробирай', 6),
  imperativeFormal: Word('пробирайте', 6),
  imperfect: [],
};

perfectVerbs.set(пробирать.name.text, пробирать);

export { пробирать };