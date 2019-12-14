import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const нищенствовать: PerfectVerb = {
  name: Word('нищенствовать', 1),
  singular1stPerson: Word('нищенствую', 1),
  singular2ndPerson: Word('нищенствуешь', 1),
  singular3rdPerson: Word('нищенствует', 1),
  plural1stPerson: Word('нищенствуем', 1),
  plural2ndPerson: Word('нищенствуете', 1),
  plural3rdPerson: Word('нищенствуют', 1),
  masculinePast: Word('нищенствовал', 1),
  femininePast: Word('нищенствовала', 1),
  neuterPast: Word('нищенствовало', 1),
  pluralPast: Word('нищенствовали', 1),
  imperativeInformal: Word('нищенствуй', 1),
  imperativeFormal: Word('нищенствуйте', 1),
  imperfect: [],
};

perfectVerbs.set(нищенствовать.name.text, нищенствовать);

export { нищенствовать };