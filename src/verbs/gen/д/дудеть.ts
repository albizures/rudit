import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const дудеть: PerfectVerb = {
  name: Word('дудеть', 3),
  singular1stPerson: Word('дужу', 3),
  singular2ndPerson: Word('дудишь', 3),
  singular3rdPerson: Word('дудит', 3),
  plural1stPerson: Word('дудим', 3),
  plural2ndPerson: Word('дудите', 3),
  plural3rdPerson: Word('дудят', 3),
  masculinePast: Word('дудел', 3),
  femininePast: Word('дудела', 3),
  neuterPast: Word('дудело', 3),
  pluralPast: Word('дудели', 3),
  imperativeInformal: Word('дуди', 3),
  imperativeFormal: Word('дудите', 3),
  imperfect: [],
};

perfectVerbs.set(дудеть.name.text, дудеть);

export { дудеть };