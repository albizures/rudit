import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const подстроиться: PerfectVerb = {
  name: Word('подстроиться', 6),
  singular1stPerson: Word('подстроюсь', 6),
  singular2ndPerson: Word('подстроишься', 6),
  singular3rdPerson: Word('подстроится', 6),
  plural1stPerson: Word('подстроимся', 6),
  plural2ndPerson: Word('подстроитесь', 6),
  plural3rdPerson: Word('подстроятся', 6),
  masculinePast: Word('подстроился', 6),
  femininePast: Word('подстроилась', 6),
  neuterPast: Word('подстроилось', 6),
  pluralPast: Word('подстроились', 6),
  imperativeInformal: Word('подстройся', 6),
  imperativeFormal: Word('подстройтесь', 6),
  imperfect: [],
};

perfectVerbs.set(подстроиться.name.text, подстроиться);

export { подстроиться };