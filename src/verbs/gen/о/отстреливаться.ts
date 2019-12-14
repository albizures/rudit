import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отстреливаться: PerfectVerb = {
  name: Word('отстреливаться', 5),
  singular1stPerson: Word('отстреливаюсь', 5),
  singular2ndPerson: Word('отстреливаешься', 5),
  singular3rdPerson: Word('отстреливается', 5),
  plural1stPerson: Word('отстреливаемся', 5),
  plural2ndPerson: Word('отстреливаетесь', 5),
  plural3rdPerson: Word('отстреливаются', 5),
  masculinePast: Word('отстреливался', 5),
  femininePast: Word('отстреливалась', 5),
  neuterPast: Word('отстреливалось', 5),
  pluralPast: Word('отстреливались', 5),
  imperativeInformal: Word('отстреливайся', 5),
  imperativeFormal: Word('отстреливайтесь', 5),
  imperfect: [],
};

perfectVerbs.set(отстреливаться.name.text, отстреливаться);

export { отстреливаться };