import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const реконструировать: PerfectVerb = {
  name: Word('реконструировать', 9),
  singular1stPerson: Word('реконструирую', 9),
  singular2ndPerson: Word('реконструируешь', 9),
  singular3rdPerson: Word('реконструирует', 9),
  plural1stPerson: Word('реконструируем', 9),
  plural2ndPerson: Word('реконструируете', 9),
  plural3rdPerson: Word('реконструируют', 9),
  masculinePast: Word('реконструировал', 9),
  femininePast: Word('реконструировала', 9),
  neuterPast: Word('реконструировало', 9),
  pluralPast: Word('реконструировали', 9),
  imperativeInformal: Word('реконструируй', 9),
  imperativeFormal: Word('реконструируйте', 9),
  imperfect: [],
};

perfectVerbs.set(реконструировать.name.text, реконструировать);

export { реконструировать };