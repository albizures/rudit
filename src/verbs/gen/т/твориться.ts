import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const твориться: PerfectVerb = {
  name: Word('твориться', 4),
  singular1stPerson: Word('творюсь', 4),
  singular2ndPerson: Word('творишься', 4),
  singular3rdPerson: Word('творится', 4),
  plural1stPerson: Word('творимся', 4),
  plural2ndPerson: Word('творитесь', 4),
  plural3rdPerson: Word('творятся', 4),
  masculinePast: Word('творился', 4),
  femininePast: Word('творилась', 4),
  neuterPast: Word('творилось', 4),
  pluralPast: Word('творились', 4),
  imperativeInformal: Word('творись', 4),
  imperativeFormal: Word('творитесь', 4),
  imperfect: [],
};

perfectVerbs.set(твориться.name.text, твориться);

export { твориться };