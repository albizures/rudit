import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const выкусить: PerfectVerb = {
  name: Word('выкусить', 1),
  singular1stPerson: Word('выкушу', 1),
  singular2ndPerson: Word('выкусишь', 1),
  singular3rdPerson: Word('выкусит', 1),
  plural1stPerson: Word('выкусим', 1),
  plural2ndPerson: Word('выкусите', 1),
  plural3rdPerson: Word('выкусят', 1),
  masculinePast: Word('выкусил', 1),
  femininePast: Word('выкусила', 1),
  neuterPast: Word('выкусило', 1),
  pluralPast: Word('выкусили', 1),
  imperativeInformal: Word('выкуси', 1),
  imperativeFormal: Word('выкусите', 1),
  imperfect: [],
};

perfectVerbs.set(выкусить.name.text, выкусить);

export { выкусить };