import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const заостряться: PerfectVerb = {
  name: Word('заостряться', 6),
  singular1stPerson: Word('заостряюсь', 6),
  singular2ndPerson: Word('заостряешься', 6),
  singular3rdPerson: Word('заостряется', 6),
  plural1stPerson: Word('заостряемся', 6),
  plural2ndPerson: Word('заостряетесь', 6),
  plural3rdPerson: Word('заостряются', 6),
  masculinePast: Word('заострялся', 6),
  femininePast: Word('заострялась', 6),
  neuterPast: Word('заострялось', 6),
  pluralPast: Word('заострялись', 6),
  imperativeInformal: Word('заостряйся', 6),
  imperativeFormal: Word('заостряйтесь', 6),
  imperfect: [],
};

perfectVerbs.set(заостряться.name.text, заостряться);

export { заостряться };