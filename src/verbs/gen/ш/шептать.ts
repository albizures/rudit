import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const шептать: PerfectVerb = {
  name: Word('шептать', 4),
  singular1stPerson: Word('шепчу', 4),
  singular2ndPerson: Word('шепчешь', 1),
  singular3rdPerson: Word('шепчет', 1),
  plural1stPerson: Word('шепчем', 1),
  plural2ndPerson: Word('шепчете', 1),
  plural3rdPerson: Word('шепчут', 1),
  masculinePast: Word('шептал', 4),
  femininePast: Word('шептала', 4),
  neuterPast: Word('шептало', 4),
  pluralPast: Word('шептали', 4),
  imperativeInformal: Word('шепчи', 4),
  imperativeFormal: Word('шепчите', 4),
  imperfect: ['прошептать','шепнуть'],
};

perfectVerbs.set(шептать.name.text, шептать);

export { шептать };