import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const оживиться: PerfectVerb = {
  name: Word('оживиться', 4),
  singular1stPerson: Word('оживлюсь', 5),
  singular2ndPerson: Word('оживишься', 4),
  singular3rdPerson: Word('оживится', 4),
  plural1stPerson: Word('оживимся', 4),
  plural2ndPerson: Word('оживитесь', 4),
  plural3rdPerson: Word('оживятся', 4),
  masculinePast: Word('оживился', 4),
  femininePast: Word('оживилась', 4),
  neuterPast: Word('оживилось', 4),
  pluralPast: Word('оживились', 4),
  imperativeInformal: Word('оживись', 4),
  imperativeFormal: Word('оживитесь', 4),
  imperfect: [],
};

perfectVerbs.set(оживиться.name.text, оживиться);

export { оживиться };