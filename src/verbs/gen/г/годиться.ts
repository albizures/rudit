import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const годиться: PerfectVerb = {
  name: Word('годиться', 3),
  singular1stPerson: Word('гожусь', 3),
  singular2ndPerson: Word('годишься', 3),
  singular3rdPerson: Word('годится', 3),
  plural1stPerson: Word('годимся', 3),
  plural2ndPerson: Word('годитесь', 3),
  plural3rdPerson: Word('годятся', 3),
  masculinePast: Word('годился', 3),
  femininePast: Word('годилась', 3),
  neuterPast: Word('годилось', 3),
  pluralPast: Word('годились', 3),
  imperativeInformal: Word('годись', 3),
  imperativeFormal: Word('годитесь', 3),
  imperfect: [],
};

perfectVerbs.set(годиться.name.text, годиться);

export { годиться };