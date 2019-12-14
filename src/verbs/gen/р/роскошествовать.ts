import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const роскошествовать: PerfectVerb = {
  name: Word('роскошествовать', 4),
  singular1stPerson: Word('роскошествую', 4),
  singular2ndPerson: Word('роскошествуешь', 4),
  singular3rdPerson: Word('роскошествует', 4),
  plural1stPerson: Word('роскошествуем', 4),
  plural2ndPerson: Word('роскошествуете', 4),
  plural3rdPerson: Word('роскошествуют', 4),
  masculinePast: Word('роскошествовал', 4),
  femininePast: Word('роскошествовала', 4),
  neuterPast: Word('роскошествовало', 4),
  pluralPast: Word('роскошествовали', 4),
  imperativeInformal: Word('роскошествуй', 4),
  imperativeFormal: Word('роскошествуйте', 4),
  imperfect: [],
};

perfectVerbs.set(роскошествовать.name.text, роскошествовать);

export { роскошествовать };