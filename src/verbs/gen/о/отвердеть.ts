import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отвердеть: PerfectVerb = {
  name: Word('отвердеть', 6),
  singular1stPerson: Word('отвердею', 6),
  singular2ndPerson: Word('отвердеешь', 6),
  singular3rdPerson: Word('отвердеет', 6),
  plural1stPerson: Word('отвердеем', 6),
  plural2ndPerson: Word('отвердеете', 6),
  plural3rdPerson: Word('отвердеют', 6),
  masculinePast: Word('отвердел', 6),
  femininePast: Word('отвердела', 6),
  neuterPast: Word('отвердело', 6),
  pluralPast: Word('отвердели', 6),
  imperativeInformal: Word('отвердей', 6),
  imperativeFormal: Word('отвердейте', 6),
  imperfect: [],
};

perfectVerbs.set(отвердеть.name.text, отвердеть);

export { отвердеть };