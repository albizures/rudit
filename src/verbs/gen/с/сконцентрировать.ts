import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const сконцентрировать: PerfectVerb = {
  name: Word('сконцентрировать', 9),
  singular1stPerson: Word('сконцентрирую', 9),
  singular2ndPerson: Word('сконцентрируешь', 9),
  singular3rdPerson: Word('сконцентрирует', 9),
  plural1stPerson: Word('сконцентрируем', 9),
  plural2ndPerson: Word('сконцентрируете', 9),
  plural3rdPerson: Word('сконцентрируют', 9),
  masculinePast: Word('сконцентрировал', 9),
  femininePast: Word('сконцентрировала', 9),
  neuterPast: Word('сконцентрировало', 9),
  pluralPast: Word('сконцентрировали', 9),
  imperativeInformal: Word('сконцентрируй', 9),
  imperativeFormal: Word('сконцентрируйте', 9),
  imperfect: [],
};

perfectVerbs.set(сконцентрировать.name.text, сконцентрировать);

export { сконцентрировать };