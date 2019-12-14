import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const влезть: PerfectVerb = {
  name: Word('влезть', 2),
  singular1stPerson: Word('влезу', 2),
  singular2ndPerson: Word('влезешь', 2),
  singular3rdPerson: Word('влезет', 2),
  plural1stPerson: Word('влезем', 2),
  plural2ndPerson: Word('влезете', 2),
  plural3rdPerson: Word('влезут', 2),
  masculinePast: Word('влез', 2),
  femininePast: Word('влезла', 2),
  neuterPast: Word('влезло', 2),
  pluralPast: Word('влезли', 2),
  imperativeInformal: Word('влезь', 2),
  imperativeFormal: Word('влезьте', 2),
  imperfect: [],
};

perfectVerbs.set(влезть.name.text, влезть);

export { влезть };