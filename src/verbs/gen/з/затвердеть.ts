import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const затвердеть: PerfectVerb = {
  name: Word('затвердеть', 7),
  singular1stPerson: Word('затвердею', 7),
  singular2ndPerson: Word('затвердеешь', 7),
  singular3rdPerson: Word('затвердеет', 7),
  plural1stPerson: Word('затвердеем', 7),
  plural2ndPerson: Word('затвердеете', 7),
  plural3rdPerson: Word('затвердеют', 7),
  masculinePast: Word('затвердел', 7),
  femininePast: Word('затвердела', 7),
  neuterPast: Word('затвердело', 7),
  pluralPast: Word('затвердели', 7),
  imperativeInformal: Word('затвердей', 7),
  imperativeFormal: Word('затвердейте', 7),
  imperfect: [],
};

perfectVerbs.set(затвердеть.name.text, затвердеть);

export { затвердеть };