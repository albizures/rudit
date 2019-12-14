import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const приземляться: PerfectVerb = {
  name: Word('приземляться', 7),
  singular1stPerson: Word('приземляюсь', 7),
  singular2ndPerson: Word('приземляешься', 7),
  singular3rdPerson: Word('приземляется', 7),
  plural1stPerson: Word('приземляемся', 7),
  plural2ndPerson: Word('приземляетесь', 7),
  plural3rdPerson: Word('приземляются', 7),
  masculinePast: Word('приземлялся', 7),
  femininePast: Word('приземлялась', 7),
  neuterPast: Word('приземлялось', 7),
  pluralPast: Word('приземлялись', 7),
  imperativeInformal: Word('приземляйся', 7),
  imperativeFormal: Word('приземляйтесь', 7),
  imperfect: ['приземлиться'],
};

perfectVerbs.set(приземляться.name.text, приземляться);

export { приземляться };