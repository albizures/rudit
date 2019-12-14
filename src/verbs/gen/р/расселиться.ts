import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const расселиться: PerfectVerb = {
  name: Word('расселиться', 6),
  singular1stPerson: Word('расселюсь', 6),
  singular2ndPerson: Word('расселишься', 6),
  singular3rdPerson: Word('расселится', 6),
  plural1stPerson: Word('расселимся', 6),
  plural2ndPerson: Word('расселитесь', 6),
  plural3rdPerson: Word('расселятся', 6),
  masculinePast: Word('расселился', 6),
  femininePast: Word('расселилась', 6),
  neuterPast: Word('расселилось', 6),
  pluralPast: Word('расселились', 6),
  imperativeInformal: Word('расселись', 6),
  imperativeFormal: Word('расселитесь', 6),
  imperfect: [],
};

perfectVerbs.set(расселиться.name.text, расселиться);

export { расселиться };