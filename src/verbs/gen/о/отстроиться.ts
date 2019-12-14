import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отстроиться: PerfectVerb = {
  name: Word('отстроиться', 5),
  singular1stPerson: Word('отстроюсь', 5),
  singular2ndPerson: Word('отстроишься', 5),
  singular3rdPerson: Word('отстроится', 5),
  plural1stPerson: Word('отстроимся', 5),
  plural2ndPerson: Word('отстроитесь', 5),
  plural3rdPerson: Word('отстроятся', 5),
  masculinePast: Word('отстроился', 5),
  femininePast: Word('отстроилась', 5),
  neuterPast: Word('отстроилось', 5),
  pluralPast: Word('отстроились', 5),
  imperativeInformal: Word('отстройся', 5),
  imperativeFormal: Word('отстройтесь', 5),
  imperfect: [],
};

perfectVerbs.set(отстроиться.name.text, отстроиться);

export { отстроиться };