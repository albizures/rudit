import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const значиться: PerfectVerb = {
  name: Word('значиться', 2),
  singular1stPerson: Word('значусь', 2),
  singular2ndPerson: Word('значишься', 2),
  singular3rdPerson: Word('значится', 2),
  plural1stPerson: Word('значимся', 2),
  plural2ndPerson: Word('значитесь', 2),
  plural3rdPerson: Word('значатся', 2),
  masculinePast: Word('значился', 2),
  femininePast: Word('значилась', 2),
  neuterPast: Word('значилось', 2),
  pluralPast: Word('значились', 2),
  imperativeInformal: Word('значься', 2),
  imperativeFormal: Word('значьтесь', 2),
  imperfect: [],
};

perfectVerbs.set(значиться.name.text, значиться);

export { значиться };