import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const пододвигать: PerfectVerb = {
  name: Word('пододвигать', 8),
  singular1stPerson: Word('пододвигаю', 8),
  singular2ndPerson: Word('пододвигаешь', 8),
  singular3rdPerson: Word('пододвигает', 8),
  plural1stPerson: Word('пододвигаем', 8),
  plural2ndPerson: Word('пододвигаете', 8),
  plural3rdPerson: Word('пододвигают', 8),
  masculinePast: Word('пододвигал', 8),
  femininePast: Word('пододвигала', 8),
  neuterPast: Word('пододвигало', 8),
  pluralPast: Word('пододвигали', 8),
  imperativeInformal: Word('пододвигай', 8),
  imperativeFormal: Word('пододвигайте', 8),
  imperfect: [],
};

perfectVerbs.set(пододвигать.name.text, пододвигать);

export { пододвигать };