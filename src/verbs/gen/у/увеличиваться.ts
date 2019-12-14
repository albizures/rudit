import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const увеличиваться: PerfectVerb = {
  name: Word('увеличиваться', 4),
  singular1stPerson: Word('увеличиваюсь', 4),
  singular2ndPerson: Word('увеличиваешься', 4),
  singular3rdPerson: Word('увеличивается', 4),
  plural1stPerson: Word('увеличиваемся', 4),
  plural2ndPerson: Word('увеличиваетесь', 4),
  plural3rdPerson: Word('увеличиваются', 4),
  masculinePast: Word('увеличивался', 4),
  femininePast: Word('увеличивалась', 4),
  neuterPast: Word('увеличивалось', 4),
  pluralPast: Word('увеличивались', 4),
  imperativeInformal: Word('увеличивайся', 4),
  imperativeFormal: Word('увеличивайтесь', 4),
  imperfect: [],
};

perfectVerbs.set(увеличиваться.name.text, увеличиваться);

export { увеличиваться };