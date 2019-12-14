import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const прислоняться: PerfectVerb = {
  name: Word('прислоняться', 7),
  singular1stPerson: Word('прислоняюсь', 7),
  singular2ndPerson: Word('прислоняешься', 7),
  singular3rdPerson: Word('прислоняется', 7),
  plural1stPerson: Word('прислоняемся', 7),
  plural2ndPerson: Word('прислоняетесь', 7),
  plural3rdPerson: Word('прислоняются', 7),
  masculinePast: Word('прислонялся', 7),
  femininePast: Word('прислонялась', 7),
  neuterPast: Word('прислонялось', 7),
  pluralPast: Word('прислонялись', 7),
  imperativeInformal: Word('прислоняйся', 7),
  imperativeFormal: Word('прислоняйтесь', 7),
  imperfect: [],
};

perfectVerbs.set(прислоняться.name.text, прислоняться);

export { прислоняться };