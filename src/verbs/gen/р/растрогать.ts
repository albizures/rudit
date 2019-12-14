import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const растрогать: PerfectVerb = {
  name: Word('растрогать', 5),
  singular1stPerson: Word('растрогаю', 5),
  singular2ndPerson: Word('растрогаешь', 5),
  singular3rdPerson: Word('растрогает', 5),
  plural1stPerson: Word('растрогаем', 5),
  plural2ndPerson: Word('растрогаете', 5),
  plural3rdPerson: Word('растрогают', 5),
  masculinePast: Word('растрогал', 5),
  femininePast: Word('растрогала', 5),
  neuterPast: Word('растрогало', 5),
  pluralPast: Word('растрогали', 5),
  imperativeInformal: Word('растрогай', 5),
  imperativeFormal: Word('растрогайте', 5),
  imperfect: [],
};

perfectVerbs.set(растрогать.name.text, растрогать);

export { растрогать };