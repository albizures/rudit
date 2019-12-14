import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отрезвляться: PerfectVerb = {
  name: Word('отрезвляться', 7),
  singular1stPerson: Word('отрезвляюсь', 7),
  singular2ndPerson: Word('отрезвляешься', 7),
  singular3rdPerson: Word('отрезвляется', 7),
  plural1stPerson: Word('отрезвляемся', 7),
  plural2ndPerson: Word('отрезвляетесь', 7),
  plural3rdPerson: Word('отрезвляются', 7),
  masculinePast: Word('отрезвлялся', 7),
  femininePast: Word('отрезвлялась', 7),
  neuterPast: Word('отрезвлялось', 7),
  pluralPast: Word('отрезвлялись', 7),
  imperativeInformal: Word('отрезвляйся', 7),
  imperativeFormal: Word('отрезвляйтесь', 7),
  imperfect: [],
};

perfectVerbs.set(отрезвляться.name.text, отрезвляться);

export { отрезвляться };