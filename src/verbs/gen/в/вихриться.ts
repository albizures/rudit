import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вихриться: PerfectVerb = {
  name: Word('вихриться', 1),
  singular1stPerson: Word('вихрюсь', 1),
  singular2ndPerson: Word('вихришься', 1),
  singular3rdPerson: Word('вихрится', 1),
  plural1stPerson: Word('вихримся', 1),
  plural2ndPerson: Word('вихритесь', 1),
  plural3rdPerson: Word('вихрятся', 1),
  masculinePast: Word('вихрился', 1),
  femininePast: Word('вихрилась', 1),
  neuterPast: Word('вихрилось', 1),
  pluralPast: Word('вихрились', 1),
  imperativeInformal: Word('вихрись', 1),
  imperativeFormal: Word('вихритесь', 1),
  imperfect: [],
};

perfectVerbs.set(вихриться.name.text, вихриться);

export { вихриться };