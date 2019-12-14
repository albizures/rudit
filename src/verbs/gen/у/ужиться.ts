import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const ужиться: PerfectVerb = {
  name: Word('ужиться', 2),
  singular1stPerson: Word('уживусь', 4),
  singular2ndPerson: Word('уживёшься', 4),
  singular3rdPerson: Word('уживётся', 4),
  plural1stPerson: Word('уживёмся', 4),
  plural2ndPerson: Word('уживётесь', 4),
  plural3rdPerson: Word('уживутся', 4),
  masculinePast: Word('ужился', 2),
  femininePast: Word('ужилась', 4),
  neuterPast: Word('ужилось//ужило'сь', 2),
  pluralPast: Word('ужились//ужили'сь', 2),
  imperativeInformal: Word('уживись', 4),
  imperativeFormal: Word('уживитесь', 4),
  imperfect: [],
};

perfectVerbs.set(ужиться.name.text, ужиться);

export { ужиться };