import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const умирать: PerfectVerb = {
  name: Word('умирать', 4),
  singular1stPerson: Word('умираю', 4),
  singular2ndPerson: Word('умираешь', 4),
  singular3rdPerson: Word('умирает', 4),
  plural1stPerson: Word('умираем', 4),
  plural2ndPerson: Word('умираете', 4),
  plural3rdPerson: Word('умирают', 4),
  masculinePast: Word('умирал', 4),
  femininePast: Word('умирала', 4),
  neuterPast: Word('умирало', 4),
  pluralPast: Word('умирали', 4),
  imperativeInformal: Word('умирай', 4),
  imperativeFormal: Word('умирайте', 4),
  imperfect: ['умереть'],
};

perfectVerbs.set(умирать.name.text, умирать);

export { умирать };