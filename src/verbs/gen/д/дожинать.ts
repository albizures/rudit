import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const дожинать: PerfectVerb = {
  name: Word('дожинать', 5),
  singular1stPerson: Word('дожинаю', 5),
  singular2ndPerson: Word('дожинаешь', 5),
  singular3rdPerson: Word('дожинает', 5),
  plural1stPerson: Word('дожинаем', 5),
  plural2ndPerson: Word('дожинаете', 5),
  plural3rdPerson: Word('дожинают', 5),
  masculinePast: Word('дожинал', 5),
  femininePast: Word('дожинала', 5),
  neuterPast: Word('дожинало', 5),
  pluralPast: Word('дожинали', 5),
  imperativeInformal: Word('дожинай', 5),
  imperativeFormal: Word('дожинайте', 5),
  imperfect: [],
};

perfectVerbs.set(дожинать.name.text, дожинать);

export { дожинать };