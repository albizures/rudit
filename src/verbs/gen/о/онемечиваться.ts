import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const онемечиваться: PerfectVerb = {
  name: Word('онемечиваться', 4),
  singular1stPerson: Word('онемечиваюсь', 4),
  singular2ndPerson: Word('онемечиваешься', 4),
  singular3rdPerson: Word('онемечивается', 4),
  plural1stPerson: Word('онемечиваемся', 4),
  plural2ndPerson: Word('онемечиваетесь', 4),
  plural3rdPerson: Word('онемечиваются', 4),
  masculinePast: Word('онемечивался', 4),
  femininePast: Word('онемечивалась', 4),
  neuterPast: Word('онемечивалось', 4),
  pluralPast: Word('онемечивались', 4),
  imperativeInformal: Word('онемечивайся', 4),
  imperativeFormal: Word('онемечивайтесь', 4),
  imperfect: [],
};

perfectVerbs.set(онемечиваться.name.text, онемечиваться);

export { онемечиваться };