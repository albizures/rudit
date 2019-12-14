import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const приободряться: PerfectVerb = {
  name: Word('приободряться', 8),
  singular1stPerson: Word('приободряюсь', 8),
  singular2ndPerson: Word('приободряешься', 8),
  singular3rdPerson: Word('приободряется', 8),
  plural1stPerson: Word('приободряемся', 8),
  plural2ndPerson: Word('приободряетесь', 8),
  plural3rdPerson: Word('приободряются', 8),
  masculinePast: Word('приободрялся', 8),
  femininePast: Word('приободрялась', 8),
  neuterPast: Word('приободрялось', 8),
  pluralPast: Word('приободрялись', 8),
  imperativeInformal: Word('приободряйся', 8),
  imperativeFormal: Word('приободряйтесь', 8),
  imperfect: [],
};

perfectVerbs.set(приободряться.name.text, приободряться);

export { приободряться };