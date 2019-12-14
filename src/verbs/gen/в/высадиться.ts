import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const высадиться: PerfectVerb = {
  name: Word('высадиться', 1),
  singular1stPerson: Word('высажусь', 1),
  singular2ndPerson: Word('высадишься', 1),
  singular3rdPerson: Word('высадится', 1),
  plural1stPerson: Word('высадимся', 1),
  plural2ndPerson: Word('высадитесь', 1),
  plural3rdPerson: Word('высадятся', 1),
  masculinePast: Word('высадился', 1),
  femininePast: Word('высадилась', 1),
  neuterPast: Word('высадилось', 1),
  pluralPast: Word('высадились', 1),
  imperativeInformal: Word('высадись', 1),
  imperativeFormal: Word('высадитесь', 1),
  imperfect: [],
};

perfectVerbs.set(высадиться.name.text, высадиться);

export { высадиться };