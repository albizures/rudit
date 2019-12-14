import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const рассохнуться: PerfectVerb = {
  name: Word('рассохнуться', 4),
  singular1stPerson: Word('рассохнусь', 4),
  singular2ndPerson: Word('рассохнешься', 4),
  singular3rdPerson: Word('рассохнется', 4),
  plural1stPerson: Word('рассохнемся', 4),
  plural2ndPerson: Word('рассохнетесь', 4),
  plural3rdPerson: Word('рассохнутся', 4),
  masculinePast: Word('рассохся', 4),
  femininePast: Word('рассохлась', 4),
  neuterPast: Word('рассохлось', 4),
  pluralPast: Word('рассохлись', 4),
  imperativeInformal: Word('рассохнись', 4),
  imperativeFormal: Word('рассохнитесь', 4),
  imperfect: [],
};

perfectVerbs.set(рассохнуться.name.text, рассохнуться);

export { рассохнуться };