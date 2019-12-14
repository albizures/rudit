import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const запахиваться: PerfectVerb = {
  name: Word('запахиваться', 3),
  singular1stPerson: Word('запахиваюсь', 3),
  singular2ndPerson: Word('запахиваешься', 3),
  singular3rdPerson: Word('запахивается', 3),
  plural1stPerson: Word('запахиваемся', 3),
  plural2ndPerson: Word('запахиваетесь', 3),
  plural3rdPerson: Word('запахиваются', 3),
  masculinePast: Word('запахивался', 3),
  femininePast: Word('запахивалась', 3),
  neuterPast: Word('запахивалось', 3),
  pluralPast: Word('запахивались', 3),
  imperativeInformal: Word('запахивайся', 3),
  imperativeFormal: Word('запахивайтесь', 3),
  imperfect: [],
};

perfectVerbs.set(запахиваться.name.text, запахиваться);

export { запахиваться };