import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const уладиться: PerfectVerb = {
  name: Word('уладиться', 2),
  singular1stPerson: Word('улажусь', 2),
  singular2ndPerson: Word('уладишься', 2),
  singular3rdPerson: Word('уладится', 2),
  plural1stPerson: Word('уладимся', 2),
  plural2ndPerson: Word('уладитесь', 2),
  plural3rdPerson: Word('уладятся', 2),
  masculinePast: Word('уладился', 2),
  femininePast: Word('уладилась', 2),
  neuterPast: Word('уладилось', 2),
  pluralPast: Word('уладились', 2),
  imperativeInformal: Word('уладься', 2),
  imperativeFormal: Word('уладьтесь', 2),
  imperfect: [],
};

perfectVerbs.set(уладиться.name.text, уладиться);

export { уладиться };