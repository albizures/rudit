import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const поглощаться: PerfectVerb = {
  name: Word('поглощаться', 6),
  singular1stPerson: Word('поглощаюсь', 6),
  singular2ndPerson: Word('поглощаешься', 6),
  singular3rdPerson: Word('поглощается', 6),
  plural1stPerson: Word('поглощаемся', 6),
  plural2ndPerson: Word('поглощаетесь', 6),
  plural3rdPerson: Word('поглощаются', 6),
  masculinePast: Word('поглощался', 6),
  femininePast: Word('поглощалась', 6),
  neuterPast: Word('поглощалось', 6),
  pluralPast: Word('поглощались', 6),
  imperativeInformal: Word('поглощайся', 6),
  imperativeFormal: Word('поглощайтесь', 6),
  imperfect: [],
};

perfectVerbs.set(поглощаться.name.text, поглощаться);

export { поглощаться };