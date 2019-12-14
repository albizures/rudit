import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const перегрызться: PerfectVerb = {
  name: Word('перегрызться', 6),
  singular1stPerson: Word('перегрызусь', 8),
  singular2ndPerson: Word('перегрызёшься', 1),
  singular3rdPerson: Word('перегрызётся', 1),
  plural1stPerson: Word('перегрызёмся', 1),
  plural2ndPerson: Word('перегрызётесь', 1),
  plural3rdPerson: Word('перегрызутся', 8),
  masculinePast: Word('перегрызся', 6),
  femininePast: Word('перегрызлась', 6),
  neuterPast: Word('перегрызлось', 6),
  pluralPast: Word('перегрызлись', 6),
  imperativeInformal: Word('перегрызись', 8),
  imperativeFormal: Word('перегрызитесь', 8),
  imperfect: [],
};

perfectVerbs.set(перегрызться.name.text, перегрызться);

export { перегрызться };