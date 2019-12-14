import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const помечтать: PerfectVerb = {
  name: Word('помечтать', 6),
  singular1stPerson: Word('помечтаю', 6),
  singular2ndPerson: Word('помечтаешь', 6),
  singular3rdPerson: Word('помечтает', 6),
  plural1stPerson: Word('помечтаем', 6),
  plural2ndPerson: Word('помечтаете', 6),
  plural3rdPerson: Word('помечтают', 6),
  masculinePast: Word('помечтал', 6),
  femininePast: Word('помечтала', 6),
  neuterPast: Word('помечтало', 6),
  pluralPast: Word('помечтали', 6),
  imperativeInformal: Word('помечтай', 6),
  imperativeFormal: Word('помечтайте', 6),
  imperfect: [],
};

perfectVerbs.set(помечтать.name.text, помечтать);

export { помечтать };