import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const наживать: PerfectVerb = {
  name: Word('наживать', 5),
  singular1stPerson: Word('наживаю', 5),
  singular2ndPerson: Word('наживаешь', 5),
  singular3rdPerson: Word('наживает', 5),
  plural1stPerson: Word('наживаем', 5),
  plural2ndPerson: Word('наживаете', 5),
  plural3rdPerson: Word('наживают', 5),
  masculinePast: Word('наживал', 5),
  femininePast: Word('наживала', 5),
  neuterPast: Word('наживало', 5),
  pluralPast: Word('наживали', 5),
  imperativeInformal: Word('наживай', 5),
  imperativeFormal: Word('наживайте', 5),
  imperfect: [],
};

perfectVerbs.set(наживать.name.text, наживать);

export { наживать };