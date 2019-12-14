import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const подавиться: PerfectVerb = {
  name: Word('подавиться', 5),
  singular1stPerson: Word('подавлюсь', 6),
  singular2ndPerson: Word('подавишься', 3),
  singular3rdPerson: Word('подавится', 3),
  plural1stPerson: Word('подавимся', 3),
  plural2ndPerson: Word('подавитесь', 3),
  plural3rdPerson: Word('подавятся', 3),
  masculinePast: Word('подавился', 5),
  femininePast: Word('подавилась', 5),
  neuterPast: Word('подавилось', 5),
  pluralPast: Word('подавились', 5),
  imperativeInformal: Word('подавись', 5),
  imperativeFormal: Word('подавитесь', 5),
  imperfect: [],
};

perfectVerbs.set(подавиться.name.text, подавиться);

export { подавиться };