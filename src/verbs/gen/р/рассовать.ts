import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const рассовать: PerfectVerb = {
  name: Word('рассовать', 6),
  singular1stPerson: Word('рассую', 5),
  singular2ndPerson: Word('рассуёшь', 1),
  singular3rdPerson: Word('рассуёт', 1),
  plural1stPerson: Word('рассуём', 1),
  plural2ndPerson: Word('рассуёте', 1),
  plural3rdPerson: Word('рассуют', 5),
  masculinePast: Word('рассовал', 6),
  femininePast: Word('рассовала', 6),
  neuterPast: Word('рассовало', 6),
  pluralPast: Word('рассовали', 6),
  imperativeInformal: Word('рассуй', 4),
  imperativeFormal: Word('рассуйте', 4),
  imperfect: [],
};

perfectVerbs.set(рассовать.name.text, рассовать);

export { рассовать };