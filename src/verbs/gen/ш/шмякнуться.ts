import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const шмякнуться: PerfectVerb = {
  name: Word('шмякнуться', 2),
  singular1stPerson: Word('шмякнусь', 2),
  singular2ndPerson: Word('шмякнешься', 2),
  singular3rdPerson: Word('шмякнется', 2),
  plural1stPerson: Word('шмякнемся', 2),
  plural2ndPerson: Word('шмякнетесь', 2),
  plural3rdPerson: Word('шмякнутся', 2),
  masculinePast: Word('шмякнулся', 2),
  femininePast: Word('шмякнулась', 2),
  neuterPast: Word('шмякнулось', 2),
  pluralPast: Word('шмякнулись', 2),
  imperativeInformal: Word('шмякнись', 2),
  imperativeFormal: Word('шмякнитесь', 2),
  imperfect: [],
};

perfectVerbs.set(шмякнуться.name.text, шмякнуться);

export { шмякнуться };