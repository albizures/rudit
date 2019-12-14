import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const надушиться: PerfectVerb = {
  name: Word('надушиться', 5),
  singular1stPerson: Word('надушусь', 5),
  singular2ndPerson: Word('надушишься', 3),
  singular3rdPerson: Word('надушится', 3),
  plural1stPerson: Word('надушимся', 3),
  plural2ndPerson: Word('надушитесь', 3),
  plural3rdPerson: Word('надушатся', 3),
  masculinePast: Word('надушился', 5),
  femininePast: Word('надушилась', 5),
  neuterPast: Word('надушилось', 5),
  pluralPast: Word('надушились', 5),
  imperativeInformal: Word('надушись', 5),
  imperativeFormal: Word('надушитесь', 5),
  imperfect: [],
};

perfectVerbs.set(надушиться.name.text, надушиться);

export { надушиться };