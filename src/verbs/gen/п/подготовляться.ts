import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const подготовляться: PerfectVerb = {
  name: Word('подготовляться', 9),
  singular1stPerson: Word('подготовляюсь', 9),
  singular2ndPerson: Word('подготовляешься', 9),
  singular3rdPerson: Word('подготовляется', 9),
  plural1stPerson: Word('подготовляемся', 9),
  plural2ndPerson: Word('подготовляетесь', 9),
  plural3rdPerson: Word('подготовляются', 9),
  masculinePast: Word('подготовлялся', 9),
  femininePast: Word('подготовлялась', 9),
  neuterPast: Word('подготовлялось', 9),
  pluralPast: Word('подготовлялись', 9),
  imperativeInformal: Word('подготовляйся', 9),
  imperativeFormal: Word('подготовляйтесь', 9),
  imperfect: [],
};

perfectVerbs.set(подготовляться.name.text, подготовляться);

export { подготовляться };