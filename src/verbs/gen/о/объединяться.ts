import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const объединяться: PerfectVerb = {
  name: Word('объединяться', 7),
  singular1stPerson: Word('объединяюсь', 7),
  singular2ndPerson: Word('объединяешься', 7),
  singular3rdPerson: Word('объединяется', 7),
  plural1stPerson: Word('объединяемся', 7),
  plural2ndPerson: Word('объединяетесь', 7),
  plural3rdPerson: Word('объединяются', 7),
  masculinePast: Word('объединялся', 7),
  femininePast: Word('объединялась', 7),
  neuterPast: Word('объединялось', 7),
  pluralPast: Word('объединялись', 7),
  imperativeInformal: Word('объединяйся', 7),
  imperativeFormal: Word('объединяйтесь', 7),
  imperfect: ['объединиться'],
};

perfectVerbs.set(объединяться.name.text, объединяться);

export { объединяться };