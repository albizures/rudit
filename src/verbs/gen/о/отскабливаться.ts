import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отскабливаться: PerfectVerb = {
  name: Word('отскабливаться', 4),
  singular1stPerson: Word('отскабливаюсь', 4),
  singular2ndPerson: Word('отскабливаешься', 4),
  singular3rdPerson: Word('отскабливается', 4),
  plural1stPerson: Word('отскабливаемся', 4),
  plural2ndPerson: Word('отскабливаетесь', 4),
  plural3rdPerson: Word('отскабливаются', 4),
  masculinePast: Word('отскабливался', 4),
  femininePast: Word('отскабливалась', 4),
  neuterPast: Word('отскабливалось', 4),
  pluralPast: Word('отскабливались', 4),
  imperativeInformal: Word('отскабливайся', 4),
  imperativeFormal: Word('отскабливайтесь', 4),
  imperfect: [],
};

perfectVerbs.set(отскабливаться.name.text, отскабливаться);

export { отскабливаться };