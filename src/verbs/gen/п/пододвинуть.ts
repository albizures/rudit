import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const пододвинуть: PerfectVerb = {
  name: Word('пододвинуть', 6),
  singular1stPerson: Word('пододвину', 6),
  singular2ndPerson: Word('пододвинешь', 6),
  singular3rdPerson: Word('пододвинет', 6),
  plural1stPerson: Word('пододвинем', 6),
  plural2ndPerson: Word('пододвинете', 6),
  plural3rdPerson: Word('пододвинут', 6),
  masculinePast: Word('пододвинул', 6),
  femininePast: Word('пододвинула', 6),
  neuterPast: Word('пододвинуло', 6),
  pluralPast: Word('пододвинули', 6),
  imperativeInformal: Word('пододвинь', 6),
  imperativeFormal: Word('пододвиньте', 6),
  imperfect: [],
};

perfectVerbs.set(пододвинуть.name.text, пододвинуть);

export { пододвинуть };