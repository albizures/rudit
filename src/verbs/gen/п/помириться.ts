import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const помириться: PerfectVerb = {
  name: Word('помириться', 5),
  singular1stPerson: Word('помирюсь', 5),
  singular2ndPerson: Word('помиришься', 5),
  singular3rdPerson: Word('помирится', 5),
  plural1stPerson: Word('помиримся', 5),
  plural2ndPerson: Word('помиритесь', 5),
  plural3rdPerson: Word('помирятся', 5),
  masculinePast: Word('помирился', 5),
  femininePast: Word('помирилась', 5),
  neuterPast: Word('помирилось', 5),
  pluralPast: Word('помирились', 5),
  imperativeInformal: Word('помирись', 5),
  imperativeFormal: Word('помиритесь', 5),
  imperfect: [],
};

perfectVerbs.set(помириться.name.text, помириться);

export { помириться };