import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const растеряться: PerfectVerb = {
  name: Word('растеряться', 6),
  singular1stPerson: Word('растеряюсь', 6),
  singular2ndPerson: Word('растеряешься', 6),
  singular3rdPerson: Word('растеряется', 6),
  plural1stPerson: Word('растеряемся', 6),
  plural2ndPerson: Word('растеряетесь', 6),
  plural3rdPerson: Word('растеряются', 6),
  masculinePast: Word('растерялся', 6),
  femininePast: Word('растерялась', 6),
  neuterPast: Word('растерялось', 6),
  pluralPast: Word('растерялись', 6),
  imperativeInformal: Word('растеряйся', 6),
  imperativeFormal: Word('растеряйтесь', 6),
  imperfect: [],
};

perfectVerbs.set(растеряться.name.text, растеряться);

export { растеряться };