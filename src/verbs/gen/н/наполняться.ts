import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const наполняться: PerfectVerb = {
  name: Word('наполняться', 6),
  singular1stPerson: Word('наполняюсь', 6),
  singular2ndPerson: Word('наполняешься', 6),
  singular3rdPerson: Word('наполняется', 6),
  plural1stPerson: Word('наполняемся', 6),
  plural2ndPerson: Word('наполняетесь', 6),
  plural3rdPerson: Word('наполняются', 6),
  masculinePast: Word('наполнялся', 6),
  femininePast: Word('наполнялась', 6),
  neuterPast: Word('наполнялось', 6),
  pluralPast: Word('наполнялись', 6),
  imperativeInformal: Word('наполняйся', 6),
  imperativeFormal: Word('наполняйтесь', 6),
  imperfect: [],
};

perfectVerbs.set(наполняться.name.text, наполняться);

export { наполняться };