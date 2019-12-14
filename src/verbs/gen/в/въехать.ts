import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const въехать: PerfectVerb = {
  name: Word('въехать', 2),
  singular1stPerson: Word('въеду', 2),
  singular2ndPerson: Word('въедешь', 2),
  singular3rdPerson: Word('въедет', 2),
  plural1stPerson: Word('въедем', 2),
  plural2ndPerson: Word('въедете', 2),
  plural3rdPerson: Word('въедут', 2),
  masculinePast: Word('въехал', 2),
  femininePast: Word('въехала', 2),
  neuterPast: Word('въехало', 2),
  pluralPast: Word('въехали', 2),
  imperativeInformal: Word('въезжай', 5),
  imperativeFormal: Word('въезжайте', 5),
  imperfect: ['въезжать'],
};

perfectVerbs.set(въехать.name.text, въехать);

export { въехать };