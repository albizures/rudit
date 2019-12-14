import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const преставиться: PerfectVerb = {
  name: Word('преставиться', 5),
  singular1stPerson: Word('преставлюсь', 5),
  singular2ndPerson: Word('преставишься', 5),
  singular3rdPerson: Word('преставится', 5),
  plural1stPerson: Word('преставимся', 5),
  plural2ndPerson: Word('преставитесь', 5),
  plural3rdPerson: Word('преставятся', 5),
  masculinePast: Word('преставился', 5),
  femininePast: Word('преставилась', 5),
  neuterPast: Word('преставилось', 5),
  pluralPast: Word('преставились', 5),
  imperativeInformal: Word('преставься', 5),
  imperativeFormal: Word('преставьтесь', 5),
  imperfect: [],
};

perfectVerbs.set(преставиться.name.text, преставиться);

export { преставиться };