import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const маяться: PerfectVerb = {
  name: Word('маяться', 1),
  singular1stPerson: Word('маюсь', 1),
  singular2ndPerson: Word('маешься', 1),
  singular3rdPerson: Word('мается', 1),
  plural1stPerson: Word('маемся', 1),
  plural2ndPerson: Word('маетесь', 1),
  plural3rdPerson: Word('маются', 1),
  masculinePast: Word('маялся', 1),
  femininePast: Word('маялась', 1),
  neuterPast: Word('маялось', 1),
  pluralPast: Word('маялись', 1),
  imperativeInformal: Word('майся', 1),
  imperativeFormal: Word('майтесь', 1),
  imperfect: [],
};

perfectVerbs.set(маяться.name.text, маяться);

export { маяться };