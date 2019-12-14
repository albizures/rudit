import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const сушиться: PerfectVerb = {
  name: Word('сушиться', 3),
  singular1stPerson: Word('сушусь', 3),
  singular2ndPerson: Word('сушишься', 1),
  singular3rdPerson: Word('сушится', 1),
  plural1stPerson: Word('сушимся', 1),
  plural2ndPerson: Word('сушитесь', 1),
  plural3rdPerson: Word('сушатся', 1),
  masculinePast: Word('сушился', 3),
  femininePast: Word('сушилась', 3),
  neuterPast: Word('сушилось', 3),
  pluralPast: Word('сушились', 3),
  imperativeInformal: Word('сушись', 3),
  imperativeFormal: Word('сушитесь', 3),
  imperfect: [],
};

perfectVerbs.set(сушиться.name.text, сушиться);

export { сушиться };