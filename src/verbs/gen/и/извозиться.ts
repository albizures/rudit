import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const извозиться: PerfectVerb = {
  name: Word('извозиться', 5),
  singular1stPerson: Word('извожусь', 5),
  singular2ndPerson: Word('извозишься', 3),
  singular3rdPerson: Word('извозится', 3),
  plural1stPerson: Word('извозимся', 3),
  plural2ndPerson: Word('извозитесь', 3),
  plural3rdPerson: Word('извозятся', 3),
  masculinePast: Word('извозился', 5),
  femininePast: Word('извозилась', 5),
  neuterPast: Word('извозилось', 5),
  pluralPast: Word('извозились', 5),
  imperativeInformal: Word('извозись', 5),
  imperativeFormal: Word('извозитесь', 5),
  imperfect: [],
};

perfectVerbs.set(извозиться.name.text, извозиться);

export { извозиться };