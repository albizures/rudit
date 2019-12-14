import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const выслужиться: PerfectVerb = {
  name: Word('выслужиться', 1),
  singular1stPerson: Word('выслужусь', 1),
  singular2ndPerson: Word('выслужишься', 1),
  singular3rdPerson: Word('выслужится', 1),
  plural1stPerson: Word('выслужимся', 1),
  plural2ndPerson: Word('выслужитесь', 1),
  plural3rdPerson: Word('выслужатся', 1),
  masculinePast: Word('выслужился', 1),
  femininePast: Word('выслужилась', 1),
  neuterPast: Word('выслужилось', 1),
  pluralPast: Word('выслужились', 1),
  imperativeInformal: Word('выслужись', 1),
  imperativeFormal: Word('выслужитесь', 1),
  imperfect: [],
};

perfectVerbs.set(выслужиться.name.text, выслужиться);

export { выслужиться };