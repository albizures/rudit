import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const разгладиться: PerfectVerb = {
  name: Word('разгладиться', 5),
  singular1stPerson: Word('разглажусь', 5),
  singular2ndPerson: Word('разгладишься', 5),
  singular3rdPerson: Word('разгладится', 5),
  plural1stPerson: Word('разгладимся', 5),
  plural2ndPerson: Word('разгладитесь', 5),
  plural3rdPerson: Word('разгладятся', 5),
  masculinePast: Word('разгладился', 5),
  femininePast: Word('разгладилась', 5),
  neuterPast: Word('разгладилось', 5),
  pluralPast: Word('разгладились', 5),
  imperativeInformal: Word('разгладься', 5),
  imperativeFormal: Word('разгладьтесь', 5),
  imperfect: [],
};

perfectVerbs.set(разгладиться.name.text, разгладиться);

export { разгладиться };