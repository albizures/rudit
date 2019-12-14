import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const увязать: PerfectVerb = {
  name: Word('увязать', 4),
  singular1stPerson: Word('увяжу', 4),
  singular2ndPerson: Word('увяжешь', 2),
  singular3rdPerson: Word('увяжет', 2),
  plural1stPerson: Word('увяжем', 2),
  plural2ndPerson: Word('увяжете', 2),
  plural3rdPerson: Word('увяжут', 2),
  masculinePast: Word('увязал', 4),
  femininePast: Word('увязала', 4),
  neuterPast: Word('увязало', 4),
  pluralPast: Word('увязали', 4),
  imperativeInformal: Word('увяжи', 4),
  imperativeFormal: Word('увяжите', 4),
  imperfect: [],
};

perfectVerbs.set(увязать.name.text, увязать);

export { увязать };