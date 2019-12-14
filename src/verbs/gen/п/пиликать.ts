import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const пиликать: PerfectVerb = {
  name: Word('пиликать', 3),
  singular1stPerson: Word('пиликаю', 3),
  singular2ndPerson: Word('пиликаешь', 3),
  singular3rdPerson: Word('пиликает', 3),
  plural1stPerson: Word('пиликаем', 3),
  plural2ndPerson: Word('пиликаете', 3),
  plural3rdPerson: Word('пиликают', 3),
  masculinePast: Word('пиликал', 3),
  femininePast: Word('пиликала', 3),
  neuterPast: Word('пиликало', 3),
  pluralPast: Word('пиликали', 3),
  imperativeInformal: Word('пиликай', 3),
  imperativeFormal: Word('пиликайте', 3),
  imperfect: [],
};

perfectVerbs.set(пиликать.name.text, пиликать);

export { пиликать };