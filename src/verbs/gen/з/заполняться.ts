import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const заполняться: PerfectVerb = {
  name: Word('заполняться', 6),
  singular1stPerson: Word('заполняюсь', 6),
  singular2ndPerson: Word('заполняешься', 6),
  singular3rdPerson: Word('заполняется', 6),
  plural1stPerson: Word('заполняемся', 6),
  plural2ndPerson: Word('заполняетесь', 6),
  plural3rdPerson: Word('заполняются', 6),
  masculinePast: Word('заполнялся', 6),
  femininePast: Word('заполнялась', 6),
  neuterPast: Word('заполнялось', 6),
  pluralPast: Word('заполнялись', 6),
  imperativeInformal: Word('заполняйся', 6),
  imperativeFormal: Word('заполняйтесь', 6),
  imperfect: [],
};

perfectVerbs.set(заполняться.name.text, заполняться);

export { заполняться };