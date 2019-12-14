import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const сжечь: PerfectVerb = {
  name: Word('сжечь', 2),
  singular1stPerson: Word('сожгу', 4),
  singular2ndPerson: Word('сожжёшь', 4),
  singular3rdPerson: Word('сожжёт', 4),
  plural1stPerson: Word('сожжём', 4),
  plural2ndPerson: Word('сожжёте', 4),
  plural3rdPerson: Word('сожгут', 4),
  masculinePast: Word('сжёг', 2),
  femininePast: Word('сожгла', 5),
  neuterPast: Word('сожгло', 5),
  pluralPast: Word('сожгли', 5),
  imperativeInformal: Word('сожги', 4),
  imperativeFormal: Word('сожгите', 4),
  imperfect: ['жечь','сжигать'],
};

perfectVerbs.set(сжечь.name.text, сжечь);

export { сжечь };