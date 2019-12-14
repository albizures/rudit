import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const увешать: PerfectVerb = {
  name: Word('увешать', 2),
  singular1stPerson: Word('увешаю', 2),
  singular2ndPerson: Word('увешаешь', 2),
  singular3rdPerson: Word('увешает', 2),
  plural1stPerson: Word('увешаем', 2),
  plural2ndPerson: Word('увешаете', 2),
  plural3rdPerson: Word('увешают', 2),
  masculinePast: Word('увешал', 2),
  femininePast: Word('увешала', 2),
  neuterPast: Word('увешало', 2),
  pluralPast: Word('увешали', 2),
  imperativeInformal: Word('увешай', 2),
  imperativeFormal: Word('увешайте', 2),
  imperfect: [],
};

perfectVerbs.set(увешать.name.text, увешать);

export { увешать };