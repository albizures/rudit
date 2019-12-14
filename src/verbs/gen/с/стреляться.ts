import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const стреляться: PerfectVerb = {
  name: Word('стреляться', 5),
  singular1stPerson: Word('стреляюсь', 5),
  singular2ndPerson: Word('стреляешься', 5),
  singular3rdPerson: Word('стреляется', 5),
  plural1stPerson: Word('стреляемся', 5),
  plural2ndPerson: Word('стреляетесь', 5),
  plural3rdPerson: Word('стреляются', 5),
  masculinePast: Word('стрелялся', 5),
  femininePast: Word('стрелялась', 5),
  neuterPast: Word('стрелялось', 5),
  pluralPast: Word('стрелялись', 5),
  imperativeInformal: Word('стреляйся', 5),
  imperativeFormal: Word('стреляйтесь', 5),
  imperfect: [],
};

perfectVerbs.set(стреляться.name.text, стреляться);

export { стреляться };