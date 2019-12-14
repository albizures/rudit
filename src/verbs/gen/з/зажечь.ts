import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const зажечь: PerfectVerb = {
  name: Word('зажечь', 3),
  singular1stPerson: Word('зажгу', 4),
  singular2ndPerson: Word('зажжёшь', 4),
  singular3rdPerson: Word('зажжёт', 4),
  plural1stPerson: Word('зажжём', 4),
  plural2ndPerson: Word('зажжёте', 4),
  plural3rdPerson: Word('зажгут', 4),
  masculinePast: Word('зажёг', 3),
  femininePast: Word('зажгла', 5),
  neuterPast: Word('зажгло', 5),
  pluralPast: Word('зажгли', 5),
  imperativeInformal: Word('зажги', 4),
  imperativeFormal: Word('зажгите', 4),
  imperfect: ['зажигать'],
};

perfectVerbs.set(зажечь.name.text, зажечь);

export { зажечь };