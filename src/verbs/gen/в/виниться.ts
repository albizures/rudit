import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const виниться: PerfectVerb = {
  name: Word('виниться', 3),
  singular1stPerson: Word('винюсь', 3),
  singular2ndPerson: Word('винишься', 3),
  singular3rdPerson: Word('винится', 3),
  plural1stPerson: Word('винимся', 3),
  plural2ndPerson: Word('винитесь', 3),
  plural3rdPerson: Word('винятся', 3),
  masculinePast: Word('винился', 3),
  femininePast: Word('винилась', 3),
  neuterPast: Word('винилось', 3),
  pluralPast: Word('винились', 3),
  imperativeInformal: Word('винись', 3),
  imperativeFormal: Word('винитесь', 3),
  imperfect: [],
};

perfectVerbs.set(виниться.name.text, виниться);

export { виниться };