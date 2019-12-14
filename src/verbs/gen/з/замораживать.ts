import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const замораживать: PerfectVerb = {
  name: Word('замораживать', 5),
  singular1stPerson: Word('замораживаю', 5),
  singular2ndPerson: Word('замораживаешь', 5),
  singular3rdPerson: Word('замораживает', 5),
  plural1stPerson: Word('замораживаем', 5),
  plural2ndPerson: Word('замораживаете', 5),
  plural3rdPerson: Word('замораживают', 5),
  masculinePast: Word('замораживал', 5),
  femininePast: Word('замораживала', 5),
  neuterPast: Word('замораживало', 5),
  pluralPast: Word('замораживали', 5),
  imperativeInformal: Word('замораживай', 5),
  imperativeFormal: Word('замораживайте', 5),
  imperfect: [],
};

perfectVerbs.set(замораживать.name.text, замораживать);

export { замораживать };