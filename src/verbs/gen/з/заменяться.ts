import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const заменяться: PerfectVerb = {
  name: Word('заменяться', 5),
  singular1stPerson: Word('заменяюсь', 5),
  singular2ndPerson: Word('заменяешься', 5),
  singular3rdPerson: Word('заменяется', 5),
  plural1stPerson: Word('заменяемся', 5),
  plural2ndPerson: Word('заменяетесь', 5),
  plural3rdPerson: Word('заменяются', 5),
  masculinePast: Word('заменялся', 5),
  femininePast: Word('заменялась', 5),
  neuterPast: Word('заменялось', 5),
  pluralPast: Word('заменялись', 5),
  imperativeInformal: Word('заменяйся', 5),
  imperativeFormal: Word('заменяйтесь', 5),
  imperfect: [],
};

perfectVerbs.set(заменяться.name.text, заменяться);

export { заменяться };