import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const раздражить: PerfectVerb = {
  name: Word('раздражить', 7),
  singular1stPerson: Word('раздражу', 7),
  singular2ndPerson: Word('раздражишь', 7),
  singular3rdPerson: Word('раздражит', 7),
  plural1stPerson: Word('раздражим', 7),
  plural2ndPerson: Word('раздражите', 7),
  plural3rdPerson: Word('раздражат', 7),
  masculinePast: Word('раздражил', 7),
  femininePast: Word('раздражила', 7),
  neuterPast: Word('раздражило', 7),
  pluralPast: Word('раздражили', 7),
  imperativeInformal: Word('раздражи', 7),
  imperativeFormal: Word('раздражите', 7),
  imperfect: ['раздражать'],
};

perfectVerbs.set(раздражить.name.text, раздражить);

export { раздражить };