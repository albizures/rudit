import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const порождать: PerfectVerb = {
  name: Word('порождать', 6),
  singular1stPerson: Word('порождаю', 6),
  singular2ndPerson: Word('порождаешь', 6),
  singular3rdPerson: Word('порождает', 6),
  plural1stPerson: Word('порождаем', 6),
  plural2ndPerson: Word('порождаете', 6),
  plural3rdPerson: Word('порождают', 6),
  masculinePast: Word('порождал', 6),
  femininePast: Word('порождала', 6),
  neuterPast: Word('порождало', 6),
  pluralPast: Word('порождали', 6),
  imperativeInformal: Word('порождай', 6),
  imperativeFormal: Word('порождайте', 6),
  imperfect: ['породить'],
};

perfectVerbs.set(порождать.name.text, порождать);

export { порождать };