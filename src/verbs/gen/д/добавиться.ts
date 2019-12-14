import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const добавиться: PerfectVerb = {
  name: Word('добавиться', 3),
  singular1stPerson: Word('добавлюсь', 3),
  singular2ndPerson: Word('добавишься', 3),
  singular3rdPerson: Word('добавится', 3),
  plural1stPerson: Word('добавимся', 3),
  plural2ndPerson: Word('добавитесь', 3),
  plural3rdPerson: Word('добавятся', 3),
  masculinePast: Word('добавился', 3),
  femininePast: Word('добавилась', 3),
  neuterPast: Word('добавилось', 3),
  pluralPast: Word('добавились', 3),
  imperativeInformal: Word('добавься', 3),
  imperativeFormal: Word('добавьтесь', 3),
  imperfect: [],
};

perfectVerbs.set(добавиться.name.text, добавиться);

export { добавиться };