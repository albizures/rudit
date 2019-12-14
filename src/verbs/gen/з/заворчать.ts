import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const заворчать: PerfectVerb = {
  name: Word('заворчать', 6),
  singular1stPerson: Word('заворчу', 6),
  singular2ndPerson: Word('заворчишь', 6),
  singular3rdPerson: Word('заворчит', 6),
  plural1stPerson: Word('заворчим', 6),
  plural2ndPerson: Word('заворчите', 6),
  plural3rdPerson: Word('заворчат', 6),
  masculinePast: Word('заворчал', 6),
  femininePast: Word('заворчала', 6),
  neuterPast: Word('заворчало', 6),
  pluralPast: Word('заворчали', 6),
  imperativeInformal: Word('заворчи', 6),
  imperativeFormal: Word('заворчите', 6),
  imperfect: [],
};

perfectVerbs.set(заворчать.name.text, заворчать);

export { заворчать };