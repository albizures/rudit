import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const сразиться: PerfectVerb = {
  name: Word('сразиться', 4),
  singular1stPerson: Word('сражусь', 4),
  singular2ndPerson: Word('сразишься', 4),
  singular3rdPerson: Word('сразится', 4),
  plural1stPerson: Word('сразимся', 4),
  plural2ndPerson: Word('сразитесь', 4),
  plural3rdPerson: Word('сразятся', 4),
  masculinePast: Word('сразился', 4),
  femininePast: Word('сразилась', 4),
  neuterPast: Word('сразилось', 4),
  pluralPast: Word('сразились', 4),
  imperativeInformal: Word('сразись', 4),
  imperativeFormal: Word('сразитесь', 4),
  imperfect: ['сражаться'],
};

perfectVerbs.set(сразиться.name.text, сразиться);

export { сразиться };