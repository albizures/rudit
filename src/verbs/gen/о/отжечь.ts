import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отжечь: PerfectVerb = {
  name: Word('отжечь', 3),
  singular1stPerson: Word('отожгу', 5),
  singular2ndPerson: Word('отожжёшь', 0),
  singular3rdPerson: Word('отожжёт', 0),
  plural1stPerson: Word('отожжём', 0),
  plural2ndPerson: Word('отожжёте', 7),
  plural3rdPerson: Word('отожгут', 5),
  masculinePast: Word('отжёг', 0),
  femininePast: Word('отожгла', 6),
  neuterPast: Word('отожгло', 6),
  pluralPast: Word('отожгли', 6),
  imperativeInformal: Word('отожги', 5),
  imperativeFormal: Word('отожгите', 5),
  imperfect: ['отжигать'],
};

perfectVerbs.set(отжечь.name.text, отжечь);

export { отжечь };