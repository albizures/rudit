import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const загудеть: PerfectVerb = {
  name: Word('загудеть', 5),
  singular1stPerson: Word('загужу', 5),
  singular2ndPerson: Word('загудишь', 5),
  singular3rdPerson: Word('загудит', 5),
  plural1stPerson: Word('загудим', 5),
  plural2ndPerson: Word('загудите', 5),
  plural3rdPerson: Word('загудят', 5),
  masculinePast: Word('загудел', 5),
  femininePast: Word('загудела', 5),
  neuterPast: Word('загудело', 5),
  pluralPast: Word('загудели', 5),
  imperativeInformal: Word('загуди', 5),
  imperativeFormal: Word('загудите', 5),
  imperfect: [],
};

perfectVerbs.set(загудеть.name.text, загудеть);

export { загудеть };