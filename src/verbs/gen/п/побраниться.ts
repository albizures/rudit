import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const побраниться: PerfectVerb = {
  name: Word('побраниться', 6),
  singular1stPerson: Word('побранюсь', 6),
  singular2ndPerson: Word('побранишься', 6),
  singular3rdPerson: Word('побранится', 6),
  plural1stPerson: Word('побранимся', 6),
  plural2ndPerson: Word('побранитесь', 6),
  plural3rdPerson: Word('побранятся', 6),
  masculinePast: Word('побранился', 6),
  femininePast: Word('побранилась', 6),
  neuterPast: Word('побранилось', 6),
  pluralPast: Word('побранились', 6),
  imperativeInformal: Word('побранись', 6),
  imperativeFormal: Word('побранитесь', 6),
  imperfect: [],
};

perfectVerbs.set(побраниться.name.text, побраниться);

export { побраниться };