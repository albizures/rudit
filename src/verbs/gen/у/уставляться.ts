import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const уставляться: PerfectVerb = {
  name: Word('уставляться', 6),
  singular1stPerson: Word('уставляюсь', 6),
  singular2ndPerson: Word('уставляешься', 6),
  singular3rdPerson: Word('уставляется', 6),
  plural1stPerson: Word('уставляемся', 6),
  plural2ndPerson: Word('уставляетесь', 6),
  plural3rdPerson: Word('уставляются', 6),
  masculinePast: Word('уставлялся', 6),
  femininePast: Word('уставлялась', 6),
  neuterPast: Word('уставлялось', 6),
  pluralPast: Word('уставлялись', 6),
  imperativeInformal: Word('уставляйся', 6),
  imperativeFormal: Word('уставляйтесь', 6),
  imperfect: [],
};

perfectVerbs.set(уставляться.name.text, уставляться);

export { уставляться };