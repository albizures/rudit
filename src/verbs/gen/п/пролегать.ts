import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const пролегать: PerfectVerb = {
  name: Word('пролегать', 6),
  singular1stPerson: Word('пролегаю', 6),
  singular2ndPerson: Word('пролегаешь', 6),
  singular3rdPerson: Word('пролегает', 6),
  plural1stPerson: Word('пролегаем', 6),
  plural2ndPerson: Word('пролегаете', 6),
  plural3rdPerson: Word('пролегают', 6),
  masculinePast: Word('пролегал', 6),
  femininePast: Word('пролегала', 6),
  neuterPast: Word('пролегало', 6),
  pluralPast: Word('пролегали', 6),
  imperativeInformal: Word('пролегай', 6),
  imperativeFormal: Word('пролегайте', 6),
  imperfect: [],
};

perfectVerbs.set(пролегать.name.text, пролегать);

export { пролегать };