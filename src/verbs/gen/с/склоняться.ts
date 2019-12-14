import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const склоняться: PerfectVerb = {
  name: Word('склоняться', 5),
  singular1stPerson: Word('склоняюсь', 5),
  singular2ndPerson: Word('склоняешься', 5),
  singular3rdPerson: Word('склоняется', 5),
  plural1stPerson: Word('склоняемся', 5),
  plural2ndPerson: Word('склоняетесь', 5),
  plural3rdPerson: Word('склоняются', 5),
  masculinePast: Word('склонялся', 5),
  femininePast: Word('склонялась', 5),
  neuterPast: Word('склонялось', 5),
  pluralPast: Word('склонялись', 5),
  imperativeInformal: Word('склоняйся', 5),
  imperativeFormal: Word('склоняйтесь', 5),
  imperfect: [],
};

perfectVerbs.set(склоняться.name.text, склоняться);

export { склоняться };