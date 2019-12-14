import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const присоединяться: PerfectVerb = {
  name: Word('присоединяться', 9),
  singular1stPerson: Word('присоединяюсь', 9),
  singular2ndPerson: Word('присоединяешься', 9),
  singular3rdPerson: Word('присоединяется', 9),
  plural1stPerson: Word('присоединяемся', 9),
  plural2ndPerson: Word('присоединяетесь', 9),
  plural3rdPerson: Word('присоединяются', 9),
  masculinePast: Word('присоединялся', 9),
  femininePast: Word('присоединялась', 9),
  neuterPast: Word('присоединялось', 9),
  pluralPast: Word('присоединялись', 9),
  imperativeInformal: Word('присоединяйся', 9),
  imperativeFormal: Word('присоединяйтесь', 9),
  imperfect: ['присоединиться'],
};

perfectVerbs.set(присоединяться.name.text, присоединяться);

export { присоединяться };