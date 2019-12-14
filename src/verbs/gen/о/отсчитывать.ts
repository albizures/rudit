import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отсчитывать: PerfectVerb = {
  name: Word('отсчитывать', 4),
  singular1stPerson: Word('отсчитываю', 4),
  singular2ndPerson: Word('отсчитываешь', 4),
  singular3rdPerson: Word('отсчитывает', 4),
  plural1stPerson: Word('отсчитываем', 4),
  plural2ndPerson: Word('отсчитываете', 4),
  plural3rdPerson: Word('отсчитывают', 4),
  masculinePast: Word('отсчитывал', 4),
  femininePast: Word('отсчитывала', 4),
  neuterPast: Word('отсчитывало', 4),
  pluralPast: Word('отсчитывали', 4),
  imperativeInformal: Word('отсчитывай', 4),
  imperativeFormal: Word('отсчитывайте', 4),
  imperfect: [],
};

perfectVerbs.set(отсчитывать.name.text, отсчитывать);

export { отсчитывать };