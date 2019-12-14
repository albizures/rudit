import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const стать: PerfectVerb = {
  name: Word('стать', 2),
  singular1stPerson: Word('стану', 2),
  singular2ndPerson: Word('станешь', 2),
  singular3rdPerson: Word('станет', 2),
  plural1stPerson: Word('станем', 2),
  plural2ndPerson: Word('станете', 2),
  plural3rdPerson: Word('станут', 2),
  masculinePast: Word('стал', 2),
  femininePast: Word('стала', 2),
  neuterPast: Word('стало', 2),
  pluralPast: Word('стали', 2),
  imperativeInformal: Word('стань', 2),
  imperativeFormal: Word('станьте', 2),
  imperfect: ['становиться'],
};

perfectVerbs.set(стать.name.text, стать);

export { стать };