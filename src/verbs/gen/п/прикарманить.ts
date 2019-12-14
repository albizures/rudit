import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const прикарманить: PerfectVerb = {
  name: Word('прикарманить', 7),
  singular1stPerson: Word('прикарманю', 7),
  singular2ndPerson: Word('прикарманишь', 7),
  singular3rdPerson: Word('прикарманит', 7),
  plural1stPerson: Word('прикарманим', 7),
  plural2ndPerson: Word('прикарманите', 7),
  plural3rdPerson: Word('прикарманят', 7),
  masculinePast: Word('прикарманил', 7),
  femininePast: Word('прикарманила', 7),
  neuterPast: Word('прикарманило', 7),
  pluralPast: Word('прикарманили', 7),
  imperativeInformal: Word('прикармань', 7),
  imperativeFormal: Word('прикарманьте', 7),
  imperfect: [],
};

perfectVerbs.set(прикарманить.name.text, прикарманить);

export { прикарманить };