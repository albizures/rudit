import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const собачиться: PerfectVerb = {
  name: Word('собачиться', 3),
  singular1stPerson: Word('собачусь', 3),
  singular2ndPerson: Word('собачишься', 3),
  singular3rdPerson: Word('собачится', 3),
  plural1stPerson: Word('собачимся', 3),
  plural2ndPerson: Word('собачитесь', 3),
  plural3rdPerson: Word('собачатся', 3),
  masculinePast: Word('собачился', 3),
  femininePast: Word('собачилась', 3),
  neuterPast: Word('собачилось', 3),
  pluralPast: Word('собачились', 3),
  imperativeInformal: Word('собачься', 3),
  imperativeFormal: Word('собачьтесь', 3),
  imperfect: [],
};

perfectVerbs.set(собачиться.name.text, собачиться);

export { собачиться };