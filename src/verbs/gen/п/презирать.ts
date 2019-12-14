import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const презирать: PerfectVerb = {
  name: Word('презирать', 6),
  singular1stPerson: Word('презираю', 6),
  singular2ndPerson: Word('презираешь', 6),
  singular3rdPerson: Word('презирает', 6),
  plural1stPerson: Word('презираем', 6),
  plural2ndPerson: Word('презираете', 6),
  plural3rdPerson: Word('презирают', 6),
  masculinePast: Word('презирал', 6),
  femininePast: Word('презирала', 6),
  neuterPast: Word('презирало', 6),
  pluralPast: Word('презирали', 6),
  imperativeInformal: Word('презирай', 6),
  imperativeFormal: Word('презирайте', 6),
  imperfect: ['презреть'],
};

perfectVerbs.set(презирать.name.text, презирать);

export { презирать };