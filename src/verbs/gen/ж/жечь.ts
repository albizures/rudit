import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const жечь: PerfectVerb = {
  name: Word('жечь', 1),
  singular1stPerson: Word('жгу', 2),
  singular2ndPerson: Word('жжёшь', 2),
  singular3rdPerson: Word('жжёт', 2),
  plural1stPerson: Word('жжём', 2),
  plural2ndPerson: Word('жжёте', 4),
  plural3rdPerson: Word('жгут', 2),
  masculinePast: Word('жёг', 1),
  femininePast: Word('жгла', 3),
  neuterPast: Word('жгло', 3),
  pluralPast: Word('жгли', 3),
  imperativeInformal: Word('жги', 2),
  imperativeFormal: Word('жгите', 2),
  imperfect: ['сжечь'],
};

perfectVerbs.set(жечь.name.text, жечь);

export { жечь };