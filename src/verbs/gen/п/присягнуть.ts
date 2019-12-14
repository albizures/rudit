import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const присягнуть: PerfectVerb = {
  name: Word('присягнуть', 7),
  singular1stPerson: Word('присягну', 7),
  singular2ndPerson: Word('присягнёшь', 2),
  singular3rdPerson: Word('присягнёт', 2),
  plural1stPerson: Word('присягнём', 2),
  plural2ndPerson: Word('присягнёте', 9),
  plural3rdPerson: Word('присягнут', 7),
  masculinePast: Word('присягнул', 7),
  femininePast: Word('присягнула', 7),
  neuterPast: Word('присягнуло', 7),
  pluralPast: Word('присягнули', 7),
  imperativeInformal: Word('присягни', 7),
  imperativeFormal: Word('присягните', 7),
  imperfect: [],
};

perfectVerbs.set(присягнуть.name.text, присягнуть);

export { присягнуть };