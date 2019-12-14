import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const ластиться: PerfectVerb = {
  name: Word('ластиться', 1),
  singular1stPerson: Word('лащусь', 1),
  singular2ndPerson: Word('ластишься', 1),
  singular3rdPerson: Word('ластится', 1),
  plural1stPerson: Word('ластимся', 1),
  plural2ndPerson: Word('ластитесь', 1),
  plural3rdPerson: Word('ластятся', 1),
  masculinePast: Word('ластился', 1),
  femininePast: Word('ластилась', 1),
  neuterPast: Word('ластилось', 1),
  pluralPast: Word('ластились', 1),
  imperativeInformal: Word('ластись', 1),
  imperativeFormal: Word('ластитесь', 1),
  imperfect: [],
};

perfectVerbs.set(ластиться.name.text, ластиться);

export { ластиться };