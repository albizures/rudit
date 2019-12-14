import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const удавиться: PerfectVerb = {
  name: Word('удавиться', 4),
  singular1stPerson: Word('удавлюсь', 5),
  singular2ndPerson: Word('удавишься', 2),
  singular3rdPerson: Word('удавится', 2),
  plural1stPerson: Word('удавимся', 2),
  plural2ndPerson: Word('удавитесь', 2),
  plural3rdPerson: Word('удавятся', 2),
  masculinePast: Word('удавился', 4),
  femininePast: Word('удавилась', 4),
  neuterPast: Word('удавилось', 4),
  pluralPast: Word('удавились', 4),
  imperativeInformal: Word('удавись', 4),
  imperativeFormal: Word('удавитесь', 4),
  imperfect: [],
};

perfectVerbs.set(удавиться.name.text, удавиться);

export { удавиться };