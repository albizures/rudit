import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const шарахнуть: PerfectVerb = {
  name: Word('шарахнуть', 3),
  singular1stPerson: Word('шарахну', 3),
  singular2ndPerson: Word('шарахнешь', 3),
  singular3rdPerson: Word('шарахнет', 3),
  plural1stPerson: Word('шарахнем', 3),
  plural2ndPerson: Word('шарахнете', 3),
  plural3rdPerson: Word('шарахнут', 3),
  masculinePast: Word('шарахнул', 3),
  femininePast: Word('шарахнула', 3),
  neuterPast: Word('шарахнуло', 3),
  pluralPast: Word('шарахнули', 3),
  imperativeInformal: Word('шарахни', 3),
  imperativeFormal: Word('шарахните', 3),
  imperfect: [],
};

perfectVerbs.set(шарахнуть.name.text, шарахнуть);

export { шарахнуть };