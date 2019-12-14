import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const пересыпать: PerfectVerb = {
  name: Word('пересыпать', 7),
  singular1stPerson: Word('пересыпаю', 7),
  singular2ndPerson: Word('пересыпаешь', 7),
  singular3rdPerson: Word('пересыпает', 7),
  plural1stPerson: Word('пересыпаем', 7),
  plural2ndPerson: Word('пересыпаете', 7),
  plural3rdPerson: Word('пересыпают', 7),
  masculinePast: Word('пересыпал', 7),
  femininePast: Word('пересыпала', 7),
  neuterPast: Word('пересыпало', 7),
  pluralPast: Word('пересыпали', 7),
  imperativeInformal: Word('пересыпай', 7),
  imperativeFormal: Word('пересыпайте', 7),
  imperfect: [],
};

perfectVerbs.set(пересыпать.name.text, пересыпать);

export { пересыпать };