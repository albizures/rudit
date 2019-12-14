import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const захаживать: PerfectVerb = {
  name: Word('захаживать', 3),
  singular1stPerson: Word('захаживаю', 3),
  singular2ndPerson: Word('захаживаешь', 3),
  singular3rdPerson: Word('захаживает', 3),
  plural1stPerson: Word('захаживаем', 3),
  plural2ndPerson: Word('захаживаете', 3),
  plural3rdPerson: Word('захаживают', 3),
  masculinePast: Word('захаживал', 3),
  femininePast: Word('захаживала', 3),
  neuterPast: Word('захаживало', 3),
  pluralPast: Word('захаживали', 3),
  imperativeInformal: Word('захаживай', 3),
  imperativeFormal: Word('захаживайте', 3),
  imperfect: [],
};

perfectVerbs.set(захаживать.name.text, захаживать);

export { захаживать };