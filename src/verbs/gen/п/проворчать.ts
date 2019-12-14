import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const проворчать: PerfectVerb = {
  name: Word('проворчать', 7),
  singular1stPerson: Word('проворчу', 7),
  singular2ndPerson: Word('проворчишь', 7),
  singular3rdPerson: Word('проворчит', 7),
  plural1stPerson: Word('проворчим', 7),
  plural2ndPerson: Word('проворчите', 7),
  plural3rdPerson: Word('проворчат', 7),
  masculinePast: Word('проворчал', 7),
  femininePast: Word('проворчала', 7),
  neuterPast: Word('проворчало', 7),
  pluralPast: Word('проворчали', 7),
  imperativeInformal: Word('проворчи', 7),
  imperativeFormal: Word('проворчите', 7),
  imperfect: [],
};

perfectVerbs.set(проворчать.name.text, проворчать);

export { проворчать };