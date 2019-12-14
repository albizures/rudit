import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const высвистывать: PerfectVerb = {
  name: Word('высвистывать', 4),
  singular1stPerson: Word('высвистываю', 4),
  singular2ndPerson: Word('высвистываешь', 4),
  singular3rdPerson: Word('высвистывает', 4),
  plural1stPerson: Word('высвистываем', 4),
  plural2ndPerson: Word('высвистываете', 4),
  plural3rdPerson: Word('высвистывают', 4),
  masculinePast: Word('высвистывал', 4),
  femininePast: Word('высвистывала', 4),
  neuterPast: Word('высвистывало', 4),
  pluralPast: Word('высвистывали', 4),
  imperativeInformal: Word('высвистывай', 4),
  imperativeFormal: Word('высвистывайте', 4),
  imperfect: [],
};

perfectVerbs.set(высвистывать.name.text, высвистывать);

export { высвистывать };