import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const околдовать: PerfectVerb = {
  name: Word('околдовать', 7),
  singular1stPerson: Word('околдую', 5),
  singular2ndPerson: Word('околдуешь', 5),
  singular3rdPerson: Word('околдует', 5),
  plural1stPerson: Word('околдуем', 5),
  plural2ndPerson: Word('околдуете', 5),
  plural3rdPerson: Word('околдуют', 5),
  masculinePast: Word('околдовал', 7),
  femininePast: Word('околдовала', 7),
  neuterPast: Word('околдовало', 7),
  pluralPast: Word('околдовали', 7),
  imperativeInformal: Word('околдуй', 5),
  imperativeFormal: Word('околдуйте', 5),
  imperfect: [],
};

perfectVerbs.set(околдовать.name.text, околдовать);

export { околдовать };