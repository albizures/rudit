import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const дрейфовать: PerfectVerb = {
  name: Word('дрейфовать', 7),
  singular1stPerson: Word('дрейфую', 5),
  singular2ndPerson: Word('дрейфуешь', 5),
  singular3rdPerson: Word('дрейфует', 5),
  plural1stPerson: Word('дрейфуем', 5),
  plural2ndPerson: Word('дрейфуете', 5),
  plural3rdPerson: Word('дрейфуют', 5),
  masculinePast: Word('дрейфовал', 7),
  femininePast: Word('дрейфовала', 7),
  neuterPast: Word('дрейфовало', 7),
  pluralPast: Word('дрейфовали', 7),
  imperativeInformal: Word('дрейфуй', 5),
  imperativeFormal: Word('дрейфуйте', 5),
  imperfect: [],
};

perfectVerbs.set(дрейфовать.name.text, дрейфовать);

export { дрейфовать };