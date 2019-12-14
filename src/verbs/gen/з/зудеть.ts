import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const зудеть: PerfectVerb = {
  name: Word('зудеть', 3),
  singular1stPerson: Word('зужу', 3),
  singular2ndPerson: Word('зудишь', 3),
  singular3rdPerson: Word('зудит', 3),
  plural1stPerson: Word('зудим', 3),
  plural2ndPerson: Word('зудите', 3),
  plural3rdPerson: Word('зудят', 3),
  masculinePast: Word('зудел', 3),
  femininePast: Word('зудела', 3),
  neuterPast: Word('зудело', 3),
  pluralPast: Word('зудели', 3),
  imperativeInformal: Word('зуди', 3),
  imperativeFormal: Word('зудите', 3),
  imperfect: [],
};

perfectVerbs.set(зудеть.name.text, зудеть);

export { зудеть };