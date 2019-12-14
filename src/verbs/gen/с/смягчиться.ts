import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const смягчиться: PerfectVerb = {
  name: Word('смягчиться', 5),
  singular1stPerson: Word('смягчусь', 5),
  singular2ndPerson: Word('смягчишься', 5),
  singular3rdPerson: Word('смягчится', 5),
  plural1stPerson: Word('смягчимся', 5),
  plural2ndPerson: Word('смягчитесь', 5),
  plural3rdPerson: Word('смягчатся', 5),
  masculinePast: Word('смягчился', 5),
  femininePast: Word('смягчилась', 5),
  neuterPast: Word('смягчилось', 5),
  pluralPast: Word('смягчились', 5),
  imperativeInformal: Word('смягчись', 5),
  imperativeFormal: Word('смягчитесь', 5),
  imperfect: [],
};

perfectVerbs.set(смягчиться.name.text, смягчиться);

export { смягчиться };