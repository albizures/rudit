import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const ворчать: PerfectVerb = {
  name: Word('ворчать', 4),
  singular1stPerson: Word('ворчу', 4),
  singular2ndPerson: Word('ворчишь', 4),
  singular3rdPerson: Word('ворчит', 4),
  plural1stPerson: Word('ворчим', 4),
  plural2ndPerson: Word('ворчите', 4),
  plural3rdPerson: Word('ворчат', 4),
  masculinePast: Word('ворчал', 4),
  femininePast: Word('ворчала', 4),
  neuterPast: Word('ворчало', 4),
  pluralPast: Word('ворчали', 4),
  imperativeInformal: Word('ворчи', 4),
  imperativeFormal: Word('ворчите', 4),
  imperfect: [],
};

perfectVerbs.set(ворчать.name.text, ворчать);

export { ворчать };