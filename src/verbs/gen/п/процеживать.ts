import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const процеживать: PerfectVerb = {
  name: Word('процеживать', 4),
  singular1stPerson: Word('процеживаю', 4),
  singular2ndPerson: Word('процеживаешь', 4),
  singular3rdPerson: Word('процеживает', 4),
  plural1stPerson: Word('процеживаем', 4),
  plural2ndPerson: Word('процеживаете', 4),
  plural3rdPerson: Word('процеживают', 4),
  masculinePast: Word('процеживал', 4),
  femininePast: Word('процеживала', 4),
  neuterPast: Word('процеживало', 4),
  pluralPast: Word('процеживали', 4),
  imperativeInformal: Word('процеживай', 4),
  imperativeFormal: Word('процеживайте', 4),
  imperfect: [],
};

perfectVerbs.set(процеживать.name.text, процеживать);

export { процеживать };