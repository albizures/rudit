import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const подтягиваться: PerfectVerb = {
  name: Word('подтягиваться', 4),
  singular1stPerson: Word('подтягиваюсь', 4),
  singular2ndPerson: Word('подтягиваешься', 4),
  singular3rdPerson: Word('подтягивается', 4),
  plural1stPerson: Word('подтягиваемся', 4),
  plural2ndPerson: Word('подтягиваетесь', 4),
  plural3rdPerson: Word('подтягиваются', 4),
  masculinePast: Word('подтягивался', 4),
  femininePast: Word('подтягивалась', 4),
  neuterPast: Word('подтягивалось', 4),
  pluralPast: Word('подтягивались', 4),
  imperativeInformal: Word('подтягивайся', 4),
  imperativeFormal: Word('подтягивайтесь', 4),
  imperfect: [],
};

perfectVerbs.set(подтягиваться.name.text, подтягиваться);

export { подтягиваться };