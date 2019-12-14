import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const пережигать: PerfectVerb = {
  name: Word('пережигать', 7),
  singular1stPerson: Word('пережигаю', 7),
  singular2ndPerson: Word('пережигаешь', 7),
  singular3rdPerson: Word('пережигает', 7),
  plural1stPerson: Word('пережигаем', 7),
  plural2ndPerson: Word('пережигаете', 7),
  plural3rdPerson: Word('пережигают', 7),
  masculinePast: Word('пережигал', 7),
  femininePast: Word('пережигала', 7),
  neuterPast: Word('пережигало', 7),
  pluralPast: Word('пережигали', 7),
  imperativeInformal: Word('пережигай', 7),
  imperativeFormal: Word('пережигайте', 7),
  imperfect: [],
};

perfectVerbs.set(пережигать.name.text, пережигать);

export { пережигать };