import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const гоняться: PerfectVerb = {
  name: Word('гоняться', 3),
  singular1stPerson: Word('гоняюсь', 3),
  singular2ndPerson: Word('гоняешься', 3),
  singular3rdPerson: Word('гоняется', 3),
  plural1stPerson: Word('гоняемся', 3),
  plural2ndPerson: Word('гоняетесь', 3),
  plural3rdPerson: Word('гоняются', 3),
  masculinePast: Word('гонялся', 3),
  femininePast: Word('гонялась', 3),
  neuterPast: Word('гонялось', 3),
  pluralPast: Word('гонялись', 3),
  imperativeInformal: Word('гоняйся', 3),
  imperativeFormal: Word('гоняйтесь', 3),
  imperfect: [],
};

perfectVerbs.set(гоняться.name.text, гоняться);

export { гоняться };