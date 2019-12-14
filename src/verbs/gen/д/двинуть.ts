import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const двинуть: PerfectVerb = {
  name: Word('двинуть', 2),
  singular1stPerson: Word('двину', 2),
  singular2ndPerson: Word('двинешь', 2),
  singular3rdPerson: Word('двинет', 2),
  plural1stPerson: Word('двинем', 2),
  plural2ndPerson: Word('двинете', 2),
  plural3rdPerson: Word('двинут', 2),
  masculinePast: Word('двинул', 2),
  femininePast: Word('двинула', 2),
  neuterPast: Word('двинуло', 2),
  pluralPast: Word('двинули', 2),
  imperativeInformal: Word('двинь', 2),
  imperativeFormal: Word('двиньте', 2),
  imperfect: ['двигать'],
};

perfectVerbs.set(двинуть.name.text, двинуть);

export { двинуть };