import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const выпрягаться: PerfectVerb = {
  name: Word('выпрягаться', 6),
  singular1stPerson: Word('выпрягаюсь', 6),
  singular2ndPerson: Word('выпрягаешься', 6),
  singular3rdPerson: Word('выпрягается', 6),
  plural1stPerson: Word('выпрягаемся', 6),
  plural2ndPerson: Word('выпрягаетесь', 6),
  plural3rdPerson: Word('выпрягаются', 6),
  masculinePast: Word('выпрягался', 6),
  femininePast: Word('выпрягалась', 6),
  neuterPast: Word('выпрягалось', 6),
  pluralPast: Word('выпрягались', 6),
  imperativeInformal: Word('выпрягайся', 6),
  imperativeFormal: Word('выпрягайтесь', 6),
  imperfect: [],
};

perfectVerbs.set(выпрягаться.name.text, выпрягаться);

export { выпрягаться };