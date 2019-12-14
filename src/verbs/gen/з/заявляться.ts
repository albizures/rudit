import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const заявляться: PerfectVerb = {
  name: Word('заявляться', 5),
  singular1stPerson: Word('заявляюсь', 5),
  singular2ndPerson: Word('заявляешься', 5),
  singular3rdPerson: Word('заявляется', 5),
  plural1stPerson: Word('заявляемся', 5),
  plural2ndPerson: Word('заявляетесь', 5),
  plural3rdPerson: Word('заявляются', 5),
  masculinePast: Word('заявлялся', 5),
  femininePast: Word('заявлялась', 5),
  neuterPast: Word('заявлялось', 5),
  pluralPast: Word('заявлялись', 5),
  imperativeInformal: Word('заявляйся', 5),
  imperativeFormal: Word('заявляйтесь', 5),
  imperfect: [],
};

perfectVerbs.set(заявляться.name.text, заявляться);

export { заявляться };