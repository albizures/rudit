import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отравляться: PerfectVerb = {
  name: Word('отравляться', 6),
  singular1stPerson: Word('отравляюсь', 6),
  singular2ndPerson: Word('отравляешься', 6),
  singular3rdPerson: Word('отравляется', 6),
  plural1stPerson: Word('отравляемся', 6),
  plural2ndPerson: Word('отравляетесь', 6),
  plural3rdPerson: Word('отравляются', 6),
  masculinePast: Word('отравлялся', 6),
  femininePast: Word('отравлялась', 6),
  neuterPast: Word('отравлялось', 6),
  pluralPast: Word('отравлялись', 6),
  imperativeInformal: Word('отравляйся', 6),
  imperativeFormal: Word('отравляйтесь', 6),
  imperfect: [],
};

perfectVerbs.set(отравляться.name.text, отравляться);

export { отравляться };