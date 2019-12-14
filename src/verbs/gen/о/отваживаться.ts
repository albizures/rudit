import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отваживаться: PerfectVerb = {
  name: Word('отваживаться', 3),
  singular1stPerson: Word('отваживаюсь', 3),
  singular2ndPerson: Word('отваживаешься', 3),
  singular3rdPerson: Word('отваживается', 3),
  plural1stPerson: Word('отваживаемся', 3),
  plural2ndPerson: Word('отваживаетесь', 3),
  plural3rdPerson: Word('отваживаются', 3),
  masculinePast: Word('отваживался', 3),
  femininePast: Word('отваживалась', 3),
  neuterPast: Word('отваживалось', 3),
  pluralPast: Word('отваживались', 3),
  imperativeInformal: Word('отваживайся', 3),
  imperativeFormal: Word('отваживайтесь', 3),
  imperfect: [],
};

perfectVerbs.set(отваживаться.name.text, отваживаться);

export { отваживаться };