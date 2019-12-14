import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const нарушиться: PerfectVerb = {
  name: Word('нарушиться', 3),
  singular1stPerson: Word('нарушусь', 3),
  singular2ndPerson: Word('нарушишься', 3),
  singular3rdPerson: Word('нарушится', 3),
  plural1stPerson: Word('нарушимся', 3),
  plural2ndPerson: Word('нарушитесь', 3),
  plural3rdPerson: Word('нарушатся', 3),
  masculinePast: Word('нарушился', 3),
  femininePast: Word('нарушилась', 3),
  neuterPast: Word('нарушилось', 3),
  pluralPast: Word('нарушились', 3),
  imperativeInformal: Word('нарушься', 3),
  imperativeFormal: Word('нарушьтесь', 3),
  imperfect: [],
};

perfectVerbs.set(нарушиться.name.text, нарушиться);

export { нарушиться };