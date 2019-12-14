import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const притулиться: PerfectVerb = {
  name: Word('притулиться', 6),
  singular1stPerson: Word('притулюсь', 6),
  singular2ndPerson: Word('притулишься', 6),
  singular3rdPerson: Word('притулится', 6),
  plural1stPerson: Word('притулимся', 6),
  plural2ndPerson: Word('притулитесь', 6),
  plural3rdPerson: Word('притулятся', 6),
  masculinePast: Word('притулился', 6),
  femininePast: Word('притулилась', 6),
  neuterPast: Word('притулилось', 6),
  pluralPast: Word('притулились', 6),
  imperativeInformal: Word('притулись', 6),
  imperativeFormal: Word('притулитесь', 6),
  imperfect: [],
};

perfectVerbs.set(притулиться.name.text, притулиться);

export { притулиться };