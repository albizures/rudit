import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const сгладиться: PerfectVerb = {
  name: Word('сгладиться', 3),
  singular1stPerson: Word('сглажусь', 3),
  singular2ndPerson: Word('сгладишься', 3),
  singular3rdPerson: Word('сгладится', 3),
  plural1stPerson: Word('сгладимся', 3),
  plural2ndPerson: Word('сгладитесь', 3),
  plural3rdPerson: Word('сгладятся', 3),
  masculinePast: Word('сгладился', 3),
  femininePast: Word('сгладилась', 3),
  neuterPast: Word('сгладилось', 3),
  pluralPast: Word('сгладились', 3),
  imperativeInformal: Word('сгладься', 3),
  imperativeFormal: Word('сгладьтесь', 3),
  imperfect: [],
};

perfectVerbs.set(сгладиться.name.text, сгладиться);

export { сгладиться };