import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const размориться: PerfectVerb = {
  name: Word('размориться', 6),
  singular1stPerson: Word('разморюсь', 6),
  singular2ndPerson: Word('разморишься', 6),
  singular3rdPerson: Word('разморится', 6),
  plural1stPerson: Word('разморимся', 6),
  plural2ndPerson: Word('разморитесь', 6),
  plural3rdPerson: Word('разморятся', 6),
  masculinePast: Word('разморился', 6),
  femininePast: Word('разморилась', 6),
  neuterPast: Word('разморилось', 6),
  pluralPast: Word('разморились', 6),
  imperativeInformal: Word('разморись', 6),
  imperativeFormal: Word('разморитесь', 6),
  imperfect: [],
};

perfectVerbs.set(размориться.name.text, размориться);

export { размориться };