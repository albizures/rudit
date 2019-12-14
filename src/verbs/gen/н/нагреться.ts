import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const нагреться: PerfectVerb = {
  name: Word('нагреться', 4),
  singular1stPerson: Word('нагреюсь', 4),
  singular2ndPerson: Word('нагреешься', 4),
  singular3rdPerson: Word('нагреется', 4),
  plural1stPerson: Word('нагреемся', 4),
  plural2ndPerson: Word('нагреетесь', 4),
  plural3rdPerson: Word('нагреются', 4),
  masculinePast: Word('нагрелся', 4),
  femininePast: Word('нагрелась', 4),
  neuterPast: Word('нагрелось', 4),
  pluralPast: Word('нагрелись', 4),
  imperativeInformal: Word('нагрейся', 4),
  imperativeFormal: Word('нагрейтесь', 4),
  imperfect: [],
};

perfectVerbs.set(нагреться.name.text, нагреться);

export { нагреться };