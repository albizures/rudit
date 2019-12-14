import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const подушиться: PerfectVerb = {
  name: Word('подушиться', 5),
  singular1stPerson: Word('подушусь', 5),
  singular2ndPerson: Word('подушишься', 3),
  singular3rdPerson: Word('подушится', 3),
  plural1stPerson: Word('подушимся', 3),
  plural2ndPerson: Word('подушитесь', 3),
  plural3rdPerson: Word('подушатся', 3),
  masculinePast: Word('подушился', 5),
  femininePast: Word('подушилась', 5),
  neuterPast: Word('подушилось', 5),
  pluralPast: Word('подушились', 5),
  imperativeInformal: Word('подушись', 5),
  imperativeFormal: Word('подушитесь', 5),
  imperfect: [],
};

perfectVerbs.set(подушиться.name.text, подушиться);

export { подушиться };