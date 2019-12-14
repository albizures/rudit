import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const сбыться: PerfectVerb = {
  name: Word('сбыться', 2),
  singular1stPerson: Word('сбудусь', 2),
  singular2ndPerson: Word('сбудешься', 2),
  singular3rdPerson: Word('сбудется', 2),
  plural1stPerson: Word('сбудемся', 2),
  plural2ndPerson: Word('сбудетесь', 2),
  plural3rdPerson: Word('сбудутся', 2),
  masculinePast: Word('сбылся', 2),
  femininePast: Word('сбылась', 4),
  neuterPast: Word('сбылось//сбыло'сь', 2),
  pluralPast: Word('сбылись//сбыли'сь', 2),
  imperativeInformal: Word('сбудься', 2),
  imperativeFormal: Word('сбудьтесь', 2),
  imperfect: [],
};

perfectVerbs.set(сбыться.name.text, сбыться);

export { сбыться };