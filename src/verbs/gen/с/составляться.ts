import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const составляться: PerfectVerb = {
  name: Word('составляться', 7),
  singular1stPerson: Word('составляюсь', 7),
  singular2ndPerson: Word('составляешься', 7),
  singular3rdPerson: Word('составляется', 7),
  plural1stPerson: Word('составляемся', 7),
  plural2ndPerson: Word('составляетесь', 7),
  plural3rdPerson: Word('составляются', 7),
  masculinePast: Word('составлялся', 7),
  femininePast: Word('составлялась', 7),
  neuterPast: Word('составлялось', 7),
  pluralPast: Word('составлялись', 7),
  imperativeInformal: Word('составляйся', 7),
  imperativeFormal: Word('составляйтесь', 7),
  imperfect: [],
};

perfectVerbs.set(составляться.name.text, составляться);

export { составляться };