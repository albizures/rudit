import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const кормиться: PerfectVerb = {
  name: Word('кормиться', 4),
  singular1stPerson: Word('кормлюсь', 5),
  singular2ndPerson: Word('кормишься', 1),
  singular3rdPerson: Word('кормится', 1),
  plural1stPerson: Word('кормимся', 1),
  plural2ndPerson: Word('кормитесь', 1),
  plural3rdPerson: Word('кормятся', 1),
  masculinePast: Word('кормился', 4),
  femininePast: Word('кормилась', 4),
  neuterPast: Word('кормилось', 4),
  pluralPast: Word('кормились', 4),
  imperativeInformal: Word('кормись', 4),
  imperativeFormal: Word('кормитесь', 4),
  imperfect: [],
};

perfectVerbs.set(кормиться.name.text, кормиться);

export { кормиться };