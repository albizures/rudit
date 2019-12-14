import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const залежаться: PerfectVerb = {
  name: Word('залежаться', 5),
  singular1stPerson: Word('залежусь', 5),
  singular2ndPerson: Word('залежишься', 5),
  singular3rdPerson: Word('залежится', 5),
  plural1stPerson: Word('залежимся', 5),
  plural2ndPerson: Word('залежитесь', 5),
  plural3rdPerson: Word('залежатся', 5),
  masculinePast: Word('залежался', 5),
  femininePast: Word('залежалась', 5),
  neuterPast: Word('залежалось', 5),
  pluralPast: Word('залежались', 5),
  imperativeInformal: Word('залежись', 5),
  imperativeFormal: Word('залежитесь', 5),
  imperfect: [],
};

perfectVerbs.set(залежаться.name.text, залежаться);

export { залежаться };