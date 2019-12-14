import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const сократиться: PerfectVerb = {
  name: Word('сократиться', 6),
  singular1stPerson: Word('сокращусь', 6),
  singular2ndPerson: Word('сократишься', 6),
  singular3rdPerson: Word('сократится', 6),
  plural1stPerson: Word('сократимся', 6),
  plural2ndPerson: Word('сократитесь', 6),
  plural3rdPerson: Word('сократятся', 6),
  masculinePast: Word('сократился', 6),
  femininePast: Word('сократилась', 6),
  neuterPast: Word('сократилось', 6),
  pluralPast: Word('сократились', 6),
  imperativeInformal: Word('сократись', 6),
  imperativeFormal: Word('сократитесь', 6),
  imperfect: [],
};

perfectVerbs.set(сократиться.name.text, сократиться);

export { сократиться };