import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const увиваться: PerfectVerb = {
  name: Word('увиваться', 4),
  singular1stPerson: Word('увиваюсь', 4),
  singular2ndPerson: Word('увиваешься', 4),
  singular3rdPerson: Word('увивается', 4),
  plural1stPerson: Word('увиваемся', 4),
  plural2ndPerson: Word('увиваетесь', 4),
  plural3rdPerson: Word('увиваются', 4),
  masculinePast: Word('увивался', 4),
  femininePast: Word('увивалась', 4),
  neuterPast: Word('увивалось', 4),
  pluralPast: Word('увивались', 4),
  imperativeInformal: Word('увивайся', 4),
  imperativeFormal: Word('увивайтесь', 4),
  imperfect: [],
};

perfectVerbs.set(увиваться.name.text, увиваться);

export { увиваться };