import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const кичиться: PerfectVerb = {
  name: Word('кичиться', 3),
  singular1stPerson: Word('кичусь', 3),
  singular2ndPerson: Word('кичишься', 3),
  singular3rdPerson: Word('кичится', 3),
  plural1stPerson: Word('кичимся', 3),
  plural2ndPerson: Word('кичитесь', 3),
  plural3rdPerson: Word('кичатся', 3),
  masculinePast: Word('кичился', 3),
  femininePast: Word('кичилась', 3),
  neuterPast: Word('кичилось', 3),
  pluralPast: Word('кичились', 3),
  imperativeInformal: Word('кичись', 3),
  imperativeFormal: Word('кичитесь', 3),
  imperfect: [],
};

perfectVerbs.set(кичиться.name.text, кичиться);

export { кичиться };