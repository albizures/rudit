import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const изменяться: PerfectVerb = {
  name: Word('изменяться', 5),
  singular1stPerson: Word('изменяюсь', 5),
  singular2ndPerson: Word('изменяешься', 5),
  singular3rdPerson: Word('изменяется', 5),
  plural1stPerson: Word('изменяемся', 5),
  plural2ndPerson: Word('изменяетесь', 5),
  plural3rdPerson: Word('изменяются', 5),
  masculinePast: Word('изменялся', 5),
  femininePast: Word('изменялась', 5),
  neuterPast: Word('изменялось', 5),
  pluralPast: Word('изменялись', 5),
  imperativeInformal: Word('изменяйся', 5),
  imperativeFormal: Word('изменяйтесь', 5),
  imperfect: ['измениться'],
};

perfectVerbs.set(изменяться.name.text, изменяться);

export { изменяться };