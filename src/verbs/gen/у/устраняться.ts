import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const устраняться: PerfectVerb = {
  name: Word('устраняться', 6),
  singular1stPerson: Word('устраняюсь', 6),
  singular2ndPerson: Word('устраняешься', 6),
  singular3rdPerson: Word('устраняется', 6),
  plural1stPerson: Word('устраняемся', 6),
  plural2ndPerson: Word('устраняетесь', 6),
  plural3rdPerson: Word('устраняются', 6),
  masculinePast: Word('устранялся', 6),
  femininePast: Word('устранялась', 6),
  neuterPast: Word('устранялось', 6),
  pluralPast: Word('устранялись', 6),
  imperativeInformal: Word('устраняйся', 6),
  imperativeFormal: Word('устраняйтесь', 6),
  imperfect: [],
};

perfectVerbs.set(устраняться.name.text, устраняться);

export { устраняться };