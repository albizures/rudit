import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const пополняться: PerfectVerb = {
  name: Word('пополняться', 6),
  singular1stPerson: Word('пополняюсь', 6),
  singular2ndPerson: Word('пополняешься', 6),
  singular3rdPerson: Word('пополняется', 6),
  plural1stPerson: Word('пополняемся', 6),
  plural2ndPerson: Word('пополняетесь', 6),
  plural3rdPerson: Word('пополняются', 6),
  masculinePast: Word('пополнялся', 6),
  femininePast: Word('пополнялась', 6),
  neuterPast: Word('пополнялось', 6),
  pluralPast: Word('пополнялись', 6),
  imperativeInformal: Word('пополняйся', 6),
  imperativeFormal: Word('пополняйтесь', 6),
  imperfect: [],
};

perfectVerbs.set(пополняться.name.text, пополняться);

export { пополняться };