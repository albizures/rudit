import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const продавиться: PerfectVerb = {
  name: Word('продавиться', 6),
  singular1stPerson: Word('продавлюсь', 7),
  singular2ndPerson: Word('продавишься', 4),
  singular3rdPerson: Word('продавится', 4),
  plural1stPerson: Word('продавимся', 4),
  plural2ndPerson: Word('продавитесь', 4),
  plural3rdPerson: Word('продавятся', 4),
  masculinePast: Word('продавился', 6),
  femininePast: Word('продавилась', 6),
  neuterPast: Word('продавилось', 6),
  pluralPast: Word('продавились', 6),
  imperativeInformal: Word('продавись', 6),
  imperativeFormal: Word('продавитесь', 6),
  imperfect: [],
};

perfectVerbs.set(продавиться.name.text, продавиться);

export { продавиться };