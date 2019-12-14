import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const муниципализировать: PerfectVerb = {
  name: Word('муниципализировать', 11),
  singular1stPerson: Word('муниципализирую', 11),
  singular2ndPerson: Word('муниципализируешь', 11),
  singular3rdPerson: Word('муниципализирует', 11),
  plural1stPerson: Word('муниципализируем', 11),
  plural2ndPerson: Word('муниципализируете', 11),
  plural3rdPerson: Word('муниципализируют', 11),
  masculinePast: Word('муниципализировал', 11),
  femininePast: Word('муниципализировала', 11),
  neuterPast: Word('муниципализировало', 11),
  pluralPast: Word('муниципализировали', 11),
  imperativeInformal: Word('муниципализируй', 11),
  imperativeFormal: Word('муниципализируйте', 11),
  imperfect: [],
};

perfectVerbs.set(муниципализировать.name.text, муниципализировать);

export { муниципализировать };