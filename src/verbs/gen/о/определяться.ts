import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const определяться: PerfectVerb = {
  name: Word('определяться', 7),
  singular1stPerson: Word('определяюсь', 7),
  singular2ndPerson: Word('определяешься', 7),
  singular3rdPerson: Word('определяется', 7),
  plural1stPerson: Word('определяемся', 7),
  plural2ndPerson: Word('определяетесь', 7),
  plural3rdPerson: Word('определяются', 7),
  masculinePast: Word('определялся', 7),
  femininePast: Word('определялась', 7),
  neuterPast: Word('определялось', 7),
  pluralPast: Word('определялись', 7),
  imperativeInformal: Word('определяйся', 7),
  imperativeFormal: Word('определяйтесь', 7),
  imperfect: ['определиться'],
};

perfectVerbs.set(определяться.name.text, определяться);

export { определяться };