import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const высвобождать: PerfectVerb = {
  name: Word('высвобождать', 9),
  singular1stPerson: Word('высвобождаю', 9),
  singular2ndPerson: Word('высвобождаешь', 9),
  singular3rdPerson: Word('высвобождает', 9),
  plural1stPerson: Word('высвобождаем', 9),
  plural2ndPerson: Word('высвобождаете', 9),
  plural3rdPerson: Word('высвобождают', 9),
  masculinePast: Word('высвобождал', 9),
  femininePast: Word('высвобождала', 9),
  neuterPast: Word('высвобождало', 9),
  pluralPast: Word('высвобождали', 9),
  imperativeInformal: Word('высвобождай', 9),
  imperativeFormal: Word('высвобождайте', 9),
  imperfect: [],
};

perfectVerbs.set(высвобождать.name.text, высвобождать);

export { высвобождать };