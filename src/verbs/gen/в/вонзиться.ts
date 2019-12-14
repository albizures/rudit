import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вонзиться: PerfectVerb = {
  name: Word('вонзиться', 4),
  singular1stPerson: Word('вонжусь', 4),
  singular2ndPerson: Word('вонзишься', 4),
  singular3rdPerson: Word('вонзится', 4),
  plural1stPerson: Word('вонзимся', 4),
  plural2ndPerson: Word('вонзитесь', 4),
  plural3rdPerson: Word('вонзятся', 4),
  masculinePast: Word('вонзился', 4),
  femininePast: Word('вонзилась', 4),
  neuterPast: Word('вонзилось', 4),
  pluralPast: Word('вонзились', 4),
  imperativeInformal: Word('вонзись', 4),
  imperativeFormal: Word('вонзитесь', 4),
  imperfect: [],
};

perfectVerbs.set(вонзиться.name.text, вонзиться);

export { вонзиться };