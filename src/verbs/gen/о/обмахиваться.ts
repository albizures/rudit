import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обмахиваться: PerfectVerb = {
  name: Word('обмахиваться', 3),
  singular1stPerson: Word('обмахиваюсь', 3),
  singular2ndPerson: Word('обмахиваешься', 3),
  singular3rdPerson: Word('обмахивается', 3),
  plural1stPerson: Word('обмахиваемся', 3),
  plural2ndPerson: Word('обмахиваетесь', 3),
  plural3rdPerson: Word('обмахиваются', 3),
  masculinePast: Word('обмахивался', 3),
  femininePast: Word('обмахивалась', 3),
  neuterPast: Word('обмахивалось', 3),
  pluralPast: Word('обмахивались', 3),
  imperativeInformal: Word('обмахивайся', 3),
  imperativeFormal: Word('обмахивайтесь', 3),
  imperfect: [],
};

perfectVerbs.set(обмахиваться.name.text, обмахиваться);

export { обмахиваться };