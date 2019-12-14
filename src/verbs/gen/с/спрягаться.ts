import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const спрягаться: PerfectVerb = {
  name: Word('спрягаться', 5),
  singular1stPerson: Word('спрягаюсь', 5),
  singular2ndPerson: Word('спрягаешься', 5),
  singular3rdPerson: Word('спрягается', 5),
  plural1stPerson: Word('спрягаемся', 5),
  plural2ndPerson: Word('спрягаетесь', 5),
  plural3rdPerson: Word('спрягаются', 5),
  masculinePast: Word('спрягался', 5),
  femininePast: Word('спрягалась', 5),
  neuterPast: Word('спрягалось', 5),
  pluralPast: Word('спрягались', 5),
  imperativeInformal: Word('спрягайся', 5),
  imperativeFormal: Word('спрягайтесь', 5),
  imperfect: [],
};

perfectVerbs.set(спрягаться.name.text, спрягаться);

export { спрягаться };