import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const твердеть: PerfectVerb = {
  name: Word('твердеть', 5),
  singular1stPerson: Word('твердею', 5),
  singular2ndPerson: Word('твердеешь', 5),
  singular3rdPerson: Word('твердеет', 5),
  plural1stPerson: Word('твердеем', 5),
  plural2ndPerson: Word('твердеете', 5),
  plural3rdPerson: Word('твердеют', 5),
  masculinePast: Word('твердел', 5),
  femininePast: Word('твердела', 5),
  neuterPast: Word('твердело', 5),
  pluralPast: Word('твердели', 5),
  imperativeInformal: Word('твердей', 5),
  imperativeFormal: Word('твердейте', 5),
  imperfect: [],
};

perfectVerbs.set(твердеть.name.text, твердеть);

export { твердеть };