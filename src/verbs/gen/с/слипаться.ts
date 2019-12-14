import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const слипаться: PerfectVerb = {
  name: Word('слипаться', 4),
  singular1stPerson: Word('слипаюсь', 4),
  singular2ndPerson: Word('слипаешься', 4),
  singular3rdPerson: Word('слипается', 4),
  plural1stPerson: Word('слипаемся', 4),
  plural2ndPerson: Word('слипаетесь', 4),
  plural3rdPerson: Word('слипаются', 4),
  masculinePast: Word('слипался', 4),
  femininePast: Word('слипалась', 4),
  neuterPast: Word('слипалось', 4),
  pluralPast: Word('слипались', 4),
  imperativeInformal: Word('слипайся', 4),
  imperativeFormal: Word('слипайтесь', 4),
  imperfect: [],
};

perfectVerbs.set(слипаться.name.text, слипаться);

export { слипаться };