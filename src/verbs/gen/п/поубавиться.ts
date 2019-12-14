import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const поубавиться: PerfectVerb = {
  name: Word('поубавиться', 4),
  singular1stPerson: Word('поубавлюсь', 4),
  singular2ndPerson: Word('поубавишься', 4),
  singular3rdPerson: Word('поубавится', 4),
  plural1stPerson: Word('поубавимся', 4),
  plural2ndPerson: Word('поубавитесь', 4),
  plural3rdPerson: Word('поубавятся', 4),
  masculinePast: Word('поубавился', 4),
  femininePast: Word('поубавилась', 4),
  neuterPast: Word('поубавилось', 4),
  pluralPast: Word('поубавились', 4),
  imperativeInformal: Word('поубавься', 4),
  imperativeFormal: Word('поубавьтесь', 4),
  imperfect: [],
};

perfectVerbs.set(поубавиться.name.text, поубавиться);

export { поубавиться };