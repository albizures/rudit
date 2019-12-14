import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const дожимать: PerfectVerb = {
  name: Word('дожимать', 5),
  singular1stPerson: Word('дожимаю', 5),
  singular2ndPerson: Word('дожимаешь', 5),
  singular3rdPerson: Word('дожимает', 5),
  plural1stPerson: Word('дожимаем', 5),
  plural2ndPerson: Word('дожимаете', 5),
  plural3rdPerson: Word('дожимают', 5),
  masculinePast: Word('дожимал', 5),
  femininePast: Word('дожимала', 5),
  neuterPast: Word('дожимало', 5),
  pluralPast: Word('дожимали', 5),
  imperativeInformal: Word('дожимай', 5),
  imperativeFormal: Word('дожимайте', 5),
  imperfect: [],
};

perfectVerbs.set(дожимать.name.text, дожимать);

export { дожимать };