import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const сутулиться: PerfectVerb = {
  name: Word('сутулиться', 3),
  singular1stPerson: Word('сутулюсь', 3),
  singular2ndPerson: Word('сутулишься', 3),
  singular3rdPerson: Word('сутулится', 3),
  plural1stPerson: Word('сутулимся', 3),
  plural2ndPerson: Word('сутулитесь', 3),
  plural3rdPerson: Word('сутулятся', 3),
  masculinePast: Word('сутулился', 3),
  femininePast: Word('сутулилась', 3),
  neuterPast: Word('сутулилось', 3),
  pluralPast: Word('сутулились', 3),
  imperativeInformal: Word('сутулься', 3),
  imperativeFormal: Word('сутультесь', 3),
  imperfect: [],
};

perfectVerbs.set(сутулиться.name.text, сутулиться);

export { сутулиться };