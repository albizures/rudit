import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const прогудеть: PerfectVerb = {
  name: Word('прогудеть', 6),
  singular1stPerson: Word('прогужу', 6),
  singular2ndPerson: Word('прогудишь', 6),
  singular3rdPerson: Word('прогудит', 6),
  plural1stPerson: Word('прогудим', 6),
  plural2ndPerson: Word('прогудите', 6),
  plural3rdPerson: Word('прогудят', 6),
  masculinePast: Word('прогудел', 6),
  femininePast: Word('прогудела', 6),
  neuterPast: Word('прогудело', 6),
  pluralPast: Word('прогудели', 6),
  imperativeInformal: Word('прогуди', 6),
  imperativeFormal: Word('прогудите', 6),
  imperfect: [],
};

perfectVerbs.set(прогудеть.name.text, прогудеть);

export { прогудеть };