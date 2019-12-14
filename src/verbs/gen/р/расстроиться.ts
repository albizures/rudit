import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const расстроиться: PerfectVerb = {
  name: Word('расстроиться', 6),
  singular1stPerson: Word('расстроюсь', 6),
  singular2ndPerson: Word('расстроишься', 6),
  singular3rdPerson: Word('расстроится', 6),
  plural1stPerson: Word('расстроимся', 6),
  plural2ndPerson: Word('расстроитесь', 6),
  plural3rdPerson: Word('расстроятся', 6),
  masculinePast: Word('расстроился', 6),
  femininePast: Word('расстроилась', 6),
  neuterPast: Word('расстроилось', 6),
  pluralPast: Word('расстроились', 6),
  imperativeInformal: Word('расстройся', 6),
  imperativeFormal: Word('расстройтесь', 6),
  imperfect: [],
};

perfectVerbs.set(расстроиться.name.text, расстроиться);

export { расстроиться };