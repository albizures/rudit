import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const дослушать: PerfectVerb = {
  name: Word('дослушать', 4),
  singular1stPerson: Word('дослушаю', 4),
  singular2ndPerson: Word('дослушаешь', 4),
  singular3rdPerson: Word('дослушает', 4),
  plural1stPerson: Word('дослушаем', 4),
  plural2ndPerson: Word('дослушаете', 4),
  plural3rdPerson: Word('дослушают', 4),
  masculinePast: Word('дослушал', 4),
  femininePast: Word('дослушала', 4),
  neuterPast: Word('дослушало', 4),
  pluralPast: Word('дослушали', 4),
  imperativeInformal: Word('дослушай', 4),
  imperativeFormal: Word('дослушайте', 4),
  imperfect: [],
};

perfectVerbs.set(дослушать.name.text, дослушать);

export { дослушать };