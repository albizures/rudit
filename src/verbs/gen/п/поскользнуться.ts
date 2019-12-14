import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const поскользнуться: PerfectVerb = {
  name: Word('поскользнуться', 9),
  singular1stPerson: Word('поскользнусь', 9),
  singular2ndPerson: Word('поскользнёшься', 9),
  singular3rdPerson: Word('поскользнётся', 9),
  plural1stPerson: Word('поскользнёмся', 9),
  plural2ndPerson: Word('поскользнётесь', 9),
  plural3rdPerson: Word('поскользнутся', 9),
  masculinePast: Word('поскользнулся', 9),
  femininePast: Word('поскользнулась', 9),
  neuterPast: Word('поскользнулось', 9),
  pluralPast: Word('поскользнулись', 9),
  imperativeInformal: Word('поскользнись', 9),
  imperativeFormal: Word('поскользнитесь', 9),
  imperfect: ['поскальзываться'],
};

perfectVerbs.set(поскользнуться.name.text, поскользнуться);

export { поскользнуться };