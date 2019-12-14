import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const различать: PerfectVerb = {
  name: Word('различать', 6),
  singular1stPerson: Word('различаю', 6),
  singular2ndPerson: Word('различаешь', 6),
  singular3rdPerson: Word('различает', 6),
  plural1stPerson: Word('различаем', 6),
  plural2ndPerson: Word('различаете', 6),
  plural3rdPerson: Word('различают', 6),
  masculinePast: Word('различал', 6),
  femininePast: Word('различала', 6),
  neuterPast: Word('различало', 6),
  pluralPast: Word('различали', 6),
  imperativeInformal: Word('различай', 6),
  imperativeFormal: Word('различайте', 6),
  imperfect: [],
};

perfectVerbs.set(различать.name.text, различать);

export { различать };