import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const курчавиться: PerfectVerb = {
  name: Word('курчавиться', 4),
  singular1stPerson: Word('курчавлюсь', 4),
  singular2ndPerson: Word('курчавишься', 4),
  singular3rdPerson: Word('курчавится', 4),
  plural1stPerson: Word('курчавимся', 4),
  plural2ndPerson: Word('курчавитесь', 4),
  plural3rdPerson: Word('курчавятся', 4),
  masculinePast: Word('курчавился', 4),
  femininePast: Word('курчавилась', 4),
  neuterPast: Word('курчавилось', 4),
  pluralPast: Word('курчавились', 4),
  imperativeInformal: Word('курчавься', 4),
  imperativeFormal: Word('курчавьтесь', 4),
  imperfect: [],
};

perfectVerbs.set(курчавиться.name.text, курчавиться);

export { курчавиться };