import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const важничать: PerfectVerb = {
  name: Word('важничать', 1),
  singular1stPerson: Word('важничаю', 1),
  singular2ndPerson: Word('важничаешь', 1),
  singular3rdPerson: Word('важничает', 1),
  plural1stPerson: Word('важничаем', 1),
  plural2ndPerson: Word('важничаете', 1),
  plural3rdPerson: Word('важничают', 1),
  masculinePast: Word('важничал', 1),
  femininePast: Word('важничала', 1),
  neuterPast: Word('важничало', 1),
  pluralPast: Word('важничали', 1),
  imperativeInformal: Word('важничай', 1),
  imperativeFormal: Word('важничайте', 1),
  imperfect: [],
};

perfectVerbs.set(важничать.name.text, важничать);

export { важничать };