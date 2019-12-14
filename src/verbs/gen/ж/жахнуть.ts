import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const жахнуть: PerfectVerb = {
  name: Word('жахнуть', 1),
  singular1stPerson: Word('жахну', 1),
  singular2ndPerson: Word('жахнешь', 1),
  singular3rdPerson: Word('жахнет', 1),
  plural1stPerson: Word('жахнем', 1),
  plural2ndPerson: Word('жахнете', 1),
  plural3rdPerson: Word('жахнут', 1),
  masculinePast: Word('жахнул', 1),
  femininePast: Word('жахнула', 1),
  neuterPast: Word('жахнуло', 1),
  pluralPast: Word('жахнули', 1),
  imperativeInformal: Word('жахни', 1),
  imperativeFormal: Word('жахните', 1),
  imperfect: [],
};

perfectVerbs.set(жахнуть.name.text, жахнуть);

export { жахнуть };