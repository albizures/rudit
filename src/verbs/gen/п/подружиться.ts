import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const подружиться: PerfectVerb = {
  name: Word('подружиться', 6),
  singular1stPerson: Word('подружусь', 6),
  singular2ndPerson: Word('подружишься', 4),
  singular3rdPerson: Word('подружится', 4),
  plural1stPerson: Word('подружимся', 4),
  plural2ndPerson: Word('подружитесь', 4),
  plural3rdPerson: Word('подружатся', 4),
  masculinePast: Word('подружился', 6),
  femininePast: Word('подружилась', 6),
  neuterPast: Word('подружилось', 6),
  pluralPast: Word('подружились', 6),
  imperativeInformal: Word('подружись', 6),
  imperativeFormal: Word('подружитесь', 6),
  imperfect: [],
};

perfectVerbs.set(подружиться.name.text, подружиться);

export { подружиться };