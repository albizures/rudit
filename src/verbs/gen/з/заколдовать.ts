import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const заколдовать: PerfectVerb = {
  name: Word('заколдовать', 8),
  singular1stPerson: Word('заколдую', 6),
  singular2ndPerson: Word('заколдуешь', 6),
  singular3rdPerson: Word('заколдует', 6),
  plural1stPerson: Word('заколдуем', 6),
  plural2ndPerson: Word('заколдуете', 6),
  plural3rdPerson: Word('заколдуют', 6),
  masculinePast: Word('заколдовал', 8),
  femininePast: Word('заколдовала', 8),
  neuterPast: Word('заколдовало', 8),
  pluralPast: Word('заколдовали', 8),
  imperativeInformal: Word('заколдуй', 6),
  imperativeFormal: Word('заколдуйте', 6),
  imperfect: [],
};

perfectVerbs.set(заколдовать.name.text, заколдовать);

export { заколдовать };