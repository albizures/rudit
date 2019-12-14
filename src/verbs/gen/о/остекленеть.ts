import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const остекленеть: PerfectVerb = {
  name: Word('остекленеть', 8),
  singular1stPerson: Word('остекленею', 8),
  singular2ndPerson: Word('остекленеешь', 8),
  singular3rdPerson: Word('остекленеет', 8),
  plural1stPerson: Word('остекленеем', 8),
  plural2ndPerson: Word('остекленеете', 8),
  plural3rdPerson: Word('остекленеют', 8),
  masculinePast: Word('остекленел', 8),
  femininePast: Word('остекленела', 8),
  neuterPast: Word('остекленело', 8),
  pluralPast: Word('остекленели', 8),
  imperativeInformal: Word('остекленей', 8),
  imperativeFormal: Word('остекленейте', 8),
  imperfect: [],
};

perfectVerbs.set(остекленеть.name.text, остекленеть);

export { остекленеть };