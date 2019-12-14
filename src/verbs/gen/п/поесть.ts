import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const поесть: PerfectVerb = {
  name: Word('поесть', 2),
  singular1stPerson: Word('поем', 2),
  singular2ndPerson: Word('поешь', 2),
  singular3rdPerson: Word('поест', 2),
  plural1stPerson: Word('поедим', 4),
  plural2ndPerson: Word('поедите', 4),
  plural3rdPerson: Word('поедят', 4),
  masculinePast: Word('поел', 2),
  femininePast: Word('поела', 2),
  neuterPast: Word('поело', 2),
  pluralPast: Word('поели', 2),
  imperativeInformal: Word('поешь', 2),
  imperativeFormal: Word('поешьте', 2),
  imperfect: ['есть'],
};

perfectVerbs.set(поесть.name.text, поесть);

export { поесть };