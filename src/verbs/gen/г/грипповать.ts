import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const грипповать: PerfectVerb = {
  name: Word('грипповать', 7),
  singular1stPerson: Word('гриппую', 5),
  singular2ndPerson: Word('гриппуешь', 5),
  singular3rdPerson: Word('гриппует', 5),
  plural1stPerson: Word('гриппуем', 5),
  plural2ndPerson: Word('гриппуете', 5),
  plural3rdPerson: Word('гриппуют', 5),
  masculinePast: Word('грипповал', 7),
  femininePast: Word('грипповала', 7),
  neuterPast: Word('грипповало', 7),
  pluralPast: Word('грипповали', 7),
  imperativeInformal: Word('гриппуй', 5),
  imperativeFormal: Word('гриппуйте', 5),
  imperfect: [],
};

perfectVerbs.set(грипповать.name.text, грипповать);

export { грипповать };