import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const интриговать: PerfectVerb = {
  name: Word('интриговать', 8),
  singular1stPerson: Word('интригую', 6),
  singular2ndPerson: Word('интригуешь', 6),
  singular3rdPerson: Word('интригует', 6),
  plural1stPerson: Word('интригуем', 6),
  plural2ndPerson: Word('интригуете', 6),
  plural3rdPerson: Word('интригуют', 6),
  masculinePast: Word('интриговал', 8),
  femininePast: Word('интриговала', 8),
  neuterPast: Word('интриговало', 8),
  pluralPast: Word('интриговали', 8),
  imperativeInformal: Word('интригуй', 6),
  imperativeFormal: Word('интригуйте', 6),
  imperfect: [],
};

perfectVerbs.set(интриговать.name.text, интриговать);

export { интриговать };