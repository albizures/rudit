import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const позабавиться: PerfectVerb = {
  name: Word('позабавиться', 5),
  singular1stPerson: Word('позабавлюсь', 5),
  singular2ndPerson: Word('позабавишься', 5),
  singular3rdPerson: Word('позабавится', 5),
  plural1stPerson: Word('позабавимся', 5),
  plural2ndPerson: Word('позабавитесь', 5),
  plural3rdPerson: Word('позабавятся', 5),
  masculinePast: Word('позабавился', 5),
  femininePast: Word('позабавилась', 5),
  neuterPast: Word('позабавилось', 5),
  pluralPast: Word('позабавились', 5),
  imperativeInformal: Word('позабавься', 5),
  imperativeFormal: Word('позабавьтесь', 5),
  imperfect: [],
};

perfectVerbs.set(позабавиться.name.text, позабавиться);

export { позабавиться };