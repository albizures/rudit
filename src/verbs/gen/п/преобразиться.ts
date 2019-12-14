import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const преобразиться: PerfectVerb = {
  name: Word('преобразиться', 8),
  singular1stPerson: Word('преображусь', 8),
  singular2ndPerson: Word('преобразишься', 8),
  singular3rdPerson: Word('преобразится', 8),
  plural1stPerson: Word('преобразимся', 8),
  plural2ndPerson: Word('преобразитесь', 8),
  plural3rdPerson: Word('преобразятся', 8),
  masculinePast: Word('преобразился', 8),
  femininePast: Word('преобразилась', 8),
  neuterPast: Word('преобразилось', 8),
  pluralPast: Word('преобразились', 8),
  imperativeInformal: Word('преобразись', 8),
  imperativeFormal: Word('преобразитесь', 8),
  imperfect: [],
};

perfectVerbs.set(преобразиться.name.text, преобразиться);

export { преобразиться };