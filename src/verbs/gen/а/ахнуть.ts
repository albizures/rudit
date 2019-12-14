import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const ахнуть: PerfectVerb = {
  name: Word('ахнуть', 0),
  singular1stPerson: Word('ахну', 0),
  singular2ndPerson: Word('ахнешь', 0),
  singular3rdPerson: Word('ахнет', 0),
  plural1stPerson: Word('ахнем', 0),
  plural2ndPerson: Word('ахнете', 0),
  plural3rdPerson: Word('ахнут', 0),
  masculinePast: Word('ахнул', 0),
  femininePast: Word('ахнула', 0),
  neuterPast: Word('ахнуло', 0),
  pluralPast: Word('ахнули', 0),
  imperativeInformal: Word('ахни', 0),
  imperativeFormal: Word('ахните', 0),
  imperfect: [],
};

perfectVerbs.set(ахнуть.name.text, ахнуть);

export { ахнуть };