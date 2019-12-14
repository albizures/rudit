import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const потягаться: PerfectVerb = {
  name: Word('потягаться', 5),
  singular1stPerson: Word('потягаюсь', 5),
  singular2ndPerson: Word('потягаешься', 5),
  singular3rdPerson: Word('потягается', 5),
  plural1stPerson: Word('потягаемся', 5),
  plural2ndPerson: Word('потягаетесь', 5),
  plural3rdPerson: Word('потягаются', 5),
  masculinePast: Word('потягался', 5),
  femininePast: Word('потягалась', 5),
  neuterPast: Word('потягалось', 5),
  pluralPast: Word('потягались', 5),
  imperativeInformal: Word('потягайся', 5),
  imperativeFormal: Word('потягайтесь', 5),
  imperfect: [],
};

perfectVerbs.set(потягаться.name.text, потягаться);

export { потягаться };