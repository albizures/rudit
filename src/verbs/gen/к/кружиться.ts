import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const кружиться: PerfectVerb = {
  name: Word('кружиться', 4),
  singular1stPerson: Word('кружусь', 4),
  singular2ndPerson: Word('кружишься', 2),
  singular3rdPerson: Word('кружится', 2),
  plural1stPerson: Word('кружимся', 2),
  plural2ndPerson: Word('кружитесь', 2),
  plural3rdPerson: Word('кружатся', 2),
  masculinePast: Word('кружился', 4),
  femininePast: Word('кружилась', 4),
  neuterPast: Word('кружилось', 4),
  pluralPast: Word('кружились', 4),
  imperativeInformal: Word('кружись', 4),
  imperativeFormal: Word('кружитесь', 4),
  imperfect: [],
};

perfectVerbs.set(кружиться.name.text, кружиться);

export { кружиться };