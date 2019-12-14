import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const слежаться: PerfectVerb = {
  name: Word('слежаться', 4),
  singular1stPerson: Word('слежусь', 4),
  singular2ndPerson: Word('слежишься', 4),
  singular3rdPerson: Word('слежится', 4),
  plural1stPerson: Word('слежимся', 4),
  plural2ndPerson: Word('слежитесь', 4),
  plural3rdPerson: Word('слежатся', 4),
  masculinePast: Word('слежался', 4),
  femininePast: Word('слежалась', 4),
  neuterPast: Word('слежалось', 4),
  pluralPast: Word('слежались', 4),
  imperativeInformal: Word('слежись', 4),
  imperativeFormal: Word('слежитесь', 4),
  imperfect: [],
};

perfectVerbs.set(слежаться.name.text, слежаться);

export { слежаться };