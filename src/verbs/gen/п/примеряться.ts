import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const примеряться: PerfectVerb = {
  name: Word('примеряться', 6),
  singular1stPerson: Word('примеряюсь', 6),
  singular2ndPerson: Word('примеряешься', 6),
  singular3rdPerson: Word('примеряется', 6),
  plural1stPerson: Word('примеряемся', 6),
  plural2ndPerson: Word('примеряетесь', 6),
  plural3rdPerson: Word('примеряются', 6),
  masculinePast: Word('примерялся', 6),
  femininePast: Word('примерялась', 6),
  neuterPast: Word('примерялось', 6),
  pluralPast: Word('примерялись', 6),
  imperativeInformal: Word('примеряйся', 6),
  imperativeFormal: Word('примеряйтесь', 6),
  imperfect: [],
};

perfectVerbs.set(примеряться.name.text, примеряться);

export { примеряться };