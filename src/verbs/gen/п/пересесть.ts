import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const пересесть: PerfectVerb = {
  name: Word('пересесть', 5),
  singular1stPerson: Word('пересяду', 5),
  singular2ndPerson: Word('пересядешь', 5),
  singular3rdPerson: Word('пересядет', 5),
  plural1stPerson: Word('пересядем', 5),
  plural2ndPerson: Word('пересядете', 5),
  plural3rdPerson: Word('пересядут', 5),
  masculinePast: Word('пересел', 5),
  femininePast: Word('пересела', 5),
  neuterPast: Word('пересело', 5),
  pluralPast: Word('пересели', 5),
  imperativeInformal: Word('пересядь', 5),
  imperativeFormal: Word('пересядьте', 5),
  imperfect: [],
};

perfectVerbs.set(пересесть.name.text, пересесть);

export { пересесть };