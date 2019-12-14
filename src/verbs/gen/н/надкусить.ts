import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const надкусить: PerfectVerb = {
  name: Word('надкусить', 6),
  singular1stPerson: Word('надкушу', 6),
  singular2ndPerson: Word('надкусишь', 4),
  singular3rdPerson: Word('надкусит', 4),
  plural1stPerson: Word('надкусим', 4),
  plural2ndPerson: Word('надкусите', 4),
  plural3rdPerson: Word('надкусят', 4),
  masculinePast: Word('надкусил', 6),
  femininePast: Word('надкусила', 6),
  neuterPast: Word('надкусило', 6),
  pluralPast: Word('надкусили', 6),
  imperativeInformal: Word('надкуси', 6),
  imperativeFormal: Word('надкусите', 6),
  imperfect: [],
};

perfectVerbs.set(надкусить.name.text, надкусить);

export { надкусить };