import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const журчать: PerfectVerb = {
  name: Word('журчать', 4),
  singular1stPerson: Word('журчу', 4),
  singular2ndPerson: Word('журчишь', 4),
  singular3rdPerson: Word('журчит', 4),
  plural1stPerson: Word('журчим', 4),
  plural2ndPerson: Word('журчите', 4),
  plural3rdPerson: Word('журчат', 4),
  masculinePast: Word('журчал', 4),
  femininePast: Word('журчала', 4),
  neuterPast: Word('журчало', 4),
  pluralPast: Word('журчали', 4),
  imperativeInformal: Word('журчи', 4),
  imperativeFormal: Word('журчите', 4),
  imperfect: [],
};

perfectVerbs.set(журчать.name.text, журчать);

export { журчать };