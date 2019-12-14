import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const осточертеть: PerfectVerb = {
  name: Word('осточертеть', 8),
  singular1stPerson: Word('осточертею', 8),
  singular2ndPerson: Word('осточертеешь', 8),
  singular3rdPerson: Word('осточертеет', 8),
  plural1stPerson: Word('осточертеем', 8),
  plural2ndPerson: Word('осточертеете', 8),
  plural3rdPerson: Word('осточертеют', 8),
  masculinePast: Word('осточертел', 8),
  femininePast: Word('осточертела', 8),
  neuterPast: Word('осточертело', 8),
  pluralPast: Word('осточертели', 8),
  imperativeInformal: Word('осточертей', 8),
  imperativeFormal: Word('осточертейте', 8),
  imperfect: [],
};

perfectVerbs.set(осточертеть.name.text, осточертеть);

export { осточертеть };