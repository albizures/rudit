import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const наворчать: PerfectVerb = {
  name: Word('наворчать', 6),
  singular1stPerson: Word('наворчу', 6),
  singular2ndPerson: Word('наворчишь', 6),
  singular3rdPerson: Word('наворчит', 6),
  plural1stPerson: Word('наворчим', 6),
  plural2ndPerson: Word('наворчите', 6),
  plural3rdPerson: Word('наворчат', 6),
  masculinePast: Word('наворчал', 6),
  femininePast: Word('наворчала', 6),
  neuterPast: Word('наворчало', 6),
  pluralPast: Word('наворчали', 6),
  imperativeInformal: Word('наворчи', 6),
  imperativeFormal: Word('наворчите', 6),
  imperfect: [],
};

perfectVerbs.set(наворчать.name.text, наворчать);

export { наворчать };