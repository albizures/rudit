import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const ссутулиться: PerfectVerb = {
  name: Word('ссутулиться', 4),
  singular1stPerson: Word('ссутулюсь', 4),
  singular2ndPerson: Word('ссутулишься', 4),
  singular3rdPerson: Word('ссутулится', 4),
  plural1stPerson: Word('ссутулимся', 4),
  plural2ndPerson: Word('ссутулитесь', 4),
  plural3rdPerson: Word('ссутулятся', 4),
  masculinePast: Word('ссутулился', 4),
  femininePast: Word('ссутулилась', 4),
  neuterPast: Word('ссутулилось', 4),
  pluralPast: Word('ссутулились', 4),
  imperativeInformal: Word('ссутулься', 4),
  imperativeFormal: Word('ссутультесь', 4),
  imperfect: [],
};

perfectVerbs.set(ссутулиться.name.text, ссутулиться);

export { ссутулиться };