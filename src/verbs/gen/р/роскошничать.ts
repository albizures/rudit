import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const роскошничать: PerfectVerb = {
  name: Word('роскошничать', 4),
  singular1stPerson: Word('роскошничаю', 4),
  singular2ndPerson: Word('роскошничаешь', 4),
  singular3rdPerson: Word('роскошничает', 4),
  plural1stPerson: Word('роскошничаем', 4),
  plural2ndPerson: Word('роскошничаете', 4),
  plural3rdPerson: Word('роскошничают', 4),
  masculinePast: Word('роскошничал', 4),
  femininePast: Word('роскошничала', 4),
  neuterPast: Word('роскошничало', 4),
  pluralPast: Word('роскошничали', 4),
  imperativeInformal: Word('роскошничай', 4),
  imperativeFormal: Word('роскошничайте', 4),
  imperfect: [],
};

perfectVerbs.set(роскошничать.name.text, роскошничать);

export { роскошничать };