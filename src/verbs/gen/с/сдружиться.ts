import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const сдружиться: PerfectVerb = {
  name: Word('сдружиться', 5),
  singular1stPerson: Word('сдружусь', 5),
  singular2ndPerson: Word('сдружишься', 3),
  singular3rdPerson: Word('сдружится', 3),
  plural1stPerson: Word('сдружимся', 3),
  plural2ndPerson: Word('сдружитесь', 3),
  plural3rdPerson: Word('сдружатся', 3),
  masculinePast: Word('сдружился', 5),
  femininePast: Word('сдружилась', 5),
  neuterPast: Word('сдружилось', 5),
  pluralPast: Word('сдружились', 5),
  imperativeInformal: Word('сдружись', 5),
  imperativeFormal: Word('сдружитесь', 5),
  imperfect: [],
};

perfectVerbs.set(сдружиться.name.text, сдружиться);

export { сдружиться };