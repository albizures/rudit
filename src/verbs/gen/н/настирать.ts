import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const настирать: PerfectVerb = {
  name: Word('настирать', 6),
  singular1stPerson: Word('настираю', 6),
  singular2ndPerson: Word('настираешь', 6),
  singular3rdPerson: Word('настирает', 6),
  plural1stPerson: Word('настираем', 6),
  plural2ndPerson: Word('настираете', 6),
  plural3rdPerson: Word('настирают', 6),
  masculinePast: Word('настирал', 6),
  femininePast: Word('настирала', 6),
  neuterPast: Word('настирало', 6),
  pluralPast: Word('настирали', 6),
  imperativeInformal: Word('настирай', 6),
  imperativeFormal: Word('настирайте', 6),
  imperfect: [],
};

perfectVerbs.set(настирать.name.text, настирать);

export { настирать };