import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const шмыгать: PerfectVerb = {
  name: Word('шмыгать', 2),
  singular1stPerson: Word('шмыгаю', 2),
  singular2ndPerson: Word('шмыгаешь', 2),
  singular3rdPerson: Word('шмыгает', 2),
  plural1stPerson: Word('шмыгаем', 2),
  plural2ndPerson: Word('шмыгаете', 2),
  plural3rdPerson: Word('шмыгают', 2),
  masculinePast: Word('шмыгал', 2),
  femininePast: Word('шмыгала', 2),
  neuterPast: Word('шмыгало', 2),
  pluralPast: Word('шмыгали', 2),
  imperativeInformal: Word('шмыгай', 2),
  imperativeFormal: Word('шмыгайте', 2),
  imperfect: [],
};

perfectVerbs.set(шмыгать.name.text, шмыгать);

export { шмыгать };