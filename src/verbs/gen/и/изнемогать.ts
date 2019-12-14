import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const изнемогать: PerfectVerb = {
  name: Word('изнемогать', 7),
  singular1stPerson: Word('изнемогаю', 7),
  singular2ndPerson: Word('изнемогаешь', 7),
  singular3rdPerson: Word('изнемогает', 7),
  plural1stPerson: Word('изнемогаем', 7),
  plural2ndPerson: Word('изнемогаете', 7),
  plural3rdPerson: Word('изнемогают', 7),
  masculinePast: Word('изнемогал', 7),
  femininePast: Word('изнемогала', 7),
  neuterPast: Word('изнемогало', 7),
  pluralPast: Word('изнемогали', 7),
  imperativeInformal: Word('изнемогай', 7),
  imperativeFormal: Word('изнемогайте', 7),
  imperfect: [],
};

perfectVerbs.set(изнемогать.name.text, изнемогать);

export { изнемогать };