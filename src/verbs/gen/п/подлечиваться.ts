import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const подлечиваться: PerfectVerb = {
  name: Word('подлечиваться', 4),
  singular1stPerson: Word('подлечиваюсь', 4),
  singular2ndPerson: Word('подлечиваешься', 4),
  singular3rdPerson: Word('подлечивается', 4),
  plural1stPerson: Word('подлечиваемся', 4),
  plural2ndPerson: Word('подлечиваетесь', 4),
  plural3rdPerson: Word('подлечиваются', 4),
  masculinePast: Word('подлечивался', 4),
  femininePast: Word('подлечивалась', 4),
  neuterPast: Word('подлечивалось', 4),
  pluralPast: Word('подлечивались', 4),
  imperativeInformal: Word('подлечивайся', 4),
  imperativeFormal: Word('подлечивайтесь', 4),
  imperfect: [],
};

perfectVerbs.set(подлечиваться.name.text, подлечиваться);

export { подлечиваться };