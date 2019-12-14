import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const тягаться: PerfectVerb = {
  name: Word('тягаться', 3),
  singular1stPerson: Word('тягаюсь', 3),
  singular2ndPerson: Word('тягаешься', 3),
  singular3rdPerson: Word('тягается', 3),
  plural1stPerson: Word('тягаемся', 3),
  plural2ndPerson: Word('тягаетесь', 3),
  plural3rdPerson: Word('тягаются', 3),
  masculinePast: Word('тягался', 3),
  femininePast: Word('тягалась', 3),
  neuterPast: Word('тягалось', 3),
  pluralPast: Word('тягались', 3),
  imperativeInformal: Word('тягайся', 3),
  imperativeFormal: Word('тягайтесь', 3),
  imperfect: [],
};

perfectVerbs.set(тягаться.name.text, тягаться);

export { тягаться };