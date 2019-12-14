import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вылежаться: PerfectVerb = {
  name: Word('вылежаться', 1),
  singular1stPerson: Word('вылежусь', 5),
  singular2ndPerson: Word('вылежишься', 5),
  singular3rdPerson: Word('вылежится', 5),
  plural1stPerson: Word('вылежимся', 5),
  plural2ndPerson: Word('вылежитесь', 5),
  plural3rdPerson: Word('вылежатся', 5),
  masculinePast: Word('вылежался', 1),
  femininePast: Word('вылежалась', 1),
  neuterPast: Word('вылежалось', 1),
  pluralPast: Word('вылежались', 1),
  imperativeInformal: Word('вылежись', 5),
  imperativeFormal: Word('вылежитесь', 5),
  imperfect: [],
};

perfectVerbs.set(вылежаться.name.text, вылежаться);

export { вылежаться };