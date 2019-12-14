import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const провозиться: PerfectVerb = {
  name: Word('провозиться', 6),
  singular1stPerson: Word('провожусь', 6),
  singular2ndPerson: Word('провозишься', 4),
  singular3rdPerson: Word('провозится', 4),
  plural1stPerson: Word('провозимся', 4),
  plural2ndPerson: Word('провозитесь', 4),
  plural3rdPerson: Word('провозятся', 4),
  masculinePast: Word('провозился', 6),
  femininePast: Word('провозилась', 6),
  neuterPast: Word('провозилось', 6),
  pluralPast: Word('провозились', 6),
  imperativeInformal: Word('провозись', 6),
  imperativeFormal: Word('провозитесь', 6),
  imperfect: [],
};

perfectVerbs.set(провозиться.name.text, провозиться);

export { провозиться };