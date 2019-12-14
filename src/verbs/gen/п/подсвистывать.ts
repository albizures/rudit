import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const подсвистывать: PerfectVerb = {
  name: Word('подсвистывать', 5),
  singular1stPerson: Word('подсвистываю', 5),
  singular2ndPerson: Word('подсвистываешь', 5),
  singular3rdPerson: Word('подсвистывает', 5),
  plural1stPerson: Word('подсвистываем', 5),
  plural2ndPerson: Word('подсвистываете', 5),
  plural3rdPerson: Word('подсвистывают', 5),
  masculinePast: Word('подсвистывал', 5),
  femininePast: Word('подсвистывала', 5),
  neuterPast: Word('подсвистывало', 5),
  pluralPast: Word('подсвистывали', 5),
  imperativeInformal: Word('подсвистывай', 5),
  imperativeFormal: Word('подсвистывайте', 5),
  imperfect: [],
};

perfectVerbs.set(подсвистывать.name.text, подсвистывать);

export { подсвистывать };