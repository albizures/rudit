import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const застоговать: PerfectVerb = {
  name: Word('застоговать', 8),
  singular1stPerson: Word('застогую', 6),
  singular2ndPerson: Word('застогуешь', 6),
  singular3rdPerson: Word('застогует', 6),
  plural1stPerson: Word('застогуем', 6),
  plural2ndPerson: Word('застогуете', 6),
  plural3rdPerson: Word('застогуют', 6),
  masculinePast: Word('застоговал', 8),
  femininePast: Word('застоговала', 8),
  neuterPast: Word('застоговало', 8),
  pluralPast: Word('застоговали', 8),
  imperativeInformal: Word('застогуй', 6),
  imperativeFormal: Word('застогуйте', 6),
  imperfect: [],
};

perfectVerbs.set(застоговать.name.text, застоговать);

export { застоговать };