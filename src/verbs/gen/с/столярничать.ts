import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const столярничать: PerfectVerb = {
  name: Word('столярничать', 4),
  singular1stPerson: Word('столярничаю', 4),
  singular2ndPerson: Word('столярничаешь', 4),
  singular3rdPerson: Word('столярничает', 4),
  plural1stPerson: Word('столярничаем', 4),
  plural2ndPerson: Word('столярничаете', 4),
  plural3rdPerson: Word('столярничают', 4),
  masculinePast: Word('столярничал', 4),
  femininePast: Word('столярничала', 4),
  neuterPast: Word('столярничало', 4),
  pluralPast: Word('столярничали', 4),
  imperativeInformal: Word('столярничай', 4),
  imperativeFormal: Word('столярничайте', 4),
  imperfect: [],
};

perfectVerbs.set(столярничать.name.text, столярничать);

export { столярничать };