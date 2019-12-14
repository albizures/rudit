import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const выключиться: PerfectVerb = {
  name: Word('выключиться', 1),
  singular1stPerson: Word('выключусь', 1),
  singular2ndPerson: Word('выключишься', 1),
  singular3rdPerson: Word('выключится', 1),
  plural1stPerson: Word('выключимся', 1),
  plural2ndPerson: Word('выключитесь', 1),
  plural3rdPerson: Word('выключатся', 1),
  masculinePast: Word('выключился', 1),
  femininePast: Word('выключилась', 1),
  neuterPast: Word('выключилось', 1),
  pluralPast: Word('выключились', 1),
  imperativeInformal: Word('выключись', 1),
  imperativeFormal: Word('выключитесь', 1),
  imperfect: [],
};

perfectVerbs.set(выключиться.name.text, выключиться);

export { выключиться };