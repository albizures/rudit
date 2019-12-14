import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вкусить: PerfectVerb = {
  name: Word('вкусить', 4),
  singular1stPerson: Word('вкушу', 4),
  singular2ndPerson: Word('вкусишь', 4),
  singular3rdPerson: Word('вкусит', 4),
  plural1stPerson: Word('вкусим', 4),
  plural2ndPerson: Word('вкусите', 4),
  plural3rdPerson: Word('вкусят', 4),
  masculinePast: Word('вкусил', 4),
  femininePast: Word('вкусила', 4),
  neuterPast: Word('вкусило', 4),
  pluralPast: Word('вкусили', 4),
  imperativeInformal: Word('вкуси', 4),
  imperativeFormal: Word('вкусите', 4),
  imperfect: [],
};

perfectVerbs.set(вкусить.name.text, вкусить);

export { вкусить };