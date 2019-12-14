import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const распахиваться: PerfectVerb = {
  name: Word('распахиваться', 4),
  singular1stPerson: Word('распахиваюсь', 4),
  singular2ndPerson: Word('распахиваешься', 4),
  singular3rdPerson: Word('распахивается', 4),
  plural1stPerson: Word('распахиваемся', 4),
  plural2ndPerson: Word('распахиваетесь', 4),
  plural3rdPerson: Word('распахиваются', 4),
  masculinePast: Word('распахивался', 4),
  femininePast: Word('распахивалась', 4),
  neuterPast: Word('распахивалось', 4),
  pluralPast: Word('распахивались', 4),
  imperativeInformal: Word('распахивайся', 4),
  imperativeFormal: Word('распахивайтесь', 4),
  imperfect: [],
};

perfectVerbs.set(распахиваться.name.text, распахиваться);

export { распахиваться };