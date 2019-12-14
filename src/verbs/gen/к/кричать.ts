import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const кричать: PerfectVerb = {
  name: Word('кричать', 4),
  singular1stPerson: Word('кричу', 4),
  singular2ndPerson: Word('кричишь', 4),
  singular3rdPerson: Word('кричит', 4),
  plural1stPerson: Word('кричим', 4),
  plural2ndPerson: Word('кричите', 4),
  plural3rdPerson: Word('кричат', 4),
  masculinePast: Word('кричал', 4),
  femininePast: Word('кричала', 4),
  neuterPast: Word('кричало', 4),
  pluralPast: Word('кричали', 4),
  imperativeInformal: Word('кричи', 4),
  imperativeFormal: Word('кричите', 4),
  imperfect: ['закричать','крикнуть'],
};

perfectVerbs.set(кричать.name.text, кричать);

export { кричать };