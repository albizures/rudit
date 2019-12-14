import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const задувать: PerfectVerb = {
  name: Word('задувать', 5),
  singular1stPerson: Word('задуваю', 5),
  singular2ndPerson: Word('задуваешь', 5),
  singular3rdPerson: Word('задувает', 5),
  plural1stPerson: Word('задуваем', 5),
  plural2ndPerson: Word('задуваете', 5),
  plural3rdPerson: Word('задувают', 5),
  masculinePast: Word('задувал', 5),
  femininePast: Word('задувала', 5),
  neuterPast: Word('задувало', 5),
  pluralPast: Word('задували', 5),
  imperativeInformal: Word('задувай', 5),
  imperativeFormal: Word('задувайте', 5),
  imperfect: [],
};

perfectVerbs.set(задувать.name.text, задувать);

export { задувать };