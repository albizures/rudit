import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const дрессировать: PerfectVerb = {
  name: Word('дрессировать', 9),
  singular1stPerson: Word('дрессирую', 7),
  singular2ndPerson: Word('дрессируешь', 7),
  singular3rdPerson: Word('дрессирует', 7),
  plural1stPerson: Word('дрессируем', 7),
  plural2ndPerson: Word('дрессируете', 7),
  plural3rdPerson: Word('дрессируют', 7),
  masculinePast: Word('дрессировал', 9),
  femininePast: Word('дрессировала', 9),
  neuterPast: Word('дрессировало', 9),
  pluralPast: Word('дрессировали', 9),
  imperativeInformal: Word('дрессируй', 7),
  imperativeFormal: Word('дрессируйте', 7),
  imperfect: [],
};

perfectVerbs.set(дрессировать.name.text, дрессировать);

export { дрессировать };