import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const прилететь: PerfectVerb = {
  name: Word('прилететь', 6),
  singular1stPerson: Word('прилечу', 6),
  singular2ndPerson: Word('прилетишь', 6),
  singular3rdPerson: Word('прилетит', 6),
  plural1stPerson: Word('прилетим', 6),
  plural2ndPerson: Word('прилетите', 6),
  plural3rdPerson: Word('прилетят', 6),
  masculinePast: Word('прилетел', 6),
  femininePast: Word('прилетела', 6),
  neuterPast: Word('прилетело', 6),
  pluralPast: Word('прилетели', 6),
  imperativeInformal: Word('прилети', 6),
  imperativeFormal: Word('прилетите', 6),
  imperfect: [],
};

perfectVerbs.set(прилететь.name.text, прилететь);

export { прилететь };