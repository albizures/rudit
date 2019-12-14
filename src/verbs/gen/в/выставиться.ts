import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const выставиться: PerfectVerb = {
  name: Word('выставиться', 1),
  singular1stPerson: Word('выставлюсь', 1),
  singular2ndPerson: Word('выставишься', 1),
  singular3rdPerson: Word('выставится', 1),
  plural1stPerson: Word('выставимся', 1),
  plural2ndPerson: Word('выставитесь', 1),
  plural3rdPerson: Word('выставятся', 1),
  masculinePast: Word('выставился', 1),
  femininePast: Word('выставилась', 1),
  neuterPast: Word('выставилось', 1),
  pluralPast: Word('выставились', 1),
  imperativeInformal: Word('выставись//вы'ставься', 1),
  imperativeFormal: Word('выставьтесь', 1),
  imperfect: [],
};

perfectVerbs.set(выставиться.name.text, выставиться);

export { выставиться };