import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const расплавиться: PerfectVerb = {
  name: Word('расплавиться', 5),
  singular1stPerson: Word('расплавлюсь', 5),
  singular2ndPerson: Word('расплавишься', 5),
  singular3rdPerson: Word('расплавится', 5),
  plural1stPerson: Word('расплавимся', 5),
  plural2ndPerson: Word('расплавитесь', 5),
  plural3rdPerson: Word('расплавятся', 5),
  masculinePast: Word('расплавился', 5),
  femininePast: Word('расплавилась', 5),
  neuterPast: Word('расплавилось', 5),
  pluralPast: Word('расплавились', 5),
  imperativeInformal: Word('расплавься', 5),
  imperativeFormal: Word('расплавьтесь', 5),
  imperfect: [],
};

perfectVerbs.set(расплавиться.name.text, расплавиться);

export { расплавиться };