import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const убавиться: PerfectVerb = {
  name: Word('убавиться', 2),
  singular1stPerson: Word('убавлюсь', 2),
  singular2ndPerson: Word('убавишься', 2),
  singular3rdPerson: Word('убавится', 2),
  plural1stPerson: Word('убавимся', 2),
  plural2ndPerson: Word('убавитесь', 2),
  plural3rdPerson: Word('убавятся', 2),
  masculinePast: Word('убавился', 2),
  femininePast: Word('убавилась', 2),
  neuterPast: Word('убавилось', 2),
  pluralPast: Word('убавились', 2),
  imperativeInformal: Word('убавься', 2),
  imperativeFormal: Word('убавьтесь', 2),
  imperfect: [],
};

perfectVerbs.set(убавиться.name.text, убавиться);

export { убавиться };