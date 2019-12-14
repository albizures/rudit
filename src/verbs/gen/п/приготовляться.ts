import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const приготовляться: PerfectVerb = {
  name: Word('приготовляться', 9),
  singular1stPerson: Word('приготовляюсь', 9),
  singular2ndPerson: Word('приготовляешься', 9),
  singular3rdPerson: Word('приготовляется', 9),
  plural1stPerson: Word('приготовляемся', 9),
  plural2ndPerson: Word('приготовляетесь', 9),
  plural3rdPerson: Word('приготовляются', 9),
  masculinePast: Word('приготовлялся', 9),
  femininePast: Word('приготовлялась', 9),
  neuterPast: Word('приготовлялось', 9),
  pluralPast: Word('приготовлялись', 9),
  imperativeInformal: Word('приготовляйся', 9),
  imperativeFormal: Word('приготовляйтесь', 9),
  imperfect: [],
};

perfectVerbs.set(приготовляться.name.text, приготовляться);

export { приготовляться };