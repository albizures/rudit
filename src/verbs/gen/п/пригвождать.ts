import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const пригвождать: PerfectVerb = {
  name: Word('пригвождать', 8),
  singular1stPerson: Word('пригвождаю', 8),
  singular2ndPerson: Word('пригвождаешь', 8),
  singular3rdPerson: Word('пригвождает', 8),
  plural1stPerson: Word('пригвождаем', 8),
  plural2ndPerson: Word('пригвождаете', 8),
  plural3rdPerson: Word('пригвождают', 8),
  masculinePast: Word('пригвождал', 8),
  femininePast: Word('пригвождала', 8),
  neuterPast: Word('пригвождало', 8),
  pluralPast: Word('пригвождали', 8),
  imperativeInformal: Word('пригвождай', 8),
  imperativeFormal: Word('пригвождайте', 8),
  imperfect: [],
};

perfectVerbs.set(пригвождать.name.text, пригвождать);

export { пригвождать };