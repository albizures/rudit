import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const навьючиваться: PerfectVerb = {
  name: Word('навьючиваться', 4),
  singular1stPerson: Word('навьючиваюсь', 4),
  singular2ndPerson: Word('навьючиваешься', 4),
  singular3rdPerson: Word('навьючивается', 4),
  plural1stPerson: Word('навьючиваемся', 4),
  plural2ndPerson: Word('навьючиваетесь', 4),
  plural3rdPerson: Word('навьючиваются', 4),
  masculinePast: Word('навьючивался', 4),
  femininePast: Word('навьючивалась', 4),
  neuterPast: Word('навьючивалось', 4),
  pluralPast: Word('навьючивались', 4),
  imperativeInformal: Word('навьючивайся', 4),
  imperativeFormal: Word('навьючивайтесь', 4),
  imperfect: [],
};

perfectVerbs.set(навьючиваться.name.text, навьючиваться);

export { навьючиваться };