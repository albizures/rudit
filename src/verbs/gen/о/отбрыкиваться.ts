import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отбрыкиваться: PerfectVerb = {
  name: Word('отбрыкиваться', 4),
  singular1stPerson: Word('отбрыкиваюсь', 4),
  singular2ndPerson: Word('отбрыкиваешься', 4),
  singular3rdPerson: Word('отбрыкивается', 4),
  plural1stPerson: Word('отбрыкиваемся', 4),
  plural2ndPerson: Word('отбрыкиваетесь', 4),
  plural3rdPerson: Word('отбрыкиваются', 4),
  masculinePast: Word('отбрыкивался', 4),
  femininePast: Word('отбрыкивалась', 4),
  neuterPast: Word('отбрыкивалось', 4),
  pluralPast: Word('отбрыкивались', 4),
  imperativeInformal: Word('отбрыкивайся', 4),
  imperativeFormal: Word('отбрыкивайтесь', 4),
  imperfect: [],
};

perfectVerbs.set(отбрыкиваться.name.text, отбрыкиваться);

export { отбрыкиваться };