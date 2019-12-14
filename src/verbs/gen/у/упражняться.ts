import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const упражняться: PerfectVerb = {
  name: Word('упражняться', 6),
  singular1stPerson: Word('упражняюсь', 6),
  singular2ndPerson: Word('упражняешься', 6),
  singular3rdPerson: Word('упражняется', 6),
  plural1stPerson: Word('упражняемся', 6),
  plural2ndPerson: Word('упражняетесь', 6),
  plural3rdPerson: Word('упражняются', 6),
  masculinePast: Word('упражнялся', 6),
  femininePast: Word('упражнялась', 6),
  neuterPast: Word('упражнялось', 6),
  pluralPast: Word('упражнялись', 6),
  imperativeInformal: Word('упражняйся', 6),
  imperativeFormal: Word('упражняйтесь', 6),
  imperfect: [],
};

perfectVerbs.set(упражняться.name.text, упражняться);

export { упражняться };