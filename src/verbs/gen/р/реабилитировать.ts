import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const реабилитировать: PerfectVerb = {
  name: Word('реабилитировать', 8),
  singular1stPerson: Word('реабилитирую', 8),
  singular2ndPerson: Word('реабилитируешь', 8),
  singular3rdPerson: Word('реабилитирует', 8),
  plural1stPerson: Word('реабилитируем', 8),
  plural2ndPerson: Word('реабилитируете', 8),
  plural3rdPerson: Word('реабилитируют', 8),
  masculinePast: Word('реабилитировал', 8),
  femininePast: Word('реабилитировала', 8),
  neuterPast: Word('реабилитировало', 8),
  pluralPast: Word('реабилитировали', 8),
  imperativeInformal: Word('реабилитируй', 8),
  imperativeFormal: Word('реабилитируйте', 8),
  imperfect: [],
};

perfectVerbs.set(реабилитировать.name.text, реабилитировать);

export { реабилитировать };