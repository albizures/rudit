import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const запрягаться: PerfectVerb = {
  name: Word('запрягаться', 6),
  singular1stPerson: Word('запрягаюсь', 6),
  singular2ndPerson: Word('запрягаешься', 6),
  singular3rdPerson: Word('запрягается', 6),
  plural1stPerson: Word('запрягаемся', 6),
  plural2ndPerson: Word('запрягаетесь', 6),
  plural3rdPerson: Word('запрягаются', 6),
  masculinePast: Word('запрягался', 6),
  femininePast: Word('запрягалась', 6),
  neuterPast: Word('запрягалось', 6),
  pluralPast: Word('запрягались', 6),
  imperativeInformal: Word('запрягайся', 6),
  imperativeFormal: Word('запрягайтесь', 6),
  imperfect: [],
};

perfectVerbs.set(запрягаться.name.text, запрягаться);

export { запрягаться };