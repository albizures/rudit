import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const присесть: PerfectVerb = {
  name: Word('присесть', 4),
  singular1stPerson: Word('присяду', 4),
  singular2ndPerson: Word('присядешь', 4),
  singular3rdPerson: Word('присядет', 4),
  plural1stPerson: Word('присядем', 4),
  plural2ndPerson: Word('присядете', 4),
  plural3rdPerson: Word('присядут', 4),
  masculinePast: Word('присел', 4),
  femininePast: Word('присела', 4),
  neuterPast: Word('присело', 4),
  pluralPast: Word('присели', 4),
  imperativeInformal: Word('присядь', 4),
  imperativeFormal: Word('присядьте', 4),
  imperfect: [],
};

perfectVerbs.set(присесть.name.text, присесть);

export { присесть };