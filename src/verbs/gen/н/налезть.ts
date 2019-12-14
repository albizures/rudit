import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const налезть: PerfectVerb = {
  name: Word('налезть', 3),
  singular1stPerson: Word('налезу', 3),
  singular2ndPerson: Word('налезешь', 3),
  singular3rdPerson: Word('налезет', 3),
  plural1stPerson: Word('налезем', 3),
  plural2ndPerson: Word('налезете', 3),
  plural3rdPerson: Word('налезут', 3),
  masculinePast: Word('налез', 3),
  femininePast: Word('налезла', 3),
  neuterPast: Word('налезло', 3),
  pluralPast: Word('налезли', 3),
  imperativeInformal: Word('налезь', 3),
  imperativeFormal: Word('налезьте', 3),
  imperfect: [],
};

perfectVerbs.set(налезть.name.text, налезть);

export { налезть };