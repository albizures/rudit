import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const ладиться: PerfectVerb = {
  name: Word('ладиться', 1),
  singular1stPerson: Word('лажусь', 1),
  singular2ndPerson: Word('ладишься', 1),
  singular3rdPerson: Word('ладится', 1),
  plural1stPerson: Word('ладимся', 1),
  plural2ndPerson: Word('ладитесь', 1),
  plural3rdPerson: Word('ладятся', 1),
  masculinePast: Word('ладился', 1),
  femininePast: Word('ладилась', 1),
  neuterPast: Word('ладилось', 1),
  pluralPast: Word('ладились', 1),
  imperativeInformal: Word('ладься', 1),
  imperativeFormal: Word('ладьтесь', 1),
  imperfect: [],
};

perfectVerbs.set(ладиться.name.text, ладиться);

export { ладиться };