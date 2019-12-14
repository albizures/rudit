import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const подличать: PerfectVerb = {
  name: Word('подличать', 1),
  singular1stPerson: Word('подличаю', 1),
  singular2ndPerson: Word('подличаешь', 1),
  singular3rdPerson: Word('подличает', 1),
  plural1stPerson: Word('подличаем', 1),
  plural2ndPerson: Word('подличаете', 1),
  plural3rdPerson: Word('подличают', 1),
  masculinePast: Word('подличал', 1),
  femininePast: Word('подличала', 1),
  neuterPast: Word('подличало', 1),
  pluralPast: Word('подличали', 1),
  imperativeInformal: Word('подличай', 1),
  imperativeFormal: Word('подличайте', 1),
  imperfect: [],
};

perfectVerbs.set(подличать.name.text, подличать);

export { подличать };