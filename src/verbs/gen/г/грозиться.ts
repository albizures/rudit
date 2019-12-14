import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const грозиться: PerfectVerb = {
  name: Word('грозиться', 4),
  singular1stPerson: Word('грожусь', 4),
  singular2ndPerson: Word('грозишься', 4),
  singular3rdPerson: Word('грозится', 4),
  plural1stPerson: Word('грозимся', 4),
  plural2ndPerson: Word('грозитесь', 4),
  plural3rdPerson: Word('грозятся', 4),
  masculinePast: Word('грозился', 4),
  femininePast: Word('грозилась', 4),
  neuterPast: Word('грозилось', 4),
  pluralPast: Word('грозились', 4),
  imperativeInformal: Word('грозись', 4),
  imperativeFormal: Word('грозитесь', 4),
  imperfect: [],
};

perfectVerbs.set(грозиться.name.text, грозиться);

export { грозиться };