import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const освобождать: PerfectVerb = {
  name: Word('освобождать', 8),
  singular1stPerson: Word('освобождаю', 8),
  singular2ndPerson: Word('освобождаешь', 8),
  singular3rdPerson: Word('освобождает', 8),
  plural1stPerson: Word('освобождаем', 8),
  plural2ndPerson: Word('освобождаете', 8),
  plural3rdPerson: Word('освобождают', 8),
  masculinePast: Word('освобождал', 8),
  femininePast: Word('освобождала', 8),
  neuterPast: Word('освобождало', 8),
  pluralPast: Word('освобождали', 8),
  imperativeInformal: Word('освобождай', 8),
  imperativeFormal: Word('освобождайте', 8),
  imperfect: ['освободить'],
};

perfectVerbs.set(освобождать.name.text, освобождать);

export { освобождать };