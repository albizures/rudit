import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const прибавиться: PerfectVerb = {
  name: Word('прибавиться', 4),
  singular1stPerson: Word('прибавлюсь', 4),
  singular2ndPerson: Word('прибавишься', 4),
  singular3rdPerson: Word('прибавится', 4),
  plural1stPerson: Word('прибавимся', 4),
  plural2ndPerson: Word('прибавитесь', 4),
  plural3rdPerson: Word('прибавятся', 4),
  masculinePast: Word('прибавился', 4),
  femininePast: Word('прибавилась', 4),
  neuterPast: Word('прибавилось', 4),
  pluralPast: Word('прибавились', 4),
  imperativeInformal: Word('прибавься', 4),
  imperativeFormal: Word('прибавьтесь', 4),
  imperfect: [],
};

perfectVerbs.set(прибавиться.name.text, прибавиться);

export { прибавиться };