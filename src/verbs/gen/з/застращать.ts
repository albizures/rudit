import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const застращать: PerfectVerb = {
  name: Word('застращать', 7),
  singular1stPerson: Word('застращаю', 7),
  singular2ndPerson: Word('застращаешь', 7),
  singular3rdPerson: Word('застращает', 7),
  plural1stPerson: Word('застращаем', 7),
  plural2ndPerson: Word('застращаете', 7),
  plural3rdPerson: Word('застращают', 7),
  masculinePast: Word('застращал', 7),
  femininePast: Word('застращала', 7),
  neuterPast: Word('застращало', 7),
  pluralPast: Word('застращали', 7),
  imperativeInformal: Word('застращай', 7),
  imperativeFormal: Word('застращайте', 7),
  imperfect: [],
};

perfectVerbs.set(застращать.name.text, застращать);

export { застращать };