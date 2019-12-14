import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const полоть: PerfectVerb = {
  name: Word('полоть', 3),
  singular1stPerson: Word('полю', 3),
  singular2ndPerson: Word('полешь', 1),
  singular3rdPerson: Word('полет', 1),
  plural1stPerson: Word('полем', 1),
  plural2ndPerson: Word('полете', 1),
  plural3rdPerson: Word('полют', 1),
  masculinePast: Word('полол', 3),
  femininePast: Word('полола', 3),
  neuterPast: Word('пололо', 3),
  pluralPast: Word('пололи', 3),
  imperativeInformal: Word('поли', 3),
  imperativeFormal: Word('полите', 3),
  imperfect: ['прополоть'],
};

perfectVerbs.set(полоть.name.text, полоть);

export { полоть };