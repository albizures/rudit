import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const скрестись: PerfectVerb = {
  name: Word('скрестись', 6),
  singular1stPerson: Word('скребусь', 5),
  singular2ndPerson: Word('скребёшься', 3),
  singular3rdPerson: Word('скребётся', 3),
  plural1stPerson: Word('скребёмся', 3),
  plural2ndPerson: Word('скребётесь', 3),
  plural3rdPerson: Word('скребутся', 5),
  masculinePast: Word('скрёбся', 6),
  femininePast: Word('скреблась', 6),
  neuterPast: Word('скреблось', 6),
  pluralPast: Word('скреблись', 6),
  imperativeInformal: Word('скребись', 5),
  imperativeFormal: Word('скребитесь', 5),
  imperfect: [],
};

perfectVerbs.set(скрестись.name.text, скрестись);

export { скрестись };