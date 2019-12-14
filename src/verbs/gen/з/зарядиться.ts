import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const зарядиться: PerfectVerb = {
  name: Word('зарядиться', 5),
  singular1stPerson: Word('заряжусь', 5),
  singular2ndPerson: Word('зарядишься', 5),
  singular3rdPerson: Word('зарядится', 5),
  plural1stPerson: Word('зарядимся', 5),
  plural2ndPerson: Word('зарядитесь', 5),
  plural3rdPerson: Word('зарядятся', 5),
  masculinePast: Word('зарядился', 5),
  femininePast: Word('зарядилась', 5),
  neuterPast: Word('зарядилось', 5),
  pluralPast: Word('зарядились', 5),
  imperativeInformal: Word('зарядись', 5),
  imperativeFormal: Word('зарядитесь', 5),
  imperfect: [],
};

perfectVerbs.set(зарядиться.name.text, зарядиться);

export { зарядиться };