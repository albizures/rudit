import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const гибнуть: PerfectVerb = {
  name: Word('гибнуть', 1),
  singular1stPerson: Word('гибну', 1),
  singular2ndPerson: Word('гибнешь', 1),
  singular3rdPerson: Word('гибнет', 1),
  plural1stPerson: Word('гибнем', 1),
  plural2ndPerson: Word('гибнете', 1),
  plural3rdPerson: Word('гибнут', 1),
  masculinePast: Word('гиб,ги'бнул', 1),
  femininePast: Word('гибла,ги'бнула', 1),
  neuterPast: Word('гибло,ги'бнуло', 1),
  pluralPast: Word('гибли,ги'бнули', 1),
  imperativeInformal: Word('гибни', 1),
  imperativeFormal: Word('гибните', 1),
  imperfect: ['погибнуть'],
};

perfectVerbs.set(гибнуть.name.text, гибнуть);

export { гибнуть };