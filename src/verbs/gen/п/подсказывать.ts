import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const подсказывать: PerfectVerb = {
  name: Word('подсказывать', 5),
  singular1stPerson: Word('подсказываю', 5),
  singular2ndPerson: Word('подсказываешь', 5),
  singular3rdPerson: Word('подсказывает', 5),
  plural1stPerson: Word('подсказываем', 5),
  plural2ndPerson: Word('подсказываете', 5),
  plural3rdPerson: Word('подсказывают', 5),
  masculinePast: Word('подсказывал', 5),
  femininePast: Word('подсказывала', 5),
  neuterPast: Word('подсказывало', 5),
  pluralPast: Word('подсказывали', 5),
  imperativeInformal: Word('подсказывай', 5),
  imperativeFormal: Word('подсказывайте', 5),
  imperfect: ['подсказать'],
};

perfectVerbs.set(подсказывать.name.text, подсказывать);

export { подсказывать };