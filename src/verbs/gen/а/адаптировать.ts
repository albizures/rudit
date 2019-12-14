import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const адаптировать: PerfectVerb = {
  name: Word('адаптировать', 5),
  singular1stPerson: Word('адаптирую', 5),
  singular2ndPerson: Word('адаптируешь', 5),
  singular3rdPerson: Word('адаптирует', 5),
  plural1stPerson: Word('адаптируем', 5),
  plural2ndPerson: Word('адаптируете', 5),
  plural3rdPerson: Word('адаптируют', 5),
  masculinePast: Word('адаптировал', 5),
  femininePast: Word('адаптировала', 5),
  neuterPast: Word('адаптировало', 5),
  pluralPast: Word('адаптировали', 5),
  imperativeInformal: Word('адаптируй', 5),
  imperativeFormal: Word('адаптируйте', 5),
  imperfect: [],
};

perfectVerbs.set(адаптировать.name.text, адаптировать);

export { адаптировать };