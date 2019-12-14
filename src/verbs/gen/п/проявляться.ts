import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const проявляться: PerfectVerb = {
  name: Word('проявляться', 6),
  singular1stPerson: Word('проявляюсь', 6),
  singular2ndPerson: Word('проявляешься', 6),
  singular3rdPerson: Word('проявляется', 6),
  plural1stPerson: Word('проявляемся', 6),
  plural2ndPerson: Word('проявляетесь', 6),
  plural3rdPerson: Word('проявляются', 6),
  masculinePast: Word('проявлялся', 6),
  femininePast: Word('проявлялась', 6),
  neuterPast: Word('проявлялось', 6),
  pluralPast: Word('проявлялись', 6),
  imperativeInformal: Word('проявляйся', 6),
  imperativeFormal: Word('проявляйтесь', 6),
  imperfect: [],
};

perfectVerbs.set(проявляться.name.text, проявляться);

export { проявляться };