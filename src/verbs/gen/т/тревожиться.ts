import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const тревожиться: PerfectVerb = {
  name: Word('тревожиться', 4),
  singular1stPerson: Word('тревожусь', 4),
  singular2ndPerson: Word('тревожишься', 4),
  singular3rdPerson: Word('тревожится', 4),
  plural1stPerson: Word('тревожимся', 4),
  plural2ndPerson: Word('тревожитесь', 4),
  plural3rdPerson: Word('тревожатся', 4),
  masculinePast: Word('тревожился', 4),
  femininePast: Word('тревожилась', 4),
  neuterPast: Word('тревожилось', 4),
  pluralPast: Word('тревожились', 4),
  imperativeInformal: Word('тревожься', 4),
  imperativeFormal: Word('тревожьтесь', 4),
  imperfect: [],
};

perfectVerbs.set(тревожиться.name.text, тревожиться);

export { тревожиться };