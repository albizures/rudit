import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const внедряться: PerfectVerb = {
  name: Word('внедряться', 5),
  singular1stPerson: Word('внедряюсь', 5),
  singular2ndPerson: Word('внедряешься', 5),
  singular3rdPerson: Word('внедряется', 5),
  plural1stPerson: Word('внедряемся', 5),
  plural2ndPerson: Word('внедряетесь', 5),
  plural3rdPerson: Word('внедряются', 5),
  masculinePast: Word('внедрялся', 5),
  femininePast: Word('внедрялась', 5),
  neuterPast: Word('внедрялось', 5),
  pluralPast: Word('внедрялись', 5),
  imperativeInformal: Word('внедряйся', 5),
  imperativeFormal: Word('внедряйтесь', 5),
  imperfect: [],
};

perfectVerbs.set(внедряться.name.text, внедряться);

export { внедряться };