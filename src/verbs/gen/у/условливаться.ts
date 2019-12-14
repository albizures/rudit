import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const условливаться: PerfectVerb = {
  name: Word('условливаться', 3),
  singular1stPerson: Word('условливаюсь', 3),
  singular2ndPerson: Word('условливаешься', 3),
  singular3rdPerson: Word('условливается', 3),
  plural1stPerson: Word('условливаемся', 3),
  plural2ndPerson: Word('условливаетесь', 3),
  plural3rdPerson: Word('условливаются', 3),
  masculinePast: Word('условливался', 3),
  femininePast: Word('условливалась', 3),
  neuterPast: Word('условливалось', 3),
  pluralPast: Word('условливались', 3),
  imperativeInformal: Word('условливайся', 3),
  imperativeFormal: Word('условливайтесь', 3),
  imperfect: [],
};

perfectVerbs.set(условливаться.name.text, условливаться);

export { условливаться };