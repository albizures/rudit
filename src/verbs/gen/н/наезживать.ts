import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const наезживать: PerfectVerb = {
  name: Word('наезживать', 2),
  singular1stPerson: Word('наезживаю', 2),
  singular2ndPerson: Word('наезживаешь', 2),
  singular3rdPerson: Word('наезживает', 2),
  plural1stPerson: Word('наезживаем', 2),
  plural2ndPerson: Word('наезживаете', 2),
  plural3rdPerson: Word('наезживают', 2),
  masculinePast: Word('наезживал', 2),
  femininePast: Word('наезживала', 2),
  neuterPast: Word('наезживало', 2),
  pluralPast: Word('наезживали', 2),
  imperativeInformal: Word('наезживай', 2),
  imperativeFormal: Word('наезживайте', 2),
  imperfect: [],
};

perfectVerbs.set(наезживать.name.text, наезживать);

export { наезживать };