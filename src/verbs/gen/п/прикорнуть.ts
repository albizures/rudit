import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const прикорнуть: PerfectVerb = {
  name: Word('прикорнуть', 7),
  singular1stPerson: Word('прикорну', 7),
  singular2ndPerson: Word('прикорнёшь', 7),
  singular3rdPerson: Word('прикорнёт', 7),
  plural1stPerson: Word('прикорнём', 7),
  plural2ndPerson: Word('прикорнёте', 7),
  plural3rdPerson: Word('прикорнут', 7),
  masculinePast: Word('прикорнул', 7),
  femininePast: Word('прикорнула', 7),
  neuterPast: Word('прикорнуло', 7),
  pluralPast: Word('прикорнули', 7),
  imperativeInformal: Word('прикорни', 7),
  imperativeFormal: Word('прикорните', 7),
  imperfect: [],
};

perfectVerbs.set(прикорнуть.name.text, прикорнуть);

export { прикорнуть };