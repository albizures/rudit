import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const давиться: PerfectVerb = {
  name: Word('давиться', 3),
  singular1stPerson: Word('давлюсь', 4),
  singular2ndPerson: Word('давишься', 1),
  singular3rdPerson: Word('давится', 1),
  plural1stPerson: Word('давимся', 1),
  plural2ndPerson: Word('давитесь', 1),
  plural3rdPerson: Word('давятся', 1),
  masculinePast: Word('давился', 3),
  femininePast: Word('давилась', 3),
  neuterPast: Word('давилось', 3),
  pluralPast: Word('давились', 3),
  imperativeInformal: Word('давись', 3),
  imperativeFormal: Word('давитесь', 3),
  imperfect: [],
};

perfectVerbs.set(давиться.name.text, давиться);

export { давиться };