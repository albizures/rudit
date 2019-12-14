import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const нарядиться: PerfectVerb = {
  name: Word('нарядиться', 5),
  singular1stPerson: Word('наряжусь', 5),
  singular2ndPerson: Word('нарядишься', 3),
  singular3rdPerson: Word('нарядится', 3),
  plural1stPerson: Word('нарядимся', 3),
  plural2ndPerson: Word('нарядитесь', 3),
  plural3rdPerson: Word('нарядятся', 3),
  masculinePast: Word('нарядился', 5),
  femininePast: Word('нарядилась', 5),
  neuterPast: Word('нарядилось', 5),
  pluralPast: Word('нарядились', 5),
  imperativeInformal: Word('нарядись', 5),
  imperativeFormal: Word('нарядитесь', 5),
  imperfect: [],
};

perfectVerbs.set(нарядиться.name.text, нарядиться);

export { нарядиться };