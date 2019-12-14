import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обвалиться: PerfectVerb = {
  name: Word('обвалиться', 5),
  singular1stPerson: Word('обвалюсь', 5),
  singular2ndPerson: Word('обвалишься', 3),
  singular3rdPerson: Word('обвалится', 3),
  plural1stPerson: Word('обвалимся', 3),
  plural2ndPerson: Word('обвалитесь', 3),
  plural3rdPerson: Word('обвалятся', 3),
  masculinePast: Word('обвалился', 5),
  femininePast: Word('обвалилась', 5),
  neuterPast: Word('обвалилось', 5),
  pluralPast: Word('обвалились', 5),
  imperativeInformal: Word('обвались', 5),
  imperativeFormal: Word('обвалитесь', 5),
  imperfect: [],
};

perfectVerbs.set(обвалиться.name.text, обвалиться);

export { обвалиться };