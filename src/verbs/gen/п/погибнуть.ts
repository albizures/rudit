import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const погибнуть: PerfectVerb = {
  name: Word('погибнуть', 3),
  singular1stPerson: Word('погибну', 3),
  singular2ndPerson: Word('погибнешь', 3),
  singular3rdPerson: Word('погибнет', 3),
  plural1stPerson: Word('погибнем', 3),
  plural2ndPerson: Word('погибнете', 3),
  plural3rdPerson: Word('погибнут', 3),
  masculinePast: Word('погиб,поги'бнул', 3),
  femininePast: Word('погибла,поги'бнула', 3),
  neuterPast: Word('погибло,поги'бнуло', 3),
  pluralPast: Word('погибли,поги'бнули', 3),
  imperativeInformal: Word('погибни', 3),
  imperativeFormal: Word('погибните', 3),
  imperfect: ['погибать'],
};

perfectVerbs.set(погибнуть.name.text, погибнуть);

export { погибнуть };