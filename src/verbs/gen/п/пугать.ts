import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const пугать: PerfectVerb = {
  name: Word('пугать', 3),
  singular1stPerson: Word('пугаю', 3),
  singular2ndPerson: Word('пугаешь', 3),
  singular3rdPerson: Word('пугает', 3),
  plural1stPerson: Word('пугаем', 3),
  plural2ndPerson: Word('пугаете', 3),
  plural3rdPerson: Word('пугают', 3),
  masculinePast: Word('пугал', 3),
  femininePast: Word('пугала', 3),
  neuterPast: Word('пугало', 3),
  pluralPast: Word('пугали', 3),
  imperativeInformal: Word('пугай', 3),
  imperativeFormal: Word('пугайте', 3),
  imperfect: ['испугать','напугать','пугнуть'],
};

perfectVerbs.set(пугать.name.text, пугать);

export { пугать };