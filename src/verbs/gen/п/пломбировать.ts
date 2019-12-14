import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const пломбировать: PerfectVerb = {
  name: Word('пломбировать', 9),
  singular1stPerson: Word('пломбирую', 7),
  singular2ndPerson: Word('пломбируешь', 7),
  singular3rdPerson: Word('пломбирует', 7),
  plural1stPerson: Word('пломбируем', 7),
  plural2ndPerson: Word('пломбируете', 7),
  plural3rdPerson: Word('пломбируют', 7),
  masculinePast: Word('пломбировал', 9),
  femininePast: Word('пломбировала', 9),
  neuterPast: Word('пломбировало', 9),
  pluralPast: Word('пломбировали', 9),
  imperativeInformal: Word('пломбируй', 7),
  imperativeFormal: Word('пломбируйте', 7),
  imperfect: [],
};

perfectVerbs.set(пломбировать.name.text, пломбировать);

export { пломбировать };