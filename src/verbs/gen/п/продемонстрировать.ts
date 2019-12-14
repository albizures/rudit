import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const продемонстрировать: PerfectVerb = {
  name: Word('продемонстрировать', 11),
  singular1stPerson: Word('продемонстрирую', 11),
  singular2ndPerson: Word('продемонстрируешь', 11),
  singular3rdPerson: Word('продемонстрирует', 11),
  plural1stPerson: Word('продемонстрируем', 11),
  plural2ndPerson: Word('продемонстрируете', 11),
  plural3rdPerson: Word('продемонстрируют', 11),
  masculinePast: Word('продемонстрировал', 11),
  femininePast: Word('продемонстрировала', 11),
  neuterPast: Word('продемонстрировало', 11),
  pluralPast: Word('продемонстрировали', 11),
  imperativeInformal: Word('продемонстрируй', 11),
  imperativeFormal: Word('продемонстрируйте', 11),
  imperfect: [],
};

perfectVerbs.set(продемонстрировать.name.text, продемонстрировать);

export { продемонстрировать };