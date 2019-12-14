import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const перекинуть: PerfectVerb = {
  name: Word('перекинуть', 5),
  singular1stPerson: Word('перекину', 5),
  singular2ndPerson: Word('перекинешь', 5),
  singular3rdPerson: Word('перекинет', 5),
  plural1stPerson: Word('перекинем', 5),
  plural2ndPerson: Word('перекинете', 5),
  plural3rdPerson: Word('перекинут', 5),
  masculinePast: Word('перекинул', 5),
  femininePast: Word('перекинула', 5),
  neuterPast: Word('перекинуло', 5),
  pluralPast: Word('перекинули', 5),
  imperativeInformal: Word('перекинь', 5),
  imperativeFormal: Word('перекиньте', 5),
  imperfect: [],
};

perfectVerbs.set(перекинуть.name.text, перекинуть);

export { перекинуть };