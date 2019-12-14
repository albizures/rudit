import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const сплавиться: PerfectVerb = {
  name: Word('сплавиться', 3),
  singular1stPerson: Word('сплавлюсь', 3),
  singular2ndPerson: Word('сплавишься', 3),
  singular3rdPerson: Word('сплавится', 3),
  plural1stPerson: Word('сплавимся', 3),
  plural2ndPerson: Word('сплавитесь', 3),
  plural3rdPerson: Word('сплавятся', 3),
  masculinePast: Word('сплавился', 3),
  femininePast: Word('сплавилась', 3),
  neuterPast: Word('сплавилось', 3),
  pluralPast: Word('сплавились', 3),
  imperativeInformal: Word('сплавься', 3),
  imperativeFormal: Word('сплавьтесь', 3),
  imperfect: [],
};

perfectVerbs.set(сплавиться.name.text, сплавиться);

export { сплавиться };