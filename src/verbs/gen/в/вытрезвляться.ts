import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вытрезвляться: PerfectVerb = {
  name: Word('вытрезвляться', 8),
  singular1stPerson: Word('вытрезвляюсь', 8),
  singular2ndPerson: Word('вытрезвляешься', 8),
  singular3rdPerson: Word('вытрезвляется', 8),
  plural1stPerson: Word('вытрезвляемся', 8),
  plural2ndPerson: Word('вытрезвляетесь', 8),
  plural3rdPerson: Word('вытрезвляются', 8),
  masculinePast: Word('вытрезвлялся', 8),
  femininePast: Word('вытрезвлялась', 8),
  neuterPast: Word('вытрезвлялось', 8),
  pluralPast: Word('вытрезвлялись', 8),
  imperativeInformal: Word('вытрезвляйся', 8),
  imperativeFormal: Word('вытрезвляйтесь', 8),
  imperfect: [],
};

perfectVerbs.set(вытрезвляться.name.text, вытрезвляться);

export { вытрезвляться };