import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const сморгнуть: PerfectVerb = {
  name: Word('сморгнуть', 6),
  singular1stPerson: Word('сморгну', 6),
  singular2ndPerson: Word('сморгнёшь', 2),
  singular3rdPerson: Word('сморгнёт', 2),
  plural1stPerson: Word('сморгнём', 2),
  plural2ndPerson: Word('сморгнёте', 8),
  plural3rdPerson: Word('сморгнут', 6),
  masculinePast: Word('сморгнул', 6),
  femininePast: Word('сморгнула', 6),
  neuterPast: Word('сморгнуло', 6),
  pluralPast: Word('сморгнули', 6),
  imperativeInformal: Word('сморгни', 6),
  imperativeFormal: Word('сморгните', 6),
  imperfect: [],
};

perfectVerbs.set(сморгнуть.name.text, сморгнуть);

export { сморгнуть };