import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const пиршествовать: PerfectVerb = {
  name: Word('пиршествовать', 4),
  singular1stPerson: Word('пиршествую', 4),
  singular2ndPerson: Word('пиршествуешь', 4),
  singular3rdPerson: Word('пиршествует', 4),
  plural1stPerson: Word('пиршествуем', 4),
  plural2ndPerson: Word('пиршествуете', 4),
  plural3rdPerson: Word('пиршествуют', 4),
  masculinePast: Word('пиршествовал', 4),
  femininePast: Word('пиршествовала', 4),
  neuterPast: Word('пиршествовало', 4),
  pluralPast: Word('пиршествовали', 4),
  imperativeInformal: Word('пиршествуй', 4),
  imperativeFormal: Word('пиршествуйте', 4),
  imperfect: [],
};

perfectVerbs.set(пиршествовать.name.text, пиршествовать);

export { пиршествовать };