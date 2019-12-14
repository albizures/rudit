import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вгрызться: PerfectVerb = {
  name: Word('вгрызться', 3),
  singular1stPerson: Word('вгрызусь', 5),
  singular2ndPerson: Word('вгрызёшься', 5),
  singular3rdPerson: Word('вгрызётся', 5),
  plural1stPerson: Word('вгрызёмся', 5),
  plural2ndPerson: Word('вгрызётесь', 5),
  plural3rdPerson: Word('вгрызутся', 5),
  masculinePast: Word('вгрызся', 3),
  femininePast: Word('вгрызлась', 3),
  neuterPast: Word('вгрызлось', 3),
  pluralPast: Word('вгрызлись', 3),
  imperativeInformal: Word('вгрызись', 5),
  imperativeFormal: Word('вгрызитесь', 5),
  imperfect: [],
};

perfectVerbs.set(вгрызться.name.text, вгрызться);

export { вгрызться };