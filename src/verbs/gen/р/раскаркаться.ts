import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const раскаркаться: PerfectVerb = {
  name: Word('раскаркаться', 4),
  singular1stPerson: Word('раскаркаюсь', 4),
  singular2ndPerson: Word('раскаркаешься', 4),
  singular3rdPerson: Word('раскаркается', 4),
  plural1stPerson: Word('раскаркаемся', 4),
  plural2ndPerson: Word('раскаркаетесь', 4),
  plural3rdPerson: Word('раскаркаются', 4),
  masculinePast: Word('раскаркался', 4),
  femininePast: Word('раскаркалась', 4),
  neuterPast: Word('раскаркалось', 4),
  pluralPast: Word('раскаркались', 4),
  imperativeInformal: Word('раскаркайся', 4),
  imperativeFormal: Word('раскаркайтесь', 4),
  imperfect: [],
};

perfectVerbs.set(раскаркаться.name.text, раскаркаться);

export { раскаркаться };