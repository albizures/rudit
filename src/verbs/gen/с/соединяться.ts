import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const соединяться: PerfectVerb = {
  name: Word('соединяться', 6),
  singular1stPerson: Word('соединяюсь', 6),
  singular2ndPerson: Word('соединяешься', 6),
  singular3rdPerson: Word('соединяется', 6),
  plural1stPerson: Word('соединяемся', 6),
  plural2ndPerson: Word('соединяетесь', 6),
  plural3rdPerson: Word('соединяются', 6),
  masculinePast: Word('соединялся', 6),
  femininePast: Word('соединялась', 6),
  neuterPast: Word('соединялось', 6),
  pluralPast: Word('соединялись', 6),
  imperativeInformal: Word('соединяйся', 6),
  imperativeFormal: Word('соединяйтесь', 6),
  imperfect: ['соединиться'],
};

perfectVerbs.set(соединяться.name.text, соединяться);

export { соединяться };