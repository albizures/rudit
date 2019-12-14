import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const побеседовать: PerfectVerb = {
  name: Word('побеседовать', 5),
  singular1stPerson: Word('побеседую', 5),
  singular2ndPerson: Word('побеседуешь', 5),
  singular3rdPerson: Word('побеседует', 5),
  plural1stPerson: Word('побеседуем', 5),
  plural2ndPerson: Word('побеседуете', 5),
  plural3rdPerson: Word('побеседуют', 5),
  masculinePast: Word('побеседовал', 5),
  femininePast: Word('побеседовала', 5),
  neuterPast: Word('побеседовало', 5),
  pluralPast: Word('побеседовали', 5),
  imperativeInformal: Word('побеседуй', 5),
  imperativeFormal: Word('побеседуйте', 5),
  imperfect: [],
};

perfectVerbs.set(побеседовать.name.text, побеседовать);

export { побеседовать };