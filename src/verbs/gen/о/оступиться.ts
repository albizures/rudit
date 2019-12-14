import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const оступиться: PerfectVerb = {
  name: Word('оступиться', 5),
  singular1stPerson: Word('оступлюсь', 6),
  singular2ndPerson: Word('оступишься', 3),
  singular3rdPerson: Word('оступится', 3),
  plural1stPerson: Word('оступимся', 3),
  plural2ndPerson: Word('оступитесь', 3),
  plural3rdPerson: Word('оступятся', 3),
  masculinePast: Word('оступился', 5),
  femininePast: Word('оступилась', 5),
  neuterPast: Word('оступилось', 5),
  pluralPast: Word('оступились', 5),
  imperativeInformal: Word('оступись', 5),
  imperativeFormal: Word('оступитесь', 5),
  imperfect: [],
};

perfectVerbs.set(оступиться.name.text, оступиться);

export { оступиться };