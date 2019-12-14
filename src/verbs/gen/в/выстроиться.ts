import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const выстроиться: PerfectVerb = {
  name: Word('выстроиться', 1),
  singular1stPerson: Word('выстроюсь', 1),
  singular2ndPerson: Word('выстроишься', 1),
  singular3rdPerson: Word('выстроится', 1),
  plural1stPerson: Word('выстроимся', 1),
  plural2ndPerson: Word('выстроитесь', 1),
  plural3rdPerson: Word('выстроятся', 1),
  masculinePast: Word('выстроился', 1),
  femininePast: Word('выстроилась', 1),
  neuterPast: Word('выстроилось', 1),
  pluralPast: Word('выстроились', 1),
  imperativeInformal: Word('выстройся', 1),
  imperativeFormal: Word('выстройтесь', 1),
  imperfect: [],
};

perfectVerbs.set(выстроиться.name.text, выстроиться);

export { выстроиться };