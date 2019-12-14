import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const смердеть: PerfectVerb = {
  name: Word('смердеть', 5),
  singular1stPerson: Word('смержу', 5),
  singular2ndPerson: Word('смердишь', 5),
  singular3rdPerson: Word('смердит', 5),
  plural1stPerson: Word('смердим', 5),
  plural2ndPerson: Word('смердите', 5),
  plural3rdPerson: Word('смердят', 5),
  masculinePast: Word('смердел', 5),
  femininePast: Word('смердела', 5),
  neuterPast: Word('смердело', 5),
  pluralPast: Word('смердели', 5),
  imperativeInformal: Word('смерди', 5),
  imperativeFormal: Word('смердите', 5),
  imperfect: [],
};

perfectVerbs.set(смердеть.name.text, смердеть);

export { смердеть };