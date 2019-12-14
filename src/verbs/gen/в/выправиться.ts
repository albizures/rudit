import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const выправиться: PerfectVerb = {
  name: Word('выправиться', 1),
  singular1stPerson: Word('выправлюсь', 1),
  singular2ndPerson: Word('выправишься', 1),
  singular3rdPerson: Word('выправится', 1),
  plural1stPerson: Word('выправимся', 1),
  plural2ndPerson: Word('выправитесь', 1),
  plural3rdPerson: Word('выправятся', 1),
  masculinePast: Word('выправился', 1),
  femininePast: Word('выправилась', 1),
  neuterPast: Word('выправилось', 1),
  pluralPast: Word('выправились', 1),
  imperativeInformal: Word('выправись//вы'правься', 1),
  imperativeFormal: Word('выправьтесь', 1),
  imperfect: [],
};

perfectVerbs.set(выправиться.name.text, выправиться);

export { выправиться };