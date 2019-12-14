import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const втаптывать: PerfectVerb = {
  name: Word('втаптывать', 2),
  singular1stPerson: Word('втаптываю', 2),
  singular2ndPerson: Word('втаптываешь', 2),
  singular3rdPerson: Word('втаптывает', 2),
  plural1stPerson: Word('втаптываем', 2),
  plural2ndPerson: Word('втаптываете', 2),
  plural3rdPerson: Word('втаптывают', 2),
  masculinePast: Word('втаптывал', 2),
  femininePast: Word('втаптывала', 2),
  neuterPast: Word('втаптывало', 2),
  pluralPast: Word('втаптывали', 2),
  imperativeInformal: Word('втаптывай', 2),
  imperativeFormal: Word('втаптывайте', 2),
  imperfect: [],
};

perfectVerbs.set(втаптывать.name.text, втаптывать);

export { втаптывать };