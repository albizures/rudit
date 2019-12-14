import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const слипнуться: PerfectVerb = {
  name: Word('слипнуться', 2),
  singular1stPerson: Word('слипнусь', 2),
  singular2ndPerson: Word('слипнешься', 2),
  singular3rdPerson: Word('слипнется', 2),
  plural1stPerson: Word('слипнемся', 2),
  plural2ndPerson: Word('слипнетесь', 2),
  plural3rdPerson: Word('слипнутся', 2),
  masculinePast: Word('слипся', 2),
  femininePast: Word('слиплась', 2),
  neuterPast: Word('слиплось', 2),
  pluralPast: Word('слиплись', 2),
  imperativeInformal: Word('слипнись', 2),
  imperativeFormal: Word('слипнитесь', 2),
  imperfect: [],
};

perfectVerbs.set(слипнуться.name.text, слипнуться);

export { слипнуться };