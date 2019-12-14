import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const беседовать: PerfectVerb = {
  name: Word('беседовать', 3),
  singular1stPerson: Word('беседую', 3),
  singular2ndPerson: Word('беседуешь', 3),
  singular3rdPerson: Word('беседует', 3),
  plural1stPerson: Word('беседуем', 3),
  plural2ndPerson: Word('беседуете', 3),
  plural3rdPerson: Word('беседуют', 3),
  masculinePast: Word('беседовал', 3),
  femininePast: Word('беседовала', 3),
  neuterPast: Word('беседовало', 3),
  pluralPast: Word('беседовали', 3),
  imperativeInformal: Word('беседуй', 3),
  imperativeFormal: Word('беседуйте', 3),
  imperfect: ['побеседовать'],
};

perfectVerbs.set(беседовать.name.text, беседовать);

export { беседовать };