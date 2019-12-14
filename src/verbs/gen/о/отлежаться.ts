import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отлежаться: PerfectVerb = {
  name: Word('отлежаться', 5),
  singular1stPerson: Word('отлежусь', 5),
  singular2ndPerson: Word('отлежишься', 5),
  singular3rdPerson: Word('отлежится', 5),
  plural1stPerson: Word('отлежимся', 5),
  plural2ndPerson: Word('отлежитесь', 5),
  plural3rdPerson: Word('отлежатся', 5),
  masculinePast: Word('отлежался', 5),
  femininePast: Word('отлежалась', 5),
  neuterPast: Word('отлежалось', 5),
  pluralPast: Word('отлежались', 5),
  imperativeInformal: Word('отлежись', 5),
  imperativeFormal: Word('отлежитесь', 5),
  imperfect: [],
};

perfectVerbs.set(отлежаться.name.text, отлежаться);

export { отлежаться };