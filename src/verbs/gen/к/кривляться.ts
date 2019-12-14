import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const кривляться: PerfectVerb = {
  name: Word('кривляться', 5),
  singular1stPerson: Word('кривляюсь', 5),
  singular2ndPerson: Word('кривляешься', 5),
  singular3rdPerson: Word('кривляется', 5),
  plural1stPerson: Word('кривляемся', 5),
  plural2ndPerson: Word('кривляетесь', 5),
  plural3rdPerson: Word('кривляются', 5),
  masculinePast: Word('кривлялся', 5),
  femininePast: Word('кривлялась', 5),
  neuterPast: Word('кривлялось', 5),
  pluralPast: Word('кривлялись', 5),
  imperativeInformal: Word('кривляйся', 5),
  imperativeFormal: Word('кривляйтесь', 5),
  imperfect: [],
};

perfectVerbs.set(кривляться.name.text, кривляться);

export { кривляться };