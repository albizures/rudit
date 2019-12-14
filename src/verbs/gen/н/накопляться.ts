import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const накопляться: PerfectVerb = {
  name: Word('накопляться', 6),
  singular1stPerson: Word('накопляюсь', 6),
  singular2ndPerson: Word('накопляешься', 6),
  singular3rdPerson: Word('накопляется', 6),
  plural1stPerson: Word('накопляемся', 6),
  plural2ndPerson: Word('накопляетесь', 6),
  plural3rdPerson: Word('накопляются', 6),
  masculinePast: Word('накоплялся', 6),
  femininePast: Word('накоплялась', 6),
  neuterPast: Word('накоплялось', 6),
  pluralPast: Word('накоплялись', 6),
  imperativeInformal: Word('накопляйся', 6),
  imperativeFormal: Word('накопляйтесь', 6),
  imperfect: [],
};

perfectVerbs.set(накопляться.name.text, накопляться);

export { накопляться };