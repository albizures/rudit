import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const наклоняться: PerfectVerb = {
  name: Word('наклоняться', 6),
  singular1stPerson: Word('наклоняюсь', 6),
  singular2ndPerson: Word('наклоняешься', 6),
  singular3rdPerson: Word('наклоняется', 6),
  plural1stPerson: Word('наклоняемся', 6),
  plural2ndPerson: Word('наклоняетесь', 6),
  plural3rdPerson: Word('наклоняются', 6),
  masculinePast: Word('наклонялся', 6),
  femininePast: Word('наклонялась', 6),
  neuterPast: Word('наклонялось', 6),
  pluralPast: Word('наклонялись', 6),
  imperativeInformal: Word('наклоняйся', 6),
  imperativeFormal: Word('наклоняйтесь', 6),
  imperfect: [],
};

perfectVerbs.set(наклоняться.name.text, наклоняться);

export { наклоняться };