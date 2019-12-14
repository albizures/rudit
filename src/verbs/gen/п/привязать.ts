import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const привязать: PerfectVerb = {
  name: Word('привязать', 6),
  singular1stPerson: Word('привяжу', 6),
  singular2ndPerson: Word('привяжешь', 4),
  singular3rdPerson: Word('привяжет', 4),
  plural1stPerson: Word('привяжем', 4),
  plural2ndPerson: Word('привяжете', 4),
  plural3rdPerson: Word('привяжут', 4),
  masculinePast: Word('привязал', 6),
  femininePast: Word('привязала', 6),
  neuterPast: Word('привязало', 6),
  pluralPast: Word('привязали', 6),
  imperativeInformal: Word('привяжи', 6),
  imperativeFormal: Word('привяжите', 6),
  imperfect: [],
};

perfectVerbs.set(привязать.name.text, привязать);

export { привязать };