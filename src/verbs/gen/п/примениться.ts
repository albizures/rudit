import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const примениться: PerfectVerb = {
  name: Word('примениться', 6),
  singular1stPerson: Word('применюсь', 6),
  singular2ndPerson: Word('применишься', 4),
  singular3rdPerson: Word('применится', 4),
  plural1stPerson: Word('применимся', 4),
  plural2ndPerson: Word('применитесь', 4),
  plural3rdPerson: Word('применятся', 4),
  masculinePast: Word('применился', 6),
  femininePast: Word('применилась', 6),
  neuterPast: Word('применилось', 6),
  pluralPast: Word('применились', 6),
  imperativeInformal: Word('применись', 6),
  imperativeFormal: Word('применитесь', 6),
  imperfect: ['применяться'],
};

perfectVerbs.set(примениться.name.text, примениться);

export { примениться };