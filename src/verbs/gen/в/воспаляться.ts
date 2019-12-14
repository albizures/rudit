import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const воспаляться: PerfectVerb = {
  name: Word('воспаляться', 6),
  singular1stPerson: Word('воспаляюсь', 6),
  singular2ndPerson: Word('воспаляешься', 6),
  singular3rdPerson: Word('воспаляется', 6),
  plural1stPerson: Word('воспаляемся', 6),
  plural2ndPerson: Word('воспаляетесь', 6),
  plural3rdPerson: Word('воспаляются', 6),
  masculinePast: Word('воспалялся', 6),
  femininePast: Word('воспалялась', 6),
  neuterPast: Word('воспалялось', 6),
  pluralPast: Word('воспалялись', 6),
  imperativeInformal: Word('воспаляйся', 6),
  imperativeFormal: Word('воспаляйтесь', 6),
  imperfect: [],
};

perfectVerbs.set(воспаляться.name.text, воспаляться);

export { воспаляться };