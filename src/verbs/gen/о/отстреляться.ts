import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отстреляться: PerfectVerb = {
  name: Word('отстреляться', 7),
  singular1stPerson: Word('отстреляюсь', 7),
  singular2ndPerson: Word('отстреляешься', 7),
  singular3rdPerson: Word('отстреляется', 7),
  plural1stPerson: Word('отстреляемся', 7),
  plural2ndPerson: Word('отстреляетесь', 7),
  plural3rdPerson: Word('отстреляются', 7),
  masculinePast: Word('отстрелялся', 7),
  femininePast: Word('отстрелялась', 7),
  neuterPast: Word('отстрелялось', 7),
  pluralPast: Word('отстрелялись', 7),
  imperativeInformal: Word('отстреляйся', 7),
  imperativeFormal: Word('отстреляйтесь', 7),
  imperfect: [],
};

perfectVerbs.set(отстреляться.name.text, отстреляться);

export { отстреляться };