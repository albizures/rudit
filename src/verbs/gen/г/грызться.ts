import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const грызться: PerfectVerb = {
  name: Word('грызться', 2),
  singular1stPerson: Word('грызусь', 4),
  singular2ndPerson: Word('грызёшься', 4),
  singular3rdPerson: Word('грызётся', 4),
  plural1stPerson: Word('грызёмся', 4),
  plural2ndPerson: Word('грызётесь', 4),
  plural3rdPerson: Word('грызутся', 4),
  masculinePast: Word('грызся', 2),
  femininePast: Word('грызлась', 2),
  neuterPast: Word('грызлось', 2),
  pluralPast: Word('грызлись', 2),
  imperativeInformal: Word('грызись', 4),
  imperativeFormal: Word('грызитесь', 4),
  imperfect: [],
};

perfectVerbs.set(грызться.name.text, грызться);

export { грызться };