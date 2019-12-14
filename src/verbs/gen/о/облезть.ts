import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const облезть: PerfectVerb = {
  name: Word('облезть', 3),
  singular1stPerson: Word('облезу', 3),
  singular2ndPerson: Word('облезешь', 3),
  singular3rdPerson: Word('облезет', 3),
  plural1stPerson: Word('облезем', 3),
  plural2ndPerson: Word('облезете', 3),
  plural3rdPerson: Word('облезут', 3),
  masculinePast: Word('облез', 3),
  femininePast: Word('облезла', 3),
  neuterPast: Word('облезло', 3),
  pluralPast: Word('облезли', 3),
  imperativeInformal: Word('облезь', 3),
  imperativeFormal: Word('облезьте', 3),
  imperfect: [],
};

perfectVerbs.set(облезть.name.text, облезть);

export { облезть };