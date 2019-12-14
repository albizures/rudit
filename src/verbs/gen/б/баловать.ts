import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const баловать: PerfectVerb = {
  name: Word('баловать', 5),
  singular1stPerson: Word('балую', 3),
  singular2ndPerson: Word('балуешь', 3),
  singular3rdPerson: Word('балует', 3),
  plural1stPerson: Word('балуем', 3),
  plural2ndPerson: Word('балуете', 3),
  plural3rdPerson: Word('балуют', 3),
  masculinePast: Word('баловал', 5),
  femininePast: Word('баловала', 5),
  neuterPast: Word('баловало', 5),
  pluralPast: Word('баловали', 5),
  imperativeInformal: Word('балуй', 3),
  imperativeFormal: Word('балуйте', 3),
  imperfect: [],
};

perfectVerbs.set(баловать.name.text, баловать);

export { баловать };