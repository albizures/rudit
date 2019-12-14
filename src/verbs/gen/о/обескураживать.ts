import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обескураживать: PerfectVerb = {
  name: Word('обескураживать', 7),
  singular1stPerson: Word('обескураживаю', 7),
  singular2ndPerson: Word('обескураживаешь', 7),
  singular3rdPerson: Word('обескураживает', 7),
  plural1stPerson: Word('обескураживаем', 7),
  plural2ndPerson: Word('обескураживаете', 7),
  plural3rdPerson: Word('обескураживают', 7),
  masculinePast: Word('обескураживал', 7),
  femininePast: Word('обескураживала', 7),
  neuterPast: Word('обескураживало', 7),
  pluralPast: Word('обескураживали', 7),
  imperativeInformal: Word('обескураживай', 7),
  imperativeFormal: Word('обескураживайте', 7),
  imperfect: [],
};

perfectVerbs.set(обескураживать.name.text, обескураживать);

export { обескураживать };