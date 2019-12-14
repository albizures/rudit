import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const подсчитывать: PerfectVerb = {
  name: Word('подсчитывать', 5),
  singular1stPerson: Word('подсчитываю', 5),
  singular2ndPerson: Word('подсчитываешь', 5),
  singular3rdPerson: Word('подсчитывает', 5),
  plural1stPerson: Word('подсчитываем', 5),
  plural2ndPerson: Word('подсчитываете', 5),
  plural3rdPerson: Word('подсчитывают', 5),
  masculinePast: Word('подсчитывал', 5),
  femininePast: Word('подсчитывала', 5),
  neuterPast: Word('подсчитывало', 5),
  pluralPast: Word('подсчитывали', 5),
  imperativeInformal: Word('подсчитывай', 5),
  imperativeFormal: Word('подсчитывайте', 5),
  imperfect: ['подсчитать'],
};

perfectVerbs.set(подсчитывать.name.text, подсчитывать);

export { подсчитывать };