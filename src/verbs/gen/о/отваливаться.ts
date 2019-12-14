import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отваливаться: PerfectVerb = {
  name: Word('отваливаться', 3),
  singular1stPerson: Word('отваливаюсь', 3),
  singular2ndPerson: Word('отваливаешься', 3),
  singular3rdPerson: Word('отваливается', 3),
  plural1stPerson: Word('отваливаемся', 3),
  plural2ndPerson: Word('отваливаетесь', 3),
  plural3rdPerson: Word('отваливаются', 3),
  masculinePast: Word('отваливался', 3),
  femininePast: Word('отваливалась', 3),
  neuterPast: Word('отваливалось', 3),
  pluralPast: Word('отваливались', 3),
  imperativeInformal: Word('отваливайся', 3),
  imperativeFormal: Word('отваливайтесь', 3),
  imperfect: [],
};

perfectVerbs.set(отваливаться.name.text, отваливаться);

export { отваливаться };