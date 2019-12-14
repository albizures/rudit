import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const извиняться: PerfectVerb = {
  name: Word('извиняться', 5),
  singular1stPerson: Word('извиняюсь', 5),
  singular2ndPerson: Word('извиняешься', 5),
  singular3rdPerson: Word('извиняется', 5),
  plural1stPerson: Word('извиняемся', 5),
  plural2ndPerson: Word('извиняетесь', 5),
  plural3rdPerson: Word('извиняются', 5),
  masculinePast: Word('извинялся', 5),
  femininePast: Word('извинялась', 5),
  neuterPast: Word('извинялось', 5),
  pluralPast: Word('извинялись', 5),
  imperativeInformal: Word('извиняйся', 5),
  imperativeFormal: Word('извиняйтесь', 5),
  imperfect: ['извиниться'],
};

perfectVerbs.set(извиняться.name.text, извиняться);

export { извиняться };