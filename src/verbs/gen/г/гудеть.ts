import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const гудеть: PerfectVerb = {
  name: Word('гудеть', 3),
  singular1stPerson: Word('гужу', 3),
  singular2ndPerson: Word('гудишь', 3),
  singular3rdPerson: Word('гудит', 3),
  plural1stPerson: Word('гудим', 3),
  plural2ndPerson: Word('гудите', 3),
  plural3rdPerson: Word('гудят', 3),
  masculinePast: Word('гудел', 3),
  femininePast: Word('гудела', 3),
  neuterPast: Word('гудело', 3),
  pluralPast: Word('гудели', 3),
  imperativeInformal: Word('гуди', 3),
  imperativeFormal: Word('гудите', 3),
  imperfect: [],
};

perfectVerbs.set(гудеть.name.text, гудеть);

export { гудеть };