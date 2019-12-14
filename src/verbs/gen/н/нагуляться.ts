import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const нагуляться: PerfectVerb = {
  name: Word('нагуляться', 5),
  singular1stPerson: Word('нагуляюсь', 5),
  singular2ndPerson: Word('нагуляешься', 5),
  singular3rdPerson: Word('нагуляется', 5),
  plural1stPerson: Word('нагуляемся', 5),
  plural2ndPerson: Word('нагуляетесь', 5),
  plural3rdPerson: Word('нагуляются', 5),
  masculinePast: Word('нагулялся', 5),
  femininePast: Word('нагулялась', 5),
  neuterPast: Word('нагулялось', 5),
  pluralPast: Word('нагулялись', 5),
  imperativeInformal: Word('нагуляйся', 5),
  imperativeFormal: Word('нагуляйтесь', 5),
  imperfect: [],
};

perfectVerbs.set(нагуляться.name.text, нагуляться);

export { нагуляться };