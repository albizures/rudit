import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const скрипнуть: PerfectVerb = {
  name: Word('скрипнуть', 3),
  singular1stPerson: Word('скрипну', 3),
  singular2ndPerson: Word('скрипнешь', 3),
  singular3rdPerson: Word('скрипнет', 3),
  plural1stPerson: Word('скрипнем', 3),
  plural2ndPerson: Word('скрипнете', 3),
  plural3rdPerson: Word('скрипнут', 3),
  masculinePast: Word('скрипнул', 3),
  femininePast: Word('скрипнула', 3),
  neuterPast: Word('скрипнуло', 3),
  pluralPast: Word('скрипнули', 3),
  imperativeInformal: Word('скрипни', 3),
  imperativeFormal: Word('скрипните', 3),
  imperfect: ['скрипеть'],
};

perfectVerbs.set(скрипнуть.name.text, скрипнуть);

export { скрипнуть };