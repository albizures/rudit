import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const живить: PerfectVerb = {
  name: Word('живить', 3),
  singular1stPerson: Word('живлю', 4),
  singular2ndPerson: Word('живишь', 3),
  singular3rdPerson: Word('живит', 3),
  plural1stPerson: Word('живим', 3),
  plural2ndPerson: Word('живите', 3),
  plural3rdPerson: Word('живят', 3),
  masculinePast: Word('живил', 3),
  femininePast: Word('живила', 3),
  neuterPast: Word('живило', 3),
  pluralPast: Word('живили', 3),
  imperativeInformal: Word('живи', 3),
  imperativeFormal: Word('живите', 3),
  imperfect: [],
};

perfectVerbs.set(живить.name.text, живить);

export { живить };