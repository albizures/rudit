import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const раскланиваться: PerfectVerb = {
  name: Word('раскланиваться', 5),
  singular1stPerson: Word('раскланиваюсь', 5),
  singular2ndPerson: Word('раскланиваешься', 5),
  singular3rdPerson: Word('раскланивается', 5),
  plural1stPerson: Word('раскланиваемся', 5),
  plural2ndPerson: Word('раскланиваетесь', 5),
  plural3rdPerson: Word('раскланиваются', 5),
  masculinePast: Word('раскланивался', 5),
  femininePast: Word('раскланивалась', 5),
  neuterPast: Word('раскланивалось', 5),
  pluralPast: Word('раскланивались', 5),
  imperativeInformal: Word('раскланивайся', 5),
  imperativeFormal: Word('раскланивайтесь', 5),
  imperfect: [],
};

perfectVerbs.set(раскланиваться.name.text, раскланиваться);

export { раскланиваться };