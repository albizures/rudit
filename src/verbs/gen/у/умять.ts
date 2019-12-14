import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const умять: PerfectVerb = {
  name: Word('умять', 2),
  singular1stPerson: Word('', -1),
  singular2ndPerson: Word('', -1),
  singular3rdPerson: Word('', -1),
  plural1stPerson: Word('', -1),
  plural2ndPerson: Word('', -1),
  plural3rdPerson: Word('', -1),
  masculinePast: Word('умял', 2),
  femininePast: Word('умяла', 2),
  neuterPast: Word('умяло', 2),
  pluralPast: Word('умяли', 2),
  imperativeInformal: Word('умяи', 3),
  imperativeFormal: Word('умяите', 5),
  imperfect: [],
};

perfectVerbs.set(умять.name.text, умять);

export { умять };