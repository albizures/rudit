import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const плавиться: PerfectVerb = {
  name: Word('плавиться', 2),
  singular1stPerson: Word('плавлюсь', 2),
  singular2ndPerson: Word('плавишься', 2),
  singular3rdPerson: Word('плавится', 2),
  plural1stPerson: Word('плавимся', 2),
  plural2ndPerson: Word('плавитесь', 2),
  plural3rdPerson: Word('плавятся', 2),
  masculinePast: Word('плавился', 2),
  femininePast: Word('плавилась', 2),
  neuterPast: Word('плавилось', 2),
  pluralPast: Word('плавились', 2),
  imperativeInformal: Word('плавься', 2),
  imperativeFormal: Word('плавьтесь', 2),
  imperfect: [],
};

perfectVerbs.set(плавиться.name.text, плавиться);

export { плавиться };