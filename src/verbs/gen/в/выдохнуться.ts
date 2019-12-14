import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const выдохнуться: PerfectVerb = {
  name: Word('выдохнуться', 1),
  singular1stPerson: Word('выдохнусь', 1),
  singular2ndPerson: Word('выдохнешься', 1),
  singular3rdPerson: Word('выдохнется', 1),
  plural1stPerson: Word('выдохнемся', 1),
  plural2ndPerson: Word('выдохнетесь', 1),
  plural3rdPerson: Word('выдохнутся', 1),
  masculinePast: Word('выдохся', 1),
  femininePast: Word('выдохлась', 1),
  neuterPast: Word('выдохлось', 1),
  pluralPast: Word('выдохлись', 1),
  imperativeInformal: Word('выдохнись', 1),
  imperativeFormal: Word('выдохнитесь', 1),
  imperfect: [],
};

perfectVerbs.set(выдохнуться.name.text, выдохнуться);

export { выдохнуться };