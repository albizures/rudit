import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const перегнуть: PerfectVerb = {
  name: Word('перегнуть', 6),
  singular1stPerson: Word('перегну', 6),
  singular2ndPerson: Word('перегнёшь', 6),
  singular3rdPerson: Word('перегнёт', 6),
  plural1stPerson: Word('перегнём', 6),
  plural2ndPerson: Word('перегнёте', 6),
  plural3rdPerson: Word('перегнут', 6),
  masculinePast: Word('перегнул', 6),
  femininePast: Word('перегнула', 6),
  neuterPast: Word('перегнуло', 6),
  pluralPast: Word('перегнули', 6),
  imperativeInformal: Word('перегни', 6),
  imperativeFormal: Word('перегните', 6),
  imperfect: ['перегибать'],
};

perfectVerbs.set(перегнуть.name.text, перегнуть);

export { перегнуть };