import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const продекламировать: PerfectVerb = {
  name: Word('продекламировать', 9),
  singular1stPerson: Word('продекламирую', 9),
  singular2ndPerson: Word('продекламируешь', 9),
  singular3rdPerson: Word('продекламирует', 9),
  plural1stPerson: Word('продекламируем', 9),
  plural2ndPerson: Word('продекламируете', 9),
  plural3rdPerson: Word('продекламируют', 9),
  masculinePast: Word('продекламировал', 9),
  femininePast: Word('продекламировала', 9),
  neuterPast: Word('продекламировало', 9),
  pluralPast: Word('продекламировали', 9),
  imperativeInformal: Word('продекламируй', 9),
  imperativeFormal: Word('продекламируйте', 9),
  imperfect: [],
};

perfectVerbs.set(продекламировать.name.text, продекламировать);

export { продекламировать };