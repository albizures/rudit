import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const ссохнуться: PerfectVerb = {
  name: Word('ссохнуться', 2),
  singular1stPerson: Word('ссохнусь', 2),
  singular2ndPerson: Word('ссохнешься', 2),
  singular3rdPerson: Word('ссохнется', 2),
  plural1stPerson: Word('ссохнемся', 2),
  plural2ndPerson: Word('ссохнетесь', 2),
  plural3rdPerson: Word('ссохнутся', 2),
  masculinePast: Word('ссохся', 2),
  femininePast: Word('ссохлась', 2),
  neuterPast: Word('ссохлось', 2),
  pluralPast: Word('ссохлись', 2),
  imperativeInformal: Word('ссохнись', 2),
  imperativeFormal: Word('ссохнитесь', 2),
  imperfect: [],
};

perfectVerbs.set(ссохнуться.name.text, ссохнуться);

export { ссохнуться };