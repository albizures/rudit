import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const раскачиваться: PerfectVerb = {
  name: Word('раскачиваться', 4),
  singular1stPerson: Word('раскачиваюсь', 4),
  singular2ndPerson: Word('раскачиваешься', 4),
  singular3rdPerson: Word('раскачивается', 4),
  plural1stPerson: Word('раскачиваемся', 4),
  plural2ndPerson: Word('раскачиваетесь', 4),
  plural3rdPerson: Word('раскачиваются', 4),
  masculinePast: Word('раскачивался', 4),
  femininePast: Word('раскачивалась', 4),
  neuterPast: Word('раскачивалось', 4),
  pluralPast: Word('раскачивались', 4),
  imperativeInformal: Word('раскачивайся', 4),
  imperativeFormal: Word('раскачивайтесь', 4),
  imperfect: [],
};

perfectVerbs.set(раскачиваться.name.text, раскачиваться);

export { раскачиваться };