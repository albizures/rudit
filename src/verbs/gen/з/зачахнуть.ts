import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const зачахнуть: PerfectVerb = {
  name: Word('зачахнуть', 3),
  singular1stPerson: Word('зачахну', 3),
  singular2ndPerson: Word('зачахнешь', 3),
  singular3rdPerson: Word('зачахнет', 3),
  plural1stPerson: Word('зачахнем', 3),
  plural2ndPerson: Word('зачахнете', 3),
  plural3rdPerson: Word('зачахнут', 3),
  masculinePast: Word('зачах', 3),
  femininePast: Word('зачахла', 3),
  neuterPast: Word('зачахло', 3),
  pluralPast: Word('зачахли', 3),
  imperativeInformal: Word('зачахни', 3),
  imperativeFormal: Word('зачахните', 3),
  imperfect: [],
};

perfectVerbs.set(зачахнуть.name.text, зачахнуть);

export { зачахнуть };