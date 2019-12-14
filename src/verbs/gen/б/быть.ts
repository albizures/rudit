import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const быть: PerfectVerb = {
  name: Word('быть', 1),
  singular1stPerson: Word('есть', 0),
  singular2ndPerson: Word('есть', 0),
  singular3rdPerson: Word('есть', 0),
  plural1stPerson: Word('есть', 0),
  plural2ndPerson: Word('есть', 0),
  plural3rdPerson: Word('есть', 0),
  masculinePast: Word('был', 1),
  femininePast: Word('была', 3),
  neuterPast: Word('было', 1),
  pluralPast: Word('были', 1),
  imperativeInformal: Word('будь', 1),
  imperativeFormal: Word('будьте', 1),
  imperfect: [],
};

perfectVerbs.set(быть.name.text, быть);

export { быть };