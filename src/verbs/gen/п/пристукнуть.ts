import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const пристукнуть: PerfectVerb = {
  name: Word('пристукнуть', 5),
  singular1stPerson: Word('пристукну', 5),
  singular2ndPerson: Word('пристукнешь', 5),
  singular3rdPerson: Word('пристукнет', 5),
  plural1stPerson: Word('пристукнем', 5),
  plural2ndPerson: Word('пристукнете', 5),
  plural3rdPerson: Word('пристукнут', 5),
  masculinePast: Word('пристукнул', 5),
  femininePast: Word('пристукнула', 5),
  neuterPast: Word('пристукнуло', 5),
  pluralPast: Word('пристукнули', 5),
  imperativeInformal: Word('пристукни', 5),
  imperativeFormal: Word('пристукните', 5),
  imperfect: [],
};

perfectVerbs.set(пристукнуть.name.text, пристукнуть);

export { пристукнуть };