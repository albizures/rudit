import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const кудрявиться: PerfectVerb = {
  name: Word('кудрявиться', 4),
  singular1stPerson: Word('кудрявлюсь', 4),
  singular2ndPerson: Word('кудрявишься', 4),
  singular3rdPerson: Word('кудрявится', 4),
  plural1stPerson: Word('кудрявимся', 4),
  plural2ndPerson: Word('кудрявитесь', 4),
  plural3rdPerson: Word('кудрявятся', 4),
  masculinePast: Word('кудрявился', 4),
  femininePast: Word('кудрявилась', 4),
  neuterPast: Word('кудрявилось', 4),
  pluralPast: Word('кудрявились', 4),
  imperativeInformal: Word('кудрявься', 4),
  imperativeFormal: Word('кудрявьтесь', 4),
  imperfect: [],
};

perfectVerbs.set(кудрявиться.name.text, кудрявиться);

export { кудрявиться };