import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const прокипать: PerfectVerb = {
  name: Word('прокипать', 6),
  singular1stPerson: Word('прокипаю', 6),
  singular2ndPerson: Word('прокипаешь', 6),
  singular3rdPerson: Word('прокипает', 6),
  plural1stPerson: Word('прокипаем', 6),
  plural2ndPerson: Word('прокипаете', 6),
  plural3rdPerson: Word('прокипают', 6),
  masculinePast: Word('прокипал', 6),
  femininePast: Word('прокипала', 6),
  neuterPast: Word('прокипало', 6),
  pluralPast: Word('прокипали', 6),
  imperativeInformal: Word('прокипай', 6),
  imperativeFormal: Word('прокипайте', 6),
  imperfect: [],
};

perfectVerbs.set(прокипать.name.text, прокипать);

export { прокипать };