import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const пахнуть: PerfectVerb = {
  name: Word('пахнуть', 1),
  singular1stPerson: Word('пахну', 1),
  singular2ndPerson: Word('пахнешь', 1),
  singular3rdPerson: Word('пахнет', 1),
  plural1stPerson: Word('пахнем', 1),
  plural2ndPerson: Word('пахнете', 1),
  plural3rdPerson: Word('пахнут', 1),
  masculinePast: Word('пах//па'хнул', 1),
  femininePast: Word('пахла', 1),
  neuterPast: Word('пахло', 1),
  pluralPast: Word('пахли', 1),
  imperativeInformal: Word('пахни', 1),
  imperativeFormal: Word('пахните', 1),
  imperfect: [],
};

perfectVerbs.set(пахнуть.name.text, пахнуть);

export { пахнуть };