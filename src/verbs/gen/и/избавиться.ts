import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const избавиться: PerfectVerb = {
  name: Word('избавиться', 3),
  singular1stPerson: Word('избавлюсь', 3),
  singular2ndPerson: Word('избавишься', 3),
  singular3rdPerson: Word('избавится', 3),
  plural1stPerson: Word('избавимся', 3),
  plural2ndPerson: Word('избавитесь', 3),
  plural3rdPerson: Word('избавятся', 3),
  masculinePast: Word('избавился', 3),
  femininePast: Word('избавилась', 3),
  neuterPast: Word('избавилось', 3),
  pluralPast: Word('избавились', 3),
  imperativeInformal: Word('избавься', 3),
  imperativeFormal: Word('избавьтесь', 3),
  imperfect: [],
};

perfectVerbs.set(избавиться.name.text, избавиться);

export { избавиться };