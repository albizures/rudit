import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const завораживать: PerfectVerb = {
  name: Word('завораживать', 5),
  singular1stPerson: Word('завораживаю', 5),
  singular2ndPerson: Word('завораживаешь', 5),
  singular3rdPerson: Word('завораживает', 5),
  plural1stPerson: Word('завораживаем', 5),
  plural2ndPerson: Word('завораживаете', 5),
  plural3rdPerson: Word('завораживают', 5),
  masculinePast: Word('завораживал', 5),
  femininePast: Word('завораживала', 5),
  neuterPast: Word('завораживало', 5),
  pluralPast: Word('завораживали', 5),
  imperativeInformal: Word('завораживай', 5),
  imperativeFormal: Word('завораживайте', 5),
  imperfect: [],
};

perfectVerbs.set(завораживать.name.text, завораживать);

export { завораживать };