import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const приостановиться: PerfectVerb = {
  name: Word('приостановиться', 10),
  singular1stPerson: Word('приостановлюсь', 11),
  singular2ndPerson: Word('приостановишься', 8),
  singular3rdPerson: Word('приостановится', 8),
  plural1stPerson: Word('приостановимся', 8),
  plural2ndPerson: Word('приостановитесь', 8),
  plural3rdPerson: Word('приостановятся', 8),
  masculinePast: Word('приостановился', 10),
  femininePast: Word('приостановилась', 10),
  neuterPast: Word('приостановилось', 10),
  pluralPast: Word('приостановились', 10),
  imperativeInformal: Word('приостановись', 10),
  imperativeFormal: Word('приостановитесь', 10),
  imperfect: [],
};

perfectVerbs.set(приостановиться.name.text, приостановиться);

export { приостановиться };