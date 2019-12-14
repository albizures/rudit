import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const достигнуть: PerfectVerb = {
  name: Word('достигнуть', 4),
  singular1stPerson: Word('достигну', 4),
  singular2ndPerson: Word('достигнешь', 4),
  singular3rdPerson: Word('достигнет', 4),
  plural1stPerson: Word('достигнем', 4),
  plural2ndPerson: Word('достигнете', 4),
  plural3rdPerson: Word('достигнут', 4),
  masculinePast: Word('достиг,дости'гнул', 4),
  femininePast: Word('достигла,дости'гнула', 4),
  neuterPast: Word('достигло,дости'гнуло', 4),
  pluralPast: Word('достигли,дости'гнули', 4),
  imperativeInformal: Word('достигни', 4),
  imperativeFormal: Word('достигните', 4),
  imperfect: ['достигать'],
};

perfectVerbs.set(достигнуть.name.text, достигнуть);

export { достигнуть };