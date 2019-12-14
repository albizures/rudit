import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const рассовывать: PerfectVerb = {
  name: Word('рассовывать', 4),
  singular1stPerson: Word('рассовываю', 4),
  singular2ndPerson: Word('рассовываешь', 4),
  singular3rdPerson: Word('рассовывает', 4),
  plural1stPerson: Word('рассовываем', 4),
  plural2ndPerson: Word('рассовываете', 4),
  plural3rdPerson: Word('рассовывают', 4),
  masculinePast: Word('рассовывал', 4),
  femininePast: Word('рассовывала', 4),
  neuterPast: Word('рассовывало', 4),
  pluralPast: Word('рассовывали', 4),
  imperativeInformal: Word('рассовывай', 4),
  imperativeFormal: Word('рассовывайте', 4),
  imperfect: [],
};

perfectVerbs.set(рассовывать.name.text, рассовывать);

export { рассовывать };