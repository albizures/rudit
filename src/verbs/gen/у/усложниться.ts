import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const усложниться: PerfectVerb = {
  name: Word('усложниться', 6),
  singular1stPerson: Word('усложнюсь', 6),
  singular2ndPerson: Word('усложнишься', 6),
  singular3rdPerson: Word('усложнится', 6),
  plural1stPerson: Word('усложнимся', 6),
  plural2ndPerson: Word('усложнитесь', 6),
  plural3rdPerson: Word('усложнятся', 6),
  masculinePast: Word('усложнился', 6),
  femininePast: Word('усложнилась', 6),
  neuterPast: Word('усложнилось', 6),
  pluralPast: Word('усложнились', 6),
  imperativeInformal: Word('усложнись', 6),
  imperativeFormal: Word('усложнитесь', 6),
  imperfect: [],
};

perfectVerbs.set(усложниться.name.text, усложниться);

export { усложниться };