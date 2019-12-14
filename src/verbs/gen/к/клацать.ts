import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const клацать: PerfectVerb = {
  name: Word('клацать', 2),
  singular1stPerson: Word('клацаю', 2),
  singular2ndPerson: Word('клацаешь', 2),
  singular3rdPerson: Word('клацает', 2),
  plural1stPerson: Word('клацаем', 2),
  plural2ndPerson: Word('клацаете', 2),
  plural3rdPerson: Word('клацают', 2),
  masculinePast: Word('клацал', 2),
  femininePast: Word('клацала', 2),
  neuterPast: Word('клацало', 2),
  pluralPast: Word('клацали', 2),
  imperativeInformal: Word('клацай', 2),
  imperativeFormal: Word('клацайте', 2),
  imperfect: [],
};

perfectVerbs.set(клацать.name.text, клацать);

export { клацать };