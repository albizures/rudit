import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const увидать: PerfectVerb = {
  name: Word('увидать', 4),
  singular1stPerson: Word('-', -1),
  singular2ndPerson: Word('-', -1),
  singular3rdPerson: Word('-', -1),
  plural1stPerson: Word('-', -1),
  plural2ndPerson: Word('-', -1),
  plural3rdPerson: Word('-', -1),
  masculinePast: Word('увидал', 4),
  femininePast: Word('увидала', 4),
  neuterPast: Word('увидало', 4),
  pluralPast: Word('увидали', 4),
  imperativeInformal: Word('-', -1),
  imperativeFormal: Word('-', -1),
  imperfect: [],
};

perfectVerbs.set(увидать.name.text, увидать);

export { увидать };