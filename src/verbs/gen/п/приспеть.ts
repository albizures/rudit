import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const приспеть: PerfectVerb = {
  name: Word('приспеть', 5),
  singular1stPerson: Word('приспею', 5),
  singular2ndPerson: Word('приспеешь', 5),
  singular3rdPerson: Word('приспеет', 5),
  plural1stPerson: Word('приспеем', 5),
  plural2ndPerson: Word('приспеете', 5),
  plural3rdPerson: Word('приспеют', 5),
  masculinePast: Word('приспел', 5),
  femininePast: Word('приспела', 5),
  neuterPast: Word('приспело', 5),
  pluralPast: Word('приспели', 5),
  imperativeInformal: Word('приспей', 5),
  imperativeFormal: Word('приспейте', 5),
  imperfect: [],
};

perfectVerbs.set(приспеть.name.text, приспеть);

export { приспеть };