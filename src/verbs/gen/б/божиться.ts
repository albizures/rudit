import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const божиться: PerfectVerb = {
  name: Word('божиться', 3),
  singular1stPerson: Word('божусь', 3),
  singular2ndPerson: Word('божишься', 3),
  singular3rdPerson: Word('божится', 3),
  plural1stPerson: Word('божимся', 3),
  plural2ndPerson: Word('божитесь', 3),
  plural3rdPerson: Word('божатся', 3),
  masculinePast: Word('божился', 3),
  femininePast: Word('божилась', 3),
  neuterPast: Word('божилось', 3),
  pluralPast: Word('божились', 3),
  imperativeInformal: Word('божись', 3),
  imperativeFormal: Word('божитесь', 3),
  imperfect: [],
};

perfectVerbs.set(божиться.name.text, божиться);

export { божиться };