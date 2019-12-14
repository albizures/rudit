import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const выкрасть: PerfectVerb = {
  name: Word('выкрасть', 1),
  singular1stPerson: Word('выкраду', 1),
  singular2ndPerson: Word('выкрадешь', 1),
  singular3rdPerson: Word('выкрадет', 1),
  plural1stPerson: Word('выкрадем', 1),
  plural2ndPerson: Word('выкрадете', 1),
  plural3rdPerson: Word('выкрадут', 1),
  masculinePast: Word('выкрал', 1),
  femininePast: Word('выкрала', 1),
  neuterPast: Word('выкрало', 1),
  pluralPast: Word('выкрали', 1),
  imperativeInformal: Word('выкради', 1),
  imperativeFormal: Word('выкрадите', 1),
  imperfect: [],
};

perfectVerbs.set(выкрасть.name.text, выкрасть);

export { выкрасть };