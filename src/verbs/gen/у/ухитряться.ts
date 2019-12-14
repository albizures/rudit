import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const ухитряться: PerfectVerb = {
  name: Word('ухитряться', 5),
  singular1stPerson: Word('ухитряюсь', 5),
  singular2ndPerson: Word('ухитряешься', 5),
  singular3rdPerson: Word('ухитряется', 5),
  plural1stPerson: Word('ухитряемся', 5),
  plural2ndPerson: Word('ухитряетесь', 5),
  plural3rdPerson: Word('ухитряются', 5),
  masculinePast: Word('ухитрялся', 5),
  femininePast: Word('ухитрялась', 5),
  neuterPast: Word('ухитрялось', 5),
  pluralPast: Word('ухитрялись', 5),
  imperativeInformal: Word('ухитряйся', 5),
  imperativeFormal: Word('ухитряйтесь', 5),
  imperfect: [],
};

perfectVerbs.set(ухитряться.name.text, ухитряться);

export { ухитряться };