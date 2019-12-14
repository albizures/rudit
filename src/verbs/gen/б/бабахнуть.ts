import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const бабахнуть: PerfectVerb = {
  name: Word('бабахнуть', 3),
  singular1stPerson: Word('бабахну', 3),
  singular2ndPerson: Word('бабахнешь', 3),
  singular3rdPerson: Word('бабахнет', 3),
  plural1stPerson: Word('бабахнем', 3),
  plural2ndPerson: Word('бабахнете', 3),
  plural3rdPerson: Word('бабахнут', 3),
  masculinePast: Word('бабахнул', 3),
  femininePast: Word('бабахнула', 3),
  neuterPast: Word('бабахнуло', 3),
  pluralPast: Word('бабахнули', 3),
  imperativeInformal: Word('бабахни', 3),
  imperativeFormal: Word('бабахните', 3),
  imperfect: [],
};

perfectVerbs.set(бабахнуть.name.text, бабахнуть);

export { бабахнуть };