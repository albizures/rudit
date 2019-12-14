import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const проторчать: PerfectVerb = {
  name: Word('проторчать', 7),
  singular1stPerson: Word('проторчу', 7),
  singular2ndPerson: Word('проторчишь', 7),
  singular3rdPerson: Word('проторчит', 7),
  plural1stPerson: Word('проторчим', 7),
  plural2ndPerson: Word('проторчите', 7),
  plural3rdPerson: Word('проторчат', 7),
  masculinePast: Word('проторчал', 7),
  femininePast: Word('проторчала', 7),
  neuterPast: Word('проторчало', 7),
  pluralPast: Word('проторчали', 7),
  imperativeInformal: Word('проторчи', 7),
  imperativeFormal: Word('проторчите', 7),
  imperfect: [],
};

perfectVerbs.set(проторчать.name.text, проторчать);

export { проторчать };